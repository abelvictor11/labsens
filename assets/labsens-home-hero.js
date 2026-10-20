if (!customElements.get('labsens-home-hero')) {
  customElements.define('labsens-home-hero', class extends HTMLElement {
    connectedCallback() {
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      this.slides = [...this.querySelectorAll('.labsens-home-hero__slide')];
      this.dots = [...this.querySelectorAll('[data-slide]')];
      this.index = 0;
      this.paused = this.dataset.autoplay !== 'true' || matchMedia('(prefers-reduced-motion: reduce)').matches;
      const pause = this.querySelector('.labsens-home-hero__pause');
      const stop = () => { clearInterval(this.timer); };
      const start = () => { stop(); if (!this.paused && this.slides.length > 1 && !document.hidden && !this.contains(document.activeElement) && !this.matches(':hover')) this.timer = setInterval(() => this.show(this.index + 1), 5000); };
      const interact = (index) => { this.paused = true; stop(); this.show(index); updatePause(); };
      const updatePause = () => { if (pause) { pause.textContent = this.paused ? '▶' : 'Ⅱ'; pause.setAttribute('aria-label', this.paused ? pause.dataset.playLabel : pause.dataset.pauseLabel); } };
      this.querySelector('.labsens-home-hero__prev')?.addEventListener('click', () => interact(this.index - 1), options);
      this.querySelector('.labsens-home-hero__next')?.addEventListener('click', () => interact(this.index + 1), options);
      this.dots.forEach((dot, i) => dot.addEventListener('click', () => interact(i), options));
      pause?.addEventListener('click', () => { this.paused = !this.paused; updatePause(); start(); }, options);
      this.addEventListener('mouseenter', stop, options);
      this.addEventListener('mouseleave', start, options);
      this.addEventListener('focusin', stop, options);
      this.addEventListener('focusout', () => { if (!this.contains(document.activeElement)) start(); }, options);
      document.addEventListener('visibilitychange', start, options);
      this.addEventListener('shopify:block:select', (event) => { const index = this.slides.findIndex(slide => slide.contains(event.target)); if (index >= 0) interact(index); }, options);
      updatePause(); start();
    }
    show(index) {
      if (!this.slides.length) return;
      this.index = (index + this.slides.length) % this.slides.length;
      this.slides.forEach((slide, i) => { slide.hidden = i !== this.index; });
      this.dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === this.index)));
    }
    disconnectedCallback() { clearInterval(this.timer); this.controller?.abort(); }
  });
}
