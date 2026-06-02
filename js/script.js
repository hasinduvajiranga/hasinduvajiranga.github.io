// Project Data
        const projects = [
            {
                title: "Talent Match AI – Recruitment Platform",
                category: "AI & Full Stack",
                show_btn:false,
                icon: "fas fa-brain",
                gradient: "linear-gradient(135deg, #667eea, #764ba2)",
                desc: "An AI-powered recruitment assistant that extracts resume data with 92% accuracy and uses semantic similarity to match the right candidates to job descriptions. It implements predictive analytics to forecast candidate success by analyzing role fit, tenure patterns, and career trajectories, backed by a real time HR dashboard.",
                tags: ["Spring Boot", "Vue.js", "Python", "spaCy", "Transformers", "LLaMA CPP", "Mistral", "Docker"],
                images: [
                    "images/projects/wa-works/dashboard-d.png",
                    "images/projects/wa-works/dashboard-l.png",
                    "images/projects/wa-works/departments.png",
                    "images/projects/wa-works/leaves.png",
                    "images/projects/wa-works/login.png",
                    "images/projects/wa-works/talents.png"
                ]
            },
            {
                title: "Blaze Entertainment – Ticketing Platform",
                show_btn:false,
                category: "Full Stack Web",
                icon: "fas fa-ticket-alt",
                gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
                desc: "A responsive SaaS ticketing platform built using Laravel and PHP. Designed tailored workflows and interactive dashboards for three distinct roles: customers, merchants, and admins. Integrates secure online booking, real time sales tracking, instant e-ticket delivery, and automatic deployment pipelines. Optimized SQL query performance, cutting page load times by 45%.",
                tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "CI/CD"],
                images: [
                    "images/projects/blaze/1.png",
                    "images/projects/blaze/2.png",
                    "images/projects/blaze/3.png",
                    "images/projects/blaze/4.png"
                ]
            },
            {
                title: "Coin-Xata",
                show_btn:true,
                category: "Full Stack Web",
                icon: "fas fa-wallet",
                gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
                desc: "CoinXata is a high-performance financial management application built with Laravel 12, Inertia.js, and Vue 3. It features a professional architecture utilizing the Repository Pattern and Service Layer for scalable, decoupled design. The sleek, dark-mode UI leverages Tailwind CSS v4 with glassmorphism effects, offering an intuitive experience across Dashboard, Accounts, Transactions, Budgets, and Analytics screens. Security is ensured via AES-256-GCM encryption for all sensitive data. Key capabilities include automated recurring transactions, real-time balance synchronization, and interactive Chart.js visualizations. Designed for efficiency, CoinXata provides comprehensive financial tracking, smart budgeting, and robust reporting tools for modern personal finance management.",
                tags: ["Laravel", "Vue", "Tailwind CSS","Inertia.js", "MySQL"],
                images: [
                    "images/projects/coin-xata/accounts.png",
                    "images/projects/coin-xata/analytics.png",
                    "images/projects/coin-xata/budget.png",
                    "images/projects/coin-xata/dashboard.png",
                    "images/projects/coin-xata/setting.png",
                    "images/projects/coin-xata/transaction-model.png",
                    "images/projects/coin-xata/transactions-list.png"
                ],
                git_repo: "https://github.com/hasinduvajiranga/coin-xata",
                video_link:""
            },
            {
                title: "Aroma-Xata",
                show_btn:false,
                category: "AI & Full Stack",
                icon: "fas fa-university",
                gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
                desc: "AromaXata is an AI powered perfume formulation platform merging aromachology with machine learning. Built with Laravel, Livewire, Tailwind CSS, and a Python backend Fast API, it enables users to craft custom scents via a dynamic Formulation Lab. Features include a filtered Raw Materials Library, real time concentration adjustments, and AI driven scent profile predictions with IFRA safety compliance. The responsive, glassmorphism-styled interface offers dark/light modes and interactive Chart.js visualizations, ensuring a seamless, secure experience for creating personalized fragrance profiles with precision and scientific accuracy.",
                tags: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "PostgreSQL", "Python","LLaMA CPP", "Qwen AI"],
                images: [
                    "images/projects/aroma-xata/3.png",
                    "images/projects/aroma-xata/2.png",
                    "images/projects/aroma-xata/4.png",
                    "images/projects/aroma-xata/5.png",
                    "images/projects/aroma-xata/6.png",
                    "images/projects/aroma-xata/1.png",
                ]
            },
            {
                title: "Tea Leaf",
                show_btn:false,
                category: "Mobile App and Web App",
                icon: "fas fa-mobile-alt",
                gradient: "linear-gradient(135deg, #fa709a, #fee140)",
                desc: "Tea Leaf is a streamlined mobile application designed for tea collectors to efficiently manage leaf procurement. It ensures accurate, real time recording of quantities delivered to factories, guaranteeing data integrity even if QR codes are missing. The user friendly interface simplifies the collection process, while integrated SMS notifications instantly inform farmers of their tea unit’s value and transaction details post-sale. This solution bridges the gap between collectors and factories, providing transparency, reliability, and immediate financial feedback to empower tea growers.",
                tags: ["Angular", "Spring Boot", "Android Studio", "MySql"],
                images: ["images/projects/tea-leaf/2.png","images/projects/tea-leaf/1.png"]
            },
            {
                title: "The Coffee 69",
                show_btn:true,
                category: "Full Stack Web",
                icon: "fas fa-robot",
                gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
                desc: "The Coffee 69 is a premium e-commerce platform offering curated coffee collections, including Nescafé and Maccona, imported from Australia and the Netherlands. The customer facing site delivers a seamless shopping experience for high quality blends. Powered by a robust admin panel, the system features comprehensive dashboard analytics, efficient order management, user administration, and dynamic product control. This dual interface architecture ensures smooth operations and inventory tracking, allowing The Coffee 69 to consistently deliver exceptional flavor and service with every sip.",
                tags: ["Laravel", "Tailwind CSS", "MySql", "Blade"],
                images: [
                    "images/projects/the-coffee-69/2.png",
                    "images/projects/the-coffee-69/3.png",
                    "images/projects/the-coffee-69/4.png",
                    "images/projects/the-coffee-69/5.png",
                    "images/projects/the-coffee-69/6.png",
                    "images/projects/the-coffee-69/7.png",
                    "images/projects/the-coffee-69/1.png",
                    "images/projects/the-coffee-69/main.png"],
                git_repo: "",
                video_link:"https://thecoffee69.com/"
            }
        ];

        // Cursor
        const cursor = document.querySelector('.cursor');
        const cursorRing = document.querySelector('.cursor-ring');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 4 + 'px';
            cursor.style.top = e.clientY - 4 + 'px';
            cursorRing.style.left = e.clientX + 'px';
            cursorRing.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .work-card, .nav-dot').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // Scroll Functions
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Active Nav on Scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navDots = document.querySelectorAll('.nav-dot');
            const scrollProgress = document.querySelector('.scroll-progress');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 300;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('data-label').toLowerCase() === current) {
                    dot.classList.add('active');
                }
            });

            // Scroll Progress
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });

        // Cookie Helpers
        function setCookie(name, value, days = 365) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "; expires=" + date.toUTCString();
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        }

        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        // Initialize Theme controls on load
        function initThemeAndColorControls() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const currentColor = document.documentElement.getAttribute('data-color') || 'green';

            // Set button icon
            const themeIcon = document.querySelector('.theme-controls .theme-btn i');
            if (themeIcon) {
                themeIcon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            }

            // Set active dot
            document.querySelectorAll('.color-opt').forEach(opt => {
                opt.classList.remove('active');
                if (opt.getAttribute('data-color') === currentColor) {
                    opt.classList.add('active');
                }
            });
        }

        // Run initialization once controls are loaded
        document.addEventListener('DOMContentLoaded', initThemeAndColorControls);

        // Theme Toggle
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            setCookie('portfolio-theme', newTheme);
            document.querySelector('.theme-controls .theme-btn i').className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Color Picker
        function toggleColorPicker() {
            document.querySelector('.color-picker').classList.toggle('active');
        }

        function changeColor(color) {
            document.documentElement.setAttribute('data-color', color);
            setCookie('portfolio-color', color);
            document.querySelectorAll('.color-opt').forEach(opt => opt.classList.remove('active'));
            document.querySelector(`.color-opt[data-color="${color}"]`).classList.add('active');
        }

        // Reveal Animation
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Animate skill bars when visible
                    const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 300);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Modal
        // Modal & Image Slider Logic
        let currentSlideIndex = 0;
        let activeProjectImages = [];

        function renderModalSlider() {
            const container = document.getElementById('modalMediaContainer');
            container.innerHTML = '';

            const dotsContainer = document.getElementById('modalSliderDots');
            dotsContainer.innerHTML = '';
            dotsContainer.style.display = 'none';

            if (!activeProjectImages || activeProjectImages.length === 0) {
                container.style.display = 'none';
                return;
            }

            container.style.display = 'block';

            // Create Slider Container
            const slider = document.createElement('div');
            slider.className = 'modal-slider';

            activeProjectImages.forEach(imgSrc => {
                const slide = document.createElement('div');
                slide.className = 'modal-slide';
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Project Screenshot';
                slide.appendChild(img);
                slider.appendChild(slide);
            });

            container.appendChild(slider);

            // Add Navigation Buttons if multiple images
            if (activeProjectImages.length > 1) {
                const prevBtn = document.createElement('button');
                prevBtn.className = 'slider-btn prev';
                prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
                prevBtn.onclick = () => moveSlide(-1);

                const nextBtn = document.createElement('button');
                nextBtn.className = 'slider-btn next';
                nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
                nextBtn.onclick = () => moveSlide(1);

                dotsContainer.style.display = 'flex';
                activeProjectImages.forEach((_, idx) => {
                    const dot = document.createElement('div');
                    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
                    dot.onclick = () => goToSlide(idx);
                    dotsContainer.appendChild(dot);
                });

                container.appendChild(prevBtn);
                container.appendChild(nextBtn);
            }

            currentSlideIndex = 0;
            updateSlidePosition();
        }

        function moveSlide(direction) {
            currentSlideIndex = (currentSlideIndex + direction + activeProjectImages.length) % activeProjectImages.length;
            updateSlidePosition();
        }

        function goToSlide(index) {
            currentSlideIndex = index;
            updateSlidePosition();
        }

        function updateSlidePosition() {
            const slider = document.querySelector('.modal-slider');
            if (slider) {
                slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            }

            const dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, idx) => {
                if (idx === currentSlideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function openModal(index) {
            const project = projects[index];
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalCategory').textContent = project.category;
            document.getElementById('modalDesc').textContent = project.desc;

            const btns = document.getElementById('project-btns');
            if (btns) {
                btns.style.display = project.show_btn ? 'block' : 'none';
            }

            if (project.show_btn) {
                const container = document.getElementById('project-btns');
                const sourceBtn = document.getElementById('source');
                const liveBtn = document.getElementById('live-p');

                let visibleCount = 0;
                const configBtn = (btn, url) => {
                    if (!btn) return false;

                    if (url) {
                        btn.href = url;
                        btn.target = "_blank";
                        btn.rel = "noopener noreferrer";
                        btn.style.display = 'inline-block';
                        return true;
                    } else {
                        btn.style.display = 'none';
                        return false;
                    }
                };
                const isSourceVisible = configBtn(sourceBtn, project.git_repo);
                const isLiveVisible = configBtn(liveBtn, project.video_link);

                visibleCount = (isSourceVisible ? 1 : 0) + (isLiveVisible ? 1 : 0);

                if (visibleCount === 1) {
                    container.style.flexDirection = 'column';
                    container.style.width = '100%';
                    if (isSourceVisible) sourceBtn.style.width = '100%';
                    if (isLiveVisible) liveBtn.style.width = '100%';

                    if (isSourceVisible) sourceBtn.style.textAlign = 'center';
                    if (isLiveVisible) liveBtn.style.textAlign = 'center';

                } else if (visibleCount === 2) {
                    container.style.flexDirection = 'row';
                    sourceBtn.style.width = 'auto';
                    liveBtn.style.width = 'auto';
                } else {
                    container.style.display = 'none';
                }
            }
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'modal-tag';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });

            activeProjectImages = project.images || [];
            renderModalSlider();

            document.getElementById('modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(e) {
            if (!e || e.target.id === 'modal' || e.target.closest('.modal-close')) {
                document.getElementById('modal').classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // ── Toast System ──────────────────────────────────────────────────────
        const _toastIcons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
        const TOAST_DURATION = 5000;

        function showToast(type, title, message) {
            const container = document.getElementById('toast-container');
            const el = document.createElement('div');
            el.className = `toast toast-${type}`;
            el.style.setProperty('--dur', (TOAST_DURATION / 1000) + 's');
            el.innerHTML = `
                <div class="toast-icon">${_toastIcons[type]}</div>
                <div class="toast-body">
                    <div class="toast-title">${title}</div>
                    <div class="toast-msg">${message}</div>
                </div>
                <button class="toast-close" aria-label="Close">×</button>
                <div class="toast-progress"></div>
            `;
            el.querySelector('.toast-close').addEventListener('click', () => dismissToast(el));
            container.appendChild(el);

            let timer = setTimeout(() => dismissToast(el), TOAST_DURATION);

            el.addEventListener('mouseenter', () => {
                el.querySelector('.toast-progress').style.animationPlayState = 'paused';
                clearTimeout(timer);
            });
            el.addEventListener('mouseleave', () => {
                el.querySelector('.toast-progress').style.animationPlayState = 'running';
                timer = setTimeout(() => dismissToast(el), 1500);
            });
        }

        function dismissToast(el) {
            if (el.classList.contains('removing')) return;
            el.classList.add('removing');
            el.addEventListener('animationend', () => el.remove(), { once: true });
        }

        // ── Form Validation ───────────────────────────────────────────────────
        function validateField(input, errorEl, validatorFn) {
            const isValid = validatorFn(input.value.trim());
            input.classList.toggle('invalid', !isValid);
            input.classList.toggle('valid', isValid);
            errorEl.classList.toggle('show', !isValid);
            return isValid;
        }

        function setupLiveValidation() {
            const fields = [
                { id: 'cf-name',    errId: 'err-name',    fn: v => v.length >= 2 },
                { id: 'cf-email',   errId: 'err-email',   fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
                { id: 'cf-subject', errId: 'err-subject', fn: v => v.length >= 3 },
                { id: 'cf-message', errId: 'err-message', fn: v => v.length >= 20 },
            ];
            fields.forEach(({ id, errId, fn }) => {
                const input = document.getElementById(id);
                const err   = document.getElementById(errId);
                if (!input) return;
                // Validate on blur, clear invalid on input
                input.addEventListener('blur', () => validateField(input, err, fn));
                input.addEventListener('input', () => {
                    if (input.classList.contains('invalid')) validateField(input, err, fn);
                });
            });
        }

        // ── Contact Form Submission ───────────────────────────────────────────
        async function handleContactSubmit(e) {
            e.preventDefault();

            const nameInput    = document.getElementById('cf-name');
            const emailInput   = document.getElementById('cf-email');
            const subjectInput = document.getElementById('cf-subject');
            const msgInput     = document.getElementById('cf-message');

            const validations = [
                validateField(nameInput,    document.getElementById('err-name'),    v => v.length >= 2),
                validateField(emailInput,   document.getElementById('err-email'),   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)),
                validateField(subjectInput, document.getElementById('err-subject'), v => v.length >= 3),
                validateField(msgInput,     document.getElementById('err-message'), v => v.length >= 20),
            ];

            if (validations.includes(false)) {
                showToast('warning', 'Check your form', 'Please fix the highlighted fields before sending.');
                // Focus first invalid field
                const firstInvalid = e.target.querySelector('.invalid');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const btn = document.getElementById('cf-submit');
            const originalHTML = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span class="btn-spinner"></span> Sending…';

            try {
                const formData = new FormData(e.target);
                const response = await fetch('https://formspree.io/f/xojbbvpj', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    showToast('success', 'Message sent! 🎉', "Thanks for reaching out. I'll get back to you soon.");
                    e.target.reset();
                    // Clear validation states
                    e.target.querySelectorAll('input, textarea').forEach(el => {
                        el.classList.remove('valid', 'invalid');
                    });
                    e.target.querySelectorAll('.field-error').forEach(el => el.classList.remove('show'));
                } else {
                    const data = await response.json().catch(() => ({}));
                    const msg = data?.errors?.map(err => err.message).join(', ') || 'Something went wrong. Please try again.';
                    showToast('error', 'Submission failed', msg);
                }
            } catch (err) {
                showToast('error', 'Network error', 'Unable to send your message. Please check your connection and try again.');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', handleContactSubmit);
                setupLiveValidation();
            }
        });

        // Close color picker on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.color-picker')) {
                document.querySelector('.color-picker').classList.remove('active');
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
