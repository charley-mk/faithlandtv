var div = document.createElement('div');
var ThisYear = new Date().getFullYear();
div.innerHTML = "<"+
				"d"+
				"i"+
				"v"+
				">"+
				"Copyright @"+ ThisYear +" "+ "Project Developed by CharlesTech Coporation Limited" +

				"<"+
				"/"+
				"d"+
				"i"+
				"v"+
				">";

// set style
div.style.color = 'rgb(156 159 166)';
div.style.float = 'left';
div.style.position = 'fixed';
div.style.bottom = '0';
div.style.left = '0';
div.style.right = '0';
div.style.padding = '10px';
div.style.background = '#fff';
div.style.textAlign = 'center';

// better to use CSS though - just set class
div.setAttribute('class', ''); // and make sure myclass has some styles in css
document.body.appendChild(div);
