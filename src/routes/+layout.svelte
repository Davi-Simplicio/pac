<script lang="ts">
    import "../app.css";
    import Monkey from "$lib/Icons/Monkey.svelte";
    import Search from "$lib/Components/Search.svelte";
	import { afterUpdate, beforeUpdate, onMount } from "svelte";
	import { browser } from "$app/environment";
	import CheckThmeMode from "$lib/Components/checkThmeMode.svelte";
    /**
	 * @type {any}
    */
    let root;
    
    /**
     * @type {any}
    */
    let t='';
    let splitText=[];
    beforeUpdate(()=>{
        console.log(t); 
        t=localStorage.getItem('font-size')||'';
        document.documentElement.style.setProperty('--font-size',t);
        
    });
    function incrementFontSize(){
        t=getComputedStyle(document.body).getPropertyValue('--font-size');
        splitText=t.split('rem');
        console.log(splitText);
        let add=Number(splitText[0])
        add+=0.1;
        console.log(add);
        let newFontSize=add+'rem'
        console.log(newFontSize);
        localStorage.setItem('font-size',newFontSize);
        document.documentElement.style.setProperty('--font-size',newFontSize);
    }
    function dencrementFontSize(){
        t=getComputedStyle(document.body).getPropertyValue('--font-size');
        splitText=t.split('rem');
        console.log(splitText);
        let add=Number(splitText[0])
        add-=0.1;
        console.log(add);
        let newFontSize=add+'rem'
        console.log(newFontSize);
        localStorage.setItem('font-size',newFontSize);
        document.documentElement.style.setProperty('--font-size',newFontSize);
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
            <buttn  class="cursor-pointer" on:click={()=>dencrementFontSize()}>
                A-
            </buttn>
        </div>
        <div class="flex">
            <CheckThmeMode></CheckThmeMode>
        </div>
    </div>
</div>
<div class="h-12">

</div>
<slot />