export class AsFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/`
<footer>
  <div class='container'>
    <div class='footer-row'>
      <div class='footer-left'>
        <span>Alpha Edtech</span>
        <span>Criado por Mauricio Machado</span>
        <span>Web Design 2025</span>
      </div>
      <div class='footer-right'>
        <span class='footer-brand'>
          <span class='footer-mark'>AS</span>
          <span class='footer-name'>A-SPACE</span>
        </span>
      </div>
    </div>
  </div>
</footer>
        `;
  }
}

customElements.define('as-footer', AsFooter);
