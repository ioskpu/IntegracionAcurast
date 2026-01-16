# FASE 2: Investigación SDK - Resultados

**Fecha:** 16 enero 2026  
**Objetivo:** Identificar cómo consultar deployments programáticamente

---

## ✅ HALLAZGOS CLAVE

### 1. Acurast es una Substrate Chain

Acurast está construido sobre Substrate (framework de Polkadot), lo que significa:
- ✅ Podemos usar `@polkadot/api` para consultar la chain
- ✅ Hay endpoints RPC públicos disponibles
- ✅ Los deployments están almacenados on-chain

---

### 2. Endpoint RPC de Canary (Testnet)

**Proveedor:** Dwellir (infraestructura pública)

**WebSocket:**
```
wss://api-acurast-canary.n.dwellir.com/<API_KEY>
```

**HTTPS:**
```
https://api-acurast-canary.n.dwellir.com/<API_KEY>
```

**Nota:** Requiere API Key de Dwellir (gratuita)

**Fuente:** https://www.dwellir.com/networks/acurast

---

### 3. SDK Disponibles

#### Opción A: `@polkadot/api` (RECOMENDADO)
- ✅ SDK oficial de Polkadot/Substrate
- ✅ Funciona con cualquier Substrate chain
- ✅ Bien documentado
- ✅ Activamente mantenido

**Instalación:**
```bash
npm install @polkadot/api
```

**Ejemplo básico:**
```javascript
import { ApiPromise, WsProvider } from '@polkadot/api';

const provider = new WsProvider('wss://api-acurast-canary.n.dwellir.com/<API_KEY>');
const api = await ApiPromise.create({ provider });

// Consultar información de la chain
const hash = await api.rpc.chain.getBlockHash(0);
console.log(hash.toHex());
```

#### Opción B: `@acurast/dapp`
- ⚠️ Específico para comunicación P2P con procesadores
- ⚠️ NO es para consultar deployments
- ⚠️ Documentación limitada

**Conclusión:** NO es lo que necesitamos para Fase 2.

#### Opción C: `@acurast/cli`
- ⚠️ CLI para crear deployments
- ⚠️ Tiene bugs en Windows (ya probado en Fase 1)
- ⚠️ NO expone funciones de consulta reutilizables

**Conclusión:** NO es útil para Fase 2.

---

### 4. Estructura de Acurast Substrate

**Repositorio:** https://github.com/Acurast/acurast-substrate

**Pallets relevantes:**
- `acurast` - Pallet principal para deployments
- `acurast-marketplace` - Matching de procesadores
- `acurast-processor-manager` - Gestión de procesadores

**Métodos probables para consultar:**
- `api.query.acurast.storedDeployment(deploymentId)` - Obtener deployment por ID
- `api.query.acurast.deployments()` - Listar todos los deployments
- `api.query.acurast.executions(deploymentId)` - Obtener ejecuciones

**Nota:** Nombres exactos por confirmar al conectarnos.

---

### 5. Dwellir API Key

**Necesitamos obtener API Key gratuita:**

**Pasos:**
1. Ir a: https://www.dwellir.com/
2. Registrarse (gratis)
3. Crear API Key para Acurast Canary
4. Reemplazar `<API_KEY>` en el endpoint

**Alternativa:** Buscar endpoint público sin API Key (menos confiable)

---

## 🎯 PLAN DE IMPLEMENTACIÓN ACTUALIZADO

### Paso 1: Obtener Dwellir API Key (15 min)
- [ ] Registrarse en Dwellir
- [ ] Crear API Key
- [ ] Probar conexión básica

### Paso 2: Setup Proyecto Node.js (15 min)
- [ ] `npm init -y`
- [ ] `npm install @polkadot/api`
- [ ] Crear `acurast-query.js`

### Paso 3: Conectar a Acurast Canary (30 min)
- [ ] Importar `@polkadot/api`
- [ ] Conectar con WsProvider
- [ ] Verificar conexión exitosa
- [ ] Obtener metadata de la chain

### Paso 4: Explorar Pallets Disponibles (30 min)
- [ ] Listar pallets disponibles
- [ ] Identificar pallet `acurast`
- [ ] Listar métodos de consulta disponibles
- [ ] Documentar estructura

### Paso 5: Consultar Deployment (1-2h)
- [ ] Identificar método correcto
- [ ] Consultar deployment de Fase 1
- [ ] Parsear respuesta
- [ ] Mostrar datos en consola

### Paso 6: Documentar (30 min)
- [ ] Crear `FASE-2-RESULTADOS.md`
- [ ] Actualizar README.md

---

## 📚 RECURSOS ÚTILES

**Documentación:**
- Polkadot.js API: https://polkadot.js.org/docs/api/
- Acurast Docs: https://docs.acurast.com/
- Dwellir: https://www.dwellir.com/networks/acurast

**Ejemplos de código:**
- Polkadot.js Examples: https://polkadot.js.org/docs/api/examples/promise/
- Acurast GitHub: https://github.com/Acurast/acurast-substrate

---

## ✅ DECISIÓN FINAL

**Stack elegido:**
- **SDK:** `@polkadot/api`
- **Endpoint:** Dwellir (wss://api-acurast-canary.n.dwellir.com/)
- **Lenguaje:** Node.js (JavaScript/ESM)

**Razones:**
1. `@polkadot/api` es el estándar para Substrate chains
2. Dwellir ofrece infraestructura confiable y gratuita
3. Documentación abundante y ejemplos disponibles
4. No necesitamos CLI ni P2P (solo consultas)

---

## 🚀 SIGUIENTE PASO

**Obtener Dwellir API Key**

1. Ir a: https://www.dwellir.com/
2. Registrarse
3. Crear API Key para "Acurast Canary"
4. Guardar API Key en `.env`

**¿Listo para continuar?**

Dime cuando tengas la API Key o si prefieres que busquemos un endpoint público alternativo.
