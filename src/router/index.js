import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import TemplateList from '@/components/template.list/TemplateList'
import PublishList from '@/components/publish/PublishList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/template',
      name: 'TemplateList',
      component: TemplateList
    },
    {
      path: '/publish/:id',
      name: 'TemplateListPub',
      component: PublishList
    }
  ],
  mode: 'history'
})
