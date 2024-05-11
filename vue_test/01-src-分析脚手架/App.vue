<template>
	<div >
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	import School from './components/SchoolInfo.vue'
	import Student from './components/StudentInfo.vue'
	export  default {
		name: 'App',
		components:{
			School,Student
		} 
	}
</script>

<style>
</style>
