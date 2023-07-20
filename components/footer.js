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
                <ul class="footer__nav">
                    <li><a href="mailto:Historical.Commission@ChelmsfordMA.Gov" target="_blank">Contact Commissioner</a></li>
                    <li><a href="https://www.townofchelmsford.us">Return to the Town Website</a></li>
                    <li><a href="https://www.chelmsfordgov.com/CHCwebsite/Links.htm" target="_blank">Helpful Links</a></li>
                </ul>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);