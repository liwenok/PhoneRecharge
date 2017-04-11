<template>
    <div id="foot-component">
        <mu-paper>
            <mu-bottom-nav :value="bottomNav" @change="handleChange">
                <mu-bottom-nav-item
                        v-for="item in this.con.VueConfig().FooterItem"
                        :href="item.url"
                        :value="item.value"
                        :title="item.title"
                        :icon="item.icon"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
</template>

<script>
    export default{
        mounted(){

        },
        data(){
            return{
                bottomNav: 'index'
            }
        },
        methods:{
            handleChange (val) {
                this.bottomNav = val
                console.log(val)
            }
        }
    }
</script>

<style scoped>
#foot-component{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
