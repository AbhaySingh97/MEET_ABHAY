import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Product Manager",
        company: "TechFlow Inc.",
        text: "Abhay transformed our vague requirements into a stunning, high-performance web application. His attention to detail and creative problem-solving are unmatched.",
        avatar: "SJ"
    },
    {
        id: 2,
        name: "David Chen",
        role: "CTO",
        company: "StartupX",
        text: "One of the most talented full-stack developers I've worked with. He delivered the MVP two weeks ahead of schedule and the code quality was exceptional.",
        avatar: "DC"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Creative Director",
        company: "Designify",
        text: "I was blown away by how he implemented our complex 3D designs into a responsive website. The animations are buttery smooth!",
        avatar: "ER"
    },
    {
        id: 4,
        name: "Michael Chang",
        role: "Founder",
        company: "DevSpace",
        text: "A true professional who cares about the end-user experience. The 'Terminal Mode' he added to our contact form increased engagement by 40%.",
        avatar: "MC"
    },
    {
        id: 5,
        name: "Jessica Lee",
        role: "Senior Dev",
        company: "WebSolutions",
        text: "Clean architecture, reusable components, and great documentation. It was a pleasure integrating his modules into our main system.",
        avatar: "JL"
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
                <span>{item.role}, {item.company}</span>
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
