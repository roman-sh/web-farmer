import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import pageService from '../services/page.service'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

    isAddCompPopupShown: false,
    isEditorShown: false,

    cmpID: 0,

    currEditedCompId: null,

    defaultComponentData: [
      {
        type: 'title-cmpn',
        txt: {
          title: 'Decore singulis per et',
          paragraph: 'Vel ut esse soluta percipitur, an utamur erroribus definitionem has, ad invidunt disputationi mei. Decore singulis per et, id pri nostrud admodum efficiantur, vix congue tractatos laboramus ut. Facilisi complectitur te ius. Pro ut probo tractatos, cu his audire civibus electram, qui hinc soleat commodo id. Mea ex iusto splendide. Dolorum euripidis theophrastus pro an.'
        },
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      }, {
        type: 'cat',
        url: 'http://thecatapi.com/api/images/get?format=src&type=jpg',
        txt: 'Meow',
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      }, {
        type: 'app-header',
        imgUrl: 'https://s3.amazonaws.com/assets-farmersweb-com/assets/home/header-farm-lg-8-90c1ac2ffde2f3411b7d0671dc51956a.jpg',
        txt: 'Lorem ipsum dolor sit amet, vis dicta efficiendi at, essent consulatu ea has. Populo explicari eam ex, prima expetenda reprimique no his.',
        style: {
          color: 'black'
        }
      }, {
        type: 'carousel',
        imgUrls: [
          'https://s-media-cache-ak0.pinimg.com/originals/f6/b0/ed/f6b0ed852c763dc4d2fd57fd638a3bb5.jpg',
          'https://stuffwhitepeoplelike.files.wordpress.com/2010/03/830161744_bce0da8cc4.jpg',
          'http://allswalls.com/images/cat-grass-wallpaper-1.jpg',
          'https://www.njfamily.com/PickYourOwnFruit.png',
          'https://il6.picdn.net/shutterstock/videos/2890054/thumb/1.jpg',
        ],
        style: {
          backgroundColor: 'white',
        }
      }, {
        type: 'mapComp',
        marker: { lat: 32.956638, lng: 35.739718 }
      }
    ],


    page: {
      title: 'My Page',
      comps: []
    }
  },
  getters: {
    getEditedCompIdx: state => {
      return state.page.comps.findIndex(userCmp =>
        userCmp.id === state.currEditedCompId);
    }
  },
  mutations: {
    addDataToUser(state, { cmpType }) {
      let cmpData = state.defaultComponentData.find(data => data.type === cmpType);
      let userCmpData = JSON.parse(JSON.stringify(cmpData));
      userCmpData.id = state.cmpID++;
      state.page.comps.push(userCmpData);
      store.commit('updatePage');
    },
    deleteUserCmp(state, { cmpId }) {
      let deletePos = state.page.comps.findIndex(userCmp => userCmp.id === cmpId);
      if (deletePos !== -1) {
        state.page.comps.splice(deletePos, 1);
        store.commit('updatePage');
      }
    },

    toggleAddCompPopup(state) {
      state.isAddCompPopupShown = !state.isAddCompPopupShown
    },
    setCurrEditedComp(state, { cmpId }) {
      state.currEditedCompId = cmpId;
    },
    setIsEditorShown(state, { shouldShow }) {
      state.isEditorShown = shouldShow;
    },

    changeBgColor(state, { backgroundColor }) {
      let editPos = store.getters.getEditedCompIdx;
      state.page.comps[editPos].style.backgroundColor = backgroundColor;
      store.commit('updatePage');
    },
    changeTxtColor(state, { color }) {
      let editPos = store.getters.getEditedCompIdx;
      state.page.comps[editPos].style.color = color;
      store.commit('updatePage');
    },
    setNewImgUrl(state, payload) {
      let editPos = store.getters.getEditedCompIdx;
      state.page.comps[editPos].imgUrls.splice([payload.imgNum - 1], 1, payload.imgUrl);
      store.commit('updatePage');
    },
    setNewBgImgUrl(state, { imgUrl }) {
      let editPos = store.getters.getEditedCompIdx;
      state.page.comps[editPos].imgUrl = imgUrl;
      store.commit('updatePage');
    },
    setNewCoords(state, { marker }) {
      let editPos = store.getters.getEditedCompIdx;
      state.page.comps[editPos].marker = marker;
      store.commit('updatePage');
    },

    initPage(state) {
      pageService.addPage(state.page)
        .then(newPage => {
          console.log('store-init-then');
          state.page = newPage;
        })
        .catch(err => {
          console.error('add page error: ', err);
        });
    },
    updatePage(state) {
      pageService.updatePage(state.page);
      console.log('store-update');
    },
    getPage(state) {
      pageService.getPage()
        .then(newPage => {
          console.log('store-get-then');
          state.page = newPage;
        })
        .catch(err => {
          console.error('get page error: ', err);
        });
    }
  }
})

export default store;