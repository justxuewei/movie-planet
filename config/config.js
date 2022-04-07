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
                }
            ]
        }
    ]
});