import { useState, useEffect } from 'react';
import Timeline from './Timeline';
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
            <Timeline items={journey} />
        </section>
    );
};

export default Journey;
