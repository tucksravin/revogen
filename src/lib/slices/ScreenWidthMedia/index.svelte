<script lang="ts">
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import ScreenWidthMedia from "$lib/components/ScreenWidth/ScreenWidthMedia.svelte";
  import { isFilled, type Content } from "@prismicio/client";
  import { PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";

  type Props = SliceComponentProps<Content.ScreenWidthVideoSlice>;

  const { slice }: Props = $props();
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <ScreenWidthMedia 
  	field={slice.primary.placeholder_image} 
	vimeoId={slice.primary.vimeo_id as string} 
	percentHeight={slice.primary.height==='screen' ? 100 : 50}>
	<div class='absolute w-full h-full top-0 left-0'>
		<ContentWidth>
			<div class='rich-text'>
				<PrismicRichText field={slice.primary.centered_text} />
			</div>
			{#if isFilled.link(slice.primary.button_one)}
				<DefaultButton href={slice.primary.button_one.url}>{slice.primary.button_one.text}</DefaultButton>
			{/if}
		</ContentWidth>
	</div>

  </ScreenWidthMedia>
</section>