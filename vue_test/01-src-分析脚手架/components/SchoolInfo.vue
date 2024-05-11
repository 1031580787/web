<template>
	<div class="school">
		<h2>学校名称:{{name}}</h2>
		<h2>学校地址:{{address}}</h2>
		<button type="button" @click="showName">点我提示学校名称</button>
	</div>
</template>

<script>
	export default {
		name: 'SchoolInfo',
		data(){
			return {
				name: '西电',
				address:'西安'
			}
		},
		methods:{
			showName(){
				alert(this.name)
			}
		}
		
	}
</script>

<style>
	.school{
		background-color: orange;
	}
</style>
