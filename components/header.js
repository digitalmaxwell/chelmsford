class Header extends HTMLElement {
  constructor() {
    super();
    this._selectedNavItem = null;
  }

  static get observedAttributes() {
    return ['selected-nav-item'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'selected-nav-item') {
      this.selectedNavItem = newValue;
    }
  }

  get selectedNavItem() {
    return this._selectedNavItem;
  }

  set selectedNavItem(value) {
    this._selectedNavItem = value;
    this.updateSelectedNavItem();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
          <div class="header__nativeAmericans">
              <div class="container">
                  <h3>Native Americans</h3>
              </div>
          </div>
          <nav class="header__nav">
              <ul class="container">
                  <li><a href="history.html" class="p--md">History in the Merrimack River Drainage</a></li>
                  <li><a href="timeline.html" class="p--md">Cultural timeline</a></li>
                  <li><a href="importance-of-sites.html" class="p--md">Importance of Archaeological sites</a></li>
                  <li><a href="finding-and-studying-sites.html" class="p--md">Finding and Studying sites</a></li>
                  <li><a href="learn-more.html" class="p--md">Learn more</a></li>
              </ul>
          </nav>
      </header>
    `;
    this.updateSelectedNavItem();
  }

  updateSelectedNavItem() {
    // Remove the 'selected' class from any existing element
    const existingSelected = this.querySelector('li.selected');
    if (existingSelected) existingSelected.classList.remove('selected');
  
    // Add the 'selected' class to the new selected item
    const newItem = this.querySelector(`a[href="${this._selectedNavItem}"]`);
    if (newItem) newItem.parentElement.classList.add('selected');
  }
}

customElements.define('header-component', Header);