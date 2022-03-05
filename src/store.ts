import { reactive, readonly } from 'vue';

export interface Store {
  actions: Array<Function>;
}

const state = reactive({
  reveal: null,
  isRevealLoaded: false,
  fulano: 'sicrano',
});

const actions = {
  setReveal: (value: any) => {
    state.reveal = value;
  },

  setFulano: (value: string) => {
    state.fulano = value;
  },
  setRevealLoaded: (value: boolean) => {
    state.isRevealLoaded = value;
  },
};

export default {
  state: readonly(state),
  actions,
};
