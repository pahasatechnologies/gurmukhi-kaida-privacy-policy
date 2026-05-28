import './style.css'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.pahasatech.gurmukhi_kaida&hl=en_IN'
const APP_STORE_URL = 'https://apps.apple.com/in/app/gurmukhi-kaida/id6773573312'

const gurmukhiLetters = [
  { char: 'ੳ', name: 'Ura' },
  { char: 'ਅ', name: 'Aira' },
  { char: 'ੲ', name: 'Iri' },
  { char: 'ਸ', name: 'Sassa' },
  { char: 'ਹ', name: 'Haha' },
  { char: 'ਕ', name: 'Kakka' },
  { char: 'ਖ', name: 'Khakha' },
  { char: 'ਗ', name: 'Gagga' },
  { char: 'ਘ', name: 'Ghagha' },
  { char: 'ਙ', name: 'Nganga' },
  { char: 'ਚ', name: 'Chaccha' },
  { char: 'ਛ', name: 'Chhachha' },
  { char: 'ਜ', name: 'Jajja' },
  { char: 'ਝ', name: 'Jhajha' },
  { char: 'ਞ', name: 'Njanja' },
]

const phoneLetters = [
  { char: 'ੳ', roman: 'Ura' },
  { char: 'ਅ', roman: 'Aira' },
  { char: 'ੲ', roman: 'Iri' },
  { char: 'ਸ', roman: 'Sassa' },
  { char: 'ਹ', roman: 'Haha' },
  { char: 'ਕ', roman: 'Kakka' },
]

const features = [
  { icon: '📖', title: 'Complete Gurmukhi Alphabet', desc: 'Learn all 35 letters of the Gurmukhi script — from Ura to Yayya — with clear pronunciation guides.' },
  { icon: '🔊', title: 'Audio Pronunciations', desc: 'Hear native-speaker audio for every letter and vowel sound to master authentic Punjabi pronunciation.' },
  { icon: '✍️', title: 'Stroke-by-Stroke Writing', desc: 'Practice writing each character with animated stroke-order guides to build muscle memory.' },
  { icon: '🎮', title: 'Interactive Exercises', desc: 'Reinforce your learning with matching games, quizzes, and fill-in-the-blank activities.' },
  { icon: '📊', title: 'Track Your Progress', desc: 'Monitor mastery for each letter individually and earn badges as you advance through the kaida.' },
  { icon: '🌐', title: 'Works Offline', desc: 'Download lessons and practice anytime, anywhere — no internet connection required after setup.' },
]

const steps = [
  { num: '1', title: 'Download the App', desc: 'Install Gurmukhi Kaida from the Google Play Store for free.' },
  { num: '2', title: 'Pick a Letter', desc: 'Start with the first letter and work through the alphabet at your own pace.' },
  { num: '3', title: 'Listen & Practice', desc: 'Hear the sound, trace the strokes, and complete the exercises.' },
  { num: '4', title: 'Earn Mastery', desc: 'Pass the quiz for each letter and build your Gurmukhi reading skills.' },
]

const reviews = [
  { stars: 5, text: '"This app made learning Gurmukhi so accessible! My kids use it every day and they can already read simple words after just two weeks."', name: 'Harpreet K.', location: 'Amritsar, India' },
  { stars: 5, text: '"As a second-generation Punjabi living abroad, I always wanted to read Gurbani in its original script. This app is exactly what I needed."', name: 'Simran J.', location: 'Surrey, UK' },
  { stars: 5, text: '"Clear audio, beautiful design, and a logical progression through the alphabet. The stroke-order animations are especially helpful."', name: 'Navdeep S.', location: 'Brampton, Canada' },
]

function renderStars(count) {
  return Array.from({ length: count }, () => '<span class="star">★</span>').join('')
}

document.querySelector('#app').innerHTML = `
  <!-- NAV -->
  <nav class="nav" id="nav">
    <a href="#" class="nav-brand">
      <div class="nav-logo">ਕ</div>
      <span class="nav-title">Gurmukhi Kaida</span>
    </a>
    <div class="nav-cta">
      <a href="#features" class="nav-link">Features</a>
      <a href="#learn" class="nav-link">Learn</a>
      <div class="download-buttons">
        <a href="${APP_STORE_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">📱 iOS</a>
        <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">🤖 Android</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-badge">
          <span>📱</span> Free on Google Play
        </div>
        <h1 class="hero-heading">
          Master the<br><span class="highlight">Gurmukhi Script</span><br>with Confidence
        </h1>
        <p class="hero-subheading">
          Gurmukhi Kaida is the complete beginner's guide to learning the Punjabi alphabet — with audio pronunciations, stroke-order animations, and interactive exercises.
        </p>
        <div class="hero-actions">
          <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener" class="btn btn-primary">
            ▶ Download on Play Store
          </a>
          <a href="${APP_STORE_URL}" target="_blank" rel="noopener" class="btn btn-primary">
            ▶ Download on App Store
          </a>
          <a href="#features" class="btn btn-outline">Explore Features</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-value">35</span>
            <span class="stat-label">Gurmukhi Letters</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">Free</span>
            <span class="stat-label">To Download</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">4.8★</span>
            <span class="stat-label">Play Store Rating</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="phone-deco phone-deco-1"></div>
        <div class="phone-deco phone-deco-2"></div>
        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="phone-notch"></div>
            <div class="phone-app-icon">ਕ</div>
            <div class="phone-app-name">Gurmukhi Kaida</div>
            <div class="phone-letter-grid">
              ${phoneLetters.map(l => `
                <div class="phone-letter-card">
                  <span class="phone-gurmukhi">${l.char}</span>
                  <span class="phone-roman">${l.roman}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section features" id="features">
    <div class="section-inner">
      <div class="features-header">
        <span class="section-label">Features</span>
        <h2 class="section-title">Everything you need to learn Gurmukhi</h2>
        <p class="section-desc">From your first letter to fluent reading — Gurmukhi Kaida gives you the tools to succeed at every step.</p>
      </div>
      <div class="features-grid">
        ${features.map(f => `
          <div class="feature-card">
            <div class="feature-icon">${f.icon}</div>
            <h3 class="feature-title">${f.title}</h3>
            <p class="feature-desc">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- LEARN ALPHABET -->
  <section class="section learn" id="learn">
    <div class="section-inner">
      <div class="learn-inner">
        <div class="alphabet-showcase">
          <div class="alphabet-grid">
            ${gurmukhiLetters.map(l => `
              <div class="alpha-card">
                <span class="alpha-char">${l.char}</span>
                <span class="alpha-name">${l.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="learn-content">
          <span class="section-label">The Alphabet</span>
          <h2 class="section-title">Learn all 35 letters of the Gurmukhi script</h2>
          <p class="section-desc">Gurmukhi is the script used to write Punjabi — the language of the Sikh scriptures (Gurbani) and over 100 million speakers worldwide.</p>
          <ul class="learn-points">
            <li class="learn-point"><div class="point-dot"></div><span class="point-text">Systematically organized by phonetic groups, just like the traditional kaida (primer)</span></li>
            <li class="learn-point"><div class="point-dot"></div><span class="point-text">Each letter paired with a native-speaker audio clip and transliteration</span></li>
            <li class="learn-point"><div class="point-dot"></div><span class="point-text">Vowel signs (laga matra) and conjuncts covered after the base alphabet</span></li>
            <li class="learn-point"><div class="point-dot"></div><span class="point-text">Built-in spaced repetition ensures you remember what you've learned</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section how" id="how">
    <div class="section-inner">
      <div class="how-header">
        <span class="section-label">How It Works</span>
        <h2 class="section-title">Start reading Gurmukhi in four simple steps</h2>
      </div>
      <div class="steps-grid">
        ${steps.map(s => `
          <div class="step-card">
            <div class="step-number">${s.num}</div>
            <h3 class="step-title">${s.title}</h3>
            <p class="step-desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="section reviews" id="reviews">
    <div class="section-inner">
      <div class="reviews-header">
        <span class="section-label">Reviews</span>
        <h2 class="section-title">Loved by learners worldwide</h2>
        <p class="section-desc" style="margin: 0 auto;">Thousands of students, heritage speakers, and Gurbani learners use Gurmukhi Kaida every day.</p>
      </div>
      <div class="reviews-grid">
        ${reviews.map(r => `
          <div class="review-card">
            <div class="review-stars">${renderStars(r.stars)}</div>
            <p class="review-text">${r.text}</p>
            <div class="reviewer">
              <div class="reviewer-avatar">${r.name[0]}</div>
              <div>
                <div class="reviewer-name">${r.name}</div>
                <div class="reviewer-location">${r.location}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2 class="cta-title">Ready to learn Gurmukhi?</h2>
    <p class="cta-desc">Download Gurmukhi Kaida for free and start your journey through the Punjabi alphabet today.</p>
    <div class="cta-actions">
      <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener" class="btn btn-white">
        ▶ Download on Play Store
      </a>
      <a href="${APP_STORE_URL}" target="_blank" rel="noopener" class="btn btn-white">
        ▶ Download on App Store
      </a>
      <a href="#app-ads" class="btn btn-ghost">Developer Info</a>
    </div>
  </section>

  

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="footer-brand-name">
            <div class="nav-logo" style="width:32px;height:32px;font-size:15px;border-radius:8px;">ਕ</div>
            Gurmukhi Kaida
          </div>
          <p class="footer-brand-desc">A complete beginner's app for learning the Gurmukhi (Punjabi) script — built by Pahasa Tech.</p>
        </div>
        <div>
          <div class="footer-col-title">App</div>
          <ul class="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#learn">The Alphabet</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Legal</div>
          <ul class="footer-links">
            <li><a href="/privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Download</div>
          <ul class="footer-links">
            <li><a href="${APP_STORE_URL}" target="_blank" rel="noopener">App Store</a></li>
            <li><a href="${PLAY_STORE_URL}" target="_blank" rel="noopener">Google Play Store</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© 2024 Pahasa Tech. All rights reserved. | Publisher ID: pub-9375607095557732</span>
        <div class="footer-download-buttons">
          <a href="${APP_STORE_URL}" target="_blank" rel="noopener" class="footer-play-btn">
            📱 App Store
          </a>
          <a href="${PLAY_STORE_URL}" target="_blank" rel="noopener" class="footer-play-btn">
            🤖 Google Play
          </a>
        </div>
      </div>
    </div>
  </footer>
`

// Nav scroll effect
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10)
}, { passive: true })

// Copy button
document.getElementById('copyBtn').addEventListener('click', function () {
  const text = 'google.com, pub-9375607095557732, DIRECT, f08c47fec0942fa0'
  navigator.clipboard.writeText(text).then(() => {
    this.textContent = 'Copied!'
    this.classList.add('copied')
    setTimeout(() => {
      this.textContent = 'Copy'
      this.classList.remove('copied')
    }, 2000)
  }).catch(() => {
    this.textContent = 'Copy failed'
    setTimeout(() => { this.textContent = 'Copy' }, 2000)
  })
})

// Smooth-scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
})
