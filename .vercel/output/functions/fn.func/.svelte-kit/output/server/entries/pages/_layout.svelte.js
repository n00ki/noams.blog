import { c as create_ssr_component, e as escape, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const PUBLIC_BASE_URL = "http://localhost:5173";
const description = "Life Enthusiast on an Entrepreneurial Journey";
const wideImage = "https://res.cloudinary.com/nshemesh/image/upload/v1702973829/noams.blog/meta_wide.png";
const squareImage = "https://res.cloudinary.com/nshemesh/image/upload/v1702973829/noams.blog/meta_square.png";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { url } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  title = title ? `${title} | הבלוג של נעם` : "הבלוג של נעם";
  url = url ?? PUBLIC_BASE_URL;
  return `${$$result.head += `<!-- HEAD_svelte-jxy5i9_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="title"${add_attribute("content", title, 0)}><meta name="description"${add_attribute("content", description, 0)}><meta name="image"${add_attribute("content", wideImage, 0)}><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", squareImage, 0)}><meta property="og:locale" content="he_IL"><meta property="og:language" content="he"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${add_attribute("content", url, 0)}><meta property="twitter:title"${add_attribute("content", title, 0)}><meta property="twitter:description"${add_attribute("content", description, 0)}><meta property="twitter:image"${add_attribute("content", wideImage, 0)}><!-- HEAD_svelte-jxy5i9_END -->`, ""}`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  return `<div class="flex-1">${slots.default ? slots.default({}) : ``}</div>`;
});
const ThemeSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button id="theme-switcher" aria-label="Switch themes" class="flex items-center justify-center rounded-full bg-primary p-2 text-primary-foreground transition-colors duration-300" data-svelte-h="svelte-1m9r7kn"><svg class="size-4 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg></button>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign({}, $page.data.metadata, { url: $page.url.href }), {}, {})} <main class="container mx-auto flex min-h-screen flex-col p-4 md:px-8 md:py-4">${validate_component(Transition, "Transition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} <div class="fixed bottom-5 right-5">${validate_component(ThemeSwitcher, "ThemeSwitcher").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Layout as default
};
