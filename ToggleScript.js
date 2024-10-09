            const hamBurger = document.querySelector(".toggle-btn");

            hamBurger.addEventListener("click", function () {
            document.querySelector("#sidebar").classList.toggle("expand");
            });

            // language

            const languageToggle = document.getElementById('language-toggle');
            const flagImage = document.getElementById('flag-image');
            const languageText = document.getElementById('language-text');

            // Event listener for toggling the flag and language name
            languageToggle.addEventListener('click', () => {
            const currentLanguage = languageToggle.getAttribute('data-language');
                    
            // Toggle between English and French
            if (currentLanguage === 'english') {
                // Switch to French flag and text
                flagImage.src = 'https://img.icons8.com/emoji/48/000000/france-emoji.png';
                languageToggle.setAttribute('data-language', 'french');
                languageText.textContent = 'French';
            } else {
                    // Switch to English flag and text
                    flagImage.src = 'https://img.icons8.com/emoji/48/000000/united-states-emoji.png';
                    languageToggle.setAttribute('data-language', 'english');
                    languageText.textContent = 'English';
            }
                });
