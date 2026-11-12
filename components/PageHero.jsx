export default function PageHero({ title, subtitle = null, image = null }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-gray-200">{subtitle}</p>}
      </div>
    </section>
  );
}
