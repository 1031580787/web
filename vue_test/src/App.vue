<template>
	<div>
		<MyHeader @addTodos1="addTodos"></MyHeader>
		<MyList :todos1="todos"></MyList>
		<MyFooter :todos1="todos" @clearTodos="clearTodos" v-on:checkAllTodo="checkAllTodo"></MyFooter>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader.vue'
	import MyList from './components/MyList.vue'
	import MyFooter from './components/MyFooter.vue'
	export default {
		name: 'App',
		components: {
			MyHeader,
			MyList,
			MyFooter
		},
		data() {
			return{
				todos:JSON.parse(localStorage.getItem('todos'))||[]
			}
		},
		methods:{
			addTodos(o){
				this.todos.unshift(o)
			},
			deleteTodos(id){
				this.todos = this.todos.filter((e)=>{
					return id!=e.id
				})
			},
			changeCheck(id){
				this.todos.forEach((e)=>{
					if(id===e.id){
						e.done = !e.done
					}
				})
			},
			clearTodos(){
				this.todos=[]
			},
			checkAllTodo(v){
				this.todos.forEach((e)=>{
					e.done = v
				})
			}
		},
		watch:{
			todos:{
				deep:true,
				handler(v){
					localStorage.setItem('todos',JSON.stringify(v))
				}
			}
		},
		mounted() {
			this.$bus.$on('deleteTodos',this.deleteTodos)
			this.$bus.$on('changeCheck',this.changeCheck)
		},
		beforeDestroy() {
			this.$bus.$off('deleteTodos')
			this.$bus.$off('changeCheck')
		}
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}

	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}

	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}

	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}

	.btn:focus {
		outline: none;
	}

	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>