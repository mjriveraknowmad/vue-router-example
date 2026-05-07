import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default {
  setup: () => {
    console.log('setup');
    const counter = ref(0);

    // Sobre Mounted
    onMounted(() => {
      console.log('[onMounted] ¡Ya estoy en el DOM!');
    });
    onBeforeMount(() => {
      console.log('[onBeforeMount] ¡Me voy a montar!');
    });
    onUnmounted(() => {
      console.log("[onUnmounted] El componente ha muerto. Limpiando...");
    });

    // Sobre Updated
    onUpdated(() => {
      console.log('[onUpdated] ¡Me he actualizado!');
    });
    onBeforeUpdate(() => {
      console.log('[onBeforeUpdate] ¡Me voy a actualizar!');
    });
    onBeforeUnmount(() => {
      console.log('[onBeforeUnmount] ¡Me voy a desmontar!');
    });

    //Sobre Render
    onRenderTracked(() => {
      console.log('[onRenderTracked] ¡Se ha rastreado un render!');
    });
    onRenderTriggered(() => {
      console.log('[onRenderTriggered] ¡Se ha disparado un render!');
    });

    // Sobre Activated / Deactivated
    onActivated(() => {
      console.log('[onActivated] ¡El componente ha sido activado!');
    });
    onDeactivated(() => {
      console.log('[onDeactivated] ¡El componente ha sido desactivado!');
    });

    // Sobre Captura de Errores
    onErrorCaptured(() => {
      console.log('[onErrorCaptured] ¡Se ha capturado un error!');
    });

    return {
      counter,
    };
  },
};
