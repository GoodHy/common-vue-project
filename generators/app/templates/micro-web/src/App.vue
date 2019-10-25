<template>
	<div id="micro_container">
    <h1>欢迎使用宜买车微前端生成器!</h1>
    <router-view />
  </div>
</template>

<script>

export default {
	name: 'InputYourOwnName',
};
</script>

<style scoped lang="less">
#micro_container {
	font-family: 'PingFang SC', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	height: 100%;
}
</style>
