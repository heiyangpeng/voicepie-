<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isVisible" class="modal-overlay" @click="closeOnOverlay">
        <div class="modal-container" @click.stop>
          <button class="modal-close" @click="close">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>

          <div class="modal-content">
            <div v-if="image" class="modal-image">
              <img :src="image" :alt="title" />
            </div>

            <div class="modal-text">
              <h2 v-if="title" class="modal-title">{{ title }}</h2>

              <div class="modal-body">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: true
  }
})

const isVisible = ref(false)

const close = () => {
  isVisible.value = false
}

const closeOnOverlay = (e) => {
  if (props.closeOnOutsideClick) {
    close()
  }
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 1000)
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  position: relative;
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 24px;
  max-width: 90%;
  width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.modal-close:hover {
  background-color: var(--vp-c-bg-soft);
}

.modal-close svg {
  fill: var(--vp-c-text-2);
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
}

.modal-image img {
  max-width: 60%;
  height: auto;
  display: inline-block;
  object-fit: contain;
  max-height: 300px;
}

.modal-text {
  flex: 1;
}

.modal-title {
  font-size: 1.5em;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}

.modal-body {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 动画效果 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container {
  animation: modal-in 0.3s ease-out;
}

.modal-fade-leave-active .modal-container {
  animation: modal-out 0.3s ease-in;
}

@keyframes modal-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes modal-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}

/* 暗色主题适配 */
:root.dark .modal-container {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
</style>
