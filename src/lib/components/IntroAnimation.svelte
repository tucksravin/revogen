<script lang="ts">
 import { hasIntroRun } from "$lib/stores/hasIntroRun";
import { gradientTheme } from "$lib/stores/gradientTheme";
import { browser } from "$app/environment";
import { onMount } from "svelte";
import shape from "$lib/assets/icons/shape.png"
import grid from "$lib/assets/icons/grid.png"
import ContentWidth from "./ContentWidth/ContentWidth.svelte";
  import { fade } from "svelte/transition";

// Prevent scroll function
const preventScroll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

$effect(() => {
  if (browser) {
    if ($hasIntroRun) {
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      
      // Remove event listeners
      window.removeEventListener('wheel', preventScroll, { passive: false } as any);
      window.removeEventListener('touchmove', preventScroll, { passive: false } as any);
      window.removeEventListener('scroll', preventScroll, { passive: false } as any);
      document.removeEventListener('keydown', preventScrollKeys);
    } else {
      // Disable scrolling completely
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";
      
      // Add event listeners to prevent scrolling
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('keydown', preventScrollKeys);
    }
  }
});

const preventScrollKeys = (e: KeyboardEvent) => {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, end, home, arrow keys
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return false;
  }
};

onMount(() => {

  

  if (!$hasIntroRun) {

    setTimeout(() => showShape = true, 700);
    setTimeout(() => showGrid = true, 1300);
    setTimeout(() => showIH = true, 1900);
    setTimeout(() => showIPO = true, 2500);
    setTimeout(() => showGrid = false, 3000)
    setTimeout(() => scaleUp = true, 3600)
    setTimeout(() => showBackground = false, 4200)
    setTimeout(() => showShape = false, 4400)
    
    // Complete the intro after all animations finish
    setTimeout(() => {
      hasIntroRun.set(true);
    }, 5100); // Allow some time after the last element appears
  } else{
    showIH=true;
    showIPO=true;
  }
});

let viewportHeight = $state(1024);
let viewportWidth = $state(768);
let scaleUp = $state(false);
let showBackground = $state(true);
let showShape = $state(false);
let showGrid = $state(false);
let showIH = $state(false);
let showIPO = $state(false);
</script>

<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight} />


<div class="h-screen w-screen absolute top-0 left-0 z-10 pointer-events-none"> 
  <!-- Background gradient - always visible, no fade -->
  <div class='gradient-layer-container add-noise {showBackground&&!$hasIntroRun?"opacity-100":"opacity-0"}'>
    <div class='gradient-layer option-0-layer1'></div>
    <div class='gradient-layer option-0-layer2'></div>
    <div class='gradient-layer option-0-layer3'></div>
  </div>
  
  <!-- Shape with fade-in -->
  <img 
    src={shape} 
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 object-cover transition duration-1200 ease-out {scaleUp ? "scale-[500%]":""} {showShape&&!$hasIntroRun ? 'opacity-100' : 'opacity-0'}" 
    alt='diamond'
  />
  
  <!-- Grid with fade-in -->
  <img 
    src={grid} 
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover transition-opacity duration-700 ease-out {showGrid&&!$hasIntroRun ? 'opacity-100' : 'opacity-0'}" 
    alt='grid'
  />
  
  <!-- Content with staggered fade-in -->
  <ContentWidth class="h-full flex flex-col gap-6 py-12 justify-center text-center items-center text-white z-10 relative">
    <h2><br/></h2>
    <h3 class="transition-opacity duration-700 ease-out {showIH ? 'opacity-100' : 'opacity-0'}">
      Innovative Healing
    </h3>
    <h2 class="transition-opacity duration-700 ease-out {showIPO ? 'opacity-100' : 'opacity-0'}">
      Improving Patient Outcomes via Cutting-Edge Biologics
    </h2>
  </ContentWidth>
</div>
