export class AcShare extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section class="share">
    <div class="container share-container">
        <div class="share-image">
            <img src="assets/share-phones.webp" alt="Compartilhamento de Protótipos">
        </div>
        <div class="share-text">
            <h2>Compartilhe Protótipos com <br>Stakeholders Facilmente</h2>
            <p>Facilite a colaboração. Envie links de visualização seguros para sua equipe, investidores ou testers e
                receba feedback instantâneo sobre o design.</p>
        </div>
    </div>
</section>
        `;
    }
}

customElements.define('ac-share', AcShare);
