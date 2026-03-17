const http = require("http");
const { heavyComputation } = require("./heavyTask");

const server = http.createServer((req, res) => {
  if (req.url === "/compute") {
    const start = Date.now();

    const result = heavyComputation(10);

    const duration = Date.now() - start;

    res.end(`Resultado: ${result} | Tempo: ${duration}ms`);
  } else {
    res.end("OK");
  }
});

server.listen(3000, () => {
  console.log("Server rodando na porta 3000");
});
