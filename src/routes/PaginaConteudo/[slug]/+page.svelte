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
	<div class="w-full h-max text-white flex flex-col gap-10 items-center ">
		<div class="w-full h-full flex justify-center text-3xl">
			<Title text={contentCardItem.title} isSubTitle={false}></Title>
		</div>
		<Content contents={contentCardItem.contents}></Content>
	</div>
{:else}
    <div class="w-full h-max flex justify-center items-center text-white">
        <p>Este Conteúdo Não Existe</p>
    </div>
{/if}
