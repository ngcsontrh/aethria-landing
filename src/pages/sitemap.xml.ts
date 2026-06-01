const siteUrl = import.meta.env.PUBLIC_SITE_URL.replace(/\/$/, '');

const routes = [
	{ path: '/en/', priority: '1.0' },
	{ path: '/vi/', priority: '1.0' },
];

export function GET() {
	const urls = routes
		.map(({ path, priority }) => {
			return [
				'\t<url>',
				`\t\t<loc>${siteUrl}${path}</loc>`,
				`\t\t<priority>${priority}</priority>`,
				'\t</url>',
			].join('\n');
		})
		.join('\n');

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		urls,
		'</urlset>',
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}
