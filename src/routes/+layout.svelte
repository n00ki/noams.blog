<script lang="ts">
  // Stores
  import { page } from '$app/stores';

  // Utils
  import { onNavigate, disableScrollHandling } from '$app/navigation';

  // Components
  import SEO from '$components/SEO.svelte';
  import Transition from '$components/Transition.svelte';
  import ThemeSwitcher from '$components/ThemeSwitcher.svelte';

  // Styles
  import '../styles/app.css';

  export let data;

  // Disable scroll handling on same route navigation for theme switching
  onNavigate((navigation) => {
    const previousRoute = navigation.from?.url.pathname;
    const currentRoute = navigation.to?.url.pathname;

    if (previousRoute === currentRoute) {
      disableScrollHandling();
    }
  });
</script>

<SEO {...$page.data.metadata} url={$page.url.href} />

<main class="container mx-auto flex min-h-screen flex-col p-4 md:px-8 md:py-4">
  <Transition url={data.url}>
    <slot />
  </Transition>

  <div class="fixed bottom-5 right-5">
    <ThemeSwitcher />
  </div>
</main>
