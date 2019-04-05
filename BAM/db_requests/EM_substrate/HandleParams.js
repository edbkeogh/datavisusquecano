let serverResp = {
	'forms': ['Scrolls', 'Tablets; Scrolls', 'Scrolls; Papyrus', 'Tablets', 'Papyrus', 'Codex; Papyrus', 'Codex']
};
// let paramTypes = ['forms', ...];

let paramLists = {};

function handleResponse() {
	// Iterate over the different fields
	// paramTypes.forEach(function(paramType) {
	paramType = 'forms';
		
		// Corresponds to params in NestedParams.js
		let params = {};
		
		serverResp[paramType].forEach(function(possibleParam) {
			possibleParam.split("; ").forEach(function(value) {
				params[value] = params[value] || [];
				params[value].push(possibleParam);
			});
		});
		// Add the param lists to the overall collection
		paramLists[paramType] = params;
		
	// });
}

handleResponse();

console.log(paramLists);
