# Sistema de Tracking de Visitantes - Piramide Soft

## Resumen de implementación

Se ha implementado un sistema completo de tracking de visitantes únicos por mes, junto con la actualización automática de estadísticas en el dashboard del admin.

## Funciones creadas:

### 1. **registerVisitor.ts**
- **Ubicación**: `app/action/stats/registerVisitor.ts`
- **Función**: Registra visitantes únicos por IP por mes
- **Características**:
  - Verifica si la IP ya fue registrada en el mes actual
  - Solo registra IPs nuevas
  - Utiliza el formato de mes "MM/YYYY"

### 2. **updateStatsCounters.ts**
- **Ubicación**: `app/action/stats/updateStatsCounters.ts`
- **Función**: Actualiza contadores de productos y blogs
- **Características**:
  - Cuenta productos visibles
  - Cuenta blogs visibles
  - Actualiza automáticamente las estadísticas del mes actual

### 3. **initializeMonthlyStats.ts**
- **Ubicación**: `app/action/stats/initializeMonthlyStats.ts`
- **Función**: Inicializa estadísticas mensuales automáticamente
- **Características**:
  - Crea registro de stats para el mes actual si no existe
  - Inicializa contadores con valores actuales
  - Se ejecuta automáticamente en el layout

### 4. **useVisitorTracking.ts**
- **Ubicación**: `app/hooks/useVisitorTracking.ts`
- **Función**: Hook personalizado para tracking de visitantes
- **Características**:
  - Se ejecuta una vez por sesión del navegador
  - Registra visitante únicamente si no se hizo antes en la sesión
  - Actualiza contadores de stats

### 5. **VisitorTracker.tsx**
- **Ubicación**: `app/components/VisitorTracker.tsx`
- **Función**: Componente wrapper para el tracking
- **Características**:
  - Componente cliente que envuelve el contenido
  - Utiliza el hook useVisitorTracking

### 6. **StatsDisplay.tsx**
- **Ubicación**: `app/components/StatsDisplay.tsx`
- **Función**: Componente para mostrar estadísticas en tiempo real
- **Características**:
  - Actualización automática cada 30 segundos
  - Muestra visitantes, productos, blogs y consultas del mes actual

## APIs creadas:

### 1. **API Visitor**
- **Ubicación**: `app/api/stats/visitor/route.ts`
- **Endpoint**: `POST /api/stats/visitor`
- **Función**: Recibe requests para registrar visitantes
- **Características**:
  - Extrae IP del header x-forwarded-for, x-real-ip o request.ip
  - Llama a la función registerVisitor

### 2. **API Update Counters**
- **Ubicación**: `app/api/stats/update-counters/route.ts`
- **Endpoint**: `POST /api/stats/update-counters`
- **Función**: Actualiza contadores de productos y blogs
- **Características**:
  - Llama a la función updateStatsCounters

### 3. **API Current Stats**
- **Ubicación**: `app/api/stats/current/route.ts`
- **Endpoint**: `POST /api/stats/current`
- **Función**: Obtiene estadísticas actuales de un mes específico
- **Características**:
  - Retorna stats completas incluyendo userViews y consultas

## Mejoras implementadas:

### 1. **Dashboard mejorado**
- Cálculo correcto del mes anterior (maneja cambio de año)
- Mejor manejo de casos sin datos
- Comparación precisa entre meses

### 2. **getStats mejorado**
- Retorna datos disponibles aunque no estén los dos meses
- Mejor manejo de errores
- Estructura de respuesta más robusta

### 3. **Layout actualizado**
- Integración del VisitorTracker en el layout de home
- Inicialización automática de stats mensuales
- Mejor organización del código

## Cómo funciona:

1. **Al entrar a la página**: 
   - El layout inicializa las stats del mes actual
   - El VisitorTracker registra la IP del visitante
   - Se actualizan los contadores de productos y blogs

2. **En el dashboard**:
   - Se obtienen stats del mes actual y anterior
   - Se calculan porcentajes de cambio
   - Se muestran todos los datos con comparaciones

3. **Tracking de visitantes únicos**:
   - Cada IP se registra solo una vez por mes
   - Se evitan múltiples registros en la misma sesión
   - Los datos se almacenan en la tabla UserView

## Archivos modificados:

- `app/(home)/layout.tsx` - Integración del tracking
- `app/(admin)/admin/components/Dashboard.tsx` - Mejoras en cálculos y visualización
- `app/action/stats/getStats.ts` - Mejor manejo de datos faltantes

## Estructura de datos:

```sql
-- Tabla Stats (ya existente)
Stats {
  mes: String (formato "MM/YYYY")
  cantidadDeProductos: Int
  cantidadDeBlogs: Int
  userViews: UserView[]
  cantidadDeConsultas: Consultas[]
}

-- Tabla UserView (ya existente)
UserView {
  id: String
  ip: String
  statsMes: String (referencia a Stats.mes)
}
```

## Próximos pasos recomendados:

1. **Implementar analytics avanzados**: gráficos de tendencias, métricas por día
2. **Geolocalización**: agregar información de país/ciudad basada en IP
3. **Cache**: implementar cache para mejorar performance de las consultas
4. **Alertas**: notificaciones cuando se alcancen ciertos hitos
5. **Exportación**: permitir exportar datos a CSV/PDF
