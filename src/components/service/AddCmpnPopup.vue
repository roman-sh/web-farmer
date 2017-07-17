<template>
  <section>
        <span @click="handleAddCompPopup">&Cross;</span>
        <ul>
            <li><img @click="handleAddCmp('title-cmpn')" src="../../assets/img/comp0.png"></li>
            <!--<li><img @click="handleAddCmp('cat')" src="../../assets/img/default_cmp_2.png"></li>-->
            <li><img @click="handleAddCmp('app-header')" src="../../assets/img/comp1.png"></li>
            <li><img @click="handleAddCmp('carousel')" src="../../assets/img/comp2.png"></li>
            <li><img @click="handleAddCmp('mapComp')" src="../../assets/img/comp3.png"></li>
        </ul>
  </section>
</template>

<script>
export default {
    methods: {
        handleAddCmp(type) {
            this.$store.commit({ type: 'addDataToUser', cmpType: type });
            this.handleAddCompPopup();
        },
        handleAddCompPopup() {
            this.$store.commit('toggleAddCompPopup')
        }
    }
}
</script>

<style scoped>
    section {
        position: fixed;
        z-index: 999;
        top: 10%;
        left: 20%;
        width: 60vw;
        background-color: rgba(128, 147, 178, .9);
        border-radius: 5px;
        overflow-y: scroll;
        padding: 20px;
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li {
        margin: 0;
        padding: 0;
    }
    img {
        /*height: 100px;*/
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
        max-width: 90%;
        border: solid 2px transparent;
        transition: border .3s;
        cursor: pointer;
    }
    img:hover {
        border: solid 2px green;
    }

    span {
        position: absolute;
        top: 0;
        right: 10px;
        line-height: .5em;
        display: block;
        cursor: pointer;
        font-size: 3em;
        padding: 0;
        margin: 0;
        color: white;
    }

</style>
