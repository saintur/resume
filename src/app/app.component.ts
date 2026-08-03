import {AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface NewsItem {
  title: string;
  url: string;
  by: string;
  source: string;
  date: string;
  summary: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'resume';

  private http = inject(HttpClient);
  private zone = inject(NgZone);

  @ViewChild('workRow') workRow?: ElementRef<HTMLElement>;

  private cleanupParallax?: () => void;

  news: NewsItem[] = [];
  newsLoading = true;

  /** Projects grouped by their parent experience id (expid). */
  projectsByExperience: Record<number, any[]> = {};
  private expandedExperiences = new Set<number>();

  toggleExperience(id: number): void {
    if (this.expandedExperiences.has(id)) {
      this.expandedExperiences.delete(id);
    } else {
      this.expandedExperiences.add(id);
    }
  }

  isExperienceExpanded(id: number): boolean {
    return this.expandedExperiences.has(id);
  }

  ngOnInit(): void {
    this.projectsByExperience = this.projects.reduce((groups, project) => {
      (groups[project.expid] ??= []).push(project);
      return groups;
    }, {} as Record<number, any[]>);

  }

  ngAfterViewInit(): void {
    const row = this.workRow?.nativeElement;
    if (!row) {
      return;
    }

    const reduceMotion =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      return;
    }

    let frame = 0;
    const schedule = () => {
      if (frame) {
        return;
      }
      frame = requestAnimationFrame(() => {
        frame = 0;
        this.updateWorkParallax(row);
      });
    };

    this.zone.runOutsideAngular(() => {
      row.addEventListener('scroll', schedule, {passive: true});
      window.addEventListener('resize', schedule);
      // Initial pass, plus a delayed one once logo images have loaded/laid out.
      schedule();
      const warmup = setTimeout(schedule, 300);

      this.cleanupParallax = () => {
        row.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
        clearTimeout(warmup);
        if (frame) {
          cancelAnimationFrame(frame);
        }
      };
    });
  }

  ngOnDestroy(): void {
    this.cleanupParallax?.();
  }

  private updateWorkParallax(row: HTMLElement): void {
    // 0 at the start of the scroll, 1 when scrolled fully to the right.
    const maxScroll = row.scrollWidth - row.clientWidth;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, row.scrollLeft / maxScroll)) : 0;
    const positionX = `${progress * 100}%`;

    const logos = row.querySelectorAll<HTMLElement>('.work-logo');
    logos.forEach(logo => {
      logo.style.backgroundPositionX = positionX;
    });
  }

  private decodeHtml(input: string): string {
    const stripped = input.replace(/<[^>]*>/g, ' ');
    const entities: Record<string, string> = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#x27;': "'",
      '&#x2F;': '/',
      '&nbsp;': ' '
    };
    return stripped
      .replace(/&amp;|&lt;|&gt;|&quot;|&#x27;|&#x2F;|&nbsp;/g, match => entities[match])
      .replace(/\s+/g, ' ')
      .trim();
  }

  private truncate(text: string, max: number): string {
    return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
  }

  user = {
    firstname: 'Saintur',
    lastname: 'Batkhuu',
    fullname: 'Saintur Batkhuu',
    username: 'esaintor',
    email: 'saintur.batkhuu@gmail.com',
    web: 'https://www.linkedin.com/in/saintur',
    github: 'https://www.github.com/saintur',
    phone: '+1(646)238-8558',
    position: `Software Engineer · ${new Date().getFullYear() - 2017} years`,
    location: 'United States',
    detail: `Software engineer with ${new Date().getFullYear() - 2017}+ years building and shipping web applications end to end — from clean, considered interfaces to resilient, distributed back ends. I work across Java, Spring Boot, Angular, and micro-service architectures, and I use AI tools every day to design, write, review, and ship code faster — so I can spend more time on the problems that actually matter.`
  };
  experiences = [
    {
      id: 4,
      as: 'Software Engineer',
      where: 'John Deere via BHSG',
      from: 'Apr/2023',
      since: 2023,
      period: `${new Date().getFullYear() - 2023} years`,
      to: '',
      description: 'Working on an effort to modernize existing financial related legacy systems with cutting-edge technologies. Improving current workflow by AI-assisted development for fast delivery and quality result',
      tags: [{type: 'language', value: 'Java'}, {type: 'language', value: 'Typescript'}, {
        type: 'framework',
        value: 'NestJS'
      }, {type: 'framework', value: 'NextJS'}, {type: 'framework', value: 'Spring Boot'}, {
        type: 'infrastructure',
        value: 'AWS Lambda'
      }, {type: 'infrastructure', value: 'AWS Services'}, {
        type: 'tool',
        value: 'Jenkins'
      }]
    },
    {
      id: 1,
      as: 'Senior Full-Stack Developer',
      where: 'Novelsoft LLC',
      from: 'Dec/2019',
      since: 2019,
      period: `4 years`,
      to: 'Apr/2023',
      description: 'Managed multiple development teams in the company ' +
        'Mainly focused on web application development using Micro-services architecture ' +
        'Developed Real-Time Chat applications which can carry a vast number of user and provide video conference all across the platform',
      tags: [{type: 'language', value: 'Java'}, {type: 'language', value: 'Typescript'}, {
        type: 'language',
        value: 'Dart'
      }, {
        type: 'framework',
        value: 'Angular'
      }, {type: 'framework', value: 'Spring Boot'}, {type: 'framework', value: 'Flutter'}, {
        type: 'infrastructure',
        value: 'RabbitMQ'
      }, {
        type: 'infrastructure',
        value: 'Kafka'
      }, {type: 'infrastructure', value: 'AWS Lightsail'}, {
        type: 'tool',
        value: 'JHipster'
      }, {
        type: 'tool',
        value: 'Bitbucket Pipeline'
      }]
    },
    {
      id: 2,
      as: 'Software Developer',
      where: 'IT Zone LLC',
      from: new Date('Feb/2017'),
      since: 2017,
      period: `${2019 - 2017} years`,
      to: 'Dec/2019',
      description: 'Managed a product development team which is responsible for developing Document Management system and Car Parking system. ',
      tags: [{type: 'language', value: 'Java'}, {type: 'language', value: 'Typescript'}, {
        type: 'framework',
        value: 'Angular'
      }, {type: 'framework', value: 'Spring Boot'}, {type: 'tool', value: 'Dahua Technology'}, {
        type: 'tool',
        value: 'Tesseract'
      }]
    },
    // {
    //   id: 3,
    //   as: 'Front-end Developer',
    //   where: 'IT Zone LLC',
    //   from: 'Feb/2017',
    //   period: `${new Date('Oct/2018').getFullYear() - new Date('Feb/2017').getFullYear()} years`,
    //   to: 'Oct/2018',
    //   description: 'Participated front-end development in the company\'s Location Tracking system, Form Survey Web application, and Content Management system.',
    //   tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'C#', 'AmChart', 'D3.js']
    // }
  ];
  projects = [
    {
      expid: 1,
      name: 'Hoome Platform',
      image: '/assets/images/homesocial.png',
      client: 'Homebook Team',
      duration: '8 months',
      position: 'Technology Architect',
      where: 'Novelsoft LLC',
      logo: 'https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150h000005670cAAA&oid=00DE0000000c48tMAA',
      technologies: [
        'https://assets.exitcertified.com/assets/Uploads/MICROSERVICES_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka_wordtype.svg',
        'https://upload.wikimedia.org/wikipedia/commons/7/71/RabbitMQ_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg',
        'https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a7b0d36a9.png'
      ],
      responsibilities: [
        'Designed micro-services architecture for core services that communicates with Kafka, RabbitMQ',
        'Contributed as a Senior level full-stack developer',
        'Developed mobile application using the latest Flutter framework',
        'Developed real-time chat web application using Angular framework',
        'Improved previously developed Document Management System',
        'Accomplished the employee of the year 2021',
      ],
    },
    {
      expid: 1,
      name: 'Department of National Social Insurance',
      image: '/assets/images/ndaatgal.png',
      client: 'Government',
      duration: '13 months',
      position: 'Senior Full-stack Developer',
      where: 'Novelsoft LLC',
      logo: 'https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150h000005670cAAA&oid=00DE0000000c48tMAA',
      technologies: [
        'https://assets.exitcertified.com/assets/Uploads/MICROSERVICES_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka_wordtype.svg',
        'https://cdn.worldvectorlogo.com/logos/angular-3.svg'
      ],
      responsibilities: [
        'Designed micro-services architecture for core services and developed flexible form structure that is easily changeable',
        'Introduced a developer’s policy in the company to improve our development process',
        'Mentored over 20 developers in the company',
        'Contributed as a Senior level full-stack developer',
        'Automated software deployment in company version control system',
      ]
    },
    {
      expid: 2,
      name: 'Docmine - Document Management System',
      image: '/assets/images/ndaatgal.png',
      client: 'Government',
      duration: '13 months',
      position: 'Senior Full-stack Developer',
      where: 'Novelsoft LLC',
      logo: 'https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150h000005670cAAA&oid=00DE0000000c48tMAA',
      technologies: [
        'https://assets.exitcertified.com/assets/Uploads/MICROSERVICES_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
        'https://cdn.worldvectorlogo.com/logos/angular-3.svg',
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Tesseract_OCR_logo_%28Google%29.png'
      ],
      responsibilities: [
        'Designed micro-services architecture for core services and developed flexible form structure that is easily changeable',
        'Contributed as a Senior level full-stack developer',
        'Promoted from front end developer to senior software developer',
      ]
    },
    {
      expid: 2,
      name: 'Parking System',
      image: '/assets/images/ndaatgal.png',
      client: 'Shangri-la Center',
      duration: '13 months',
      position: 'Senior Full-stack Developer',
      where: 'Novelsoft LLC',
      logo: 'https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150h000005670cAAA&oid=00DE0000000c48tMAA',
      technologies: [
        'https://assets.exitcertified.com/assets/Uploads/MICROSERVICES_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
        'https://cdn.worldvectorlogo.com/logos/angular-3.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg'
      ],
      responsibilities: [
        'Designed micro-services architecture for core services and developed flexible form structure that is easily changeable',
        'Contributed as a Senior level full-stack developer in this project',
        'Introduced a new tool to improve development process by 30%',
      ]
    },
    {
      expid: 2,
      name: 'edaatgal',
      image: '/assets/images/ndaatgal.png',
      client: 'Tenger Daatgal',
      duration: '13 months',
      position: 'Full-stack Developer',
      where: 'ITZone LLC',
      logo: 'https://itzone.mn/image/logo.svg',
      technologies: [
        'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
        'https://cdn.worldvectorlogo.com/logos/angular-3.svg'
      ],
      responsibilities: [
        'Designed flexible form data storing structure in the RDBMs',
        'Contributed as a Full stack developer in this project',
      ]
    },
    {
      expid: 2,
      name: 'OT Drive',
      image: '/assets/images/ndaatgal.png',
      client: 'Oyu-tolgoi LLC',
      duration: '13 months',
      position: 'Front-end Developer',
      where: 'ITZone LLC',
      logo: 'https://itzone.mn/image/logo.svg',
      technologies: [
        'https://www.amcharts.com/wp-content/uploads/2017/10/amcharts_light_transparent.png',
        'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'
      ],
      responsibilities: [
        'Participated Data visualization team to improve useful charts for client',
      ]
    },
    {
      expid: 2,
      name: 'Compassmate',
      image: '/assets/images/ndaatgal.png',
      client: 'Software Team',
      duration: '13 months',
      position: 'Front-end Developer',
      where: 'ITZone LLC',
      logo: 'https://itzone.mn/image/logo.svg',
      technologies: [
        'http://pulseinfotech.com/images/extjs.jpg'
      ],
      responsibilities: [
        'Developed web application for Location Tracking system using ExtJS',
      ]
    },
    {
      expid: 4,
      name: 'John Deere Financial',
      image: '/assets/images/homesocial.png',
      client: 'Spotted Cows',
      duration: '...',
      position: 'Software Engineer',
      where: 'John Deere Financial',
      logo: 'https://1000logos.net/wp-content/uploads/2017/03/John-Deere-Logo.png',
      technologies: [],
      responsibilities: [
        'Developing and implementing front web application using React JS, HTML5, CSS, SASS, SCSS, Javascript, NodeJS, Express with version control like Bitbucket, GitHub, Gitlab, IDEs like Visual Studio Code and Linux terminal interface. ',
        'Understanding state management patterns like Redux, Hooks and other patterns related to Javascript Frameworks',
        'Implementing Test Driven Programming using Chai, Jasmine, Jest, Mocha, Junit, and writing source code using tools like SonarQube, lint. ',
        'Assisting teams in development and resolving the issues in ReactJS and NodeJS in both ends.',
        'Developing new features as per business requirements, designing software architectures, integrating and improving current state of software development with agile methodology.',
        'Being involved in sprint planning and provide guideline to plan, estimate product backlogs using given tools such as Jira. ',
        'Reviewing codes using Pull Request technique and following the coding guideline and standards for the following frameworks: ReactJS, NodeJS, Spring Boot, any new frameworks that the team implementing in the future. ',
      ],
    },
  ]
  certificates = [
    {
      description: 'Java programming Certificate',
      year: 'Oct/2012',
      tags: ['Java', 'Object oriented programming', 'Web app']
    },
    {
      description: 'Programming Technique Certificate',
      year: 'Feb/2013',
      tags: ['HTML', 'Javascript', 'Web development', 'Algorithm']
    },
    {
      description: 'Microsoft Office Certificate',
      year: 'July/2013',
      tags: ['Office', 'Windows 7']
    },
  ];
  miscellaneous = [{
    description: 'Certified Java Programming in India',
    year: 'Oct/2012',
    score: '',
    tags: ['Java', 'Object oriented programming', 'Web app', 'Aptech Education Center']
  },{
    description: 'IELTS',
    year: 'Aug/2026',
    score: '7 overall',
    tags: ['English', 'British Council']
  },];
  educations = [
    {
      as: 'Software Development',
      where: 'Master of Software Development at MIU',
      location: 'USA ',
      from: 'Apr/2022',
      to: 'Dec/2024',
      tags: ['Spring Framework', 'Angular Framework', 'React JS Framework', 'Google Cloud K8s', 'AWS S3, EC2', 'Kubernetes', 'Docker']
    },
    {
      as: 'Information system',
      where: 'Bachelor of Information System at MUST',
      location: 'Mongolia ',
      from: 'Jan/2013',
      to: 'Jan/2017',
      tags: ['GPA 3.3', 'Java development', 'Android', 'System automation']
    },
    // {
    //   as: 'Certified Software Engineer',
    //   where: 'Aptech Education',
    //   location: 'India ',
    //   from: 'Aug/2012',
    //   to: 'Jul/2013',
    //   tags: ['Java', 'Javascript', 'Microsoft office', 'Web', 'Windows 7']
    // }
  ];
  skills = [
    'Java',
    'Spring Boot',
    'Angular',
    'Reactjs',
    'Nextjs',
    'Nestjs',
    'Node.js',
    'Flutter',
    'AWS',
    'Micro-Services',
    'Kafka',
    'RabbitMQ',
    'Docker',
    'Terraform',
    'Kubernetes',
    'AI-Assisted development',
    'Cursor',
    'LLM integration',
  ];

  works = [
    {
      title: 'Daaluu',
      cover: 'https://saintur.github.io/cdn.daaluu/assets/icons/daaluu.svg',
      description: 'Real-time traditional game of Domino',
      link: 'https://daaluu.mn'
    },
    {
      title: 'Hoome',
      cover: 'https://hoome.mn/hoome-logo.25bf8bc6d7b49c1a.svg',
      description: 'Social platform for Homeowners Association',
      link: ''
    },
    {
      title: 'Coach Niana',
      cover: '/images/docmine.svg',
      description: 'Document management system',
      link: ''
    },
    {
      title: 'Coach Niana',
      cover: '/images/niana.png',
      description: 'Online shopping and training course app',
      link: ''
    },
    {
      title: 'mn-address',
      cover: '/images/NPM.png',
      description: 'Mongolian zipcode and address lookup package',
      link: 'https://www.npmjs.com/package/mn-address'
    }
  ]


  letters = [
    {
      id: 1,
      ownerName: 'Tseeesuren Batsuuri',
      ownerPosition: 'CEO of Novelsoft LLC',
      ownerPhone: '+976 80808080',
      ownerEmail: 'tseesuren.b@novelsoft.mn',
      paragraphs: [
        'I have known him for the last 5 years. I have been managing the software development team and data team. It is my great pleasure to inform you that he is one of the key software developers in our company.',
        'He is a brilliant engineer who picks up things so fast and put them into implementation with very good quality. He is well organized, very creative, and dependable. He has shown great leadership skills as he was appointed by me as the Chief Technology Architect in the company. Professionally he is responsible and has a great ability for critical thinking.',
        'As mentioned, he is the chief technology architect of my company. He has excellent programming skills in Java and JavaScript along with my modern technologies including Spring framework, Microservice, event-driven architecture, DevOps, and all. He was the key engineer and architect in many past projects including our parking system solution for Shangri-la shopping mall, document management system for Trade and Development Bank (the second-biggest bank), the first online insurance system for Tenger Daatgal (www.edaatgal.mn), and the core system of Social Insurance Genera Authority of Mongolia so on so forth.',
        'In conclusion, I would highly recommend Saintur for the position of Software Developer. I strongly believe that he will live up to your job’s expectations.'
      ]
    },
    {
      id: 2,
      ownerName: 'Tuguldur Tumenbayar',
      ownerPosition: 'Current Vice President of Novelsoft LLC, Former Head of Development of ITZone LLC',
      ownerPhone: '+976 80808080',
      ownerEmail: 'tuguldur.t@novelsoft.mn',
      paragraphs: [
        'It is with great sadness that I recommend Saintur Batkhuu to you as an excellent Software Developer. I have known him for the past 5 years and I feel that he is a deserving candidate for the position of Software Developer.',
        'Saintur joined our company in 2017 as a Front-end Developer; with the immense learning ability and skills he collected in the first few projects, he gained his position as a Full-stack Software Developer in the software branch in just one year. And soon he was promoted to be a Senior Software Developer, he has been proving his excellent leadership qualities. He has been led a software team to complete many projects including government tender development. He has a strong dedication and takes incredible initiative to do work effectively and efficiently',
        'I believe that Saintur has all the abilities and qualities which are required for the position of a software developer. I highly recommend Saintur Batkhuu for the responsible post of software developer and hope that you will carefully consider this letter of recommendation.'
      ]
    }
  ]
}
