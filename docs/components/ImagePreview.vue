<template>
  <div class="image-preview">
    <img
      :src="props.src"
      :alt="props.alt"
      @click="openPreview"
      class="thumbnail"
    />
    <div v-if="isPreview" class="preview-overlay" @click="handlePreviewClick">
      <div
        class="preview-container"
        ref="container"
        @wheel.prevent="handleZoom"
      >
        <img
          :src="props.src"
          :alt="props.alt"
          ref="previewImage"
          :class="['preview-image', { 'can-move': canMove }]"
          :style="{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`
          }"
          @touchstart.prevent="handleTouchStart"
          @touchmove.prevent="handleTouchMove"
          @touchend="handleTouchEnd"
          @touchcancel="handleTouchEnd"
          @mousedown.prevent="handleMouseDown"
          @click.stop="handlePreviewClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const isPreview = ref(false)
const scale = ref(1)
const container = ref(null)
const previewImage = ref(null)
const startTouch = ref({ x: 0, y: 0, time: 0, touches: null })
const position = ref({ x: 0, y: 0 })
const lastPosition = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const moveDistance = ref(0)
let initialScale = 1

const canMove = computed(() => scale.value > 1)

function preventDefault(e) {
  e.preventDefault()
}

// 计算边界范围
const getBoundary = () => {
  if (!previewImage.value) return { maxX: 0, maxY: 0 }

  const rect = previewImage.value.getBoundingClientRect()
  const parentRect = previewImage.value.parentElement.getBoundingClientRect()

  const maxX = Math.max(
    0,
    (rect.width * scale.value - parentRect.width) / 2 / scale.value
  )
  const maxY = Math.max(
    0,
    (rect.height * scale.value - parentRect.height) / 2 / scale.value
  )

  return { maxX, maxY }
}

// 确保位置在边界内
const constrainPosition = (pos) => {
  const { maxX, maxY } = getBoundary()
  return {
    x: Math.max(-maxX, Math.min(maxX, pos.x)),
    y: Math.max(-maxY, Math.min(maxY, pos.y))
  }
}

const handleZoom = (e) => {
  if (!isPreview.value) return

  e.preventDefault()
  const delta = e.deltaY > 0 ? -0.2 : 0.2
  const newScale = Math.max(1, Math.min(4, scale.value + delta))

  if (newScale !== scale.value) {
    // 保存当前鼠标位置相对于图片的比例
    const rect = previewImage.value.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width
    const mouseY = (e.clientY - rect.top) / rect.height

    const oldScale = scale.value
    scale.value = newScale

    // 根据鼠标位置调整图片位置
    if (newScale > 1) {
      const scaleRatio = newScale / oldScale
      const newPosition = {
        x:
          position.value.x -
          ((mouseX - 0.5) * rect.width * (scaleRatio - 1)) / newScale,
        y:
          position.value.y -
          ((mouseY - 0.5) * rect.height * (scaleRatio - 1)) / newScale
      }
      position.value = constrainPosition(newPosition)
    } else {
      resetPosition()
    }
  }
}

const resetPosition = () => {
  scale.value = 1
  position.value = { x: 0, y: 0 }
  lastPosition.value = { x: 0, y: 0 }
  moveDistance.value = 0
}

const handleTouchMove = (e) => {
  if (e.touches.length === 2 && startTouch.value.distance) {
    // 处理双指缩放
    const touch1 = e.touches[0]
    const touch2 = e.touches[1]

    // 修正距离计算
    const currentDistance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    )

    // 计算缩放中心点
    const centerX = (touch1.clientX + touch2.clientX) / 2
    const centerY = (touch1.clientY + touch2.clientY) / 2

    // 获取图片相对于视窗的位置
    const rect = previewImage.value.getBoundingClientRect()

    // 计算触摸中心点相对于图片的位置比例
    const touchCenterX = (centerX - rect.left) / rect.width
    const touchCenterY = (centerY - rect.top) / rect.height

    // 计算新的缩放值
    const prevScale = scale.value
    const newScale = Math.max(
      1,
      Math.min(4, initialScale * (currentDistance / startTouch.value.distance))
    )

    // 更新缩放值
    scale.value = newScale

    if (newScale > 1) {
      // 计算位置调整
      const scaleRatio = newScale / prevScale
      const deltaX = rect.width * (scaleRatio - 1) * (touchCenterX - 0.5)
      const deltaY = rect.height * (scaleRatio - 1) * (touchCenterY - 0.5)

      // 更新位置
      position.value = constrainPosition({
        x: position.value.x - deltaX / newScale,
        y: position.value.y - deltaY / newScale
      })
    } else {
      // 如果缩放回到 1，重置位置
      position.value = { x: 0, y: 0 }
    }

    isDragging.value = true
    e.preventDefault()
  } else if (canMove.value && e.touches.length === 1) {
    // 单指移动的逻辑保持不变
    const deltaX = e.touches[0].clientX - startTouch.value.x
    const deltaY = e.touches[0].clientY - startTouch.value.y
    moveDistance.value = Math.hypot(deltaX, deltaY)

    if (moveDistance.value > 5) {
      isDragging.value = true
      position.value = constrainPosition({
        x: lastPosition.value.x + deltaX / scale.value,
        y: lastPosition.value.y + deltaY / scale.value
      })
    }
  }
}

// 同时修改 handleTouchStart，增加初始双指距离的计算精度
const handleTouchStart = (e) => {
  startTouch.value = {
    x: e.touches[0].clientX,
    y: e.touches[0].clientY,
    time: Date.now(),
    touches: Array.from(e.touches)
  }
  lastPosition.value = { ...position.value }
  moveDistance.value = 0
  isDragging.value = false

  if (e.touches.length === 2) {
    const touch1 = e.touches[0]
    const touch2 = e.touches[1]
    startTouch.value.distance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    )
    initialScale = scale.value

    // 保存初始触摸点的中心位置
    startTouch.value.centerX = (touch1.clientX + touch2.clientX) / 2
    startTouch.value.centerY = (touch1.clientY + touch2.clientY) / 2
  }
}

const handleTouchEnd = () => {
  if (scale.value === 1) {
    resetPosition()
  } else {
    lastPosition.value = { ...position.value }
  }

  const touchDuration = Date.now() - startTouch.value.time
  if (moveDistance.value < 5 && touchDuration < 200) {
    handlePreviewClick()
  }

  isDragging.value = false
  startTouch.value = { x: 0, y: 0, time: 0, touches: null }
}

// 处理桌面端鼠标拖动
const handleMouseDown = (e) => {
  if (!canMove.value) return

  startTouch.value = {
    x: e.clientX,
    y: e.clientY,
    time: Date.now()
  }
  lastPosition.value = { ...position.value }
  moveDistance.value = 0
  isDragging.value = false

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startTouch.value.x
    const deltaY = e.clientY - startTouch.value.y
    moveDistance.value = Math.hypot(deltaX, deltaY)

    if (moveDistance.value > 5) {
      isDragging.value = true
      position.value = constrainPosition({
        x: lastPosition.value.x + deltaX / scale.value,
        y: lastPosition.value.y + deltaY / scale.value
      })
    }
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)

    if (scale.value > 1) {
      lastPosition.value = { ...position.value }
    }

    const clickDuration = Date.now() - startTouch.value.time
    if (moveDistance.value < 5 && clickDuration < 200) {
      handlePreviewClick()
    }

    isDragging.value = false
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const openPreview = () => {
  isPreview.value = true
  scale.value = 1
  resetPosition()
  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', preventDefault, { passive: false })
}

const handlePreviewClick = () => {
  if (!isDragging.value) {
    closePreview()
  }
}

const closePreview = () => {
  isPreview.value = false
  resetPosition()
  document.body.style.overflow = ''
  document.removeEventListener('touchmove', preventDefault)

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    const viewport = document.querySelector('meta[name=viewport]')
    if (viewport) {
      viewport.content =
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    }
  }
}

onMounted(() => {
  if (!document.querySelector('meta[name=viewport]')) {
    const meta = document.createElement('meta')
    meta.name = 'viewport'
    meta.content =
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    document.head.appendChild(meta)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('touchmove', preventDefault)
})
</script>

<style scoped>
.image-preview {
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
}

.thumbnail {
  cursor: zoom-in;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.preview-image {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  transform-origin: center;
  transition: transform 0.2s ease-out;
  user-select: none;
  -webkit-user-select: none;
  cursor: zoom-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.preview-image.can-move {
  cursor: move;
}

@media (max-width: 768px) {
  .preview-image {
    max-width: 98%;
    max-height: 98vh;
  }
}
</style>
