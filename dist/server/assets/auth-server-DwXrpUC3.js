import React from "react";
import { ConvexHttpClient } from "convex/browser";
//#region node_modules/.pnpm/@better-fetch+fetch@1.3.1/node_modules/@better-fetch/fetch/dist/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var BetterFetchError = class extends Error {
	constructor(status, statusText, error) {
		super(statusText || status.toString(), { cause: error });
		this.status = status;
		this.statusText = statusText;
		this.error = error;
		Error.captureStackTrace(this, this.constructor);
	}
};
var initializePlugins = async (url, options) => {
	var _a, _b, _c, _d, _e, _f;
	let opts = options || {};
	const hooks = {
		onRequest: [options == null ? void 0 : options.onRequest],
		onResponse: [options == null ? void 0 : options.onResponse],
		onSuccess: [options == null ? void 0 : options.onSuccess],
		onError: [options == null ? void 0 : options.onError],
		onRetry: [options == null ? void 0 : options.onRetry]
	};
	if (!options || !(options == null ? void 0 : options.plugins)) return {
		url,
		options: opts,
		hooks
	};
	for (const plugin of (options == null ? void 0 : options.plugins) || []) {
		if (plugin.init) {
			const pluginRes = await ((_a = plugin.init) == null ? void 0 : _a.call(plugin, url.toString(), options));
			opts = pluginRes.options || opts;
			url = pluginRes.url;
		}
		hooks.onRequest.push((_b = plugin.hooks) == null ? void 0 : _b.onRequest);
		hooks.onResponse.push((_c = plugin.hooks) == null ? void 0 : _c.onResponse);
		hooks.onSuccess.push((_d = plugin.hooks) == null ? void 0 : _d.onSuccess);
		hooks.onError.push((_e = plugin.hooks) == null ? void 0 : _e.onError);
		hooks.onRetry.push((_f = plugin.hooks) == null ? void 0 : _f.onRetry);
	}
	return {
		url,
		options: opts,
		hooks
	};
};
var LinearRetryStrategy = class {
	constructor(options) {
		this.options = options;
	}
	shouldAttemptRetry(attempt, response) {
		if (this.options.shouldRetry) return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
		return Promise.resolve(attempt < this.options.attempts);
	}
	getDelay() {
		return this.options.delay;
	}
};
var ExponentialRetryStrategy = class {
	constructor(options) {
		this.options = options;
	}
	shouldAttemptRetry(attempt, response) {
		if (this.options.shouldRetry) return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
		return Promise.resolve(attempt < this.options.attempts);
	}
	getDelay(attempt) {
		return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** attempt);
	}
};
function createRetryStrategy(options) {
	if (typeof options === "number") return new LinearRetryStrategy({
		type: "linear",
		attempts: options,
		delay: 1e3
	});
	switch (options.type) {
		case "linear": return new LinearRetryStrategy(options);
		case "exponential": return new ExponentialRetryStrategy(options);
		default: throw new Error("Invalid retry strategy");
	}
}
var getAuthHeader = async (options) => {
	const headers = {};
	const getValue = async (value) => typeof value === "function" ? await value() : value;
	if (options == null ? void 0 : options.auth) {
		if (options.auth.type === "Bearer") {
			const token = await getValue(options.auth.token);
			if (!token) return headers;
			headers["authorization"] = `Bearer ${token}`;
		} else if (options.auth.type === "Basic") {
			const [username, password] = await Promise.all([getValue(options.auth.username), getValue(options.auth.password)]);
			if (!username || !password) return headers;
			headers["authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
		} else if (options.auth.type === "Custom") {
			const [prefix, value] = await Promise.all([getValue(options.auth.prefix), getValue(options.auth.value)]);
			if (!value) return headers;
			headers["authorization"] = `${prefix != null ? prefix : ""} ${value}`;
		}
	}
	return headers;
};
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(request) {
	const _contentType = request.headers.get("content-type");
	const textTypes = /* @__PURE__ */ new Set([
		"image/svg",
		"application/xml",
		"application/xhtml",
		"application/html"
	]);
	if (!_contentType) return "json";
	const contentType = _contentType.split(";").shift() || "";
	if (JSON_RE.test(contentType)) return "json";
	if (textTypes.has(contentType) || contentType.startsWith("text/")) return "text";
	return "blob";
}
function isJSONParsable(value) {
	try {
		JSON.parse(value);
		return true;
	} catch (error) {
		return false;
	}
}
function isJSONSerializable(value) {
	if (value === void 0) return false;
	const t = typeof value;
	if (t === "string" || t === "number" || t === "boolean" || t === null) return true;
	if (t !== "object") return false;
	if (Array.isArray(value)) return true;
	if (value.buffer) return false;
	return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function jsonParse(text) {
	try {
		return JSON.parse(text);
	} catch (error) {
		return text;
	}
}
function isFunction(value) {
	return typeof value === "function";
}
function getFetch(options) {
	if (options == null ? void 0 : options.customFetchImpl) return options.customFetchImpl;
	if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) return globalThis.fetch;
	if (typeof window !== "undefined" && isFunction(window.fetch)) return window.fetch;
	throw new Error("No fetch implementation found");
}
function mergeHeaders(...sources) {
	const merged = {};
	for (const source of sources) {
		if (!source) continue;
		if (source instanceof Headers) source.forEach((value, key) => {
			merged[key] = value;
		});
		else {
			const entries = Array.isArray(source) ? source : Object.entries(source);
			for (const [key, value] of entries) if (value !== null && value !== void 0) merged[key] = value;
		}
	}
	return merged;
}
async function getHeaders(opts) {
	const headers = new Headers(mergeHeaders(opts == null ? void 0 : opts.headers, await getAuthHeader(opts)));
	if (!headers.has("content-type")) {
		const contentType = detectContentType(opts == null ? void 0 : opts.body);
		if (contentType) headers.set("content-type", contentType);
	}
	return headers;
}
function detectContentType(body) {
	if (isJSONSerializable(body)) return "application/json";
	return null;
}
function getMediaType(headers) {
	const contentType = headers.get("content-type");
	return contentType ? contentType.split(";")[0].trim().toLowerCase() : null;
}
function getBody(options, headers) {
	const { body } = options;
	if (!body) return null;
	if (!isJSONSerializable(body)) return body;
	if (typeof body === "string") return body;
	if (getMediaType(headers) === "application/x-www-form-urlencoded") return new URLSearchParams(body).toString();
	return JSON.stringify(body);
}
function getMethod(url, options) {
	var _a;
	if (options == null ? void 0 : options.method) return options.method.toUpperCase();
	if (url.startsWith("@")) {
		const pMethod = (_a = url.split("@")[1]) == null ? void 0 : _a.split("/")[0];
		if (!methods.includes(pMethod)) return (options == null ? void 0 : options.body) ? "POST" : "GET";
		return pMethod.toUpperCase();
	}
	return (options == null ? void 0 : options.body) ? "POST" : "GET";
}
function getTimeout(options, controller) {
	let abortTimeout;
	if (!(options == null ? void 0 : options.signal) && (options == null ? void 0 : options.timeout)) abortTimeout = setTimeout(() => controller == null ? void 0 : controller.abort(), options == null ? void 0 : options.timeout);
	return {
		abortTimeout,
		clearTimeout: () => {
			if (abortTimeout) clearTimeout(abortTimeout);
		}
	};
}
var ValidationError = class _ValidationError extends Error {
	constructor(issues, message) {
		super(message || JSON.stringify(issues, null, 2));
		this.issues = issues;
		Object.setPrototypeOf(this, _ValidationError.prototype);
	}
};
async function parseStandardSchema(schema, input) {
	const result = await schema["~standard"].validate(input);
	if (result.issues) throw new ValidationError(result.issues);
	return result.value;
}
var methods = [
	"get",
	"post",
	"put",
	"patch",
	"delete"
];
var applySchemaPlugin = (config) => ({
	id: "apply-schema",
	name: "Apply Schema",
	version: "1.0.0",
	async init(url, options) {
		var _a, _b, _c, _d;
		const schema = ((_b = (_a = config.plugins) == null ? void 0 : _a.find((plugin) => {
			var _a2;
			return ((_a2 = plugin.schema) == null ? void 0 : _a2.config) ? url.startsWith(plugin.schema.config.baseURL || "") || url.startsWith(plugin.schema.config.prefix || "") : false;
		})) == null ? void 0 : _b.schema) || config.schema;
		if (schema) {
			let urlKey = url;
			if ((_c = schema.config) == null ? void 0 : _c.prefix) {
				if (urlKey.startsWith(schema.config.prefix)) {
					urlKey = urlKey.replace(schema.config.prefix, "");
					if (schema.config.baseURL) url = url.replace(schema.config.prefix, schema.config.baseURL);
				}
			}
			if ((_d = schema.config) == null ? void 0 : _d.baseURL) {
				if (urlKey.startsWith(schema.config.baseURL)) urlKey = urlKey.replace(schema.config.baseURL, "");
			}
			if (urlKey.startsWith("/") && urlKey.charAt(1) === "@") urlKey = urlKey.substring(1);
			const keySchema = schema.schema[urlKey];
			if (keySchema) {
				let validatedHeaders = options == null ? void 0 : options.headers;
				if (keySchema.headers && !(options == null ? void 0 : options.disableValidation)) {
					const normalizedHeaders = {};
					if (options == null ? void 0 : options.headers) {
						if (options.headers instanceof Headers) options.headers.forEach((value, key) => {
							normalizedHeaders[key.toLowerCase()] = value;
						});
						else if (typeof options.headers === "object") {
							for (const [key, value] of Object.entries(options.headers)) if (value !== null && value !== void 0) normalizedHeaders[key.toLowerCase()] = value;
						}
					}
					const validated = await parseStandardSchema(keySchema.headers, normalizedHeaders);
					const finalHeaders = {};
					for (const [key, value] of Object.entries(validated)) finalHeaders[key.toLowerCase()] = value;
					validatedHeaders = finalHeaders;
				}
				let opts = __spreadProps(__spreadValues({}, options), {
					method: keySchema.method,
					output: keySchema.output,
					headers: validatedHeaders
				});
				if (!(options == null ? void 0 : options.disableValidation)) opts = __spreadProps(__spreadValues({}, opts), {
					body: keySchema.input ? await parseStandardSchema(keySchema.input, options == null ? void 0 : options.body) : options == null ? void 0 : options.body,
					params: keySchema.params ? await parseStandardSchema(keySchema.params, options == null ? void 0 : options.params) : options == null ? void 0 : options.params,
					query: keySchema.query ? await parseStandardSchema(keySchema.query, options == null ? void 0 : options.query) : options == null ? void 0 : options.query
				});
				return {
					url,
					options: opts
				};
			}
		}
		return {
			url,
			options
		};
	}
});
var createFetch = (config) => {
	async function $fetch(url, options) {
		const opts = __spreadProps(__spreadValues(__spreadValues({}, config), options), {
			headers: mergeHeaders(config == null ? void 0 : config.headers, options == null ? void 0 : options.headers),
			plugins: [
				...(config == null ? void 0 : config.plugins) || [],
				applySchemaPlugin(config || {}),
				...(options == null ? void 0 : options.plugins) || []
			]
		});
		if (config == null ? void 0 : config.catchAllError) try {
			return await betterFetch(url, opts);
		} catch (error) {
			return {
				data: null,
				error: {
					status: 500,
					statusText: "Fetch Error",
					message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
					error
				}
			};
		}
		return await betterFetch(url, opts);
	}
	return $fetch;
};
var isReservedPathSegment = (value) => value === "." || value === "..";
function encodePathSegment(segment, pathParams) {
	let pathSegment = segment;
	for (const [key, value] of pathParams) pathSegment = pathSegment.replace(key, value);
	if (isReservedPathSegment(pathSegment)) throw new TypeError("Path parameters cannot be reserved path segments");
	return encodeURIComponent(pathSegment);
}
function getURL2(url, option) {
	const { baseURL, params, query } = option || {
		query: {},
		params: {},
		baseURL: ""
	};
	let basePath = url.startsWith("http") ? url.split("/").slice(0, 3).join("/") : baseURL || "";
	if (url.startsWith("@")) {
		const m = url.toString().split("@")[1].split("/")[0];
		if (methods.includes(m)) url = url.replace(`@${m}/`, "/");
	}
	if (!basePath.endsWith("/")) basePath += "/";
	let [path, urlQuery] = url.replace(basePath, "").split("?");
	const queryParams = new URLSearchParams(urlQuery);
	for (const [key, value] of Object.entries(query || {})) {
		if (value == null) continue;
		let serializedValue;
		if (typeof value === "string") serializedValue = value;
		else if (Array.isArray(value)) {
			for (const val of value) queryParams.append(key, val);
			continue;
		} else serializedValue = JSON.stringify(value);
		queryParams.set(key, serializedValue);
	}
	const pathParams = /* @__PURE__ */ new Map();
	if (params) {
		if (Array.isArray(params)) {
			const paramPaths = path.split("/").filter((p) => p.startsWith(":"));
			for (const [index, key] of paramPaths.entries()) {
				const value = params[index];
				pathParams.set(key, String(value));
			}
		} else for (const [key, value] of Object.entries(params)) pathParams.set(`:${key}`, String(value));
	}
	path = path.split("/").map((segment) => encodePathSegment(segment, pathParams)).join("/");
	path = path.replace(/^\/+/, "");
	let queryParamString = queryParams.toString();
	queryParamString = queryParamString.length > 0 ? `?${queryParamString}`.replace(/\+/g, "%20") : "";
	if (!basePath.startsWith("http")) return `${basePath}${path}${queryParamString}`;
	return new URL(`${path}${queryParamString}`, basePath);
}
var betterFetch = async (url, options) => {
	var _a, _b, _c, _d, _e, _f, _g, _h;
	const { hooks, url: __url, options: opts } = await initializePlugins(url, options);
	const fetch = getFetch(opts);
	const controller = new AbortController();
	const signal = (_a = opts.signal) != null ? _a : controller.signal;
	const _url = getURL2(__url, opts);
	const headers = await getHeaders(opts);
	const body = getBody(opts, headers);
	const method = getMethod(__url, opts);
	const context = __spreadProps(__spreadValues({}, opts), {
		url: _url,
		headers,
		body,
		method,
		signal
	});
	for (const onRequest of hooks.onRequest) if (onRequest) {
		const res = await onRequest(context);
		if (typeof res === "object" && res !== null) Object.assign(context, res);
	}
	if ("pipeTo" in context && typeof context.pipeTo === "function" || typeof ((_b = options == null ? void 0 : options.body) == null ? void 0 : _b.pipe) === "function") {
		if (!("duplex" in context)) context.duplex = "half";
	}
	const { clearTimeout: clearTimeout2 } = getTimeout(opts, controller);
	let response = await fetch(context.url, context);
	clearTimeout2();
	const responseContext = {
		response,
		request: context
	};
	for (const onResponse of hooks.onResponse) if (onResponse) {
		const r = await onResponse(__spreadProps(__spreadValues({}, responseContext), { response: ((_c = options == null ? void 0 : options.hookOptions) == null ? void 0 : _c.cloneResponse) ? response.clone() : response }));
		if (r instanceof Response) response = r;
		else if (typeof r === "object" && r !== null) response = r.response;
	}
	if (response.ok) {
		if (!(context.method !== "HEAD")) return {
			data: "",
			error: null
		};
		const responseType = detectResponseType(response);
		const successContext = {
			data: null,
			response,
			request: context
		};
		if (responseType === "json" || responseType === "text") {
			const text = await response.text();
			successContext.data = await ((_d = context.jsonParser) != null ? _d : jsonParse)(text);
		} else successContext.data = await response[responseType]();
		if (context == null ? void 0 : context.output) {
			if (context.output && !context.disableValidation) successContext.data = await parseStandardSchema(context.output, successContext.data);
		}
		for (const onSuccess of hooks.onSuccess) if (onSuccess) await onSuccess(__spreadProps(__spreadValues({}, successContext), { response: ((_e = options == null ? void 0 : options.hookOptions) == null ? void 0 : _e.cloneResponse) ? response.clone() : response }));
		if (options == null ? void 0 : options.throw) return successContext.data;
		return {
			data: successContext.data,
			error: null
		};
	}
	const parser = (_f = options == null ? void 0 : options.jsonParser) != null ? _f : jsonParse;
	const responseText = await response.text();
	const isJSONResponse = isJSONParsable(responseText);
	const errorObject = isJSONResponse ? await parser(responseText) : null;
	const errorContext = {
		response,
		responseText,
		request: context,
		error: __spreadProps(__spreadValues({}, errorObject), {
			status: response.status,
			statusText: response.statusText
		})
	};
	for (const onError of hooks.onError) if (onError) await onError(__spreadProps(__spreadValues({}, errorContext), { response: ((_g = options == null ? void 0 : options.hookOptions) == null ? void 0 : _g.cloneResponse) ? response.clone() : response }));
	if (options == null ? void 0 : options.retry) {
		const retryStrategy = createRetryStrategy(options.retry);
		const _retryAttempt = (_h = options.retryAttempt) != null ? _h : 0;
		if (await retryStrategy.shouldAttemptRetry(_retryAttempt, response)) {
			for (const onRetry of hooks.onRetry) if (onRetry) await onRetry(responseContext);
			const delay = retryStrategy.getDelay(_retryAttempt);
			await new Promise((resolve) => setTimeout(resolve, delay));
			return await betterFetch(url, __spreadProps(__spreadValues({}, options), { retryAttempt: _retryAttempt + 1 }));
		}
	}
	if (options == null ? void 0 : options.throw) throw new BetterFetchError(response.status, response.statusText, isJSONResponse ? errorObject : responseText);
	return {
		data: null,
		error: __spreadProps(__spreadValues({}, errorObject), {
			status: response.status,
			statusText: response.statusText
		})
	};
};
new TextEncoder();
var decoder = new TextDecoder();
var strictDecoder = new TextDecoder("utf-8", { fatal: true });
//#endregion
//#region node_modules/.pnpm/jose@6.2.10/node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
	static code = "ERR_JOSE_GENERIC";
	code = "ERR_JOSE_GENERIC";
	constructor(message, options) {
		super(message, options);
		this.name = this.constructor.name;
		Error.captureStackTrace?.(this, this.constructor);
	}
};
var JWTInvalid = class extends JOSEError {
	static code = "ERR_JWT_INVALID";
	code = "ERR_JWT_INVALID";
};
//#endregion
//#region node_modules/.pnpm/jose@6.2.10/node_modules/jose/dist/webapi/lib/base64.js
function decodeBase64(encoded) {
	if (Uint8Array.fromBase64) return Uint8Array.fromBase64(encoded);
	const binary = atob(encoded);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.10/node_modules/jose/dist/webapi/util/base64url.js
var invalid = "The input to be decoded is not correctly encoded.";
function decode(input) {
	if (Uint8Array.fromBase64) try {
		return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), { alphabet: "base64url" });
	} catch (cause) {
		throw new TypeError(invalid, { cause });
	}
	let encoded = input;
	if (encoded instanceof Uint8Array) encoded = decoder.decode(encoded);
	if (encoded.includes("+") || encoded.includes("/")) throw new TypeError(invalid);
	encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
	try {
		return decodeBase64(encoded);
	} catch {
		throw new TypeError(invalid);
	}
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.10/node_modules/jose/dist/webapi/lib/type_checks.js
function isObject(input) {
	if (typeof input !== "object" || input === null || Object.prototype.toString.call(input) !== "[object Object]") return false;
	const prototype = Object.getPrototypeOf(input);
	return prototype === null || Object.getPrototypeOf(prototype) === null;
}
//#endregion
//#region node_modules/.pnpm/jose@6.2.10/node_modules/jose/dist/webapi/util/decode_jwt.js
function decodeJwt(jwt) {
	if (typeof jwt !== "string") throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
	const { 1: payload, length } = jwt.split(".");
	if (length === 5) throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
	if (length !== 3) throw new JWTInvalid("Invalid JWT");
	if (!payload) throw new JWTInvalid("JWTs must contain a payload");
	let decoded;
	try {
		decoded = decode(payload);
	} catch {
		throw new JWTInvalid("Failed to base64url decode the payload");
	}
	let result;
	try {
		result = JSON.parse(strictDecoder.decode(decoded));
	} catch {
		throw new JWTInvalid("Failed to parse the decoded payload as JSON");
	}
	if (!isObject(result)) throw new JWTInvalid("Invalid JWT Claims Set");
	return result;
}
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.30_@tanstack+react-start@1.168.49_esbuild@0.27.0_react-dom@19.2.8_react_c7beaf43e38f2bce4d296c13ee3ec59e/node_modules/better-auth/dist/cookies/cookie-utils.mjs
function tryDecode(str) {
	if (str.indexOf("%") === -1) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
/**
* Cookie-name token char set per RFC 7230 §3.2.6.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6
*/
var cookieNameRegex = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E\x5F\x60\x61-\x7A\x7C\x7E]+$/;
/**
* Cookie-value char set per RFC 6265 §4.1.1, plus space and comma.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
* @see https://github.com/golang/go/issues/7243
*/
var cookieValueRegex = /^[\x20\x21\x23-\x3A\x3C-\x5B\x5D-\x7E]*$/;
/**
* Strip surrounding double-quotes per RFC 6265 §4.1.1 quoted-string form.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
*/
function unquoteCookieValue(value) {
	if (value.length < 2 || !value.startsWith("\"") || !value.endsWith("\"")) return value;
	return value.slice(1, -1);
}
/**
* Trim leading/trailing OWS (space / horizontal tab) per RFC 7230 §3.2.3.
* Narrower than `String.prototype.trim()`, which strips CR/LF and other
* whitespace and would let CTLs escape `cookieValueRegex`.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.3
*/
function trimOWS(s) {
	let start = 0;
	let end = s.length;
	while (start < end) {
		const c = s.charCodeAt(start);
		if (c !== 32 && c !== 9) break;
		start++;
	}
	while (end > start) {
		const c = s.charCodeAt(end - 1);
		if (c !== 32 && c !== 9) break;
		end--;
	}
	return start === 0 && end === s.length ? s : s.slice(start, end);
}
/**
* Tolerates `;` separators without the SP that RFC 6265 §4.2.1 mandates,
* since proxies and runtimes commonly strip it. Silently drops entries
* whose name violates RFC 7230 token or whose value violates RFC 6265
* cookie-octet (plus space and comma). Strips optional surrounding
* double-quotes per RFC 6265 §4.1.1.
*/
function parseCookies(cookie) {
	const cookieMap = /* @__PURE__ */ new Map();
	if (cookie.length < 2) return cookieMap;
	for (const chunk of cookie.split(";")) {
		const eq = chunk.indexOf("=");
		if (eq === -1) continue;
		const key = trimOWS(chunk.slice(0, eq));
		const val = unquoteCookieValue(trimOWS(chunk.slice(eq + 1)));
		if (cookieNameRegex.test(key) && cookieValueRegex.test(val)) cookieMap.set(key, tryDecode(val));
	}
	return cookieMap;
}
new TextEncoder().encode;
//#endregion
//#region node_modules/.pnpm/better-auth@1.6.30_@tanstack+react-start@1.168.49_esbuild@0.27.0_react-dom@19.2.8_react_c7beaf43e38f2bce4d296c13ee3ec59e/node_modules/better-auth/dist/cookies/index.mjs
var getSessionCookie = (request, config) => {
	const cookies = (request instanceof Headers || !("headers" in request) ? request : request.headers).get("cookie");
	if (!cookies) return null;
	const { cookieName = "session_token", cookiePrefix = "better-auth" } = config || {};
	const parsedCookie = parseCookies(cookies);
	const getCookie = (name) => parsedCookie.get(`__Secure-${name}`) ?? parsedCookie.get(name);
	const sessionToken = getCookie(`${cookiePrefix}.${cookieName}`) || getCookie(`${cookiePrefix}-${cookieName}`);
	if (sessionToken) return sessionToken;
	return null;
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/TemplateTag/TemplateTag.js
var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();
var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);
function _taggedTemplateLiteral(strings, raw) {
	return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/**
* @class TemplateTag
* @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
*/
var TemplateTag = function() {
	/**
	* constructs a template tag
	* @constructs TemplateTag
	* @param  {...Object} [...transformers] - an array or arguments list of transformers
	* @return {Function}                    - a template tag
	*/
	function TemplateTag() {
		var _this = this;
		for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) transformers[_key] = arguments[_key];
		_classCallCheck(this, TemplateTag);
		this.tag = function(strings) {
			for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) expressions[_key2 - 1] = arguments[_key2];
			if (typeof strings === "function") return _this.interimTag.bind(_this, strings);
			if (typeof strings === "string") return _this.transformEndResult(strings);
			strings = strings.map(_this.transformString.bind(_this));
			return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
		};
		if (transformers.length > 0 && Array.isArray(transformers[0])) transformers = transformers[0];
		this.transformers = transformers.map(function(transformer) {
			return typeof transformer === "function" ? transformer() : transformer;
		});
		return this.tag;
	}
	/**
	* Applies all transformers to a template literal tagged with this method.
	* If a function is passed as the first argument, assumes the function is a template tag
	* and applies it to the template, returning a template tag.
	* @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
	* @param  {...*}                            ...expressions - Optional list of substitution values.
	* @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
	*/
	_createClass(TemplateTag, [
		{
			key: "interimTag",
			/**
			* An intermediary template tag that receives a template tag and passes the result of calling the template with the received
			* template tag to our own template tag.
			* @param  {Function}        nextTag          - the received template tag
			* @param  {Array<String>}   template         - the template to process
			* @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
			* @return {*}                                - the final processed value
			*/
			value: function interimTag(previousTag, template) {
				for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) substitutions[_key3 - 2] = arguments[_key3];
				return this.tag(_templateObject, previousTag.apply(void 0, [template].concat(substitutions)));
			}
		},
		{
			key: "processSubstitutions",
			value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
				var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
				return "".concat(resultSoFar, substitution, remainingPart);
			}
		},
		{
			key: "transformString",
			value: function transformString(str) {
				return this.transformers.reduce(function cb(res, transform) {
					return transform.onString ? transform.onString(res) : res;
				}, str);
			}
		},
		{
			key: "transformSubstitution",
			value: function transformSubstitution(substitution, resultSoFar) {
				return this.transformers.reduce(function cb(res, transform) {
					return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
				}, substitution);
			}
		},
		{
			key: "transformEndResult",
			value: function transformEndResult(endResult) {
				return this.transformers.reduce(function cb(res, transform) {
					return transform.onEndResult ? transform.onEndResult(res) : res;
				}, endResult);
			}
		}
	]);
	return TemplateTag;
}();
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js
/**
* TemplateTag transformer that trims whitespace on the end result of a tagged template
* @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
* @return {Object}           - a TemplateTag transformer
*/
var trimResultTransformer = function trimResultTransformer() {
	var side = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	return { onEndResult: function onEndResult(endResult) {
		if (side === "") return endResult.trim();
		side = side.toLowerCase();
		if (side === "start" || side === "left") return endResult.replace(/^\s*/, "");
		if (side === "end" || side === "right") return endResult.replace(/\s*$/, "");
		throw new Error("Side not supported: " + side);
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js
function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
		return arr2;
	} else return Array.from(arr);
}
/**
* strips indentation from a template literal
* @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
* @return {Object}                  - a TemplateTag transformer
*/
var stripIndentTransformer = function stripIndentTransformer() {
	var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
	return { onEndResult: function onEndResult(endResult) {
		if (type === "initial") {
			var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
			var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function(el) {
				return el.length;
			})));
			if (indent) {
				var regexp = new RegExp("^.{" + indent + "}", "gm");
				return endResult.replace(regexp, "");
			}
			return endResult;
		}
		if (type === "all") return endResult.replace(/^[^\S\n]+/gm, "");
		throw new Error("Unknown type: " + type);
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js
/**
* Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
* @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
* @param  {*}               replaceWith - the replacement value
* @return {Object}                      - a TemplateTag transformer
*/
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
	return { onEndResult: function onEndResult(endResult) {
		if (replaceWhat == null || replaceWith == null) throw new Error("replaceResultTransformer requires at least 2 arguments.");
		return endResult.replace(replaceWhat, replaceWith);
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
	return { onSubstitution: function onSubstitution(substitution, resultSoFar) {
		if (replaceWhat == null || replaceWith == null) throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
		if (substitution == null) return substitution;
		else return substitution.toString().replace(replaceWhat, replaceWith);
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js
var defaults = {
	separator: "",
	conjunction: "",
	serial: false
};
/**
* Converts an array substitution to a string containing a list
* @param  {String} [opts.separator = ''] - the character that separates each item
* @param  {String} [opts.conjunction = '']  - replace the last separator with this
* @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
*
* @return {Object}                     - a TemplateTag transformer
*/
var inlineArrayTransformer = function inlineArrayTransformer() {
	var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaults;
	return { onSubstitution: function onSubstitution(substitution, resultSoFar) {
		if (Array.isArray(substitution)) {
			var arrayLength = substitution.length;
			var separator = opts.separator;
			var conjunction = opts.conjunction;
			var serial = opts.serial;
			var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
			if (indent) substitution = substitution.join(separator + indent[1]);
			else substitution = substitution.join(separator + " ");
			if (conjunction && arrayLength > 1) {
				var separatorIndex = substitution.lastIndexOf(separator);
				substitution = substitution.slice(0, separatorIndex) + (serial ? separator : "") + " " + conjunction + substitution.slice(separatorIndex + 1);
			}
		}
		return substitution;
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js
var splitStringTransformer = function splitStringTransformer(splitBy) {
	return { onSubstitution: function onSubstitution(substitution, resultSoFar) {
		if (splitBy != null && typeof splitBy === "string") {
			if (typeof substitution === "string" && substitution.includes(splitBy)) substitution = substitution.split(splitBy);
		} else throw new Error("You need to specify a string character to split by.");
		return substitution;
	} };
};
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js
var isValidValue = function isValidValue(x) {
	return x != null && !Number.isNaN(x) && typeof x !== "boolean";
};
var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
	return { onSubstitution: function onSubstitution(substitution) {
		if (Array.isArray(substitution)) return substitution.filter(isValidValue);
		if (isValidValue(substitution)) return substitution;
		return "";
	} };
};
new TemplateTag(inlineArrayTransformer({ separator: "," }), stripIndentTransformer, trimResultTransformer);
new TemplateTag(inlineArrayTransformer({
	separator: ",",
	conjunction: "and"
}), stripIndentTransformer, trimResultTransformer);
new TemplateTag(inlineArrayTransformer({
	separator: ",",
	conjunction: "or"
}), stripIndentTransformer, trimResultTransformer);
new TemplateTag(splitStringTransformer("\n"), removeNonPrintingValuesTransformer, inlineArrayTransformer, stripIndentTransformer, trimResultTransformer);
new TemplateTag(splitStringTransformer("\n"), inlineArrayTransformer, stripIndentTransformer, trimResultTransformer, replaceSubstitutionTransformer(/&/g, "&amp;"), replaceSubstitutionTransformer(/</g, "&lt;"), replaceSubstitutionTransformer(/>/g, "&gt;"), replaceSubstitutionTransformer(/"/g, "&quot;"), replaceSubstitutionTransformer(/'/g, "&#x27;"), replaceSubstitutionTransformer(/`/g, "&#x60;"));
new TemplateTag(replaceResultTransformer(/(?:\n(?:\s*))+/g, " "), trimResultTransformer);
new TemplateTag(replaceResultTransformer(/(?:\n\s*)/g, ""), trimResultTransformer);
new TemplateTag(inlineArrayTransformer({ separator: "," }), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
new TemplateTag(inlineArrayTransformer({
	separator: ",",
	conjunction: "or"
}), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
new TemplateTag(inlineArrayTransformer({
	separator: ",",
	conjunction: "and"
}), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
new TemplateTag(inlineArrayTransformer, stripIndentTransformer, trimResultTransformer);
new TemplateTag(inlineArrayTransformer, replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
//#endregion
//#region node_modules/.pnpm/common-tags@1.8.2/node_modules/common-tags/es/stripIndent/stripIndent.js
var stripIndent = new TemplateTag(stripIndentTransformer, trimResultTransformer);
new TemplateTag(stripIndentTransformer("all"), trimResultTransformer);
//#endregion
//#region node_modules/.pnpm/@convex-dev+better-auth@0.12.5_@standard-schema+spec@1.1.0_better-auth@1.6.30_@tanstack_e038d029f3f01213fd59add74e8b9b19/node_modules/@convex-dev/better-auth/dist/plugins/convex/index.js
var JWT_COOKIE_NAME = "convex_jwt";
//#endregion
//#region node_modules/.pnpm/@convex-dev+better-auth@0.12.5_@standard-schema+spec@1.1.0_better-auth@1.6.30_@tanstack_e038d029f3f01213fd59add74e8b9b19/node_modules/@convex-dev/better-auth/dist/utils/index.js
var getToken$1 = async (siteUrl, headers, opts) => {
	headers.set("host", new URL(siteUrl).host);
	const fetchToken = async () => {
		const { data } = await betterFetch(`${opts?.basePath ? (opts.basePath.startsWith("/") ? opts.basePath : `/${opts.basePath}`).replace(/\/+$/, "") : "/api/auth"}/convex/token`, {
			baseURL: siteUrl,
			headers
		});
		return {
			isFresh: true,
			token: data?.token
		};
	};
	if (!opts?.jwtCache?.enabled || opts.forceRefresh) return await fetchToken();
	const token = getSessionCookie(new Headers(headers), {
		cookieName: JWT_COOKIE_NAME,
		cookiePrefix: opts?.cookiePrefix
	});
	if (!token) return await fetchToken();
	try {
		const exp = decodeJwt(token)?.exp;
		const now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
		if (!(exp ? now > exp + (opts?.jwtCache?.expirationToleranceSeconds ?? 60) : true)) return {
			isFresh: false,
			token
		};
	} catch (error) {
		console.error("Error decoding JWT", error);
	}
	return await fetchToken();
};
//#endregion
//#region node_modules/.pnpm/@convex-dev+better-auth@0.12.5_@standard-schema+spec@1.1.0_better-auth@1.6.30_@tanstack_e038d029f3f01213fd59add74e8b9b19/node_modules/@convex-dev/better-auth/dist/react-start/index.js
var cache = React.cache || ((fn) => {
	return (...args) => fn(...args);
});
function setupClient(options) {
	const client = new ConvexHttpClient(options.convexUrl);
	if (options.token !== void 0) client.setAuth(options.token);
	client.setFetchOptions({ cache: "no-store" });
	return client;
}
var parseConvexSiteUrl = (url) => {
	if (!url) throw new Error(stripIndent`
      CONVEX_SITE_URL is not set.
      This is automatically set in the Convex backend, but must be set in the TanStack Start environment.
      For local development, this can be set in the .env.local file.
    `);
	if (url.endsWith(".convex.cloud")) throw new Error(stripIndent`
      CONVEX_SITE_URL should be set to your Convex Site URL, which ends in .convex.site.
      Currently set to ${url}.
    `);
	return url;
};
var handler$1 = (request, opts) => {
	const requestUrl = new URL(request.url);
	const nextUrl = `${opts.convexSiteUrl}${requestUrl.pathname}${requestUrl.search}`;
	const headers = new Headers(request.headers);
	headers.delete("transfer-encoding");
	headers.delete("content-length");
	headers.delete("connection");
	headers.set("accept-encoding", "application/json");
	headers.set("host", new URL(opts.convexSiteUrl).host);
	headers.set("x-forwarded-host", requestUrl.host);
	headers.set("x-forwarded-proto", requestUrl.protocol.replace(/:$/, ""));
	headers.set("x-better-auth-forwarded-host", requestUrl.host);
	headers.set("x-better-auth-forwarded-proto", requestUrl.protocol.replace(/:$/, ""));
	return fetch(nextUrl, {
		method: request.method,
		headers,
		redirect: "manual",
		body: request.body,
		duplex: "half"
	});
};
var convexBetterAuthReactStart = (opts) => {
	const siteUrl = parseConvexSiteUrl(opts.convexSiteUrl);
	const cachedGetToken = cache(async (opts) => {
		const { getRequestHeaders } = await import("../server.js").then((n) => n.t);
		const headers = getRequestHeaders();
		const mutableHeaders = new Headers(headers);
		mutableHeaders.delete("content-length");
		mutableHeaders.delete("transfer-encoding");
		mutableHeaders.set("accept-encoding", "identity");
		return getToken$1(siteUrl, mutableHeaders, opts);
	});
	const callWithToken = async (fn) => {
		const token = await cachedGetToken(opts) ?? {};
		try {
			return await fn(token?.token);
		} catch (error) {
			if (!opts?.jwtCache?.enabled || token.isFresh || opts.jwtCache?.isAuthError(error)) throw error;
			return await fn((await cachedGetToken({
				...opts,
				forceRefresh: true
			})).token);
		}
	};
	return {
		getToken: async () => {
			return (await cachedGetToken(opts)).token;
		},
		handler: (request) => handler$1(request, opts),
		fetchAuthQuery: async (query, ...args) => {
			return callWithToken((token) => {
				return setupClient({
					...opts,
					token
				}).query(query, ...args);
			});
		},
		fetchAuthMutation: async (mutation, ...args) => {
			return callWithToken((token) => {
				return setupClient({
					...opts,
					token
				}).mutation(mutation, ...args);
			});
		},
		fetchAuthAction: async (action, ...args) => {
			return callWithToken((token) => {
				return setupClient({
					...opts,
					token
				}).action(action, ...args);
			});
		}
	};
};
//#endregion
//#region src/lib/auth-server.ts
var { handler, getToken, fetchAuthQuery, fetchAuthMutation, fetchAuthAction } = convexBetterAuthReactStart({
	convexUrl: process.env.VITE_CONVEX_URL,
	convexSiteUrl: process.env.VITE_CONVEX_SITE_URL
});
//#endregion
export { handler as n, createFetch as r, getToken as t };
