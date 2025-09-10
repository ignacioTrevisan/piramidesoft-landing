import { ApiResponse } from "@/app/interfaces/apiResponse";

interface Props {
  titulo: string;
  nombre: string;
  email: string;
  numero: string;
  consulta: string;
}

interface wspResponse {
  success: boolean;
  mensaje: string;
}
export async function SendMessage({
  consulta,
  email,
  nombre,
  numero,
  titulo,
}: Props): Promise<ApiResponse> {
  try {
    const resp = await fetch("http://149.50.142.58:3101/api/whatsapp", {
      method: "post",
      body: JSON.stringify({ consulta, email, nombre, numero, titulo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({ resp });
    const data = (await resp.json()) as wspResponse;
    console.log({ data });
    return {
      ok: true,
      msg: data.mensaje,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ha ocurrido un error en el envio de Whatsapp ${error}`,
    };
  }
}
