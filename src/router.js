import {createRouter, createWebHistory} from 'vue-router'
import CountryPage from "./pages/CountryPage.vue"
import DocumentPage from "./pages/DocumentPage.vue";
import IntroductionPage from "./pages/Introduction.vue";
// import IntroductionBCH from "./pages/IntroductionBCH.vue"
import DocumentsValidatePage from "./pages/DocumentsValidatePage.vue"
import LoginPage from "./pages/LoginPage.vue"
import AuthLayout from "./layouts/AuthLayout.vue"
import MainLayout from "./layouts/MainLayout.vue"
// import CHMLayout from "./layouts/CHMLayout.vue"

const router =createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            component: MainLayout,
            children:[
                {
                    path:"",
                    component:IntroductionPage,
                    name:"Introduction"
                },
            ]
        },
        {
            path:"/public",
            component:MainLayout,
            children:[
                {
                    path:"countries",
                    component:CountryPage,
                    name:"Country"
                },
                {
                    path:"document",
                    component:DocumentPage,
                    name:"Document"
                }
            ]
        },
        {
            path:"/partner",
            component:MainLayout,
            children:[
                {
                    path:"documents/validate",
                    component:DocumentsValidatePage,
                    name:"DocumentsValidate"
                }
            ]
        },
        {
            path:"/login",
            component:AuthLayout,
            children:[
                {
                    path:"",
                    component:LoginPage,
                    name:"Login"
                }
            ]
        }
    ]
})

export default router;