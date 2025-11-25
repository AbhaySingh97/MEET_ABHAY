import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/testimonials')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setTestimonials(data);
                } else {
                    console.error('Invalid testimonials data:', data);
                    setTestimonials([]); // Fallback to empty array
                }
            })
            .catch(err => {
                console.error('Error fetching testimonials:', err);
                setTestimonials([]);
            });
    }, []);

    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">What People Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="testimonial-header">
                            <img src={item.avatar} alt={item.name} className="avatar" />
                            <div>
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </div>
                        </div>
                        <p>"{item.text}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
