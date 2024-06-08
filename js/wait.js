 const progressBarInner = document.getElementById('progress-bar-inner');
            let width = 0;
            const interval = setInterval(() => {
                width += 1;
                progressBarInner.style.width = width + '%';
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        window.location.href = 'home.html';
                    }, 100);
                }
            }, 50); // Update the progress every 50ms