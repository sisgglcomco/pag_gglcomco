# Sitio web GGL (Next.js)

Portada corporativa, una página por línea de servicio y una página "Nosotros".
Hecho con Next.js (App Router) y TypeScript.

## Estructura del sitio

| Página | Ruta | Contenido |
|---|---|---|
| Inicio | `/` | Hero, clientes y aliados, servicios, por qué elegir GGL, cobertura, resumen de quiénes somos, contacto |
| Comercio Exterior | `/comercio-exterior` | Coordinación aduanera, importaciones, exportaciones, asesoría |
| Transporte Internacional | `/transporte-internacional` | Marítimo, aéreo, multimodal, courier |
| Transporte Nacional | `/transporte-nacional` | Terrestre, OTM/DTA/DTAI/ITR y traslados, distribución |
| Valor Agregado | `/valor-agregado` | Almacenamiento, seguros, carga de proyectos, mercancías especiales |
| Consultoría Logística | `/consultoria-logistica` | Diagnóstico y mejora de la cadena logística |
| Nosotros | `/nosotros` | Quiénes somos, propósito, misión, visión, ADN, valores, objetivo, equipo |

## Archivos

```
app/
├── layout.tsx            Menú, pie y tipografías (compartido)
├── page.tsx              Portada
├── nosotros/page.tsx     Página Nosotros
├── [slug]/page.tsx       Plantilla única de las 5 páginas de servicio
├── not-found.tsx         Página 404
└── globals.css           Colores y estilos (edita el bloque :root)
components/
├── Header.tsx            Menú con submenú de Servicios y versión móvil
├── Footer.tsx
├── ClientesStrip.tsx     Franja de logos de clientes y aliados
└── ContactBand.tsx       Banda de contacto (WhatsApp y correo)
lib/
└── site.ts               TODO el contenido editable
```

## Cómo trabajar en local

Necesitas Node.js 20.9 o superior.

```bash
npm install
npm run dev      # abre http://localhost:3000
```

## Qué editar

Casi todo se cambia en `lib/site.ts`. Lo que está entre [corchetes] es un
marcador para reemplazar con información real.

1. Datos de contacto, dominio y lema (`site`).
2. Servicios: textos, qué incluye, pasos y preguntas frecuentes (`servicios`).
3. Promesa de valor, razones y cifras (`porQue`). Usa solo cifras reales; si no
   las tienes aún, borra el bloque `cifras`.
4. Cobertura (`cobertura`), clientes (`clientes`) y contenido de Nosotros
   (`nosotros`).

Para poner logos de clientes, guarda las imágenes en `public/logos/` y escribe
`logo: "/logos/nombre.png"` en el cliente. Para fotos del equipo, `public/equipo/`
y `foto: "/equipo/nombre.jpg"`.

Si no usas una sección (por ejemplo "Nuestro objetivo"), borra su bloque en el
archivo de la página correspondiente.

## Publicar en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En vercel.com: Add New, Project, elige el repositorio y pulsa Deploy.
   Vercel detecta Next.js solo.
3. En Project, Settings, Domains agrega tu dominio y crea en la zona DNS de
   Colombia Hosting los registros que Vercel te indique (normalmente un A para
   `@` y un CNAME para `www`). Si tienes correos con ese dominio, no toques los
   registros MX.
