class MediaBlock extends HTMLElement {
    constructor() {
        super();
        this._props = {};
    }

    static get observedAttributes() {
        return [
            'image', 'imagealt', 'imagetext', 'image2', 'image2alt', 'image2text', 'textwidth', 'imagewidth', 'image2width',
            'header', 'body', 'body2', 'subtext', 'subtext2', 'reverse'
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
        const textWidth = this.getProp('textwidth') || '1';
        const imageWidth = this.getProp('imagewidth') || '1';
        const image2Width = this.getProp('image2width') || '1';

        this.innerHTML = `
            <div class="${this.getProp('reverse') ? 'mediaBlock reverse' : 'mediaBlock'} ${this.getProp(
            'image2'
        ) ? 'mediaBlock__images' : ''}">
                <div class="container">
                    ${
                        !this.getProp('image2')
                            ? `<div class="mediaBlock__text" style="grid-column: span ${textWidth};">
                                ${this.getProp('header') ? `<h2 class="heading2">${this.getProp('header')}</h2>` : ''}
                                ${this.getProp('body') ? `<p class="p--lg">${this.getProp('body')}</p>` : ''}
                                ${this.getProp('body2') ? `<p class="p--lg">${this.getProp('body2')}</p>` : ''}
                                ${this.getProp('subtext') ? `<p class="p--sm">${this.getProp('subtext')}</p>` : ''}
                                ${this.getProp('subtext2') ? `<p class="p--sm">${this.getProp('subtext2')}</p>` : ''}

                            </div>`
                            : ''
                    }
                    ${
                        this.getProp('image') && this.getProp('imagealt')
                            ? `<div class="mediaBlock__image" style="grid-column: span ${imageWidth};">
                                <img src="${this.getProp('image')}" alt="${this.getProp('imagealt')}" />
                                ${this.getProp('imagetext') ? `<p class="p--sm">${this.getProp('imagetext')}</p>` : ''}
                            </div>`
                            : ''
                    }
                    ${
                        this.getProp('image2') && this.getProp('image2alt')
                            ? `<div class="mediaBlock__image" style="grid-column: span ${image2Width};">
                                <img src="${this.getProp('image2')}" alt="${this.getProp('image2alt')}" />
                                ${this.getProp('image2text') ? `<p class="p--sm">${this.getProp('image2text')}</p>` : ''}
                            </div>`
                            : ''
                    }
                </div>
            </div>
        `;
    }
    
}

customElements.define('mediablock-component', MediaBlock);
