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