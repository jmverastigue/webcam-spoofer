function isValidUrl(url) {
    return url && !url.startsWith('chrome://') && !url.startsWith('chrome-extension://') && !url.startsWith('edge://') && !url.startsWith('about:');
}

document.getElementById('upload').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (!isValidUrl(tab.url)) {
            console.warn('Cannot access this URL');
            return;
        }
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => { setWebcamVideo(); }
        });
    });
});

const updateBtn = document.getElementById('update');
if (updateBtn) {
    updateBtn.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            if (!isValidUrl(tab.url)) {
                console.warn('Cannot access this URL');
                return;
            }
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => { updateWebcamVideo(); }
            });
        });
    });
}

const restoreBtn = document.getElementById('restore');
if (restoreBtn) {
    restoreBtn.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            if (!isValidUrl(tab.url)) {
                console.warn('Cannot access this URL');
                return;
            }
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => { restoreWebcam(); }
            });
        });
    });
}