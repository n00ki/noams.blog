<script>
  // Stores
  import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col items-center justify-center">
  <h1 class="mb-2 text-4xl font-bold md:text-6xl">
    {$page.status}
  </h1>
  <h2 class="mb-2 text-xl font-medium md:text-2xl">
    {$page.error?.message}
  </h2>
  <p>
    <a href="/" class=" text-base text-muted-foreground/80 hover:text-muted-foreground md:text-xl">בחזרה לבלוג</a>
  </p>
</div>
