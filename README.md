# PRACTICA2-explorador-peliculas

En esta práctica se crea una aplicación donde se pueden observar las diferentes películas que obtenemos de una API llamada The Movie Database (TMDB), la cual conectamos a nuestra aplicación a través de una **API Key** que se obtiene a la hora de crearse una cuenta en https://www.themoviedb.org/.
Para poder hacer uso de esta página, deben de crearse su propia **API Key** a través de https://www.themoviedb.org/ entrando en tu perfil en la parte de API y **generar clave**. Una vez conseguida esa clave, **crearás** un `.env` en la carpeta de tu proyecto, es decir, fuera de la carpeta `src` o `public` añadiendo lo siguiente: `VITE_TMDB_API_KEY='tu clave aqui'`.

Hay diferentes archivos, como `App.jsx`, `Home.jsx`, `Favorites.jsx`, `main.jsx`, `MovieContext.jsx`, `MovieCard.jsx`, `NavBar.jsx` e `index.html`. 
    
- `App.jsx`: Devuelve toda la aplicación con su estructura y el menu de navegación (`NavBar`).
- `Home.jsx`: Carga las películas populares (haciendo uso de `MovieCard` y `MovieContext`), se pueden buscar películas y tiene el menu de navecagión (`NavBar`).
- `Favorites.jsx`: Muestra todas las películas (haciendo uso de `MovieCard` y `MovieContext`) que fueron marcadas como favoritas.
- `main.jsx`: Es la entrada a la aplicación, renderizando el `index.html`.
- `MovieContext.jsx`: Maneja las películas favoritas.
- `MovieCard.jsx`: Muestra el poster, año en que se creó y el nombre de la película, se crea una de estas tarjetas por cada película.
- `NavBar.jsx`: Crea las rutas a las diferentes partes de la página, como la de `Favorites` y `Home`.
- `index.html`: Es el archivo donde se React pone toda la aplicación.

# Ejecución
Una vez descargada la aplicación, se debe de ejecutar los siguientes comandos:
- `npm install`: la cual descargará todas las dependencias de la aplicación.
- `npm run dev`: para poder levantar la aplicación y porder usarla. Esto te mostrara un link como *http://localhost:xxxx/* el cual será el puerto donde se estará ejecutando dicha aplicación.
