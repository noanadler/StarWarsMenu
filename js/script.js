
var arr =["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];
var elmnt = document.getElementById("first-movie");
elmnt.querySelector('p').innerText = arr[0];
var target = document.getElementById("targetElm");
    
for(i = 1; i < arr.length; i++) {
	var cln = elmnt.cloneNode(true);
	var node = cln.querySelector('p');
	node.innerText = arr[i];
   	target.appendChild(cln);
}



