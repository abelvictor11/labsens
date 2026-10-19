if (!customElements.get('labsens-header')) {
  customElements.define('labsens-header', class extends HTMLElement {
    connectedCallback() {
      this.setAttribute('data-enhanced', '');
      this.controller = new AbortController();
      const { signal } = this.controller;
      const toggle = this.querySelector('.labsens-header__toggle');
      const close = () => { this.removeAttribute('data-menu-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); };
      toggle.addEventListener('click', () => { const open = !this.hasAttribute('data-menu-open'); this.toggleAttribute('data-menu-open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); }, { signal });
      this.addEventListener('keydown', (event) => { if (event.key !== 'Escape') return; const details = event.target.closest('details[open]'); if (details) { details.open = false; details.querySelector('summary').focus(); } else if (this.hasAttribute('data-menu-open')) { close(); toggle.focus(); } }, { signal });
      document.addEventListener('click', (event) => { if (this.contains(event.target)) return; close(); this.querySelectorAll('details[open]').forEach(item => { item.open = false; }); }, { signal });
      this.querySelectorAll('.labsens-nav__dropdown').forEach((details) => {
        details.querySelector('summary').addEventListener('click', (event) => { if (event.detail > 0 && window.innerWidth > 767) { event.preventDefault(); this.querySelectorAll('.labsens-nav__dropdown').forEach(item => { item.open = item === details; }); } }, { signal });
        details.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse' && window.innerWidth > 767) details.open = true; }, { signal });
        details.addEventListener('pointerleave', (event) => { if (event.pointerType === 'mouse' && !details.contains(document.activeElement)) details.open = false; }, { signal });
      });
      const measure = () => {
        const mainHeight = this.querySelector('.labsens-header__main').offsetHeight;
        const announcementHeight = this.querySelector('.labsens-header__announcement')?.offsetHeight || 0;
        const navHeight = this.querySelector('.labsens-nav').offsetHeight;
        const mobile = window.innerWidth <= 767;
        const sticky = window.scrollY > (mobile ? 46 : mainHeight + announcementHeight);
        this.classList.toggle('labsens-header--mobile-stuck', mobile && sticky);
        this.classList.toggle('labsens-header--stuck', !mobile && sticky);
        this.dataset.stickyState = sticky ? 'active' : 'inactive';
        this.style.setProperty('--labsens-nav-height', `${navHeight}px`);
        document.body.style.setProperty('--header-height', `${sticky ? (mobile ? 50 : navHeight) : mainHeight + announcementHeight + (mobile ? 0 : navHeight)}px`);
        document.body.style.setProperty('--header-group-height', `${mainHeight + announcementHeight + (mobile ? 0 : navHeight)}px`);
      };
      window.addEventListener('scroll', measure, { signal, passive: true });
      window.addEventListener('resize', () => { close(); measure(); }, { signal, passive: true });
      this.observer = new ResizeObserver(measure); this.observer.observe(this.querySelector('.labsens-header__main')); measure();
    }
    disconnectedCallback() { this.controller?.abort(); this.observer?.disconnect(); }
  });
}
