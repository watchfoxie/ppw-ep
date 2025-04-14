document.addEventListener('DOMContentLoaded', () => {
    let progressRunning = false;

    document.body.onload = renderHtmlPage();
    function renderHtmlPage(){
        let header = document.createElement('h1');
        header.textContent = 'To Do: JavaScript tasks 09.apr.2025';
        document.body.appendChild(header);

        let paragraph = document.createElement('p');
        paragraph.textContent = 'Tasks category: EP task 8';
        document.body.appendChild(paragraph);

        let parentDiv = document.createElement('div');
        parentDiv.id = 'progressWrapper';
        parentDiv.style.width = '100%';
        parentDiv.style.backgroundColor = '#CCCCCC';
        parentDiv.style.height = '30px';
        document.body.appendChild(parentDiv);

        let childDiv = document.createElement('div');
        childDiv.id = 'progressBar';
        childDiv.style.width = '0%';
        childDiv.style.backgroundColor = '#4CAF50';
        childDiv.style.height = '100%';
        parentDiv.appendChild(childDiv);
        document.body.appendChild(childDiv);

        let htmlButton = document.createElement('button');
        htmlButton.id = 'startButton';
        htmlButton.textContent = 'Start Loading';
        document.body.appendChild(htmlButton);

        let paragraph2 = document.createElement('p');
        paragraph2.id = 'statusText';
        paragraph2.textContent = 'Progress: 0%';
        document.body.appendChild(paragraph2);
        console.log('executed succesfully!');
    }

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
