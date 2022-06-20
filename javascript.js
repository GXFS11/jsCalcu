const max = 5;
let obj = document.getElementById("operando"),
	nums = document.getElementsByClassName("calcN"),
	sug = document.getElementsByClassName("advert")[0];
	// v Sin let se hace global
for (let i = 0; i < nums.length; i++) { // Permitir más campos ?¿ hmmm
	nums[i].addEventListener("keydown", function(e) { 
		if (esLetra (e.keyCode)) {
			if ("e" == e.key) e.preventDefault(); 
			sug.innerHTML = "Sólo ingrese números. (campo " + (i + 1) + ")";
			sug.style = "display: block;"
			animar ("pulsar", sug);
			//setTimeout (() => { limpiar ("pulsar", sug); animar ("ocultar", sug); }, 2000);
		}
	});
	nums[i].addEventListener("input", function() { // No funciona correctamente (borra todo)
		this.value = this.value.toString().replace(/[e]/gi,"");
	});
}
function esLetra (tecla) { return  tecla >= 65 & tecla <= 90 | tecla >= 97 & tecla <= 122; }
function operar() {
	let r,
		x = (nums[0].value == "") ? 0 : parseInt (nums[0].value),
		y = (nums[1].value == "") ? 0 : parseInt (nums[1].value);
	switch (obj.selectedIndex) { // obj.options[obj.selectedIndex].text < No era óptimo
		case 0: r = (x + y); break;
		case 1: r = (x - y); break;
		case 2: r = (x * y); break;
		case 3: 
			r = (y == 0) ? "Indeterminado" : (x / y); break;
		case 4: 
			r = (y <= 0 & x == 0) ? "Indeterminado" : (x ** y); break;
		case 5:
			if (y < 0) {
				r = (x % 2 == 0) ? "i" : r = ((-1 * y) ** (1 / x)) * -1; break;
			}
			r = (y ** (1 / x));
	}
	document.getElementById ("res").value = r;
}
function limite(inp) {
	if (inp.value.length > max - 1) inp.value = inp.value.substring(0, max - 1);
}
function animar (anim, elem) {
	//elem.style.setProperty ("animation", anim + "1s infinite");
	elem.classList.remove (anim);
	void elem.offsetWidth;
	elem.classList.add (anim);
	console.log (elem.classList.toString());
}

