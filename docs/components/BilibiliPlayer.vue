<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  bvid: {
    type: String,
    required: true
  }
})

const playerContainer = ref(null)

onMounted(() => {
  if (playerContainer.value) {
    const iframe = document.createElement('iframe')
    iframe.src = `//player.bilibili.com/player.html?bvid=${props.bvid}&page=1&high_quality=1&danmaku=0&autoplay=0`
    iframe.frameBorder = '0'
    iframe.allowFullscreen = true
    iframe.scrolling = 'no'
    iframe.style.position = 'absolute'
    iframe.style.top = '0'
    iframe.style.left = '0'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    playerContainer.value.appendChild(iframe)
  }
})
</script>

<template>
  <div class="video-wrapper">
    <div ref="playerContainer" class="video-container"></div>
  </div>
</template>

<style scoped>
.video-wrapper {
  width: 100%;
  margin: 1rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .video-wrapper {
    padding: 0 0.5rem;
  }

  .video-container {
    border-radius: 6px;
  }
}

@media (prefers-color-scheme: dark) {
  .video-container {
    background-color: #1a1a1a;
  }
}
</style>
