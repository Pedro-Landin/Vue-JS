<template>
<div class="backdrop">
    <div class="modal">
        <p>modal content</p>
    </div>
</div>
</template>

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
</style>
    
