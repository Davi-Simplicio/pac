<script lang="ts">
	import type { Code } from '../types/data';

	export let data: Code[];
	let text = '';
</script>

<div class="mockup-code min-w-[60%] max-w-[80%] min-h-max">
	{#each data as item}
		<pre data-prefix={item.prefix} class={item.textColor}><code>{item.code}</code></pre>
	{/each}
</div>
