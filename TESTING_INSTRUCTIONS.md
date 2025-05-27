# Testing del Sistema de Visitantes - Piramide Soft

## Pasos para verificar que el sistema funciona correctamente:

### 1. **Verificar que la aplicación esté funcionando**
- Asegúrate de que el servidor esté corriendo (`npm run dev`)
- Ve al admin dashboard: `/admin`
- Deberías ver el panel de debug amarillo en la parte superior

### 2. **Debug inicial**
- Haz clic en "Debug Stats" para ver el estado actual
- Revisa en la consola del navegador y en la terminal del servidor
- Verifica cuántos productos y blogs tienes realmente

### 3. **Reset y reinicialización (si es necesario)**
- Si los datos están mal, haz clic en "Reset Stats"
- Luego haz clic en "Inicializar Stats"
- Vuelve a hacer "Debug Stats" para verificar

### 4. **Testing de visitantes**
- Abre el sitio web principal en una ventana de incógnito: `/`
- Abre las herramientas de desarrollador (F12)
- Ve a la pestaña Network y filtra por fetch/xhr
- Deberías ver una llamada a `/api/stats/visitor`
- Ve de vuelta al admin dashboard y haz "Debug Stats"
- Deberías ver que el visitante se registró

### 5. **Testing de múltiples visitantes**
- Abre otra ventana de incógnito
- Ve a la página principal
- Los visitantes se registran por IP, así que desde la misma máquina probablemente no se registren múltiples

### 6. **Verificar cálculos del dashboard**
- En el dashboard, los números deberían mostrar:
  - Total Productos: número real de productos visibles
  - Nuevos visitantes: número de IPs únicas del mes
  - Total Blogs: número real de blogs visibles
  - Consultas: número de consultas del mes

### 7. **Verificar comparaciones mensuales**
- El dashboard compara con el mes anterior
- Si no hay datos del mes anterior, los porcentajes serán 0%
- Puedes crear datos de prueba para el mes anterior manualmente en la DB

## URLs importantes para testing:

- **Página principal**: `http://localhost:3000/`
- **Admin dashboard**: `http://localhost:3000/admin`
- **Debug API**: `http://localhost:3000/api/debug`
- **Stats visitor API**: `http://localhost:3000/api/stats/visitor`

## Comandos útiles para verificar la DB:

```sql
-- Ver todos los registros de stats
SELECT * FROM "Stats";

-- Ver todos los visitantes
SELECT * FROM "UserView";

-- Contar productos visibles
SELECT COUNT(*) FROM "Product" WHERE visible = true;

-- Contar blogs visibles
SELECT COUNT(*) FROM "Blog" WHERE visible = true;
```

## Logs importantes a revisar:

### En la consola del servidor deberías ver:
```
Inicializando stats para el mes: 05/2025
Conteos actuales - Productos: X Blogs: Y
Stats creadas/actualizadas: {...}
```

### En la consola del navegador deberías ver:
```
Fetching stats for: {current: "05/2025", previous: "04/2025"}
Stats data received: {...}
```

## Problemas comunes y soluciones:

### 1. **Productos/Blogs aparecen como 0**
- Verificar que los productos/blogs tengan `visible: true`
- Hacer "Reset Stats" y luego "Inicializar Stats"
- Verificar los logs en la consola

### 2. **Visitantes no se registran**
- Verificar que el VisitorTracker esté funcionando
- Abrir herramientas de desarrollador y ver Network tab
- Verificar que no haya errores en la consola

### 3. **Error de Hydration**
- Ya debería estar solucionado con el estado `mounted`
- Si persiste, verificar que no haya diferencias entre server y client

### 4. **Datos del mes anterior no aparecen**
- Es normal si es el primer mes de uso
- Puedes crear datos manualmente en la DB para testing

## Limpieza después del testing:

Una vez que todo funcione correctamente:

1. Remover el `DebugButton` del Dashboard
2. Remover la API `/api/debug`
3. Remover la API `/api/stats/reset` (opcional, puede ser útil mantenerla)
4. Remover los console.log extra de las funciones

## Archivos a modificar para la limpieza:

- `app/(admin)/admin/components/Dashboard.tsx` - Remover DebugButton
- `app/components/DebugButton.tsx` - Eliminar archivo
- `app/api/debug/route.ts` - Eliminar archivo (opcional)
- Remover console.log de `initializeMonthlyStats.ts` y otros archivos
