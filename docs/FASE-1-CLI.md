# FASE 1: USANDO ACURAST CLI

**Decisión:** Usar CLI en lugar de hub.acurast.com  
**Razón:** Más directo, mejor documentado, más control

---

## ✅ Ya Completado

- [x] Talisman instalada
- [x] Conectado a hub (verificado que funciona)
- [x] Tienes cACU (tokens de testnet)
- [x] CLI instalado (`@acurast/cli`)

---

## 🎯 PASO 1: Configurar CLI

### 1.1 Crear Proyecto de Prueba

```bash
cd C:\Users\Luis\Documents\proyectos\web3\DePinAcurast
acurast new test-proof
```

**Qué hace:**
- Crea carpeta `test-proof/`
- Genera `acurast.json` (configuración)
- Genera `.env` (secrets)
- Crea template de código

### 1.2 Configurar Mnemonic

**Obtener tu mnemonic de Talisman:**
1. Abrir Talisman
2. Hacer clic en tu cuenta
3. Buscar "Export" o "Show Seed Phrase"
4. Copiar las 12 o 24 palabras

**Agregar a `.env`:**
```bash
cd test-proof
# Editar .env y agregar:
ACURAST_MNEMONIC="tus 12 o 24 palabras aquí"
```

**⚠️ IMPORTANTE:** Guarda este mnemonic de forma segura. Es tu clave privada.

---

## 🎯 PASO 2: Crear Script Simple

### 2.1 Editar el Script

Ir a `test-proof/src/index.ts` (o `.js`) y reemplazar con:

```javascript
// Script de prueba - Registrar hash
const hash = "abc123def456789";
const timestamp = Date.now();

console.log("=== PRUEBA DE EXISTENCIA ===");
console.log("Hash:", hash);
console.log("Timestamp:", timestamp);
console.log("Fecha:", new Date(timestamp).toISOString());

// Retornar resultado
_STD_.chains.substrate.signer.signAndSend(
  _STD_.chains.substrate.acurastTestnet.api.tx.fulfillment.fulfill(
    hash,
    timestamp.toString()
  )
);
```

### 2.2 Compilar (si es TypeScript)

```bash
npm run build
# O
npm run bundle
```

---

## 🎯 PASO 3: Configurar Deployment

### 3.1 Editar `acurast.json`

Asegurarse de que tenga:

```json
{
  "projects": {
    "test-proof": {
      "projectName": "test-proof",
      "fileUrl": "dist/bundle.js",
      "network": "canary",  // ← IMPORTANTE: canary es testnet
      "onlyAttestedDevices": false,  // ← Cambiar a false para prueba
      "assignmentStrategy": {
        "type": "Single"
      },
      "execution": {
        "type": "onetime",  // ← Una sola vez
        "maxExecutionTimeInMs": 60000  // ← 60 segundos
      },
      "maxAllowedStartDelayInMs": 10000,
      "numberOfReplicas": 1,  // ← Solo 1 processor
      "maxCostPerExecution": 1000000000,  // ← Costo máximo
      "mutability": "Immutable"
    }
  }
}
```

**Cambios clave:**
- `network: "canary"` = Testnet
- `onlyAttestedDevices: false` = Acepta cualquier processor
- `numberOfReplicas: 1` = Solo 1 processor (más barato)
- `execution.type: "onetime"` = Una sola ejecución

---

## 🎯 PASO 4: Estimar Costo

```bash
acurast estimate-fee
```

**Qué hace:**
- Calcula cuánto cACU costará
- Verifica que tengas suficiente balance
- Muestra detalles del deployment

**Resultado esperado:**
```
Estimated fee: X cACU
Your balance: Y cACU
Status: ✓ Sufficient funds
```

---

## 🎯 PASO 5: Deploy

```bash
acurast deploy
```

**Qué hace:**
1. Sube tu script a IPFS
2. Crea deployment en Acurast
3. Asigna processors
4. Devuelve Deployment ID

**Resultado esperado:**
```
✓ Script uploaded to IPFS: ipfs://Qm...
✓ Deployment created
✓ Deployment ID: Acurast:5C....:123456
✓ Transaction hash: 0x...
```

**⏱️ Tiempo:** 1-5 minutos

---

## 🎯 PASO 6: Verificar Deployment

```bash
acurast deployments ls
```

**Qué muestra:**
- Lista de tus deployments
- Estado de cada uno
- Deployment IDs

**Para ver detalles:**
```bash
acurast deployments "Acurast:5C....:123456"
```

**Estados posibles:**
- `Pending` - Esperando processor
- `Assigned` - Asignado a processor
- `Executing` - Ejecutándose
- `Fulfilled` - Completado ✓

---

## 📝 ANOTAR RESULTADOS

En `docs/FASE-1-RESULTADOS.md`, anotar:

```
### Tarea 3: Crear Job con CLI

Deployment ID: Acurast:5C....:123456
Transaction hash: 0x...
Costo: X cACU
Tiempo de creación: Y minutos
Estado final: Fulfilled
```

---

## 🚨 Troubleshooting

### Error: "Insufficient funds"
**Solución:** Necesitas más cACU
- Ir a hub.acurast.com
- Buscar "Faucet" o "Fund Account"
- Solicitar más tokens

### Error: "No processors available"
**Solución:** Cambiar configuración
- En `acurast.json`: `onlyAttestedDevices: false`
- Aumentar `maxCostPerExecution`

### Error: "Invalid mnemonic"
**Solución:** Verificar `.env`
- Mnemonic debe estar entre comillas
- Debe ser 12 o 24 palabras
- Sin comas, solo espacios

### Error: "Network not found"
**Solución:** Verificar `network` en `acurast.json`
- Debe ser: `"canary"` (testnet)
- No: `"testnet"` o `"acurast-testnet"`

---

## ✅ CRITERIOS DE ÉXITO

Fase 1 exitosa si:
- [x] CLI ejecuta sin errores
- [x] Deployment se crea
- [x] Deployment ID recibido
- [x] Estado cambia a "Fulfilled"
- [x] Puedes ver deployment con `deployments ls`

---

## 🎯 SIGUIENTE PASO

Una vez tengas Deployment ID y estado "Fulfilled":
→ **FASE 2: Integración Backend**

Usaremos el conocimiento de CLI para crear integración programática.

---

**¿Listo para ejecutar `acurast new test-proof`?**