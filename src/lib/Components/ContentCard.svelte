<script lang="ts">
	import Play from '../Icons/Play.svelte';
	export let title = '';
	export let seen:boolean;
	export let rightSide;
	export let contentIndex;
</script>

{#if rightSide}
	<a class="w-96 h-32 rounded-3xl flex cursor-default" href="/PaginaConteudo/{contentIndex}">
		<div
			class="w-4/12 cursor-pointer  {seen ? 'bg-primary' : 'bg-base-200'} h-32 relative left-4"
			id="polygon"
		></div>
		<div class="w-8/12 bg-secondary h-full rounded-e-3xl flex flex-col items-center cursor-pointer">
			<div class="h-4/6 w-10/12 text-secondary-content flex items-center">
				<p>
					{title}
				</p>
			</div>
			<div
				class="h-2/6 w-10/12 {seen
					? 'text-primary'
					: 'text-secondary-content'} flex justify-end gap-2 items-center"
			>
				{#if seen}
					Seen
				{/if}
				<div
					class="h-5 w-5 {seen
						? 'bg-primary'
						: 'bg-base-200'} rounded-md flex justify-center items-center"
				>
					<Play></Play>
				</div>
			</div>
		</div>
	</a>
{:else}
	<a class="w-96 h-32 rounded-3xl flex cursor-default" href="/PaginaConteudo/{contentIndex}" on:click={()=>seen = true}>
		<div class="w-8/12 bg-secondary h-full rounded-s-3xl flex flex-col items-center cursor-pointer">
			<div class="h-4/6 w-10/12 text-secondary-content flex items-center">
				<p>
					{title}
				</p>
			</div>
			<div
				class="h-2/6 w-10/12 {seen
					? 'text-primary'
					: 'text-secondary-content'} flex justify-start gap-2 items-center"
			>
				<div
					class="h-5 w-5 {seen
						? 'bg-primary'
						: 'bg-base-200'} rounded-md flex justify-center items-center"
				>
					<Play></Play>
				</div>
				{#if seen}
					Seen
				{/if}
			</div>
		</div>
		<div
			class="w-4/12 cursor-pointer {seen ? 'bg-primary' : 'bg-base-200'} h-32 relative right-4 rotate-180"
			id="polygon"
		></div>
	</a>
{/if}

<style>
	#polygon {
		clip-path: polygon(100% 0%, 92% 50%, 100% 100%, 75% 100%, 47% 50%, 75% 0);
	}
</style>
