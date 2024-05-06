<template>
	<div >
		<h2>学生名称:{{name}}</h2>
		<h2>学生年龄:{{age}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data(){
			return {
				name:'浅浅',
				age:28
			}
		}
	}
</script>

