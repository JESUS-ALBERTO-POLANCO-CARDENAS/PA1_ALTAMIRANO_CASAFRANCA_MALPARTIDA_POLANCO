# 🏢 UNIVERSIDAD CONTINENTAL
---
## 🔹🔹🔹🔹PRODUCTO ACADEMICO 01🔹🔹🔹🔹
💾 TEMAS: 
- `INTRODUCCIÓN AL DESARROLLO WEB Y HTML`
- `DISEÑO Y ESTILOS CON CSS`
- `INTERACTIVIDAD Y DINAMISMO CON JAVASCRIPT`
- `FRAMEWORKS DE DESARROLLO WEB`

💾 CURSO: 
- `PROGRAMACION WEB – NRC: 73627`

💾 INFORME: 
- `DESARROLLO DE "SABORES DEL MISTI"`

💾 DOCENTE: 
- `CHRISTIAN ALONSO VEGA CERVANTES`

💾  INTEGRANTES_DEL_GRUPO (Participación 100%):
- `ALTAMIRANO FERNANDEZ LUZ EVELIN`
- `CASAFRANCA VALENZUELA MARCIO ANDRE`
- `MALPARTIDA AXCEL MAIKEL LUIS`
- `POLANCO CARDENAS JESUS ALBERTO`
---
---

# 🏔️ 1. INTRODUCCIÓN

El presente informe documenta el desarrollo y la funcionalidad del sitio web "Sabores del Misti", un proyecto diseñado para promocionar un restaurante especializado en la gastronomía de Arequipa. El sitio web se ha creado con el objetivo de presentar el menú del día, compartir recetas tradicionales y ofrecer una experiencia de usuario atractiva a través de una interfaz interactiva.

---

# 🛠️ 2. JUSTIFICACIÓN DE TECNOLOGÍAS UTILIZADAS

En nuestro diseño web, conversando con los miembros del equipo se coordinó sobre todo que framework aplicaremos, tenía que notarse uno que muestre estructuras predefinidas para desarrollar el diseño de manera más eficiente, rápida y organizada.

## 🔧2.1.   `HTML5`

Se utilizó la última versión de HTML para estructurar el contenido de la página. Su semántica permite organizar claramente las secciones del sitio (encabezado, cuerpo principal, pie de página, secciones temáticas) y optimiza la accesibilidad para lectores de pantalla y la indexación por parte de los motores de búsqueda.

## 🔧2.2.   `Tailwind CSS`

Para el estilo y el diseño, se optó por Tailwind CSS. Este framework utilitario permite crear interfaces personalizadas de manera rápida y eficiente directamente en el código HTML, sin tener que escribir CSS tradicional. Las principales ventajas son:
-   **2.2.1. ⚙️Velocidad de desarrollo**:
  
    La creación de interfaces responsive es ágil y no requiere cambiar de archivo constantemente.
-   **2.2.2. ⚙️Consistencia**:
  
    Al usar un conjunto de clases predefinidas, se asegura un diseño coherente en todo el sitio.
-   **2.2.3. ⚙️Diseño adaptable (*Responsive*)**:
   
    Las clases de Tailwind (md:, lg:, etc.) facilitan la adaptación del diseño a diferentes tamaños de pantalla (móviles, tabletas y computadoras de escritorio).
    
## 🔧2.3.   `Google Fonts`

Se importaron las fuentes "Playfair Display" para los encabezados y "Lato" para el texto principal. Esta elección se justifica por la búsqueda de una tipografía que transmita una sensación de elegancia y tradición ("Playfair Display"), mientras que la fuente "Lato" ofrece una excelente legibilidad en el cuerpo del texto.

## 🔧2.4.   `JavaScript Vanilla`

Se utiliza JavaScript puro, sin bibliotecas adicionales como jQuery, para la interactividad del sitio. Esto incluye funcionalidades como la navegación responsiva para el menú móvil y la inserción dinámica de las tarjetas del menú y los modales de recetas. El uso de JavaScript puro mantiene el proyecto ligero y con un rendimiento óptimo.

---

# 📂3.	ESTRUCTURA Y CONTENIDO (index.html)

El archivo index.html es el esqueleto del sitio web, que organiza todo el contenido de manera semántica y accesible. La página está dividida en varias secciones clave que guían al usuario a través de la experiencia:

##  ✏️3.1.  `Área Principal (Hero)`
Se presenta una imagen impactante del volcán Misti, el cual sirve como fondo para el título principal del sitio. Esta sección establece la identidad cultural y el tema del restaurante.

##  ✏️3.2.  `Menú Principal`
En esta sección, el usuario puede explorar el menú diario. Se presentan tres platos emblemáticos de la cocina arequipeña: el Rocoto Relleno, la Ocopa Arequipeña y el Pastel de Papas. Cada plato incluye una imagen, un título, una descripción detallada y su precio.

##  ✏️3.3.  `Recetas`
Esta sección ofrece a los usuarios la oportunidad de explorar recetas tradicionales de la región, como el Caldo Blanco y el Rocoto Relleno. Se incluye una funcionalidad de "desplegar" para mostrar o esconder los ingredientes e instrucciones, lo que mantiene la página limpia y organizada.

---

# 🌷4.  ESTILOS Y DISEÑOS (style.css)

El diseño visual del sitio se gestiona a través de la hoja de estilos style.css y el uso del framework Tailwind CSS. Esta combinación permite un desarrollo rápido y un estilo consistente.

##  🖍️4.1.  `Tipografia y Colores`
El proyecto utiliza la fuente "Inter" de Google Fonts para una apariencia moderna y legible. El esquema de colores, con un fondo suave y cálido (#f7f3e9), refuerza la temática acogedora del restaurante.

##  🖍️4.2.  `Diseño Responsivo`
Las clases de Tailwind CSS facilitan un diseño adaptativo, lo que garantiza que el sitio se vea bien en diferentes tamaños de pantalla, desde dispositivos móviles hasta computadoras de escritorio.

##  🖍️4.3.  `Animaciones`
Se implementa una animación suave para el menú y las recetas. Al interactuar con un plato, la tarjeta se agranda (hover:  scale-105), y al abrir una receta, la sección se despliega con una transición de altura (max-height).

---
# 📽️5. FUNCIONALIDAD E INTERACTIVIDAD (scripts.js)

El archivo scripts.js es el motor de la página, proporcionando la lógica necesaria para las funciones interactivas.

##  📼5.1.  `Modal de Pedido`
Al hacer clic en el botón "Pedir" de cualquier plato, se activa una función que muestra un modal de confirmación. Este modal incluye un mensaje personalizado con el nombre del plato, lo que mejora la retroalimentación al usuario.

##  📼5.2.  `Control de Recetas`
La función toggleRecipe() gestiona la visibilidad de las recetas. Al hacer clic, la función agrega o elimina una clase (open) que controla la altura de la sección, creando un efecto de expansión y contracción. El ícono del botón (+ o -) también se actualiza para reflejar el estado de la receta.

---
# 💡6.	DESAFÍOS DE DESARROLLO

Uno de los principales desafíos en el desarrollo de este sitio es la carga dinámica de contenido. El código HTML base no incluye las tarjetas del menú ni los detalles de las recetas. Estos elementos deben ser generados e insertados en el DOM (Document Object Model) mediante JavaScript, lo cual exige una lógica de programación robusta para asegurar que los datos se muestren correctamente y que la interacción del usuario con las tarjetas y los modales funcione sin errores.

Además, el diseño responsivo del menú móvil presenta un desafío particular. Se debe asegurar que el botón del menú solo sea visible en dispositivos pequeños (md:hidden) y que el menú desplegable funcione correctamente sin afectar la navegación en pantallas grandes. El uso de la propiedad hidden y el addEventListener en JavaScript son cruciales para lograr esta funcionalidad.

---

# ✅7.	CONCLUSIÓN

En conclusión, el proyecto "Sabores del Misti" es un claro ejemplo de cómo la combinación de HTML, CSS (con Tailwind) y JavaScript puede dar vida a un sitio web funcional y atractivo. El enfoque en la usabilidad y la interactividad mejora la experiencia del usuario, permitiéndole navegar por el menú, conocer las recetas y realizar pedidos de manera intuitiva.
