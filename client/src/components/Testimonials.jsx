import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({ name: '', role: '', text: '', avatar: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch('/api/testimonials')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTestimonials(data);
                } else {
                    console.error('Invalid testimonials data:', data);
                    setTestimonials([]);
                }
            })
            .catch(err => {
                console.error('Error fetching testimonials:', err);
                setTestimonials([]);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', role: '', text: '', avatar: '' });
            }
        } catch (err) {
            console.error('Error submitting testimonial:', err);
        }
    };

    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">What People Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item._id || index}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="testimonial-header">
                            <img src={item.avatar || '/default-avatar.png'} alt={item.name} className="avatar" />
                            <div>
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </div>
                        </div>
                        <p>"{item.text}"</p>
                    </motion.div>
                ))}
            </div>

            <div className="testimonial-form">
                <h3>Leave a Testimonial</h3>
                {submitted ? (
                    <p className="success-message">Thank you! Your testimonial has been submitted for approval.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Role (e.g., Developer, Student)"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Your testimonial..."
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Avatar URL (optional)"
                            value={formData.avatar}
                            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                        />
                        <button type="submit">Submit Testimonial</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
