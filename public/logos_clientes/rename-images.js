const fs = require("fs");
const path = require("path");

// Ruta de la carpeta donde están las imágenes
const carpeta = path.join(__dirname, "./logos_clientes/"); // Cambiá 'images' por el nombre real si es distinto

fs.readdir(carpeta, (err, archivos) => {
  if (err) {
    console.error("Error leyendo la carpeta:", err);
    return;
  }

  let contador = 1;

  archivos
    .filter((archivo) => fs.lstatSync(path.join(carpeta, archivo)).isFile())
    .forEach((archivo) => {
      const ext = path.extname(archivo);
      const nuevoNombre = `${contador}${ext}`;
      const rutaVieja = path.join(carpeta, archivo);
      const rutaNueva = path.join(carpeta, nuevoNombre);

      fs.rename(rutaVieja, rutaNueva, (err) => {
        if (err) {
          console.error(`Error renombrando ${archivo}:`, err);
        } else {
          console.log(`${archivo} → ${nuevoNombre}`);
        }
      });

      contador++;
    });
});
