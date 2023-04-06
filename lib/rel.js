'use strict';

const { url_for } = require('hexo-util');

function relSitemapInject(data) {
  const { path, rel } = this.config.sitemap;

  if (!rel || data.match(/rel=['|"]?sitemap['|"]?/i)) return;

  const relPath = typeof path === 'string' ? path : path[0];
  const relSitemap = `<link rel="sitemap" type="application/xml" title="Sitemap" href="${url_for.call(this, relPath)}">`;

  return data.replace(/<head>(?!<\/head>).+?<\/head>/, str => str.replace('</head>', `${relSitemap}</head>`));
}

module.exports = relSitemapInject;
