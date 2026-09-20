// ============================================================
//  AQUÍ EDITAS TODO EL CONTENIDO DEL SITIO
//  Menú, portada, páginas de servicio y "Nosotros" se generan
//  desde este archivo. Todo lo que está entre [corchetes] es un
//  marcador para que lo reemplaces con tu información real.
// ============================================================

export const site = {
  nombre: "Global Group Logistic",
  url: "https://ggl.com.co", // tu dominio real, con https://
  descripcion:
    "Soluciones integrales en logística, comercio exterior, transporte internacional y gestión de carga en Colombia.",
  lema: "Conectamos lo que importa",
  whatsapp: "https://wa.me/573105842680", // tu número, con 57 al inicio
  correo: "mailto:Customer@ggl.com.co",
};

/* ------------------------------------------------------------
   SERVICIOS  (cada uno es una página: tudominio.com/<slug>)
   Esta parte define cual es la estructura que debe cumplir la pagina
------------------------------------------------------------ */

export type Servicio = {
  slug: string;
  nombre: string; // texto del menú
  corta: string; // frase para la portada y para Google
  titular: string;
  entrada: string;
  incluye: { titulo: string; texto: string }[];
  pasos: { titulo: string; texto: string }[];
  preguntas: { pregunta: string; respuesta: string }[];
};

const pasosBase = [
  {
    titulo: "Nos cuentas tu operación",
    texto: "Analizamos qué necesitas mover, desde dónde y hacia dónde.",
  },
  {
    titulo: "Diseñamos la solución",
    texto: "Te presentamos la mejor alternativa, con tiempos y costos claros.",
  },
  {
    titulo: "Ejecutamos con seguimiento",
    texto: "Coordinamos cada etapa y te mantenemos informado.",
  },
  {
    titulo: "Entrega y cierre",
    texto: "Confirmamos la entrega y cerramos la documentación de la operación.",
  },
];

const R = "[Tu respuesta, clara y corta.]";

/* ------------------------------------------------------------
   SERVICIOS aca definimos que trae cada servicio en una sola parte del codigo
   como tal todo el frontend en este backend
------------------------------------------------------------ */
export const servicios: Servicio[] = [
  {
    slug: "comercio-exterior",
    nombre: "Comercio Exterior",
    corta: "Coordinación aduanera, importaciones, exportaciones y asesoría.",
    titular: "Soluciones de comercio exterior",
    entrada:
      "Acompañamos tus operaciones de importación y exportación para que cumplan con la normativa y lleguen a su destino sin contratiempos.",
    incluye: [
      {
        titulo: "Coordinación aduanera",
        texto:
          "Gestionamos los trámites y documentos ante la aduana para que tu operación cumpla con la normativa.",
      },
      {
        titulo: "Importaciones",
        texto:
          "Te acompañamos en el proceso de importación, desde el origen hasta la entrega en destino.",
      },
      {
        titulo: "Exportaciones",
        texto:
          "Coordinamos la salida de tu mercancía y su documentación hacia el mercado de destino.",
      },
      {
        titulo: "Asesoría especializada",
        texto:
          "Te orientamos sobre la normativa y los requisitos que aplican a tu operación.",
      },
    ],
    pasos: pasosBase,
    preguntas: [
      { pregunta: "¿Qué documentos necesito para importar o exportar?", respuesta: R },
      { pregunta: "¿Cuánto tarda el proceso?", respuesta: R },
      { pregunta: "¿Pueden asesorarme si es mi primera operación?", respuesta: R },
    ],
  },
  {
    slug: "transporte-internacional",
    nombre: "Transporte Internacional",
    corta: "Marítimo, aéreo, multimodal y courier.",
    titular: "Soluciones de transporte internacional",
    entrada:
      "Movemos tu carga entre países por el medio que mejor se ajuste a tu volumen, tu urgencia y tu presupuesto.",
    incluye: [
      {
        titulo: "Marítimo",
        texto: "Transporte de carga entre puertos para volúmenes grandes.",
      },
      {
        titulo: "Aéreo",
        texto: "Para carga que necesita rapidez o un cuidado especial.",
      },
      {
        titulo: "Multimodal",
        texto:
          "Combinamos varios medios de transporte bajo una sola coordinación.",
      },
      {
        titulo: "Courier",
        texto: "Envíos de documentos y paquetes pequeños entre países.",
      },
    ],
    pasos: pasosBase,
    preguntas: [
      { pregunta: "¿Cómo elijo entre transporte marítimo y aéreo?", respuesta: R },
      { pregunta: "¿Pueden coordinar todo el recorrido, de puerta a puerta?", respuesta: R },
      { pregunta: "¿Cómo hago seguimiento a mi carga?", respuesta: R },
    ],
  },
  {
    slug: "transporte-nacional",
    nombre: "Transporte Nacional",
    corta: "Transporte terrestre, tránsitos aduaneros y distribución.",
    titular: "Soluciones de transporte nacional",
    entrada:
      "Llevamos tu mercancía por todo el país, desde puertos y aeropuertos hasta el punto de entrega final.",
    incluye: [
      {
        titulo: "Transporte terrestre",
        texto: "Movilización de carga por carretera dentro del país.",
      },
      {
        titulo: "OTM, DTA, DTAI, ITR y traslados",
        texto:
          "[Describe con tus palabras cómo manejan estos tránsitos y traslados.]",
      },
      {
        titulo: "Distribución",
        texto:
          "Entrega de mercancía a tus clientes o puntos de venta.",
      },
    ],
    pasos: pasosBase,
    preguntas: [
      { pregunta: "¿A qué ciudades y zonas llegan?", respuesta: R },
      { pregunta: "¿Qué es un tránsito aduanero y cuándo lo necesito?", respuesta: R },
      { pregunta: "¿Cómo se coordinan las entregas?", respuesta: R },
    ],
  },
  {
    slug: "valor-agregado",
    nombre: "Valor Agregado",
    corta: "Almacenamiento, seguros de carga, carga de proyectos y mercancías especiales.",
    titular: "Soluciones de valor agregado",
    entrada:
      "Servicios complementarios que protegen tu carga y resuelven las necesidades que salen del transporte estándar.",
    incluye: [
      {
        titulo: "Almacenamiento",
        texto: "Bodegaje de tu mercancía durante el tiempo que la necesites.",
      },
      {
        titulo: "Seguros de carga",
        texto: "Cobertura ante daño o pérdida de tu mercancía en el transporte.",
      },
      {
        titulo: "Carga de proyectos",
        texto:
          "Logística para cargas grandes, pesadas o de gran volumen que requieren planeación especial.",
      },
      {
        titulo: "Mercancías especiales",
        texto:
          "Manejo de carga que exige condiciones, permisos o cuidados particulares.",
      },
    ],
    pasos: pasosBase,
    preguntas: [
      { pregunta: "¿Cómo funciona el seguro de carga?", respuesta: R },
      { pregunta: "¿Qué tipo de mercancía se considera especial?", respuesta: R },
      { pregunta: "¿Cómo se planea una carga de proyecto?", respuesta: R },
    ],
  },
  {
    slug: "consultoria-logistica",
    nombre: "Consultoría Logística",
    corta: "Diagnóstico y mejora de tu cadena logística.",
    titular: "Consultoría logística",
    entrada:
      "Analizamos tu operación y te proponemos cómo hacerla más eficiente, más segura y más económica.",
    incluye: [
      {
        titulo: "[Diagnóstico de tu operación]",
        texto: "Explica qué revisan y cómo lo hacen.",
      },
      {
        titulo: "[Diseño de soluciones]",
        texto: "Explica qué propuestas entregan al cliente.",
      },
      {
        titulo: "[Optimización de costos y tiempos]",
        texto: "Explica cómo acompañan la mejora.",
      },
    ],
    pasos: [
      {
        titulo: "Diagnóstico",
        texto: "Conocemos tu operación actual y detectamos oportunidades.",
      },
      {
        titulo: "Propuesta",
        texto: "Te entregamos un plan de mejora con prioridades claras.",
      },
      {
        titulo: "Acompañamiento",
        texto: "Te apoyamos en la implementación y en la medición de resultados.",
      },
    ],
    preguntas: [
      { pregunta: "¿Para qué tipo de empresas es la consultoría?", respuesta: R },
      { pregunta: "¿Cuánto dura una consultoría?", respuesta: R },
      { pregunta: "¿Qué entregables recibo?", respuesta: R },
    ],
  },
];

/* ------------------------------------------------------------
   PORTADA: promesa de valor, razones, cifras, cobertura, clientes
------------------------------------------------------------ */

export const porQue = {
  promesa: "En GGL acompañamos cada operación de principio a fin, ofreciendo soluciones personalizadas, control permanente y una visión estratégica que convierte la logística en una ventaja para el crecimiento de nuestros clientes.",
  razones: [
    {
      titulo: "Excelencia Operativa",
      texto: "Garantizar operaciones seguras, eficientes y controladas bajo estándares nacionales e internacionales.",
    },
    {
      titulo: "Generación de Valor",
      texto: "Crear ventajas competitivas que permitan a nuestros clientes reducir riesgos, optimizar costos y fortalecer su cadena de suministro.",
    },
    {
      titulo: "Crecimiento Sostenible",
      texto: "Expandir nuestra presencia nacional e internacional mediante alianzas estratégicas, nuevos servicios y relaciones comerciales de largo plazo.",
    },
    {
      titulo: "Innovación Continua",
      texto: "Incorporar tecnología, automatización e inteligencia logística para optimizar procesos y mejorar la experiencia del cliente.",
    },
  ],
  // Usa solo cifras reales. Si aún no las tienes, borra este bloque.
  cifras: [
    { valor: "+03", etiqueta: "Años de experiencia" },
    { valor: "+30", etiqueta: "Clientes atendidos" },
    { valor: "+350", etiqueta: "Operaciones realizadas" },
    { valor: "00%", etiqueta: "[indicador de servicio]" },
  ],
};

export const cobertura = {
  intro:
    "[Una frase que explique dónde operan y cómo llegan a donde está el cliente.]",
  zonas: [
    { titulo: "Nacional", texto: "[Ciudades, puertos y aeropuertos donde operan.]" },
    { titulo: "Internacional", texto: "[Países o regiones que cubren.]" },
    { titulo: "Oficina principal", texto: "[Dirección, ciudad y horario de atención.]" },
  ],
};

export type Cliente = { nombre: string; logo?: string };

// Para usar un logo: guarda la imagen en /public/logos y escribe
// logo: "/logos/nombre.png". Necesitas permiso de cada cliente.
export const clientes: Cliente[] = [
  { nombre: "Logo cliente 1" },
  { nombre: "Logo cliente 2" },
  { nombre: "Logo cliente 3" },
  { nombre: "Logo aliado 1" },
  { nombre: "Logo aliado 2" },
];

/* ------------------------------------------------------------
   NOSOTROS
------------------------------------------------------------ */

export type Miembro = { nombre: string; cargo: string; foto?: string };

export const nosotros = {
  quienes: [
    "[Cuenta quién es GGL: cuándo nació, qué hace y para quién trabaja.]",
    "[Un segundo párrafo con lo que los distingue y cómo trabajan.]",
  ],
  proposito: "[Para qué existe GGL, más allá de ganar dinero.]",
  mision: "[Qué hace GGL, para quién y cómo, en una o dos frases.]",
  vision: "[Dónde quiere estar GGL en el futuro.]",
  adn: "[Explica en un párrafo qué significa «Conectamos lo que importa» para la empresa y cómo se vive en el día a día.]",
  valores: [
    { titulo: "[Valor 1]", texto: "Qué significa en la práctica." },
    { titulo: "[Valor 2]", texto: "Qué significa en la práctica." },
    { titulo: "[Valor 3]", texto: "Qué significa en la práctica." },
    { titulo: "[Valor 4]", texto: "Qué significa en la práctica." },
  ],
  objetivo: "[Objetivo corporativo en una o dos frases. Si no lo necesitas, borra esta línea y su sección en app/nosotros/page.tsx.]",
  equipo: [
    { nombre: "[Nombre y apellido]", cargo: "[Cargo]" },
    { nombre: "[Nombre y apellido]", cargo: "[Cargo]" },
    { nombre: "[Nombre y apellido]", cargo: "[Cargo]" },
    { nombre: "[Nombre y apellido]", cargo: "[Cargo]" },
  ] as Miembro[],
};
