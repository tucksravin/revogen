<script lang="ts">
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
	import type { Content } from "@prismicio/client";
	import { PrismicImage, PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";
	import { isFilled } from "@prismicio/client";
	import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
	
	type Props = SliceComponentProps<Content.TwoColSlice>;
	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	style="padding-top:{parseInt(slice.primary.vertical_padding)*4}px;padding-bottom:{parseInt(slice.primary.vertical_padding)*4}px;"
	class="text-white"
>
{#if slice.variation==='default'}
	<ContentWidth class="flex  {slice.primary.isMediaFirst?"flex-col md:flex-row":"flex-col-reverse md:flex-row-reverse"}">
		<div class="w-full md:w-1/2">
			<PrismicImage 
				field={slice.primary.image} 
				class="w-full object-cover {
					slice.primary.image_aspect==='4:3'? "aspect-[4/3]":
					slice.primary.image_aspect==='3:4'? "aspect-[3/4]":
					slice.primary.image_aspect==='16:9'? "aspect-video":
					slice.primary.image_aspect==='9:16'? "aspect-[9/16]":
					slice.primary.image_aspect==='square'? "aspect-square" :
					"" 
				}"
			/>
		</div>
		<div class="w-full md:w-1/2 flex flex-col gap-6 mt-6 md:mt-0 {slice.primary.isMediaFirst?"md:pl-20":"md:pr-20"}">
			<PrismicRichText field={slice.primary.text}/>
			{#if isFilled.link(slice.primary.button)}
				<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
			{/if}
		</div>
	</ContentWidth>
{/if}
</section>