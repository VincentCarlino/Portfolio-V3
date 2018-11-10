import { MassHike } from '../components/Projects/Project'

export default {
    'catalant': {
        name: 'Catalant',
        tagline: 'An online marketplace dedicated to getting work done faster and smarter',
        article: [{'tag': 'p', 'content': 'I\’m currently employed as a full-stack engineer at Catalant, a startup located in the Seaport area of Boston, as a part of Northeastern University’s cooperative education program.  At Catalant, I work with other engineers to build an online marketplace where small and large businesses can hire expert talent on a per-project basis.  By making hiring a short-term commitment, we\’re speeding up work happening all around the world.'},
                    {'tag': 'p', 'content': 'Our stack relies primarily on Python and Flask, but our development process allows me to touch all domains of our codebase including Javascript, SQL, and even our own internal  custom frameworks. Seeing as this is my first full-time position as a developer, I\’ve solidified my passion for programming.  Before joining Catalant, I knew little about the stack, so the first few months of my employment required me to acquire new skills quickly.  While the learning curve was steep, I am now incredibly comfortable with agile development cycles, version control, and debugging code when necessary.  Working as a developer full time certainly encouraged growth as a developer as I became increasingly independent, efficient, and persistent in executing my projects.'}],
        image: '/static/ct-desktop.png',
        mobile: '/static/ct-mobile.png',
        start: 'July 2018',
        end: 'Present',
        skills: ['Python', 'HTML', 'CSS', 'Flask'],
        to: '/projects/catalant',
        roles: ['Engineer'],
        link: 'https://gocatalant.com/'
    },
    'mass-hike': {
        name: 'Mass Hike',
        tagline: 'A marketing site and booking platform that brings Boston closer to nature',
        article: [{'tag': 'p', 'content': 'At the start of 2018, I joined Scout, Northeastern University’s’s student-led design studio, as a developer for their Studio team.  My team consisted of two designers, a project lead, another designer, and myself.'},
                    {'tag': 'p', 'content': 'We worked closely with Masshike, a local non-profit that offers affordable transportation and guided hikes to residents of the Greater Boston area.  Our goals were to deliver new brand assets, a marketing website, and an original booking platform for Masshike.  I became primarily responsible for developing the new marketing website.  Using React/Redux, Prismic CMS, and with help from my supportive team at Scout, I built a marketing platform that aligned with Masshike’s mission and updated identity. '},
                    {'tag': 'p', 'content': 'The Masshike project was my first time building in a Javascript framework, and gave me a better understanding of more popular technology stacks.  Through this project, I also learned to work in an agile development cycle and became immersed in the process of building a product and brand.  This experience sparked a greater interest in design and branding as I collaborated with designers for the first time.  I also discovered the merits of developing a web product as part of a larger team, as my past experiences had been with solo or pair programming.'}],
        image: '/static/masshike-desktop.png',
        mobile: '/static/masshike-mobile.png',
        logo: '/static/masshike-logo.svg',
        start: 'January 2018',
        end: 'April 2018',
        skills: ['React', 'Javascript'],
        to: '/projects/mass-hike',
        roles: ['Developer'],
        github: 'https://github.com/masshikedev/mass-hike-ui',
        link: 'https://masshike.org'
    },
    'portfolio-v3': {
        name: 'Web Portfolio V3',
        tagline: 'Another attempt at personal branding',
        article: [{'tag': 'p', 'content': 'After seeing the amazing talent of the designers of Scout, Northeastern University’s student-led design studio, I found myself unsatisfied with the state of my second portfolio website.  While I loved the bright colors and friendly design, I thought the site looked too confined and boxy and was no longer an accurate representation of my abilities as a developer.  I also wanted to expand my knowledge of javascript frameworks, so I researched my options and decided to build using Vue.js.  I quickly learned how to work within the framework as the official documentation on Vue.js clear and easy to understand.'},
                    {'tag': 'p', 'content': 'While I created Portfolio V2 over the course of one month, I made sure to allow for more time to carefully plan out V3.  I began by drawing rough sketches of wireframes and then transfered my ideas to Adobe XD.  After about 2 months of careful planning, I finally began to write code.'},
                {'tag': 'p', 'content': 'This site is still a work in progress (in fact I\’m probably working on it right now) and I still plan to refine much of the experience within the next month, but I already consider it a huge step in the right direction from my previous iterations.'}],
        image: '/static/portfolio-v3-desktop.png',
        start: 'June 2018',
        end: 'Present',
        skills: ['Vue.js'],
        to: '/projects/portfolio-v3',
        roles: ['Developer', 'Designer'],
        github: 'https://github.com/VincentCarlino/Portfolio-V3'
    },
    'dnd': {
        name: 'D&DB',
        tagline: 'A stylish tool for tracking easy-to-lose data in Dungeons and Dragons',
        article: [{'tag': 'p', 'content': 'As a final project in a course on Database Design, I was asked to make an application that allows users to create and update information that\'s stored in a database.  This application could be about anything as long as users could perform all CRUD (Create, Read, Update, Delete) operations on our databases.  At the time of this assignment, I was becoming increasingly interested in the game Dungeons and Dragons.  As someone who struggles with creating stories, I loved the limitless possiblities of cooperative storytelling.'},
                    {'tag': 'p', 'content': 'However, I noticed most online tools for D&D were unrefined or required payment to track simple information like character statisticss.  I set out to create a basic character tracking web-app that would allow users to create new characters, races, and classes, and track their progress on their characters.'},
                {'tag': 'p', 'content': 'This project was written with Flask handling all user requests to the MySQL database.  I created a database scheme from scratch and learned the Flask framework along the way in preparation for my future position at Catalant.'}],
        image: '/static/dndb-desktop.png',
        start: 'January 2018',
        end: 'April 2018',
        skills: ['SQL', 'Python', 'Flask', 'HTML', 'CSS'],
        to: '/projects/dnd',
        roles: ['Developer', 'Designer'],
        github: 'https://github.com/VincentCarlino/DND-DB'
    },
    'portfolio-v2': {
        name: 'Web Portfolio V2',
        tagline: 'A foray into personal branding and web design',
        article: [{'tag': 'p', 'content': 'In early 2017, I attended a workshop by Northeastern University’s Women in Tech Club that discussed the beginner\’s website construction.  The class primarily centered around how to use Bootstrap and HTML to design a portfolio site that would be ready for deployment on Github Pages.  I found myself fascinated by the creativity that web design and development granted and quickly released a rough one-page portfolio.'},
                {'tag': 'p', 'content': 'Later that year, I continued researching basic web technologies and learned more about common practices for web styling.  I then released a second iteration of my portfolio.  My primary goals for this change were to give the site a visual upgrade, and replace pixel-sized styling with a more responsive and consistent layout.  I created the site without the use of any styling framework such as Bootstrap, and aimed to move away from the \"professional\" look of V1 and introduce a bright and colorful visual design for myself.  '}],
        image: '/static/portfolio-v2-desktop.png',
        start: 'January 2018',
        end: 'April 2018',
        skills: ['HTML', 'CSS'],
        to: '/projects/portfolio-v2',
        roles: ['Developer', 'Designer'],
        github: 'https://github.com/VincentCarlino/Web-Portfolio-V2'
    },
    'righttype': {
        name: 'RightType',
        tagline: 'A simple application to test typeface combinations',
        article: [{'tag': 'p', 'content': 'After diving further into web design with my second portfolio website, I hoped to continue programming to push myself to accomplish even more in terms of web design and basic web technologies.  I did some research on typography and began to toy around with Google Fonts, creating fun combinations of their various free typefaces.  I created a single page web app using HTML/CSS and Javascript that allows users to test combinations of typefaces through Google Fonts.  '}],
        image: '/static/righttype-desktop.png',
        start: 'August 2017',
        end: 'September 2017',
        skills: ['Javascript', 'HTML', 'CSS'],
        to: '/projects/righttype',
        roles: ['Developer', 'Designer']
    },
    'art': {
        name: 'Art',
        tagline: 'A collection of my personal doodles and drawings',
        image: '/static/art/wc.jpg',
        to: '/art'
    }

}