import { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error('Error fetching stats:', err));
    }, []);

    if (!stats) return null;

    return (
        <section id="stats" className="stats">
            <h2 className="section-title">Coding Stats</h2>
            <div className="charts-container">
                <motion.div
                    className="chart-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>Skill Proficiency</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={stats.skills}>
                            <PolarGrid stroke="#3D405B" strokeDasharray="3 3" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#3D405B', fontWeight: 600 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#3D405B' }} />
                            <Radar name="Skills" dataKey="A" stroke="#E07A5F" fill="#E07A5F" fillOpacity={0.5} strokeWidth={3} />
                        </RadarChart>
                    </ResponsiveContainer>
                </motion.div>

                <motion.div
                    className="chart-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Project Contributions</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={stats.contributions}>
                            <XAxis
                                dataKey="category"
                                stroke="#3D405B"
                                tick={{ fill: '#3D405B', fontWeight: 600 }}
                            />
                            <YAxis
                                stroke="#3D405B"
                                tick={{ fill: '#3D405B' }}
                                label={{ value: 'Projects', angle: -90, position: 'insideLeft', fill: '#3D405B', fontWeight: 600 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#FFFBF5',
                                    border: '3px solid #3D405B',
                                    borderRadius: '10px',
                                    color: '#3D405B',
                                    fontWeight: 600
                                }}
                                formatter={(value) => [`${value} projects`, 'Count']}
                            />
                            <Bar
                                dataKey="projects"
                                stroke="#3D405B"
                                strokeWidth={2}
                                radius={[8, 8, 0, 0]}
                            >
                                {stats.contributions.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
