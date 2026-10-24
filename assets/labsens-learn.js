if (!customElements.get('labsens-learn')) {
  customElements.define('labsens-learn', class extends HTMLElement {
    connectedCallback() {
      this.controller = new AbortController();
      const filters = this.querySelector('fieldset');
      if (!filters) return;
      filters.hidden = false;
      const update = () => {
        const selected = [...filters.querySelectorAll('input:checked')].map(input => input.value);
        let count = 0;
        this.querySelectorAll('article').forEach(article => {
          article.hidden = selected.length > 0 && !selected.includes(article.dataset.category);
          if (!article.hidden) count++;
        });
        const status = this.querySelector('[data-count]');
        status.textContent = `${status.dataset.label}: ${count}`;
      };
      update();
      filters.addEventListener('change', update, { signal: this.controller.signal });
      this.addEventListener('shopify:block:select', () => {
        filters.querySelectorAll('input').forEach(input => { input.checked = false; });
        update();
      }, { signal: this.controller.signal });
    }
    disconnectedCallback() { this.controller?.abort(); }
  });
}
