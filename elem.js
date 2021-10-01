customElements.define("my-header", class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <header>
                
            </header>
        `;
    };
});