<script lang="ts">
	import { ContentPageList } from '$lib/types/content';
	import { onMount } from 'svelte';
	import Play from '../Icons/Play.svelte';
	import VideoComponent from './videoComponent.svelte';
	export let title = '';
	export let seen: boolean;
	export let rightSide;
	export let contentIndex:number;
	export let srcVideo: string;
	let modal:HTMLDialogElement | null = null;
	let timer: boolean = false;
	onMount(()=>{
		modal = document.getElementById("my_modal_"+ contentIndex) as HTMLDialogElement;
	})
	function seenContent() {	
		console.log(srcVideo);
			
		setTimeout(() => {
			let cardlist = JSON.parse(window.localStorage.getItem("CardTimeLineList")!)
			cardlist[contentIndex].seen = true
			window.localStorage.setItem("CardTimeLineList",JSON.stringify(cardlist))
		}, 1);

	}
	
</script>

{#if rightSide}
	<a class="w-96 h-32 rounded-3xl flex cursor-default" href="/PaginaConteudo/{contentIndex}" on:click={() => seenContent()}>
		<div
			class="w-4/12 cursor-pointer {seen ? 'bg-primary' : 'bg-base-200'} h-32 relative left-4"
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
				<button
					class="h-5 w-5 {seen
						? 'bg-primary'
						: 'bg-base-200'} rounded-md flex justify-center items-center"
						on:click={(e)=>{
							e.preventDefault()
							seenContent()
							modal?.showModal()
							}}
				>
					<Play></Play>
				</button>
			</div>
		</div>
	</a>
{:else}
	<a
		class="w-96 h-32 rounded-3xl flex cursor-default"
		href="/PaginaConteudo/{contentIndex}"
		on:click={() => seenContent()}
	>
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
				<button
					class="h-5 w-5 {seen
						? 'bg-primary'
						: 'bg-base-200'} rounded-md flex justify-center items-center"
						on:click={(e)=>{
							e.preventDefault()
							seenContent()
							modal?.showModal()
							}}
				>
					<Play></Play>
				</button>
				{#if seen}
					Seen
				{/if}
			</div>
		</div>
		<div
			class="w-4/12 cursor-pointer {seen
				? 'bg-primary'
				: 'bg-base-200'} h-32 relative right-4 rotate-180"
			id="polygon"
		></div>
	</a>
{/if}

	<dialog id={"my_modal_"+ contentIndex} class="modal w-full h-full flex justify-center items-center">
		<div class="modal-box w-11/12 h-[90%] max-w-full max-h-full bg-secondary ">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-secondary-content" on:click={()=>window.location.reload()}>✕</button>
			</form>
			<div class="flex w-full h-full justify-center items-center">
				<VideoComponent src={srcVideo}></VideoComponent>
			</div>
		</div>
	</dialog>

<style>
	#polygon {
		clip-path: polygon(100% 0%, 92% 50%, 100% 100%, 75% 100%, 47% 50%, 75% 0);
	}
</style>
