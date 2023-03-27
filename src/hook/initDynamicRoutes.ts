import router from "@/router"
import { ROLE_LIST } from "@/constants/constants"
import store from "@/store"

export default function() {
    const userManagement = {
        path: '/userManagement',
        name: 'userManagement',
        component: () => import('@/views/UserManagement/index.vue')
    }   
    const role = store.state.user.role
    // console.log(router.getRoutes())
    if(ROLE_LIST[role].auth.includes('USER_MANAGEMENT')){
      router.addRoute(userManagement)
      // console.log(router.getRoutes())
    }
  }