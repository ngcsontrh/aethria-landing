const siteUrl = import.meta.env.PUBLIC_SITE_URL.replace(/\/$/, '');

export function GET() {
	const body = [
		'User-agent: *',
		'Allow: /',
		'Disallow: /api/',
		'',
		`Sitemap: ${siteUrl}/sitemap.xml`,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
}
