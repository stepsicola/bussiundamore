const BASE = import.meta.env.BASE_URL;

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story-img-solo">
        <img
          src={`${BASE}images/interieur.webp`}
          alt="Das Innere von Bussi &amp; Amore — gedeckte Marmortische, schwarze Holzstühle"
          loading="lazy"
        />
      </div>
    </section>
  );
}
