import { useCallback, useRef } from 'react';

const SOUNDS = {
    hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Soft Pop
    click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // Light Click
    success: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3', // Soft Whoosh
    modal: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3', // Digital chime
};

const useSound = () => {
    const audioRefs = useRef({});

    const playSound = useCallback((soundName, volume = 0.4) => {
        const soundUrl = SOUNDS[soundName];
        if (!soundUrl) return;

        // Reuse existing audio object or create new one
        if (!audioRefs.current[soundName]) {
            audioRefs.current[soundName] = new Audio(soundUrl);
        }

        const audio = audioRefs.current[soundName];
        audio.volume = volume;
        
        // Reset and play
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Sound playback blocked by browser:', err));
    }, []);

    return { playSound };
};

export default useSound;
