# 🔧 SOLUCIÓN AL ERROR DE LIKES/COMENTARIOS

## 🐛 **Problema Identificado**
El error era causado por:
1. **Uso incorrecto de JWT**: Las funciones usaban `jsonwebtoken` pero el sistema usa `jose`
2. **Estructura de token incorrecta**: Esperaba `userId` pero el token contiene `id`
3. **Falta migración de base de datos**: Las nuevas tablas no existen aún

## ✅ **Correcciones Aplicadas**

### **1. Funciones JWT Corregidas:**
- ✅ `createComment.ts` - Ahora usa `verifyToken` y `getToken` de `@/app/lib/auth/jwt`
- ✅ `toggleLike.ts` - Corregido para usar `payload.id` en lugar de `decoded.userId`
- ✅ `getLikeStatus.ts` - Actualizado con la nueva estructura de JWT
- ✅ `login/route.ts` - Corregida importación de prisma

### **2. Estructura JWT Correcta:**
```typescript
// ANTES (❌ Incorrecto):
const decoded = verify(token.value, process.env.JWT_SECRET!) as { userId: string };
userId: decoded.userId

// DESPUÉS (✅ Correcto):
const payload = await verifyToken(token);
userId: payload.id
```

## 🚀 **Pasos para Aplicar la Solución**

### **1. Ejecutar Migración de Base de Datos:**
```bash
# En la terminal, dentro del proyecto:
npx prisma migrate dev --name "add-blog-comments-and-likes"
```

### **2. Generar Cliente de Prisma:**
```bash
npx prisma generate
```

### **3. Reiniciar el Servidor de Desarrollo:**
```bash
# Ctrl+C para detener
npm run dev
# o
yarn dev
```

## 🎯 **Verificar que Funcione**

1. **Ir a cualquier blog**: `/blogs/[id]`
2. **Intentar dar like** (si estás logueado)
3. **Intentar comentar** (si estás logueado)
4. **Verificar mensajes informativos** (si no estás logueado)

## 📊 **Estado de la Base de Datos**

Después de la migración tendrás:
- ✅ Tabla `BlogComment` con relaciones a `User` y `Blog`
- ✅ Tabla `BlogLike` con restricción única por usuario/blog
- ✅ Índices optimizados para performance

## 🔍 **Debug Adicional**

Si aún hay problemas, verifica:

### **Verificar Token en Consola:**
```javascript
// En el navegador, consola:
document.cookie
// Debe mostrar 'auth-token=...'
```

### **Verificar Base de Datos:**
```bash
npx prisma studio
# Abrir y verificar que existan las tablas BlogComment y BlogLike
```

### **Logs del Servidor:**
- Los errores aparecerán en la terminal donde ejecutas `npm run dev`
- Busca mensajes como "Error toggling like" o "Error creating comment"

## 🎉 **Resultado Esperado**

Una vez aplicados estos cambios:
- ✅ Los likes funcionarán correctamente (toggle on/off)
- ✅ Los comentarios se guardarán y mostrarán
- ✅ Los contadores se actualizarán en tiempo real
- ✅ Los mensajes informativos aparecerán para usuarios no logueados

¡El sistema debería funcionar perfectamente después de ejecutar la migración! 🚀
