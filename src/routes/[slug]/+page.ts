import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const post = await import(`../../posts/${params.slug}.md`);

    return {
      content: post.default,
      details: post.metadata,
      metadata: {
        title: post.metadata.title
      }
    };
  } catch (e) {
    throw error(404, `אופס! נראה שעדיין לא כתבתי את הפוסט הזה`);
  }
}
