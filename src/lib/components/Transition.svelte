<script lang="ts">
  import { fade } from 'svelte/transition';

  export let url: string = '';
</script>

{#key url}
  <div class="flex-1" in:fade>
    <slot />
  </div>
{/key}
