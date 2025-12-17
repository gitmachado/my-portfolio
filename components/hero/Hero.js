export class AppHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section id="hero">
    <div class="container">
        <p>Olá, bem-vindo ao meu portfólio</p>
        <h1>Criando experiências<br>digitais <span>únicas</span>.</h1>
        <p>Sou um Desenvolvedor focado em performance, design limpo e código escalável.</p>
        <div style="margin-top: 30px;">
            <a href="#projetos" class="btn-cta" style="padding: 12px 35px; font-weight: 600;">Ver meu trabalho</a>
        </div>
    </div>
</section>
        `;
    }
}

customElements.define('app-hero', AppHero);
