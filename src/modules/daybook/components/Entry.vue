<template>
  <div class="m-3 p-2 pointer entry-container" @click="$router.push({name: 'entry' , params: {id : 15} })">
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-5">  20 </span>
          <span class="mx-1 fs-5"> Marxo </span>
          <span class="mx-2 fw-ligth"> 2021, martes </span>
      </div>
      <div class="entry-description">
          Incididunt officia occaecat do incididunt aliquip proident quis consequat nulla ullamco. Sunt proident velit magna ad. Ex labore in ea incididunt labore id enim laborum sit deserunt consectetur exercitation do. Commodo adipisicing pariatur aliquip sit minim duis sint mollit duis proident voluptate. Nisi ut tempor Lorem qui exercitation reprehenderit dolor proident minim nisi. Voluptate incididunt proident nostrud sit.     
      </div>
  </div>
</template>



<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50 ;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 35);
        }
        .entry-description{
            font-size: 12px
        }

    }
</style>