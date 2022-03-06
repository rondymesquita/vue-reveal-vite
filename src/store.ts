import { reactive, readonly } from 'vue';

interface State {
  reveal: any;
  isRevealLoaded: boolean;
  modules: any;
}
class Store {
  state: State;

  constructor() {
    this.state = reactive({
      reveal: null,
      isRevealLoaded: false,
      modules: null,
    });
  }

  setReveal(value: any) {
    this.state.reveal = value;
  }
  setRevealLoaded(value: boolean) {
    this.state.isRevealLoaded = value;
  }

  setModules(value: any) {
    console.log(value);

    const x: any = {};
    Object.entries(value).map(([k, v]) => {
      console.log(k);
      const z = k.replace('./components/code/', '');
      x[z] = v;
    });
    console.log(x);
    this.state.modules = x;
  }
}

const store = new Store();
export default store;
export { Store };
