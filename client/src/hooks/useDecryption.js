import { useState, useEffect, useRef } from 'react';

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const useDecryption = (targetText, speed = 30, initialDelay = 0) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef(null);
    const iterationRef = useRef(0);

    useEffect(() => {
        let timeoutId;

        const startDecryption = () => {
            clearInterval(intervalRef.current);
            iterationRef.current = 0;
            setIsComplete(false);

            intervalRef.current = setInterval(() => {
                setDisplayedText(prev => {
                    const result = targetText
                        .split("")
                        .map((letter, index) => {
                            if (index < iterationRef.current) {
                                return targetText[index];
                            }
                            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                        })
                        .join("");

                    if (iterationRef.current >= targetText.length) {
                        clearInterval(intervalRef.current);
                        setIsComplete(true);
                        return targetText;
                    }

                    iterationRef.current += 1 / 3; // Controls how fast it resolves vs scrambles
                    return result;
                });
            }, speed);
        };

        timeoutId = setTimeout(startDecryption, initialDelay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalRef.current);
        };
    }, [targetText, speed, initialDelay]);

    return { displayedText, isComplete };
};
