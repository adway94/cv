# 🚀 Guía de Despliegue - CV Digital

## 🐳 Docker (Recomendado)

### Levantar el proyecto
```bash
# 1. Build la imagen
docker build -t cv-digital .

# 2. Run el contenedor
docker run -d -p 8000:8000 --name cv-digital cv-digital
```

**Listo!** Accede a: http://localhost:8000

### Comandos útiles
```bash
# Ver logs
docker logs -f cv-digital

# Detener
docker stop cv-digital

# Iniciar de nuevo
docker start cv-digital

# Reiniciar
docker restart cv-digital

# Eliminar
docker stop cv-digital && docker rm cv-digital
```

### Rebuild después de cambios
```bash
docker stop cv-digital && docker rm cv-digital
docker build -t cv-digital .
docker run -d -p 8000:8000 --name cv-digital cv-digital
```

---

## 🚂 Railway

```bash
# Instalar CLI
npm i -g @railway/cli

# Login y deploy
railway login
railway init
railway up
```

Railway detecta el Dockerfile automáticamente y despliega tu CV en minutos.

**Variables de entorno:** Configura en el dashboard de Railway si necesitas (SMTP, etc.)

---

## 📋 URLs Disponibles

- **Frontend (CV):** http://localhost:8000
- **API Docs:** http://localhost:8000/docs
- **Health Check:** http://localhost:8000/api/health

---

## ✅ Checklist Pre-Deploy

- [ ] Editar `js/data.js` con tu información
- [ ] Agregar foto en `assets/images/profile.jpg`
- [ ] Agregar CV PDF en `assets/cv.pdf`
- [ ] Configurar variables de entorno (opcional)

---

¡Listo para producción! 🎉
