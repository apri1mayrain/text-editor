const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let installPrompt = null;
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    butInstall.style.visibility = 'visible';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt) {
     return;
    }
    
    const result = await installPrompt.prompt();

    console.log(`Install prompt was ${result.outcome}.`);

    // If the install prompt was accepted, hide the button
    if(result.outcome === 'accepted'){
        butInstall.style.visibility = 'hidden';
    }    
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    installPrompt = null;
    console.log('App was successfully installed.');
});