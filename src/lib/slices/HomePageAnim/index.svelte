<script lang="ts">
	import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
	import type { Content } from "@prismicio/client";
	import type { SliceComponentProps } from "@prismicio/svelte";
	import { gradientTheme, defaultGradientTheme } from "$lib/stores/gradientTheme";
	import Img from "@zerodevx/svelte-img";
	import surgical from "$lib/assets/images/surgical.png?as=run"
	import ocular from "$lib/assets/images/ocular.png?as=run"
	import woundCare from "$lib/assets/images/woundCare.png?as=run"

	type Props = SliceComponentProps<Content.HomePageAnimSlice>

	const { slice }: Props = $props();
</script>


<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="min-h-screen w-screen py-8 md:py-0 relative"
>

<ContentWidth class="h-full w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly text-white">
		<div 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center gap-4' 
			onmouseenter={()=>gradientTheme.set(1)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			<Img src={surgical} alt="surgical" />
			Surgical
		</div>
		<div 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center gap-4'  
			onmouseenter={()=>gradientTheme.set(2)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			<Img src={woundCare} alt="wound care" />
			Wound Care
		
		</div>
		<div 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center gap-4'  
			onmouseenter={()=>gradientTheme.set(3)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			role="button"
			tabindex="0"
		>
			<Img src={ocular} alt="ocular" />
			Ocular
		</div>
</ContentWidth>

</section>