<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="left"></div>
            <div slot="center">首页</div>
            <div slot="right"></div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "common/navbar/NavBar";
    import {getHomeMultiData} from "network/home";

    export default {
        name: "Home",
        components: {
            NavBar
        },
        data () {
            return {
                result : null
            }
        },
        created() {
            //1.请求多个数据
            getHomeMultiData().then(res => {
                this.result = res
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #ffffff;
    }
</style>
