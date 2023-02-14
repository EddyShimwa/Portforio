const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const crossIcon = document.getElementById('cross-icon');
const allNavLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  mobileNav.classList.toggle('df');
}

hamburger.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleNav);
});

// workData
const worksData = [
  {
    id: 'project1',
    title: 'Todo app',
    frame: ['To-do app', 'Front End Dev', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/todo-appp.png',
    projectDetails:
      "This to-do list app is a digital tool that helps users organize their tasks and manage their daily activities. The app typically allows users to create lists of tasks, set due dates and reminders, prioritize tasks, and mark completed items. Some apps also offer additional features such as note-taking, collaboration with others, and integration with calendars or other productivity tools. The goal of a to-do list app is to help users stay on track with their goals and improve their productivity.",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Leaderboard App',
    frame: ['Leaderboard', 'Front end DEV', 2022],
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/leaderb.PNG',
    projectDetails:
      "This JavaScript app is designed to display the scores and names of players in a user-friendly interface. It is a simple yet effective tool for tracking and recording game scores. Users can easily add their names and scores to the app, and the app will display the information in a clear and concise manner. This app is great for anyone who wants to keep track of their game scores, such as for board games or sports. Its simplicity makes it easy to use and understand, making it a great option for both beginners and experienced users.",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'Bookstore App',
    frame: ['Bookstore', 'Front End Dev', 2023],
    tags: ['React.js', 'CSS', 'Javascript'],
    imageUrl: '../images/BOOKSTOREe',
    projectDetails:
      "With this book-store app, users can enjoy a seamless and personalized reading experience. The app allows users to add books to their personal library with ease, set reading goals, and track their progress over time. Users can easily update their reading status, mark books as read, and receive recommendations based on their reading history and preferences. Additionally, the app may offer social features such as the ability to connect with friends, join book clubs, and share reading updates. Overall, this app is a must-have for book lovers who want to stay organized and motivated in their reading journey.",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Explore-America',
    frame: ['Mobile', 'Front End DEV', 2023],
    tags: ['React.js', 'CSS'],
    imageUrl: './images/combined',
    projectDetails:
      "This is the mobile based app where a user can just click on country and view the details about that country!",
    liveLink: '#',
    sourceLink: '#',
  },
];

function fetchOneProject(id) {
  let project = {};

  for (let i = 0; i < worksData.length; i += 1) {
    if (id === worksData[i].id) {
      project = worksData[i];
    }
  }

  const popContainer = document.querySelector('.container');
  const popupModal = document.createElement('article');
  popupModal.classList.add('article-popup');

  const articleModal = document.createElement('div');
  articleModal.classList.add('article-modal');
  const crossIcon = document.createElement('span');
  crossIcon.setAttribute('id', 'cross-article');
  crossIcon.innerHTML = '<img src="./images/cross-article.png" alt="X"/>';
  crossIcon.addEventListener('click', () => {
    popContainer.removeChild(popupModal);
  });

  const title = document.createElement('h2');
  title.classList.add('article-title');
  title.innerText = project.title;

  const frames = document.createElement('ul');
  frames.classList.add('frames');
  project.frame.forEach((tag) => {
    const frame = document.createElement('li');
    frame.classList.add('frame');
    frame.innerText = tag;
    frames.appendChild(frame);
  });

  const imgPrev = document.createElement('div');
  imgPrev.classList.add('img-prev');
  const articleImg = document.createElement('img');
  articleImg.setAttribute('atl', project.title);
  articleImg.setAttribute('src', project.imageUrl);
  imgPrev.appendChild(articleImg);

  const articleBlock = document.createElement('div');
  articleBlock.classList.add('article-block');

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  const articleDetails = document.createElement('p');
  articleDetails.classList.add('article-details');
  articleDetails.innerText = project.projectDetails;
  leftBlock.append(articleDetails);

  const br = document.createElement('hr');

  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block');

  const articleTags = document.createElement('ul');
  articleTags.classList.add('article-tags');

  project.tags.forEach((tag) => {
    const taglist = document.createElement('li');
    taglist.classList.add('article-tag');
    taglist.innerText = tag;
    articleTags.append(taglist);
  });

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const actBtn = document.createElement('a');
  actBtn.classList.add('act-btn');
  actBtn.setAttribute('href', project.liveLink);
  actBtn.innerHTML = "See Live <img src='./images/live-link.png' alt='live-link'>";
  actions.appendChild(actBtn);

  const actBtnSource = document.createElement('a');
  actBtnSource.classList.add('act-btn');
  actBtnSource.setAttribute('href', project.sourceLink);
  actBtnSource.innerHTML = "See Source <img src='./images/source-link.png' alt='source-link'>";
  actions.appendChild(actBtnSource);

  rightBlock.append(articleTags, br, actions);

  articleBlock.append(leftBlock, rightBlock);

  articleModal.append(crossIcon, title, frames, imgPrev, articleBlock);
  popupModal.append(articleModal);

  popContainer.append(popupModal);
}

const actionsBtn = document.querySelectorAll('.see-more-action');
actionsBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const { id } = e.target;
    fetchOneProject(id);
  });
});
