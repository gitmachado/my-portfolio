export class PcHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<header class="site-header">
  <div class="container nav">
    <div class="logo">
      <img src="assets/logo.svg" alt="Logo" style="height: 30px; margin-right: 10px;">
      <span>MAURICIO MACHADO</span>
    </div>
    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#resume">Resume</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
        `;
    }
}

customElements.define('pc-header', PcHeader);
