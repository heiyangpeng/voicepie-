<!-- 显示下载 -->
<script setup>
import DownloadPage from '/components/Downloadpage.vue'
</script>

<!-- 只显示下载卡片部分 -->

<DownloadPage
  lang="en"
  :showTitle="false"
  :showTips="false"
  :showUpdateTime="false"
  :onlyCards="true"
/>
