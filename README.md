# PRACTICA2-explorador-peliculas

En esta práctica se crea una aplicación donde se pueden observar las diferentes películas que obtenemos de una API llamada The Movie Database (TMDB), la cual conectamos a nuestra aplicación a través de una **API Key** que se obtiene a la hora de crearse una cuenta en https://www.themoviedb.org/.

Para poder hacer uso de esta página, deben de crearse su propia **API Key** a través de https://www.themoviedb.org/ entrando en tu perfil en la parte de API y **generar clave**. Una vez conseguida esa clave, **crearás** un `.env` en la carpeta de tu proyecto, es decir, fuera de la carpeta `src` o `public` añadiendo lo siguiente: `VITE_TMDB_API_KEY='tu clave aqui'`.

Hay diferentes archivos, como `App.jsx`, `Home.jsx`, `Favorites.jsx`, `main.jsx`, `MovieContext.jsx`, `MovieCard.jsx`, `NavBar.jsx` e `index.html`. 
    
- `App.jsx`: Devuelve toda la aplicación con su estructura y el menu de navegación (`NavBar`). En este archivo usamos el `NavBar`para poder buscar las películas que querramos, por lo que se hará una consulta que devolvera los nombres de las películas que se busquen, así como poder entrar en la página de favoritos mediante la ruta a favoritos. También se pueden obtener nuevamente las películas populares si se apreta el nombre de la página (Movieees).
- `Home.jsx`: Carga las películas populares (haciendo uso de `MovieCard` y `MovieContext`), se pueden buscar películas y tiene el menu de navegación (`NavBar`). En este archivo se conecta la API con la `API_KEY` (que se debe de crear como fue explicado anteriormente), pudiendo cargar la películas populares, asi como hacer la búsqueda de películas en el `NavBar`, el cual mostrará todas las películas, ya sean las populares (debido a que no se busco ninguna película) o la película buscada, mostrando su tarjeta con toda su información.
- `Favorites.jsx`: Muestra todas las películas (haciendo uso de `MovieCard` y `MovieContext`) que fueron marcadas como favoritas. En este archivo, como se explica antes, muestran todas las películas que fueron marcadas como favoritas y están almacenadas en el `localStorage`, obteniendo la tarjeta de cada una de las películas favoritas.
- `main.jsx`: Es la entrada a la aplicación, renderizando el `index.html`. En este archivo, basicamente se maneja la el renderizado de todos los otros archivos, así como sus funcionalidades.
- `MovieContext.jsx`: Maneja las películas favoritas. Básicamente controlamos cuáles películas se marcan como favoritas o se eliminan de favoritos. También se obtiene toda la información de las películas, sea su título, año en que se creó, la sinopsis y su rating.
- `MovieCard.jsx`: Muestra el poster, año en que se creó y el nombre de la película, se crea una de estas tarjetas por cada película. Este archivo es el que usa la información de la película y la convierte en una tarjeta donde se muestra esa información, teniendo en cuenta todas las funcionalidades de los demás archivos, tal como el botón de favoritos.
- `NavBar.jsx`: Crea las rutas a las diferentes partes de la página, como la de `Favorites` y `Home`. Básicamente este archivo controla la búsqueda de las películas, así como la ruta a las películas favoritas y a las populares.
- `index.html`: Es el archivo donde se React pone toda la aplicación. Básicamente es donde se renderizan todas las páginas html que se devuelven en cada archivo con sus diferentes funcionalidades.

# Ejecución
Una vez descargada la aplicación, se debe de ejecutar los siguientes comandos:
- `npm install`: la cual descargará todas las dependencias de la aplicación.
- `npm run dev`: para poder levantar la aplicación y poder usarla. Esto te mostrara un link como *http://localhost:xxxx/* el cual será el puerto donde se estará ejecutando dicha aplicación.

https://github.com/florportada/PRACTICA2-explorador-peliculas
Hecho por Florencia Portada [https://github.com/florportada] y Vittorio Ferone [https://github.com/viitto999]
