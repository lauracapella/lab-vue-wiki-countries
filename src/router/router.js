import { createRouter, createWebHistory } from 'vue-router';

const routes = [
 
  {
    path: '/',
    name: 'list',
    component: () => import('../views/CountriesList.vue'),
    children: [
      
       {
        path: '/list/:alpha3Code',
        name: 'details',
        component: () => import('../views/CountryDetails.vue')
      }, 
    ],
  },
];



const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;