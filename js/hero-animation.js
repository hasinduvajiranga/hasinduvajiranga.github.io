// ── Hero Title: Code-style Decode Animation ─────────────────────────
// Injects a terminal-style comment line above the hero title and
// decodes "Senior Software Engineer" character by character with
// random code glyphs, finishing with an accent underline scan.
(function initHeroCodeAnimation() {
    function boot() {
        const heroContent = document.querySelector('.hero-content');
        const title = heroContent && heroContent.querySelector('h1');
        if (!title || title.classList.contains('scramble-title')) return;

        // Terminal-style comment line typed above the title
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.setAttribute('aria-hidden', 'true');
        codeLine.innerHTML = '<span class="code-prompt">&gt;_</span><span class="code-comment"></span><span class="code-cursor"></span>';
        title.parentNode.insertBefore(codeLine, title);

        // Keep the original markup (with the accent <span>) as the final state
        title.classList.add('scramble-title');
        const finalHTML = title.innerHTML;

        // Split "Senior Software Engineer" into per-character spans
        const text = title.textContent.trim();
        const accentWord = 'Engineer';
        const chars = [];
        title.innerHTML = '';
        let accentSpan = null;
        text.split('').forEach(ch => {
            if (ch === accentWord[0] && !accentSpan) {
                accentSpan = document.createElement('span');
                title.appendChild(accentSpan);
            }
            const charEl = document.createElement('span');
            charEl.className = 'scramble-char';
            charEl.textContent = ch === ' ' ? '\u00A0' : ch;
            (accentSpan || title).appendChild(charEl);
            chars.push(charEl);
        });

        // Random glyphs that "compile" into the real character
        const glyphs = '{}[]<>/\\|;:=+*#$%&_01ABCDEFXYZ';
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let running = false;

        function runDecode() {
            chars.forEach((el, i) => {
                setTimeout(() => {
                    let ticks = 0;
                    const spinner = setInterval(() => {
                        el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
                        el.style.opacity = '1';
                        if (++ticks > 4) {
                            clearInterval(spinner);
                            el.textContent = text[i] === ' ' ? '\u00A0' : text[i];
                            el.classList.add('decoded');
                        }
                    }, 40);
                }, i * 45);
            });
            // Restore original markup (accent span) once decoded, then draw underline
            setTimeout(() => {
                title.innerHTML = finalHTML;
                title.classList.add('scramble-done');
            }, chars.length * 45 + 600);
        }

        function typeComment() {
            const commentEl = codeLine.querySelector('.code-comment');
            const comment = '// building scalable systems & clean code';
            let i = 0;
            (function typeChar() {
                if (i <= comment.length) {
                    commentEl.textContent = comment.slice(0, i++);
                    setTimeout(typeChar, 30 + Math.random() * 50);
                }
            })();
        }

        function start() {
            if (running) return;
            running = true;
            if (prefersReducedMotion) {
                title.innerHTML = finalHTML;
                title.classList.add('scramble-done');
                codeLine.querySelector('.code-comment').textContent = '// building scalable systems & clean code';
                return;
            }
            setTimeout(runDecode, 300);
            setTimeout(typeComment, 600);
        }

        // Start once the hero section is revealed on screen
        const revealEl = title.closest('.reveal');
        if (revealEl) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        io.disconnect();
                        start();
                    }
                });
            }, { threshold: 0.2 });
            io.observe(revealEl);
        } else {
            start();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();

// ── Hero Portrait: Dev-Themed Animation ────────────────────────────
// Replaces the plain dotted rings with a code/radar aesthetic:
//   • ring 1 → dashed "compile" ring
//   • ring 2 → radar sweep with a glowing blip dot
//   • ring 3 → dashed orbit path carrying floating code chips (</>, { }, [ ])
//   • accent scanline sweeps down the profile image (code review scan)
//   • one-shot glitch "decode" on the portrait when the hero enters view
//   • terminal status pill (`● status: shipping code_`) under the portrait
//   • ambient glow breathes like a running process
// CSS is injected from JS so no other files need to be touched.
(function initHeroPortraitAnimation() {
    const CSS = [
        '/* ring 1 — dashed compile ring */',
        '.hero-circle-container .hero-ring-1{border:2px dashed var(--accent)!important;opacity:.45;animation:rotate 24s linear infinite}',
        '.hero-circle-container:hover .hero-ring-1{inset:-20px;opacity:.85;border-color:var(--accent-hover)!important}',
        '/* ring 2 — radar sweep with blip */',
        '.hero-circle-container .hero-ring-2{border:3px solid transparent!important;background:conic-gradient(from 0deg,transparent 0 285deg,var(--accent-light) 335deg,var(--accent) 360deg) border-box;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask-composite:exclude;animation:rotate 4s linear infinite;opacity:.9}',
        '.hero-circle-container .hero-ring-2::after{content:"";position:absolute;top:-4px;left:50%;width:8px;height:8px;margin-left:-4px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}',
        '.hero-circle-container:hover .hero-ring-2{inset:-38px;animation-duration:2.4s}',
        '/* ring 3 — dashed orbit path */',
        '.hero-circle-container .hero-ring-3{border:1px dashed var(--border)!important;opacity:1;animation:rotateReverse 30s linear infinite}',
        '.hero-circle-container:hover .hero-ring-3{inset:-56px;border-color:var(--accent)!important}',
        '/* orbiting code chips */',
        '.hero-orbit-chip{position:absolute;z-index:3;display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:50px;border:1px solid var(--border);background:var(--bg-secondary);font-family:"JetBrains Mono","Fira Code","Courier New",monospace;font-size:.72rem;font-weight:600;color:var(--accent);white-space:nowrap;box-shadow:0 4px 14px rgba(0,0,0,.18);opacity:0;transform:scale(.6);transition:opacity .5s ease,transform .5s cubic-bezier(.34,1.56,.64,1),border-color .3s ease,box-shadow .3s ease;pointer-events:none}',
        '.hero-orbit-chip .chip-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0}',
        '.hero-chip-1{top:-16px;left:50%}',
        '.hero-chip-2{bottom:8%;left:-30px}',
        '.hero-chip-3{bottom:8%;right:-30px}',
        '.hero-orbit-live .hero-orbit-chip{opacity:1;transform:scale(1)}',
        '.hero-orbit-live .hero-chip-1{animation:hero-chip-bob 3.4s ease-in-out infinite}',
        '.hero-orbit-live .hero-chip-2{animation:hero-chip-bob 3.4s ease-in-out 1.1s infinite}',
        '.hero-orbit-live .hero-chip-3{animation:hero-chip-bob 3.4s ease-in-out 2.2s infinite}',
        '.hero-circle-container:hover .hero-orbit-chip{border-color:var(--accent);box-shadow:0 0 16px var(--accent-light)}',
        '@keyframes hero-chip-bob{0%,100%{margin-top:0}50%{margin-top:-9px}}',
        '/* code scanline sweeping the portrait */',
        '.hero-scanline{position:absolute;left:0;right:0;top:-30%;height:28%;z-index:4;pointer-events:none;background:linear-gradient(to bottom,transparent,var(--accent-light) 55%,transparent);border-bottom:1px solid var(--accent);opacity:0}',
        '.hero-orbit-live .hero-scanline{animation:hero-scan 4.5s cubic-bezier(.4,0,.2,1) infinite}',
        '@keyframes hero-scan{0%{top:-30%;opacity:0}10%{opacity:.9}50%{opacity:.9}60%,100%{top:105%;opacity:0}}',
        '/* one-shot glitch decode on the portrait */',
        '.hero-portrait-boot .hero-profile-img{animation:hero-portrait-decode 1s steps(2,end) 1}',
        '@keyframes hero-portrait-decode{0%{transform:translateX(-5px) skewX(1.5deg);filter:blur(2px);opacity:.3}25%{transform:translateX(4px);filter:blur(0);opacity:.75}50%{transform:translateX(-3px) skewX(-1deg);opacity:.5}75%{transform:translateX(2px);opacity:.9}100%{transform:translateX(0);opacity:1}}',
        '/* breathing ambient glow */',
        '.hero-circle-container .hero-glow{animation:hero-glow-pulse 4s ease-in-out infinite}',
        '.hero-circle-container:hover .hero-glow{animation:none}',
        '@keyframes hero-glow-pulse{0%,100%{opacity:.12}50%{opacity:.26}}',
        '/* terminal status pill */',
        '.hero-status-pill{position:absolute;bottom:-20px;left:50%;transform:translateX(-50%) translateY(8px);z-index:5;display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:50px;border:1px solid var(--border);background:var(--bg-secondary);font-family:"JetBrains Mono","Fira Code","Courier New",monospace;font-size:.72rem;white-space:nowrap;color:var(--text-secondary);opacity:0;transition:opacity .6s ease .4s,transform .6s cubic-bezier(.34,1.56,.64,1) .4s,border-color .3s ease;pointer-events:none}',
        '.hero-status-pill .status-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);animation:hero-status-blink 1.6s ease-in-out infinite}',
        '.hero-status-pill .status-cursor{display:inline-block;width:7px;height:13px;background:var(--accent);animation:hero-cursor-blink 1s step-end infinite}',
        '.hero-orbit-live .hero-status-pill{opacity:1;transform:translateX(-50%) translateY(0)}',
        '.hero-circle-container:hover .hero-status-pill{border-color:var(--accent)}',
        '@keyframes hero-status-blink{0%,100%{opacity:1;box-shadow:0 0 0 0 var(--accent-light)}50%{opacity:.5;box-shadow:0 0 0 5px transparent}}',
        '@keyframes hero-cursor-blink{0%,100%{opacity:1}50%{opacity:0}}',
        '/* responsive overrides (win over style.css media rules via !important + later order) */',
        '@media (max-width:968px){.hero-circle-container .hero-ring{border-width:2px!important}.hero-circle-container .hero-ring-1{inset:-12px}.hero-circle-container .hero-ring-2{inset:-24px}.hero-circle-container .hero-ring-3{inset:-36px}.hero-orbit-chip{font-size:.66rem;padding:4px 10px}}',
        '@media (max-width:600px){.hero-circle-container .hero-ring-1{inset:-10px}.hero-circle-container .hero-ring-2{inset:-20px}.hero-circle-container .hero-ring-3{inset:-30px}.hero-chip-2{left:-14px}.hero-chip-3{right:-14px}.hero-status-pill{font-size:.62rem;padding:5px 12px}}',
        '@media (prefers-reduced-motion:reduce){.hero-circle-container .hero-ring-1,.hero-circle-container .hero-ring-2,.hero-circle-container .hero-ring-3,.hero-circle-container .hero-glow,.hero-orbit-live .hero-orbit-chip,.hero-orbit-live .hero-scanline,.hero-portrait-boot .hero-profile-img,.hero-status-pill .status-dot,.hero-status-pill .status-cursor{animation:none!important}.hero-scanline{display:none}.hero-orbit-live .hero-orbit-chip{opacity:1;transform:none}.hero-orbit-live .hero-status-pill{opacity:1;transform:translateX(-50%)}}'
    ].join('\n');

    function boot() {
        const container = document.querySelector('.hero-circle-container');
        if (!container || container.querySelector('.hero-orbit-chip')) return;

        // Inject styles once
        if (!document.getElementById('hero-portrait-anim-css')) {
            const style = document.createElement('style');
            style.id = 'hero-portrait-anim-css';
            style.textContent = CSS;
            document.head.appendChild(style);
        }

        // Floating code chips on the orbit path
        const chips = [
            { cls: 'hero-chip-1', dot: true, label: '&lt;/&gt;' },
            { cls: 'hero-chip-2', dot: false, label: '{ }' },
            { cls: 'hero-chip-3', dot: false, label: '[ ]' }
        ];
        chips.forEach(chip => {
            const el = document.createElement('span');
            el.className = 'hero-orbit-chip ' + chip.cls;
            el.setAttribute('aria-hidden', 'true');
            el.innerHTML = (chip.dot ? '<span class="chip-dot"></span>' : '') + chip.label;
            container.appendChild(el);
        });

        // Scanline lives inside the circular mask so it clips to the portrait
        const circle = container.querySelector('.hero-circle');
        if (circle) {
            const scan = document.createElement('span');
            scan.className = 'hero-scanline';
            scan.setAttribute('aria-hidden', 'true');
            circle.appendChild(scan);
        }

        // Terminal status pill under the portrait
        const pill = document.createElement('span');
        pill.className = 'hero-status-pill';
        pill.setAttribute('aria-hidden', 'true');
        pill.innerHTML = '<span class="status-dot"></span>status: shipping code<span class="status-cursor"></span>';
        container.appendChild(pill);

        function start() {
            container.classList.add('hero-orbit-live');
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                container.classList.add('hero-portrait-boot');
                container.addEventListener('animationend', function cleanup(e) {
                    if (e.animationName === 'hero-portrait-decode') {
                        container.classList.remove('hero-portrait-boot');
                        container.removeEventListener('animationend', cleanup);
                    }
                });
            }
        }

        // Fire once the hero visual is on screen
        const revealEl = container.closest('.reveal');
        if (revealEl && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        io.disconnect();
                        start();
                    }
                });
            }, { threshold: 0.3 });
            io.observe(revealEl);
        } else {
            start();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();

// ── Back to Top Button (theme-matched, with scroll progress ring) ────
(function initBackToTop() {
    function boot() {
        let btn = document.getElementById('backToTop');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'backToTop';
            btn.className = 'back-to-top';
            btn.setAttribute('aria-label', 'Back to top');
            btn.innerHTML = '<svg class="btt-progress" viewBox="0 0 54 54" aria-hidden="true"><circle cx="27" cy="27" r="25"></circle></svg><i class="fas fa-arrow-up"></i>';
            document.body.appendChild(btn);
        }
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        const ring = btn.querySelector('.btt-progress circle');
        const circumference = 2 * Math.PI * 25; // r = 25

        function update() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            btn.classList.toggle('visible', scrollTop > 400);
            if (ring) {
                ring.style.strokeDashoffset = circumference - (circumference * percent) / 100;
            }
        }

        window.addEventListener('scroll', update, { passive: true });
        update();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
