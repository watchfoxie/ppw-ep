document.addEventListener('DOMContentLoaded', () => {
    let progressRunning = false;
    function startLoading(){
        let progress = 0;
        progressRunning = true;

        interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                progressRunning = false;
            } else {
                progress++;
                progressBar.style.width = progress + '%';
                statusText.textContent = `Progress: ${progress}%`;
            }
        }, 100);
    }
    
    let button = document.querySelector('#startButton');
    button.addEventListener('click', () => {
        (progressRunning) ? alert('It is not allowed') : startLoading();
    });
});
