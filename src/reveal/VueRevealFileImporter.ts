import { ref, nextTick, inject } from 'vue';

export default {
  install: (app: any, options: any) => {
    console.log('plugin installed');

    const codeBlocks = ref(null);

    const modules = import.meta.globEager('/src/components/code/*', {
      assert: { type: 'raw' },
    });

    const translatedModules: any = {};
    Object.entries(modules).map(([k, v]) => {
      console.log(k);
      const z = k.replace('/src/components/code/', '');
      translatedModules[z] = v;
    });

    codeBlocks.value = translatedModules;

    app.provide('revealCodeBlocks', codeBlocks);
  },
};
