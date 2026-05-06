import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/pages/HomePage.vue'),
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
  ],
});

export default router;
