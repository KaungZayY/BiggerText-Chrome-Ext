chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'changeSize') {
        resetSize();
        changeSize(message.size);
    }

    if (message.action === 'resetSize') {
        resetSize();
    }
});

function changeSize(size) {
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const parsedFontSize = parseFloat(currentFontSize);
        const updatedSize = parsedFontSize * size;
        element.style.fontSize = updatedSize + 'px';
    });
}

function resetSize() {
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        element.style.fontSize = '';
    });
}

