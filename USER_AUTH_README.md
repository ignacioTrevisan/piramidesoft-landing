# Sistema de Autenticación - Piramide Soft

Este documento describe las funcionalidades implementadas para el sistema de registro y autenticación de usuarios.

## Funcionalidades Implementadas

### 1. Registro de Usuarios
- **Ruta**: `/auth/register`
- **Funcionalidad**: Permite a nuevos usuarios crear una cuenta
- **Rol asignado**: Siempre `user` (los usuarios registrados públicamente no pueden ser administradores)
- **Validaciones**:
  - Nombre: mínimo 2 caracteres
  - Email: formato válido y único
  - Contraseña: mínimo 6 caracteres
  - Confirmación de contraseña

### 2. Login de Usuarios
- **Ruta**: `/auth/login`
- **Funcionalidad**: Permite a usuarios existentes iniciar sesión
- **Redirección automática**: 
  - Admin → `/admin`
  - Usuario → `/`

### 3. Perfil de Usuario
- **Ruta**: `/profile`
- **Funcionalidad**: Muestra información del usuario autenticado
- **Protegida**: Requiere autenticación
- **Contenido**:
  - Información personal (nombre, email, rol)
  - Lista de funcionalidades disponibles
  - Enlace al panel de admin (solo para administradores)

### 4. Navbar Dinámico
- **Estado no autenticado**: Muestra botones "Ingresar" y "Registrarse"
- **Estado autenticado**: Muestra nombre del usuario, botón "Mi Perfil" y "Cerrar Sesión"
- **Responsive**: Adapta diseño para móvil

## Estructura de Archivos

```
app/
├── action/session/
│   ├── registerUser.ts          # Acción de servidor para registro
│   ├── loginUser.ts             # Acción de servidor para login
│   ├── checkSession.ts          # Verificación de sesión
│   └── logoutUser.ts            # Cerrar sesión
├── auth/
│   ├── login/page.tsx           # Página de login
│   └── register/page.tsx        # Página de registro
├── (web)/
│   ├── components/
│   │   ├── navbar.tsx           # Navbar con estado de sesión
│   │   └── SessionButton.tsx    # Componente de botones de sesión
│   └── profile/page.tsx         # Página de perfil
├── hooks/
│   └── useSession.ts            # Hook para manejo de sesión
└── middleware.ts                # Middleware actualizado
```

## Patrones de Diseño Seguidos

### 1. Server Actions
- Todas las operaciones de autenticación usan server actions
- Mantienen la misma estructura que el código existente
- Retornan `ApiResponse<T>` para consistencia

### 2. Hooks Personalizados
- `useSession`: Maneja estado global de autenticación
- Reutilizable en toda la aplicación
- Incluye funciones de refresh

### 3. Componentes Modulares
- `SessionButton`: Componente reutilizable para estado de sesión
- Adaptable para desktop y móvil
- Sigue el diseño existente

### 4. Middleware de Protección
- Protege rutas de admin (solo administradores)
- Protege rutas de perfil (usuarios autenticados)
- Redirige usuarios ya autenticados desde páginas de auth

## Seguridad

### 1. Validaciones
- Validación en servidor y cliente
- Hash seguro de contraseñas con bcrypt
- Tokens JWT con expiración de 7 días

### 2. Roles
- `admin`: Acceso completo al sistema
- `user`: Acceso a funcionalidades básicas
- Registro público solo crea usuarios con rol `user`

### 3. Protección de Rutas
- Middleware verifica autenticación automáticamente
- Cookies HTTP-only para tokens
- Limpieza automática de tokens inválidos

## Uso

### Para Desarrolladores
1. Importar `useSession` para verificar estado de autenticación
2. Usar `checkSession()` en server components si es necesario
3. Las rutas protegidas se configuran automáticamente en middleware

### Para Usuarios
1. **Registro**: Ir a `/auth/register` → llenar formulario → automáticamente logueado
2. **Login**: Ir a `/auth/login` → ingresar credenciales → redirigido según rol
3. **Perfil**: Hacer clic en "Mi Perfil" desde el navbar
4. **Logout**: Hacer clic en "Cerrar Sesión" desde el navbar

## Próximas Mejoras Sugeridas
- Verificación de email
- Recuperación de contraseña
- Edición de perfil
- Configuraciones de usuario
- Historial de actividad
