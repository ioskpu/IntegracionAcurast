# Instrucciones para Subir a Git

Este documento contiene los pasos para subir el proyecto a GitHub de forma segura.

---

## ✅ Verificaciones de Seguridad Completadas

- [x] API Keys removidas de todos los archivos
- [x] Wallet addresses por defecto removidas
- [x] `.env` limpio con placeholders
- [x] `.gitignore` configurado correctamente
- [x] Documentación de setup creada

---

## 📋 Pasos para Subir a GitHub

### 1. Verificar que `.env` no se subirá

```bash
git status
```

**Verifica que `.env` NO aparezca en la lista.**

Si aparece, ejecuta:
```bash
git rm --cached .env
```

### 2. Inicializar repositorio (si no existe)

```bash
git init
```

### 3. Agregar archivos

```bash
git add .
```

### 4. Verificar qué se va a commitear

```bash
git status
```

**Asegúrate que NO aparezca:**
- `.env` (debe estar en .gitignore)
- `node_modules/` (debe estar en .gitignore)

### 5. Hacer commit

```bash
git commit -m "Initial commit: Acurast integration project"
```

### 6. Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `acurast-integration` (o el que prefieras)
3. Descripción: "Integración con Acurast para ejecución descentralizada verificable"
4. Visibilidad: Público o Privado (tu elección)
5. **NO** inicialices con README (ya tenemos uno)
6. Haz clic en "Create repository"

### 7. Conectar con GitHub

Copia los comandos que GitHub te muestra, algo como:

```bash
git remote add origin https://github.com/TU_USUARIO/acurast-integration.git
git branch -M main
git push -u origin main
```

### 8. Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Verifica que todos los archivos estén ahí
3. **Verifica que `.env` NO esté visible**
4. Verifica que `README.md` se vea correctamente

---

## 🔒 Seguridad Post-Upload

### Si accidentalmente subes tu API Key

1. **Regenera tu API Key inmediatamente** en Dwellir
2. Actualiza tu `.env` local con la nueva key
3. Si el repo es público, considera hacerlo privado temporalmente

### Para limpiar historial (si es necesario)

Si accidentalmente commiteaste tu API Key:

```bash
# Eliminar archivo del historial
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Forzar push
git push origin --force --all
```

**Nota:** Esto reescribe el historial. Úsalo solo si es necesario.

---

## 📝 Descripción Sugerida para GitHub

### Título
```
Acurast Integration - Prueba de Existencia Descentralizada
```

### Descripción
```
Proyecto de validación técnica que demuestra integración real con Acurast 
(red descentralizada de computación) para ejecutar código verificable con 
attestation.

✅ Deployments ejecutados en Acurast Testnet
✅ Consultas programáticas funcionales con Node.js
✅ Documentación completa de integración
✅ Limitaciones identificadas y documentadas

Estado: Proyecto cerrado exitosamente - Integración demostrada
```

### Topics (etiquetas)
```
acurast
depin
web3
blockchain
substrate
polkadot
decentralized-computing
proof-of-existence
nodejs
integration
```

---

## 📄 Archivos Importantes

### Deben estar en el repo:
- ✅ `README.md` - Documentación principal
- ✅ `PROYECTO-CERRADO.md` - Documento de cierre
- ✅ `SETUP.md` - Guía de instalación
- ✅ `package.json` - Dependencias
- ✅ `.env.example` - Ejemplo de configuración
- ✅ `.gitignore` - Archivos a ignorar
- ✅ `docs/` - Toda la documentación
- ✅ Scripts `.js` - Código funcional

### NO deben estar en el repo:
- ❌ `.env` - Contiene API Key (ignorado)
- ❌ `node_modules/` - Dependencias (ignorado)
- ❌ `*.log` - Logs (ignorado)

---

## 🎯 Checklist Final

Antes de hacer push, verifica:

- [ ] `.env` está en `.gitignore`
- [ ] No hay API Keys en el código
- [ ] No hay wallet addresses sensibles
- [ ] `README.md` está actualizado
- [ ] `SETUP.md` tiene instrucciones claras
- [ ] `PROYECTO-CERRADO.md` explica el cierre
- [ ] Todos los scripts tienen placeholders
- [ ] `.env.example` tiene valores de ejemplo

---

## 🚀 Comandos Rápidos

```bash
# Verificar estado
git status

# Ver qué archivos se ignorarán
git status --ignored

# Ver diferencias antes de commit
git diff

# Ver log de commits
git log --oneline

# Ver archivos en el último commit
git ls-tree -r main --name-only
```

---

## 📞 Soporte

Si tienes problemas subiendo a Git:

1. Verifica que Git esté instalado: `git --version`
2. Verifica que estés autenticado en GitHub
3. Consulta la documentación de GitHub: https://docs.github.com/

---

**Última actualización:** 16 enero 2026
