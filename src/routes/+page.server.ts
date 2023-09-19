export const load = async ({ cookies }) => {
	if (!cookies.get('visited')) {
		cookies.set('visited', 'true')
	}
}
