/* jshint esversion: 10 */
/* jshint node: true */
/* jshint browser: true */

//Dark mode toggle begin
function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
//Dark mode toggle end

//Poem display begin

const api_url = "https://www.poemist.com/api/v1/randompoems";

//create async function to fetch poem and save json data as variable
const getPoem = async () => {
	  const response = await fetch(api_url);
	  const data = await response.json();
	  return JSON.stringify(data);
}; 


//display the poem as a div in the body with title and author only when button clicked
function displayPoem() {
	getPoem().then(data => {
		let poem = JSON.parse(data);
	
		console.log(poem[0]);
		let poem_title = poem[0].title;
		let poem_author = poem[0].poet.name;
		let poem_url= poem[0].poet.url;
		let poem_text = poem[0].content;
		//replace all newlines in content with <br>
		let poem_text_br = poem_text.replace(/\n/g, "<br>");
		//creates a div with title, poem and author  	
		let poem_div = document.createElement("div");
		poem_div.classList.add("poem");
		poem_div.innerHTML = `<h2>${poem_title}</h2><p style={{whiteSpace: 'pre-line'}}>${poem_text_br}</p><em><p>${poem_author}</p></em><a href=${poem_url}>Read more on Poemist</a>`;
		document.body.append(poem_div);
	//if poem is not found, display error message
	}).catch(error => {
		let poem_div = document.createElement("div");
		poem_div.classList.add("poem");
		poem_div.innerHTML = `<h2>Error</h2><p>No poem found</p>`;
		document.body.append(poem_div);
	});
}

//defines poem button and adds event listener
const poemBtn = document.getElementById("poemBtn");
poemBtn.addEventListener("click", displayPoem);


/* getPoem().then(poem => {
	  const poemDiv = document.createElement("div");
	  poemDiv.innerHTML = poem;
	  document.body.appendChild(poemDiv);
});
 */
