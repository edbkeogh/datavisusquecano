//some of what needs to happen to put results into the tables

function search() {
	if (searchData['languages'].length < 1) return alert('You must select a language to search');
	let data = {'functionName': 'searchDB'};

	// For each of the values the user selected, combine their arrays of
	// multiple-valued strings (e.g. "Palm Leaf; Birchbark; Leather") into one
	// large array for each paramType
	paramTypes.forEach(function(paramType) {
		data[paramType] = prepParams(paramType);
	});

	if (searchData['startDate']) {
		data['startDate'] = searchData['startDate'];
		data['endDate'] = searchData['endDate'];
	}
	$.ajax({
		type: 'POST',
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/eurasian_manuscripts/inc/api.php',
		data: data,

      success: function(res) {
          //populate table
	let results = JSON.parse(res);
xx = []
  // console.log(results);
    console.log(results.manuscripts);
searchIDs = results.manuscripts;

var term = (Object.keys(searchIDs[0])[0]);
console.log(searchIDs[0][term]);

for (i in searchIDs) {
  xx[i] = searchIDs[i].id;

}
console.log(xx)
        // console.log(results.manuscripts.keys[0]);
          // if (!("error" in res)) {
          //     //callback(obj.genres);
          //     console.log(res);
          // } else {
          //     console.log(res.error);
          // }
          tableMain.rows.add(results.manuscripts);
      },
      error: function(XMLHttpRequest, errorThrown) {
          // console.log("Status: " + textStatus);
          console.log("Error: " + errorThrown);
          console.log(XMLHttpRequest);
          //rebuild blank table
      },
      complete: function(res) {
          //just resetting all the values, as spaces and nulls were driving the search PHP insane
          //get from form
          var id = [];
          var manuscript = [];
          var language = [];
          var locations = [];
          var geopolitical_context = [];
          var terminus_post_quem = [];
          var terminus_ante_quem = [];
          var form = [];
          var substrate_material = [];
          //redraw table
          tableMain.draw();
showHell();

    //show the table!
    $('#databaseBox').show();
  //  refreshMap();
      }

      //
      // // Populate the witnesses table
      // tableBody = document.getElementById('witness-results-table');
      // tableBody.innerHTML = '';
      // results['textual_witnesses'].forEach(function(item) {
      //   let tableRow = "<tr>";
      //
      //   // Go through each column and add it to the table if the column is in witnessKeys
      //   witnessKeys.forEach(function(key) {
      //     tableRow += "<td>";
      //     if (key == 'terminus_post_quem' || key == 'terminus_ante_quem') {
      //       tableRow += (item[key] < 0 ? (-item[key] + ' BCE') : (item[key] + ' CE'));
      //     } else {
      //       tableRow += item[key];
      //     }
      //     tableRow += "</td>";
      //   });
      //   tableRow += "</tr>";
      //   tableBody.innerHTML += tableRow;
      // });


	});
}
