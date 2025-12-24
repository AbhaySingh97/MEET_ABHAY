import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const TerminalContact = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', text: 'Welcome to AbhayOS v1.0.0' },
        { type: 'output', text: 'Type "help" to see available commands.' },
    ]);
    const bottomRef = useRef(null);

    const commands = {
        help: "Available commands: help, whoami, email, socials, clear, contact",
        whoami: "guest@portfolio: You are a curious visitor exploring my digital realm.",
        contact: "Email: abhaysingh@example.com | Location: India",
        email: "Opening your default mail client...",
        socials: "LinkedIn: /in/abhay-singh-chauhan | GitHub: /gun_abhay_23",
        clear: "CLEAR_ACTION"
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', text: `guest@portfolio:~$ ${input}` }];

            if (cmd === 'clear') {
                setHistory([]);
            } else if (commands[cmd]) {
                if (cmd === 'email') {
                    window.location.href = "mailto:abhaysingh@example.com"; // Replace with real email if available
                }
                newHistory.push({ type: 'output', text: commands[cmd] });
                setHistory(newHistory);
            } else if (cmd !== '') {
                newHistory.push({ type: 'error', text: `Command not found: ${cmd}` });
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    return (
        <div className="terminal-container" style={{
            background: '#0a0a0a',
            border: '2px solid #33ff00',
            borderRadius: '10px',
            padding: '20px',
            fontFamily: "'Courier New', monospace",
            height: '400px',
            overflowY: 'auto',
            color: '#33ff00',
            boxShadow: '0 0 20px rgba(51, 255, 0, 0.2)'
        }}>
            <div className="terminal-header" style={{ borderBottom: '1px solid #33ff00', paddingBottom: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FaTerminal /> <span>BASH - 80x24</span>
            </div>

            <div className="terminal-body">
                {history.map((line, i) => (
                    <div key={i} style={{ marginBottom: '5px', color: line.type === 'error' ? 'red' : '#33ff00' }}>
                        {line.text}
                    </div>
                ))}
                <div className="input-line" style={{ display: 'flex' }}>
                    <span style={{ marginRight: '10px' }}>guest@portfolio:~$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoFocus
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#33ff00',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            flex: 1,
                            outline: 'none'
                        }}
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default TerminalContact;
