# Weather Frontend - Angular 20

Este proyecto es una aplicación **Angular 20** diseñada como frontend para consultar el clima de ciudades y visualizar el historial de búsquedas. Está pensado para funcionar junto con una API backend (por ejemplo, una API en FastAPI desplegada en AWS Lambda) y se despliega como **sitio estático en un bucket de AWS S3**.

---

## Características

- 🌤️ Consulta del clima actual por ciudad.
- 📜 Visualización del historial de búsquedas.
- ⚡️ Integración con API REST externa.
- 🚀 Despliegue simple en AWS S3 como sitio estático.
- 🔒 Compatible con HTTPS y CDN mediante CloudFront (opcional).

---

## Instalación local

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/G9Mares/clima_app.git
   cd weather-angular
   npm install
   ng serve
   ng build --configuration production
   ```