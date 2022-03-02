const app = Vue.createApp({
    data(){
        return{
            url: 'http://www.google.com.br',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'bradon sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'patrick sanderson', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
        methods: {
          toggleShowBooks(){
              this.showBooks = !this.showBooks 
          },
          handleEvent(e, data){
              console.log(e, e.type)
              if (data) {
                 console.log(data)
              }
          },
          handleMousemove(e){
              this.x = e.offsetX
              this.y = e.offsetY
          },
          handleLike(book){
           book.isFav = !book.isFav
        }
        }  
})

app.mount('#app')