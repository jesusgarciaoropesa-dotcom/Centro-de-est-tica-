# Estética Cristina Blanco — Landing page

Página web de una sola pantalla (single-file) para **Estética Cristina Blanco**,
centro de estética en C/ Hospital, Oropesa de Toledo.

- **Archivo principal:** `index.html` (~260 KB, autocontenido: HTML + CSS + JavaScript e imágenes en base64 en un solo fichero).
- **Tono:** cálido y cercano.
- **Paleta:** crema `#F7F3EE`, rosa empolvado `#E8D5C8`, tierra tostada `#7A5C4A`, marrón oscuro `#4A3328`, blanco cálido `#FDFAF7`.
- **Tipografías:** Playfair Display (titulares) + Lato (cuerpo), cargadas desde Google Fonts.
- **Secciones:** Hero → Barra de estadísticas → Tecnología Tactum Pro → Servicios → Sobre mí → Galería → Contacto → Footer.

## Funcionalidad

- Modal de reserva de cita (se abre desde la nav, el hero y cada botón "Reservar" de las tarjetas de servicio, preseleccionando el tratamiento).
- Menú hamburguesa en móvil.
- Formulario de contacto y de reserva (maqueta visual: muestran confirmación, **sin backend todavía**).
- Diseño responsive (tablet, móvil y móvil pequeño).
- Animaciones al hacer scroll.

Las 7 imágenes van embebidas en base64 (hero, sobre mí y 5 de galería). Son
composiciones ilustradas de **relleno temporal**, no fotos reales. Sustituir por
fotos reales del centro cuando estén disponibles.

## Cómo publicarla (el JavaScript necesita un servidor real)

Abrir el archivo desde la app "Archivos" del iPhone usa un visor estático **sin JavaScript**,
por eso el modal, el menú y los desplegables no responden. No es un fallo del código:
hay que servir la página desde una URL real. Opciones:

1. **Netlify Drop (gratis, sin registro, en segundos):**
   entra en <https://app.netlify.com/drop> y arrastra el archivo `index.html`.
   Obtendrás un enlace público que ejecuta el JavaScript correctamente en Safari.

2. **GitHub Pages (permanente, desde este repositorio):**
   en el repositorio → *Settings* → *Pages* → *Branch*: elige la rama y `/root`.
   La web quedará en `https://<usuario>.github.io/<repo>/`.

## Pendientes

1. Publicar el hosting definitivo (Netlify o GitHub Pages).
2. Sustituir las ilustraciones por fotos reales del centro.
3. Completar datos reales: teléfono, horario y precios de cada tratamiento.
4. Decidir si los formularios necesitan backend real (envío de email / base de datos) o se quedan como maqueta.
5. Revisar el texto de "Sobre mí" con Cristina para ajustar tono y datos biográficos.
6. Verificar el usuario de Instagram (`@esteticacristinablanco`, aproximado).
