<script lang="ts">
	import { onMount } from 'svelte'
	import { animate, inView } from 'motion'

	onMount(() => {
		inView('#animationCard3', () => {
			animate(
				'#animationCard3',
				{ y: [100, 0], opacity: 1 },
				{ delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
			)
		})
	})
</script>

<div id="animationCard3" class="opacity-0">
	<div class="w-full shadow bg-base-200 p-4 sm:flex sm:items-center sm:px-8 rounded-md">
		<div
			class="grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left"
		>
			<div>
				<dt class="font-mono text-sm text-indigo-300">Status</dt>
				<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-indigo-600">Utsolgt</dd>
			</div>
			<!-- <div>
			<dt class="font-mono text-sm text-indigo-300">Program</dt>
			<a href="/" class="btn btn-sm btn-info btn-outline normal-case mt-2">Fullt program</a>
		</div> -->
			<div class="row-start-2">
				<dt class="font-mono text-sm text-indigo-300">Deltakere</dt>
				<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-indigo-600">500</dd>
			</div>
			<div class="row-start-2">
				<dt class="font-mono text-sm text-indigo-300">Fra Evidi</dt>
				<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-indigo-600">41 💪</dd>
			</div>
		</div>
	</div>
</div>
