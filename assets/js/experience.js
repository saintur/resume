const detectMob = function () {
  return (window.innerWidth <= 800);
}
const isMobile = function () {
  try { document.createEvent("TouchEvent"); return true; }
  catch (e) { return false; }
}
const appender = (parent, elementName, innerHTML, className) => {
  let child = document.createElement(elementName);
  child.innerHTML = innerHTML;
  if (className) {
    child.className = className;
  }
  parent.appendChild(child);
}
const experience = function () {
  if (isMobile() && detectMob()) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
  Object.keys(user).forEach((key) => {
    if (document.getElementById(key)) {
      if (key === 'web') {
        document.getElementById(key).href = user[key];
      }
      if (['web', 'phone', 'email'].includes(key)) {
        document.getElementById(key).innerHTML = `${user[key]}`;
      } else {
        document.getElementById(key).innerText = user[key];
      }
    }
  });

  const projectsHTML = document.getElementById('projects');
  const params = new URLSearchParams(location.search);

  const detail = document.createElement('p')
  const id = +params.get('id')
  const exp = experiences.find(e => e.id === id)
  // detail.textContent = appender(projectsHTML, 'p', exp.description)

  projects.filter(p => p.expid === id).forEach(e => {

    const content = document.createElement('div');
    content.className = 'project-content';
    appender(content, 'strong', `${e.name} `);
    const techs = document.createElement('div');
    techs.className = 'technologies';
    appender(content, 'div', 'Technologies:', 'responsibilities');
    e.technologies?.forEach(tech => {
      appender(techs, 'div', `<img src="${tech}" />`, 'technology');
    })

    content.appendChild(techs);
    appender(content, 'div', 'Responsibilities:', 'responsibilities');
    const list = document.createElement('ul');
    e.responsibilities.forEach(r => appender(list, 'li', r));
    content.appendChild(list);

    const card = document.createElement('div');
    card.className = 'project';
    card.appendChild(content);

    const footer = document.createElement('div');
    footer.className = 'project-footer';
    appender(footer, 'div', `<img src="${e.logo}" />`, 'footer-logo');
    appender(footer, 'div', `As ${e.position}`);
    card.appendChild(footer);
    projectsHTML.appendChild(card);
  });

  const skillsHTML = document.getElementById('skills');
  skills.forEach(e => appender(skillsHTML, 'li', e));

}