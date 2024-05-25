const detectMob = function () {
  return (window.innerWidth <= 800);
}
const isMobile = function () {
  try { document.createEvent("TouchEvent"); return true; }
  catch (e) { return false; }
}
const appender = (parent, elementName, innerHTML) => {
  let child = document.createElement(elementName);
  child.innerHTML = innerHTML;
  parent.appendChild(child);
}
const setter = function () {
  if (isMobile() && detectMob()) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
  Object.keys(user).forEach((key) => {
    if (document.getElementById(key)) {
      if (key === 'email') {
        document.getElementById(key).href = `mailto:${user[key]}?subject=Contact us&body=Contact me with this number`;
        document.getElementById(key).innerHTML = `&rarr; ${user[key]}`;
      } else if (key === 'phone') {
        document.getElementById(key).href = `tel:${user[key]}`;
        document.getElementById(key).innerHTML = `&rarr; ${user[key]}`;
      } else if (key === 'web') {
        document.getElementById(key).href = user[key];
        document.getElementById(key).innerHTML = `&rarr; ${user[key]}`;
      } else {
        document.getElementById(key).innerText = user[key];
      }
    }
  });
  const experiencesHTML = document.getElementById('experiences');
  experiences.forEach(e => {
    const card = document.createElement('div');
    card.className = 'experiences';
    appender(card, 'h4', e.as);
    appender(card, 'span', `${e.from} - ${e.to}`);
    appender(card, 'p', e.description);
    const tags = document.createElement('div');
    tags.className = 'tags';
    appender(tags, 'i', e.tags.map(t => `#${t}`).join(', '));
    card.appendChild(tags);
    const link = document.createElement('div');
    link.className = 'forward'
    const anchor = document.createElement('a');
    anchor.href=`/experience.html?id=${e.id}`
    anchor.innerHTML = `View more <span>&rarr;</span>`;
    link.appendChild(anchor);
    card.appendChild(link);
    experiencesHTML.appendChild(card);
  });
  const certificatesHTML = document.getElementById('certificates');
  certificates.forEach(e => {
    const card = document.createElement('div');
    card.className = 'certificates';
    appender(card, 'h4', `${e.description} `);
    appender(card, 'span', `Since ${e.year}`);
    const tags = document.createElement('div');
    appender(tags, 'i', e.tags.map(t => `#${t}`).join(', '));
    card.appendChild(tags);
    certificatesHTML.appendChild(card);
  });

  const educationsHTML = document.getElementById('educations');
  educations.forEach(e => {
    const card = document.createElement('div');
    card.className = 'educations';
    appender(card, 'h4', `${e.where} of ${e.as} in ${e.location}`);
    appender(card, 'span', `${e.from} - ${e.to}`);
    const tags = document.createElement('div');
    tags.className = 'tags';
    appender(tags, 'i', e.tags.map(t => `#${t}`).join(', '));
    card.appendChild(tags);
    educationsHTML.appendChild(card);
  });
  const skillsHTML = document.getElementById('skills');
  skills.forEach(e => appender(skillsHTML, 'li', e));
}