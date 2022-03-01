const app = Vue.createApp({
    data(){
        return{
            title: 'Titulo final',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
        methods: {
            changeTitle(abc){
                this.title = abc 
            }
        }
    
})

app.mount('#app')