import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/siteContent';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="projects" className="section-shell py-20 scroll-mt-32">
            <div className="flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mb-4">
                        <span className="text-gradient">Projetos</span>
                    </h2>
                    <p className="section-copy text-[1.8rem]">
                        Uma seleção de projetos que desenvolvi durante minha jornada como desenvolvedor,
                        focando em qualidade de código e interface.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid w-full max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            {...project}
                            index={index}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <p className="text-[1.6rem] text-white/70 mb-10">
                        Quer ver o código de mais projetos?
                    </p>
                    <motion.a
                        href="https://github.com/gabriel-chagas-albuquerque"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="primary-cta"
                    >
                        Ver Repositórios no GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
