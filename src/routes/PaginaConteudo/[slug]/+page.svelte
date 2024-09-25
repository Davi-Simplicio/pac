<script lang="ts">
	import { onMount } from 'svelte';
	import { ContentPageList } from '../../../lib/types/content';
	import ContentCard from '$lib/Components/ContentCard.svelte';
	import type { ContentPage } from '$lib/types/data';
	import CodeMockup from '$lib/Components/CodeMockup.svelte';
	let pageIndex: string | undefined = '';
	let contentCardItem: ContentPage | undefined = undefined;
	onMount(() => {
		pageIndex = window.location.pathname.split('/').pop();
		contentCardItem = ContentPageList[JSON.parse(pageIndex!)];        
	});
</script>

{#if contentCardItem}
	<div class="w-full h-max text-white flex flex-col gap-10 items-center ">
		<div class="w-full h-full flex justify-center text-3xl">
			{contentCardItem?.title}
		</div>
		<div class="flex justify-center">
			{contentCardItem.textList[0].content}
		</div>
		<CodeMockup data={contentCardItem.contentCodeList[0]}></CodeMockup>
		<div class="flex flex-col">
			<h1 class="flex justify-center text-xl">
				{contentCardItem.textList[1].title}
			</h1>
			<p class="flex justify-center text-md">
				{contentCardItem.textList[1].content}
			</p>
		</div>
		<iframe
			class="w-7/12 h-96"
			src="{contentCardItem.videoLinkList[0]}"
			frameborder="0"
			allowfullscreen
			title="YouTube video"
		>
		</iframe>
	</div>
{:else}
    <div class="w-full h-max flex justify-center items-center text-white">
        <p>Este Conteúdo Não Existe</p>
    </div>
{/if}
