<template>
	<div >
		<h2>姓名:{{name}}</h2>
		<h2>年龄:{{myAge}}</h2>
		<h2>性别:{{sex}}</h2>
		<button @click="updateAge">点击</button>
	</div>
</template>

<script>
	export default {
		name: 'StudentInfo',
		data(){
			return {
				name: '浅浅',
				myAge: 20
			}
		},
		methods:{
			updateAge(){
				this.myAge++
			}
		},
		props: {
			sex: {
				type: String,
				default:'' 
			},
			age:{
				type: Number,
				default:18
			}
		},
		
	}
</script>
