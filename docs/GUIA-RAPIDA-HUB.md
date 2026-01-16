# GUÍA RÁPIDA: hub.acurast.com

**Actualización:** La interfaz de Acurast ahora es hub.acurast.com (no console)

---

## ✅ Ya Completado

- [x] Wallet Talisman instalada
- [x] Conectado a hub.acurast.com
- [x] Tienes cACU (tokens de testnet)
- [x] Ves menú Developer

---

## 🎯 Siguiente: Crear Job de Prueba

### Opción 1: Desde Developer Menu

1. **Ir a "Developer"** en el menú principal
2. Buscar **"Create Job"** o **"New Job"**
3. Deberías ver un editor de código o formulario

### Opción 2: Desde Projects

1. **Ir a "Projects"** (si existe)
2. **"Create New Project"**
3. Dentro del proyecto, **"Create Job"**

---

## 📝 Script de Prueba Simple

Cuando llegues al editor de código, usa este script mínimo:

```javascript
// Script de prueba - Registrar hash simple
const hash = "abc123def456789"; // Hash de prueba
const timestamp = Date.now();

// Imprimir para verificar
console.log("Hash:", hash);
console.log("Timestamp:", timestamp);

// Retornar datos
_STD_.chains.substrate.signer.signAndSend(
  _STD_.chains.substrate.acurastTestnet.api.tx.fulfillment.fulfill(
    hash,
    timestamp.toString()
  )
);
```

**Nota:** Si este script no funciona, busca **"Templates"** o **"Examples"** en la interfaz y usa uno predefinido.

---

## ⚙️ Configuración del Job

Cuando configures el Job:

**Schedule:**
- Selecciona: **"Once"** (una sola vez)
- O: **"Immediate"** (inmediato)

**Processors:**
- Selecciona: **"Public Processors"** (procesadores públicos)
- O: **"Any Available"**

**Reward:**
- Usa el **mínimo sugerido** (probablemente 1-5 cACU)
- No te preocupes por el costo, son tokens de testnet

**Duration:**
- Si pregunta: **1 minute** o **5 minutes**

---

## 🔍 Qué Buscar en la Interfaz

### Elementos Clave:

1. **Network Selector** (selector de red)
   - Debe decir "Testnet" o "Acurast Testnet"
   - Si dice "Mainnet", cámbialo

2. **Balance Display** (mostrar balance)
   - Debe mostrar tu cantidad de cACU
   - Ejemplo: "100 cACU"

3. **Job Editor** (editor de job)
   - Área de código JavaScript
   - Botones: "Test", "Deploy", "Create"

4. **Job List** (lista de jobs)
   - Después de crear, deberías ver tu Job aquí
   - Con estado: "Pending", "Running", "Completed"

---

## 🚨 Troubleshooting

### Si no ves "Developer" o "Create Job":

**Opción A:** Busca en otros menús
- "Projects"
- "Deployments"
- "Jobs"
- "Console"

**Opción B:** Busca botón "+" o "New"
- Puede estar en la esquina superior derecha
- O en el menú lateral

**Opción C:** Verifica permisos
- Asegúrate de estar conectado con Talisman
- Verifica que la wallet esté desbloqueada

### Si la interfaz es diferente:

**Toma screenshot y describe:**
- Qué menús ves
- Qué opciones hay
- Qué botones aparecen

---

## 📸 Screenshots Útiles

Toma screenshots de:
1. Dashboard principal (para ver estructura)
2. Menú Developer (si lo encuentras)
3. Balance de cACU
4. Cualquier formulario de creación de Job

---

## ❓ Preguntas Frecuentes

**P: ¿cACU es lo mismo que ACU?**
R: cACU = Testnet tokens. ACU = Mainnet tokens. Necesitas cACU.

**P: ¿Cuánto cACU necesito?**
R: Probablemente 10-50 cACU para varios Jobs de prueba.

**P: ¿Puedo obtener más cACU?**
R: Sí, busca "Faucet" o "Fund Account" en la interfaz.

**P: ¿Qué pasa si me equivoco?**
R: Nada grave, son tokens de testnet. Puedes intentar de nuevo.

---

## 🎯 Objetivo Inmediato

**Encontrar dónde crear un Job.**

Una vez lo encuentres, anota en `docs/FASE-1-RESULTADOS.md`:
- Qué menú usaste
- Qué pasos seguiste
- Qué opciones viste

---

**¿Qué ves en el menú Developer?**