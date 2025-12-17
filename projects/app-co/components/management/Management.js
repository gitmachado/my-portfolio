export class AcManagement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/`
<section class="management">
    <div class="container management-container">
        <div class="management-text">
            <h2>Gerencie seus Projetos de Design pelo Celular</h2>
            <p>Acompanhe o progresso, aprove layouts e comunique-se com nossa equipe em tempo real através do nosso
                aplicativo exclusivo para clientes.</p>
            <ul class="feature-list">
                <li>Visualização de protótipos interativos.</li>
                <li>Feedback e comentários centralizados.</li>
                <li>Controle de versões e entregáveis.</li>
                <li>Aprovação ágil de etapas do projeto.</li>
            </ul>
        </div>
        <div class="management-image">
            <img src="assets/management-phones.webp" alt="App de Gestão de Projetos">
        </div>
    </div>
</section>
        `;
    }
}

customElements.define('ac-management', AcManagement);
