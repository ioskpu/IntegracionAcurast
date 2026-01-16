# GUÍA: Crear Deployment con Advance Deploy

**Fecha:** 15 enero 2026  
**Método:** hub.acurast.com → Advance Deploy  
**Costo:** ~0.0047 cACU por ejecución

---

## 🎯 OBJETIVO

Crear un deployment en Acurast Testnet (Canary) usando la interfaz web de hub.acurast.com.

---

## PASO 1: Acceder a Advance Deploy

1. **Abrir:** https://hub.acurast.com/
2. **Conectar** wallet Talisman (si no está conectada)
3. **Ir a:** Menú "Developer" → **Advance Deploy**

---

## PASO 2: Seleccionar Protocolo

**Opciones que aparecen:**
- Generic Substrate Chain
- Substrate
- On-Demand Access
- **Other** ← SELECCIONAR ESTE
- Blank

**Configuración:**
1. **Protocol:** `Other`
2. **Type:** `Blank`

**¿Por qué?**
- "Other" = No necesitamos interactuar con ninguna blockchain específica
- "Blank" = Script JavaScript simple desde cero

---

## PASO 3: Insertar Código

**Opciones que aparecen:**
- Script JS (editor de código)
- IPFS URL
- ZIP Upload

**Seleccionar:** Script JS (editor de código)

**Código a usar:**

```javascript
// Prueba de existencia simple
const hash = "abc123def456789";
const timestamp = Date.now();

console.log("Hash:", hash);
console.log("Timestamp:", timestamp);
console.log("Fecha:", new Date(timestamp).toISOString());

// Resultado
const result = {
  hash: hash,
  timestamp: timestamp,
  date: new Date(timestamp).toISOString()
};

console.log("Resultado:", JSON.stringify(result));
```

**Copiar y pegar** este código en el editor.

---

## PASO 4: Seleccionar Matching Strategy

**Opciones que aparecen:**
- **Single Matches** ← SELECCIONAR ESTE
- Competing Matches

**Configuración:**
- **Matching Strategy:** `Single Matches`

**¿Por qué?**
- Single Matches asigna procesadores al inicio
- Más simple para una ejecución única

---

## PASO 5: Especificar Procesadores

**Opciones que aparecen:**
- **Use Public Processors** ← SELECCIONAR ESTE
- Use Personal Processors
- Use Specific Processors
- Allow list

**Configuración:**
- **Processors:** `Use Public Processors`

**¿Por qué?**
- Public Processors = Cualquier procesador de la red puede ejecutar
- Pagas un reward mínimo
- No necesitas tu propio dispositivo

---

## PASO 6: Configurar Ejecución

### Execution Schedule

| Campo | Valor | Descripción |
|-------|-------|-------------|
| **Start time** | Ahora (default) | Cuándo empieza |
| **End time** | Mañana (default) | Cuándo termina |
| **Interval in minutes** | `0` | No repetir |
| **Total executions** | `1` | Solo una vez |
| **Duration in milliseconds** | `30000` | 30 segundos |
| **Max start delay** | `60000` | 1 minuto de margen |

### Environment Variables

**Dejar vacío** (no necesitamos variables secretas)

### Additional Parameters

| Campo | Valor | Descripción |
|-------|-------|-------------|
| **Number of Processors** | `1` | Solo uno |
| **Minimum reputation** | `0` | Cualquier procesador |
| **Android Min Version** | `---` o última | Opcional |
| **iOS Min Version** | `---` o última | Opcional |
| **Max Reward** | `1` cACU | Reward por ejecución |

---

## PASO 7: Revisar Costo Total

**Al final de la página verás:**

```
Total: 0.00475228 cACU
```

Este es el costo total del deployment (muy bajo).

**Verificar:**
- ✅ Tienes suficiente balance (100 cACU)
- ✅ Total executions = 1
- ✅ Number of Processors = 1

---

## PASO 8: Publicar Deployment

1. **Hacer clic en:** `Publish Deployment`
2. **Se abrirá Talisman** para confirmar la transacción
3. **Revisar:**
   - Monto: ~0.0047 cACU
   - Network: Acurast Canary
4. **Confirmar** en Talisman
5. **Esperar** confirmación (10-30 segundos)

---

## PASO 9: Obtener Deployment ID

**Después de confirmar:**
- Deberías ver un mensaje de éxito
- Aparecerá el **Deployment ID** (formato: número o hash)
- Puede aparecer el **Transaction Hash**

**Anotar:**
```
Deployment ID: [COPIAR]
Transaction Hash: [COPIAR]
Hora: [ANOTAR]
```

---

## PASO 10: Ver Estado del Deployment

1. **Ir a:** Developer → **Deployments**
2. **Buscar** tu deployment (el más reciente)
3. **Ver estado:**
   - 🟡 Pending (esperando procesador)
   - 🟡 Assigned (procesador asignado)
   - 🟡 Executing (ejecutando)
   - 🟢 Fulfilled (completado)

**Tiempo esperado:** 1-5 minutos

---

## PASO 11: Ver Resultados

**Una vez en estado "Fulfilled":**
1. **Hacer clic** en el deployment
2. **Ver detalles:**
   - Deployment ID
   - Estado
   - Procesador asignado
   - Logs (si están disponibles)
3. **Buscar** los console.log del script

**Deberías ver:**
```
Hash: abc123def456789
Timestamp: [número]
Fecha: [ISO string]
Resultado: {"hash":"abc123def456789","timestamp":...}
```

---

## ✅ CRITERIOS DE ÉXITO

Deployment exitoso si:
- [x] Deployment creado sin errores
- [x] Deployment ID obtenido
- [x] Estado cambió a "Fulfilled"
- [x] Logs visibles con los console.log
- [x] Costo fue ~0.0047 cACU

---

## 📝 ANOTAR EN FASE-1-RESULTADOS.md

```markdown
### Tarea 3: Crear Deployment con Advance Deploy

Método usado: Advance Deploy (hub.acurast.com)
Deployment ID: [COPIAR]
Transaction hash: [COPIAR]
Estado final: Fulfilled
Tiempo total: [MINUTOS]
Costo: 0.00475228 cACU
Balance restante: [CALCULAR]
```

---

## 🚨 PROBLEMAS COMUNES

### Error: "Insufficient balance"
- Verificar que tienes cACU en Talisman
- Reducir Max Reward a 0.1 cACU

### Error: "No processors available"
- Aumentar Max Reward a 2-5 cACU
- Cambiar Minimum reputation a 0

### Deployment se queda en "Pending"
- Esperar 5-10 minutos
- Si no cambia, aumentar Max Reward

### No veo logs
- Algunos deployments no muestran logs inmediatamente
- Esperar unos minutos y refrescar

---

## 🎯 SIGUIENTE PASO

Una vez tengas Deployment ID y estado "Fulfilled":
→ **FASE 2:** Crear script Node.js que consulte deployments programáticamente

---

**Última actualización:** 15 enero 2026
