import { motion, type Variants } from 'framer-motion';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDatabase
} from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiSequelize,
    SiPrisma,
    SiPostgresql,
    SiExpress,
    SiNextdotjs
} from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Avançado' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Avançado' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Avançado' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 'Básico' },
        { name: 'React', icon: FaReact, color: '#61DAFB', level: 'Intermediário' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 'Básico' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 'Intermediário' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 'Intermediário' },
        { name: 'Express', icon: SiExpress, color: '#000000', level: 'Intermediário' },
        { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7', level: 'Intermediário' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 'Básico' },
        { name: 'Prisma', icon: SiPrisma, color: '#bbbbbb', level: 'Intermediário' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 'Intermediário' },
        { name: 'SQL', icon: FaDatabase, color: '#9B59B6', level: 'Básico' },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="skills" className="w-full px-8 py-20">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-extra-large md:text-giant font-bold mb-4">
                        <span className="text-gradient">Habilidades</span>
                    </h2>
                    <p className="text-[1.8rem] text-white/70 max-w-[600px] mx-auto">
                        Tecnologias e ferramentas que domino para criar soluções incríveis
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center flex-wrap gap-12"
                >
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                }}
                                className="w-[150px] p-12 text-center bg-background-cards rounded-xl transition-all duration-500 cursor-pointer group hover:glow-effect"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-4"
                                >
                                    <Icon
                                        className="text-[8rem] mx-auto transition-colors duration-400"
                                        style={{ color: skill.color }}
                                    />
                                </motion.div>
                                <h3 className="text-[1.6rem] font-semibold mb-2 transition-all duration-400">
                                    {skill.name}
                                </h3>
                                <p className="text-[1.2rem] text-white/60 transition-all duration-400 group-hover:text-white/80">
                                    {skill.level}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Additional Skills Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="glass-effect rounded-2xl p-12 max-w-[800px] mx-auto">
                        <h3 className="text-large font-bold mb-6 text-gradient">
                            Sempre Aprendendo
                        </h3>
                        <p className="text-[1.6rem] text-white/80 leading-relaxed">
                            Estou constantemente expandindo meu conhecimento e explorando novas tecnologias.
                            Atualmente focado em aprofundar conhecimentos em arquitetura de software,
                            cloud computing e inteligência artificial.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
