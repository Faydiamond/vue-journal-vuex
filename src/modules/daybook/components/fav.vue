<template>
  <button class="btn btn-primary">
      <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
    props: { icon : { type: String, default: 'fa-plus'  } },
 
    created(){
        console.log('Aqio', this.iconFa);
    },
    computed:{
        changeFaIcon(){
            return this.iconFa === 'fa-save' ? 'fa-save' : 'fa-plus'
        }
    }

}
</script>

<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right:  50px;
        width:  80px;
    }

    .per{
        background-color: wheat;
    }
</style>