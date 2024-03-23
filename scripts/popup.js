document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('size110').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeSize', size: 1.10 });
        });
    });

    document.getElementById('size115').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeSize', size: 1.15 });
        });
    });

    document.getElementById('size120').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeSize', size: 1.20 });
        });
    });

    document.getElementById('size125').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeSize', size: 1.25 });
        });
    });

    document.getElementById('reset').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'resetSize'});
        });
    });
});

