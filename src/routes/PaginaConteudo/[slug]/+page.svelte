<script lang="ts">
	import { onMount } from 'svelte';
	import { ContentPageList } from '../../../lib/types/content';
	import ContentCard from '$lib/Components/ContentCard.svelte';
	import type { ContentPage } from '$lib/types/data';
	import CodeMockup from '../../../lib/Components/codeMockup.svelte';
	import Title from '$lib/Components/Title.svelte';
	import Paragraph from '$lib/Components/Paragraph.svelte';
	import Content from '$lib/Components/content.svelte';
	let pageIndex: string | undefined = '';
	let contentCardItem: ContentPage | undefined = undefined;
	onMount(() => {
		pageIndex = window.location.pathname.split('/').pop();
		console.log(pageIndex);
		contentCardItem = ContentPageList[JSON.parse(pageIndex!)];
	});
</script>

{#if contentCardItem}
	<div class="w-full h-max text-neutral-content flex flex-col gap-10 items-center ">
		<div class="w-full h-full pt-8 flex justify-center text-3xl">
			<Title text={contentCardItem.title} isSubTitle={false}></Title>
		</div>
		<div class="flex justify-center w-1/2">

			<Content contents={contentCardItem.contents}></Content>
		</div>
	</div>
{:else}
    
	<iframe src="https://www.geniol.com.br/logica/problemas/teste-de-einstein/" title="Einstein's Riddle Test" class="w-10/12 h-[800px]" >

	</iframe>
{/if}
