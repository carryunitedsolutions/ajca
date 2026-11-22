type PageHeroProps = { title: string }

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-36 items-center overflow-hidden bg-[url('/assets/warehouse-hero.webp')] bg-cover bg-center text-white md:min-h-44">
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="site-container"><h1 className="text-5xl font-bold md:text-6xl">{title}</h1></div>
    </section>
  )
}
