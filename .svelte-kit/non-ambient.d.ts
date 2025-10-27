
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/preview" | "/slice-simulator" | "/[[preview=preview]]/surgical-grafts" | "/[[preview=preview]]/surgical-grafts/[uid]" | "/[[preview=preview]]" | "/[[preview=preview]]/[uid]";
		RouteParams(): {
			"/[[preview=preview]]/surgical-grafts": { preview?: string };
			"/[[preview=preview]]/surgical-grafts/[uid]": { preview?: string; uid: string };
			"/[[preview=preview]]": { preview?: string };
			"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
		};
		LayoutParams(): {
			"/": { preview?: string; uid?: string };
			"/api": Record<string, never>;
			"/api/preview": Record<string, never>;
			"/slice-simulator": Record<string, never>;
			"/[[preview=preview]]/surgical-grafts": { preview?: string; uid?: string };
			"/[[preview=preview]]/surgical-grafts/[uid]": { preview?: string; uid: string };
			"/[[preview=preview]]": { preview?: string; uid?: string };
			"/[[preview=preview]]/[uid]": { preview?: string; uid: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/preview" | "/api/preview/" | "/slice-simulator" | "/slice-simulator/" | `${string}/surgical-grafts` & {} | `${string}/surgical-grafts/` & {} | `${string}/surgical-grafts/${string}` & {} | `${string}/surgical-grafts/${string}/` & {} | `${string}` & {} | `${string}/` & {} | `${string}/${string}` & {} | `${string}/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/RevgroPutty.riv" | "/apple-touch-icon.png" | "/favicon-96x96.png" | "/favicon.ico" | "/favicon.svg" | "/robots.txt" | "/site.webmanifest" | "/web-app-manifest-192x192.png" | "/web-app-manifest-512x512.png" | string & {};
	}
}