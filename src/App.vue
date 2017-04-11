<template>
  <div id="app">
      <head-component ref="head"></head-component>
          <transition name="slide-fade">
            <router-view ref="content"></router-view>
          </transition>
      <foot-component ref="foot"></foot-component>
  </div>
</template>

<script>
    import FootComponent from './components/foot/foot'
    import HeadComponent from './components/head/head'
    export default {
        name: 'app',
        mounted(){

        },
        data(){
            return{
                msg:'this is template body'
            }
        },
        methods:{
            test(){
                alert("this is test")
            }
        },
        components:{
            FootComponent,
            HeadComponent
        }
    }
</script>

<style>
#content-component {
    margin: 17% 3% 0 3%;
}
.mu-popup-left {
    width: 80% !important;
    height: 100% !important;
    background: #ffffff;
    align-items: baseline;
}
.mu-popup-bottom{
    width: 100% !important;
}
.slide-fade-enter-active {
    transition: all .3s ease-in;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(90px);
    opacity: 0;
}
</style>
