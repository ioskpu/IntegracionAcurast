# Pre-Commit Checklist

Verifica estos puntos antes de hacer commit y push a GitHub.

---

## ✅ Seguridad

- [x] API Keys removidas de todos los archivos
- [x] Wallet addresses por defecto removidas
- [x] `.env` contiene solo placeholders
- [x] `.gitignore` incluye `.env`
- [x] No hay datos sensibles en el código

**Comando de verificación:**
```bash
# Buscar posibles API keys
grep -r "bc24d97d" .
grep -r "api-acurast-canary.n.dwellir.com/[a-f0-9]" .

# No debe retornar resultados
```

---

## 📄 Archivos Esenciales

- [x] `README.md` - Documentación principal actualizada
- [x] `PROYECTO-CERRADO.md` - Documento de cierre
- [x] `SETUP.md` - Guía de instalación
- [x] `GIT-INSTRUCTIONS.md` - Instrucciones para Git
- [x] `package.json` - Dependencias correctas
- [x] `.env.example` - Ejemplo de configuración
- [x] `.gitignore` - Configurado correctamente

---

## 🔧 Scripts

- [x] `test-connection.js` - Sin API keys hardcodeadas
- [x] `explore-storage.js` - Sin API keys hardcodeadas
- [x] `query-deployment.js` - Sin API keys hardcodeadas
- [x] `acurast-query.js` - Sin API keys hardcodeadas

**Todos los scripts deben usar:**
```javascript
const RPC_ENDPOINT = process.env.ACURAST_RPC_ENDPOINT || 'https://api-acurast-canary.n.dwellir.com/YOUR_API_KEY_HERE';
```

---

## 📚 Documentación

- [x] `docs/FASE-1-RESULTADOS.md` - Completa
- [x] `docs/FASE-2-RESULTADOS.md` - Completa
- [x] `docs/README.md` - Índice de documentos
- [x] Todas las guías están actualizadas

---

## 🚫 Archivos a NO Commitear

Verifica que estos archivos NO estén en el commit:

- [ ] `.env` (debe estar en .gitignore)
- [ ] `node_modules/` (debe estar en .gitignore)
- [ ] `*.log` (debe estar en .gitignore)
- [ ] Archivos temporales del IDE

**Comando de verificación:**
```bash
git status

# .env NO debe aparecer en la lista
# node_modules/ NO debe aparecer en la lista
```

---

## 🔍 Verificación de .gitignore

Contenido mínimo de `.gitignore`:

```
# Dependencies
node_modules/

# Environment variables (NUNCA commitear)
.env

# Logs
*.log
npm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Build
dist/
build/
```

---

## 📊 Estructura del Proyecto

Verifica que esta estructura esté completa:

```
/
├── docs/
│   ├── README.md
│   ├── FASE-1-RESULTADOS.md
│   ├── FASE-2-RESULTADOS.md
│   ├── GUIA-ADVANCE-DEPLOY.md
│   └── [otros documentos]
├── test-connection.js
├── explore-storage.js
├── query-deployment.js
├── acurast-query.js
├── package.json
├── .env.example
├── .env (NO commitear)
├── .gitignore
├── README.md
├── PROYECTO-CERRADO.md
├── SETUP.md
├── GIT-INSTRUCTIONS.md
└── PRE-COMMIT-CHECKLIST.md (este archivo)
```

---

## 🧪 Tests Finales

Antes de commitear, ejecuta:

```bash
# Verificar que no hay errores de sintaxis
npm install
node test-connection.js

# Debe fallar con "YOUR_API_KEY_HERE" (esperado)
# Esto confirma que no hay API key hardcodeada
```

---

## 📝 Mensaje de Commit Sugerido

```bash
git commit -m "Initial commit: Acurast integration project

- Fase 1 y 2 completadas exitosamente
- Integración con Acurast Canary validada
- Documentación completa incluida
- Proyecto cerrado con hallazgos documentados"
```

---

## 🎯 Checklist Final

Antes de hacer `git push`:

- [ ] He verificado que `.env` NO está en el commit
- [ ] He verificado que no hay API keys en el código
- [ ] He leído `GIT-INSTRUCTIONS.md`
- [ ] He verificado que `README.md` se ve bien
- [ ] He verificado que `SETUP.md` tiene instrucciones claras
- [ ] Estoy listo para hacer push

---

## 🚀 Comandos para Subir

```bash
# 1. Verificar estado
git status

# 2. Agregar archivos
git add .

# 3. Verificar qué se va a commitear
git status

# 4. Commit
git commit -m "Initial commit: Acurast integration project"

# 5. Conectar con GitHub (primera vez)
git remote add origin https://github.com/TU_USUARIO/REPO_NAME.git
git branch -M main

# 6. Push
git push -u origin main
```

---

## ⚠️ Si Algo Sale Mal

### Si commiteaste .env por error:

```bash
# Remover del staging
git reset HEAD .env

# Remover del historial (si ya hiciste commit)
git rm --cached .env
git commit --amend
```

### Si subiste API key a GitHub:

1. **Regenera tu API key inmediatamente** en Dwellir
2. Actualiza tu `.env` local
3. Limpia el historial de Git (ver `GIT-INSTRUCTIONS.md`)

---

**Última actualización:** 16 enero 2026

**¿Todo listo?** ✅ Procede con el commit y push.
