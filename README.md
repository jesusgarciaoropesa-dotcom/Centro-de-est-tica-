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
- **Reserva conectada a Supabase**: el formulario guarda cliente + reserva reales (ver sección abajo).
- Diseño responsive (tablet, móvil y móvil pequeño).
- Animaciones al hacer scroll.

## Reservas y panel de administración (Supabase)

Proyecto Supabase: **`gimoqpusrdltlkrwsykr`** (compartido, multi-tenant).
Negocio: `Estética Cristina Blanco`, `negocio_id = 54ef27b9-c15c-4b31-82df-fbe5cad71672`.
Todo filtra/inserta por ese `negocio_id`.

- **Servicios**: se cargan en el modal desde la tabla `servicios` (6 creados, precios provisionales editables).
- **Reserva**: el formulario llama a la función `crear_reserva_web` (RPC `SECURITY DEFINER`),
  que valida el servicio, comprueba días bloqueados y huecos ocupados, crea/actualiza el
  cliente y guarda la reserva con estado `pendiente`. No expone escritura directa a la tabla.
- **Panel admin**: `admin.html`. Login con Supabase Auth (mismo usuario admin que la barbería).
  Permite ver reservas (próximas/pendientes/confirmadas/todas), confirmarlas, cancelarlas,
  marcarlas como completadas y gestionar días bloqueados. Protegido por RLS (`is_admin_of`).
- La clave usada en el front es la **`anon` pública** (segura para el navegador).
- Seguridad: se activó RLS en la tabla `negocios` (lectura pública, escritura solo admins).

> Nota: la reserva solo funciona con la web **publicada** (Netlify/GitHub Pages), no
> abriendo el archivo en local, porque necesita hacer peticiones de red a Supabase.

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
3. Completar datos reales: teléfono, horario y precios reales de cada tratamiento (los precios en Supabase son provisionales).
4. Reserva y panel ya conectados a Supabase (ver sección arriba). Pendiente opcional: aviso por email/WhatsApp al recibir una reserva.
5. Revisar el texto de "Sobre mí" con Cristina para ajustar tono y datos biográficos.
6. Verificar el usuario de Instagram (`@esteticacristinablanco`, aproximado).
