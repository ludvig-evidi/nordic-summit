<script lang="ts">
	import { ExternalLink } from '$icons'
	import { onMount } from 'svelte'
	import { animate, inView } from 'motion'

	let opacity = 'opacity-100'

	onMount(() => {
		if (window.innerWidth < 640) {
			opacity = 'opacity-0'
			inView('#animationCard', () => {
				animate(
					'#animationCard',
					{ y: [100, 0], opacity: 1 },
					{ delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
				)
			})
		}
	})
</script>

<div id="animationCard" class={opacity}>
	<div
		class="w-full shadow bg-base-200 p-4 rounded-md text-base-content border-none ring-1 ring-neutral-700/10"
	>
		<h2 class="font-medium text-gray-500 mb-6 text-sm font-Display">Lørdag</h2>

		<div class="content my-4">
			<a href="https://maps.app.goo.gl/vsiktFV4mBWjPwN26" target="_blank">
				<hgroup class="my-4">
					<h3 class="text-gray-100 font-medium">Hovedkonferansen 📣</h3>

					<div class="grid grid-cols-2">
						<p class="text-sm leading-6">Sted:</p>
						<p class="text-sm leading-6">Comwell Portside Copenhagen</p>
						<p class="text-sm leading-6">Tid:</p>
						<p class="text-sm leading-6">8:30 - 17:30</p>
					</div>
				</hgroup>
			</a>
		</div>

		<a
			href="https://nordicsummit.info/agenda/"
			target="_blank"
			class="btn mt-6 normal-case font-medium btn-primary w-full"
			>Oppdatert agenda <ExternalLink /></a
		>
		<div class="divider" />

		<a href="https://maps.app.goo.gl/xgT8dhNUGwwHQkzx6" target="_blank">
			<hgroup class="my-4">
				<h3 class="text-gray-100 font-medium">Middag 🍱</h3>

				<div class="grid grid-cols-2">
					<p class="text-sm leading-6">Sted:</p>
					<p class="text-sm leading-6">Food Club Nørrebro</p>
					<p class="text-sm leading-6">Tid:</p>
					<p class="text-sm leading-6">19:30 -</p>
				</div>
			</hgroup>
		</a>
	</div>
</div>
