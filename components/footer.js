class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <p class="p--sm">Webpage content provided by Suzanne Cherau, Erin Flynn, Dianna Doucette, and Duncan Ritchie (The Public Archaeology Laboratory, Inc.) with editorial contributions by Edward L. Bell, (Massachusetts Historical Commission); and Kathleen Philp and Kimberly Demuro (FEMA). Final version, June 2023.</p>
                <hr/>
            </div>
            <ul class="footer__nav">
                <li><a href="/#">Contact Commissioner</a></li>
                <li><a href="/#">Return to the Town Website</a></li>
                <li><a href="/#">Helpful Links</a></li>
            </ul>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);