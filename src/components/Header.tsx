import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="flex justify-between items-center w-[90%] max-w-[1440px] py-6 md:py-8 lg:py-12 px-0">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="px-4 md:px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="font-logo text-large md:text-giant border-2 border-white rounded-full w-[50px] h-[50px] md:w-[65px] md:h-[65px] leading-[35px] md:leading-[45px] text-center underline transition-all duration-400 hover:text-secondary hover:border-secondary glow-effect-hover">
                        G
                    </div>
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-3 items-center">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="capitalize text-[1.8rem] font-medium py-3 px-8 transition-all duration-300 rounded-full tracking-wide select-none hover:bg-secondary hover:glow-effect"
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-[60px] h-[60px] flex items-center justify-center relative z-50"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-[30px] h-[2px]">
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 45 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute block w-full h-full bg-white"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 90 : 0,
                                    top: isMenuOpen ? 0 : -10,
                                }}
                                transition={{ duration: 0.2 }}
                                className="absolute block w-full h-full bg-white -top-[10px]"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMenuOpen ? 90 : 0,
                                    bottom: isMenuOpen ? 0 : -10,
                                }}
                                transition={{ duration: 0.2 }}
                                className="absolute block w-full h-full bg-white -bottom-[10px]"
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-[100px] right-8 md:hidden bg-black rounded-lg shadow-2xl z-40"
                        >
                            <ul className="flex flex-col p-12">
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className="block text-white text-center py-8 px-8 transition-colors duration-300 hover:text-secondary rounded-lg hover:bg-background-button"
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
