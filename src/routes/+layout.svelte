<script lang='ts'>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import "../app.css";
	import LandscapeModal from '$lib/components/LandscapeModal.svelte';
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'

	let { children } = $props();
	let option = $state(0);
</script>

<svelte:head>
	<title>{page.data.title}</title>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_title}
		<meta name="og:title" content={page.data.meta_title} />
	{/if}
	{#if page.data.meta_image}
		<meta name="og:image" content={page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
</svelte:head>

<style>
	/* Performance optimizations */
	.gradient-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -10;
		will-change: transform;
		contain: strict;
	}

	.gradient-layer {
		position: absolute;
		width: 150%;
		height: 150%;
		top: -25%;
		left: -25%;
		will-change: transform;
		backface-visibility: hidden;
		transform: translateZ(0);
	}

	/* Option 0 - Blue Theme - Sized for no visible borders */
	.option-0-layer1 {
		background: 
			radial-gradient(ellipse 120% 120% at 75% 25%, #e6f2ff 0%, #b3d9ff 20%, #66b3ff 40%, #3399ff 60%, #0066cc 80%, #003d7a 100%);
		animation: gradientMove1 10s linear infinite;
	}
	
	.option-0-layer2 {
		background: 
			radial-gradient(circle 90% at 20% 70%, rgba(51, 153, 255, 0.3) 0%, rgba(0, 102, 204, 0.5) 50%, transparent 100%);
		animation: gradientMove2 15s ease-in-out infinite;
		opacity: 0.6;
	}
	
	.option-0-layer3 {
		background: 
			radial-gradient(ellipse 100% 100% at 85% 85%, rgba(230, 242, 255, 0.4) 0%, rgba(0, 61, 122, 0.3) 50%, transparent 100%);
		animation: gradientMove3 8s ease-in-out infinite;
		opacity: 0.7;
	}

	/* Option 1 - Pink Theme - Sized for no visible borders */
	.option-1-layer1 {
		background: 
			radial-gradient(ellipse 110% 110% at 75% 25%, #F3E5E9 0%, #DCC0C9 8%, #B179A6 40%, #C1477C 73%, #B179A6 100%);
		animation: gradientMove1 15s linear infinite;
	}
	
	.option-1-layer2 {
		background: 
			radial-gradient(circle 100% at 30% 30%, rgba(193, 71, 124, 0.4) 0%, rgba(177, 121, 166, 0.5) 65%, transparent 100%);
		animation: gradientMove4 20s ease-in-out infinite;
		opacity: 0.5;
	}
	
	.option-1-layer3 {
		background: 
			radial-gradient(ellipse 95% 95% at 10% 50%, rgba(243, 229, 233, 0.5) 0%, rgba(220, 192, 201, 0.4) 60%, transparent 100%);
		animation: gradientMove5 12s ease-in-out infinite reverse;
		opacity: 0.6;
	}

	/* Option 2 - Deep Blue Theme - Sized for no visible borders */
	.option-2-layer1 {
		background: 
			radial-gradient(ellipse 130% 130% at 75% 25%, #B7D3EE 0%, #95B7E1 8%, #0E69B2 40%, #243C7B 73%, #0D1987 100%);
		animation: gradientMove1 12s linear infinite;
	}
	
	.option-2-layer2 {
		background: 
			radial-gradient(circle 90% at 80% 60%, rgba(14, 105, 178, 0.3) 0%, rgba(36, 60, 123, 0.5) 55%, transparent 100%);
		animation: gradientMove6 18s ease-in-out infinite;
		opacity: 0.6;
	}
	
	.option-2-layer3 {
		background: 
			radial-gradient(ellipse 110% 110% at 40% 10%, rgba(183, 211, 238, 0.4) 0%, rgba(13, 25, 135, 0.3) 45%, transparent 100%);
		animation: gradientMove7 14s ease-in-out infinite reverse;
		opacity: 0.7;
	}

	/* Option 3 - Teal Theme - Sized for no visible borders */
	.option-3-layer1 {
		background: 
			radial-gradient(ellipse 125% 125% at 75% 15%, #B1D9E6 0%, #88C9CB 8%, #00B2BE 40%, #00657E 73%, #21464F 100%);
		animation: gradientMove1 24s linear infinite;
	}
	
	.option-3-layer2 {
		background: 
			radial-gradient(circle 95% at 50% 80%, rgba(0, 178, 190, 0.4) 0%, rgba(0, 101, 126, 0.5) 60%, transparent 100%);
		animation: gradientMove8 22s ease-in-out infinite;
		opacity: 0.5;
	}
	
	.option-3-layer3 {
		background: 
			radial-gradient(ellipse 100% 100% at 90% 40%, rgba(177, 217, 230, 0.5) 0%, rgba(33, 70, 79, 0.4) 50%, transparent 100%);
		animation: gradientMove9 16s ease-in-out infinite reverse;
		opacity: 0.6;
	}

	/* Optimized Animation Keyframes - Using only transform and opacity */
	@keyframes gradientMove1 {
		0% { transform: translate3d(0%, 15%, 0) scale(1) }
		25% { transform: translate3d(15%, 0%, 0) scale(1.05)  }
		50% { transform: translate3d(0%, -15%, 0) scale(0.95)  }
		75% { transform: translate3d(-15%, 0%, 0) scale(1.02) ; }
		100% { transform: translate3d(0%, 15%, 0) scale(1)  }
	}




	@keyframes gradientMove3 {
		0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.7; }
		25% { transform: translate3d(-10%, 10%, 0) scale(1.1); opacity: 0.5; }
		50% { transform: translate3d(10%, -10%, 0) scale(0.9); opacity: 0.8; }
		75% { transform: translate3d(-5%, -5%, 0) scale(1.05); opacity: 0.6; }
		100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.7; }
	}



	@keyframes gradientMove5 {
		0% { transform: translate3d(0, -20%, 0); opacity: 0.6; }
		33% { transform: translate3d(-15%, 10%, 0); opacity: 0.4; }
		66% { transform: translate3d(15%, 20%, 0); opacity: 0.7; }
		100% { transform: translate3d(0, -20%, 0); opacity: 0.6; }
	}



	@keyframes gradientMove7 {
		0% { transform: translate3d(0, 0, 0) skewY(0deg); }
		25% { transform: translate3d(10%, -5%, 0) skewY(1deg); }
		50% { transform: translate3d(0, 10%, 0) skewY(-1deg); }
		75% { transform: translate3d(-10%, 5%, 0) skewY(0.5deg); }
		100% { transform: translate3d(0, 0, 0) skewY(0deg); }
	}

	@keyframes gradientMove8 {
		0% { transform: translate3d(0, 0, 0); }
		20% { transform: translate3d(5%, -5%, 0); }
		40% { transform: translate3d(-8%, 3%, 0); }
		60% { transform: translate3d(3%, 8%, 0); }
		80% { transform: translate3d(-5%, -3%, 0); }
		100% { transform: translate3d(0, 0, 0); }
	}

	@keyframes gradientMove9 {
		0% { transform: rotate(0deg) scale(1); }
		50% { transform: rotate(45deg) scale(1.1); }
		100% { transform: rotate(0deg) scale(1); }
	}

	/* Base background colors */
	.bg-base {
		position: absolute;
		width: 100%;
		height: 100%;
		transition: background-color 0.5s ease;
	}

	.bg-base.option-0 { background-color: #b3d9ff; }
	.bg-base.option-1 { background-color: #DCC0C9; }
	.bg-base.option-2 { background-color: #95B7E1; }
	.bg-base.option-3 { background-color: #88C9CB; }

	/* Optimized noise effect */
	.add-noise::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: 
			radial-gradient(circle at 20% 80%, transparent 70%, rgba(255,255,255,0.15) 100%),
			radial-gradient(circle at 80% 20%, transparent 70%, rgba(0,0,0,0.05) 100%);
		opacity: 0.4;
		pointer-events: none;
		will-change: transform;
	}

	/* Smooth transitions for layers */
	.gradient-layer-container {
		position: absolute;
		width: 200%;
		height: 200%;
		top:-50%;
		left:-50%;
		transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		filter: blur(0.5px);
		will-change: opacity;
	}

	/* Interactive area optimization */
	.interactive-area {
		position: relative;
		z-index: 20;
		display: flex;
		gap: 0;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		will-change: transform;
	}

	.interactive-button {
		width: 10rem;
		height: 10rem;
		border: 2px solid;
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


	.interactive-button:nth-child(2) {
		border-left: none;
		border-right: none;
	}
</style>

<div class='gradient-container'>
	<!-- Base background color -->
	<div class="bg-base option-{option}"></div>
	
	<!-- Option 0 - Blue -->
	<div class='gradient-layer-container add-noise {option===0?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-0-layer1'></div>
		<div class='gradient-layer option-0-layer2'></div>
		<div class='gradient-layer option-0-layer3'></div>
	</div>
	
	<!-- Option 1 - Pink -->
	<div class='gradient-layer-container add-noise {option===1?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-1-layer1'></div>
		<div class='gradient-layer option-1-layer2'></div>
		<div class='gradient-layer option-1-layer3'></div>
	</div>
	
	<!-- Option 2 - Deep Blue -->
	<div class='gradient-layer-container add-noise {option===2?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-2-layer1'></div>
		<div class='gradient-layer option-2-layer2'></div>
		<div class='gradient-layer option-2-layer3'></div>
	</div>
	
	<!-- Option 3 - Teal -->
	<div class='gradient-layer-container add-noise {option===3?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-3-layer1'></div>
		<div class='gradient-layer option-3-layer2'></div>
		<div class='gradient-layer option-3-layer3'></div>
	</div>
	
	<div class="interactive-area">
		<div 
			class='interactive-button' 
			onmouseenter={()=>option=1} 
			onmouseleave={()=>option=0}
			role="button"
			tabindex="0"
		>
			surgical
		</div>
		<div 
			class='interactive-button' 
			onmouseenter={()=>option=2} 
			onmouseleave={()=>option=0}
			role="button"
			tabindex="0"
		>
			wound care
		</div>
		<div 
			class='interactive-button' 
			onmouseenter={()=>option=3} 
			onmouseleave={()=>option=0}
			role="button"
			tabindex="0"
		>
			ocular
		</div>
	</div>
</div>

<main>
	<Nav />
	{@render children?.()}
	<Footer />
</main>
<LandscapeModal />
<PrismicPreview {repositoryName} />