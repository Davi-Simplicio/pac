<script>
	
	import Search from "$lib/Icons/Search.svelte";
	/**
	 * @type {any}
	 */
	let searchValue=''
</script>
<div class="flex flex-col relative h-max w-5/12">
	<label class="input input-bordered h-1/3 z-20 flex items-center gap-2">
		<input  type="text" bind:value={searchValue} class="p-1 grow" placeholder="Search" />
		<Search></Search>
	</label>
	{#if searchValue}
		<div class="w-full absolute top-8 z-0 h-max p-2 bg-slate-50 rounded-b-md shadow-md">
		{searchValue}
		</div>
	{/if}
</div>

