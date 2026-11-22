import { useState } from "react";
import { IconArrowDown, IconArrowRight, IconArrowUpRight, IconCompass, IconMapPin, IconMenu2, IconX } from "@tabler/icons-react";

export function meta() {
  return [
    { title: "Tamil Nadu — A Land of Living Stories" },
    { name: "description", content: "Explore the history, culture and living heritage of Tamil Nadu." },
  ];
}

const places = [
  { name: "Chennai", x: 79, y: 27, description: "The coastal capital, where colonial landmarks meet a thriving contemporary arts and food scene.", image: "https://images.pexels.com/photos/12423911/pexels-photo-12423911.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Chennai's coast" },
  { name: "Mamallapuram", x: 78, y: 39, description: "A seaside town of Pallava rock-cut monuments and the celebrated Shore Temple.", image: "https://images.pexels.com/photos/37271214/pexels-photo-37271214.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "The Shore Temple at Mamallapuram" },
  { name: "Thanjavur", x: 71, y: 57, description: "The Chola heartland, home to the magnificent Brihadisvara Temple and generations of artists.", image: "https://images.pexels.com/photos/37862812/pexels-photo-37862812.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Brihadisvara Temple in Thanjavur" },
  { name: "Madurai", x: 55, y: 72, description: "One of India's oldest living cities, gathered around the colourful Meenakshi Amman Temple.", image: "https://images.pexels.com/photos/33895627/pexels-photo-33895627.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "A colourful Tamil temple" },
  { name: "Kanyakumari", x: 42, y: 92, description: "At India's southern tip, the waters of the Arabian Sea, Bay of Bengal and Indian Ocean meet.", image: "https://images.pexels.com/photos/25809063/pexels-photo-25809063.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Vivekananda Rock Memorial in Kanyakumari" },
];

const tamilNaduMap = "https://cdn.builder.io/api/v1/image/assets%2F0c4cdd417b834785b76922d40eb3823b%2Ffa0e0833e54a4ef9a14e9878fd31b82e?format=webp&width=600";

const chapters = [
  { number: "01", title: "A timeless past", text: "From ancient Sangam poetry to the great Chola empire, travel through the stories that shaped this land.", href: "#history", image: "https://images.pexels.com/photos/5138790/pexels-photo-5138790.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Brihadisvara Temple in Thanjavur" },
  { number: "02", title: "A living culture", text: "Discover a world of classical dance, music, festivals and traditions passed from one generation to the next.", href: "#culture", image: "https://images.pexels.com/photos/14602419/pexels-photo-14602419.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Classical Indian dancer in traditional costume" },
  { number: "03", title: "Heritage in every detail", text: "In sculpted stone, handwoven silk and flavours shared over a banana leaf, heritage is part of everyday life.", href: "#heritage", image: "https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Colourful Kanchipuram silk fabrics" },
];

function MapIllustration() {
  const [selected, setSelected] = useState(3);
  const place = places[selected]!;
  return (
    <div className="map-wrap">
      <div className="map-heading"><span>THE LAND & ITS STORIES</span><IconCompass size={19} stroke={1.4} /></div>
      <div className="map-area">
        <img className="state-map" src={tamilNaduMap} alt="Map of Tamil Nadu with district boundaries" loading="lazy" decoding="async" />
        {places.map((item, index) => (
          <button
            key={item.name}
            className="map-pin"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onClick={() => setSelected(index)}
            aria-label={`Explore ${item.name}`}
            aria-pressed={selected === index}
          >
            <img src={item.image} alt="" loading="lazy" decoding="async" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="map-caption">
        <img className="map-caption-image" src={place.image} alt={place.alt} loading="lazy" decoding="async" />
        <div>
          <span>EXPLORE THE MAP</span>
          <strong>{place.name}</strong>
          <p>{place.description}</p>
        </div>
        <span className="map-caption-number">0{selected + 1} / 05</span>
      </div>
    </div>
  );
}

export default function HomeRoute() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tamil Nadu, home">
          <span className="brand-mark">த</span>
          <span><strong>TAMIL NADU</strong><small>THE LAND OF TAMILS</small></span>
        </a>
        <nav className={menuOpen ? "navigation open" : "navigation"} aria-label="Main navigation">
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#history" onClick={() => setMenuOpen(false)}>History</a>
          <a href="#culture" onClick={() => setMenuOpen(false)}>Culture</a>
          <a href="#heritage" onClick={() => setMenuOpen(false)}>Heritage</a>
        </nav>
        <a href="#explore" className="header-link">EXPLORE THE LAND <IconArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow"><span /> A JOURNEY THROUGH THE SOUL OF SOUTH INDIA</div>
          <p className="tamil-word">தமிழ்நாடு</p>
          <h1>Where stories<br /><em>live forever.</em></h1>
          <p className="hero-description">A land of ancient wonders, vibrant traditions and a culture that speaks to the soul. Welcome to Tamil Nadu.</p>
          <a className="hero-button" href="#story">BEGIN THE JOURNEY <IconArrowDown size={16} /></a>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO DISCOVER</span>
          <span className="hero-bottom-line" />
          <span>11° 07' N &nbsp; 78° 39' E</span>
        </div>
        <div className="hero-side">A LAND LIKE NO OTHER &nbsp; · &nbsp; INDIA</div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-side">
          <span className="section-number">01 / THE INTRODUCTION</span>
          <div className="sun-symbol">✳</div>
          <span className="side-note">AN ANCIENT LAND.<br />A LIVING LEGACY.</span>
        </div>
        <div className="intro-main">
          <div className="eyebrow"><span /> VANAKKAM, WELCOME</div>
          <h2>More than a place.<br /><em>A feeling.</em></h2>
          <div className="intro-copy">
            <p>At the southern edge of India lies a land where the past is never far from the present. Temple bells rise with the morning sun, stories are carved into stone, and every meal is an invitation to belong.</p>
            <p>Tamil Nadu is a tapestry woven over thousands of years — of dynasties and devotion, art and architecture, language and life. Come, take a closer look.</p>
          </div>
          <a className="text-link" href="#explore">GET TO KNOW THE LAND <IconArrowRight size={17} /></a>
        </div>
        <div className="intro-quote">
          <span>“</span>
          <p>Every corner has a story.<br />Every story has a soul.</p>
          <small>— THE SPIRIT OF TAMIL NADU</small>
        </div>
      </section>

      <section className="explore-section section-pad" id="explore">
        <div className="explore-copy">
          <div className="eyebrow"><span /> A SENSE OF PLACE</div>
          <h2>One land.<br /><em>Many worlds.</em></h2>
          <p>From the misty Western Ghats to the shores of the Bay of Bengal, Tamil Nadu is a world of its own. Explore a few of the places that tell its story.</p>
          <div className="explore-facts">
            <div><strong>2,000+</strong><span>YEARS OF HISTORY</span></div>
            <div><strong>1,076 km</strong><span>OF COASTLINE</span></div>
          </div>
          <div className="map-instruction"><IconMapPin size={18} /> Tap a pictured place to discover more.</div>
        </div>
        <MapIllustration />
      </section>

      <section className="chapters section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span /> THE STORIES OF TAMIL NADU</div>
            <h2>Come a little <em>closer.</em></h2>
          </div>
          <p>There is so much more to discover.<br />Begin with the stories that make this land.</p>
        </div>
        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <a className="chapter-card" href={chapter.href} key={chapter.number}>
              <div className="chapter-image">
                <img src={chapter.image} alt={chapter.alt} loading="lazy" decoding="async" />
                <span>{chapter.number} / 03</span>
                <div className="chapter-arrow"><IconArrowUpRight size={19} /></div>
              </div>
              <div className="chapter-meta">A STORY OF TAMIL NADU <span>—</span></div>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
              <span className="chapter-link">READ THE STORY <IconArrowRight size={15} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="story-section history-section" id="history">
        <div className="story-image history-image" role="img" aria-label="Brihadisvara Temple in Thanjavur" />
        <div className="story-content">
          <div className="eyebrow"><span /> CHAPTER 01 — HISTORY</div>
          <h2>A past etched<br /><em>in eternity.</em></h2>
          <p>Long before modern borders, the Tamil country was a flourishing world of poets, merchants and kingdoms. Sangam literature, composed over many centuries around the beginning of the Common Era, offers vivid glimpses of love, war, landscape and everyday life.</p>
          <p>The Chera, Chola and Pandya dynasties shaped its history. Under the Cholas, maritime trade, bronze casting and temple architecture reached extraordinary heights. Built in the 11th century by Rajaraja I, Thanjavur’s Brihadisvara Temple remains a breathtaking testament to their ambition.</p>
          <div className="story-detail">
            <span>THE GREAT LIVING CHOLA TEMPLES</span>
            <strong>A legacy built to last.</strong>
          </div>
        </div>
      </section>

      <section className="culture-section section-pad" id="culture">
        <div className="culture-title">
          <div className="eyebrow"><span /> CHAPTER 02 — CULTURE</div>
          <h2>Tradition, <em>alive</em><br />in every moment.</h2>
          <p>Here, culture isn't kept behind glass. It is sung, danced, cooked and celebrated — an inheritance that is continually made new.</p>
          <div className="culture-language">
            <span>தமிழ்</span>
            <p>Tamil carries an ancient literary tradition into everyday life, linking generations across the state and around the world.</p>
          </div>
        </div>
        <div className="culture-list">
          <article>
            <img src="https://images.pexels.com/photos/14602419/pexels-photo-14602419.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Classical Indian dancer in traditional costume" loading="lazy" decoding="async" />
            <div>
              <span>01 / PERFORMANCE</span>
              <h3>The poetry of movement</h3>
              <p>Bharatanatyam brings together expressive gesture, rhythmic footwork and storytelling. Carnatic music fills concert halls and temple courtyards with intricate melodies.</p>
            </div>
          </article>
          <article>
            <img src="https://images.pexels.com/photos/35763758/pexels-photo-35763758.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Decorated Pongal pot with flowers and mango leaves" loading="lazy" decoding="async" />
            <div>
              <span>02 / FESTIVAL</span>
              <h3>Seasons of celebration</h3>
              <p>At Pongal, families give thanks for the harvest, the sun and the land. Fresh kolam patterns brighten doorsteps, and sweet rice bubbles over in a shared wish for abundance.</p>
            </div>
          </article>
          <article>
            <img src="https://images.pexels.com/photos/10317127/pexels-photo-10317127.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Colourful silk fabrics woven in Kanchipuram" loading="lazy" decoding="async" />
            <div>
              <span>03 / CRAFT</span>
              <h3>Threads of tradition</h3>
              <p>Kanchipuram silk is prized for luminous colour, intricate borders and skilled handwork. Each sari carries a living craft tradition into weddings, festivals and family milestones.</p>
            </div>
          </article>
          <article>
            <img src="https://images.pexels.com/photos/34484975/pexels-photo-34484975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="A festive South Indian meal served in Chennai" loading="lazy" decoding="async" />
            <div>
              <span>04 / FOOD</span>
              <h3>A table made for sharing</h3>
              <p>Tamil Nadu's regional kitchens bring together fragrant spices, slow-cooked curries, crisp dosai and comforting rice dishes. A banana-leaf meal makes hospitality part of the feast.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="heritage-section section-pad" id="heritage">
        <div className="heritage-top">
          <div>
            <div className="eyebrow light"><span /> CHAPTER 03 — HERITAGE</div>
            <h2>Made by hand.<br /><em>Kept in the heart.</em></h2>
          </div>
          <p>Look closer, and you'll find a beautiful legacy in the things people make, share and cherish every day.</p>
        </div>
        <div className="heritage-grid">
          <article>
            <span>01 / THE CRAFT</span>
            <h3>Woven with meaning</h3>
            <p>Kanchipuram's silk saris are known for their rich colours, lustrous threads and contrasting borders. Each is the work of skilled weaving communities carrying a tradition forward.</p>
          </article>
          <article>
            <span>02 / THE TABLE</span>
            <h3>A feast for the senses</h3>
            <p>From crisp dosai and comforting sambar to Chettinad's aromatic spices, Tamil food is wonderfully varied. A meal served on a banana leaf is an expression of generosity and community.</p>
          </article>
          <article>
            <span>03 / THE ARCHITECTURE</span>
            <h3>Stories in stone</h3>
            <p>Temple towns such as Madurai and Mamallapuram reveal centuries of artistic imagination — from towering gopurams to delicate carvings and monuments shaped from living rock.</p>
          </article>
        </div>
        <div className="heritage-end">
          <span>வணக்கம்</span>
          <p>There is always another story waiting.</p>
          <a href="#top">BACK TO THE BEGINNING <IconArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">தமிழ்நாடு <span>TAMIL NADU</span></a>
        <p>A little closer to the soul of South India.</p>
        <span>MADE WITH LOVE FOR THE LAND & ITS STORIES</span>
      </footer>
    </main>
  );
}
