/**
 * ==============================================================================
 * RETRO DESKTOP OS - WINDOW & APPLICATION CONTROLLER
 * ==============================================================================
 * Connects the UI to PORTFOLIO_CONTENT defined in content.js.
 * Handles accessible modal opening, closing, keyboard shortcuts, and live clock.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if content configuration exists
  if (typeof PORTFOLIO_CONTENT === 'undefined') {
    console.error('PORTFOLIO_CONTENT is not defined. Ensure content.js is loaded before app.js.');
    return;
  }

  // DOM Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const retroWindow = document.getElementById('retroWindow');
  const windowTitle = document.getElementById('windowTitle');
  const windowBody = document.getElementById('windowBody');
  const windowStatusMsg = document.getElementById('windowStatusMsg');
  const btnClose = document.getElementById('btnClose');
  const folderButtons = document.querySelectorAll('[data-folder]');
  const taskbarActiveText = document.getElementById('taskbarActiveText');
  const clockElement = document.getElementById('clockDisplay');
  const studentMetaHeader = document.getElementById('studentMetaHeader');
  const portfolioTagline = document.getElementById('portfolioTagline');
  const githubLink = document.getElementById('dockGithubLink');
  const linkedinLink = document.getElementById('dockLinkedinLink');
  const widgetGreeting = document.getElementById('widgetGreeting');
  const widgetBio = document.getElementById('widgetBio');
  const widgetPinnedPhoto = document.getElementById('widgetPinnedPhoto');

  let lastFocusedElement = null;
  let currentOpenSection = null;

  // Initialize Home Screen Meta & Social Links from content.js
  function initHeaderAndLinks() {
    if (studentMetaHeader && PORTFOLIO_CONTENT.meta) {
      studentMetaHeader.textContent = `${PORTFOLIO_CONTENT.meta.studentName} // ${PORTFOLIO_CONTENT.meta.gradYear}`;
    }
    if (portfolioTagline && PORTFOLIO_CONTENT.meta) {
      portfolioTagline.textContent = `${PORTFOLIO_CONTENT.meta.degree} (${PORTFOLIO_CONTENT.meta.gradYear}) · ${PORTFOLIO_CONTENT.meta.university} — ${PORTFOLIO_CONTENT.meta.tagline}`;
    }
    if (widgetGreeting && PORTFOLIO_CONTENT.meta && PORTFOLIO_CONTENT.meta.welcomeGreeting) {
      widgetGreeting.textContent = PORTFOLIO_CONTENT.meta.welcomeGreeting;
    }
    if (widgetBio && PORTFOLIO_CONTENT.meta && PORTFOLIO_CONTENT.meta.welcomeNote) {
      widgetBio.textContent = PORTFOLIO_CONTENT.meta.welcomeNote;
    }
    if (widgetPinnedPhoto && PORTFOLIO_CONTENT.meta && PORTFOLIO_CONTENT.meta.pinnedPhoto) {
      widgetPinnedPhoto.src = PORTFOLIO_CONTENT.meta.pinnedPhoto;
      widgetPinnedPhoto.style.display = 'block';
      const fallback = widgetPinnedPhoto.nextElementSibling;
      if (fallback && fallback.classList.contains('badge-fallback-avatar')) {
        fallback.style.display = 'none';
      }
    }
    if (githubLink && PORTFOLIO_CONTENT.links) {
      githubLink.href = PORTFOLIO_CONTENT.links.github;
    }
    if (linkedinLink && PORTFOLIO_CONTENT.links) {
      linkedinLink.href = PORTFOLIO_CONTENT.links.linkedin;
    }
  }

  // Live Taskbar Clock (HH:MM:SS format)
  function updateClock() {
    if (!clockElement) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Content Builders for each folder
  const contentBuilders = {
    profile: () => {
      const data = PORTFOLIO_CONTENT.profile;
      const paragraphs = data.bio.map(p => `<p class="bio-paragraph">${escapeHtml(p)}</p>`).join('');
      
      const detailsList = data.details.map(item => `
        <div class="meta-pill">
          <span class="meta-label">${escapeHtml(item.label)}</span>
          <span style="font-weight: 600;">${escapeHtml(item.value)}</span>
        </div>
      `).join('');

      const certBadges = (data.certifications || []).map(c => `
        <span class="tech-tag" style="background-color: var(--olive-200); border-color: var(--olive-900); font-weight: 700;">
          &#10003; ${escapeHtml(c)}
        </span>
      `).join('');

      const courseworkBadges = (data.coursework || []).map(c => `
        <span class="tech-tag" style="background-color: var(--bg-cream-elevated); border-color: var(--olive-600);">
          ${escapeHtml(c)}
        </span>
      `).join('');

      const techBadges = data.skills.technical.map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('');
      const toolBadges = data.skills.systemsAndTools.map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('');
      const photoSrc = data.photo || 'photo.jpg';
      const captionText = data.photoCaption || 'Fisayo Oyolola';

      return `
        <div class="profile-header-container">
          <div class="retro-user-badge">
            <div class="badge-photo-frame">
              <img src="${escapeHtml(photoSrc)}" alt="${escapeHtml(captionText)} headshot" class="badge-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="badge-fallback-avatar" aria-hidden="true" style="display: none;">
                <span>FO</span>
              </div>
            </div>
            <div class="badge-caption">${escapeHtml(captionText)}</div>
          </div>

          <div class="profile-header-text">
            <div class="profile-badge-pill" role="status">
              <span class="pulse-dot" aria-hidden="true"></span>
              <span>SYS_ID: USER // VERIFIED_IDENTITY</span>
            </div>
            <h2 class="section-headline">${escapeHtml(data.heading)}</h2>
            <p class="section-subheadline">${escapeHtml(data.subheading)}</p>
          </div>
        </div>
        <hr class="content-divider" />
        
        <div class="bio-content">
          ${paragraphs}
        </div>

        <div class="profile-meta-grid">
          ${detailsList}
        </div>

        ${certBadges ? `
          <hr class="content-divider" />
          <h3 class="skill-title">Industry Certifications</h3>
          <div class="pill-list" style="margin-bottom: 1.25rem;">${certBadges}</div>
        ` : ''}

        ${courseworkBadges ? `
          <h3 class="skill-title">Relevant Information Systems Coursework</h3>
          <div class="pill-list" style="margin-bottom: 1.25rem;">${courseworkBadges}</div>
        ` : ''}

        <hr class="content-divider" />
        <h3 class="skill-title">Programming & Quantitative Skills</h3>
        <div class="pill-list" style="margin-bottom: 1rem;">${techBadges}</div>

       <h3 class="skill-title">Systems, Software & Network Inspection Tools</h3>
        <div class="pill-list">${toolBadges}</div>
      `;
    },

    research: () => {
      const data = PORTFOLIO_CONTENT.research;
      const researchItems = data.items.map(item => {
        const tagElements = (item.tags || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');
        const hasExternalLink = item.linkUrl && item.linkUrl !== '#';

        const itemImages = (item.images || (item.image ? [item.image] : [])).map(img => {
          if (typeof img === 'string') return { src: img, alt: item.title, fit: 'cover' };
          return { src: img.src, alt: img.alt || item.title, fit: img.fit || 'cover' };
        });

        const mediaHtml = itemImages.length ? `
          <div class="experience-media">
            ${itemImages.map(img => `
              <button type="button" class="experience-photo-btn update-photo-btn${img.fit === 'contain' ? ' is-contain' : ''}" data-full="${escapeHtml(img.src)}" data-alt="${escapeHtml(img.alt)}" aria-label="Enlarge photo: ${escapeHtml(img.alt)}">
                <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" class="experience-photo" loading="lazy" />
              </button>
            `).join('')}
          </div>
        ` : '';

        return `
          <article class="item-card">
            <div class="item-card-header">
              <h3 class="item-title">${escapeHtml(item.title)}</h3>
              <span class="item-date-badge">${escapeHtml(item.period)}</span>
            </div>
           
            <p class="item-submeta">${escapeHtml(item.role)} &bull; ${escapeHtml(item.lab)} &bull; ${escapeHtml(item.advisors)}</p>
            
            <div class="experience-card-body${!itemImages.length ? ' no-media' : ''}">
              ${mediaHtml}
              <div class="experience-content">
                <p class="item-summary">${escapeHtml(item.summary)}</p>
                <div class="pill-list" style="margin: 0.6rem 0;">${tagElements}</div>
              </div>
            </div>
           
            <div class="item-card-footer" style="justify-content: flex-end;">
              ${hasExternalLink ? `
                <a href="${escapeHtml(item.linkUrl)}" class="retro-action-btn" target="_blank" rel="noopener noreferrer">
                  ${escapeHtml(item.linkText)} &rarr;
                </a>
              ` : `
                <span class="retro-action-btn" style="cursor: default; opacity: 0.85;">
                  &#128274; ${escapeHtml(item.linkText || 'Institutional Experience')}
                </span>
              `}
            </div>
          </article>
        `;
      }).join('');

      return `
        <h2 class="section-headline">${escapeHtml(data.heading)}</h2>
        <p class="section-subheadline">${escapeHtml(data.intro)}</p>
        <hr class="content-divider" />
        <div class="research-list">
          ${researchItems}
        </div>
      `;
    },

    projects: () => {
      const data = PORTFOLIO_CONTENT.projects;
      const updateItems = data.items.map(item => {
        const tagElements = (item.tags || item.technologies || []).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');
        const hasExternalLink = item.linkUrl && item.linkUrl !== '#';

        return `
          <article class="item-card">
            <div class="item-card-header">
              <div>
                <h3 class="item-title">${escapeHtml(item.title || item.name)}</h3>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--olive-600);">${escapeHtml(item.category)}</span>
              </div>
              <span class="item-date-badge">${escapeHtml(item.date || item.year)}</span>
            </div>
            ${item.images && item.images.length ? `
              <div class="update-gallery">
                ${item.images.map(img => `
                  <button type="button" class="update-photo-btn${img.fit === 'contain' ? ' is-contain' : ''}" data-full="${escapeHtml(img.src)}" data-alt="${escapeHtml(img.alt || '')}" aria-label="Enlarge photo: ${escapeHtml(img.alt || 'photo')}">
                    <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || '')}" class="update-photo" loading="lazy" />
                  </button>
                `).join('')}
              </div>
            ` : ''}
            <p class="item-summary">${escapeHtml(item.summary || item.description)}</p>
            ${item.highlights && item.highlights.length ? `
              <h4 class="update-subhead">Session highlights</h4>
              <ul class="highlight-list">
                ${item.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
              </ul>
            ` : ''}

            <div class="pill-list" style="margin: 0.6rem 0;">${tagElements}</div>
            ${hasExternalLink ? `
              <div class="item-card-footer" style="justify-content: flex-end;">
                <a href="${escapeHtml(item.linkUrl)}" class="retro-action-btn" target="_blank" rel="noopener noreferrer">
                  ${escapeHtml(item.linkText || 'Learn More')} &rarr;
                </a>
              </div>
            ` : ''}
          </article>
        `;
      }).join('');

      return `
        <h2 class="section-headline">${escapeHtml(data.heading)}</h2>
        <p class="section-subheadline">${escapeHtml(data.intro)}</p>
        <hr class="content-divider" />
        <div class="updates-list">
          ${updateItems}
        </div>
      `;
    },

    awards: () => {
      const data = PORTFOLIO_CONTENT.awards;
      const awardCards = data.items.map((award, idx) => `
        <div class="award-card">
          <div class="award-badge-icon" aria-hidden="true">&#9733;</div>
          <div class="award-details">
            <h3 class="item-title">${escapeHtml(award.title)}</h3>
            <div class="award-badges">
              <span class="item-date-badge">${escapeHtml(award.date)}</span>
            </div>
            <p class="item-submeta" style="margin-bottom: 0.4rem;">Issuer: ${escapeHtml(award.issuer)}</p>
            <p class="item-summary" style="margin-bottom: 0;">${escapeHtml(award.description)}</p>
          </div>
        </div>
      `).join('');

      return `
        <h2 class="section-headline">${escapeHtml(data.heading)}</h2>
        <p class="section-subheadline">${escapeHtml(data.intro)}</p>
        <hr class="content-divider" />
        <div class="awards-list">
          ${awardCards}
        </div>
      `;
    },

    contact: () => {
      const data = PORTFOLIO_CONTENT.contact;
      const contactCards = data.contactMethods.map(method => `
        <div class="contact-card">
          <span class="contact-label">${escapeHtml(method.label)}</span>
          ${method.action ? `
            <a href="${escapeHtml(method.action)}" class="contact-value" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(method.value)}
            </a>
          ` : `
            <span class="contact-value">${escapeHtml(method.value)}</span>
          `}
        </div>
      `).join('');

      return `
        <h2 class="section-headline">${escapeHtml(data.heading)}</h2>
        <p class="section-subheadline">${escapeHtml(data.intro)}</p>
        <hr class="content-divider" />

        <div class="resume-callout">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--olive-900); margin-bottom: 0.2rem;">
              ${escapeHtml(data.resumeSection.headline)}
            </h3>
            <p style="font-size: 0.88rem; color: var(--olive-700);">
              ${escapeHtml(data.resumeSection.description)}
            </p>
          </div>
          <a href="${escapeHtml(PORTFOLIO_CONTENT.links.resumePdf || 'resume.pdf')}" class="retro-action-btn" download="${escapeHtml(data.resumeSection.fileName || 'Oluwafisayomi_Oyolola_Resume.pdf')}" target="_blank" rel="noopener noreferrer" style="background-color: var(--olive-100);">
            &#128196; ${escapeHtml(data.resumeSection.downloadText)}
          </a>
        </div>

        <h3 class="skill-title">Direct Communication & Verification</h3>
        <div class="contact-channels-grid">
          ${contactCards}
        </div>

        <div style="margin-top: 1.25rem; padding: 0.85rem; background-color: var(--bg-cream-elevated); border: 1px dashed var(--olive-600); font-size: 0.85rem; color: var(--olive-700);">
          <strong>Note:</strong> ${escapeHtml(data.quickMessageNotice)}
        </div>
      `;
    }
  };

  // Helper function to escape HTML special characters
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Open Window Handler
  function openWindow(sectionKey) {
    const builder = contentBuilders[sectionKey];
    if (!builder) return;

    lastFocusedElement = document.activeElement;
    currentOpenSection = sectionKey;

    // Retrieve configured window title
    const sectionData = PORTFOLIO_CONTENT[sectionKey];
    const titleText = sectionData ? sectionData.windowTitle : `${sectionKey.toUpperCase()}.SYS`;
    
    windowTitle.textContent = titleText;
    windowBody.innerHTML = builder();
    windowStatusMsg.textContent = `STATUS: 200 OK // [${sectionKey.toUpperCase()}] LOADED`;
    windowBody.scrollTop = 0;

    // Show modal
    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    retroWindow.setAttribute('aria-label', titleText);

    // Update bottom taskbar active window tag
    if (taskbarActiveText) {
      taskbarActiveText.textContent = `[ACTIVE: ${titleText}]`;
      taskbarActiveText.style.display = 'inline-block';
    }

    // Set focus inside the window for accessibility
    setTimeout(() => {
      btnClose.focus();
    }, 50);

    // Add keyboard trap listener
    document.addEventListener('keydown', handleKeydown);
  }

  // Close Window Handler
  function closeWindow() {
    if (!modalOverlay.classList.contains('is-active')) return;

    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');

    if (taskbarActiveText) {
      taskbarActiveText.textContent = '';
      taskbarActiveText.style.display = 'none';
    }

    document.removeEventListener('keydown', handleKeydown);

    // Return focus to the folder button that triggered it
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
    currentOpenSection = null;
  }

  // Keyboard navigation & accessibility (Escape closes window, Tab trapping)
  function handleKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeWindow();
      return;
    }

    // Focus Trap inside the retro window
    if (e.key === 'Tab') {
      const focusables = retroWindow.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  // Event Listeners for Folder Buttons
  folderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = button.getAttribute('data-folder');
      openWindow(targetSection);
    });

    // Also support Space and Enter on folders
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const targetSection = button.getAttribute('data-folder');
        openWindow(targetSection);
      }
    });
  });

  // Photo lightbox (click a photo in Updates to enlarge it)
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Enlarged photo');
  lightbox.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close photo">&#10005;</button><img class="lightbox-img" alt="" />';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector('.lightbox-img');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-active');
    lightbox.querySelector('.lightbox-close').focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('is-active');
    lightboxImg.removeAttribute('src');
  }
  windowBody.addEventListener('click', (e) => {
    const btn = e.target.closest('.update-photo-btn, .experience-photo-btn');
    if (btn) openLightbox(btn.getAttribute('data-full'), btn.getAttribute('data-alt'));
  });
  lightbox.addEventListener('click', closeLightbox);
  // Capture phase so Escape closes the photo first, not the whole window
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      e.stopImmediatePropagation();
      e.preventDefault();
      closeLightbox();
    }
  }, true);

  // Close button trigger
  btnClose.addEventListener('click', closeWindow);

  // Close when clicking modal backdrop outside the window
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeWindow();
    }
  });

  // Run initialization
  initHeaderAndLinks();
});
