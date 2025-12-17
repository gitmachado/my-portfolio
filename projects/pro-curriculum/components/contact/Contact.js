export class PcContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section class="hero-contacts container" id="contact">
  <div>
    <div class="item-title">Email</div>
    <div>mauriciojesus.dev@gmail.com</div>
  </div>
  <div>
    <div class="item-title">Phone</div>
    <div>+5551998983434</div>
  </div>
  <div>
    <div class="item-title">Location</div>
    <div>Rio Grande do Sul, Brazil</div>
  </div>
</section>
        `;
    }
}

customElements.define('pc-contact', PcContact);
