<script lang="ts">
import { hasIntroRun } from "$lib/stores/hasIntroRun";
import { gradientTheme } from "$lib/stores/gradientTheme";
import { browser } from "$app/environment";
import { onMount, onDestroy } from "svelte";
import shape from "$lib/assets/icons/shape.png"
import grid from "$lib/assets/icons/grid.png"
import ContentWidth from "./ContentWidth/ContentWidth.svelte";

// Track if we're currently running the intro to prevent multiple executions
let isIntroRunning = $state(false);

// Prevent scroll function
const preventScroll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const preventScrollKeys = (e: KeyboardEvent) => {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, end, home, arrow keys
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return false;
  }
};

// Store original body styles to restore later
let originalBodyStyles: {
  overflow: string;
  position: string;
  width: string;
  height: string;
  pointerEvents: string;
} | null = null;

const enableScrollPrevention = () => {
  if (!browser) return;

  
  // Store original styles only once
  if (!originalBodyStyles) {
    originalBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      width: document.body.style.width,
      height: document.body.style.height,
      pointerEvents: document.body.style.pointerEvents,
    };
  }
  
  // Disable scrolling completely
  document.body.style.overflow = "hidden";
  document.body.style.pointerEvents = "none";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.documentElement.style.overflow = "hidden";
  
  // Add event listeners to prevent scrolling
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('scroll', preventScroll, { passive: false });
  document.addEventListener('keydown', preventScrollKeys);
};

const disableScrollPrevention = () => {
  if (!browser) return;
  
  // Restore original styles
  if (originalBodyStyles) {
    document.body.style.overflow = originalBodyStyles.overflow;
    document.body.style.position = originalBodyStyles.position;
    document.body.style.width = originalBodyStyles.width;
    document.body.style.height = originalBodyStyles.height;
    document.body.style.pointerEvents = originalBodyStyles.pointerEvents;
    document.documentElement.style.overflow = "";
  }
  
  // Remove event listeners
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
  window.removeEventListener('scroll', preventScroll);
  document.removeEventListener('keydown', preventScrollKeys);
};

// Use a more stable effect that only runs when hasIntroRun changes
$effect(() => {
  if (!browser) return;
  
  if ($hasIntroRun) {
    disableScrollPrevention();
  } else if (!isIntroRunning) {
    enableScrollPrevention();
  }
});

onMount(() => {
  // Prevent double execution by checking both conditions
  if ($hasIntroRun || isIntroRunning) {
    // If intro already ran, just show the final state
    if ($hasIntroRun) {
      showIH = true;
      showIPO = true;
    }
    return;
  }


  window.scrollTo(0, 0);
  
  // Set flag to prevent re-execution
  isIntroRunning = true;
  
  // Run the animation sequence
  const timeouts: NodeJS.Timeout[] = [];
  
  timeouts.push(setTimeout(() => showShape = true, 700));
  timeouts.push(setTimeout(() => showGrid = true, 1300));
  timeouts.push(setTimeout(() => showIH = true, 1900));
  timeouts.push(setTimeout(() => showIPO = true, 2500));
  timeouts.push(setTimeout(() => showGrid = false, 3000));
  timeouts.push(setTimeout(() => scaleUp = true, 3600));
  timeouts.push(setTimeout(() => showBackground = false, 4200));
  timeouts.push(setTimeout(() => showShape = false, 4400));
  
  // Complete the intro after all animations finish
  timeouts.push(setTimeout(() => {
    hasIntroRun.set(true);
    isIntroRunning = false;
  }, 5100));
  
  // Store timeouts for cleanup
  return () => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    isIntroRunning = false;
  };
});

onDestroy(() => {
  // Clean up on component destroy
  disableScrollPrevention();
  isIntroRunning = false;
});

// Use stable viewport dimensions (don't react to every change on mobile)
let viewportHeight = $state(1024);
let viewportWidth = $state(768);

// Debounce viewport changes to prevent animation restarts
let resizeTimeout: NodeJS.Timeout;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // Only update if intro is not running and dimensions actually changed significantly
    if (!isIntroRunning && browser) {
      const newHeight = window.innerHeight;
      const newWidth = window.innerWidth;
      
      // Only update if change is significant (more than 100px to account for mobile address bar)
      if (Math.abs(newHeight - viewportHeight) > 100 || Math.abs(newWidth - viewportWidth) > 100) {
        viewportHeight = newHeight;
        viewportWidth = newWidth;
      }
    }
  }, 150);
};

// Animation state variables
let scaleUp = $state(false);
let showBackground = $state(true);
let showShape = $state(false);
let showGrid = $state(false);
let showIH = $state(false);
let showIPO = $state(false);
</script>

<svelte:window on:resize={handleResize} />

<div class="h-screen w-screen absolute top-0 left-0 z-10 pointer-events-none"> 
  
<div class='absolute w-[125vw] h-[125vh] -top-[10vh] -left-[10vw] add-noise transition-opacity duration-300 delay-300 {showBackground && !$hasIntroRun ? "opacity-100":"opacity-0"}'>
		<div class='absolute w-full h-full top-0 left-0 option-0-layer1 will-change-transform'></div>
		<div class='absolute w-full h-full top-0 left-0 option-0-layer2 will-change-transform'></div>
		<div class='absolute w-full h-full top-0 left-0 option-0-layer3 will-change-transform'></div>
	</div>
  
  <!-- Shape with fade-in -->
  <img 
    src={shape} 
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 object-cover transition duration-1200 ease-in {scaleUp ? "scale-[500%]" : ""} {showShape && !$hasIntroRun ? 'opacity-100' : 'opacity-0'}" 
    alt='diamond'
  />
  
  <!-- Grid with fade-in -->
  <img 
    src={grid} 
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-cover transition-opacity duration-700 ease-out {showGrid && !$hasIntroRun ? 'opacity-100' : 'opacity-0'}" 
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