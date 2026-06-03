import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const cats = [
  {
    name: 'Suini',
    age: '12 años',
    role: 'Torbellino con agenda propia',
    arrival: 'La rescatamos de la ruta y terminó convirtiéndose en una de las grandes fundadoras de la manada.',
    story: 'Corre la casa como si tuviera una misión secreta y todavía conserva ese aire de fundadora de la manada.',
    image: '/gatos/suini.jpeg',
    focus: '50% 64%',
    tone: '#2f7d6d'
  },
  {
    name: 'Simon',
    age: '11 años',
    role: 'El consentido gruñón',
    arrival: 'Llegó junto a Fermín, hermano de camada de Timón, porque separados no comían; al final, la casa también era para ellos.',
    story: 'Pide atención a su manera: con carácter, presencia y ese encanto de quien sabe que siempre gana.',
    image: '/gatos/simon.jpeg',
    focus: '48% 42%',
    tone: '#8861b8'
  },
  {
    name: 'Timón',
    age: '11 años',
    role: 'Independiente de corazón blando',
    arrival: 'Llegó como un regalo lleno de amor después de despedir a un gatito muy querido.',
    story: 'Finge no enterarse de nada, se hace el frío, pero en el fondo guarda una dulzura muy suya.',
    image: '/gatos/timon.jpeg',
    focus: '58% 24%',
    tone: '#cc6b4f'
  },
  {
    name: 'Fermín',
    age: '11 años',
    role: 'Siamés intenso y magnético',
    arrival: 'Él y Simon originalmente no iban a quedarse, pero separarlos de Timón era imposible: los hermanos necesitaban estar juntos.',
    story: 'Tiene vocación de protagonista: demandante, pegote y absolutamente imposible de ignorar.',
    image: '/gatos/fermin.jpeg',
    focus: '68% 30%',
    tone: '#b99a35'
  },
  {
    name: 'Sombra',
    age: '8 años',
    role: 'Ratita escurridiza',
    arrival: 'Fue rescatada de una casa donde necesitaba una nueva oportunidad y encontró su lugar en esta familia.',
    story: 'Se mueve bajito, aparece donde menos la esperan y desaparece con una precisión admirable.',
    image: '/gatos/sombra.jpeg',
    focus: '52% 36%',
    tone: '#375f8f'
  },
  {
    name: 'Figaro',
    age: '7 años',
    role: 'Gordito mimoso',
    arrival: 'Apareció en una caja en un baldío junto a Fibi y tres hermanitos que también consiguieron hogar.',
    story: 'Se gana a todos con ternura, peso propio y una capacidad seria para pedir cariño.',
    image: '/gatos/figaro.jpeg',
    focus: '50% 18%',
    tone: '#8f4c61'
  },
  {
    name: 'Fibi',
    age: '7 años',
    role: 'Pancito asustadizo de amor',
    arrival: 'Fue encontrada con Figaro y sus hermanitos en una caja en un baldío; de ahí pasó a ser puro amor en casa.',
    story: 'Tiene alma sensible, ojitos enormes y una fascinación muy particular por escuchar su eco en el baño.',
    image: '/gatos/fibi.jpeg',
    focus: '54% 34%',
    tone: '#5c7a47'
  },
  {
    name: 'Adonis',
    age: '3 años',
    role: 'El bebote aventurero',
    arrival: 'Apareció abajo de un auto en la casa de un familiar y desde entonces se sumó como el más joven de la manada.',
    story: 'Es el más joven de la manada y disfruta salir afuera con nosotros como si fuera una gran expedición.',
    image: '/gatos/adonis.jpeg',
    focus: '72% 38%',
    tone: '#c0713d'
  }
];

const whatsappUrl = 'https://wa.me/541123952892';
const emailUrl = 'mailto:imhoff.bennett@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/bennett-imhoff';
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Trelew%2C%20Chubut%2C%20Argentina';
const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'La manada', href: '#la-manada' },
  { label: 'Cómo llegó cada uno', href: '#como-llego-cada-uno' },
  { label: 'Historias', href: '#historias' },
  { label: 'Contacto', href: '#contacto' }
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="manada gatuna inicio">
          <span className="brand-mark">mg</span>
          <span>manada gatuna</span>
        </a>
        <nav className="nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <img
            className="hero-bg"
            src="/gatos/hero-manada.png"
            alt=""
            aria-hidden="true"
          />
          <div className="hero-copy">
            <p className="eyebrow">Hogar, rescate y ronroneos</p>
            <h1>manada gatuna</h1>
            <p>
              Una vidriera digital para conocer a ocho gatitos que viven juntos, cada uno con
              su historia, su carácter y su lugar favorito de la casa.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#la-manada">Conocerlos</a>
              <a className="secondary-link" href="#como-llego-cada-uno">Ver historias</a>
            </div>
          </div>
          <div className="hero-stats" aria-label="Resumen de la manada">
            <Metric value="8" label="gatitos" />
            <Metric value="1" label="hogar" />
            <Metric value="24/7" label="ternura" />
          </div>
        </section>

        <section className="section intro-section" id="nosotros">
          <div>
            <p className="eyebrow">Nosotros</p>
            <h2>Un hogar contado como pagina de presentacion.</h2>
          </div>
          <p>
            Este dashboard funciona como una vidriera para redes, adopciones, refugios o
            proyectos personales: muestra quienes son, como llegaron y por que cada integrante
            de la manada tiene algo distinto para contar.
          </p>
        </section>

        <section className="section" id="la-manada">
          <div className="section-heading">
            <p className="eyebrow">La manada</p>
            <h2>Ocho personalidades, una misma casa.</h2>
          </div>
          <div className="cat-grid">
            {cats.map((cat) => (
              <article className="cat-card" key={cat.name}>
                <img
                  src={cat.image}
                  style={{ objectPosition: cat.focus }}
                  alt={getCatAlt(cat.name)}
                />
                <div className="cat-card-body">
                  <span className="cat-pill" style={{ backgroundColor: cat.tone }}>
                    {cat.age}
                  </span>
                  <h3>{cat.name}</h3>
                  <p>{cat.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section arrival-section" id="como-llego-cada-uno">
          <div className="section-heading">
            <p className="eyebrow">Cómo llegó cada uno</p>
            <h2>El camino que trajo a cada uno a casa.</h2>
          </div>
          <div className="arrival-list">
            {cats.map((cat, index) => (
              <article className="arrival-item" key={cat.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{cat.name}</h3>
                  <p>{cat.arrival}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stories-section" id="historias">
          <div className="section-heading">
            <p className="eyebrow">Historias</p>
            <h2>Lo que hace única a cada personalidad.</h2>
          </div>
          <div className="story-grid">
            {cats.map((cat) => (
              <article className="story-card" key={cat.name}>
                <span style={{ backgroundColor: cat.tone }}>{cat.name}</span>
                <h3>{cat.role}</h3>
                <p>{cat.story}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contacto">
        <div className="footer-intro">
          <p className="eyebrow">Contacto</p>
          <strong>manada gatuna</strong>
          <p>Una casa, ocho historias y muchas siestas importantes. Escribinos para charlar, compartir o conocer más.</p>
        </div>
        <div className="contact-list" aria-label="Datos de contacto">
          <a className="contact-card contact-card-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <strong>Enviar mensaje</strong>
          </a>
          <div className="contact-card">
            <span>Teléfono</span>
            <strong>+54 11 2395-2892</strong>
          </div>
          <a className="contact-card" href={emailUrl}>
            <span>📧 Mail</span>
            <strong>imhoff.bennett@gmail.com</strong>
          </a>
          <a className="contact-card" href={linkedinUrl} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>bennett-imhoff</strong>
          </a>
          <a className="contact-card" href={mapsUrl} target="_blank" rel="noreferrer">
            <span>Maps</span>
            <strong>Trelew, Chubut, Argentina</strong>
          </a>
        </div>
        <nav aria-label="Enlaces del pie">
          <a href="#nosotros">Nosotros</a>
          <a href="#la-manada">Gatitos</a>
          <a href="#como-llego-cada-uno">Llegadas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </footer>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function getCatAlt(name) {
  const descriptions = {
    Simon: 'Simon recostado con collar rojo',
    Figaro: 'Figaro sentado con collar violeta',
    Adonis: 'Adonis recostado con una manta colorida',
    Fibi: 'Fibi mirando de frente a camara',
    Timón: 'Timón mirando a camara',
    Sombra: 'Sombra mirando a camara',
    Suini: 'Suini caminando en el pasto',
    Fermín: 'Fermín recostado en el patio'
  };

  return descriptions[name] ?? `Retrato de ${name}`;
}

createRoot(document.getElementById('root')).render(<App />);
