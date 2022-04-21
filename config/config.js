import {defineConfig} from "umi";

export default defineConfig({
    mfsu: {},
    routes: [
        {
            path: "/",
            component: "@/layouts/index",
            routes: [
                {
                    path: "/",
                    component: "@/pages/index"
                },
                {
                    path: "/searchActor",
                    component: "@/pages/searchActor"
                },
                {
                    path: "/recommendation",
                    component: "@/pages/recommendation"
                },
                {
                    path: "/actor",
                    component: "@/pages/actor"
                },
                {
                    path: "/userProfile",
                    component: "@/pages/userProfile"
                },
                {
                    path: "/movieDetails",
                    component: "@/pages/movieDetails"
                },
                {
                    path: "/actorDetails",
                    component: "@/pages/actorDetails"
                },
                {
                    path: "/sharingPage",
                    component: "@/pages/sharingPage"
                },
                {
                    path: "/category",
                    component: "@/pages/category"
                }
            ]
        }
    ]
});