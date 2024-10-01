<script lang="ts">
	import {ContentPageList} from '$lib/types/content';
	import type {ContentPage} from '$lib/types/data';
	import Search from "$lib/Icons/Search.svelte";
	import { onMount } from 'svelte';
	onMount(()=>{
		te();
	});

	/**
	 * @type {any}
	 */
	let searchValue=''
	let result
	function te(){
		ContentPageList.forEach(element => {
			console.log(element);
		});
		result=ContentPageList.filter((e) => e.textList.find((t)=>t.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));
		console.log(result);
		
	}

	function searchItem(){
		console.log('teste' + searchValue);
		te();
	}

</script>
<div class="flex flex-col relative h-max w-5/12">
	<label class="input input-bordered h-1/3 z-20 flex items-center gap-2">
		<input  
		type="text" 
		bind:value={searchValue} 
		class="p-1 grow" 
		placeholder="Search"
		on:keyup={()=>searchItem()}
		/>
		<Search></Search>
	</label>
	{#if searchValue}
		<div class="w-full absolute top-8 z-0 h-max p-2 bg-slate-50 rounded-b-md shadow-md">
			{searchValue}
		</div>
	{/if}
</div>

