# Invitacion interactiva (mini visor)

Pagina web de una sola vista que presenta una invitacion en forma de carta. Al abrir el sobre aparecen dos botones, y la respuesta final muestra una pantalla de confirmacion con musica de fondo.

Es un proyecto personal, hecho con HTML, CSS y JavaScript sin frameworks ni dependencias externas.

## Caracteristicas

- **Sobre animado:** al hacer clic se abre la solapa y aparece la carta con una animacion suave.
- **Sonido de apertura:** un efecto corto se reproduce al abrir el sobre.
- **Botones de respuesta:** se muestran fuera de la carta una vez abierta.
- **Boton con comportamiento interactivo:** el boton de respuesta negativa se desplaza a una posicion aleatoria cuando el cursor se acerca y muestra mensajes distintos en cada cambio.
- **Pantalla final:** al aceptar, la carta se cierra, aparece el mensaje de confirmacion y se inicia la cancion principal en bucle.
- **Fondo de particulas:** animacion ligera en un lienzo (`canvas`) que se adapta al tamano de la ventana.

## Estructura del proyecto

```
frontend/
├── recursos/
│   ├── css/
│   │   └── style.css        # Estilos: fondo, sobre, carta, botones y pantalla final
│   ├── js/
│   │   └── script.js        # Logica: apertura del sobre, botones, audio y particulas
│   ├── img/
│   │   └── heart.png        # Icono de la pestaña del navegador
│   └── sonido/
│       ├── amor.mp3         # Efecto al abrir el sobre
│       └── A-Thousand-Years.mp3  # Cancion de la pantalla final
└── web/
    └── index.html           # Pagina principal
```

## Requisitos

- Un navegador moderno (Chrome, Firefox, Edge o Safari en versiones recientes).
- No requiere instalacion, compilacion ni conexion a internet.

## Como ejecutarlo

**Opcion 1: abrir el archivo directamente**

Abrir `frontend/web/index.html` con el navegador.

**Opcion 2: servir la carpeta con un servidor local**

Desde la carpeta raiz del proyecto:

```bash
python -m http.server 8000
```

Despues abrir en el navegador `http://localhost:8000/frontend/web/index.html`.

## Notas de funcionamiento

- Los navegadores pueden bloquear la reproduccion automatica de audio hasta que el usuario haga clic en la pagina. Por eso el sonido se activa solo despues de una accion del usuario; si el navegador lo bloquea, la pagina sigue funcionando sin audio.
- El boton de respuesta negativa reacciona al paso del cursor (`mouseenter`). En dispositivos tactiles no se activa ese comportamiento.

## Limitaciones conocidas

- El archivo de estilos no tiene reglas responsivas (`@media`), por lo que el diseño no se adapta a pantallas pequeñas.
- Los recursos de audio no tienen una licencia documentada en este repositorio. Antes de publicar el proyecto en un sitio abierto, revisar sus derechos de uso.

## Estado

Version inicial.
