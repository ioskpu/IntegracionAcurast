# FASE 1: PRUEBA MANUAL CON ACURAST

**Objetivo:** Validar que Acurast funciona antes de escribir código.  
**Duración estimada:** 2-4 horas  
**Estado:** 🟡 En progreso

---

## CHECKLIST DE TAREAS

### ☐ Tarea 1: Crear Cuenta en Acurast Console

**Pasos:**
1. Ir a: https://console.acurast.com/
2. Conectar wallet (Talisman o PolkadotJS Extension)
3. Seleccionar red: **Acurast Testnet**
4. Confirmar que puedes ver el dashboard

**Validación:**
- [ ] Puedes acceder a Acurast Console
- [ ] Wallet está conectada
- [ ] Estás en Testnet (no Mainnet)

**Evidencia:**
- Screenshot del dashboard
- Dirección de tu wallet

**Notas:**
```
Wallet address: [ANOTAR AQUÍ]
Red seleccionada: [Testnet/Mainnet]
Fecha: [FECHA]
```

---

### ☐ Tarea 2: Obtener Fondos de Testnet

**Pasos:**
1. En Acurast Console, buscar "Fund Account" o "Faucet"
2. Solicitar tokens ACU de testnet
3. Esperar confirmación (puede tomar 1-5 minutos)
4. Verificar balance en wallet

**Validación:**
- [ ] Fondos recibidos (balance > 0)
- [ ] Balance visible en Console
- [ ] Suficiente para crear Jobs (mínimo recomendado: 10 ACU)

**Evidencia:**
- Screenshot del balance
- Transaction hash del faucet

**Notas:**
```
Balance inicial: [CANTIDAD] ACU
Transaction hash: [HASH]
Tiempo de espera: [MINUTOS]
```

**Troubleshooting:**
- Si faucet no funciona: Buscar en Discord/Telegram de Acurast
- Si balance no aparece: Verificar que estás en Testnet
- Si no hay faucet: Buscar documentación alternativa

---

### ☐ Tarea 3: Crear Job Manual (Prueba Simple)

**Pasos:**
1. En Console, ir a "Create Job" o "New Job"
2. Seleccionar destino: **Acurast Testnet**
3. Escribir script simple:

```javascript
// Script de prueba simple
const hash = "abc123def456"; // Hash de prueba
const timestamp = new Date().toISOString();

_STD_.chains.substrate.signer.signAndSend(
  _STD_.chains.substrate.acurastTestnet.api.tx.fulfillment.fulfill(
    hash,
    timestamp
  )
);
```

4. Configurar Job:
   - Schedule: "Once" (una sola vez)
   - Processors: "Public" (procesadores públicos)
   - Reward: Mínimo permitido

5. Hacer clic en "Create Job"
6. Confirmar transacción en wallet
7. Anotar Job ID

**Validación:**
- [ ] Job se creó sin errores
- [ ] Job ID recibido
- [ ] Transacción confirmada
- [ ] Balance disminuyó (se pagó reward)

**Evidencia:**
- Job ID
- Screenshot de Job creado
- Transaction hash

**Notas:**
```
Job ID: [ANOTAR AQUÍ]
Transaction hash: [HASH]
Reward pagado: [CANTIDAD] ACU
Tiempo de creación: [MINUTOS]
```

**Troubleshooting:**
- Si script falla: Usar template predefinido de Console
- Si no hay Processors: Esperar o seleccionar otros
- Si fondos insuficientes: Solicitar más del faucet

---

### ☐ Tarea 4: Esperar Confirmación del Job

**Pasos:**
1. En Console, ir a "My Jobs" o "Jobs"
2. Buscar tu Job ID
3. Observar estado del Job:
   - "Pending" → Esperando Processor
   - "Assigned" → Asignado a Processor
   - "Executing" → Ejecutándose
   - "Fulfilled" → Completado

4. Esperar hasta que estado sea "Fulfilled"
5. Anotar tiempo total

**Validación:**
- [ ] Job cambió de "Pending" a "Fulfilled"
- [ ] Tiempo de confirmación < 5 minutos
- [ ] No hay errores en el Job

**Evidencia:**
- Screenshot de Job "Fulfilled"
- Tiempo total de confirmación

**Notas:**
```
Estado inicial: [ESTADO]
Estado final: [ESTADO]
Tiempo total: [MINUTOS]
Errores: [SÍ/NO - Detalles]
```

**Troubleshooting:**
- Si Job queda en "Pending" >10 min: Puede no haber Processors disponibles
- Si Job falla: Revisar logs del Job en Console
- Si no cambia de estado: Refrescar página

---

### ☐ Tarea 5: Verificar Datos del Job

**Pasos:**
1. Hacer clic en el Job ID para ver detalles
2. Verificar que aparezcan:
   - Hash registrado
   - Timestamp
   - Transaction hash
   - Estado "Fulfilled"
   - Processor que lo ejecutó

3. Comparar hash registrado con hash enviado
4. Verificar que timestamp es coherente

**Validación:**
- [ ] Hash registrado coincide con hash enviado
- [ ] Timestamp es correcto (fecha/hora coherente)
- [ ] Transaction hash es válido
- [ ] Datos son legibles y completos

**Evidencia:**
- Screenshot de detalles del Job
- Comparación de hashes

**Notas:**
```
Hash enviado: abc123def456
Hash registrado: [HASH DEL JOB]
¿Coinciden?: [SÍ/NO]

Timestamp esperado: ~[HORA ACTUAL]
Timestamp registrado: [TIMESTAMP DEL JOB]
¿Coherente?: [SÍ/NO]

Transaction hash: [HASH]
```

---

### ☐ Tarea 6: Intentar Verificación Manual

**Pasos:**
1. Copiar Job ID
2. Cerrar sesión o abrir navegador incógnito
3. Ir a Acurast Console
4. Buscar Job por ID (si hay función de búsqueda)
5. Verificar que puedes ver los datos sin estar autenticado

**Validación:**
- [ ] Job es buscable por ID
- [ ] Datos son visibles públicamente
- [ ] No requiere autenticación para ver

**Evidencia:**
- Screenshot de búsqueda
- Confirmación de acceso público

**Notas:**
```
¿Job es público?: [SÍ/NO]
¿Requiere autenticación?: [SÍ/NO]
¿Hay función de búsqueda?: [SÍ/NO]
```

**Nota:** Si no hay búsqueda pública, esto es OK. Lo importante es que el Job existe y está confirmado.

---

## RESULTADOS DE FASE 1

### Criterios de Éxito

| Criterio | Estado | Notas |
|----------|--------|-------|
| Cuenta creada | ☐ | |
| Fondos obtenidos | ☐ | |
| Job creado | ☐ | |
| Job confirmado | ☐ | |
| Datos verificables | ☐ | |

**Fase 1 exitosa si:** 5/5 criterios cumplidos

---

### Métricas Observadas

```
Tiempo total de Fase 1: [HORAS]

Latencias:
- Obtener fondos: [MINUTOS]
- Crear Job: [MINUTOS]
- Confirmar Job: [MINUTOS]
- Total: [MINUTOS]

Costos:
- Reward por Job: [CANTIDAD] ACU
- Balance restante: [CANTIDAD] ACU
```

---

### Aprendizajes

**¿Qué funcionó bien?**
```
[ANOTAR AQUÍ]
```

**¿Qué fue difícil?**
```
[ANOTAR AQUÍ]
```

**¿Qué no funcionó?**
```
[ANOTAR AQUÍ]
```

**¿Qué documentación faltó?**
```
[ANOTAR AQUÍ]
```

---

### Limitaciones Descubiertas

```
[ANOTAR LIMITACIONES TÉCNICAS O DE PROCESO]

Ejemplos:
- Faucet solo da X tokens por día
- Jobs tardan mínimo Y minutos
- No hay búsqueda pública de Jobs
- Etc.
```

---

### Evidencia Recopilada

**Archivos adjuntos:**
- [ ] Screenshot: Dashboard de Acurast
- [ ] Screenshot: Balance con fondos
- [ ] Screenshot: Job creado
- [ ] Screenshot: Job fulfilled
- [ ] Screenshot: Detalles del Job

**Datos clave:**
```
Wallet address: [ADDRESS]
Job ID: [JOB-ID]
Transaction hash: [TX-HASH]
Hash registrado: [HASH]
Timestamp: [TIMESTAMP]
```

---

## DECISIÓN: ¿CONTINUAR A FASE 2?

### ✅ Continuar si:
- [x] Job se creó exitosamente
- [x] Job se confirmó en tiempo razonable (<5 min)
- [x] Datos son verificables
- [x] Proceso es repetible

### ❌ NO continuar si:
- [ ] No se pudo crear Job después de múltiples intentos
- [ ] Latencia es >10 minutos consistentemente
- [ ] Datos no son verificables
- [ ] Documentación es inexistente

---

## PRÓXIMO PASO

**Si Fase 1 exitosa:**
→ Proceder a **FASE 2: Integración Backend Mínima**

**Si Fase 1 falló:**
→ Documentar problemas y evaluar alternativas

---

**Fecha de inicio:** [FECHA]  
**Fecha de finalización:** [FECHA]  
**Resultado:** [EXITOSA / FALLIDA]