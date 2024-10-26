<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  bvid: {
    type: String,
    required: true
  }
})

const playerLoaded = ref(false)
const thumbnailLoaded = ref(false)
const playerContainer = ref(null)
const aspectRatio = ref('56.25%') // 16:9

const loadPlayer = () => {
  if (playerLoaded.value) return

  const iframe = document.createElement('iframe')
  iframe.src = `//player.bilibili.com/player.html?bvid=${props.bvid}&page=1&high_quality=0&danmaku=0&autoplay=0`
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allowfullscreen', 'true')
  iframe.setAttribute('scrolling', 'no')
  iframe.setAttribute('border', '0')
  iframe.setAttribute(
    'sandbox',
    'allow-top-navigation allow-same-origin allow-forms allow-scripts'
  )
  iframe.style.position = 'absolute'
  iframe.style.top = '0'
  iframe.style.left = '0'
  iframe.style.width = '100%'
  iframe.style.height = '100%'

  if (playerContainer.value) {
    playerContainer.value.innerHTML = ''
    playerContainer.value.appendChild(iframe)
    playerLoaded.value = true
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          thumbnailLoaded.value = true
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  if (playerContainer.value) {
    observer.observe(playerContainer.value)
  }
})
</script>

<template>
  <div class="bilibili-player-wrapper">
    <div
      ref="playerContainer"
      class="bilibili-player"
      :class="{ 'is-loaded': playerLoaded }"
      @click="!playerLoaded && loadPlayer()"
    >
      <div v-if="!playerLoaded" class="player-placeholder">
        <div class="player-placeholder-content">
          <div class="play-button">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.5)" />
              <path d="M9.5 7.5v9l7.5-4.5z" fill="white" />
            </svg>
            <span class="play-text">点击播放视频</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bilibili-player-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

.bilibili-player {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.bilibili-player:hover {
  transform: translateY(-2px);
}

.bilibili-player.is-loaded {
  cursor: default;
}

.player-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0.05) 100%
  );
  transition: opacity 0.3s ease;
}

.player-placeholder-content {
  text-align: center;
}

.play-button {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.play-text {
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .bilibili-player-wrapper {
    padding: 0 0.5rem;
  }

  .bilibili-player {
    border-radius: 6px;
  }

  .play-button svg {
    width: 40px;
    height: 40px;
  }

  .play-text {
    font-size: 12px;
  }
}

/* Dark mode optimization */
@media (prefers-color-scheme: dark) {
  .bilibili-player {
    background-color: var(--vp-c-bg-soft);
  }

  .player-placeholder {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
  }

  .play-text {
    color: var(--vp-c-text-1);
  }
}

/* Small screen optimization */
@media (max-width: 480px) {
  .bilibili-player-wrapper {
    margin: 0.5rem auto;
  }
}

/* Large screen optimization */
@media (min-width: 1200px) {
  .bilibili-player-wrapper {
    max-width: 1000px;
  }
}
</style>
