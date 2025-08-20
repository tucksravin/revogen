<script lang="ts">
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import downArrow from "$lib/assets/icons/downArrow.svg"
  import { isFilled } from "@prismicio/client";
	import type { Content } from "@prismicio/client";
	import { PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";
	
	type Props = SliceComponentProps<Content.RichTextSlice>;
	const { slice }: Props = $props();
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	style="padding-top:{parseInt(slice.primary.vertical_padding)*4}px;padding-bottom:{parseInt(slice.primary.vertical_padding)*4}px;"
	class="text-white"
>
{#if slice.primary.max_width!=="limited"}
	<ContentWidth class="flex flex-col gap-6 {slice.primary.floatCenter?"text-center justify-center":""} ">
		<PrismicRichText field={slice.primary.text}/>
		{#if isFilled.link(slice.primary.button)}
				<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
		{/if}
		{#if slice.primary.show_scroll_arrow}
			<img src={downArrow} alt="down" class="mt-10 h-20"/>
		{/if}
	</ContentWidth>
{:else}
<ContentWidth class='h-full'>
	<div class="w-full max-w-[600px] mx-auto flex flex-col gap-6  justify-center {slice.primary.floatCenter?"text-center items-center":""}">
		<PrismicRichText field={slice.primary.text}/>
		{#if isFilled.link(slice.primary.button)}
				<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
		{/if}
		{#if slice.primary.show_scroll_arrow}
			<img src={downArrow} alt="down" class="mt-10 h-20"/>
		{/if}
	</div>
</ContentWidth>
{/if}
</section>