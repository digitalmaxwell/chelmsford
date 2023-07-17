class Timeline extends HTMLElement {
    constructor() {
        super();
        this._selectedPeriod = null;
    }

    static get observedAttributes() {
        return ['selected-period'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'selected-period') {
            this.selectedPeriod = newValue;
        }
    }

    get selectedPeriod() {
        return this._selectedPeriod;
    }

    set selectedPeriod(value) {
        this._selectedPeriod = value;
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="timeline container">
            <div class="timeline__toggle-button">
                <span class="p--md">Timeline</span>
                <span class="chevron"></span>
            </div>
            <hr/>
            <ul>
                <li>
                    <a href="paleoindian-period.html" class="p--sm">PaleoIndian Period</a>
                    <span class="p--sm-light">12,900-10,000<br/>years ago</span>
                </li>
                <li>
                    <a href="archaic-periods.html" class="p--sm">Early, Middle & Late Archaic Periods</a>
                    <span class="p--sm-light">10,000-2,500<br/>years ago</span>
                </li>
                <li>
                    <a href="transitional-archaic-period.html" class="p--sm">Transitional Archaic Period</a>
                    <span class="p--sm-light">3,600-2,500<br/>years ago</span>
                </li>
                <li>
                    <a href="woodland-periods.html" class="p--sm">Early, Middle & Late Woodland Periods</a>
                    <span class="p--sm-light">3,000-450<br/>years ago</span>
                </li>
                <li>
                    <a href="historical-period.html" class="p--sm">Historical Period</a>
                    <span class="p--sm-light">1500<br/>AD-Present</span>
                </li>
            </ul>
        </div>
        `;

        // timeline toggle button functionality
        this.querySelector('.timeline__toggle-button').addEventListener('click', () => {
            this.querySelector('.timeline__toggle-button').classList.toggle('active');
            this.querySelector('ul').classList.toggle('timeline-open');
        });

        // Add event listeners to li elements
        this.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                const link = li.querySelector('a').href;
                window.location.href = link;
            });
        });

        this.updateSelectedPeriod();
    }

    updateSelectedPeriod() {
        if (this._selectedPeriod) {
            // Remove the 'selected' class from any existing element
            const existingSelected = this.querySelector('li.selected');
            if (existingSelected) existingSelected.classList.remove('selected');
            
            // Add the 'selected' class to the new selected item
            const newItem = this.querySelector(`a[href="${this._selectedPeriod}"]`);
            if (newItem) newItem.parentElement.classList.add('selected');
        }
    }
}

customElements.define('timeline-component', Timeline);
