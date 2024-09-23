<script>
    export let title = "";
    export let description = "";
    export let imageSrc = "";
</script>
<div class="w-56 h-80 bg-secondary flex flex-col items-center gap-4 rounded-sm">
    <div class="w-11/12 h-[10%] flex justify-start items-center gap-1">
        <div class="w-4 h-4 bg-error rounded-full"></div>
        <div class="w-4 h-4 bg-warning rounded-full"></div>
        <div class="w-4 h-4 bg-success rounded-full"></div>
    </div>
    <div class="w-11/12 h-[40%] bg-base-200">
        <img src={imageSrc} alt="error"  class="w-full h-full ">
    </div>

    <div class="w-11/12 h-[40%] text-secondary-content flex flex-col gap-3">
        <h1 class="text-xl" >{title}</h1>
        <p class="text-xs">{description}</p>
    </div>
</div>