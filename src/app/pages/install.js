// pages/install.js
import { useEffect, useState } from 'react';

export default function InstallPage() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
    });
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      <h1>Install Our App</h1>
      <button onClick={() => window.location.href = 'https://your-server.com/path/to/your-app.apk'}>
        Install APK
      </button>
      <button onClick={handleAddToHomeScreen} disabled={!deferredPrompt}>
        Add to Home Screen
      </button>
    </div>
  );
}
