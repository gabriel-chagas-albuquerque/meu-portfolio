import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    index: number;
}

const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    index
}: ProjectCardProps) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            className="w-[300px] p-8 m-12 bg-background-cards rounded-xl transition-all duration-400 flex flex-col justify-between items-center gap-8 hover:glow-effect group"
        >
            {/* Project Image */}
            <div className="w-full h-[200px] overflow-hidden rounded-lg relative">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-cards/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="text-center flex-grow">
                <h3 className="text-[2rem] font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[1.4rem] text-white/70 leading-relaxed mb-6 group-hover:text-white/90 group-hover:font-semibold transition-all duration-300">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-[1.1rem] bg-background-button rounded-full text-white/80 border border-white/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between w-full gap-4">
                {githubUrl && (
                    <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-background-button rounded-lg text-[1.2rem] font-medium transition-all duration-300 hover:bg-secondary hover:glow-effect border border-white/20"
                    >
                        <FaGithub size={16} />
                        <span>Código</span>
                    </motion.a>
                )}
                {liveUrl && (
                    <motion.a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded-lg text-[1.2rem] font-medium transition-all duration-300 hover:bg-secondary hover:glow-effect"
                    >
                        <FaExternalLinkAlt size={14} />
                        <span>Demo</span>
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
