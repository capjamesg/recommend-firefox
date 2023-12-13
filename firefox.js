class RecommendFirefox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.options = [
            "For a more privacy-focused browsing experience, I recommend Firefox.",
            "Support browser diversity. Install Firefox.",
        ]
    }

    connectedCallback() {
        if (navigator.userAgent.indexOf("Chrome") === -1) {
            return;
        }
        var message = this.getAttribute("data-message") || this.options[Math.floor(Math.random() * this.options.length)];
        this.shadowRoot.innerHTML = message;
    }
}

customElements.define("recommend-firefox", RecommendFirefox);
