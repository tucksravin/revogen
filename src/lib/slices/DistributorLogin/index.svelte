<script lang="ts">
 import ContentWidth from "$lib/components/ContentWidth/ContentWidth.svelte";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/svelte";
  import { fade,fly } from "svelte/transition";

interface Props extends SliceComponentProps<Content.DistributorLoginSlice> {}
const { slice }: Props = $props();

let isAuthenticated = $state(false);
let password = $state("");
let showError = $state(false);
let shakeButton = $state(false);

// Set your desired password here
const CORRECT_PASSWORD = "Revogenreps";

function handleSubmit() {
  if (password === CORRECT_PASSWORD) {
    isAuthenticated = true;
    showError = false;
  } else {
    showError = true;
	shakeButton = true;

	setTimeout(() => {
      shakeButton = false;
    }, 600);
  
    
    setTimeout(() => {
      showError = false;
    }, 3000);
  }
}

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    handleSubmit();
  }
}
</script>

<style>
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-2px); }
    40%, 80% { transform: translateX(2px); }
  }
  
  .animate-shake {
    animation: shake 0.4s ease-in-out;
  }
</style>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  style="padding-top:{parseInt(slice.primary.vertical_padding)*4}px;padding-bottom:{parseInt(slice.primary.vertical_padding)*4}px;"
  class="text-white"
>
  <ContentWidth>
    {#if !isAuthenticated}
      <!-- Password Form -->
	   <div out:fade class="flex flex-col items-center">
      <p class="max-w-lg">Enter password to access the Distributor Resource Hub:</p>
      <div class="flex flex-col mt-16 items-center gap-2">
        <p>PASSWORD</p>
        <input 
          type="password" 
          class="h-10 w-128 max-w-sm rounded-sm bg-white/30 text-black px-2 placeholder-black/40 text-center"
          bind:value={password}
          onkeypress={handleKeyPress}
        />
		<div class="h-16 w-full">
        {#if showError}
          <p class="text-red-300 text-sm mt-2 absolute left-1/2 -translate-x-1/2" in:fade={{delay:600}} out:fade>Incorrect password. Please try again.</p>
		  {:else}
		  <p class="text-xs max-w-sm text-center absolute left-1/2 -translate-x-1/2" in:fade={{delay:600}} out:fade>This portal is password protected, please contact your RevoGen administrator for access.</p>
        {/if}
		</div>
        
      </div>
      <button 
        aria-label="submit password" 
        class="h-8 w-8 border-2 border-white rounded-full mt-16 hover:border-light-blue hover:bg-white hover:text-light-blue transition duration-500 active:duration-200 active:text-white active:border-white {shakeButton ? 'animate-shake' : ''}"
        onclick={handleSubmit}
      >
        <i class="fa-regular fa-chevron-right fa-xl bump"></i>
      </button>
	   </div>
    {:else}
      <!-- Protected Content - Replace this with your actual content -->
      <div class="max-w-4xl mx-auto" in:fly={{delay:400, y:"-100%"}}>
        <h1 class="text-4xl font-bold mb-8 text-center">Distributor Resource Hub Hidden Content</h1>
        
        
        
      </div>
    {/if}
  </ContentWidth>
</section>