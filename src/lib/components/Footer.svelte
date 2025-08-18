<script lang="ts"> 
  import ContentWidth from "./ContentWidth/ContentWidth.svelte";

</script>

<ContentWidth class="flex flex-col md:flex-row justify-between text-white footer relative">
    <div class="flex flex-col justify-stretch">
        <h4 class='drop-shadow-sm'>Revolutionizing Bioregeneration</h4>
        <div class="hidden md:block copywright drop-shadow-sm mt-auto">{"© "+ new Date().getFullYear() +" RevoGen Biologics®. All Rights Reserved."}</div>
    </div>
    <div class='flex flex-col gap-6 my-6 footer'>
        <a href='/about' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">About</a>
        <a href='/distribution-opportunities' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">distribution<br/>opportunities</a>
        <a href='/distributor-resource-hub' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">distributor resource hub</a>
        <a href='/ocular-grafts' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">ocular grafts</a>
        <a href='/wound-care-grafts' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">wound care grafts</a>
        <a href='/surgical-grafts/' class="hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">surgical grafts</a>
        <a href='/surgical-grafts/allografts' class="ml-5 hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">allografts</a>
        <a href='/surgical-grafts/sports-medicine-grafts' class="ml-5 hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">sports medicine grafts</a>
        <a href='/surgical-grafts/amnion-patches' class="ml-5 hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">amnion patches</a>
        <a href='/surgical-grafts/synthetics' class="ml-5 hover:opacity-85 transition-opacity duration-300 uppercase drop-shadow-sm">synthetics</a>
        <div class="h-0.5 w-full bg-white rounded-full"></div>
        <div class='leading-normal drop-shadow-sm'>
            4903 Golden Quail,<br/> 
            Suite 120<br/>
            San Antonio, TX 78240 <br/>
            <a href="mailto:sales@revogen.com" class="underline hover:opacity-85 transition-opacity duration-300">sales@revogen.com</a><br/>
            <a href="tel:833-781-7597" class="underline hover:opacity-85 transition-opacity duration-300">833-781-7597</a><br/>
            <a href="https://www.linkedin.com/company/revogen-biologics" class="underline hover:opacity-85 transition-opacity duration-300">LinkedIn</a>
        </div>
    </div>
    <div class="md:hidden block copywright drop-shadow-sm mt-6">{"© "+ new Date().getFullYear() +" RevoGen Biologics®."}<br/>All Rights Reserved.</div>
  
    
</ContentWidth>