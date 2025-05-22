# Sistema de Administración - Piramide Soft

Este es un sistema completo de administración para Piramide Soft que permite gestionar productos, blogs y consultas de clientes.

## 🚀 Características Principales

### 📦 Gestión de Productos
- **CRUD completo**: Crear, leer, actualizar y eliminar productos
- **Control de visibilidad**: Mostrar/ocultar productos en el sitio web
- **Módulos dinámicos**: Cada producto puede tener múltiples módulos con subtítulos
- **Gestión de imágenes**: Soporte para múltiples imágenes por producto
- **Precios flexibles**: Precio actual y precio anterior (opcional)
- **URLs**: Demo y versión completa
- **Categorización**: Productos organizados por tipos
- **Timestamps**: Fechas de creación y actualización automáticas

### 📝 Gestión de Blogs
- **Editor completo**: Título, resumen, contenido e imagen
- **Control de visibilidad**: Publicar/despublicar blogs
- **Fechas automáticas**: Creación y actualización
- **Interfaz intuitiva**: Fácil edición y gestión de contenido

### 💬 Gestión de Consultas
- **Visualización completa**: Email, teléfono y descripción
- **Sistema de respuestas**: Responder directamente desde el panel
- **Estados**: Pendientes y atendidas
- **Filtros**: Ver todas, solo pendientes o solo atendidas
- **Acciones rápidas**: Email y llamada directos
- **Eliminación**: Limpiar consultas resueltas

### 📊 Dashboard
- **Estadísticas en tiempo real**: Productos, blogs y consultas
- **Actividad reciente**: Últimas acciones realizadas
- **Acciones rápidas**: Acceso directo a funciones principales
- **Diseño responsivo**: Optimizado para móviles y escritorio

## 🎨 Características de Diseño

### ✨ Animaciones GSAP
- **Transiciones suaves**: Animaciones fluidas entre secciones
- **Efectos hover**: Interacciones mejoradas
- **Carga progresiva**: Elementos que aparecen gradualmente
- **Sidebar dinámico**: Animaciones de navegación

### 📱 Responsividad
- **Mobile First**: Diseñado primero para móviles
- **Sidebar adaptativo**: Se convierte en menú hamburguesa en móvil
- **Grid flexible**: Se adapta a diferentes tamaños de pantalla
- **Modales responsivos**: Funcionan perfectamente en todos los dispositivos

### 🎯 UX/UI Minimalista
- **Colores coherentes**: Paleta basada en el brand de Piramide Soft
- **Tipografía clara**: Fácil lectura en todos los tamaños
- **Espaciado consistente**: Diseño equilibrado y profesional
- **Iconografía intuitiva**: Iconos claros y reconocibles

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Framework de estilos utilitarios
- **GSAP**: Biblioteca de animaciones profesionales
- **React Hooks**: Estado y efectos modernos

### Backend
- **Prisma**: ORM moderno para base de datos
- **PostgreSQL**: Base de datos relacional robusta
- **Server Actions**: Funciones del servidor Next.js
- **Revalidation**: Actualización automática de caché

## 🚦 Cómo Usar el Sistema

### 1. Acceso al Panel
- Navegar a `/admin`
- El sistema verifica automáticamente la sesión
- Si no hay sesión activa, redirige al login

### 2. Navegación
- **Sidebar fijo**: Navegación principal en escritorio
- **Menú hamburguesa**: En dispositivos móviles
- **Secciones**: Dashboard, Productos, Blogs, Consultas

### 3. Gestión de Productos
1. Ir a la sección "Productos"
2. Hacer clic en "Agregar Producto"
3. Completar el formulario:
   - Información básica (título, descripción, tipo)
   - Precios (actual y anterior opcional)
   - URLs (video, demo, versión completa)
   - Imágenes (múltiples URLs)
   - Módulos con subtítulos
   - Estado de visibilidad
4. Guardar y el producto aparecerá en el listado

### 4. Gestión de Blogs
1. Ir a la sección "Blogs"
2. Hacer clic en "Crear Blog"
3. Completar:
   - Título del blog
   - Resumen corto
   - Imagen principal
   - Contenido completo
   - Estado de visibilidad
4. Publicar y estará disponible

### 5. Gestión de Consultas
1. Ir a la sección "Consultas"
2. Ver consultas organizadas por estado
3. Para responder:
   - Hacer clic en "Responder"
   - Escribir la respuesta
   - Enviar (automáticamente marca como atendida)
4. Usar acciones rápidas para contactar directamente

## 🔧 Configuración Inicial

### 1. Base de Datos
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
# DATABASE_URL en .env

# Aplicar migraciones
npx prisma migrate dev

# Generar cliente
npx prisma generate
```

### 2. Tipos Predefinidos
El sistema incluye tipos predefinidos:
- Inventario
- Ventas
- Facturación
- CRM
- E-commerce
- App Móvil

## 🔐 Seguridad
- **Verificación de sesión**: Cada página verifica autenticación
- **Server Actions**: Operaciones seguras del lado servidor
- **Validación**: Todos los formularios incluyen validación
- **Sanitización**: Los datos se limpian antes de guardar

## 📈 Rendimiento
- **Lazy Loading**: Carga bajo demanda
- **Optimizaciones de imágenes**: Next.js Image component
- **Caché inteligente**: Revalidación automática
- **Animaciones optimizadas**: GSAP para máximo rendimiento

## 🚀 Próximas Mejoras
- [ ] Editor WYSIWYG para blogs
- [ ] Upload de imágenes directo
- [ ] Notificaciones en tiempo real
- [ ] Exportación de datos
- [ ] Métricas avanzadas
- [ ] Integración con email marketing

---

**Desarrollado por Piramide Soft** - Sistema completo de gestión con diseño minimalista y tecnologías modernas.
