<template>
  <navbar />
  <div class="d-flex">
    <div class="col-4">
     <entryList /> 
    </div>
    <div class="col">
      <router-view/>
    </div>
  </div>
</template>


<script>
import {defineAsyncComponent} from 'vue'
export default {
  components:
  {
    navbar: defineAsyncComponent(()=> import('../components/nabbar') ),
    entryList : defineAsyncComponent(()=> import('../components/EntryList') )

  }
}
</script>

<style>

</style>
