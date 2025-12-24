import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa';
import './Timeline.css';

const getIconForTitle = (title) => {
    const t = title.toLowerCase();
    if (t.includes('student') || t.includes('degree') || t.includes('bachelor') || t.includes('education')) return <FaGraduationCap />;
    if (t.includes('developer') || t.includes('software') || t.includes('stack')) return <FaCode />;
    if (t.includes('freelance') || t.includes('project')) return <FaLaptopCode />;
    return <FaBriefcase />;
};

const TimelineCard = ({ item, index }) => {
    const icon = getIconForTitle(item.title);

    return (
        <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="timeline-content">
                <div className="timeline-icon">{icon}</div>
                <div className="timeline-date">{item.year}</div>
                <h3>{item.title}</h3>
                <h4>{item.company || item.location}</h4>
                <p>{item.description}</p>
            </div>
        </motion.div>
    );
};

const Timeline = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {items.map((item, index) => (
                <TimelineCard key={item.id || index} item={item} index={index} />
            ))}
        </div>
    );
};

export default Timeline;
