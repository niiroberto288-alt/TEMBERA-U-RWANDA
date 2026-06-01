const https = require('https');
const defaultIds = ['sxr5gGdC6dM', 'GS0c4tIWLRw', '6vpma4f8Oo0'];
const ids = process.argv.slice(2).length > 0 ? process.argv.slice(2) : defaultIds;
let pending = ids.length;
if (pending === 0) {
  console.error('Usage: node validate-youtube.cjs <youtube-id> [youtube-id] ...');
  process.exit(1);
}
ids.forEach(id => {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
  https.get(url, res => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(id, res.statusCode, body.slice(0, 120));
      if (--pending === 0) process.exit(0);
    });
  }).on('error', err => {
    console.error(id, 'ERR', err.message);
    if (--pending === 0) process.exit(0);
  });
});
