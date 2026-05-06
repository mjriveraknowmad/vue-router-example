
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'landing',
          component: () => import('@/modules/landing/pages/HomePage.vue'),
        },
        {
          path: 'features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        
        // Pokemon
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: true,
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },


    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    //NotFound
    { 
      path: '/:pathMatch(.*)*', 
      component: NotFound404
    },
  ],
});

export default router;
