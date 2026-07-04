/* =========================================================
   Northn Software — app.js
   Dados dos produtos + roteamento (hash) + render das telas
   ========================================================= */

const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="12" rx="2"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16.5" x2="12" y2="20"/></svg>`,
  stock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 7.5 12 3l8.5 4.5V16L12 21l-8.5-5Z"/><path d="M3.5 7.5 12 12l8.5-4.5"/><line x1="12" y1="12" x2="12" y2="21"/></svg>`,
  forms: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l4 4v14H7Z"/><path d="M14 3v4h4"/><line x1="9.5" y1="12" x2="15" y2="12"/><line x1="9.5" y1="15.5" x2="15" y2="15.5"/></svg>`,
  rh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16.5 4.8c1.4.4 2.5 1.7 2.5 3.2s-1.1 2.8-2.5 3.2"/><path d="M18.5 13.7c2 .6 3.5 2.4 3.5 4.6"/></svg>`,
  finance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.3c-.4-.9-1.4-1.4-2.5-1.4-1.5 0-2.6.9-2.6 2s.9 1.7 2.6 2c1.7.3 2.6 1 2.6 2.1 0 1.1-1.1 2-2.6 2-1.2 0-2.1-.5-2.5-1.4"/><line x1="12" y1="6.5" x2="12" y2="17.5"/></svg>`,
  bi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="5" y2="10.5"/><line x1="12" y1="19" x2="12" y2="5"/><line x1="19" y1="19" x2="19" y2="13.5"/><line x1="3" y1="19" x2="21" y2="19"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 13 9.5 17.5 19 7"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><line x1="12" y1="2.5" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21.5" y2="12"/><line x1="5.1" y1="5.1" x2="6.8" y2="6.8"/><line x1="17.2" y1="17.2" x2="18.9" y2="18.9"/><line x1="5.1" y1="18.9" x2="6.8" y2="17.2"/><line x1="17.2" y1="6.8" x2="18.9" y2="5.1"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7l7.4 6a1 1 0 0 0 1.2 0L20 7"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg>`,
};

const PRODUTOS = [
  {
    id: 'menu', codigo: 'MN',
    nome: 'Northn Menu',
    resumo: 'Cardápio digital e pedidos, do link à cozinha.',
    tagline: 'O cardápio que também administra o pedido.',
    descricao: 'Cada loja tem seu próprio cardápio digital, com identidade visual própria e um painel completo para gerenciar produtos, categorias, horários e pedidos — do primeiro clique do cliente até a confirmação na cozinha.',
    features: [
      { t: 'Cardápio por loja', d: 'Identidade visual, categorias e produtos configuráveis por estabelecimento.' },
      { t: 'Pedidos em tempo real', d: 'O pedido chega instantaneamente no painel de quem está operando.' },
      { t: 'Painel de gestão', d: 'Horários, disponibilidade e status do pedido em um só lugar.' },
    ],
  },
  {
    id: 'stock', codigo: 'ST',
    nome: 'Northn Stock',
    resumo: 'Estoque sob controle, sem surpresa no fim do mês.',
    tagline: 'Saiba o que tem, o que falta e o que está parado.',
    descricao: 'Controle de estoque pensado para operação: entradas, saídas e alertas de reposição antes que o item mais vendido acabe. Menos planilha, mais decisão.',
    features: [
      { t: 'Alertas de reposição', d: 'Aviso automático antes de um item crítico zerar.' },
      { t: 'Movimentações rastreadas', d: 'Toda entrada e saída registrada, com histórico consultável.' },
      { t: 'Visão por categoria', d: 'Entenda o que gira rápido e o que está parado no estoque.' },
    ],
  },
  {
    id: 'forms', codigo: 'FR',
    nome: 'Northn Forms',
    resumo: 'Formulários inteligentes para captar dados e leads.',
    tagline: 'Do formulário à resposta, sem fricção.',
    descricao: 'Monte formulários personalizados para captar pedidos, leads ou respostas internas, com lógica condicional e envio direto para quem precisa agir sobre aquele dado.',
    features: [
      { t: 'Construção sem código', d: 'Monte e publique um formulário em minutos.' },
      { t: 'Lógica condicional', d: 'Perguntas que se adaptam à resposta anterior.' },
      { t: 'Respostas organizadas', d: 'Cada envio chega estruturado, pronto para uso.' },
    ],
  },
  {
    id: 'rh', codigo: 'RH',
    nome: 'Northn RH',
    resumo: 'Gestão de pessoas, da admissão ao desempenho.',
    tagline: 'Um lugar só para cuidar de quem faz a operação acontecer.',
    descricao: 'Centraliza admissão, ponto e avaliações de desempenho, dando ao time de gestão uma visão clara de cada pessoa e do time como um todo.',
    features: [
      { t: 'Admissão simplificada', d: 'Documentos e dados do colaborador em um fluxo único.' },
      { t: 'Ponto digital', d: 'Registro de jornada sem planilha paralela.' },
      { t: 'Avaliações de desempenho', d: 'Acompanhamento contínuo, não só uma vez por ano.' },
    ],
  },
  {
    id: 'finance', codigo: 'FN',
    nome: 'Northn Finance',
    resumo: 'Contas a pagar, a receber e caixa em tempo real.',
    tagline: 'Visão clara do caixa, sem esperar o fim do mês.',
    descricao: 'Acompanhe contas a pagar e a receber, fluxo de caixa e projeções, com uma visão financeira que se atualiza junto com a operação — não depois dela.',
    features: [
      { t: 'Fluxo de caixa ao vivo', d: 'Entradas e saídas refletidas assim que acontecem.' },
      { t: 'Contas organizadas', d: 'A pagar e a receber, com vencimento e status visíveis.' },
      { t: 'Projeções simples', d: 'Uma leitura clara de para onde o caixa está indo.' },
    ],
  },
  {
    id: 'bi', codigo: 'BI',
    nome: 'Northn BI',
    resumo: 'Painéis que transformam dado operacional em decisão.',
    tagline: 'Os números da operação, prontos para decidir.',
    descricao: 'Reúne dados dos outros produtos Northn (e de fora deles) em painéis claros, feitos para responder perguntas de gestão rápido — sem exportar planilha.',
    features: [
      { t: 'Painéis prontos', d: 'Indicadores-chave já organizados, sem montar do zero.' },
      { t: 'Dados conectados', d: 'Integra com o restante da suíte Northn automaticamente.' },
      { t: 'Leitura rápida', d: 'Feito para responder "como estamos" em segundos.' },
    ],
  },
];

function render() {
  const hash = window.location.hash.replace('#', '');
  const home = document.getElementById('view-home');
  const detail = document.getElementById('view-detail');

  if (hash === 'contato') {
    detail.innerHTML = renderContato();
    home.classList.remove('active');
    detail.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    setupReveal(detail);
    setupContatoForm();
    return;
  }

  const produto = PRODUTOS.find(p => p.id === hash);
  if (produto) {
    detail.innerHTML = renderDetail(produto);
    home.classList.remove('active');
    detail.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    setupReveal(detail);
  } else {
    home.classList.add('active');
    detail.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }
}

/* Observa elementos .reveal e os revela ao entrar na viewport */
const revealObserver = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 })
  : null;

function setupReveal(scope) {
  const els = scope.querySelectorAll('.reveal');
  els.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('visible');
  });
}

function renderHome() {
  return `
    <div class="hero" id="hero">
      <div class="hero-spotlight" id="heroSpotlight"></div>
      <div class="ring-wrap">
        <div class="ring-outer"></div>
        <div class="ring"></div>
        <div class="ring-inner"></div>
        <svg class="logo-mark" viewBox="0 0 70 62" aria-label="Northn">
          <path fill="url(#northnGrad)" d="M38.6,4.1 L31.5,4.0 L4.0,52.5 L6.3,57.8 L14.8,56.6 L39.9,11.4 Z"/>
          <path fill="url(#northnGrad)" d="M41.3,16.1 L38.0,21.5 L37.9,26.1 L55.0,57.6 L62.6,57.8 L65.0,52.8 L44.6,16.0 Z"/>
          <path fill="url(#northnGrad)" d="M21.9,56.1 L23.8,58.0 L45.1,58.0 L47.7,54.4 L44.4,48.0 L26.8,46.9 L24.1,49.3 Z"/>
        </svg>
      </div>
      <div class="eyebrow-word">Northn Software</div>
      <h1>Direção inteligente.<br><span class="grad">Resultados reais.</span></h1>
      <p class="sub">Um núcleo, seis produtos. Cada um resolve uma parte real da operação — do pedido ao caixa, do time ao painel de indicadores.</p>
      <a href="#contato" class="cta-btn">${ICONS.mail} Falar com a gente</a>
    </div>

    <div style="width:100%;max-width:760px;">
      <div class="grid-label">Produtos</div>
      <div class="grid">
        ${PRODUTOS.map(p => `
          <a href="#${p.id}" class="tile">
            <span class="tile-code">${p.codigo}</span>
            <div class="tile-icon">${ICONS[p.id]}</div>
            <h3>${p.nome}</h3>
            <p>${p.resumo}</p>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="values">
      <span>Direção</span><span>Visão</span><span>Crescimento</span><span>Propósito</span>
    </div>
    <p class="footer-note">© Northn Software</p>
  `;
}

function renderDetail(p) {
  const outros = PRODUTOS.filter(x => x.id !== p.id);
  return `
    <a href="#" class="back-btn glass">${ICONS.chevronLeft} Todos os produtos</a>
    <div class="detail">
      <div class="detail-icon">${ICONS[p.id]}</div>
      <div class="detail-code">Módulo · ${p.codigo}</div>
      <h2>${p.nome}</h2>
      <p class="tagline">${p.tagline}</p>
      <p class="desc">${p.descricao}</p>

      <div class="features">
        ${p.features.map(f => `
          <div class="feature reveal">
            <span class="dot">${ICONS.check}</span>
            <p><strong>${f.t}.</strong> ${f.d}</p>
          </div>
        `).join('')}
      </div>

      <div class="divider"></div>
      <div class="other-label">Outros produtos</div>
      <div class="other-links">
        ${outros.map(o => `<a href="#${o.id}" class="other-link">${o.nome.replace('Northn ', '')}</a>`).join('')}
      </div>
    </div>
  `;
}

function renderContato() {
  return `
    <a href="#" class="back-btn glass">${ICONS.chevronLeft} Voltar</a>
    <div class="detail" style="max-width:440px;">
      <div class="detail-icon">${ICONS.mail}</div>
      <div class="detail-code">Fale com a gente</div>
      <h2>Vamos conversar</h2>
      <p class="desc" style="margin-bottom:8px;">Conte um pouco sobre o que você precisa — a gente responde rapidinho.</p>

      <form class="contact-form reveal" id="contatoForm" novalidate style="margin-top:28px;">
        <div class="field" data-field="nome">
          <label for="ctNome">Nome</label>
          <input type="text" id="ctNome" name="nome" placeholder="Seu nome" autocomplete="name">
          <span class="field-error-msg">Digite seu nome.</span>
        </div>
        <div class="field" data-field="email">
          <label for="ctEmail">E-mail</label>
          <input type="email" id="ctEmail" name="email" placeholder="voce@email.com" autocomplete="email">
          <span class="field-error-msg">Digite um e-mail válido.</span>
        </div>
        <div class="field" data-field="telefone">
          <label for="ctTelefone">Telefone</label>
          <input type="tel" id="ctTelefone" name="telefone" placeholder="(00) 00000-0000" autocomplete="tel" inputmode="numeric" maxlength="16">
          <span class="field-error-msg">Digite um telefone válido.</span>
        </div>
        <div class="field" data-field="mensagem">
          <label for="ctMensagem">Mensagem</label>
          <textarea id="ctMensagem" name="mensagem" placeholder="Como podemos ajudar?"></textarea>
        </div>

        <button type="submit" class="btn-load" id="ctSubmitBtn">
          <span class="fill"></span>
          <span class="btn-label" id="ctLabel">Enviar</span>
          <span class="btn-check">${ICONS.check}</span>
        </button>
        <p class="form-note" id="ctNote">Protótipo de demonstração — nenhum dado é enviado de verdade.</p>
      </form>
    </div>
  `;
}

function maskTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function setupContatoForm() {
  const form = document.getElementById('contatoForm');
  if (!form) return;
  const btn = document.getElementById('ctSubmitBtn');
  const label = document.getElementById('ctLabel');
  const note = document.getElementById('ctNote');
  const telInput = document.getElementById('ctTelefone');

  telInput.addEventListener('input', () => {
    telInput.value = maskTelefone(telInput.value);
  });

  function setErro(campo, temErro, mensagemCustom) {
    const field = form.querySelector(`[data-field="${campo}"]`);
    if (!field) return;
    field.classList.toggle('error', temErro);
    if (temErro && mensagemCustom) field.querySelector('.field-error-msg').textContent = mensagemCustom;
  }

  form.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => setErro(inp.name, false));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (btn.classList.contains('is-loading') || btn.classList.contains('is-success')) return;

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();

    const nomeOk = nome.length >= 2;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const telefoneOk = telefone.replace(/\D/g, '').length >= 8;

    setErro('nome', !nomeOk);
    setErro('email', !emailOk);
    setErro('telefone', !telefoneOk);

    if (!nomeOk || !emailOk || !telefoneOk) {
      const primeiroErro = form.querySelector('.field.error input');
      if (primeiroErro) primeiroErro.focus();
      return;
    }

    btn.classList.add('is-loading');
    btn.disabled = true;
    label.innerHTML = `<span class="btn-load-spinner"></span> Enviando...`;

    setTimeout(() => {
      btn.classList.remove('is-loading');
      btn.classList.add('is-success');
      form.querySelectorAll('input, textarea').forEach(el => el.disabled = true);
      if (note) {
        note.textContent = 'Mensagem enviada! Em breve alguém da equipe entra em contato.';
        note.classList.add('is-success');
      }
    }, 1500);
  });
}

document.getElementById('view-home').innerHTML = renderHome();
window.addEventListener('hashchange', render);
render();

/* =========================================================
   Tema claro / escuro
   ========================================================= */
(function setupTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const btnDark = toggle.querySelector('[data-theme-btn="dark"]');
  const btnLight = toggle.querySelector('[data-theme-btn="light"]');
  btnDark.innerHTML = ICONS.moon;
  btnLight.innerHTML = ICONS.sun;

  function aplicar(tema) {
    root.setAttribute('data-theme', tema);
    toggle.setAttribute('data-pos', tema === 'light' ? '1' : '0');
    btnDark.classList.toggle('is-active', tema === 'dark');
    btnLight.classList.toggle('is-active', tema === 'light');
  }

  // Tema claro como padrão
  aplicar('light');

  btnDark.addEventListener('click', () => aplicar('dark'));
  btnLight.addEventListener('click', () => aplicar('light'));
})();

/* =========================================================
   Spotlight do hero (segue o cursor)
   ========================================================= */
(function setupHeroSpotlight() {
  const hero = document.getElementById('hero');
  const spot = document.getElementById('heroSpotlight');
  if (!hero || !spot) return;
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
    spot.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
})();

/* =========================================================
   Tilt 3D nos cards de produto (segue o cursor, estilo Apple)
   ========================================================= */
(function setupTileTilt() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.style.transition = 'transform 0.5s ' + getComputedStyle(document.documentElement).getPropertyValue('--ease-spring') + ', border-color 0.3s, background 0.3s';

    tile.addEventListener('mousemove', (e) => {
      const r = tile.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tile.style.transition = 'transform 0.12s linear';
      tile.style.transform = `perspective(1200px) rotateX(${py * -7}deg) rotateY(${px * 9}deg) translateY(-4px) scale(1.015)`;
    });
    tile.addEventListener('mouseleave', () => {
      tile.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s, background 0.3s';
      tile.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });
})();

/* =========================================================
   Barra superior — reage ao scroll
   ========================================================= */
(function setupTopbarScroll() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;
  window.addEventListener('scroll', () => {
    topbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();
