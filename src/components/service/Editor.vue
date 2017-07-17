<template>
    <vue-draggable-resizable 
        class="editor-container" 
        :resizable="false" 
        style="height: fit-content; z-index: 99;">
        <span @click="handleCloseEditor">&Cross;</span>
        <section v-show="EditedCompType === 'cat'">
            <p>BG Color
                <input @change="handleBgChange($event)" type="color">
            </p>
            <p>Text Color
                <input @change="handleTxtChange($event)" type="color">
            </p>
        </section>
        <section v-show="EditedCompType === 'carousel'">
            <p v-for="imgNum in 5" :key="imgNum">Image {{imgNum}}:
                <input type="url" placeholder="image URL">
                <input @click="handleNewImgUrl(imgNum, $event)" type="submit">
            </p>
        </section>
        <section v-show="EditedCompType === 'mapComp'">
            <p>Set marker position</p>
            <input type="number" placeholder="Latitude">
            <input type="number" placeholder="Longitude">
            <input type="submit" @click="handleNewCoords($event)">
        </section>
        <section v-show="EditedCompType === 'app-header'">
            <p>Change background:
                <input type="url" placeholder="image URL">
                <input @click="handleNewBgImgUrl($event)" type="submit">
            </p>
        </section>
    </vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'


export default {
    components: {
        VueDraggableResizable
    },

    computed: {
        EditedCompType() {
            let compIdx = this.$store.getters.getEditedCompIdx;
            return this.$store.state.page.comps[compIdx].type;
        }
    },

    methods: {
        handleBgChange(event) {
            this.$store.commit({ type: 'changeBgColor', backgroundColor: event.target.value });
        },
        handleTxtChange(event) {
            this.$store.commit({ type: 'changeTxtColor', color: event.target.value });
        },
        handleNewImgUrl(imgNum, event) {
            this.$store.commit({ type: 'setNewImgUrl', imgNum,
                                    imgUrl: event.target.parentElement.children[0].value });
        },
        handleNewBgImgUrl(event) {
            this.$store.commit({ type: 'setNewBgImgUrl',
                                    imgUrl: event.target.parentElement.children[0].value });
        },
        handleNewCoords(event) {
            this.$store.commit({ type: 'setNewCoords', 
                marker: {lat: +event.target.parentElement.children[1].value,
                        lng: +event.target.parentElement.children[2].value}
            })
        },
        handleCloseEditor() {
            this.$store.commit('setIsEditorShown', { shouldShow: false });
        }
    }

}
</script>

<style scoped>
.editor-container {
    position: fixed;
    background-color: rgba(128, 147, 178, .9);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
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
