<script lang="ts">
    import type { Code } from "../types/data";

    export let data: Code[];
</script>

<div class="mockup-code">
    {#each data as item}
        <pre data-prefix={item.prefix}><code>{item.code}</code></pre>
    {/each}
</div>