<script lang="ts">
    import "../app.css";
    import Monkey from "$lib/Icons/Monkey.svelte";
    import Search from "$lib/Components/Search.svelte";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
    /**
	 * @type {any}
    */
    let root;
    
    /**
     * @type {any}
    */
    let t='';
    onMount(()=>{
        t=getComputedStyle(document.body).getPropertyValue('--font-size');
        console.log(window.location); 
        console.log(t); 
        
    });
    function incrementFontSize(){
        getComputedStyle(document.body).setProperty("--font-size",t+1);
    
    }
    
</script>

<div class="w-full h-12 fixed z-50">
    <div class="h-full py-1 w-full bg-neutral flex justify-evenly ">
        <a class="h-full min-w-14  cursor-pointer" href="/home">
            <Monkey></Monkey>
        </a>
        <div class="h-full w-8/12 flex justify-center items-center">
            <Search></Search>
        </div>
        <div class="h-full w-1/12 text-neutral-content flex justify-start items-center gap-2">
            <buttn class="cursor-pointer" on:click={()=>incrementFontSize()}  >
                A+ 
            </buttn>
            <buttn  class="cursor-pointer">
                A-
            </buttn>
        </div>
    </div>
</div>
<div class="h-12">

</div>
<slot />