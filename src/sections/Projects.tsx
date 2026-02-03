import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Importing local images
import pokedexImg from '../assets/imagens/image-pokedex.png';
import githubApiImg from '../assets/imagens/github-api.png';
import entregacaoImg from '../assets/imagens/image-entregacao-app.png';
import onePieceImg from '../assets/imagens/image-one-piece-project-reduzida.png';
import digitalStoreImg from '../assets/imagens/digital-store.png';
import resgateImg from '../assets/imagens/image-resgate-mais.png';

const Projects = () => {
    const projects = [
        {
            title: 'Pokedex App',
            description: 'Explorador de Pokémons consumindo a PokeAPI, com busca e detalhes de cada criatura.',
            image: pokedexImg,
            technologies: ['React', 'JavaScript', 'PokeAPI'],
            githubUrl: 'https://github.com/gabriel-chagas-albuquerque/pokedex'
        },
        {
            title: 'GitHub API',
            description: 'Buscador de perfis do GitHub que exibe informações do usuário e seus repositórios mais recentes.',
            image: githubApiImg,
            technologies: ['JavaScript', 'HTML', 'CSS', 'Fetch API'],
            githubUrl: 'https://github.com/gabriel-chagas-albuquerque/projeto-github-fetch-api'
        },
        {
            title: 'Entregação App',
            description: 'Sistema Automatizado de Coletas e Entregas utilizando apenas WhatsApp.',
            image: entregacaoImg,
            technologies: ['React', 'TypeScript', 'Tailwind'],
            githubUrl: 'https://github.com/lucaoskaique/entregacao-app'
        },
        {
            title: 'One Piece Project',
            description: 'Landing page temática com animações fluidas e design inspirado no universo One Piece.',
            image: onePieceImg,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubUrl: 'https://github.com/gabriel-chagas-albuquerque/projeto-one-piece-final'
        },
        {
            title: 'Digital Store',
            description: 'Landing page de uma loja online de acessórios como sapatos, camisas, bonés, etc.',
            image: digitalStoreImg,
            technologies: ['React', 'API Integration', 'Tailwind'],
            githubUrl: 'https://github.com/gabriel-chagas-albuquerque/projeto-drip-store'
        },
        {
            title: 'Resgate Mais',
            description: 'Landing page de uma ONG que ajuda as vítimas das enchentes do Rio Grande do Sul.',
            image: resgateImg,
            technologies: ['NextJS', 'Typescript','Tailwind'],
            githubUrl: 'https://github.com/lucaoskaique/resgatemais'
        },
    ];

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
        <section id="projects" className="w-[90%] max-w-[1200px] py-20 scroll-mt-32">
            <div className="flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-extra-large md:text-giant font-bold mb-4">
                        <span className="text-gradient">Projetos</span>
                    </h2>
                    <p className="text-[1.8rem] text-white/70 max-w-[700px] mx-auto">
                        Uma seleção de projetos que desenvolvi durante minha jornada como desenvolvedor,
                        focando em qualidade de código e interface.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-10"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
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
                        className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-secondary rounded-full text-[1.8rem] font-semibold transition-all duration-300 hover:glow-effect shadow-xl"
                    >
                        Ver Repositórios no GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
