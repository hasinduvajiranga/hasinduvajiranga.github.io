// Early theme & color loader to prevent flash of incorrect theme
        (function() {
            function getStored(name) {
                try {
                    const value = localStorage.getItem(name);
                    if (value) return value;
                } catch (e) {
                    // localStorage unavailable (private mode, file:// restrictions, etc.)
                }
                // Fallback: read from cookie for backwards compatibility
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            const savedTheme = getStored('portfolio-theme') || 'dark';
            const savedColor = getStored('portfolio-color') || 'green';
            document.documentElement.setAttribute('data-theme', savedTheme);
            document.documentElement.setAttribute('data-color', savedColor);
        })();
