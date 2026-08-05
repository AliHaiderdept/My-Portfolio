function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-card">
        <div className="contact-row">
          <a className="contact-glyph-link" href="mailto:alihaidermillinium@gmail.com" aria-label="Send email to Ali Haider">
            <span className="contact-glyph" aria-hidden="true">✉</span>
          </a>
          <a className="contact-link" href="mailto:alihaidermillinium@gmail.com">
            alihaidermillinium@gmail.com
          </a>
        </div>

        <div className="contact-row">
          <a className="contact-glyph-link" href="https://instagram.com/alihaiderr.r" target="_blank" rel="noreferrer" aria-label="Open Instagram profile">
            <span className="contact-glyph" aria-hidden="true">◉</span>
          </a>
          <a className="contact-link" href="https://instagram.com/alihaiderr.r" target="_blank" rel="noreferrer">
            instagram.com/alihaiderr.r
          </a>
        </div>

        <div className="contact-row">
          <a className="contact-glyph-link" href="https://www.facebook.com/alihaiderofficial952" target="_blank" rel="noreferrer" aria-label="Open Facebook profile">
            <span className="contact-glyph" aria-hidden="true">f</span>
          </a>
          <a className="contact-link" href="https://www.facebook.com/alihaiderofficial952" target="_blank" rel="noreferrer">
            facebook.com/alihaiderofficial952
          </a>
        </div>

        <div className="contact-row">
          <a className="contact-glyph-link" href="https://github.com/AliHaiderdept" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <span className="contact-glyph" aria-hidden="true">&lt;/&gt;</span>
          </a>
          <a className="contact-link" href="https://github.com/AliHaiderdept" target="_blank" rel="noreferrer">
            github.com/AliHaiderdept
          </a>
        </div>
      </div>

      
    </section>
  );
}

export default Contact;