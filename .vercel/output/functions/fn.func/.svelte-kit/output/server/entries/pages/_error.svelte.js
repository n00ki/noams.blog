import { c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex h-screen flex-col items-center justify-center"><h1 class="mb-2 text-4xl font-bold md:text-6xl">${escape($page.status)}</h1> <h2 class="mb-2 text-xl font-medium md:text-2xl">${escape($page.error?.message)}</h2> <p data-svelte-h="svelte-14snur0"><a href="/" class="text-base text-muted-foreground/80 hover:text-muted-foreground md:text-xl">בחזרה לבלוג</a></p></div>`;
});
export {
  Error as default
};
