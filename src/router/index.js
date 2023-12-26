import { createRouter, createWebHistory } from 'vue-router'
import VModelView from '../views/VModel.vue'
import VTestView from '../views/VTest.vue'
import VForView from '../views/VFor.vue'
import VIfVShowView from '../views/VIfVShow.vue'
import VBindView from '../views/VBind.vue'
import VOnView from '../views/VOn.vue'
import PropsView from '../views/Props.vue'
import EmitView from "../views/Emit.vue"
import WatchView from "../views/WatchAndComputed.vue"
import RouterView from "../views/Router.vue"
import RouterPropsView from "../views/RouterProps.vue"
import ProvideAndInjectView from "../views/ProvideAndInject.vue"
import SlotView from "../views/Slot.vue"
import FileReader from "../views/FileReader.vue"
import Storage from "../views/Storage.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vModel',
      name: 'vModel',
      component: VModelView
    },
    {
      path: '/',
      name: 'vTest',
      component: VTestView
    },
    {
      path: '/v-for',
      name: 'vFor',
      component: VForView
    },
    {
      path: '/v-if-v-show',
      name: 'v-if-v-show',
      component: VIfVShowView
    },
    {
      path: '/v-bind',
      name: 'v-bind',
      component: VBindView
    },
    {
      path: '/v-on',
      name: 'v-on',
      component: VOnView
    },
    {
      path: '/props',
      name: 'props',
      component: PropsView
    },
    {
      path: '/emit',
      name: 'emit',
      component: EmitView
    },
    {
      path: '/watch-computed',
      name: 'watch-computed',
      component: WatchView
    },
    // 子路由
    {
      path: '/router',
      name: 'router',
      component: RouterView,
      children: [
        {
          path:'com-a',
          component : () => import("../components/ComA.vue")
        },
        {
          path:'com-b',
          component : () => import("../components/ComB.vue")
        }
      ]
    },
    {
      path: '/routerprops/:propText',
      name: 'routerprops',
      component: RouterPropsView,
      props :true
    },
    {
      path: '/provideAndInject',
      name: 'provideAndInject',
      component: ProvideAndInjectView,
      
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotView,
      
    },
    {
      path: '/filereader',
      name: 'filereader',
      component: FileReader,
      
    },
    {
      path: '/storage',
      name: 'storage',
      component: Storage,
      
    }
    

  ]
})

export default router
