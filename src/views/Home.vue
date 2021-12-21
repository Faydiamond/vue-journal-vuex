<template>
  <div class="home">
    <h1> Hola Mundo </h1>
    <button class="btn btn-primary"> primary</button>
    <button class="btn btn-secondary"> secondary</button>
    <button class="btn btn-success" @click="goToDayBook"> success</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {

  components: {
  },
  methods:{
    goToDayBook()
    {
        this.$router.push({ name : 'no-entry'} )
    }
      
    
  
  }
}
</script>
