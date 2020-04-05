<template>
  <div class="tab-bar-item" @click="switchTab">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>


  </div>

</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
        path: String,
        color: {
          type : String,
          default : 'red'
        }
      },
      data(){
          return {
          }
      },
      computed: {
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          },
        activeColor(){
            return this.isActive ? {color: this.color} : {}
        }
      },
      methods: {
          switchTab(){
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
