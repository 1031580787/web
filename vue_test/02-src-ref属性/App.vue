<template>
	<div >
		<h1 ref="hello">{{msg}}</h1>
		<School ref="sc"></School>
		<button @click="showRef">点击测试ref属性返回的值</button>
	</div>
</template>

<script>
	import School from './components/SchoolInfo.vue'
	export  default {
		name: 'App',
		components:{
			School
		},
		data() {
			return {
				msg: 'hello'
			}
		},
		methods:{
			showRef(){
				console.log(this.$refs.hello)
			}
		}
	}
</script>

<style>
</style>
