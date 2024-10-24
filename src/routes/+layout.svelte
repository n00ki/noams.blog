<script lang="ts">
  // Stores
  import { page } from '$app/stores';

  // Utils
  import { browser } from '$app/environment';
  import { ModeWatcher } from 'mode-watcher';

  // Components
  import SEO from '$components/SEO.svelte';
  import Transition from '$components/Transition.svelte';
  import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

  // Styles
  import '../styles/app.css';

  let { data, children } = $props();
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

{#if browser}
  <ModeWatcher />
{/if}

<main class="container mx-auto flex flex-col p-4 md:px-8 md:py-4">
  <Transition url={data.url}>
    {@render children?.()}
  </Transition>

  <div class="fixed bottom-5 right-5">
    <ThemeSwitcher />
  </div>
</main>
