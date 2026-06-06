app/
├── layout.js                 # Layout Base (Main Navbar, Footer)
├── page.js                   # Base: Home / Catálogo (Estrenos, Series, Peliculas)
├── about/
│   └── page.js               # Ruta Base 1: Sobre nosotros
├── favorites/
│   └── page.js               # Ruta Base 2: Tus favoritos
├── movies/                   # Ruta Base 3: Peliculas
│   ├── [id]/                 # Ruta Dinámica: Detalle de la película/serie
│   │   ├── layout.js         # Layout Anidado (opcional, para UI específica del detalle)
│   │   ├── page.js           
│   ├── cast/ 
│   │   └── page.js           # Ruta Anidada: Lista de actores de esa película
├── components/               # Componentes reutilizables (Navbar, MovieCard, Spinner)
├── context/                  # Estado global (FavoritesContext)
└── api/                      # Opcional, si necesitás Route Handlers propios

Token de acceso de lectura a la API
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2I1MDllMTRmZDYzNmMzNmQ2MDQ0MzgxNzBiZjVkYSIsIm5iZiI6MTc4MDcxMDkxMC41NTQsInN1YiI6IjZhMjM3ZGZlOWI0N2JiMjU2NDhkZDNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqbAafoo2g-E21S-S_-pGN5Qo8XQk0-1pBUibbzo5no

Clave de la API
b3b509e14fd636c36d604438170bf5da
