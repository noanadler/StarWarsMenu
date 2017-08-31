		document.addEventListener("DOMContentLoaded", init, false);	
		function init() {
			//get all films
			swapiModule.getFilms(function(data) {
				var count = data.count;
				//create array of films titles
				var arr = [];
				for(j = 0; j < count; j++) {
					arr.push(data.results[j].title);
				}
				var elmnt = document.getElementById("first-movie");
				var target = document.getElementById("targetElm");
				elmnt.querySelector('p').innerText = arr[0];
				//clone elmnt and insert the title
				for(i = 1; i < arr.length; i++) {
					var cln = elmnt.cloneNode(true);
					var node = cln.querySelector('p');
					node.innerText = arr[i];
   					target.appendChild(cln);
				}		
			});	
		}