/* ─────────────────────────────────────────────────────────────
   Section Snap-Scroll (desktop only)
   Self-contained module: hijacks wheel/keyboard on wide, fine-pointer
   screens so one scroll gesture glides exactly one section at a time
   (Home → About → My Skills → Works → Contact → footer), triggering a
   cinematic "wow" entrance on the incoming section. Overflow-aware:
   sections taller than the viewport scroll internally first, then snap.
   Touch / small screens keep native scrolling untouched.
   ───────────────────────────────────────────────────────────── */
(function () {
    'use strict';

    var sections = Array.prototype.slice.call(document.querySelectorAll('section'));
    if (!sections.length) return;

    var mq = window.matchMedia('(min-width: 969px) and (hover: hover) and (pointer: fine)');
    var enabled = false;
    var isAnimating = false;
    var wheelAccum = 0;
    var wheelIdleTimer = null;

    var SECTION_DURATION = 850;
    var INNER_DURATION = 600;
    var WHEEL_THRESHOLD = 28;

    function modalOpen() {
        var m = document.getElementById('modal');
        return !!(m && m.classList.contains('active'));
    }

    function sectionTop(s) {
        return s.getBoundingClientRect().top + window.scrollY;
    }

    function maxScroll() {
        return document.documentElement.scrollHeight - window.innerHeight;
    }

    function currentSectionIndex() {
        var mid = window.innerHeight * 0.5;
        var idx = 0;
        sections.forEach(function (s, i) {
            if (s.getBoundingClientRect().top <= mid) idx = i;
        });
        return idx;
    }

    /* Custom eased scroll so we control timing exactly (native smooth is
       disabled while snap mode is active to avoid double-animation). */
    function animateScrollTo(targetY, duration, onDone) {
        targetY = Math.max(0, Math.min(targetY, maxScroll()));
        var startY = window.scrollY;
        var diff = targetY - startY;
        if (Math.abs(diff) < 2) { if (onDone) onDone(); return; }
        var start = null;
        isAnimating = true;

        function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -9 * t); }

        function step(ts) {
            if (start === null) start = ts;
            var t = Math.min((ts - start) / duration, 1);
            window.scrollTo(0, startY + diff * easeOutExpo(t));
            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                isAnimating = false;
                wheelAccum = 0;
                if (onDone) onDone();
            }
        }
        requestAnimationFrame(step);
    }

    /* Re-trigger the entrance cascade for a section. */
    function triggerWow(section) {
        sections.forEach(function (s) { s.classList.remove('section-wow'); });

        var reveals = section.querySelectorAll('.reveal');
        reveals.forEach(function (el) {
            el.classList.remove('visible');
            el.style.removeProperty('--reveal-delay');
        });

        // force reflow so removing/re-adding the class restarts the animation
        void section.offsetWidth;

        reveals.forEach(function (el, i) {
            el.style.setProperty('--reveal-delay', Math.min(i * 70, 700) + 'ms');
        });
        section.classList.add('section-wow');

        requestAnimationFrame(function () {
            reveals.forEach(function (el) { el.classList.add('visible'); });
            // replay skill bars inside this section (if any)
            section.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
                var w = bar.getAttribute('data-width');
                if (!w) return;
                bar.style.width = '0%';
                setTimeout(function () { bar.style.width = w + '%'; }, 320);
            });
        });
    }

    function goToSection(index) {
        index = Math.max(0, Math.min(index, sections.length - 1));
        var target = sections[index];
        triggerWow(target);
        animateScrollTo(sectionTop(target), SECTION_DURATION);
    }

    function navigate(dir) {
        if (isAnimating) return;

        var idx = currentSectionIndex();
        var cur = sections[idx];
        var viewport = window.innerHeight;
        var curHeight = cur.offsetHeight;
        var last = sections[sections.length - 1];

        // If we've drifted into the footer and scroll up, return to the last
        // section first instead of skipping it.
        var inFooter = (window.scrollY + viewport) > (sectionTop(last) + last.offsetHeight + 8);
        if (dir < 0 && inFooter) {
            animateScrollTo(sectionTop(last), INNER_DURATION);
            return;
        }

        // Overflow-aware: scroll inside a too-tall section before leaving it.
        if (curHeight > viewport + 4) {
            var innerMax = curHeight - viewport;
            var rel = -cur.getBoundingClientRect().top; // 0 .. innerMax
            if (dir > 0 && rel < innerMax - 4) {
                animateScrollTo(sectionTop(cur) + innerMax, INNER_DURATION);
                return;
            }
            if (dir < 0 && rel > 4) {
                animateScrollTo(sectionTop(cur), INNER_DURATION);
                return;
            }
        }

        var next = idx + dir;

        // Past the last section → reveal the footer; before the first → top.
        if (next > sections.length - 1) {
            if (window.scrollY < maxScroll() - 4) animateScrollTo(maxScroll(), INNER_DURATION);
            return;
        }
        if (next < 0) {
            if (window.scrollY > 4) animateScrollTo(0, INNER_DURATION);
            return;
        }

        goToSection(next);
    }

    function onWheel(e) {
        if (!enabled || modalOpen()) return;

        // Don't trap scrolling inside form fields (e.g. a tall textarea).
        var t = e.target;
        if (t && t.closest && t.closest('textarea, input, select, [contenteditable="true"]')) return;

        e.preventDefault();
        if (isAnimating) return;

        var delta = e.deltaY;
        if (e.deltaMode === 1) delta *= 16;        // lines
        else if (e.deltaMode === 2) delta *= window.innerHeight; // pages

        if (Math.sign(delta) !== Math.sign(wheelAccum)) wheelAccum = 0;
        wheelAccum += delta;

        clearTimeout(wheelIdleTimer);
        wheelIdleTimer = setTimeout(function () { wheelAccum = 0; }, 200);

        if (Math.abs(wheelAccum) < WHEEL_THRESHOLD) return;
        var dir = wheelAccum > 0 ? 1 : -1;
        wheelAccum = 0;
        navigate(dir);
    }

    function isInteractive(el) {
        if (!el) return false;
        var t = el.tagName;
        return t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT' ||
               t === 'BUTTON' || t === 'A' || el.isContentEditable;
    }

    function onKey(e) {
        if (!enabled || modalOpen() || isInteractive(document.activeElement)) return;
        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault(); navigate(1); break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault(); navigate(-1); break;
            case ' ':
            case 'Spacebar':
                e.preventDefault(); navigate(e.shiftKey ? -1 : 1); break;
            case 'Home':
                e.preventDefault(); goToSection(0); break;
            case 'End':
                e.preventDefault(); goToSection(sections.length - 1); break;
            default: break;
        }
    }

    // Route the existing nav-dot helper through the snap engine on desktop.
    var originalScrollToSection = window.scrollToSection;
    window.scrollToSection = function (id) {
        if (!enabled) {
            if (originalScrollToSection) originalScrollToSection(id);
            return;
        }
        var idx = -1;
        sections.forEach(function (s, i) { if (s.id === id) idx = i; });
        if (idx >= 0) goToSection(idx);
        else if (originalScrollToSection) originalScrollToSection(id);
    };

    function setEnabled(on) {
        if (on === enabled) return;
        enabled = on;
        var root = document.documentElement;
        if (on) {
            root.classList.add('snap-active');
            window.addEventListener('wheel', onWheel, { passive: false });
            window.addEventListener('keydown', onKey);
        } else {
            root.classList.remove('snap-active');
            sections.forEach(function (s) { s.classList.remove('section-wow'); });
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKey);
            isAnimating = false;
            wheelAccum = 0;
        }
    }

    if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', function (e) { setEnabled(e.matches); });
    } else if (typeof mq.addListener === 'function') {
        mq.addListener(function (e) { setEnabled(e.matches); });
    }

    setEnabled(mq.matches);
})();
