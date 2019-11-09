import axios from 'axios'
import { Indicator } from 'mint-ui';
const GET_MOVIES = 'GET_MOVIES'
const GET_FUTURE_MOVIES = 'GET_FUTURE_MOVIES'
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'
const GET_EXPERT_MOVIES = 'GET_EXPERT_MOVIES'

export default {
    state: {
        movies: null,
        exmovies: null,
        loadingFlag: false
    },
    actions: {
        getMovies({ commit }) {
            axios({
                url: '/ajax/movieOnInfoList',
                params: {
                    token: ''
                }
            }).then(res => {
                commit({
                    type: GET_MOVIES,
                    payload: res.data
                })
            })
        },
        getFutureMovies({ commit }, movieIds) {
            axios({
                url: '/ajax/moreComingList',
                params: {
                    token: '',
                    movieIds
                }
            }).then(res => {
                commit({
                    type: GET_FUTURE_MOVIES,
                    payload: res.data
                })
                console.log('res', res)
            })
        },
        showLoading({ commit }) {
            console.log('showLoading')
            commit({
                type: SHOW_LOADING
            })
        },
        hideLoading({ commit }) {
            commit({
                type: HIDE_LOADING
            })
        },
        getExpertMovies({ commit }) {
            axios({
                url: '/ajax/mostExpected',
                params: {
                    ci: 50,
                    limit: 10,
                    offset: 0,
                    token: ''
                }
            }).then(res => {
                commit({
                    type: GET_EXPERT_MOVIES,
                    payload: res.data.coming
                })
                console.log('res1', res.data.coming)
            })
        }
    },

    mutations: {
        GET_MOVIES(state, action) {
            state.movies = action.payload
        },
        GET_FUTURE_MOVIES(state, action) {
            state.movies.movieList.push(...action.payload.coming)
            console.log(state.movies.movieList)
        },
        SHOW_LOADING(state) {
            state.loadingFlag = true
        },
        HIDE_LOADING(state) {
            state.loadingFlag = false
        },
        GET_EXPERT_MOVIES(state, action) {
            state.exmovies = action.payload
            console.log('state.exmovies', state.exmovies)
        }
    }
}