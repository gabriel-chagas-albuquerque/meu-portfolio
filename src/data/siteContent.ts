import type { IconType } from 'react-icons';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiSequelize,
  SiPrisma,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiDocker,
  SiAmazonwebservices,
  SiLinux,
  SiTerraform,
} from 'react-icons/si';

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  level: string;
};

export const skills: Skill[] = [
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
  { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 'Básico' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', level: 'Aprendendo' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', level: 'Aprendendo' },
  { name: 'Terraform', icon: SiTerraform, color: '#844FBA', level: 'Aprendendo' },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'juventude-nv',
    title: 'Juventude NV',
    description: 'Landing page voltada para a divulgação do grupo de jovens da Igreja AD Novo Viver, conta com visual moderno e interativo e com a integração de um CMS para permitir uma interface amigável para edições no conteúdo do site.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/gabriel-chagas-albuquerque/juventude-nv',
  },
  {
    slug: 'master',
    title: 'Master',
    description: 'Tomando como base o jogo de perguntas e respostas Master, essa aplicação utiliza a API do Gemini para gerar perguntas sobre os temas estabelecidos, verificando a quantidade de perguntas por tema para não deixar faltar perguntas em nenhum dos temas.',
    technologies: ['Typescript', 'React', 'Tailwind', 'IA'],
    githubUrl: 'https://github.com/gabriel-chagas-albuquerque/master-perguntas-respostas',
  },
  {
    slug: 'provisionamento-automatico-aws',
    title: 'Provisionamento Automático AWS',
    description: 'IAC em Terraform que cria e destrói uma instância na AWS de forma automática. Constrói tudo que é necessário para criar uma instância EC2 (VPC, sub-redes, gateways, grupos de segurança, etc.).',
    technologies: ['AWS', 'Terraform'],
    githubUrl: 'https://github.com/gabriel-chagas-albuquerque/primeiro-projeto-aws',
  },
  {
    slug: 'digital-store-api',
    title: 'Digital Store API',
    description: 'Backend e banco de dados de uma loja virtual implementados através de uma arquitetura multi-container com monitoramento de chamados e gestão de ativos.',
    technologies: ['NodeJS', 'Express', 'Sequelize', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/gabriel-chagas-albuquerque/dripstore-api',
  },
  {
    slug: 'digital-store',
    title: 'Digital Store',
    description: 'Landing page de uma e-commerce de acessórios como sapatos, camisas, bonés, etc. A pagina possui visual moderno e interativo, com links de navegação entre as seções da loja e filtros de seleção de produtos.',
    technologies: ['React', 'Tailwind'],
    githubUrl: 'https://github.com/gabriel-chagas-albuquerque/projeto-drip-store',
  },
  {
    slug: 'resgate-mais',
    title: 'Resgate Mais',
    description: 'Landing page de uma ONG que ajuda as vítimas das enchentes do Rio Grande do Sul. A página possui visual moderno e responsivo, recursos interativos e a construção utilizando CMS, trazendo uma interface amigável para edições no conteúdo da página',
    technologies: ['NextJS', 'Typescript', 'Tailwind'],
    githubUrl: 'https://github.com/lucaoskaique/resgatemais',
  },
];
