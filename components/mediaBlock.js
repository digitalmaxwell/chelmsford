class MediaBlock extends HTMLElement {
    constructor() {
        super();
        this._props = {};
    }

    static get observedAttributes() {
        return ['image', 'imagewidth', 'imagetext', 'header', 'body', 'body2', 'subtext', 'reverse'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.setProp(name, newValue);
    }

    connectedCallback() {
        this.render();
    }

    setProp(name, value) {
        this._props[name] = value;
        this.render();
    }

    getProp(name) {
        return this._props[name];
    }

    render() {
        this.innerHTML = `
            <div class="${this.getProp('reverse') ? 'mediaBlock reverse' : 'mediaBlock'}">
                <div class="container">
                    <div class="mediaBlock__text">
                        ${this.getProp('header') ? `<h2 class="heading2">${this.getProp('header')}</h2>` : ""}
                        ${this.getProp('body') ? `<p class="p--lg">${this.getProp('body')}</p>` : ""}
                        ${this.getProp('body2') ? `<p class="p--lg">${this.getProp('body2')}</p>` : ""}
                        ${this.getProp('subtext') ? `<p class="p--sm">${this.getProp('subtext')}</p>` : ""}
                    </div>
                    <div class="mediaBlock__image" ${this.getProp('imagewidth') ? "style='width: " + this.getProp('imagewidth') + ";'" : ""}>
                        ${this.getProp('image') ? `<img src="${this.getProp('image')}" alt="Territory Map" />` : ""}
                        ${this.getProp('imagetext') ? `<p class="p--sm">${this.getProp('imagetext')}</p>` : ""}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('mediablock-component', MediaBlock);