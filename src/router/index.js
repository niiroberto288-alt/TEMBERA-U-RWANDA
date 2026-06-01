import { createRouter, createWebHistory } from "vue-router"
import About from "../views/About.vue";
import Home from "../views/home.vue";
import Contact from "../views/contact.vue";
import Gallery from "../views/Gallery.vue";
import Services from "../views/services.vue";
import Photos from "../views/photos.vue";
import Videos from "../views/videos.vue";
import SP from "../views/SP.vue";
import Kigali from "../views/Kigali.vue";
import EP from "../views/EP.vue";
import WP from "../views/WP.vue";
import NP from "../views/NP.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/services",
        name: "services",
        component: Services,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    },
    {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
    },
    {
        path: "/photos",
        name: "photos",
        component: Photos,
    },
    {
        path: "/videos",
        name: "videos",
        component: Videos,
    },
    {
        path:"/kigali",
        name:"kigali",
        component: Kigali,
    },
    {
        path:"/eP",
        name:"eP",
        component: EP,
    },
    {
        path:"/wP",
        name:"wP",
        component: WP,
    },
    {
        path:"/nP",
        name:"nP",
        component: NP,
    },
    {
        path:"/sP",
        name:"sP",
        component: SP,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;