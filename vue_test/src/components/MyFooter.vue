<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{finished}}</span> / 全部{{all}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		computed:{
			all(){
				return this.todos1.length
			},
			finished(){
				return this.todos1.reduce((p,c)=>{
					return p+(c.done?1:0)
				},0)
			},
			isAll:{
				get(){
					return this.all===this.finished && this.all >0
				},
				set(value){
					this.checkAllTodo(value)
				}
			}
		},
		props: ['todos1','clearTodos','checkAllTodo'],
		methods:{
			clearAll(){
				this.clearTodos()
			}
		}
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>