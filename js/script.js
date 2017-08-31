
document.addEventListener("DOMContentLoaded", init, false);
			
function init() {
	console.log("load");
	//get all films
	swapiModule.getFilms(function(data) {
		var arr =["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];
		var arr = [];
		var elmnt = document.getElementById("first-movie");
		//elmnt.querySelector('p').innerText = arr[0];
		var target = document.getElementById("targetElm");
		//console.log("Result of getFilms", data);
		//var count = data.count;
		//elmnt.innerHTML = data.results[0].title;
		//elmnt.querySelector('p').innerText = count;
		// for(j = 0; j < count; j++) {
		// 	arr.push(data.results[j].title;
		// }
		elmnt.querySelector('p').innerText = "hi";
		for(i = 1; i < arr.length; i++) {
			var cln = elmnt.cloneNode(true);
			var node = cln.querySelector('p');
			node.innerText = arr[i];
   			target.appendChild(cln);
		}	
	});	
	
}


    




