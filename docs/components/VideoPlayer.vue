<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="video-wrapper">
    <video
      class="video-player"
      controls
      preload="auto"
      controlsList="nodownload"
      playsinline
      webkit-playsinline
      :src="src"
    >
      <source :src="src" type="video/mp4" />
      您的浏览器不支持 HTML5 视频播放。
    </video>
  </div>
</template>

<style scoped>
.video-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  max-width: 420px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-player {
  width: 100%;
  aspect-ratio: 9/16;
  display: block;
}

/* 移动端优化 */
@media (max-width: 419px) {
  .video-wrapper {
    margin: 1rem auto;
    width: 95%; /* 控制移动端宽度为屏幕的85% */
    max-width: 400px; /* 设置最大宽度 */
  }
}

/* 确保在超小屏幕上也有合适的边距 */
@media (max-width: 320px) {
  .video-wrapper {
    width: 90%;
  }
}
</style>
