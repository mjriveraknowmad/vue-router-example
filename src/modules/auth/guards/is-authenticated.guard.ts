import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * Caso de uso: proteger rutas que requieren autenticación
 *  {
         path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
    },
 */
const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  // to es la ruta a la que se quiere acceder
  // from es la ruta desde la que se viene
  // next es una función que se debe llamar para continuar con la navegación
  const userId = localStorage.getItem('userId'); // Simulamos que el usuario está autenticado si existe un userId en localStorage
  localStorage.setItem('lastPath', to.path); // Guardamos la última ruta visitada en localStorage

  if (!userId) {
    return next({ name: 'login' });
  }
  next();
};

export default isAuthenticatedGuard;