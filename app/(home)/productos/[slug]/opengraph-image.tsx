import { ImageResponse } from "next/og";
import { getProducts } from "@/app/action/products/products";
import { isVideoUrl, isEmbedVideoUrl } from "@/app/lib/mediaUtils";

// Imagen que aparece cuando se comparte el link del producto en WhatsApp,
// Facebook, X, LinkedIn, etc. Reemplaza al logo generico por una card
// con el titulo, tipo y precio del producto.

export const runtime = "nodejs";
export const alt = "Producto - Piramide Soft";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function OpenGraphImage({ params }: Props) {
  const slug = (await params).slug;
  const resp = await getProducts();
  const producto =
    resp.ok && resp.data
      ? resp.data.find((p) => p.id === slug && p.visible)
      : null;

  // Fallback si no encuentra el producto
  if (!producto) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2563EB 0%, #1e3a8a 100%)",
            color: "white",
            fontSize: 80,
            fontWeight: 800,
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "0.1em",
          }}
        >
          PIRAMIDE SOFT
        </div>
      ),
      { ...size }
    );
  }

  // Primera imagen disponible (no video) para usar como fondo
  const bgImage = producto.imagenes?.find(
    (m) => m && !isVideoUrl(m) && !isEmbedVideoUrl(m)
  );

  const precio =
    producto.precioAhora && +producto.precioAhora > 0
      ? `$${(+producto.precioAhora).toLocaleString("es-AR")}`
      : "Consultar";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1e3a8a 100%)",
          color: "white",
          position: "relative",
        }}
      >
        {/* Imagen del producto a la derecha con fade */}
        {bgImage && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "55%",
              height: "100%",
              display: "flex",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bgImage}
              alt=""
              width={660}
              height={630}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.55,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.1) 100%)",
              }}
            />
          </div>
        )}

        {/* Contenido */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 80,
            width: "70%",
            zIndex: 1,
            justifyContent: "space-between",
          }}
        >
          {/* Top: marca */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: "#2563EB",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 800,
                color: "white",
              }}
            >
              PS
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#60A5FA",
              }}
            >
              PIRAMIDE SOFT
            </div>
          </div>

          {/* Middle: chip tipo + titulo + descripcion */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 18px",
                background: "#2563EB",
                borderRadius: 999,
                fontSize: 20,
                fontWeight: 600,
                color: "white",
              }}
            >
              {producto.tipo.titulo}
            </div>
            <div
              style={{
                fontSize: producto.titulo.length > 40 ? 52 : 68,
                fontWeight: 800,
                lineHeight: 1.1,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              {producto.titulo}
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#D1D5DB",
                lineHeight: 1.4,
                maxWidth: 680,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {producto.descripcion}
            </div>
          </div>

          {/* Bottom: precio + ubicacion */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 16, color: "#9CA3AF", marginBottom: 4 }}>
                Desde
              </div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: "#60A5FA",
                }}
              >
                {precio}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 18,
                color: "#9CA3AF",
              }}
            >
              <span style={{ fontSize: 20 }}>📍</span>
              <span>Entre Ríos, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
