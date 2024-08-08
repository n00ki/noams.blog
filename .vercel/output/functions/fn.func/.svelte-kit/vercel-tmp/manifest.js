export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","fonts/Rubik-Italic-VariableFont.ttf","fonts/Rubik-VariableFont.ttf","fonts/RubikMoonrocks.ttf","robots.txt"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CDShFe_W.js","app":"_app/immutable/entry/app.CbzUMMEI.js","imports":["_app/immutable/entry/start.CDShFe_W.js","_app/immutable/chunks/entry.Nmp_r4La.js","_app/immutable/chunks/scheduler.CR2_0tBN.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CbzUMMEI.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CR2_0tBN.js","_app/immutable/chunks/index.Dy1gFX7n.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
