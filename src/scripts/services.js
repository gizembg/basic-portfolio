fetch("../components/nav.html")
.then(response => {
    console.log('%cmain.js line:31 response', 'color: #007acc;', response);
  return response.text()
})
.then(data => {
    var elem = document.createElement('div'); // is a node
    elem.innerHTML = data
    document.getElementsByTagName("body")[0].appendChild(elem);
});

const redirectHome = () => {
  debugger
  console.log('%cmain.js line:35 redirectHome', 'color: #007acc;');
  window.location.replace("http://localhost:8081");

}

