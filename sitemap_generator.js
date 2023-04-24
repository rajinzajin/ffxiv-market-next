const fs = require('fs');
const mi = require('./public/json/marketable_items.json')

function generateSitemapXml(keys) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const key of keys) {
    const url = `https://xivplus.com/market/${key}`;
    xml += `  <url>\n    <loc>${url}</loc>\n  </url>\n`;
  }
  
  xml += '</urlset>';
  
  fs.writeFileSync('public/sitemap.xml', xml);
}

function generateRobotsTxt() {
  const content = `User-agent: *\nSitemap: https://xivplus.com/sitemap.xml`;
  
  fs.writeFileSync('public/robots.txt', content);
}
const keys = Object.keys(mi);
generateSitemapXml(keys);
generateRobotsTxt();