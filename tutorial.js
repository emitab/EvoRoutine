/**
 * EvoRoutine Tutorial Module
 * Interactive onboarding system with i18n support
 */

const Tutorial = {
    // Tutorial state
    isActive: false,
    currentSlide: 0,

    // Check if tutorial has been completed
    hasCompleted: () => {
        return localStorage.getItem('evo_tutorial_completed') === 'true';
    },

    // Mark tutorial as completed
    markCompleted: () => {
        localStorage.setItem('evo_tutorial_completed', 'true');
    },

    // Reset tutorial (for replay)
    reset: () => {
        localStorage.removeItem('evo_tutorial_completed');
    },

    // Tutorial slides content (i18n keys)
    slides: [
        {
            icon: '👋',
            titleKey: 'tut.welcome.title',
            descKey: 'tut.welcome.desc',
            highlight: 'tut.welcome.tip'
        },
        {
            icon: '🎯',
            titleKey: 'tut.goals.title',
            descKey: 'tut.goals.desc',
            highlight: 'tut.goals.tip'
        },
        {
            icon: '⚡',
            titleKey: 'tut.generate.title',
            descKey: 'tut.generate.desc',
            highlight: 'tut.generate.tip'
        },
        {
            icon: '💪',
            titleKey: 'tut.session.title',
            descKey: 'tut.session.desc',
            highlight: 'tut.session.tip'
        },
        {
            icon: '📊',
            titleKey: 'tut.progress.title',
            descKey: 'tut.progress.desc',
            highlight: 'tut.progress.tip'
        },
        {
            icon: '⚙️',
            titleKey: 'tut.settings.title',
            descKey: 'tut.settings.desc',
            highlight: 'tut.settings.tip'
        },
        {
            icon: '🚀',
            titleKey: 'tut.ready.title',
            descKey: 'tut.ready.desc',
            highlight: 'tut.ready.tip'
        }
    ],

    // Show tutorial
    show: () => {
        Tutorial.isActive = true;
        Tutorial.currentSlide = 0;
        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) {
            overlay.classList.add('active');
            Tutorial.renderSlide();
        }
    },

    // Hide tutorial
    hide: () => {
        Tutorial.isActive = false;
        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    },

    // Skip tutorial
    skip: () => {
        Tutorial.markCompleted();
        Tutorial.hide();
    },

    // Next slide
    next: () => {
        if (Tutorial.currentSlide < Tutorial.slides.length - 1) {
            Tutorial.currentSlide++;
            Tutorial.renderSlide();
        } else {
            // Last slide - complete tutorial
            Tutorial.markCompleted();
            Tutorial.hide();
        }
    },

    // Previous slide
    prev: () => {
        if (Tutorial.currentSlide > 0) {
            Tutorial.currentSlide--;
            Tutorial.renderSlide();
        }
    },

    // Render current slide
    renderSlide: () => {
        const slide = Tutorial.slides[Tutorial.currentSlide];
        const container = document.getElementById('tutorial-content');

        if (!container) return;

        const isLast = Tutorial.currentSlide === Tutorial.slides.length - 1;
        const isFirst = Tutorial.currentSlide === 0;

        container.innerHTML = `
            <div class="tutorial-slide animate-in">
                <div class="tutorial-icon">${slide.icon}</div>
                <h2 class="tutorial-title">${I18n.t(slide.titleKey)}</h2>
                <p class="tutorial-desc">${I18n.t(slide.descKey)}</p>
                ${slide.highlight ? `<div class="tutorial-highlight">${I18n.t(slide.highlight)}</div>` : ''}
                
                <div class="tutorial-progress">
                    ${Tutorial.slides.map((_, i) => `
                        <span class="dot ${i === Tutorial.currentSlide ? 'active' : ''}"></span>
                    `).join('')}
                </div>
                
                <div class="tutorial-nav">
                    <button class="btn btn-text" onclick="Tutorial.prev()" 
                        ${isFirst ? 'style="visibility:hidden"' : ''}>
                        ← ${I18n.t('tut.prev')}
                    </button>
                    <button class="btn btn-primary" onclick="Tutorial.next()">
                        ${isLast ? I18n.t('tut.finish') : I18n.t('tut.next')} →
                    </button>
                </div>
            </div>
        `;
    },

    // Check and show tutorial for new users
    checkAndShow: () => {
        if (!Tutorial.hasCompleted()) {
            // Delay slightly to let the hub load
            setTimeout(() => Tutorial.show(), 500);
        }
    }
};

// RPE button click handler
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('rpe-btn')) {
        document.querySelectorAll('.rpe-btn').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});
