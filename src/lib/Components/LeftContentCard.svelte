<script>
	import Play from '../Icons/Play.svelte';
	export let title = '';
	export let seen = false;
</script>

<div class="w-96 h-32 rounded-3xl flex">
	<div class="w-8/12 bg-secondary h-full rounded-s-3xl flex flex-col items-center">
		<div class="h-4/6 w-10/12 text-secondary-content flex items-center">
			<p>
				{title}
			</p>
		</div>
		<div class="h-2/6 w-10/12 {seen ? 'text-primary' : 'text-secondary-content'} flex justify-start gap-2 items-center">
        <div class="h-5 w-5 {seen ? 'bg-primary' : 'bg-base-200'} rounded-md flex justify-center items-center">
            <Play></Play>
        </div>
			{#if seen}
				Seen
			{/if}
		</div>
	</div>
	<div
		class="w-4/12 {seen ? 'bg-primary' : 'bg-base-200'} h-32 relative right-4 rotate-180"
		id="polygon"
	></div>
</div>

<style>
	#polygon {
		clip-path: polygon(100% 0%, 92% 50%, 100% 100%, 75% 100%, 47% 50%, 75% 0);
	}
</style>
