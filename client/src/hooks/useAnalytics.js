import { useEffect } from 'react';

const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const useAnalytics = () => {
    useEffect(() => {
        const trackVisit = async () => {
            // Visitor ID (Persistent)
            let visitorId = localStorage.getItem('visitorId');
            if (!visitorId) {
                visitorId = generateId();
                localStorage.setItem('visitorId', visitorId);
            }

            // Session ID (Session)
            let sessionId = sessionStorage.getItem('sessionId');
            if (!sessionId) {
                sessionId = generateId();
                sessionStorage.setItem('sessionId', sessionId);
            }

            // Source
            let source = 'Direct';
            if (document.referrer) {
                try {
                    const url = new URL(document.referrer);
                    if (url.hostname !== window.location.hostname) {
                        source = url.hostname;
                    }
                } catch (e) {
                    source = document.referrer;
                }
            }

            const page = window.location.pathname;

            try {
                // Use relative path, relies on proxy in dev or same-origin in prod
                await fetch('/api/analytics/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        visitorId,
                        sessionId,
                        page,
                        source
                    }),
                });
            } catch (error) {
                console.error('Analytics Error:', error);
            }
        };

        trackVisit();
    }, []);
};

export default useAnalytics;
