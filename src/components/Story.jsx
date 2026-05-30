export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story-grid">
        <div>
          <h2 className="story-title">Brunch ist eine <em>Liebeserklärung</em> an den Vormittag.</h2>
          <p className="story-text">Bussi entstand 2021 aus dem Wunsch, einen Ort zu haben, an dem man sich Zeit nimmt. Für Sauerteig, der zweimal über Nacht ruht. Für Eier, deren Hennen wir beim Namen kennen. Für Kaffee, der mehr ist als Koffein.</p>
          <p className="story-text">Wir kochen mit Zutaten aus Berlin und Brandenburg, backen alles selbst und freuen uns, wenn du nach dem dritten Flat White noch sitzen bleibst.</p>
          <div className="story-sig">— Lena &amp; Tobi, Inhaber</div>
        </div>
        <div className="story-imgs">
          <div className="story-img">
            <img src="/images/interieur.webp" alt="Das Innere von Bussi &amp; Amore — gedeckte Marmortische, schwarze Holzstühle" loading="lazy" />
          </div>
          <div className="story-img story-img--small">
            <img src="/images/fassade_aussen.webp" alt="Fassade und Außenterrasse von Bussi &amp; Amore in der Brandenburger Straße" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
