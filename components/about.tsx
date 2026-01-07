export function About() {
  return (
    <section className="py-24 md:py-32 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">{"À propos de Timouuk"}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
                {
                  "Timouuk est votre destination privilégiée pour la mode élégante à Bamako. Nous proposons une sélection exclusive de Habaya, accessoires et parfums pour sublimer votre style."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {
                  "Notre mission est de vous offrir des produits de qualité qui allient tradition et modernité, pour que chaque femme puisse exprimer son élégance unique."
                }
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img src="/luxury-fashion-boutique-interior-bamako.jpg" alt="Boutique Timouuk" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
