<script lang="ts">
  // Utils
  import { fly } from 'svelte/transition';
  import { inview, type Options } from 'svelte-inview';
  import { formatDate } from '$lib/utils/time';

  // Components
  import Bubbles from '$components/Bubbles.svelte';

  // Assets
  import image from '$lib/assets/noam.webp';

  let { data } = $props();

  let isHeroVisible = $state(true);
  const inViewOptions: Options = { threshold: 0.1 };

  function handleHeroSectionEnter() {
    isHeroVisible = true;
  }

  function handleHeroSectionLeave() {
    isHeroVisible = false;
  }
</script>

<Bubbles />

{#if !isHeroVisible}
  <section transition:fly={{ x: 100, duration: 1000 }} class="fixed left-0 top-0 flex w-full items-center justify-end">
    <h1 class="font-rubikmoonrocks text-2xl">הבלוג של נעם</h1>
    <img class="h-auto w-12 p-2" src={image} alt="נעם" />
  </section>
{/if}

<section
  use:inview={inViewOptions}
  oninview_enter={handleHeroSectionEnter}
  oninview_leave={handleHeroSectionLeave}
  class="mt-28 flex flex-col items-center justify-center text-center"
>
  <picture>
    <source type="image/webp" srcset={image} />
    <img src={image} class="mx-auto h-auto w-16 md:w-28" loading="lazy" decoding="async" alt="נעם" />
  </picture>
  <h1 class="font-rubikmoonrocks text-5xl md:text-8xl xl:text-9xl">הבלוג של נעם</h1>
</section>

<section>
  <ul class="mx-auto max-w-2xl py-4 text-center">
    {#each data.posts as post}
      <li
        class="font-rubik cursor-pointer py-2 text-xl font-semibold opacity-80 transition-all duration-100 ease-in hover:scale-105 hover:opacity-100 md:text-3xl"
      >
        <a href={post.slug}>
          {post.title}
        </a>
        <p dir="auto" class="text-xs font-medium">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
</section>
