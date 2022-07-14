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
const letter = function () {
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
  const skillsHTML = document.getElementById('skills');
  skills.forEach(e => appender(skillsHTML, 'li', e));

  const params = new URLSearchParams(location.search);
  const letter = letters.find(l => l.id == params.get('letter'));
  console.log(letter)
  
  Object.keys(letter).forEach((key) => {
    if (document.getElementById(key)) {
      document.getElementById(key).innerText = letter[key];
    }
  });

  letter.paragraphs.forEach(paragraph => {
    const parent = document.getElementById('letterContent');
    parent.className = 'paragraphs';
    appender(parent, 'p', paragraph);
  });
}