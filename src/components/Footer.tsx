import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/gabriel-chagas-albuquerque',
            color: 'hover:text-[#76578c]'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            href: 'https://www.linkedin.com/in/devgabrielalbuquerque/',
            color: 'hover:text-[#0077b5]'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:gabrieldafortaleza0100@gmail.com',
            color: 'hover:text-primary'
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            href: 'https://wa.me/5585988284034',
            color: 'hover:text-[#25D366]'
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer id="contact" className="mt-20 text-center w-full py-12 bg-background-cards/30 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-[1440px] mx-auto px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-8"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-secondary text-large font-bold tracking-[2px] mb-8"
                    >
                        <span className="text-gradient">Vamos construir algo incrível juntos?</span>
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        className="flex justify-center gap-6 flex-wrap"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            const isEmail = social.name === 'Email';
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={isEmail ? undefined : "_blank"}
                                    rel={isEmail ? undefined : "noopener noreferrer"}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-16 h-16 flex items-center justify-center rounded-full bg-background-button border border-white/20 text-white transition-all duration-300 ${social.color} hover:border-current glow-effect-hover shadow-lg`}
                                    aria-label={social.name}
                                >
                                    <Icon size={28} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="pt-10 border-t border-white/10 mt-10"
                    >
                        <p className="text-white/60 text-[1.4rem]">
                            © {new Date().getFullYear()} Gabriel Albuquerque. Todos os direitos reservados.
                        </p>
                        <p className="text-white/40 text-[1.2rem] mt-2">
                            Desenvolvido com ❤️ utilizando React + TypeScript + Tailwind CSS
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
