<script lang='ts'>
 let a=1

 let obj={
    n:1
 }

</script>
<div class="w-full h-screen text-white">
number {obj.n} 
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
    class="p-2  bg-blue-300 active:bg-blue-100 cursor-pointer w-max border-2 rounded-md h-max" 
    on:click={()=>obj.n++} >
        add more
    </div>
</div>