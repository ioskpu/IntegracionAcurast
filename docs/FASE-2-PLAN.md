# FASE 2: Integración Backend con Acurast

**Estado:** 🟡 Iniciando  
**Objetivo:** Consultar deployments programáticamente desde Node.js  
**Duración estimada:** 4-8 horas

---

## 🎯 OBJETIVO MÍNIMO

Crear un script Node.js que:
1. Se conecte a Acurast Testnet (Canary)
2. Consulte un deployment existente por ID
3. Obtenga métricas y estado
4. (Opcional) Obtenga logs si están disponibles

**NO vamos a:**
- ❌ Crear deployments programáticamente (todavía)
- ❌ Subir archivos
- ❌ Crear interfaz web
- ❌ Implementar autenticación

---

## 📋 APRENDIZAJES DE FASE 1

**Lo que sabemos:**
- ✅ Acurast funciona en testnet
- ✅ Deployments se ejecutan correctamente
- ✅ Costos son mínimos (~0.0002 cACU)
- ✅ Attestation es confiable (97.1%)
- ❌ Hub NO muestra logs detallados

**Conclusión:**
Necesitamos acceso programático para obtener logs y datos completos.

---

## 🔧 STACK TÉCNICO

**Lenguaje:** Node.js (JavaScript)  
**SDK:** `@acurast/dapp` o Polkadot.js API  
**Network:** Acurast Canary (testnet)  
**Wallet:** Talisman (para firmar si es necesario)

---

## 📦 ENTREGABLES

### 1. `acurast-query.js`
Script que consulta un deployment existente.

**Funcionalidad:**
```javascript
// Uso:
node acurast-query.js <deployment-id>

// Output esperado:
{
  deploymentId: "303867",
  status: "active",
  executions: "1/97",
  spent: "0.0002003 cACU",
  attestation: 0.971,
  logs: [...] // si están disponibles
}
```

### 2. `package.json`
Dependencias del proyecto.

### 3. `docs/FASE-2-RESULTADOS.md`
Documentación de lo que funcionó y lo que no.

---

## 🚀 PLAN DE IMPLEMENTACIÓN

### Paso 1: Investigar SDK (1-2h)
**Objetivo:** Entender qué SDK usar y cómo conectarse.

**Opciones:**
- `@acurast/dapp` - SDK oficial de Acurast
- `@polkadot/api` - API genérica de Polkadot/Substrate
- REST API (si existe)

**Tareas:**
- [ ] Buscar documentación de `@acurast/dapp`
- [ ] Revisar ejemplos en GitHub de Acurast
- [ ] Identificar endpoint de Canary testnet
- [ ] Identificar método para consultar deployment

**Criterio de éxito:**
- Saber qué paquete npm instalar
- Saber qué endpoint usar
- Tener ejemplo de código básico

---

### Paso 2: Setup Proyecto (30min)
**Objetivo:** Crear proyecto Node.js básico.

**Tareas:**
- [ ] `npm init -y`
- [ ] Instalar dependencias necesarias
- [ ] Crear `acurast-query.js` vacío
- [ ] Probar conexión básica

**Criterio de éxito:**
- Proyecto Node.js funcional
- Dependencias instaladas sin errores
- Script ejecuta sin errores de sintaxis

---

### Paso 3: Conectar a Acurast (1-2h)
**Objetivo:** Establecer conexión con Acurast Canary.

**Tareas:**
- [ ] Importar SDK
- [ ] Configurar endpoint de Canary
- [ ] Conectar a la red
- [ ] Verificar conexión exitosa

**Criterio de éxito:**
- Script se conecta sin errores
- Puede consultar información básica de la red

---

### Paso 4: Consultar Deployment (2-3h)
**Objetivo:** Obtener datos de un deployment existente.

**Tareas:**
- [ ] Identificar método de consulta por ID
- [ ] Consultar deployment de Fase 1
- [ ] Parsear respuesta
- [ ] Mostrar datos en consola

**Criterio de éxito:**
- Script recibe Deployment ID como argumento
- Obtiene estado, executions, reward
- Muestra datos formateados en consola

---

### Paso 5: Obtener Logs (1-2h - OPCIONAL)
**Objetivo:** Intentar obtener logs del script ejecutado.

**Tareas:**
- [ ] Buscar método para obtener logs
- [ ] Consultar logs de ejecución
- [ ] Mostrar console.log del script

**Criterio de éxito:**
- Si logs están disponibles: mostrarlos
- Si no: documentar limitación

---

### Paso 6: Documentar (30min)
**Objetivo:** Documentar resultados y aprendizajes.

**Tareas:**
- [ ] Crear `docs/FASE-2-RESULTADOS.md`
- [ ] Documentar qué funcionó
- [ ] Documentar limitaciones
- [ ] Actualizar README.md

**Criterio de éxito:**
- Documentación completa
- Código comentado
- README actualizado

---

## ✅ CRITERIOS DE ÉXITO

Fase 2 exitosa si:
- [x] Script Node.js funcional
- [x] Se conecta a Acurast Canary
- [x] Consulta deployment por ID
- [x] Obtiene métricas básicas (estado, executions, reward)
- [x] Código está documentado
- [ ] (Opcional) Obtiene logs del script

---

## 🚨 CRITERIOS DE NO-GO

Detener Fase 2 si:
- SDK no existe o no está documentado
- No hay forma de consultar deployments programáticamente
- Requiere configuración compleja (>4h de setup)
- Costos inesperados en testnet

---

## 📚 RECURSOS

**Documentación:**
- https://docs.acurast.com/
- https://github.com/Acurast
- https://www.npmjs.com/search?q=acurast

**Deployment de Fase 1:**
- Deployment ID: Acurast#303867 (primer intento)
- Deployment ID: [segundo intento - activo]
- Network: Acurast Canary
- Wallet: 5EXZxqD...F1hjXaT

---

## 🎯 SIGUIENTE PASO INMEDIATO

**Paso 1: Investigar SDK**

Buscar en:
1. npm: `@acurast/dapp`, `@acurast/sdk`
2. GitHub: https://github.com/Acurast
3. Docs: https://docs.acurast.com/developers

**Pregunta clave:**
¿Cómo consulto un deployment existente desde Node.js?

---

**¿Listo para empezar?**

Dime cuando quieras iniciar y empezamos con la investigación del SDK.
