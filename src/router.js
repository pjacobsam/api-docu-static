import {createRouter, createWebHistory} from 'vue-router'
import CountryPage from "./pages/CountryPage.vue"
import DocumentPage from "./pages/DocumentPage.vue";
import IntroductionPage from "./pages/Introduction.vue";
import LoginPage from "./pages/LoginPage.vue"

const router =createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            component: IntroductionPage
        },
        {
            path:"/public/countries",
            component:CountryPage
        },
        {
            path:"/public/document",
            component:DocumentPage
        },
        {
            path:"/login",
            component:LoginPage
        }
    ]
})

export default router;