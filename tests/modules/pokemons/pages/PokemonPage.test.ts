import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';
import { RouterLinkStub, mount } from '@vue/test-utils';

describe('<PokemonPage />', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        // RouterLink: true,
        RouterLink: RouterLinkStub, // Porque el RouterLinkStub nos permite acceder a las props del componente stub, a diferencia de ponerlo como true
      },
    },
  });

  test('should render the component correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
  });

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    // console.log(wrapper.html());
    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } });
  });
});
