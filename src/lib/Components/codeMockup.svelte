<script lang="ts">
	import type { Code } from '../types/data';

	export let data: Code[];
    let text = ""
</script>

<div class="mockup-code min-w-[60%] max-w-[60%] min-h-64">
	{#each data as item}
    <pre data-prefix={item.prefix} class={item.textColor}><code
				>{item.code}</code
			></pre>
	{/each}
</div>
