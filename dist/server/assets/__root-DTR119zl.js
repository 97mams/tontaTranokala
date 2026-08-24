import { n as createServerFn, r as TSS_SERVER_FUNCTION } from "../server.js";
import { t as getToken } from "./auth-server-DwXrpUC3.js";
import "react";
//#region node_modules/.pnpm/@tanstack+start-server-core@1.169.31/node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/routes/__root.tsx?tss-serverfn-split
var getAuth_createServerFn_handler = createServerRpc({
	id: "cb2b3e5e1e8306e053224009604ac2548a745898344521b332eb26227a28d58b",
	name: "getAuth",
	filename: "src/routes/__root.tsx"
}, (opts) => getAuth.__executeServer(opts));
var getAuth = createServerFn({ method: "GET" }).handler(getAuth_createServerFn_handler, async () => {
	return await getToken();
});
//#endregion
export { getAuth_createServerFn_handler };
