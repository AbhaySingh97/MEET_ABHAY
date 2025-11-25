import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Journey.css';

const Journey = () => {
    const [journey, setJourney] = useState([]);

    useEffect(() => {
        fetch('/api/journey')
            .then(res => res.json())
            .then(data => setJourney(data))
            .catch(err => console.error('Error fetching journey:', err));
    }, []);

    return (
        <section id="journey" className="journey">
            <h2 className="section-title">My Journey</h2>
            <div className="timeline">
                <div className="line"></div>
                {journey.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="content">
                            <h3>{item.year}</h3>
                            <h4>{item.title}</h4>
                            <h5>{item.company}</h5>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
