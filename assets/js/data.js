const user = {
  firstname: 'Saintur',
  lastname: 'Batkhuu',
  fullname: 'Saintur Batkhuu',
  username: 'esaintor',
  email: 'esaintor@gmail.com',
  web: 'https://esaintor.github.io/resume',
  phone: '+1(646)238-8558',
  position: 'Software Developer 5+ years',
  detail: 'Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Proficient in an assortment of technologies, including Java, Angular, Kafka, and Micro-services architecture.'
};
const experiences = [
  {
    id: 1,
    as: 'Senior Full-Stack Developer',
    where: 'Novelsoft LLC',
    from: 'Dec/2019',
    to: 'Apr/2022',
    description: 'Managed multiple development team in the company\n' +
    'Mainly focused on web application development using Micro-services architecture\n' +
    'Developed Real-Time Chat applications which can carry a vast number of user and provide video conference all across the platform',
    tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'RabbitMQ', 'Kafka', 'Ream-Time']
  },
  {
    id: 2,
    as: 'Senior Software Developer',
    where: 'IT Zone LLC',
    from: 'Oct/2018',
    to: 'Dec/2019',
    description: 'Managed a product development team which is responsible for developing Document Management system and Car Parking system. ',
    tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'Dahua Technology', 'Tesseract']
  },
  {
    id: 3,
    as: 'Front-end Developer',
    where: 'IT Zone LLC',
    from: 'Feb/2017',
    to: 'Oct/2018',
    description: 'Participated front-end development in the company\'s Location Tracking system, Form Survey Web application, and Content Management system.',
    tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'C#', 'AmChart', 'D3.js']
  }
];
const projects = [
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
    expid: 3,
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
    expid: 3,
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
  }
]
const certificates = [
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
const educations = [
  {
    as: 'Software Development',
    where: 'Maharishi International Univesity',
    location: 'USA 🇺🇸',
    from: 'Apr/2022',
    to: 'Currently studying',
    tags: ['Spring Framework', 'Angular Framework', 'React JS Framework', 'Google Cloud K8s', 'AWS S3, EC2', 'Kubernetes', 'Docker']
  },
  {
    as: 'Information system',
    where: 'Mongolian University of Science and Technology',
    location: 'Mongolia 🇲🇳',
    from: 'Jan/2013',
    to: 'Jan/2017',
    tags: ['GPA 3.3', 'Java development', 'Android', 'System automation']
  },
  {
    as: 'Certified Software Engineer',
    where: 'Aptech Education',
    location: 'India 🇮🇳',
    from: 'Aug/2012',
    to: 'Jul/2013',
    tags: ['Java', 'Javascript', 'Microsoft office', 'Web', 'Windows 7']
  }
];
const skills = [
  'java programming',
  'spring framework',
  'angular framework',
  'react framework',
  'flutter framework',
  'micro-services design',
  'kafka message broker',
  'rabbitMQ',
  'docker environment',
  'kubernetes environment',
];


const letters = [
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
