# Sistema de Autenticación - Piramide Soft

Este documento explica cómo usar el sistema de autenticación implementado siguiendo tu patrón de diseño con server actions.

## 🚀 Configuración Inicial

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
Asegúrate de que tu archivo `.env` contenga:
```env
JWT_SECRET="tu-clave-secreta-super-segura-cambiala-en-produccion"
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/base_de_datos"
```

### 3. Ejecutar Migraciones de Prisma
```bash
npx prisma generate
npx prisma db push
```

### 4. Crear Usuario Administrador
```bash
npm run create-admin
```

### 5. Probar el Sistema
```bash
npm run test-auth
```

## 🔐 Funcionalidades Implementadas

### Autenticación
- Login con email y contraseña usando server actions
- Logout seguro con limpieza de cookies
- Verificación de sesión automática server-side
- Protección de rutas mediante middleware

### Autorización
- Roles de usuario: `admin` y `user`
- Acceso al panel administrativo solo para admins
- Redirección automática según el rol
- Verificación de permisos en cada request

### Seguridad
- Contraseñas hasheadas con bcrypt (12 rounds)
- JWT para manejo de sesiones (7 días de duración)
- Cookies httpOnly para tokens
- Middleware de protección de rutas
- Verificación automática de tokens

## 🛠️ Estructura del Sistema (Siguiendo tu Patrón)

### Server Actions
```
app/action/session/
├── checkSession.ts        # Verificar sesión actual
├── loginUser.ts          # Login con credenciales
├── logoutUser.ts         # Cerrar sesión
└── logoutAction.ts       # Wrapper para redirect
```

### Componentes Principales
```
app/auth/login/page.tsx              # Formulario de login
app/(admin)/admin/layout.tsx         # Layout protegido
app/(admin)/admin/components/
├── AdminLayoutClient.tsx            # Cliente del layout
└── Sidebar.tsx                      # Navegación con user info
```

### Utilidades de Autenticación
```
app/lib/auth/
├── jwt.ts                           # Manejo de JWT tokens
├── password.ts                      # Hashing de contraseñas
└── (otros archivos no necesarios)
```

### Middleware y Configuración
```
middleware.ts                        # Protección de rutas
app/lib/prisma.ts                   # Cliente de Prisma
```

## 📝 Uso Siguiendo tu Patrón

### Server Actions para Login
```typescript
// En un componente cliente
import { loginUser } from '@/app/action/session/loginUser';

const handleLogin = async (email: string, password: string) => {
  const result = await loginUser(email, password);
  
  if (result.ok) {
    // Login exitoso
    router.push(result.data?.role === 'admin' ? '/admin' : '/');
  } else {
    // Mostrar error
    setError(result.error);
  }
};
```

### Server Actions para Logout
```typescript
// En un componente cliente
import { logoutUser } from '@/app/action/session/logoutUser';

const handleLogout = async () => {
  const result = await logoutUser();
  if (result.ok) {
    router.push('/auth/login');
  }
};
```

### Verificación de Sesión Server-Side
```typescript
// En un layout o página
import { checkAdminSession } from '@/app/action/session/checkSession';

export default async function AdminLayout() {
  const user = await checkAdminSession();
  
  if (!user) {
    redirect('/auth/login');
  }
  
  return <AdminContent user={user} />;
}
```

## 🔧 Flujo de Autenticación

### 1. Usuario intenta acceder a `/admin`
- Middleware verifica token en cookie
- Si no hay token o es inválido → redirect a `/auth/login`
- Si token válido pero no es admin → redirect a `/auth/login`
- Si es admin válido → permite acceso

### 2. Login Process
- Usuario envía credenciales al server action `loginUser`
- Se verifica email y contraseña en BD
- Se crea JWT con datos del usuario
- Se guarda token en cookie httpOnly
- Se redirige según rol del usuario

### 3. Logout Process
- Se ejecuta server action `logoutUser`
- Se elimina cookie de autenticación
- Se redirige a login

### 4. Verificación Continua
- Cada request a `/admin` pasa por middleware
- Layout del admin verifica sesión server-side
- Información del usuario se pasa a componentes

## 🛡️ Seguridad Implementada

### Medidas de Seguridad
- ✅ Contraseñas nunca en texto plano (bcrypt)
- ✅ JWT firmado con secret fuerte
- ✅ Cookies httpOnly (no accesibles desde JS)
- ✅ Verificación en cada request
- ✅ Limpieza automática de tokens inválidos
- ✅ Middleware de protección automática
- ✅ Verificación de roles server-side

### Configuración de Producción
1. Cambiar `JWT_SECRET` a valor aleatorio fuerte
2. Usar HTTPS en producción
3. Configurar cookies con `secure: true`
4. Cambiar credenciales por defecto
5. Implementar rate limiting si es necesario

## 📄 Archivos Clave del Sistema

### Configuración
- `middleware.ts` - Protección automática de rutas
- `.env` - Variables de entorno (JWT_SECRET)
- `app/lib/prisma.ts` - Cliente de Prisma siguiendo tu patrón

### Server Actions (Tu Patrón)
- `app/action/session/loginUser.ts` - Login server action
- `app/action/session/logoutUser.ts` - Logout server action
- `app/action/session/checkSession.ts` - Verificación de sesión

### Componentes
- `app/auth/login/page.tsx` - Página de login
- `app/(admin)/admin/layout.tsx` - Layout protegido
- `app/(admin)/admin/components/Sidebar.tsx` - Navegación

### Utilidades
- `app/lib/auth/jwt.ts` - Manejo de JWT
- `app/lib/auth/password.ts` - Hashing de contraseñas

### Scripts
- `scripts/create-admin.ts` - Crear usuario admin
- `scripts/test-auth.ts` - Probar sistema

## 🚨 Diferencias con APIs

En lugar de usar APIs REST (`/api/auth/login`), este sistema usa **server actions** siguiendo tu patrón:

❌ **Antes (APIs):**
```typescript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});
```

✅ **Ahora (Server Actions - Tu Patrón):**
```typescript
const result = await loginUser(email, password);
```

## 🎯 Credenciales por Defecto
- **Email:** admin@piramidesoft.com
- **Contraseña:** admin123

**⚠️ IMPORTANTE**: Cambiar estas credenciales en producción.

¡El sistema está completamente integrado con tu patrón de diseño usando server actions! 🎉
