const fs = require("fs");

const userRequestHandler = (req, res) => {
  if (req.url === "/") {
  
      // res.setHeader('Content-Type','json')
      res.setHeader('Content-Type', 'text/html')
      res.write('<html>')
      res.write('<head><title>Home Page</title></head>')
      res.write('<body><h1>Enter Your Details</h1></body>')
      res.write('<form action="/submit-details" method="POST">')
      res.write('<input type="text" name="username" placeholder="Enter your name"><br />')
      res.write('<label for="male">Male</label>')
      res.write('<input type="radio" id="male" name="gender" value="male" >')
      res.write('<label for="female">Female</label>')
      res.write('<input type="radio" id="female" name="gender" value="female" >')
      res.write('<br /><input type="submit" value="Submit" >')
      res.write('</form>')
      res.write('</html>')
      return res.end();
  
    } else if (req.url === "/products") {
  
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Products Page</title></head>");
      res.write("<body><h1>Hello, This is Product Page</h1></body>");
      res.write("</html>");
      return res.end();
  
    } else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
  
      fs.writeFileSync('user.txt','Tanvir Ahmed')
      res.statusCode = 302 // 302 mane holo redirection
      res.setHeader('Location','/')
  
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Error Page</title></head>");
    res.write("<body><h1>404 Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }

module.export = userRequestHandler;