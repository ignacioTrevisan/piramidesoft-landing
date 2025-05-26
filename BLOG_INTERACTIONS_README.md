# Sistema de Comentarios y Likes para Blogs

## 🚀 **Funcionalidades Implementadas**

### ✅ **Comentarios**
- Los usuarios pueden comentar en cualquier blog
- Visualización de todos los comentarios con autor y fecha
- Interfaz amigable con placeholder y validaciones
- Mensajes de login cuando no hay sesión activa

### ✅ **Likes**
- Sistema de likes/unlike (toggle)
- Contador en tiempo real de likes totales
- Un usuario solo puede dar like una vez por blog
- Botón visual que cambia según el estado

### ✅ **Autenticación**
- Solo usuarios logueados pueden comentar y dar like
- Mensajes informativos para usuarios no autenticados
- Links directos a login/registro

---

## 📊 **Cambios en la Base de Datos**

Se agregaron las siguientes tablas al schema de Prisma:

### **BlogComment**
```prisma
model BlogComment {
  id        String   @id @default(uuid())
  contenido String
  blogId    String
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  blog      Blog     @relation(fields: [blogId], references: [id], onDelete: Cascade)
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([blogId])
  @@index([userId])
}
```

### **BlogLike**
```prisma
model BlogLike {
  id     String @id @default(uuid())
  blogId String
  userId String
  blog   Blog   @relation(fields: [blogId], references: [id], onDelete: Cascade)
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([blogId, userId]) // Un usuario solo puede dar like una vez por blog
  @@index([blogId])
  @@index([userId])
}
```

### **Relaciones Agregadas**
- `User` ahora tiene `comentarios BlogComment[]` y `likes BlogLike[]`
- `Blog` ahora tiene `comentarios BlogComment[]` y `likes BlogLike[]`

---

## 🛠️ **Pasos para Aplicar los Cambios**

### 1. **Actualizar la Base de Datos**
```bash
# En la terminal, dentro del proyecto:
npx prisma migrate dev --name "add-blog-comments-and-likes"
```

### 2. **Generar el Cliente de Prisma**
```bash
npx prisma generate
```

### 3. **Verificar que todo funcione**
```bash
# Opcional: Abrir Prisma Studio para ver las nuevas tablas
npx prisma studio
```

---

## 📁 **Archivos Creados/Modificados**

### **Nuevos Archivos:**
- `interfaces/blogInteractions.ts` - Tipos TypeScript
- `app/action/blogInteractions/createComment.ts` - Crear comentarios
- `app/action/blogInteractions/getComments.ts` - Obtener comentarios
- `app/action/blogInteractions/toggleLike.ts` - Toggle likes
- `app/action/blogInteractions/getLikeStatus.ts` - Estado de likes
- `app/action/blogInteractions/index.ts` - Exports
- `app/(home)/blogs/[id]/Comments.tsx` - Componente de comentarios
- `app/(home)/blogs/[id]/LikeButton.tsx` - Componente de likes

### **Archivos Modificados:**
- `prisma/schema.prisma` - Schema actualizado
- `app/(home)/blogs/[id]/page.tsx` - Página del blog con nuevos componentes

---

## 🎨 **Características de UX**

### **Para Usuarios No Autenticados:**
- Botones visibles pero con mensajes informativos
- Placeholders que indican la necesidad de login
- Links directos a registro/login
- Mensajes amigables con emojis

### **Para Usuarios Autenticados:**
- Funcionalidad completa de comentarios y likes
- Avatars con iniciales del nombre
- Estados de carga (spinners, disabled states)
- Validaciones en tiempo real

### **Responsive Design:**
- Componentes adaptados para móvil y desktop
- Layouts que se reorganizan según el tamaño de pantalla
- Botones que muestran/ocultan texto según el espacio

---

## 🔧 **Funciones de la API**

### **Comentarios:**
- `createComment(data: CreateCommentData)` - Crear nuevo comentario
- `getCommentsByBlogId(blogId: string)` - Obtener comentarios de un blog

### **Likes:**
- `toggleLike(blogId: string)` - Dar/quitar like
- `getLikeStatus(blogId: string)` - Estado actual de likes

### **Autenticación:**
- Verificación automática de JWT desde cookies
- Manejo de errores de autenticación
- Respuestas consistentes con el patrón de la app

---

## 🚨 **Próximos Pasos**

1. **Ejecutar las migraciones** con el comando mencionado arriba
2. **Probar la funcionalidad** creando/eliminando comentarios y likes
3. **Opcional:** Agregar moderación de comentarios para admins
4. **Opcional:** Notificaciones cuando alguien comenta en tus blogs

---

¡Todo listo! El sistema de comentarios y likes está implementado y respeta el diseño y patrones existentes en tu aplicación. 🎉
