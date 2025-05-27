const fs = require("fs");
const path = require("path");

// Mapa de nombres actuales → nombres originales
const renombrados = {
  "1.png": "1.png",
  "2.png": "crm-dashboard.jpg",
  "3.jpg": "crm-contacts.jpg",
  "4.jpeg": "Ariel_1.jpeg",
  "5.jpg": "crm-system.jpg",
  "6.jpg": "crm-pipeline.jpg",
  "7.jpeg": "Danilo.jpeg",
  "8.jpeg": "Danilo_1.jpeg",
  "9.jpg": "custom-solution.jpg",
  "10.jpg": "ecommerce-platform.jpg",
  "11.jpg": "ecommerce-analytics.jpg",
  "12.jpg": "ecommerce-admin.jpg",
  "13.jpg": "ecommerce-storefront.jpg",
  "14.jpg": "electronic-invoice-creation.jpg",
  "15.jpg": "electronic-invoice-reports.jpg",
  "16.jpg": "electronic-invoice-management.jpg",
  "17.jpg": "fotocv3.jpg",
  "18.jpg": "electronic-invoice.jpg",
  "19.svg": "file.svg",
  "20.jpeg": "Gonzalo.jpeg",
  "21.svg": "globe.svg",
  "22.jpeg": "Gonzalo_1.jpeg",
  "23.png": "hero-image-sin-fondo.png",
  "24.webp": "home-hero.webp",
  "25.png": "logo_sin_fondo.png",
  "26.jpg": "mobile-app-orders.jpg",
  "27.png": "hero-image.png",
  "28.jpg": "mobile-app-catalog.jpg",
  "29.jpeg": "logo.jpeg",
  "30.jpg": "mobile-app-route.jpg",
  "31.jpg": "mobile-sales-app.jpg",
  "32.jpeg": "nacho.jpeg",
  "33.jpg": "pos-system-interface.jpg",
  "34.svg": "next.svg",
  "35.jpg": "pos-system-products.jpg",
  "36.jpg": "pos-system-reports.jpg",
  "37.jpg": "pos-system.jpg",
  "38.jpg": "stock-management-dashboard.jpg",
  "39.js": "rename-images.js",
  "40.jpg": "stock-management-reports.jpg",
  "41.jpg": "stock-management.jpg",
  "42.svg": "window.svg",
  "43.jpg": "stock-management-inventory.jpg",
  "44.svg": "vercel.svg",
};

// Ruta de la carpeta actual
const carpeta = __dirname;

for (const [actual, original] of Object.entries(renombrados)) {
  const rutaActual = path.join(carpeta, actual);
  const rutaOriginal = path.join(carpeta, original);

  // Solo renombrar si el archivo existe
  if (fs.existsSync(rutaActual)) {
    fs.renameSync(rutaActual, rutaOriginal);
    console.log(`${actual} → ${original}`);
  } else {
    console.warn(`❌ No se encontró: ${actual}`);
  }
}
