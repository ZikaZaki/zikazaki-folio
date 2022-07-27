const myBlurFunction = function (state) {
  /* state can be 1 or 0 */
  const blurElements = [
    document.getElementById("main"),
    document.getElementById("logo"),
  ];

  if (state) {
    blurElements.forEach((e) => {
      e.classList.add("blur");
    });

    // Setting the background-color of the close icon to white
    document.getElementById("bar1").style.backgroundColor = "#fff";
    document.getElementById("bar3").style.backgroundColor = "#fff";
  } else {
    blurElements.forEach((e) => {
      e.classList.remove("blur");
    });

    // Resetting the background-color of the close icon to its original color
    document.getElementById("bar1").style.backgroundColor = "#3a4adb";
    document.getElementById("bar3").style.backgroundColor = "#3a4adb";
  }
};

const toggleMenu = function (menu) {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    myBlurFunction(1);
  } else {
    myBlurFunction(0);
  }
};

toggleMenu.call();

// const close_icon = document.getElementById('hamburger-icon');
// close_icon.onclick = () => {
//     close_icon.style.backgroundColor = '#fff';
//     this.style.backgroundColor = '#fff';
// };
// function dynamic_menue (){
//     const div = document.createElement('div');
//     div.className = 'dynamic-menue';
//     const ul = document.createElement('ul');
//     ul.className = 'ul';
//     const tab_links = ['Portfolio', 'About', 'Contact'];
//     const li = document.createElement('li');
//     li.className = 'li';
//     const close_icon = document.createElement('img');
//     close_icon.src = '/images/icon.png';
//     close_icon.className = 'close-icon';
//     li.appendChild(close_icon);
//     ul.appendChild(li);
//     for (let i = 0; i < tab_links.length; i++) {
//         const li = document.createElement('li');
//         li.className = 'tab-li';
//         const a = document.createElement('a');
//         a.href = '#${tab_links[i]}';
//         a.innerHTML = tab_links[i];
//         li.appendChild(a);
//         ul.appendChild(li);
//     }
//     div.appendChild(ul);
//     document.body.appendChild(div);
//     const cssLink = document.createElement('link');
//     cssLink.rel = 'stylesheet';
//     cssLink.href = '/css/dynamic-menue.css';
//     document.head.appendChild(cssLink);
//     div.onclick = function(e){
//         if(e.target.className === 'close-icon'){
//             div.remove();
//             cssLink.remove();
//         };
//     }
// }
// document.getElementById('humberger-icon').onclick = dynamic_menue;
