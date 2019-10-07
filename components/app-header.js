(function() {
  class AppHeaderElement extends HTMLElement {
    constructor() {
      super();
  
      var shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
      <link rel="stylesheet" href="../appstyle.css">
  
      <style>
        div {
          height: 100%;
          padding-left: 1%;
        }
  
        a:link, a:visited {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 2.5em;
          font-weight: bold;
          font-style: italic;
          font-variant: small-caps;
          color: var(--primary-muted-color);
          text-decoration: none;
          opacity: 1.0;
        }
  
        a:hover, a:active {
          color: var(--primary-color);
          text-decoration: none;
        }
      </style>
  
      <div>
        <a href="/">Mesmerize</a>
      </div>
  
      `;
    }
  }
  
  customElements.define('app-header', AppHeaderElement);
})();