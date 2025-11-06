const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Inserta la URL: ", (url) => {
  console.log(`Hackeando ${url}!`);
  main(url);
  rl.close();
});

async function main(url) {
  const rutaArchivo = "./common.txt";

  try {
    const datos = fs.readFileSync(rutaArchivo, "utf8");
    const palabras = datos.split("\n");

    for (const palabra of palabras) {
      const newUrl = `${url}/${palabra.trim()}`;
      try {
        const response = await fetch(newUrl, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:118.0) Gecko/20100101 Firefox/118.0",
          },
        });
        
        if (response.status === 200) {
          console.log(`Encontrado: ${response.url} [${response.status}]`);
        }
      } catch (error) {
        // Silenciar errores de conexión
      }
    }
  } catch (err) {
    console.error("Error al leer el archivo:", err);
  }
}
