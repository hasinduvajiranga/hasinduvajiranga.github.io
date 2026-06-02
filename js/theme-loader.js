// Early theme & color loader to prevent flash of incorrect theme
        (function() {
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
            const savedTheme = getCookie('portfolio-theme') || 'dark';
            const savedColor = getCookie('portfolio-color') || 'green';
            document.documentElement.setAttribute('data-theme', savedTheme);
            document.documentElement.setAttribute('data-color', savedColor);
        })();
