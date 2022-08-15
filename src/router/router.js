import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'index' */ '../views/index.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ '../views/CountriesList.vue'),
    children: [
      
       {
        path: '/list/:details',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../views/CountryDetails.vue')
      }, 
    ]
  }
];



const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;