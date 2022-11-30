class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav>
      <a href="/">Home</a>
      <a href="/pages/data-types.html" aria-current="page">Data Types</a>
      <a href="/pages/variables.html" aria-current="page">Variables</a>
      <a href="/pages/operators.html" aria-current="page">Operators</a>
      <a href="/pages/activity.html" aria-current="page">Activity</a>
    </nav>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
