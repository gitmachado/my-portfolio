export class AcFeatures extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section class="features" id="features">
    <div class="container">
        <div class="section-title">
            <h2>Por que escolher a AppCo?</h2>
            <p>Nossa abordagem focada no usuário garante produtos digitais que não apenas funcionam, mas encantam.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="icon-box">
                    <img src="assets/feature-clean.webp" alt="Design Limpo">
                </div>
                <h3>Design Limpo</h3>
                <p>Interfaces modernas e minimalistas que valorizam sua marca e comunicam profissionalismo.</p>
            </div>
            <div class="feature-card">
                <div class="icon-box">
                    <img src="assets/feature-secure.webp" alt="Foco na UX">
                </div>
                <h3>Foco na UX</h3>
                <p>Crie experiências intuitivas que retêm usuários e aumentam significativamente a conversão.</p>
            </div>
            <div class="feature-card">
                <div class="icon-box">
                    <img src="assets/feature-performance.webp" alt="Alta Performance">
                </div>
                <h3>Alta Performance</h3>
                <p>Garanta que seu site ou aplicativo funcione com velocidade máxima e fluidez em qualquer dispositivo.
                </p>
            </div>
        </div>
    </div>
</section>
        `;
    }
}

customElements.define('ac-features', AcFeatures);
