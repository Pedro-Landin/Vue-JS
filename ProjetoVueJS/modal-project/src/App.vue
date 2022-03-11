<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
  <Modal theme="sale" @close="toggleModal" >
    <template v-slot:links>
       <a href="#">sign up now</a>
       <a href="#">more info</a>
    </template>
  </Modal>
  </div>

  <div v-if="showModalTwo">
     <Modal @close="toggleModalTwo">
       <h1> MODAL TWO</h1>
       <p>update for the windows</p>
     </Modal>
  </div>

   <button @click.right="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,

    };
  },
  methods: {
     toggleModal(){
       this.showModal =! this.showModal
    },
    toggleModalTwo(){
       this.showModalTwo =! this.showModalTwo
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
