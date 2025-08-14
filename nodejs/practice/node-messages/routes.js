// routes.js
const fs = require('fs');

function requestHandler(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    // Simple HTML form
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head><title>Message</title></head>
        <body>
          <form action="/message" method="POST">
            <input type="text" name="msg" placeholder="Type a message" required />
            <button type="submit">Save</button>
          </form>
        </body>
      </html>
    `);
    return;
  }

  if (req.method === 'POST' && req.url === '/message') {
    // Collect POST body (x-www-form-urlencoded)
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const value = decodeURIComponent((body.split('=')[1] || '').replace(/\+/g, ' '));
      // Overwrite message.txt each time
      fs.writeFile('message.txt', value, err => {
        res.statusCode = err ? 500 : 302;
        res.setHeader('Location', '/');
        res.end();
      });
    });
    return;
  }

  // Fallback
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

module.exports = requestHandler;