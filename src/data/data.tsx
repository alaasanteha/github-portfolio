import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alaa Snteha',
  description: "Alaa Snteha Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alaa Snteha.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100"> Software Engineer</strong>, currently working
        as a  <strong className="text-stone-100">Front End Developer</strong> with 4+ years of experience building and maintaining high-quality, responsive web applications for different domains, such as e-commerce, education, and health care.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Front-End developer with 4+ years of experience building and maintaining high-quality, responsive web applications for different domains, such as e-commerce, education, and health care. 

Proven ability to deliver projects on time and within budget, both independently and collaboratively. Proficient in JavaScript, TypeScript, React Js, Next Js, Laravel, PHP. Hands-on experience with Agile development methodologies and a proven ability to translate complex business requirements into user-friendly digital interfaces.

 I have the motivation to learn new technologies and skills, and to self-develop as a Software Engineer. I always want to be part of a hardworking, creative, and understanding team that shares the same vision and goals.`,
  aboutItems: [
    {label: 'Location', text: 'Turkey, Istanbul', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Syrian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Zomba, Yoga', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Damascus', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Alemi, IT Services and IT Consulting.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'French',
        level: 2,
      },
      {
        name: 'Turkish',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'Node.js',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AlifBee Academy',
    description: 'Technologies: React • RESTful API • Responsive Design • React Hooks • Bootstrap 5',
    url: 'https://academy.alifbee.com/',
    image: porfolioImage3,
  },
  {
    title: 'AlifBee Web App',
    description: 'It is a web application for teaching the Arabic language to non-native speakers with professional and enjoyable ways which has shown great success around the world .',
    url: 'https://app.alifbee.com',
    image: porfolioImage1,
  },
  {
    title: 'AlifBee Landing Page',
    description: 'I focused on this project to have perfect performance and SEO-friendly',
    url: 'https://www.alifbee.com',
    image: porfolioImage1,
  },
  {
    title: 'AlifBee Kids Landing page',
    description: 'I focused on this project to have perfect performance and SEO-friendly.',
    url: 'https://alifbeekids.com/',
    image: porfolioImage4,
  },
  {
    title: 'AlifBee LMS',
    description: 'Building web applications to manage the content of the entire curriculums for more than one language and educational institution using Laravel framework which follows the Model-View-Controller (MVC).',
    url: 'https://lms.alifbee.com/',
    image: porfolioImage1,
  },
  {
    title: 'AlifBee Blog',
    description: '',
    url: 'http://blog.alifbee.com/',
    image: porfolioImage1,
  },
  {
    title: 'Premium Surplus',
    description: 'I worked on this project as a freelancer. Technologies: Next.js • Material-UI • HTML/CSS • RESTful API • MVC',
    url: 'https://psurplus.com/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2017',
    location: 'Damascus University',
    title: 'Bachelor degree in Computer And Programming Engineering',
    content: <p></p>,
  },
  {
    date: 'February 2017',
    location: 'Coursera.org',
    title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4 - The Hong Kong University of Science and Technology',
    content: <p></p>,
  },
  {
    date: 'June 2024',
    location: 'Coursera.org',
    title: 'Programming in Python',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2019 - Dec 2023',
    location: 'AlifBee Company',
    title: 'Front-end Engineer',
    content: (
      <p>
        I worked with the team on many web applications and there were many challenges and the team had a
        very competitive spirit . One of the most important projects we lunched was a project to teach the Arabic
        language to non-native speakers which has shown great success around the world using different web
        technologies and platform such as React js, Next js, JavaScript, HTML, CSS, jQuery, Java, bootstrap and
        styled component.
      </p>
    ),
  },
  {
    date: 'Jan 2018 – Apr 2018 ',
    location: 'Al Manara Soft',
    title: 'Junior Software Programmer',
    content: (
      <p>
        Building web applications that support different industries such as e-commerce and personal websites
        using different web technologies and platform such as .NET framework , JavaScript, HTML, CSS and
        Angular 6.
      </p>
    ),
  },
  {
    date: 'Feb 2019 – Dec 2022 ',
    location: 'Freelance',
    title: 'Web Developer',
    content: (
      <p>
        Building and designing e-commerce websites using React js, Next js, JavaScript, HTML, HTML5, CSS, CSS3,
        jQuery, Java, bootstrap, MUI Material and styled component.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Abdalhady Alsayad',
      text: "I've had the pleasure of working with Alaa for the past three years, and during this time, she has proven to be a remarkable and talented frontend developer. Alaa consistently demonstrates a strong commitment to her work, coupled with a keen eagerness to learn and master new technologies. Her skills in software architecture and design patterns are particularly impressive, making her a valuable asset to any team.",
      image: '',
    },
    {
      name: 'Khaled Alsayad',
      text: 'I had the pleasure of working with Alaa on Alifbee. She is a highly skilled and talented engineer who consistently impressed me with her technical abilities and work ethic.',
      image: '',
    },
    {
      name: 'Mumin Osman',
      text: 'Alaa is an exceptional professional who consistently delivers high-quality results. Their expertise and dedication make them a valuable asset to any team. I highly recommend her for her outstanding skills and contributions.',
      image: '',
    },
    {
      name: 'Mohamad Bitar',
      text: "I highly recommend Alaa Santeha as a talented full stack developer. I had the pleasure of working closely with Alaa for the past three years at Alemi Media Company. Alaa possesses a wealth of technical expertise in various programming languages including JavaScript, PHP, and SQL. She is skilled at using a variety of tools and frameworks such as Git, ReactJS, VueJS, and Laravel. One project I worked on with Alaa was the development of a new e-learning platform called AlifBee. Alaa was responsible for developing the platform's frontend, which included implementing a lot of UI/UX features. She worked tirelessly to ensure that the platform was scalable, secure, and user-friendly. Her contributions were instrumental in the success of the project. Overall, I highly recommend Alaa as a skilled full stack developer. Her technical expertise, strong work ethic, and excellent interpersonal skills make her a valuable asset to any team.",
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'santehaalaa@gmail.com',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Istanbul, Turkey',
      href: 'https://www.google.ca/maps/place/%C4%B0stanbul/@41.0054632,28.8473759,11z',
    },
    {
      type: ContactType.Instagram,
      text: '@alaa.santeha',
      href: 'https://www.instagram.com/alaa.santeha/',
    },
    {
      type: ContactType.Github,
      text: 'alaasanteha',
      href: 'https://github.com/alaasanteha',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/alaasanteha'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/16721333/alaa-snteha'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alaa-snteha'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alaa.santeha/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/AlaaSanteha'},
];
