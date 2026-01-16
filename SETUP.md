# Setup del Proyecto

Esta guía te ayudará a configurar el proyecto localmente.

---

## Requisitos Previos

- Node.js 18 o superior
- npm
- Cuenta en Dwellir (para API Key)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd DePinAcurast
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Edita `.env` y reemplaza `YOUR_API_KEY_HERE` con tu API Key de Dwellir.

---

## Obtener API Key de Dwellir

### Paso 1: Registrarse en Dwellir

1. Ve a: https://www.dwellir.com/
2. Haz clic en "Sign Up" o "Get Started"
3. Completa el registro (email + contraseña)
4. Verifica tu email

### Paso 2: Crear API Key

1. Inicia sesión en Dwellir
2. Ve a "Dashboard" o "API Keys"
3. Haz clic en "Create New API Key"
4. Selecciona "Acurast Canary" como red
5. Copia la API Key generada

### Paso 3: Configurar en el proyecto

Edita `.env` y pega tu API Key:

```env
ACURAST_RPC_ENDPOINT=https://api-acurast-canary.n.dwellir.com/TU_API_KEY_AQUI
```

---

## Uso

### Probar conexión

```bash
npm run test
```

Deberías ver:
```
✅ Conectado a Acurast Canary
Chain: Acurast Canary
Node: Polkadot parachain
```

### Explorar storage

```bash
npm run explore
```

### Consultar un deployment

```bash
npm run deployment
```

O con parámetros personalizados:

```bash
node query-deployment.js <job-id> [wallet-address]
```

Ejemplo:
```bash
node query-deployment.js 303867 5EXZxqD6UiuKRDUoT83N7rpTkMB6aqh8j6k8BCP9JF1hjXaT
```

---

## Troubleshooting

### Error: "Timeout: No se pudo conectar"

**Causa:** API Key incorrecta o endpoint no disponible

**Solución:**
1. Verifica que tu API Key esté correcta en `.env`
2. Prueba con el endpoint público (más lento):
   ```env
   ACURAST_RPC_ENDPOINT=wss://public-rpc.canary.acurast.com
   ```

### Error: "Job no encontrado"

**Causa:** El Job ID no existe o expiró

**Solución:**
1. Verifica el Job ID en hub.acurast.com
2. Usa un Job ID más reciente
3. Verifica que la wallet address sea correcta

### Error: "Module not found"

**Causa:** Dependencias no instaladas

**Solución:**
```bash
npm install
```

---

## Estructura del Proyecto

```
/
├── docs/                      # Documentación
│   ├── FASE-1-RESULTADOS.md
│   ├── FASE-2-RESULTADOS.md
│   └── ...
├── test-connection.js         # Test de conexión
├── explore-storage.js         # Exploración de pallets
├── query-deployment.js        # Consulta de deployments
├── package.json
├── .env.example               # Ejemplo de configuración
├── .env                       # Tu configuración (no commitear)
├── .gitignore
├── README.md
├── SETUP.md                   # Esta guía
└── PROYECTO-CERRADO.md        # Documento de cierre
```

---

## Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| Test | `npm run test` | Prueba conexión a Acurast |
| Explore | `npm run explore` | Explora pallets y storage |
| Deployment | `npm run deployment` | Consulta un deployment |
| Query | `npm run query` | Script de consulta legacy |

---

## Notas Importantes

### Seguridad

- ⚠️ **NUNCA** commitees el archivo `.env` con tu API Key
- ⚠️ El archivo `.gitignore` ya está configurado para ignorar `.env`
- ⚠️ Si accidentalmente commiteas tu API Key, regenerala inmediatamente

### Limitaciones

- Los logs de ejecución NO están disponibles on-chain
- El endpoint público puede ser lento o tener timeouts
- Los deployments expirados pueden ser eliminados del storage

### Costos

- Dwellir es **gratuito** para uso básico
- Acurast Testnet (Canary) es **gratuito**
- No hay costos asociados a este proyecto

---

## Soporte

Si tienes problemas:

1. Revisa la documentación en `docs/`
2. Lee `PROYECTO-CERRADO.md` para entender limitaciones
3. Consulta la documentación oficial:
   - Acurast: https://docs.acurast.com/
   - Polkadot.js: https://polkadot.js.org/docs/api/
   - Dwellir: https://www.dwellir.com/

---

## Contribuir

Este proyecto está **cerrado** y no acepta contribuciones.

Es un proyecto de validación técnica que cumplió su objetivo.

Si quieres construir sobre esta base, siéntete libre de hacer fork.

---

**Última actualización:** 16 enero 2026
