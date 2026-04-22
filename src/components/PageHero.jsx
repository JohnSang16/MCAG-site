export function PageHero({ title, subtitle }) {
  return (
    <section className="bg-brand-blue text-surface py-20 px-4 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="font-body text-lg md:text-xl text-surface/80 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </section>
  )
}
