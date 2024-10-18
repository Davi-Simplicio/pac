<script lang="ts">
    import "../app.css";
    import Monkey from "$lib/Icons/Monkey.svelte";
    import Search from "$lib/Components/Search.svelte";
	import { afterUpdate, beforeUpdate, onMount } from "svelte";
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
        if (add<1.3) {   
            add+=0.1;
            console.log(add);
            let newFontSize=add+'rem'
            console.log(newFontSize);
            localStorage.setItem('font-size',newFontSize);
            document.documentElement.style.setProperty('--font-size',newFontSize);
        }
    }
    function dencrementFontSize(){
        t=getComputedStyle(document.body).getPropertyValue('--font-size');
        splitText=t.split('rem');
        console.log(splitText);
        let add=Number(splitText[0])
        if(add>0.8){
            add-=0.1;
            console.log(add);
            let newFontSize=add+'rem'
            console.log(newFontSize);
            localStorage.setItem('font-size',newFontSize);
            document.documentElement.style.setProperty('--font-size',newFontSize);
        }
    }

</script>


<div class="w-full h-12 fixed z-50">
    <div class="h-full py-1 w-full bg-neutral relative flex justify-around ">
        <div class="h-full  min-w-32 flex justify-center gap-4 items-center">
            <a class="h-full min-w-14  cursor-pointer" href="/home">
                <Monkey></Monkey>
            </a>
                <Search></Search>
        </div>
        <div class="h-full w-[160px] text-neutral-content flex justify-between items-center gap-3">
            <div class="flex gap-4">
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
</div>
<div class="h-12">

</div>
<slot />