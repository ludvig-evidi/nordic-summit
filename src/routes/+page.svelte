<script>
	import { Fredag, Lørdag, Hotell, Informasjon } from '$components'
</script>

<hgroup class="text-center space-y-1">
	<h1 class="font-Display tracking-tight text-3xl text-white mt-10">Nordic Summit 2023</h1>
	<a href="https://maps.app.goo.gl/vsiktFV4mBWjPwN26" target="_blank" class="text-sm"
		>Comwell Portside Copenhagen</a
	>
</hgroup>

<div class="pt-20 pb-10">
	<h2 class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-7xl">
		Program
	</h2>

	<ul class="space-y-6">
		<Fredag />
		<Lørdag />
	</ul>
</div>

<div class="pb-2">
	<h2 class="font-display ml-1 mb-3 text-lg font-medium tracking-tight text-teal-600 sm:text-7xl">
		Annen informasjon
	</h2>

	<ul class="space-y-6">
		<Hotell />
		<Informasjon />
	</ul>
</div>
