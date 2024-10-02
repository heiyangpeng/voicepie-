<template>
    <div class="download-page">
      <h1>随时随地使用语雀</h1>
      <h2>客户端</h2>
      <p>同时支持 iOS、Android、macOS、Windows 版本</p>
      <div class="platform-grid">
        <div v-for="platform in platforms" :key="platform.name" class="platform-item">
          <div class="icon-container">
            <img :src="platform.icon" :alt="platform.name + ' icon'" class="platform-icon">
          </div>
          <h3>{{ platform.name }}</h3>
          <p>版本: {{ platform.version }}</p>
          <div class="button-container">
            <button class="download-button" @mouseover="showQR(platform)" @mouseleave="hideQR">下载{{ platform.buttonText }}</button>
            <div v-if="platform.showQR" class="qr-code">
              <img :src="platform.qrCode" :alt="platform.name + ' QR Code'" class="qr-image">
              <p>版本: {{ platform.version }}</p>
              <a href="#" class="update-link">更新日志</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadPage',
    data() {
      return {
        platforms: [
          { name: 'Windows', version: '1.0.0', icon: '/icons/windows.png', qrCode: '/qr/windows.png', buttonText: 'Windows 版', showQR: false },
          { name: 'MacOS', version: '1.0.0', icon: '/icons/macos.png', qrCode: '/qr/macos.png', buttonText: 'macOS 版', showQR: false },
          { name: 'iOS', version: '1.1.4', icon: '/icons/ios.png', qrCode: '/qr/ios.png', buttonText: 'iOS 版', showQR: false },
          { name: 'Android', version: '1.1.4', icon: '/icons/android.png', qrCode: '/qr/android.png', buttonText: 'Android 版', showQR: false },
        ]
      }
    },
    methods: {
      showQR(platform) {
        platform.showQR = true;
      },
      hideQR() {
        this.platforms.forEach(p => p.showQR = false);
      }
    }
  }
  </script>
  
  <style scoped>
  .download-page {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1, h2 {
    margin-bottom: 10px;
  }
  
  .platform-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
  }
  
  .platform-item {
    flex: 1 1 200px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .icon-container {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .platform-icon {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .button-container {
    position: relative;
  }
  
  .download-button {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .download-button:hover {
    background-color: #45a049;
  }
  
  .qr-code {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .qr-image {
    width: 100px;
    height: 100px;
  }
  
  .update-link {
    color: #1890ff;
    text-decoration: none;
  }
  
  .update-link:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .platform-grid {
      flex-direction: column;
      align-items: center;
    }
  
    .platform-item {
      max-width: 100%;
    }
  }
  </style>