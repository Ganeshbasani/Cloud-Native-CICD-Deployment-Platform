(() => {
  const pageContent = document.getElementById('pageContent');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
  const sidebar = document.getElementById('sidebar');
  const mobileOverlay = document.getElementById('mobileOverlay');

  const pages = {
    overview: ['Overview', 'Monitor your pipelines, deployments, builds, and environments.', 'overviewTemplate'],
    pipelines: ['Pipelines', 'Build and manage automated delivery workflows across your projects.', 'pipelinesTemplate'],
    projects: ['Projects', 'Applications and repositories connected to this deployment workspace.', 'projectsTemplate'],
    builds: ['Builds', 'Review recent build activity, durations, and outcomes.', 'buildsTemplate'],
    deployments: ['Deployments', 'Track application releases across your environments.', 'deploymentsTemplate'],
    environments: ['Environments', 'Review service health, releases, and runtime availability.', 'environmentsTemplate'],
    logs: ['Logs', 'Inspect technical output from the latest application deployment.', 'logsTemplate'],
    settings: ['Settings', 'Manage workspace defaults and notification preferences.', 'settingsTemplate'],
  };

  function renderPage(pageKey) {
    const page = pages[pageKey] || pages.overview;
    pageTitle.textContent = page[0];
    pageSubtitle.textContent = page[1];
    breadcrumbCurrent.textContent = page[0];

    const template = document.getElementById(page[2]);
    pageContent.innerHTML = '';
    pageContent.appendChild(template.content.cloneNode(true));

    document.querySelectorAll('.nav-item').forEach((item) => {
      item.classList.toggle('active', item.dataset.page === pageKey);
      item.setAttribute('aria-current', item.dataset.page === pageKey ? 'page' : 'false');
    });

    document.querySelectorAll('[data-page-link]').forEach((button) => {
      button.addEventListener('click', () => renderPage(button.dataset.pageLink));
    });

    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeMobileNav() {
    sidebar.classList.remove('open');
    mobileOverlay.classList.remove('show');
  }

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => renderPage(item.dataset.page));
  });

  document.getElementById('mobileMenu').addEventListener('click', () => {
    sidebar.classList.add('open');
    mobileOverlay.classList.add('show');
  });
  document.getElementById('sidebarClose').addEventListener('click', closeMobileNav);
  mobileOverlay.addEventListener('click', closeMobileNav);

  document.getElementById('globalSearch').addEventListener('keydown', (event) => {
    if (event.key === 'Escape') event.target.blur();
    if (event.key === 'Enter' && event.target.value.trim()) {
      alert(`Search is ready for: ${event.target.value.trim()}`);
    }
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      const search = document.getElementById('globalSearch');
      search.focus();
    }
  });

  document.getElementById('newPipelineButton').addEventListener('click', () => {
    alert('New Pipeline workflow can be connected to your Jenkins/API layer here.');
  });

  async function refreshRuntime() {
    try {
      const response = await fetch('/api/status', { headers: { Accept: 'application/json' } });
      if (!response.ok) return;
      const data = await response.json();
      const environment = document.getElementById('runtimeEnvironment');
      const version = document.getElementById('runtimeVersion');
      if (environment) environment.textContent = data.environment || window.RUNTIME.environment;
      if (version) version.textContent = data.version || window.RUNTIME.version;
    } catch (error) {
      // Keep the last known render state when the API is unavailable.
    }
  }

  renderPage('overview');
  refreshRuntime();
})();
