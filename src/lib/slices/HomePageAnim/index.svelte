<script lang="ts">
	import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
	import type { Content } from "@prismicio/client";
	import type { SliceComponentProps } from "@prismicio/svelte";
	import { gradientTheme, defaultGradientTheme } from "$lib/stores/gradientTheme";
	import Img from "@zerodevx/svelte-img";
	import surgical from "$lib/assets/images/surgical.png"
	import ocular from "$lib/assets/images/ocular.png"
	import woundCare from "$lib/assets/images/woundCare.png"
  import { fade, slide } from "svelte/transition";

	type Props = SliceComponentProps<Content.HomePageAnimSlice>

	const { slice }: Props = $props();
</script>


<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="min-h-screen w-screen py-8 md:py-0 relative"
>

<ContentWidth class="h-full w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly text-white">
		<a 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center' 
			onmouseenter={()=>gradientTheme.set(1)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			href="/surgical-grafts"
			tabindex="0"
		>
			<img src={surgical} alt="surgical" class="{$gradientTheme===1?"":"brightness-0 invert opacity-5"} transition duration-700 ease-out" />
			<h4>Surgical Grafts</h4>
			{#if $gradientTheme===1}
				<p transition:slide class="text-center mt-4">Our Amniotic Discs have a number of applications, including use in repair and reconstructive procedures to treat ocular diseases, abnormalities, and post-op care.</p>
			{/if}
			<div class="w-8 h-8  border-[1.5px] border-white rounded-full relative mt-4 hover:opacity-80 bump">
				{#if $gradientTheme===1}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-chevron-right fa-lg"></i>
				{:else}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-plus fa-lg"></i>
				{/if}
			</div>
		</a>
		<a 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center'  
			onmouseenter={()=>gradientTheme.set(2)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			href="/wound-care"
			tabindex="0"
		>
			<img src={woundCare} alt="wound care" class="{$gradientTheme===2?"":"brightness-0 invert opacity-5"} transition duration-700 ease-out" />
			<h4>Wound Care Grafts</h4>
			{#if $gradientTheme===2}
				<p transition:slide class="text-center mt-4">Our Amniotic Discs have a number of applications, including use in repair and reconstructive procedures to treat ocular diseases, abnormalities, and post-op care.</p>
			{/if}
			<div class="w-8 h-8  border-[1.5px] border-white rounded-full relative mt-4 hover:opacity-80 bump">
				{#if $gradientTheme===2}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-chevron-right fa-lg"></i>
				{:else}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-plus fa-lg"></i>
				{/if}
			</div>
		
		</a>
		<a 
			class='hover:cursor-pointer w-1/4 flex flex-col items-center justify-center'  
			onmouseenter={()=>gradientTheme.set(3)} 
			onmouseleave={()=>gradientTheme.set($defaultGradientTheme)}
			href="/ocular"
			tabindex="0"
		>
			<img src={ocular} alt="ocular" class="{$gradientTheme===3?"":"brightness-0 invert opacity-5"} transition duration-700 ease-out" />
			<h4>Ocular Grafts</h4>
			{#if $gradientTheme===3}
				<p transition:slide class="text-center mt-4">Our Amniotic Discs have a number of applications, including use in repair and reconstructive procedures to treat ocular diseases, abnormalities, and post-op care.</p>
			{/if}
			<div class="w-8 h-8  border-[1.5px] border-white rounded-full relative mt-4 hover:opacity-80 bump">
				{#if $gradientTheme===3}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-chevron-right fa-lg"></i>
				{:else}
					<i in:fade={{delay:400}} out:fade class=" absolute left-1/2 top-1/2 -translate-1/2 fa-sharp fa-light fa-plus fa-lg"></i>
				{/if}
			</div>
		</a>
</ContentWidth>

</section>