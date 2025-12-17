export class AcHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<header class="header">
    <div class="container header-container">
        <a href="#" class="logo">AppCo</a>
        <nav class="nav">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#features">Funcionalidades</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </div>
</header>
        `;
    }
}

customElements.define('ac-header', AcHeader);
