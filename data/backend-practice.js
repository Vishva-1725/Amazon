const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
   console.log(xhr.response);
});


xhr.open('GET', 'https://supersimplebackend.dev');                    // GET = get some information from the backend  (types of request =  GET,POST,PUT,DELETE)
xhr.send();