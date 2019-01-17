const http = require("http");

const handleRequests = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to / route!");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Submit</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<ul><li>Elena Shashkova</li><li>Victor Malov</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

const server = http.createServer(handleRequests);
server.listen(3000);
