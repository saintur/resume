const detectMob = function() {
  return ( window.innerWidth <= 800 );
}
const isMobile = function() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
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
      if (key === 'web') {
        document.getElementById(key).href = user[key];
      }
      if (['web', 'phone', 'email'].includes(key)) {
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
    appender(card, 'a', `&rarr; View experience`);
    experiencesHTML.appendChild(card);
  });
  const certificatesHTML = document.getElementById('certificates');
  certificates.forEach(e => {
    const card = document.createElement('div');
    card.className = 'certificates';
    appender(card, 'h4', `${e.description} ${e.year}`);
    appender(card, 'span', e.tags.join(', '));
    certificatesHTML.appendChild(card);
  });

  const educationsHTML = document.getElementById('educations');
  educations.forEach(e => {
    const card = document.createElement('div');
    card.className = 'educations';
    appender(card, 'h4',  `${e.where} of ${e.as} in ${e.location}`);
    appender(card, 'span',  `${e.from} - ${e.to}`);
    appender(card, 'p',  e.description ? e.description : 'Description');
    educationsHTML.appendChild(card);
  });
  const skillsHTML = document.getElementById('skills');
  skills.forEach(e => appender(skillsHTML, 'li', e));
}