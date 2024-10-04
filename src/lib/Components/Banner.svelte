<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('bannerMounted');
	});
</script>

<div class="w-full h-[95vh] flex justify-center items-center bg-cover bg-fixed bg-no-repeat bg-bottom banner">
    <div class="w-[1100px] h-[250px] bg-neutral">
        <div class="w-full h-full flex justify-center items-center">
            <h1 class="text-3xl text-white">Esse é o Nosso Mascote Dev-CaCo</h1>
            <h1 class="text-2xl text-white">Profissional em C e Lógica de programação!</h1>
        </div>
    </div>
</div>


<style>
	.banner {
        background-image: url("../images/banner-bg.png");
	}
</style>
