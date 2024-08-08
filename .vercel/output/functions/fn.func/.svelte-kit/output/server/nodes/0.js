import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DBeLGUmc.js","_app/immutable/chunks/scheduler.CR2_0tBN.js","_app/immutable/chunks/index.Dy1gFX7n.js","_app/immutable/chunks/stores.DsMvlFpt.js","_app/immutable/chunks/entry.Nmp_r4La.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index.CeCV66Mw.js"];
export const stylesheets = ["_app/immutable/assets/0.CkJYxUmV.css"];
export const fonts = [];
