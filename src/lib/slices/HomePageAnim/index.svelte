<script lang="ts">
  import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/svelte";
import { gradientTheme, defaultGradientTheme } from "$lib/stores/gradientTheme";

type Props = SliceComponentProps<Content.HomePageAnimSlice>

const { slice }: Props = $props();
</script>

<style>

	.interactive-button {
		width: 10rem;
		height: 10rem;
		border: 2px solid;
		border-color: white;
		background-color: rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background-color 0.3s ease, transform 0.2s ease;
		will-change: background-color, transform;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.interactive-button:hover {
		background-color: rgba(255, 255, 255, 0.6);
	}



</style>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="h-screen w-screen"
>

<ContentWidth class="h-full flex flex-col md:flex-row items-center justify-evenly">
		<div 
			class='interactive-button' 
			onmouseenter={()=>gradientTheme.set(1)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			surgical
		</div>
		<div 
			class='interactive-button' 
			onmouseenter={()=>gradientTheme.set(2)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			wound care
		</div>
		<div 
			class='interactive-button' 
			onmouseenter={()=>gradientTheme.set(3)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			ocular
		</div>
</ContentWidth>

</section>