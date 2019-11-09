import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/home')
const Cinema = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/cinema')
const Mine = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/mine')
const City = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/city')
const Search = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/search')
const HotMovie = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/home/HotMovie')
const FutureMovie = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/home/FutureMovie')
const Error = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/error')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            redirect: '/home/hotmovie',
            children: [{
                    path: 'hotmovie',
                    component: HotMovie,
                    name: 'hotmovie'
                },
                {
                    path: 'futuremovie',
                    component: FutureMovie,
                    name: 'futuremovie'
                }
            ]
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/error',
            component: Error
        }
    ]
})

export default router