import { motion } from 'framer-motion';
import aboutImage from '../assets/imagens/foto-perfil-sobre-mim.png';

const About = () => {
    return (
        <section id="about" className="w-[90%] max-w-[1200px] flex flex-col items-center gap-16 py-24 mb-20 scroll-mt-32">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-extra-large md:text-giant font-bold text-center"
            >
                <span className="text-gradient">Sobre Mim</span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={aboutImage}
                            alt="Foto do Gabriel"
                            className="relative w-full max-w-[450px] rounded-2xl glass-effect shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 flex flex-col gap-10 text-center lg:text-left"
                >
                    <div className="flex flex-col gap-8 text-[1.8rem] leading-relaxed text-white/90">
                        <p className="font-medium">
                            <strong className="text-primary text-[2.2rem]">Olá! Me chamo Gabriel Albuquerque e sou um desenvolvedor frontend apaixonado por tecnologia!</strong>
                        </p>
                        <p>
                            Gosto MUITO da área de tecnologia e mais ainda de desafios. Tenho certeza que posso contribuir significativamente em qualquer time com as minhas habilidades, sempre buscando aprimorar meus pontos fortes e evoluir constantemente.
                        </p>
                        <p>
                            Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedbacks e compartilhar conhecimento. Para mim, a tecnologia é o meio mais incrível de transformar ideias em realidade. 😁
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <motion.a
                            href="/arquivos/curriculo.pdf"
                            target="_blank"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-secondary rounded-full text-[1.6rem] font-semibold transition-all duration-300 hover:glow-effect shadow-xl"
                        >
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
