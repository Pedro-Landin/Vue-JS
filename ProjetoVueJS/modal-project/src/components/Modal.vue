<template>
<div class="backdrop">
    <div class="modal" :class="{ sale: theme === 'sale'}">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
    </div>
</div>
</template>

<script>
 export default {
    props:['header', 'text', 'theme']
 }
</script>

<style>
  .modal{
      width: 400px;
      padding: 20px;
      margin: 100px auto;
      background-color: white;
      border-radius: 10px;
  }
  .backdrop{
      top: 0;
      left: 0;
      position: fixed;
      background: rgba(0,0,200,0.5);
      width: 100%;
      height: 100%;
  }
  .modal p {
      font-style: normal;
  }
  .modal.sale{
      background: crimson;
  }
  .modal.sale h1{
      color: white;
  }
</style>
    
