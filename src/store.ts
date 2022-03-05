import { reactive, readonly } from 'vue';

interface State {
  reveal: any;
  isRevealLoaded: boolean;
}
class Store {
  state: State;

  constructor() {
    this.state = reactive({
      reveal: null,
      isRevealLoaded: false,
    });
  }

  setReveal(value: any) {
    this.state.reveal = value;
  }
  setRevealLoaded(value: boolean) {
    this.state.isRevealLoaded = value;
  }
}

const store = new Store();
export default store;
export { Store };
