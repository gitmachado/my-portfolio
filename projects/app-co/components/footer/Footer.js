export class AcFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<footer class="footer">
    <div class="container footer-container">
        <div class="footer-logo">AppCo</div>
        <div class="footer-links">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Funcionalidades</a>
            <a href="#">Preços</a>
        </div>
        <div class="copyright">
            &copy; 2025 AppCo. Todos os direitos reservados.
        </div>
    </div>
</footer>
        `;
    }
}

customElements.define('ac-footer', AcFooter);
