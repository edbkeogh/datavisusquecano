let params = {
	'Scrolls': ['Scrolls', 'Tablets; Scrolls', 'Scrolls; Papyrus'],
	'Tablets': ['Tablets', 'Tablets; Scrolls'],
	'Papyrus': ['Papyrus', 'Scrolls; Papyrus', 'Codex; Papyrus'],
	'Codex': ['Codex', 'Codex; Papyrus']
};
let selectedParams = new Set();

// Better off not as a separate function
function addParam(param) {
	selectedParams.add(param);
}

// Better off not as a separate function
function removeParam(param) {
	selectedParams.delete(param);
}

function prepParams() {
	let paramSet = new Set();
	selectedParams.forEach(function(param) {
		params[param].forEach(function(str) {
			paramSet.add(str);
		});
	});
	return [...paramSet].flat();
}


addParam('Scrolls');
addParam('Tablets');
console.log(prepParams());

removeParam('Tablets');
addParam('Codex');
console.log(prepParams());
