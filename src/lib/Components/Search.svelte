<script lang="ts">
	import { ContentPageList } from '$lib/types/content';
	import type { ContentPage } from '$lib/types/data';
	import Search from '$lib/Icons/Search.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// search();
	});
	/**
	 * @type {any}
	 */
	let searchValue = '';

	let input: HTMLAnchorElement;
	let result: ContentPage[] = [];
	let result2: {idPage:ContentPage,text:string}[] = [];
	let elements: HTMLAnchorElement[] = [];
	let selectionNavigate = 0;

	function search() {
		result2=[];
		result = ContentPageList.filter((e:ContentPage) =>
			e.contents.filter((e)=>e.type=="title").find((t) => t.content.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
		);
		ContentPageList.filter((e:ContentPage) =>{
			
				e.contents.filter((e)=>e.type=="title").filter((t) =>{
					t.content.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())?
					result2.push({idPage:e,text:t.content}) : null
					return t.content.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
				} 
				)
					
			
		}
		);
		console.log(result);
		elements.length = result.length;
	}

	function searchItem() {
		search();
	}

	function navigationSearch(e: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement }) {
		if (e.keyCode == 38 || e.keyCode == 40) {
			if (e.keyCode == 38) {
				if (selectionNavigate == 0 && result.length>2) {
					selectionNavigate = elements.length - 1;
					console.log(elements[selectionNavigate].focus() + 'keyup');
				} else {
					selectionNavigate--;
					console.log(elements[selectionNavigate].focus() + 'keyup');
				}
			} else {
				if (selectionNavigate == elements.length - 1) {
					selectionNavigate = 0;
					console.log(elements[selectionNavigate].focus() + 'keydown');
				} else {
					selectionNavigate++;
					console.log(elements[selectionNavigate].focus() + 'keydown');
				}
			}
			console.log(e.key, e.keyCode);
			e.preventDefault();
		}else if (e.keyCode == 13) {
			elements[selectionNavigate].click();
		}else{
			input.focus();
			selectionNavigate = 0;
		}

	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
	on:mouseleave={()=>result.length=0}
	on:keydown={(e) => navigationSearch(e)} class="flex flex-col relative h-max ">
	<label 
		class="input 
		focus:outline-none 
		focus-within:outline-none 
		input-bordered 
		h-1/3 
		z-20 
		flex 
		items-center 
		gap-2">
		<Search></Search>
		<input
			type="text"
			bind:this={input}
			bind:value={searchValue}
			class="p-1 grow focus:outline-none min-w-64 focus-within:outline-none"
			placeholder="Search..."
			on:keyup={() => searchItem()}
		/>
	</label>
	{#if searchValue && result.length > 0}
		<div
			role="listbox"
			class="w-full absolute top-6 z-0 h-max p-1 pt-3 bg-slate-50 rounded-b-md shadow-md"
		>
			{#each result2 as page, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					class="focus-visible:outline-primary"
					bind:this={elements[i]}
					role="option"
					aria-selected="true"
					tabindex="0"
					href="/PaginaConteudo/{ContentPageList.indexOf(page.idPage)}"
					on:click={() => {
						goto('/PaginaConteudo/' + ContentPageList.indexOf(page.idPage));
						setTimeout(() => window.location.reload(), 100);
					}}
				>
					<div class="p-2 rounded-sm hover:bg-primary hover:text-white cursor-pointer">
						{page.idPage.title}
						<div>{page.text}</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
