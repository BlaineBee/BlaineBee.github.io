/* blainebee.github.io — small enhancements. The site works without this file;
   it just adds animation, filtering, a table of contents, and copy buttons. */
(function () {
  'use strict';
  window.__siteJs = true;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  /* Header gets a border once you scroll */
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  const toggle = $('.nav-toggle');
  const nav = $('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !open);
    });
  }

  /* Fade elements in as they scroll into view */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* Lab index: search + difficulty + tool filters, built from the cards themselves */
  const grid = $('[data-card-grid]');
  const filters = $('[data-filters]');
  if (grid && filters) {
    const cards = $$('.writeup-card', grid);
    const state = { difficulty: null, tools: null, q: '' };
    const order = ['Easy', 'Medium', 'Hard', 'Insane'];

    const difficulties = [...new Set(cards.map((c) => c.dataset.difficulty).filter(Boolean))]
      .sort((a, b) => order.indexOf(a) - order.indexOf(b));
    const toolCounts = {};
    cards.forEach((c) => (c.dataset.tools || '').split('|').filter(Boolean)
      .forEach((t) => { toolCounts[t] = (toolCounts[t] || 0) + 1; }));
    const tools = Object.keys(toolCounts).sort((a, b) => toolCounts[b] - toolCounts[a] || a.localeCompare(b)).slice(0, 12);

    const buildChips = (group, values) => {
      const wrap = $(`[data-filter-group="${group}"]`, filters);
      if (!wrap) return;
      if (!values.length) { wrap.closest('.filter-row').hidden = true; return; }
      values.forEach((v) => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'chip'; b.textContent = v;
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', () => {
          const on = state[group] === v;
          state[group] = on ? null : v;
          $$('.chip', wrap).forEach((x) => x.setAttribute('aria-pressed', String(x === b && !on)));
          apply();
        });
        wrap.appendChild(b);
      });
    };
    buildChips('difficulty', difficulties);
    buildChips('tools', tools);

    const input = $('[data-search-input]', filters);
    const count = $('[data-count]');
    const empty = $('[data-empty]');
    const apply = () => {
      let shown = 0;
      cards.forEach((c) => {
        const ok = (!state.difficulty || c.dataset.difficulty === state.difficulty)
          && (!state.tools || (c.dataset.tools || '').split('|').includes(state.tools))
          && (!state.q || (c.dataset.search || '').toLowerCase().includes(state.q));
        c.classList.toggle('is-hidden', !ok);
        if (ok) shown++;
      });
      if (count) count.textContent = shown;
      if (empty) empty.hidden = shown !== 0;
      $$('[data-series-block]', grid).forEach((b) => {
        b.hidden = !$$('.writeup-card', b).some((c) => !c.classList.contains('is-hidden'));
      });
    };
    if (input) input.addEventListener('input', () => { state.q = input.value.trim().toLowerCase(); apply(); });
    const clear = $('[data-clear]');
    if (clear) clear.addEventListener('click', () => {
      state.difficulty = state.tools = null; state.q = '';
      if (input) input.value = '';
      $$('.chip', filters).forEach((x) => x.setAttribute('aria-pressed', 'false'));
      apply();
    });
  }

  /* Write-up pages: build "On this page" from the ## headings, highlight while reading */
  const prose = $('[data-prose]');
  const toc = $('[data-toc]');
  if (prose && toc) {
    const heads = $$('h2', prose);
    if (heads.length >= 2) {
      const list = $('ol', toc);
      heads.forEach((h, i) => {
        if (!h.id) h.id = 'section-' + (i + 1);
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id; a.textContent = h.textContent;
        li.appendChild(a); list.appendChild(li);
      });
      toc.hidden = false;
      const links = $$('a', toc);
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
          }
        });
      }, { rootMargin: '-80px 0px -70% 0px' });
      heads.forEach((h) => spy.observe(h));
    }
  }

  /* Click a screenshot to see it full size; Esc or click to close */
  $$('.prose p > img').forEach((img) => {
    img.addEventListener('click', () => {
      const box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-label', img.alt || 'Screenshot');
      const big = document.createElement('img');
      big.src = img.currentSrc || img.src; big.alt = img.alt;
      const close = document.createElement('button');
      close.type = 'button'; close.className = 'lightbox-close'; close.setAttribute('aria-label', 'Close'); close.textContent = '×';
      box.append(big, close);
      document.body.appendChild(box);
      requestAnimationFrame(() => box.classList.add('is-open'));
      close.focus();
      const shut = () => { box.remove(); document.removeEventListener('keydown', onKey); img.focus && img.focus(); };
      const onKey = (e) => { if (e.key === 'Escape') shut(); };
      box.addEventListener('click', shut);
      document.addEventListener('keydown', onKey);
    });
  });

  /* Copy buttons on code blocks */
  $$('.prose pre').forEach((pre) => {
    const host = pre.closest('.highlighter-rouge') || pre;
    let wrap = host;
    if (!host.classList.contains('highlighter-rouge')) {
      wrap = document.createElement('div');
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);
    }
    wrap.classList.add('code-wrap');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'copy-btn'; btn.textContent = 'Copy';
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pre.innerText.replace(/\n$/, ''));
        btn.textContent = 'Copied'; btn.classList.add('is-copied');
      } catch (e) { btn.textContent = 'Press Ctrl+C'; }
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 1600);
    });
    wrap.appendChild(btn);
  });
})();
