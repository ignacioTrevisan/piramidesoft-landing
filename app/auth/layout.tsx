import "../(home)/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
      <main>
        <title>Autenticación - Piramide Soft</title>
        <meta name="description" content="Autenticación Piramide Soft" />
      </main>
      <div className="antialiased">{children}</div>
   </>
   
  );
}
