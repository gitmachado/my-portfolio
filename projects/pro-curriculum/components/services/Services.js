export class PcServices extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section class="services-section" id="services">
  <div class="container">
    <div class="services-header">
      <h2>My Services</h2>
    </div>

    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon">&lt;/&gt;</div>
        <h3 class="service-title">Web Development</h3>
        <p class="service-desc">Building modern, responsive, and optimized websites and applications using best development practices.</p>
      </article>

      <article class="service-card">
        <div class="service-icon">3D</div>
        <h3 class="service-title">3D Design</h3>
        <p class="service-desc">Creating 3D models and visuals for interfaces, animations, and immersive user experiences.</p>
      </article>

      <article class="service-card">
        <div class="service-icon">UI</div>
        <h3 class="service-title">Design Trends</h3>
        <p class="service-desc">Designing interfaces aligned with current trends, focusing on aesthetics, clarity, and usability.</p>
      </article>

      <article class="service-card">
        <div class="service-icon">CS</div>
        <h3 class="service-title">Customer Support</h3>
        <p class="service-desc">Developing solutions that streamline customer service, ensuring fast, efficient, and integrated support.</p>
      </article>

      <article class="service-card">
        <div class="service-icon">BR</div>
        <h3 class="service-title">Branding</h3>
        <p class="service-desc">Crafting visual identities that strengthen brands, communicate values, and enhance recognition.</p>
      </article>

      <article class="service-card">
        <div class="service-icon">MK</div>
        <h3 class="service-title">Marketing</h3>
        <p class="service-desc">Creating data-driven digital strategies to increase reach, engagement, and conversion.</p>
      </article>
    </div>
  </div>
</section>
        `;
    }
}

customElements.define('pc-services', PcServices);
