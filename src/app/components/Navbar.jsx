import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="sticky top-0 z-50 backdrop-blur-md flex items-center justify-between gap-2 font-sans p-3">
      <h2 className="flex text-3xl font-bold pl-3">
        <Link href={"/"}>MovieClub</Link>
      </h2>
      <div className="flex items-center justify-between gap-2 font-sans p-3">
        <Link className="flex items-center justify-center gap-2 px-5 text-white text-sm transition-colors hover:text-md dark:hover:text-zinc-400 md:w-[158px]" href={"/"}>Inicio</Link>
        <Link className="flex items-center justify-center gap-2 px-5 text-white text-sm transition-colors hover:text-md dark:hover:text-zinc-400 md:w-[158px]" href={"/movies"}>Peliculas</Link>
        <Link className="flex items-center justify-center gap-2 px-5 text-white text-sm transition-colors hover:text-md dark:hover:text-zinc-400 md:w-[158px]" href={"/about"}>About</Link>
        <Link className="flex items-center justify-center gap-2 px-5 text-white text-sm transition-colors hover:text-md dark:hover:text-zinc-400 md:w-[158px]" href={"/favorites"}>Favoritos</Link>
      </div>
      <Link href={"#"} className="flex h-10 w-full items-center justify-center gap-2 rounded-md px-5 text-white text-sm bg-zinc-700 transition-colors hover:bg-[#383838] dark:hover:bg-zinc-800 md:w-[158px]">Iniciar sesion</Link>
    </nav>
  )
  
}
