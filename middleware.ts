import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './app/lib/auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si la ruta requiere autenticación de admin
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      // No hay token, redirigir al login
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
      const payload = await verifyToken(token);
      
      if (!payload || payload.role !== 'admin') {
        // Token inválido o usuario no es admin
        const response = NextResponse.redirect(new URL('/auth/login', request.url));
        response.cookies.delete('auth-token');
        return response;
      }

      // Usuario válido y es admin, continuar
      return NextResponse.next();
    } catch (error) {
      // Error al verificar token
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
  }

  // Para rutas de auth, redirigir si ya está autenticado
  if (pathname.startsWith('/auth/')) {
    const token = request.cookies.get('auth-token')?.value;

    if (token) {
      try {
        const payload = await verifyToken(token);
        
        if (payload) {
          // Usuario ya autenticado, redirigir según rol
          if (payload.role === 'admin') {
            return NextResponse.redirect(new URL('/admin', request.url));
          } else {
            return NextResponse.redirect(new URL('/', request.url));
          }
        }
      } catch (error) {
        // Token inválido, eliminar y continuar al login/register
        const response = NextResponse.next();
        response.cookies.delete('auth-token');
        return response;
      }
    }
  }

  // Verificar rutas que requieren autenticación (cualquier usuario)
  if (pathname.startsWith('/profile')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      // No hay token, redirigir al login
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    try {
      const payload = await verifyToken(token);
      
      if (!payload) {
        // Token inválido
        const response = NextResponse.redirect(new URL('/auth/login', request.url));
        response.cookies.delete('auth-token');
        return response;
      }

      // Usuario válido, continuar
      return NextResponse.next();
    } catch (error) {
      // Error al verificar token
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/auth/:path*',
    '/profile/:path*'
  ]
};
