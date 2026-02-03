import { FaLinkedinIn, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from '../assets/imagens/foto-perfil.png';

const Hero = () => {
    const socialLinks = [
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/devgabrielalbuquerque/', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
        { icon: <FaWhatsapp />, href: 'https://wa.me/5585988284034', label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
        { icon: <FaGithub />, href: 'https://github.com/gabriel-chagas-albuquerque', label: 'GitHub', color: 'hover:bg-[#333]' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/gabrielchagasalbuquerque?igsh=MW0zZG55a2ptOW9leg==', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
    ];

    return (
        <section id="home" className="relative flex justify-center items-center w-full min-h-screen pt-32 sm:pt-40 lg:pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

            <div className="w-[90%] max-w-[1200px] flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-[2.4rem] font-medium text-white/80 mb-2">Olá, eu sou o</p>
                        <h1 className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-bold leading-tight mb-4">
                            <span className="text-gradient">Gabriel Albuquerque</span>
                        </h1>
                        <h2 className="text-[2.6rem] sm:text-[3.2rem] text-white/60 font-medium mb-8">
                            Desenvolvedor Fullstack
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-[1.8rem] text-white/70 max-w-[600px] mb-10 leading-relaxed"
                    >
                        Especializado em criar interfaces modernas, responsivas e de alta performance.
                        Transformando designs complexos em experiências digitais fluidas.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-gradient-to-r from-primary to-secondary rounded-full text-[1.8rem] font-semibold hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] transition-all duration-300"
                        >
                            Ver Projetos
                        </motion.a>

                        <nav>
                            <ul className="flex items-center gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-[45px] h-[45px] flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[2rem] transition-all duration-300 ${link.color} hover:text-white`}
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-[40px] opacity-30 animate-pulse"></div>
                    <div className="relative p-2 rounded-full bg-gradient-to-r from-primary to-secondary shadow-2xl">
                        <img
                            src={profileImage}
                            alt="Foto do Gabriel"
                            className="rounded-full w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-cover object-[center_20%] border-4 border-background"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white/40 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
