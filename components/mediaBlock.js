class MediaBlock extends HTMLElement {
    constructor() {
        super();
        this._props = {};
    }

    static get observedAttributes() {
        return [
            'image', 'imagealt', 'imagetext', 'image2', 'image2alt', 'image2text', 'imagewidth', 
            'header', 'body', 'body2', 'subtext', 'reverse'
        ];
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
            <div class="${this.getProp('reverse') ? 'mediaBlock reverse' : 'mediaBlock'} ${this.getProp('image2') ? 'mediaBlock__images' : ""}">
                <div class="container">
                    ${!this.getProp('image2') ?
                        ` <div class="mediaBlock__text">
                            ${this.getProp('header') ? `<h2 class="heading2">${this.getProp('header')}</h2>` : ""}
                            ${this.getProp('body') ? `<p class="p--lg">${this.getProp('body')}</p>` : ""}
                            ${this.getProp('body2') ? `<p class="p--lg">${this.getProp('body2')}</p>` : ""}
                            ${this.getProp('subtext') ? `<p class="p--sm">${this.getProp('subtext')}</p>` : ""}
                        </div>`
                    : ""}
                    ${this.getProp('image') && this.getProp('imagealt')?
                        `<div class="mediaBlock__image" ${this.getProp('imagewidth') ? "style='width: " + this.getProp('imagewidth') + ";'" : ""}>
                                <img src="${this.getProp('image')}" alt="${this.getProp('imagealt')}" />
                                ${this.getProp('imagetext') ? `<p class="p--sm">${this.getProp('imagetext')}</p>` : ""}
                        </div>`
                    : ""}
                    ${this.getProp('image2') && this.getProp('image2alt') ?
                        `<div class="mediaBlock__image" ${this.getProp('imagewidth') ? "style='width: " + this.getProp('imagewidth') + ";'" : ""}>
                                <img src="${this.getProp('image2')}" alt="${this.getProp('image2alt')}" />
                                ${this.getProp('image2text') ? `<p class="p--sm">${this.getProp('image2text')}</p>` : ""}
                        </div>`
                    : ""}
                </div>
            </div>
        `;
    }
}

customElements.define('mediablock-component', MediaBlock);