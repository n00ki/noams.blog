<script lang="ts">
  // Utils
  import { formatDate } from '$lib/utils/time';

  // Assets
  import image from '$lib/assets/noam.webp';

  let { data } = $props();
</script>

<section class="flex w-full justify-end">
  <a href="/" class="inline-flex items-center">
    <h1 class="font-rubikmoonrocks text-2xl">הבלוג של נעם</h1>
    <img class="h-auto w-12 p-2" src={image} alt="נעם" />
  </a>
</section>

<article class="m-4 mx-auto rounded-lg p-8 ring-4 ring-primary drop-shadow-lg">
  <hgroup dir="auto" class="mb-4 text-center">
    <p class="text-md font-rubik font-thin md:text-xl">{formatDate(data.details.date)}</p>
    <h1 class="mb-2 font-rubikmoonrocks text-4xl text-foreground md:text-6xl">{data.details.title}</h1>
  </hgroup>

  <div
    dir="auto"
    class="font-rubik prose mx-auto py-2 text-foreground lg:prose-xl prose-headings:text-primary/80 prose-a:text-brand-primary hover:prose-a:text-brand-secondary prose-blockquote:rounded-md prose-blockquote:bg-background/70 prose-blockquote:p-2 prose-blockquote:text-center prose-blockquote:font-extralight prose-blockquote:text-foreground/80 prose-strong:font-medium prose-strong:text-foreground"
  >
    <data.content />
  </div>
</article>
