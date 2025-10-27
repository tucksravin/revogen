<script lang="ts">
  import DefaultButton from "$lib/components/Buttons/DefaultButton.svelte";
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
  import ScreenWidthMedia from "$lib/components/ScreenWidth/ScreenWidthMedia.svelte";
  import { isFilled, type Content } from "@prismicio/client";
  import { PrismicRichText, type SliceComponentProps } from "@prismicio/svelte";
    import downArrow from "$lib/assets/icons/downArrow.svg"
	import gridlines from "$lib/assets/icons/gridlines_two.svg"


  type Props = SliceComponentProps<Content.HomeHeroSlice>;

	let section:HTMLElement;

	const scrollToNext = () => {
		document.getElementsByTagName('main')[0].scrollTo({left:0, top:(section.getBoundingClientRect().height/2), behavior:'smooth'})

		console.log(section.getBoundingClientRect().bottom)
	}

  const { slice }: Props = $props();
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class='text-white relative'
  bind:this={section}
>
      <button class="absolute top-1/2 -translate-y-[150%] left-1/2 -translate-x-1/2" onclick={scrollToNext}>
			<img src={downArrow} alt="down" class="h-16 negative-bump"/>
		</button>
  <ScreenWidthMedia 
  	field={isFilled.image(slice.primary.placeholder_image)?slice.primary.placeholder_image:null} 
	vimeoId={slice.primary.vimeo_id as string || ''}
	darken
	backdrop
	percentHeight={100}
  >

  </ScreenWidthMedia>
<div class="w-screen h-screen">
  	<ContentWidth class="flex flex-col gap-2 md:gap-6 py-6 md:py-12 justify-center text-center items-center h-full">
      <div class="w-full max-w-[600px] mt-12">
		    <PrismicRichText field={slice.primary.text}/>
      </div>

				{#if isFilled.link(slice.primary.button)}
					<DefaultButton href={slice.primary.button.url}>{slice.primary.button.text}</DefaultButton>
				{/if}



	</ContentWidth>
</div>
<img src={gridlines} class="absolute bottom-0 left-0 w-screen" alt="decorative gridlines" />
</section>