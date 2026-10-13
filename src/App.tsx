import './App.css'

interface BreadItem {
  id: string
  name: string
  price: string
  description: string
  tag?: string
  icon: string
}

const BREAD_ITEMS: BreadItem[] = [
  {
    id: 'pan-de-campo',
    name: 'Pan de Campo (Masa Madre)',
    price: '$4.50',
    description: 'Hogaza rústica de fermentación lenta de 24 horas, corteza crujiente y miga aireada.',
    tag: 'Especialidad',
    icon: '🍞',
  },
  {
    id: 'baguette-tradicional',
    name: 'Baguette Tradicional',
    price: '$2.50',
    description: 'Receta clásica francesa con corteza dorada y crocante, ideal para acompañar cada comida.',
    tag: 'Clásico',
    icon: '🥖',
  },
  {
    id: 'pan-centeno-semillas',
    name: 'Pan de Centeno y Semillas',
    price: '$4.80',
    description: 'Elaborado con harina de centeno integral y mezcla tostada de semillas de girasol, lino y sésamo.',
    tag: 'Integral',
    icon: '🌾',
  },
  {
    id: 'ciabatta-rustica',
    name: 'Ciabatta Rústica',
    price: '$3.50',
    description: 'Pan italiano de miga muy abierta y suave, infusionado con aceite de oliva virgen extra.',
    tag: 'Favorito',
    icon: '🥐',
  },
]

const OPENING_HOURS = [
  { days: 'Lunes a Viernes', hours: '07:00 – 19:30', status: 'Horneado continuo' },
  { days: 'Sábados', hours: '08:00 – 18:00', status: 'Especialidades de fin de semana' },
  { days: 'Domingos y Feriados', hours: '08:00 – 14:00', status: 'Hasta agotar stock' },
]

function App() {
  return (
    <div className="bakery-app">
      {/* Top Navigation / Brand Bar */}
      <header className="site-header">
        <div className="container nav-content">
          <div className="brand-logo">
            <span className="brand-icon">🥖</span>
            <span className="brand-name">Pan de Casa</span>
          </div>
          <nav className="nav-links">
            <a href="#precios">Precios</a>
            <a href="#horarios">Horarios</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-badge">Panadería Artesanal</div>
          <h1 className="hero-title">Pan de Casa</h1>
          <p className="hero-subtitle">
            Masa madre viva, fermentación lenta y harinas seleccionadas. Pan recién horneado con amor y tradición cada mañana.
          </p>
          <div className="hero-highlights">
            <div className="highlight-pill">
              <span className="highlight-dot"></span>
              100% Masa Madre
            </div>
            <div className="highlight-pill">
              <span className="highlight-dot"></span>
              24h Fermentación
            </div>
            <div className="highlight-pill">
              <span className="highlight-dot"></span>
              Sin conservantes
            </div>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="precios" className="section pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Nuestra Selección</span>
            <h2 className="section-title">Lista de Precios</h2>
            <p className="section-desc">
              Cuatro panes artesanales preparados a diario con ingredientes naturales de la más alta calidad.
            </p>
          </div>

          <div className="price-grid">
            {BREAD_ITEMS.map((item) => (
              <article key={item.id} className="bread-card">
                <div className="card-top">
                  <div className="bread-icon-wrapper">
                    <span className="bread-icon">{item.icon}</span>
                  </div>
                  {item.tag && <span className="bread-tag">{item.tag}</span>}
                </div>
                <div className="card-body">
                  <div className="card-title-row">
                    <h3 className="bread-name">{item.name}</h3>
                    <span className="bread-price">{item.price}</span>
                  </div>
                  <p className="bread-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="horarios" className="section hours-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Visítanos</span>
            <h2 className="section-title">Horario de Atención</h2>
            <p className="section-desc">
              Las primeras hornadas calientes salen a partir de las 7:30 cada mañana.
            </p>
          </div>

          <div className="hours-card">
            <div className="hours-list">
              {OPENING_HOURS.map((slot, index) => (
                <div key={index} className="hours-row">
                  <div className="hours-day-group">
                    <span className="hours-day">{slot.days}</span>
                    <span className="hours-sub">{slot.status}</span>
                  </div>
                  <div className="hours-time-badge">{slot.hours}</div>
                </div>
              ))}
            </div>

            <div className="hours-banner">
              <span className="banner-icon">✨</span>
              <p className="banner-text">
                <strong>¿Buscas una reserva especial?</strong> Puedes encargar panes completos con 24 horas de anticipación en el mostrador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-content">
          <p className="footer-brand">Pan de Casa — Panadería Artesanal</p>
          <p className="footer-sub">Harina, agua, masa madre y tiempo.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
