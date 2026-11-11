import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    index: number;
}

const ProjectCard = ({
    title,
    description,
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
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25 }
            }}
            className="h-full min-h-80 rounded-2xl border border-white/10 border-t-2 border-t-primary bg-background-cards p-7 transition-all duration-300 flex flex-col justify-between items-start gap-8 hover:glow-effect group focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 focus-within:ring-offset-background"
        >
            {/* Project Info */}
            <div className="w-full flex-grow text-center">
                <h3 className="text-[2rem] font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-[1.4rem] text-white/70 leading-relaxed mb-7 group-hover:text-white/90 transition-all duration-300">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2">
                    {technologies.map((tech, idx) => (
                        <span
                            key={`${title}-${tech}-${idx}`}
                            className="px-3 py-1 text-[1.1rem] bg-background-button rounded-full text-white/80 border border-white/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-start w-full gap-4">
                {githubUrl && (
                    <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir código do projeto ${title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-background-button rounded-xl text-[1.2rem] font-medium transition-all duration-300 hover:bg-secondary hover:glow-effect border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        <FaGithub size={16} />
                        <span>Ver no GitHub</span>
                    </motion.a>
                )}
                {liveUrl && (
                    <motion.a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir demonstração do projeto ${title}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary rounded-xl text-[1.2rem] font-medium transition-all duration-300 hover:bg-secondary hover:glow-effect focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
