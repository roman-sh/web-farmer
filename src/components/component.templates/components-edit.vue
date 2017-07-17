<template>
    <section>
        <button @click="handleEditComp">&#x270E </button>
        <button v-on:click="deleteComponent">&#128465;</button>
    </section>
</template>

<script>
export default {
    props: ['cmpId'],
    data() {
        return {
        }
    },
    methods: {
        deleteComponent() {
            var verifyDeletion = confirm('are you sure you want to delete this component?')
            console.log(this.cmpId);

            if (verifyDeletion) {
                this.$store.commit({ type: 'deleteUserCmp', cmpId: this.cmpId })
            }
        },
        handleEditComp() {
            this.$store.commit({ type: 'setCurrEditedComp', cmpId: this.cmpId });
            this.$store.commit('setIsEditorShown', {shouldShow: true});
        }

    }
}
</script>

<style scoped>
section {
    display: flex;
    position: absolute;
    right: 1em;
    z-index: 9;
    overflow: hidden;
    box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.5);
}


button {
    background: rgba(255, 249, 249, 0.7);
    width: 40px;
    height: 40px;
    margin: 0;
    outline: none;
    font-size: 1.5em;
}

</style>
