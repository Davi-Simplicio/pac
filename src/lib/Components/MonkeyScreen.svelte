<script>
</script>

<div class="screen">
	<div>
		<h1 class="text-white">Chimp Academy</h1>
	</div>

	<div class="general-square">
		<div class="w-[600px] h-[80px] bg-neutral flex justify-center items-end absolute top-[440px] left-1/2 -translate-x-1/2 z-10">
            <div class="rounded-full bg-neutral flex justify-center items-center w-[400px] h-[400px] border-4 border-white shadow-[0_0_80px_rgba(255,255,255,0.5)] shadow-white">
                <img src="src/lib/images/macaco.png" alt="" srcset="">
            </div>
        </div>
		<div class="rectangle absolute">
			<div class="mascot-div-text">
				<p class="mascot-text">Esse é o nosso mascote Dev-CaCo</p>
				<p class="mascot-text">Profissional em C e Lógica de programação</p>
			</div>
		</div>

		<button class="learn-now-btn"> Aprenda Agora! </button>
	</div>
</div>

<style>
	.screen {
		@apply flex flex-col justify-center items-center w-full h-[95vh] bg-cover bg-no-repeat;
		background-image: url(../images/bg-Monkey.png);
	}

	h1 {
		@apply font-bold;
		font-size: 3rem !important;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	.general-square {
		@apply w-[80%] h-[80%] flex relative justify-center items-end;
	}

	.rectangle {
		@apply w-[1000px] h-[225px] bg-neutral shadow-lg text-center border-b-secondary-content border-b-8 rounded-md;
	}

	.mascot-div-text {
		@apply flex flex-col justify-center items-center h-[80%];
	}

	.mascot-text {
		@apply text-neutral-content;
	}

	.learn-now-btn {
		@apply bg-primary font-bold py-6 px-24 rounded absolute top-[94%];
	}
</style>
