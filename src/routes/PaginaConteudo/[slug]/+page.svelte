<script lang="ts">
    import { onMount } from "svelte";
    let pageIndex:string|undefined = "";
    onMount(() => {
        pageIndex = window.location.pathname.split("/").pop();
    });

</script>

<h1>{pageIndex}</h1>