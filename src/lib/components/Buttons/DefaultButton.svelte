<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
  import DelayedLink from "../DelayedLink.svelte";
    interface ButtonProps {
   href?: string;
   onclick?: (event: MouseEvent ) => any;
   class?: string;
   children?: any;
   [key: string]: any;
 }
    let { href = "", onclick = () => {}, class:passedClasses = '', children = undefined, ...others  } : ButtonProps = $props();

    const baseClasses = "rounded-sm border-[1px] border-solid border-white text-white px-[10px] py-2 uppercase transition"

</script>

<div class="bump w-fit my-2 default-button">
    {#if href}
        <DelayedLink 
            {href} 
            {onclick} 
            class="{baseClasses} {passedClasses}">
                {@render children?.()}
        </DelayedLink>
    {:else}
    <button {onclick}
            class="{baseClasses} {passedClasses}">
            {@render children?.()}
    </button>
    {/if}
</div>