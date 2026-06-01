const https = require('https');
const ids = ['sxr5gGdC6dM','VP4C_hdBZ4Q','5jF7ToW0AK0'];
let pending = ids.length;
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
