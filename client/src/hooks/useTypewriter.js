import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, delay = 0) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeout;
        let index = 0;

        // Initial delay before starting
        timeout = setTimeout(() => {
            const typeNextChar = () => {
                if (index < text.length) {
                    setDisplayedText(text.substring(0, index + 1));
                    index++;
                    timeout = setTimeout(typeNextChar, speed);
                } else {
                    setIsComplete(true);
                }
            };
            typeNextChar();
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return { displayedText, isComplete };
};
