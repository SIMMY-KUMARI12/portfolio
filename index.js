
const profileData = {
    name: "Simmy Kumari",
    role: "Student | Web Developer | Learner",
    description:
        "I am a dedicated student with an interest in web development and software development.",
    image: "pimage/about_img.jpg"
};

// about section data
const aboutData = {
    text: `I am a Computer Science student passionate about web development, problem solving, and building real-world projects.
  I enjoy learning new technologies and improving my skills every day.`,
  image:"pimage/formal_passport_photo.jpeg"
};

// skills section data
const skillsData = {
    techSkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js (Basic)",
        "Java"
    ],

    coreSubjects: [
        "Operating Systems",
        "DBMS",
        "Computer Networks",
        "OOPs"
    ],

    dsa: [
        "Arrays",
        "Strings",
        "Linked List",
        "Stacks & Queues",
    ]
};

// education section data
const educationData = [
    {
        title: "10th Class",
        year: "2019",
        institute: "NS DAV Public School",
        location: "Ranchi, Jharkhand",
        score: "91.83%"
    },

    {
        title: "12th Class",
        year: "2021",
        institute: "NS DAV Public School",
        location: "Ranchi, Jharkhand",
        score: "90.50%"
    },

    {
        title: "B-Tech (CSE)",
        year: "2023 - 2027",
        institute: "CGU",
        location: "Bhubaneswar, Odisha",
        score: "9.21 CGPA"
    }
];

// certificate section dsta
const certificatesData = [
    {
        title: "FrontEnd Development Certificate",
        image: "pimage/WT.png",
        description:
            "Completed HTML, CSS, JavaScript and React. Helped me learn how the websites work, how  their structure is built. Learned to make the website more beautiful and functioning.",
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-bdb5e3dc-d9ca-4aed-b000-4b628d1cb7ef.jpg"
    },
    {
        title: "Smart Interviews - Smart Coder Certificate",
        image: "pimage/SI.png",
        description:
            "Solved the DSA problems from brute force to the optimized one.Helped me in learning how to approach a problem and solve it by breaking down into simple small small parts. ",
        link: "https://smartinterviews.in/certificate/2cb38dc3"
    },

];

const contactData = {
    email: "simmykumari825@gmail.com",
    phone: "+91 8252218677",
    linkedin: "https://www.linkedin.com/in/simmy-kumari-13544a28b/",
    github: "https://github.com/SIMMY-KUMARI12"
};

const footerData = {
    text: `Designed & Developed by Simmy Kumari.`
};

//  Home section

document.getElementById("home-name").innerText = `Hii
        I am ${profileData.name}`;
document.getElementById("home-role").innerText = profileData.role;
document.getElementById("home-description").innerText = profileData.description;
document.getElementById("profile-image").src = profileData.image;


// 3. About section
document.getElementById("about-text").innerText = aboutData.text;
document.querySelector(".about-image img").src = aboutData.image;

// 4. Skills function

function Skills() {

    const container = document.getElementById("skills-list");

    container.innerHTML = "";

    function createSkillBox(title, icon, items) {

        const box = document.createElement("div");
        box.className = "skill-box";

        // converting array items into tags
        const skillTags = items.map(skill =>
            `<span class="skill-tag">${skill}</span>`
        ).join("");

        box.innerHTML = `
        
            <div class="box-header">
                <i class="${icon}"></i>
                <h3>${title}</h3>
            </div>

            <div class="box-content">
                ${skillTags}
            </div>
        
        `;

        container.appendChild(box);
    }

    createSkillBox(
        "Technical Skills",
        "fa-solid fa-code",
        skillsData.techSkills
    );

    createSkillBox(
        "Core Subjects",
        "fa-solid fa-book",
        skillsData.coreSubjects
    );

    createSkillBox(
        "DSA & Problem Solving",
        "fa-solid fa-brain",
        skillsData.dsa
    );
}

Skills();



// Project section

const projects = [
    {
        title: "Shopping Website (Vite + JS)",
        image: "pimage/project1.png",
        description:
            "A responsive e-commerce website built using HTML, CSS, JavaScript and Vite. Includes product listing and UI interactions.",
        tech: "HTML, CSS, JavaScript, Vite",
        live: "https://vastra-site.vercel.app/",
        github: "https://github.com/SIMMY-KUMARI12/vastra_site"
    },

    {
        title: "Personal Portfolio Website",
        image: "portfolio.jpg",
        description:
            "My personal portfolio showcasing skills, education, certificates, and projects using dynamic JavaScript rendering.",
        tech: "HTML, CSS, JavaScript",
        live: "#",
        github: "#"
    }
];

// project function
const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-entry";

    card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">

    <div class="project-content">

      <h3>${project.title}</h3>

      <p>${project.description}</p>

      <div class="tech-stack">
        <strong>Tech Stack:</strong> ${project.tech}
      </div>

      <div class="project-links">
        <a href="${project.live}" target="_blank">Live</a>
        <a href="${project.github}" target="_blank">GitHub</a>
      </div>

    </div>
  `;

    container.appendChild(card);
});


// Education function

const educationContainer = document.getElementById("education-container");

educationData.forEach(item => {

    const card = document.createElement("div");

    card.className = "education-card";

    card.innerHTML = `

        <div class="education-top">

            <h3>${item.title}</h3>

            <div class="education-year">
                ${item.year}
            </div>

        </div>

        <div class="education-details">

            <p>
                <span>Institute</span>
                ${item.institute}
            </p>

            <p>
                <span>Location</span>
                ${item.location}
            </p>

            <p>
                <span>Score</span>
                ${item.score}
            </p>

        </div>

    `;

    educationContainer.appendChild(card);

});


// certificate

const certificateContainer = document.getElementById("certificate-container");

certificatesData.forEach(cert => {
    const card = document.createElement("div");
    card.className = "certificate-card";

    card.innerHTML = `
    <img src="${cert.image}" alt="${cert.title}">
    <div class="certificate-content">
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      <a href="${cert.link}" target="_blank">View Certificate</a>
    </div>
  `;

    certificateContainer.appendChild(card);
});


//  Contact 

document.getElementById("email-link").href = `mailto:${contactData.email}`;
document.getElementById("linkedin-link").href = `${contactData.linkedin}`;
document.getElementById("github-link").href = contactData.github;

//  Footer

document.getElementById("footer-text").innerText = footerData.text;