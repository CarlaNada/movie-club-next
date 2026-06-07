import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center font-sans bg-zinc-900 text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/banner.avif')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-zinc-950/90"></div>
      
      <main className="relative z-10 flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center md:items-center">
          <h1 className="max-w-full text-6xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Tu guía de streaming para películas, series de TV y deportes
          </h1>
          <h3 className="max-w-full text-lg leading-tight text-zinc-200 dark:text-zinc-400">
            Descubre dónde ver nuevos contenidos, lo más popular y los próximos estrenos con Movie Club.
          </h3>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-fit items-center justify-center gap-2 rounded-lg bg-[#D4D42A] px-5 text-background transition-colors hover:bg-[#80801C] md:w-[158px]"
            href="#"
          >
            Descubre mas
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-lg border border-solid border-black/[.08] px-5 transition-colors hover:bg-[#8F8F6E] dark:border-white/[.145] md:w-[158px]"
            href="#"
          >
            Caracteristicas
          </Link>
        </div>
      </main>
    </section>
  );
}
