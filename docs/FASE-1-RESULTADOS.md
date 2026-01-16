# FASE 1: RESULTADOS Y EVIDENCIA

**Fecha de inicio:** 15 enero 2026  
**Responsable:** Luis

---

## PROGRESO

### ✅ Tarea 1: Crear Cuenta en Acurast Console
**Estado:** ✅ Completada

```
Wallet address: [5EXZxqD6UiuKRDUoT83N7rpTkMB6aqh8j6k8BCP9JF1hjXaT]
Red seleccionada: Testnet (hub.acurast.com)
Fecha de creación: 15 enero 2026
Balance inicial cACU: [6.369 cACU]
```

**Evidencia:**
- [ ] Screenshot del dashboard

**Notas:**
- Hub redirige de console.acurast.com a hub.acurast.com (normal)
- Ya tengo cACU (tokens de testnet)
- Menú Developer visible

---

### ✅ Tarea 2: Obtener Fondos de Testnet
**Estado:** ✅ Completada

```
Balance inicial: 100 cACU (ya tenía)
Red: Acurast Canary (testnet)
Suficiente para pruebas: SÍ
```

**Evidencia:**
- [x] Balance visible en Talisman

**Notas:**
- Ya tenía cACU en la cuenta
- No fue necesario usar faucet
- Canary = Testnet de Acurast

---

### ✅ Tarea 3: Crear Job Manual
**Estado:** ✅ Completada

```
Deployment ID: Acurast#303867
Transaction hash: 0x2c2536aa77e613149c87757c31e2ae08bef930832af3bc3e49fb7012daadb257
Reward pagado: 0.00032 cACU (real) / 0.00475228 cACU (máximo)
Tiempo de creación: 15.01.26, 20:14
Método: Advance Deploy (hub.acurast.com)
```

**Evidencia:**
- [x] Deployment creado exitosamente
- [x] Transaction hash obtenido

---

### ✅ Tarea 4: Esperar Confirmación
**Estado:** ✅ Completada

```
Estado inicial: Pending
Estados intermedios: Assigned → Acknowledged → Executing
Estado final: Fulfilled (1/1 executions)
Tiempo total: ~5-10 minutos
Errores: Ninguno
Procesadores asignados: 1/1
```

**Evidencia:**
- [x] Deployment ejecutado exitosamente
- [x] Estado "Fulfilled" alcanzado

---

### ✅ Tarea 5: Verificar Datos
**Estado:** ✅ Completada (parcial)

```
Deployment ID: Acurast#[segundo intento]
Executions: 1/97 completada
Reward pagado: 0.0002003 cACU
Attestation: 0.971 (97.1% confianza)
Start time: 16.01.26, 08:05
End time: 17.01.26, 08:20

Limitación encontrada:
Hub no muestra logs detallados (console.log)
Solo muestra métricas de ejecución
```

**Evidencia:**
- [x] Ejecución confirmada (1/97)
- [x] Reward pagado
- [x] Attestation alto (97.1%)

---

### ✅ Tarea 6: Verificación Manual
**Estado:** ✅ Completada

```
¿Job es público?: SÍ (visible en hub con Deployment ID)
¿Requiere autenticación?: SÍ (necesitas wallet conectada)
¿Hay función de búsqueda?: NO (solo lista de deployments propios)
¿Logs visibles?: NO (hub no muestra console.log)
```

---

## MÉTRICAS FINALES

```
Tiempo total de Fase 1: ~3 horas (incluyendo troubleshooting)

Latencias observadas:
- Obtener fondos: 0 min (ya tenía cACU)
- Crear Job: 1-2 min (confirmación en blockchain)
- Confirmar Job: 10-15 min (primer intento expiró)
- Ejecutar Job: <5 min (segundo intento exitoso)

Costos:
- Intento 1: 0 cACU (expiró sin ejecutar)
- Intento 2: 0.0002003 cACU (ejecutado)
- Balance inicial: 100 cACU
- Balance restante: ~99.9998 cACU
```

---

## APRENDIZAJES

### ¿Qué funcionó bien?
```
- Hub de Acurast es intuitivo y fácil de usar
- Advance Deploy permite configuración detallada
- Talisman wallet se integra sin problemas
- Costos son muy bajos en testnet (~0.0002 cACU)
- Attestation es alto (97.1% confianza)
```

### ¿Qué fue difícil?
```
- CLI de Acurast tiene bugs en Windows (no funciona)
- Documentación oficial es escasa para hub
- Ventana de ejecución debe ser amplia (>24h recomendado)
- No hay feedback visual claro del progreso
```

### ¿Qué no funcionó?
```
- CLI (@acurast/cli) - Error ENOENT en Windows
- Primer deployment - Expiró antes de ejecutar (ventana 15 min)
- Logs no visibles en hub - Solo métricas básicas
```

### Limitaciones descubiertas
```
- Hub NO muestra console.log del script
- Hub NO permite búsqueda de deployments por ID público
- Deployments solo visibles con wallet conectada
- No hay explorador público de deployments en testnet
- Logs solo accesibles vía SDK/API (no en UI)
```

---

## DECISIÓN FINAL

**Criterios cumplidos:** 5 / 5

- [x] Cuenta creada
- [x] Fondos obtenidos
- [x] Job creado
- [x] Job confirmado
- [x] Datos verificables (métricas, no logs)

**¿Continuar a Fase 2?** [x] SÍ

**Razón:**
```
Fase 1 exitosa. Validamos que:
1. Acurast funciona en testnet
2. Deployments se crean y ejecutan correctamente
3. Costos son mínimos (~0.0002 cACU)
4. Attestation es confiable (97.1%)

Limitación: Hub no muestra logs detallados.
Solución: Fase 2 usará SDK para acceder a logs programáticamente.
```

---

**Fecha de finalización:** 16 enero 2026  
**Resultado:** ✅ EXITOSA