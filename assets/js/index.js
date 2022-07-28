//====================================================PROJECTS-CARDS DATA======================================================//
const projectsData = [
  {
    name: 'Tonic',
    client: 'CANOPY',
    id: 1,
    year: 2015,
    image: '/assets/img/snapshoot-protfolio-1.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },
  {
    name: 'Multi post Stories',
    client: 'CANOPY',
    id: 2,
    year: 2020,
    image: '/assets/img/snapshoot-protfolio-2.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },

  {
    name: 'Tonic',
    client: 'CANOPY',
    year: 2019,
    id: 3,
    image: '/assets/img/snapshoot-protfolio-3.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },

  {
    name: 'Multi post Stories',
    client: 'CANOPY',
    year: 2020,
    id: 4,
    image: '/assets/img/snapshoot-protfolio-4.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveVersion: 'https://zikazaki.github.io/zikazaki-folio/',
    source: 'https://github.com/ZikaZaki/zikazaki-folio',
  },
];

const myBlurFunction = function (state) {
  /* state can be 1='blur' or 0='no blur' */
  const blurElements = [
    document.getElementById('main'),
    document.getElementById('logo'),
  ];

  if (state) {
    blurElements.forEach((e) => {
      e.classList.add('blur');
    });

    // Setting the background-color of the close icon to white
    document.getElementById('bar1').style.backgroundColor = '#fff';
    document.getElementById('bar3').style.backgroundColor = '#fff';
  } else {
    blurElements.forEach((e) => {
      e.classList.remove('blur');
    });

    // Resetting the background-color of the close icon to its original color
    document.getElementById('bar1').style.backgroundColor = '#3a4adb';
    document.getElementById('bar3').style.backgroundColor = '#3a4adb';
  }
};

const toggleMenu = function (menu) {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    myBlurFunction(1);
  } else {
    myBlurFunction(0);
  }
};

//=====================================================DETAILS POPUP========================================================//
function createProjectCard(pid){
// Get the modal_content div
var popupProjectCard = document.getElementById("popupProjectCard");
// Project title
const projName = document.createElement('div');
projName.classList.add('popup-project-title');
const h2 = document.createElement('h2');
h2.innerText = projectsData[pid].name;
projName.appendChild(h2);
popupProjectCard.appendChild(projName);
// Client-frame
const clientFrame = document.createElement('div');
clientFrame.classList.add('popup-client-frame');
/* CLIENT NAME */
var ul = document.createElement('ul');
var li = document.createElement('li');
var clientName = document.createElement('div');
clientName.classList.add('popup-client-name');
var h3 = document.createElement('h3');
h3.innerText = 'CANOPY';
clientName.appendChild(h3);
li.appendChild(clientName);
ul.appendChild(li);
/* ROLE TXT */
var li = document.createElement('li');
var roleTxt = document.createElement('div');
// roleTxt.classList.add('role-txt');
var span = document.createElement('span');
span.classList.add('solid-circle');
span.innerHTML = '&#9679;';
roleTxt.appendChild(span);
var h3 = document.createElement('h3');
h3.innerText = 'Back End Dev';
roleTxt.appendChild(h3);
li.appendChild(roleTxt);
ul.appendChild(li);
/* YEAR TXT */
var li = document.createElement('li');
var yearTxt = document.createElement('div');
// yearTxt.classList.add('year-txt');
var span = document.createElement('span');
span.classList.add('solid-circle');
span.innerHTML = '&#9679;';
yearTxt.appendChild(span);
var h3 = document.createElement('h3');
h3.innerText = projectsData[pid].year;
yearTxt.appendChild(h3);
li.appendChild(yearTxt);
ul.appendChild(li);
/* Finally append the whole 'ul' list to clientFrame */
clientFrame.appendChild(ul);
popupProjectCard.appendChild(clientFrame);
/* ADD IMAGE SNAPSHOOT-PORTFOLIO */
const imgPortfolio = document.createElement('div');
imgPortfolio.classList.add('popup-snapshoot-portfolio');
const img = document.createElement('img');
img.setAttribute('src', projectsData[pid].image, 'alt', 'project' + (pid+1) + 'image');
imgPortfolio.appendChild(img);
popupProjectCard.appendChild(imgPortfolio);
/* ADD DESCRIPTION & ACTION-BUTTONS & TAGS CONTAINER */
const desc_container = document.createElement('div');
desc_container.classList.add('popup-description-container');
/* ADD DESCRIPTION */
const description = document.createElement('div');
description.classList.add('popup-detail-txt');
var p = document.createElement('p');
p.innerText = projectsData[pid].description;
description.appendChild(p);
desc_container.appendChild(description);
/* ADD TAGS & ACTION-BUTTONS CONTAINER */
const action_container = document.createElement('div');
action_container.classList.add('popup-action-container');
/* ADD TAGS */
const tags = document.createElement('div');
tags.classList.add('popup-tags');
var ul = document.createElement('ul');
var li = document.createElement('li');
li.innerText = 'html';
ul.appendChild(li);
var li = document.createElement('li');
li.innerText = 'css';
ul.appendChild(li);
var li = document.createElement('li');
li.innerText = 'javascript';
ul.appendChild(li);
tags.appendChild(ul);
action_container.appendChild(tags);
/* ADD ACTION-BUTTONS */
var popup_action = document.createElement('div');
popup_action.classList.add('popup-action');
var a = document.createElement('a');
a.href = projectsData[pid].liveVersion;
var btn = document.createElement('button');
btn.innerHTML = 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
a.appendChild(btn);
popup_action.appendChild(a);
var a = document.createElement('a');
a.href = projectsData[pid].source;
var btn = document.createElement('button');
btn.innerHTML = 'Source Code <i class="fa-brands fa-github"></i>';
a.appendChild(btn);
popup_action.appendChild(a);
action_container.appendChild(popup_action);
desc_container.appendChild(action_container);
popupProjectCard.appendChild(desc_container);
}

// Get the modal
var modal = document.getElementById("projectDetails");
// When the user clicks on the button, open the modal
function popupDetails (proj_id) {
  createProjectCard(proj_id-1);
  modal.style.display = "inline-block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // This while removes all the CARD child-elements.
  while (popupProjectCard.firstChild) {
    popupProjectCard.removeChild(popupProjectCard.firstChild);
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // This while removes all the CARD child-elements.
    while (popupProjectCard.firstChild) {
      popupProjectCard.removeChild(popupProjectCard.firstChild);
    }
  }
}
