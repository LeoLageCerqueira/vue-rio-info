import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './pages/MainPage'
import PraiaPage from './pages/PraiaPage'
import RestaurantePage from './pages/RestaurantePage'
import PontoTur from './pages/PontoTur'
import DelegaciaPage from './pages/DelegaciaPage'
import HospitalPage from './pages/HospitalPage'
import HotelPage from './pages/HotelPage'
import ComentarioPage from './pages/ComentarioPage'
import NotFound from './pages/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main'},
        { path: '/main', component: MainPage},
        { path: '/praias', component: PraiaPage},
        { path: '/hoteis', component: HotelPage},
        { path: '/restaurantes', component: RestaurantePage},
        { path: '/pontostur', component: PontoTur},
        { path: '/hospitais', component: HospitalPage},
        { path: '/delegacias', component: DelegaciaPage},
        { path: '/comentarios', component: ComentarioPage},
        { path: '/:notFound(.*)', component: NotFound}
    ]
});

export default router;