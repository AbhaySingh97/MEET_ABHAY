import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        text: "Amazing work! He built my portfolio website in just 3 days. Very professional and easy to talk to.",
        avatar: "AS"
    },
    {
        id: 2,
        name: "Priya Patel",
        text: "Really happy with the design. He understood exactly what I needed for my bakery shop. Looks great on mobile too!",
        avatar: "PP"
    },
    {
        id: 3,
        name: "Vikram Singh",
        text: "Great developer. Helped me fix some major bugs in my React app. Highly recommended for anyone looking for quality code.",
        avatar: "VS"
    },
    {
        id: 4,
        name: "Neha Gupta",
        text: "The 3D effects are so cool! Everyone loves the new look of our agency site. It really stands out now.",
        avatar: "NG"
    },
    {
        id: 5,
        name: "Rohan Mehta",
        text: "Simple, clean, and fast. Best experience working with a freelancer so far. Will definitely hire again.",
        avatar: "RM"
    }
];

// Duplicate the array to create seamless loop
const carouselData = [...testimonials, ...testimonials];

const TestimonialCard = ({ item }) => (
    <div className="testimonial-card">
        <div className="quote-icon"><FaQuoteLeft /></div>
        <p className="testimonial-text">"{item.text}"</p>
        <div className="testimonial-author">
            <div className="author-avatar">{item.avatar}</div>
            <div className="author-info">
                <h4>{item.name}</h4>
            </div>
        </div>
    </div>
);

const TestimonialCarousel = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">What People Say</h2>

            <div className="carousel-track-container">
                <motion.div
                    className="carousel-track"
                    animate={{ x: [0, -1000] }} // Adjust based on width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ animationPlayState: "paused" }} // CSS handling for pause often smoother
                >
                    {carouselData.map((item, index) => (
                        <TestimonialCard key={`${item.id}-${index}`} item={item} />
                    ))}
                </motion.div>

                {/* Duplicate track for seamless effect if needed, typically single track with doubled data works if width is calculated well. 
                     For strictly seamless CSS/Framer, we often need closer control. 
                     Let's use a simpler CSS animation approach wrapped in motion for hover control or just framer.
                     The `animate.x` value needs to match half the total width of content.
                 */}
            </div>
        </section>
    );
};

export default TestimonialCarousel;
