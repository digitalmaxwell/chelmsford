class Header extends HTMLElement {
  constructor() {
      super();
      this._selectedNavItem = null;
      this._isNavOpen = false;
      this._toggleButton = null;
  }

  static get observedAttributes() {
      return ['selected-nav-item'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'selected-nav-item') {
          this.selectedNavItem = newValue;
      }
  }

  connectedCallback() {
      this.render();
      this.addEventListeners();
      this.updateSelectedNavItem();
  }

  render() {
      this.innerHTML = `
          <header>
              <div class="header__nativeAmericans">
                  <h3>Native Americans</h3>
              </div>
              <nav class="header__nav">
                  <div class="toggle-button">
                      <div class="bars">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                      </div>
                  </div>
                  <ul class="container">
                      <li><a class="p--md" href="history.html">History in the Merrimack River Drainage</a></li>
                      <li><a class="p--md" href="timeline.html">Cultural timeline</a></li>
                      <li><a class="p--md" href="importance-of-sites.html">Importance of Archaeological sites</a></li>
                      <li><a class="p--md" href="finding-and-studying-sites.html">Finding and Studying sites</a></li>
                      <li><a class="p--md" href="learn-more.html">Learn more</a></li>
                  </ul>
              </nav>
          </header>
      `;
  }

  addEventListeners() {
      this._toggleButton = this.querySelector('.toggle-button');
      this._toggleButton.addEventListener('click', this.toggleNav.bind(this));
  }

  toggleNav() {
      this._isNavOpen = !this._isNavOpen;
      this.querySelector('.header__nav ul').classList.toggle('nav-open', this._isNavOpen);
      this._toggleButton.classList.toggle('active', this._isNavOpen);
  }

  updateSelectedNavItem() {
      const existingSelected = this.querySelector('li.selected');
      if (existingSelected) existingSelected.classList.remove('selected');

      const newItem = this.querySelector(`a[href="${this._selectedNavItem}"]`);
      if (newItem) newItem.parentElement.classList.add('selected');
  }

  get selectedNavItem() {
      return this._selectedNavItem;
  }

  set selectedNavItem(value) {
      this._selectedNavItem = value;
      this.updateSelectedNavItem();
  }
}

customElements.define('header-component', Header);
