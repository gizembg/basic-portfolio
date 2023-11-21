
fetch("../src/components/nav.html")
.then(response => {
    console.log('%cmain.js line:31 response', 'color: #007acc;', response);
  return response.text()
})
.then(data => {
    var elem = document.createElement('div'); // is a node
    elem.innerHTML = data
    document.getElementsByTagName("body")[0].appendChild(elem);
});


// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function navigatePage() {
    location.assign("https://linuxhint.com");
    //location.replace("https://linuxhint.com");
    //location.href = "https://linuxhint.com";

}

async function logMovies() {
    const response = await fetch("http://google.com");
    const movies = await response.json();
    console.log(movies);
  }

  function handlerAbout(target) {
    console.log('%cmain.js line:28 handlerAbout', 'color: #007acc;');
    location.href='../src/pages/about.html';
};



const redirectHome = () => {
    debugger
    console.log('%cmain.js line:35 redirectHome', 'color: #007acc;');
    window.location.replace("http://localhost:8081");

}

