import fs from 'fs-extra';
import path from 'path';

const USER = process.env.USER || process.env.USERNAME; // Works on both Unix and Windows
const DROPBOX_DIR = path.join('/Users', USER || '', 'Library/CloudStorage/Dropbox/Documents/Blog');

const ASTRO_CONTENT_DIR = path.join(process.cwd(), 'src', 'posts');

async function syncContent() {
  try {
    // Ensure the Astro content directory exists
    await fs.ensureDir(ASTRO_CONTENT_DIR);

    // Read the contents of the Dropbox directory
    const sourcePosts = await fs.readdir(DROPBOX_DIR);

    // Filter for .md posts and exclude hidden posts
    const mdPosts = sourcePosts.filter((post) => path.extname(post) === '.md' && !post.startsWith('.'));

    if (mdPosts.length === 0) {
      console.log('No Markdown posts to copy.');
      return;
    }

    // Read the contents of the Astro content directory
    const existingPosts = await fs.readdir(ASTRO_CONTENT_DIR);

    // Determine which posts need to be copied or updated
    const postsToCopy = await Promise.all(
      mdPosts.map(async (post) => {
        const srcPath = path.join(DROPBOX_DIR, post);
        const destPath = path.join(ASTRO_CONTENT_DIR, post);

        if (!existingPosts.includes(post)) {
          return { srcPath, destPath, copy: true };
        }

        const srcStat = await fs.stat(srcPath);
        const destStat = await fs.stat(destPath);

        if (srcStat.mtime > destStat.mtime) {
          return { srcPath, destPath, copy: true };
        }

        return { srcPath, destPath, copy: false };
      })
    );

    // Copy new and updated posts
    const postsCopied = postsToCopy.filter((post) => post.copy);
    if (postsCopied.length === 0) {
      console.log('No new or updated posts to copy.');
      return;
    }

    await Promise.all(
      postsCopied.map(async ({ srcPath, destPath }) => {
        await fs.copy(srcPath, destPath);
      })
    );

    console.log('New or updated posts copied successfully.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

syncContent();
