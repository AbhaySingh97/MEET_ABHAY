import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaEnvelope } from 'react-icons/fa';
import TerminalContact from './TerminalContact';
import './Contact.css';

const Contact = () => {
    const [viewMode, setViewMode] = useState('form'); // 'form' or 'terminal'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('Message Sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Error sending message.');
        }
    };

    return (
        <section id="contact" className="contact">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Get In Touch</h2>
                    <div className="view-toggle">
                        <button
                            onClick={() => setViewMode('form')}
                            className={`toggle-btn ${viewMode === 'form' ? 'active' : ''}`}
                            title="Standard Form"
                            style={{ padding: '0.5rem', background: viewMode === 'form' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', borderRadius: '5px 0 0 5px', cursor: 'pointer', color: '#fff' }}
                        >
                            <FaEnvelope />
                        </button>
                        <button
                            onClick={() => setViewMode('terminal')}
                            className={`toggle-btn ${viewMode === 'terminal' ? 'active' : ''}`}
                            title="Terminal Mode"
                            style={{ padding: '0.5rem', background: viewMode === 'terminal' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', borderRadius: '0 5px 5px 0', cursor: 'pointer', color: '#fff' }}
                        >
                            <FaTerminal />
                        </button>
                    </div>
                </div>

                {viewMode === 'terminal' ? (
                    <TerminalContact />
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="submit-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                        {status && <p className="status-msg">{status}</p>}
                    </form>
                )}
            </motion.div>
        </section>
    );
};

export default Contact;
