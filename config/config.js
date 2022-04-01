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
                    path: "/recommendation",
                    component: "@/pages/recommendation"
                }
            ]
        }
    ]
});