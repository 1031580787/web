<template>
	<div >
		<Student sex="F" ></Student>
	</div>
</template>

<script>
	import Student from './components/Student.vue'
	export  default {
		name: 'App',
		components:{
			Student
		},
		data() {
			return {
				msg: 'hello'
			}
		},
		methods:{
			showRef(){
			}
		}
	}
</script>

<style>
</style>
