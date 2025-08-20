<script lang="ts">
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
	import type { Content } from "@prismicio/client";
	import type { SliceComponentProps } from "@prismicio/svelte";

	interface Props extends SliceComponentProps<Content.DistributorLoginSlice> {}

	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	style="padding-top:{parseInt(slice.primary.vertical_padding)*4}px;padding-bottom:{parseInt(slice.primary.vertical_padding)*4}px;"
	class="text-white"
>
<ContentWidth>
	<p class="max-w-lg">Enter password to access the Distributor Resource Hub:</p>
	<div class="flex flex-col mt-16 items-center gap-2">
		<p>PASSWORD</p>
		<input type="password" class="h-10 w-full max-w-sm rounded-sm bg-white/30 text-black/40 px-2"/>
		<p class="text-xs max-w-sm text-center">This portal is password protected, please contact your RevoGen administrator for access.</p>
	</div>
	<button aria-label="submit password" class="h-8 w-8 border-2 border-white rounded-full mt-16 hover:border-light-blue hover:text-light-blue transition duration-500 active:duration-200 active:text-white active:border-white"><i class="fa-regular fa-chevron-right fa-xl bump"></i></button>
</ContentWidth>
</section>