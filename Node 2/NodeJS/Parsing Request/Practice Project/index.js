const http = require("http");
const fs = require("fs");

function createMyServer(req, res) {
  res.setHeader("Content-Type", "text/html");

  function commonHtml(route) {
    const htmlCode = `
    <html>
      <head>
        <title>Products Page</title>
      </head>
      <body>
        <h1>
          Hello, This is ${route} Page
        </h1>
      </body>
    </html>`;
    return htmlCode;
  }

  const htmlCode = `
  <html>
    <head>
      <title>Products Page</title>
    </head>
    <body>
      <div>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
      </div>
    </body>
  </html>`;

  if (req.url === "/navbar") {
    res.write(htmlCode);
    return res.end();
  } else if (req.url === "/") {
    res.write(commonHtml('Home'));
    return res.end()
  } else if(req.url === '/men'){
    res.write(commonHtml('Men'))
    return res.end()
  } else if(req.url === '/women'){
    res.write(commonHtml('Women'))
    return res.end()
  } else if(req.url === '/kids'){
    res.write(commonHtml('Kids'))
    return res.end()
  } else if(req.url === '/cart'){
    res.write(commonHtml('Kids'))
    return res.end()
  } 
}

const server = http.createServer(createMyServer);

server.listen(3001);
