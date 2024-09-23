<script>
      import "../app.css";
      import Monkey from "$lib/Icons/Monkey.svelte";
      import Search from "$lib/Components/Search.svelte";
</script>

<div class="w-full h-12 ">
    <div class="h-10 w-full bg-neutral flex justify-between">
        <div class="h-full w-1/12">
            <Monkey></Monkey>
        </div>
        <div class="h-full w-8/12 flex justify-center items-center">
            <Search></Search>
        </div>
        <div class="h-full w-1/12 text-neutral-content flex justify-start items-center gap-2">
            <buttn class="cursor-pointer">
                A+ 
            </buttn>
            <buttn  class="cursor-pointer">
                A-
            </buttn>
        </div>
    </div>
</div>
<slot />