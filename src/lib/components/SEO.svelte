<script lang="ts">
  // Env Variables
  import { PUBLIC_BASE_URL } from '$env/static/public';

  interface Props {
    title?: string;
    url?: string;
  }

  let { title, url }: Props = $props();

  const description = 'Life Enthusiast on an Entrepreneurial Journey';
  const wideImage = 'https://res.cloudinary.com/nshemesh/image/upload/v1702973829/noams.blog/meta_wide.png';
  const squareImage = 'https://res.cloudinary.com/nshemesh/image/upload/v1702973829/noams.blog/meta_square.png';

  $effect(() => {
    title = title ? `${title} | הבלוג של נעם` : 'הבלוג של נעם';
    url = url ?? PUBLIC_BASE_URL;
  });
</script>

<svelte:head>
  <!-- Primary tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="image" content={wideImage} />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={squareImage} />
  <meta property="og:locale" content="he_IL" />
  <meta property="og:language" content="he" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={wideImage} />
</svelte:head>
