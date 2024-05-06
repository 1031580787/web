import App from "App"
const vm = new Vue({
	el:'#root',
	template:`
	  <div id="root">
	  	<App></App>
	  </div>
	`,
	components: {
		App
	},
})