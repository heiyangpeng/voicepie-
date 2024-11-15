<!-- components/Carousel.vue -->
<template>
  <!-- 轮播图最外层容器 -->
  <div
    class="carousel-container"
    @mouseenter="showControls = true"
    @mouseleave="showControls = false"
  >
    <!-- 轮播图包装器，控制整体尺寸和圆角效果 -->
    <div class="carousel-wrapper">
      <!-- 轮播图主体，实现图片滑动效果 -->
      <div
        class="carousel"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <!-- 遍历渲染每个图片 -->
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-slide"
        >
          <div class="image-container">
            <img :src="image.url" :alt="image.alt" @load="onImageLoad(index)" />
          </div>
        </div>
      </div>
      <!-- 左右控制按钮 -->
      <div
        class="carousel-controls"
        :class="{ 'controls-visible': showControls }"
      >
        <button
          class="carousel-button prev"
          @click="prev"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>
        <button
          class="carousel-button next"
          @click="next"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 18l6-6-6-6"
            />
          </svg>
        </button>
      </div>
      <!-- 底部导航圆点 -->
      <div class="carousel-dots">
        <span
          v-for="(_, index) in images"
          :key="index"
          :class="['dot', { active: currentIndex === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 定义组件属性
const props = defineProps({
  // 轮播图片数组
  images: {
    type: Array,
    required: true
  },
  // 是否自动播放
  autoPlay: {
    type: Boolean,
    default: true
  },
  // 自动播放间隔时间（毫秒）
  interval: {
    type: Number,
    default: 3000
  },
  // 轮播图高度
  height: {
    type: String,
    default: '400px'
  }
})

// 当前显示的图片索引
const currentIndex = ref(0)
// 控制按钮显示状态
const showControls = ref(false)
// 已加载图片记录
const loadedImages = ref(new Set())
// 自动播放定时器
let timer = null

// 图片加载完成回调
const onImageLoad = (index) => {
  loadedImages.value.add(index)
}

// 下一张图片
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// 上一张图片
const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

// 跳转到指定图片
const goToSlide = (index) => {
  currentIndex.value = index
}

// 开始自动播放
const startTimer = () => {
  if (props.autoPlay) {
    timer = setInterval(next, props.interval)
  }
}

// 停止自动播放
const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
  }
}

// 组件挂载时启动自动播放
onMounted(() => {
  startTimer()
})

// 组件卸载时清理定时器
onUnmounted(() => {
  stopTimer()
})
</script>

<!-- components/Carousel.vue -->
<!-- 前面的 template 部分保持不变，主要修改 style 部分 -->

<style scoped>
/* 最外层容器样式 */
.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 0; /* 移除padding */
  aspect-ratio: 16 / 9; /* 添加固定宽高比 */
}

/* 轮播图包装器样式 */
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%; /* 改为100%以适应容器 */
  overflow: hidden;
  border-radius: 8px; /* 稍微减小圆角 */
  background: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 轮播图主体样式 */
.carousel {
  position: relative;
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

/* 单个轮播项样式 */
.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 图片容器样式 */
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: white; /* 添加白色背景 */
}

/* 图片样式 */
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
}

/* 控制按钮容器样式 */
.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-controls.controls-visible {
  opacity: 1;
}

/* 控制按钮样式 */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  transition: all 0.3s ease;
  padding: 6px;
  color: #666;
  opacity: 0.7;
}

/* 控制按钮悬停效果 */
.controls-visible .carousel-button:hover {
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  opacity: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* 底部导航圆点样式 */
.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  z-index: 1;
}

/* 导航圆点样式 */
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* 响应式样式 */
@media (max-width: 768px) {
  .carousel-container {
    aspect-ratio: 4 / 3; /* 移动端使用更方正的比例 */
  }

  .carousel-button {
    width: 32px;
    height: 32px;
  }

  .prev {
    left: 8px;
  }

  .next {
    right: 8px;
  }
}
</style>
