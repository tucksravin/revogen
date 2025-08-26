<script lang="ts">
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import ScreenWidthMedia from "$lib/components/ScreenWidth/ScreenWidthMedia.svelte";
  import { isFilled, type Content } from "@prismicio/client";
  import { PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";
  import downArrow from "$lib/assets/icons/downArrow.svg"

  type Props = SliceComponentProps<Content.ScreenWidthVideoSlice>;

  const { slice }: Props = $props();
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class='text-white'
>
  <ScreenWidthMedia 
  	field={isFilled.image(slice.primary.placeholder_image)?slice.primary.placeholder_image:null} 
	vimeoId={slice.primary.vimeo_id as string || ''}
	darken={slice.primary.darken} 
	percentHeight={slice.primary.height==='screen' ? 100 : 50}>
	<div class='absolute w-full h-full top-0 left-0'>
		{#if slice.primary.max_width!=="limited"}
	<ContentWidth class="h-full flex flex-col gap-2 md:gap-6 py-6 md:py-12 {slice.primary.text_float==='center'?"justify-center":"justify-end"} text-center items-center">
		<PrismicRichText field={slice.primary.text}/>
		<div class="flex gap-5">
				{#if isFilled.link(slice.primary.button)}
					<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
				{/if}
				{#if isFilled.link(slice.primary.button_two)}
					<DefaultButton href={slice.primary.button_two.url}>{slice.primary.button_two.text}</DefaultButton>
				{/if}
			</div>


	</ContentWidth>
{:else}
<ContentWidth class='h-full'>
	<div class="h-full w-full max-w-[600px] mx-auto flex flex-col gap-2 md:gap-6 py-6 md:py-12 {slice.primary.text_float==='center'?"justify-center":"justify-end"} text-center items-center">
		<PrismicRichText field={slice.primary.text}/>
		{#if isFilled.link(slice.primary.button)}
				<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
		{/if}


	</div>
</ContentWidth>
{/if}
	</div>

		{#if slice.primary.show_scroll_arrow}
			<img src={downArrow} alt="down" class="absolute bottom-4 h-16 left-1/2 -translate-x-1/2"/>
		{/if}

  </ScreenWidthMedia>
</section>