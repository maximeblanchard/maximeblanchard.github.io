// Purge un éventuel ancien service worker enregistré à la racine (avant déplacement dans /jauge/)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const reg of registrations) {
      if (reg.scope === window.location.origin + '/' || reg.scope === window.location.href) {
        reg.unregister();
      }
    }
  });
}
