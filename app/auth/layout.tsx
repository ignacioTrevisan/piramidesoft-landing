import "../(home)/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Autenticación - Piramide Soft</title>
        <meta name="description" content="Autenticación Piramide Soft" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
