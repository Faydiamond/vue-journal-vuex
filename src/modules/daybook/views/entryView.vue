import { defineAsyncComponent } from 'vue';
<template>
  <div class="entry-tittle d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold" >15</span>
      <span class="mx-1 fs-3 " >Junio</span>
      <span class="mx-2 fs-4 fw-light" >2021,Viernes</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
           <button class="btn btn-primary ">
        Subir Foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div><hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que acontecio hoy?"></textarea>
  </div>

  <Fab icon ="fa-save" />
  <img src="https://www.lavanguardia.com/files/image_948_465/uploads/2016/07/18/5fa2d19ad53ac.jpeg" alt="pokemon" class="img-thumbnail">
</template>

<script>
import {defineAsyncComponent } from 'vue'
export default {
  components:{
    Fab : defineAsyncComponent(()=> import('../components/fav') )
  }
}
</script>

<style scoped lang="scss">
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;


    &:focus{
      outline: none;
    }
  }

  img{
    position: fixed;
    width: 200px;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>