import { ref, nextTick, inject } from 'vue';
import { Store } from './store';

export default function useFileImporter() {
  // const store: Store = inject('store')!;

  const isLoaded = ref(false);
  // const modules = ref<Record<string, { [key: string]: any }> | null>(null);

  const modules = import.meta.globEager('./components/code/*', {
    assert: { type: 'raw' },
  });

  // store.setModules(modules);
  console.log('>>>', modules);

  isLoaded.value = true;

  return { isLoaded };
}
