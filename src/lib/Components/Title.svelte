<script>
    export let isSubTitle = false
    export let text
</script>
<div>
    {#if isSubTitle}
        <h2 class="text-xl">
            {text}
        </h2>
    {:else}
        <h1 class="!text-3xl">
            {text}
        </h1>
    {/if}
</div>