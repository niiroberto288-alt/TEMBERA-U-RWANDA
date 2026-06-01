const https = require('https');
const ids = ['llCGT-WZy-Y','GS0c4tIWLRw','G26EGSDFZ_g','ilP0-KnNzkU','J_j7ZHw6CVE'];
let pending = ids.length;
ids.forEach(id => {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
  https.get(url, res => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(id, res.statusCode, body.replace(/\n|\r/g, ' '));
      if (--pending === 0) process.exit(0);
    });
  }).on('error', err => {
    console.error(id, 'ERR', err.message);
    if (--pending === 0) process.exit(0);
  });
});
