<script lang="ts">
	const today = new Date()

	const arrivalDateString = '2023-09-23'

	const arrivalDate = new Date(arrivalDateString)

	let switchDirection: boolean = false

	$: if (today < arrivalDate) {
		switchDirection = true
	}
</script>

<div
	class="w-full shadow bg-base-200 p-4 rounded-md text-base-content border-none ring-1 ring-neutral-700/10"
>
	<h2 class="font-medium text-gray-500 mb-6 text-sm font-Display">Hotell</h2>

	<a href="https://maps.app.goo.gl/MApXjwefEuhDVWZR6" target="_blank">
		<hgroup class="my-4">
			<h3 class="text-gray-100 font-medium">Comfort Hotell Vesterbro</h3>
			<p class="text-xs leading-6">Vesterbrogade 23/29, 1620 København, Danmark</p>
		</hgroup>
	</a>

	<div class="mt-8">
		{#if switchDirection}
			<h3 class="text-center font-Display">
				Flyplass til hotell <span class="text-sm">(~30min)</span>
			</h3>
			<a
				href="https://maps.app.goo.gl/GPbYd1PcZT1DMCig7"
				target="_blank"
				class="btn normal-case font-medium btn-primary w-full mt-4">Veibeskrivelse</a
			>
		{:else}
			<h3 class="text-center font-Display">
				Hotell til flyplass <span class="text-sm">(~30min)</span>
			</h3>
			<a
				href="https://maps.app.goo.gl/EACfnXxbXkdkeS7s6"
				target="_blank"
				class="btn normal-case font-medium btn-primary w-full mt-4">Veibeskrivelse</a
			>
		{/if}
	</div>
</div>
