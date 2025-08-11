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
	/* Option 0 - Blue Theme */
	.option-0-layer1 {
		background: radial-gradient(ellipse at 75% 25%, #e6f2ff 0%, #b3d9ff 20%, #66b3ff 40%, #3399ff 60%, #0066cc 80%, #003d7a 100%);
		background-size: 160% 160%;
		animation: gradient 10s linear infinite;
		opacity: 1;
	}
	
	.option-0-layer2 {
		background: radial-gradient(circle at 20% 70%, transparent 0%, rgba(51, 153, 255, 0.3) 30%, rgba(0, 102, 204, 0.5) 60%, transparent 100%);
		background-size: 200% 200%;
		animation: gradientRotate 15s ease-in-out infinite;
		opacity: 0.6;
	}
	
	.option-0-layer3 {
		background: radial-gradient(ellipse at 85% 85%, rgba(230, 242, 255, 0.4) 0%, transparent 25%, rgba(0, 61, 122, 0.3) 50%, transparent 75%);
		background-size: 180% 180%;
		animation: gradientPulse 8s ease-in-out infinite;
		opacity: 0.7;
	}

	/* Option 1 - Pink Theme */
	.option-1-layer1 {
		background: radial-gradient(ellipse at 75% 25%, #F3E5E9 0%, #DCC0C9 8%, #B179A6 40.38%, #C1477C 72.6%, #B179A6 100%);
		background-size: 120% 120%;
		animation: gradient 15s linear infinite;
		opacity: 1;
	}
	
	.option-1-layer2 {
		background: radial-gradient(circle at 30% 30%, transparent 0%, rgba(193, 71, 124, 0.4) 35%, rgba(177, 121, 166, 0.5) 65%, transparent 100%);
		background-size: 250% 250%;
		animation: gradientSwirl 20s ease-in-out infinite;
		opacity: 0.5;
	}
	
	.option-1-layer3 {
		background: radial-gradient(ellipse at 10% 50%, rgba(243, 229, 233, 0.5) 0%, transparent 30%, rgba(220, 192, 201, 0.4) 60%, transparent 90%);
		background-size: 150% 150%;
		animation: gradientFloat 12s ease-in-out infinite reverse;
		opacity: 0.6;
	}

	/* Option 2 - Deep Blue Theme */
	.option-2-layer1 {
		background: radial-gradient(ellipse at 75% 25%, #B7D3EE 0%, #95B7E1 8%, #0E69B2 40.38%, #243C7B 72.6%, #0D1987 100%);
		background-size: 200% 200%;
		animation: gradient 12s linear infinite;
		opacity: 1;
	}
	
	.option-2-layer2 {
		background: radial-gradient(circle at 80% 60%, transparent 0%, rgba(14, 105, 178, 0.3) 25%, rgba(36, 60, 123, 0.5) 55%, transparent 85%);
		background-size: 220% 220%;
		animation: gradientOrbit 18s ease-in-out infinite;
		opacity: 0.6;
	}
	
	.option-2-layer3 {
		background: radial-gradient(ellipse at 40% 10%, rgba(183, 211, 238, 0.4) 0%, transparent 20%, rgba(13, 25, 135, 0.3) 45%, transparent 80%);
		background-size: 190% 190%;
		animation: gradientWave 14s ease-in-out infinite reverse;
		opacity: 0.7;
	}

	/* Option 3 - Teal Theme */
	.option-3-layer1 {
		background: radial-gradient(ellipse at 75% 15%, #B1D9E6 0%, #88C9CB 8%, #00B2BE 40.38%, #00657E 72.6%, #21464F 100%);
		background-size: 200% 200%;
		animation: gradient 24s linear infinite;
		opacity: 1;
	}
	
	.option-3-layer2 {
		background: radial-gradient(circle at 50% 80%, transparent 0%, rgba(0, 178, 190, 0.4) 30%, rgba(0, 101, 126, 0.5) 60%, transparent 90%);
		background-size: 180% 180%;
		animation: gradientDrift 22s ease-in-out infinite;
		opacity: 0.5;
	}
	
	.option-3-layer3 {
		background: radial-gradient(ellipse at 90% 40%, rgba(177, 217, 230, 0.5) 0%, transparent 25%, rgba(33, 70, 79, 0.4) 50%, transparent 75%);
		background-size: 160% 160%;
		animation: gradientSpin 16s ease-in-out infinite reverse;
		opacity: 0.6;
	}

	/* Animation Keyframes */
	@keyframes gradient {
		0% { background-position: 50% 85%; }
		6.25% { background-position: 68% 82%; }
		12.5% { background-position: 82% 73%; }
		18.75% { background-position: 90% 62%; }
		25% { background-position: 85% 50%; }
		31.25% { background-position: 90% 38%; }
		37.5% { background-position: 82% 27%; }
		43.75% { background-position: 68% 18%; }
		50% { background-position: 50% 15%; }
		56.25% { background-position: 32% 18%; }
		62.5% { background-position: 18% 27%; }
		68.75% { background-position: 10% 38%; }
		75% { background-position: 15% 50%; }
		81.25% { background-position: 10% 62%; }
		87.5% { background-position: 18% 73%; }
		93.75% { background-position: 32% 82%; }
		100% { background-position: 50% 85%; }
	}

	@keyframes gradientRotate {
		0%, 100% { background-position: 0% 50%; transform: rotate(0deg); }
		25% { background-position: 50% 0%; transform: rotate(90deg); }
		50% { background-position: 100% 50%; transform: rotate(180deg); }
		75% { background-position: 50% 100%; transform: rotate(270deg); }
	}

	@keyframes gradientPulse {
		0%, 100% { background-position: 50% 50%; transform: scale(1); }
		25% { background-position: 30% 70%; transform: scale(1.1); }
		50% { background-position: 70% 30%; transform: scale(0.9); }
		75% { background-position: 20% 40%; transform: scale(1.05); }
	}

	@keyframes gradientSwirl {
		0% { background-position: 0% 0%; transform: rotate(0deg) scale(1); }
		33% { background-position: 100% 50%; transform: rotate(120deg) scale(1); }
		66% { background-position: 50% 100%; transform: rotate(240deg) scale(1); }
		100% { background-position: 0% 0%; transform: rotate(360deg) scale(1); }
	}

	@keyframes gradientFloat {
		0%, 100% { background-position: 50% 0%; transform: translateY(0); }
		33% { background-position: 25% 50%; transform: translateY(-20px); }
		66% { background-position: 75% 100%; transform: translateY(20px); }
	}

	@keyframes gradientOrbit {
		0% { background-position: 50% 50%; transform: rotate(0deg) translateX(0); }
		25% { background-position: 100% 25%; transform: rotate(90deg) translateX(30px); }
		50% { background-position: 50% 100%; transform: rotate(180deg) translateX(0); }
		75% { background-position: 0% 75%; transform: rotate(270deg) translateX(-30px); }
		100% { background-position: 50% 50%; transform: rotate(360deg) translateX(0); }
	}

	@keyframes gradientWave {
		0%, 100% { background-position: 0% 50%; transform: skewY(0deg); }
		25% { background-position: 50% 25%; transform: skewY(2deg); }
		50% { background-position: 100% 50%; transform: skewY(-2deg); }
		75% { background-position: 50% 75%; transform: skewY(1deg); }
	}

	@keyframes gradientDrift {
		0% { background-position: 0% 0%; transform: translate(0, 0); }
		20% { background-position: 30% 20%; transform: translate(10px, -10px); }
		40% { background-position: 60% 40%; transform: translate(-15px, 5px); }
		60% { background-position: 80% 60%; transform: translate(5px, 15px); }
		80% { background-position: 40% 80%; transform: translate(-10px, -5px); }
		100% { background-position: 0% 0%; transform: translate(0, 0); }
	}

	@keyframes gradientSpin {
		0% { background-position: 50% 50%; transform: rotate(0deg) scale(1); }
		50% { background-position: 75% 25%; transform: rotate(180deg) scale(1.15); }
		100% { background-position: 50% 50%; transform: rotate(360deg) scale(1); }
	}

	.gradient-layer {
		position: absolute;
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		mix-blend-mode: screen;
	}

	.add-noise::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: 
			radial-gradient(circle at 20% 80%, transparent 50%, rgba(255,255,255,0.3) 100%),
			radial-gradient(circle at 80% 20%, transparent 50%, rgba(0,0,0,0.1) 100%),
			radial-gradient(circle at 40% 40%, transparent 50%, rgba(255,255,255,0.2) 100%);
		mix-blend-mode: overlay;
		opacity: 0.4;
		z-index: 10;
	}
</style>

<div class='text-black h-screen w-screen fixed -z-10'>
	<div class="absolute w-full h-full transition-colors duration-500
		{
			option===0?'bg-light-blue':
			option===1?'bg-light-pink':
			option===2?'bg-primary':
			'bg-light-teal'
		}"></div>
	<!-- Option 0 - Blue -->
	<div class='blur-sm add-noise absolute w-full h-full top-0 left-0 transition-opacity duration-500 z-10 overflow-hidden {option===0?'opacity-100':'opacity-0'}'>
		<div class='gradient-layer option-0-layer1'></div>
		<div class='gradient-layer option-0-layer2'></div>
		<div class='gradient-layer option-0-layer3'></div>
	</div>
	
	<!-- Option 1 - Pink -->
	<div class='blur-sm add-noise absolute w-full h-full top-0 left-0 transition-opacity duration-500 z-10 overflow-hidden {option===1?'opacity-100':'opacity-0'}'>
		<div class='gradient-layer option-1-layer1'></div>
		<div class='gradient-layer option-1-layer2'></div>
		<div class='gradient-layer option-1-layer3'></div>
	</div>
	
	<!-- Option 2 - Deep Blue -->
	<div class='blur-sm add-noise absolute w-full h-full top-0 left-0 transition-opacity duration-500 z-10 overflow-hidden {option===2?'opacity-100':'opacity-0'}'>
		<div class='gradient-layer option-2-layer1'></div>
		<div class='gradient-layer option-2-layer2'></div>
		<div class='gradient-layer option-2-layer3'></div>
	</div>
	
	<!-- Option 3 - Teal -->
	<div class='blur-sm add-noise absolute w-full h-full top-0 left-0 transition-opacity duration-500 z-10 overflow-hidden {option===3?'opacity-100':'opacity-0'}'>
		<div class='gradient-layer option-3-layer1'></div>
		<div class='gradient-layer option-3-layer2'></div>
		<div class='gradient-layer option-3-layer3'></div>
	</div>
	
	<div class="flex gap-0 items-center justify-center transition duration-300 w-full h-full relative z-20 " >
		<div onmouseover={()=>option=1} onmouseout={()=>option=0} class='border-2 w-40 h-40 bg-white/30 hover:bg-white/60 transition-colors duration-300 flex items-center justify-center cursor-pointer'>surgical</div>
		<div onmouseover={()=>option=2} onmouseout={()=>option=0} class='border-2 border-x-0 w-40 h-40 bg-white/30 hover:bg-white/60 transition-colors duration-300 flex items-center justify-center cursor-pointer'>wound care</div>
		<div onmouseover={()=>option=3} onmouseout={()=>option=0} class='border-2 w-40 h-40 bg-white/30 hover:bg-white/60 transition-colors duration-300 flex items-center justify-center cursor-pointer'>ocular</div>
	</div>
</div>

<main>
	<Nav />
		{@render children?.()}
	<Footer />
</main>
<LandscapeModal />
<PrismicPreview {repositoryName} />