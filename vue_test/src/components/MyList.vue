<template>
	<ul class="todo-main" >
		<MyItem v-for="(todo,index) in todos1" :key="index" :todos2="todo"></MyItem>
	</ul>
</template>

<script>
	import MyItem from './MyItem.vue'
	export default {
		name: 'MyList',
		components: {
			MyItem
		},
		props:['todos1']
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>