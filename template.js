class HeaderTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <header>
		<nav>
		  <div class="header">
			<ul class="container buttons">
			  <li class="button home">
				<a href="/index.html">Home</a>
			  </li>
			  <li data-modal-target="#modal" class="button about">
				<a href="/pages/about.html">About</a>
			  </li>
			  <li class="button art">
				<a href="/pages/art.html">Art</a>
			  </li>
			  <li class="button photos">
				<a href="/pages/photos">Photos</a>
			  </li>
			  <li class="button poem">
				<a href="/pages/poems.html">Poems</a>
			  </li>
			  <li>
				<div class="dropdown">
				  <button onclick="myFunction()" class="dropbtn">
					<i class="fas fa-bars"></i>Menu
				  </button>
				  <div id="myDropdown" class="dropdown-content">
					<a href="/index.html"> <i class="fas fa-home"></i>Home</a>
					<a href="/pages/art.html">Art</a>
					<a href="/pages/photos">Photography</a>
					<a href="/pages/poems.html">Poems</a>
				  </div>
				</div>
			  </li>
			</ul>
		  </div>
		</nav>
	  </header> `;
  }
}

class FooterTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <footer>
		<div class="footer-container">
		  <div class="footer">
			<div class="footer-heading footer-1">
			  <a href="mailto: timothy.smirnov@gmail.com">
				<i class="fas fa-envelope-open fa-lg" aria-hidden="true"></i>
				<span class="visually-hidden">email</span>
			  </a>
			  <a href="https://twitter.com/yrtgwterkfuivlr">
				<i class="fab fa-twitter fa-lg" aria-hidden="true"></i>
				<span class="visually-hidden">twitter</span>
			  </a>
			  <a href="https://github.com/n6z/n6z.github.io">
				<i class="fab fa-github fa-lg" aria-hidden="true"></i>
				<span class="visually-hidden">github</span>
			  </a>
			  <a href="https://www.youtube.com/channel/UCj_GuPE11NX0KqB8wO_1ojw">
				<i class="fab fa-youtube fa-lg" aria-hidden="true"></i>
				<span class="visually-hidden">youtube</span>
			  </a>
			</div>
		  </div>
		</div>
	  </footer>`;
  }
}

customElements.define("footer-template", FooterTemplate);

customElements.define("header-template", HeaderTemplate);
