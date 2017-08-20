<template>
    <section :style="{ 'backgroundColor': bgColor }">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="template">Create your website</router-link>
            </li>
            <li>
                <a @click="goToPublish">Publish</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            bgColor: 'black'
        }
    },
    methods: {
        goToPublish() {
            this.$store.commit('updatePage');
            this.$router.push({name:'PublishList',params:{id:this.$store.state.page._id}})
        },
        handleScroll() {
            if (!document.body.scrollTop) {
                this.bgColor =  'black';
            } else {
                this.bgColor = 'rgba(0,0,0,0.75)';
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>

  section {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      transition: all .5s;
  }
  
  a {
      color: white;
      transition: all .3s;
  }

  a:hover {
      color: #42b983;
  }

</style>
