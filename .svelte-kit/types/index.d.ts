type DynamicRoutes = {
	"/[[preview=preview]]/surgical-grafts": { preview?: string };
	"/[[preview=preview]]/surgical-grafts/[uid]": { preview?: string; uid: string };
	"/[[preview=preview]]": { preview?: string };
	"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
};

type Layouts = {
	"/": { preview?: string; uid?: string };
	"/api": undefined;
	"/api/preview": undefined;
	"/slice-simulator": undefined;
	"/[[preview=preview]]/surgical-grafts": { preview?: string; uid?: string };
	"/[[preview=preview]]/surgical-grafts/[uid]": { preview?: string; uid: string };
	"/[[preview=preview]]": { preview?: string; uid?: string };
	"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
};

export type RouteId = "/" | "/api" | "/api/preview" | "/slice-simulator" | "/[[preview=preview]]/surgical-grafts" | "/[[preview=preview]]/surgical-grafts/[uid]" | "/[[preview=preview]]" | "/[[preview=preview]]/[uid]";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/api" | "/api/preview" | "/slice-simulator" | `${string}/surgical-grafts` & {} | `${string}/surgical-grafts/${string}` & {} | `${string}` & {} | `${string}/${string}` & {};

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/apple-touch-icon.png" | "/favicon-96x96.png" | "/favicon.ico" | "/favicon.svg" | "/site.webmanifest" | "/web-app-manifest-192x192.png" | "/web-app-manifest-512x512.png";