<script lang="ts">
	export let src: string;
    export let title: string = "Site";
    export let alt: string = "Site";
    export let width: string = "500px"
    export let height: string = "500px"
</script>

<div class="">
	<iframe src={src} class="max-w-lg" alt={alt} title={title} width={width} height={height}>
</div>
