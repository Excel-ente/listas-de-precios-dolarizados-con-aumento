
# Listas de Precios Dolarizadas con Aumento

Herramienta gratuita para actualizar listas de precios en Excel aplicando aumentos porcentuales o fijos, con redondeo automático y exportación a PDF. Ideal para emprendedores y pequeños negocios.

## Archivos Principales
- `index.html`: Página principal con descarga, tutorial y sección de apoyo.
- `styles.css`: Estilos modernos y responsivos.
- `script.js`: Comportamiento de la landing (menú, descarga, animaciones).
- `lista-de-precios-con-aumento-usd.zip`: Archivo Excel listo para usar y descargar.

## Descarga directa de la herramienta (ZIP)
Podés bajar el archivo sin clonar todo el repo:

Enlace directo (click derecho → Guardar como):
https://github.com/Excel-ente/listas-de-precios-dolarizados-con-aumento/raw/main/lista-de-precios-con-aumento-usd.zip

### PowerShell (Windows)
```powershell
Invoke-WebRequest -Uri "https://github.com/Excel-ente/listas-de-precios-dolarizados-con-aumento/raw/main/lista-de-precios-con-aumento-usd.zip" -OutFile "lista-de-precios-con-aumento-usd.zip"
Expand-Archive -Path .\lista-de-precios-con-aumento-usd.zip -DestinationPath .\lista-de-precios-con-aumento-usd -Force
```

### cURL (Linux / macOS / Git Bash)
```bash
curl -L -o lista-de-precios-con-aumento-usd.zip https://github.com/Excel-ente/listas-de-precios-dolarizados-con-aumento/raw/main/lista-de-precios-con-aumento-usd.zip
unzip -o lista-de-precios-con-aumento-usd.zip -d lista-de-precios-con-aumento-usd
```

### Clonando el repositorio
```bash
git clone https://github.com/Excel-ente/listas-de-precios-dolarizados-con-aumento.git
cd listas-de-precios-dolarizados-con-aumento
```
El ZIP está en la raíz del proyecto.

## Pasos rápidos tras descargar
1. Extraé el ZIP en una carpeta local (evitá rutas MUY largas en Windows).
2. Abrí el archivo Excel y habilitá macros si lo solicita.
3. Cargá tu lista de productos y aplicá los aumentos que necesites.
4. Exportá a PDF o imprimí tu lista actualizada.

## ¿Cómo apoyar?
Si esta herramienta te ayuda:
- ⭐ Da estrella al repo: https://github.com/Excel-ente/listas-de-precios-dolarizados-con-aumento
- Suscribite: https://www.youtube.com/@excel-ente
- Doná un café: https://www.paypal.com/donate?hosted_button_id=RBJ4ZMYJYQTB8

Cada acción ayuda a mantener el proyecto gratuito y en constante mejora.

## Sugerencias
Si querés convertir la documentación en un generador estático (ej. Docusaurus, Astro), podés separar cada sección en markdowns y automatizar el build.

## Licencia
Contenido abierto para uso educativo y comercial. Mencioná la fuente si redistribuís.
