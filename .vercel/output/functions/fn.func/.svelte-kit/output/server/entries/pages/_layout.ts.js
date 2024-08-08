const prerender = true;
const load = async ({ url }) => {
  return {
    url: url.pathname
  };
};
export {
  load,
  prerender
};
