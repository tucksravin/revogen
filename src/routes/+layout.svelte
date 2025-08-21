<script lang='ts'>
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import "../app.css";
	import LandscapeModal from '$lib/components/LandscapeModal.svelte';
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { gradientTheme } from '$lib/stores/gradientTheme';
  import { fade } from 'svelte/transition';
  import TransitionOverlay from '$lib/components/TransitionOverlay.svelte';


	let { children } = $props();
	
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


</style>

<div class='gradient-container'>
	<!-- Base background color -->
	<div class="bg-base option-{$gradientTheme}"></div>
	
	<!-- Option 0 - Blue -->
	<div class='gradient-layer-container add-noise {$gradientTheme===0?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-0-layer1'></div>
		<div class='gradient-layer option-0-layer2'></div>
		<div class='gradient-layer option-0-layer3'></div>
	</div>
	
	<!-- Option 1 - Pink -->
	<div class='gradient-layer-container add-noise {$gradientTheme===1?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-1-layer1'></div>
		<div class='gradient-layer option-1-layer2'></div>
		<div class='gradient-layer option-1-layer3'></div>
	</div>
	
	<!-- Option 2 - Deep Blue -->
	<div class='gradient-layer-container add-noise {$gradientTheme===2?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-2-layer1'></div>
		<div class='gradient-layer option-2-layer2'></div>
		<div class='gradient-layer option-2-layer3'></div>
	</div>
	
	<!-- Option 3 - Teal -->
	<div class='gradient-layer-container add-noise {$gradientTheme===3?"opacity-100":"opacity-0"}'>
		<div class='gradient-layer option-3-layer1'></div>
		<div class='gradient-layer option-3-layer2'></div>
		<div class='gradient-layer option-3-layer3'></div>
	</div>
	
</div>

<main class="-translate-y-[1px]">
	<Nav />
	{#key children}
	<div transition:fade>
		{@render children?.()}
	</div>
	{/key}
	<Footer />
</main>
<LandscapeModal />
<TransitionOverlay />
<PrismicPreview {repositoryName} />

<form class="hidden" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" id="netlifyContactForm">
	<input type="hidden" name="form-name" value="contact" />
	<input type="text" name="first-name" required placeholder="first and last name"  />
	<input type="text" name="last-name" required placeholder="last name"  />
	<input type="text" name="city" placeholder="city" />
	<input type="text" name="state" />
	<input type="phone" name="phone" placeholder="000-000-0000"  />
	<input type="email" name="email" required placeholder="you@domain.com"  />
	<input type="text" name="distributorship" required placeholder="last name" />
	<p class="hidden">
	  <label>
		Don't fill this out if you're human: <input name="bot-field" />
	  </label>
	</p>
	<p>Message</p>
	<textarea name="message" required placeholder="how can we help?"></textarea>
	<button id="hiddenSubmitButton" type="submit"  >Connect</button>
</form>