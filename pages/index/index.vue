<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="grid">
      <navigator url="/pages/customize/index" class="nav-item">周边定制</navigator>
      <navigator url="/pages/templates/index" class="nav-item">模板市场</navigator>
      <navigator url="/pages/store/index" class="nav-item">成品商城</navigator>
      <navigator url="/pages/profile/index" class="nav-item">我的</navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello 谷苏良匠！'
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-bottom: 50rpx;
}
.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.nav-item {
  width: 40%;
  margin: 10rpx;
  padding: 20rpx 0;
  background: #f0f0f0;
  text-align: center;
  border-radius: 8rpx;
  font-size: 28rpx;
}
</style>
