//additional code for iclaw
//set variables
//not functional until the server is moved and updated
//var urlPath = 'http://latincanon.spencerschmalz.com/wordcount/inc/api.php';
var urlFacet = 'http://s-lib024.lib.uiowa.edu/greekandlatincanons/latin/search_function/inc/api.php';

var workIdlist = []
//getGenres();
//wait until API gets moved

var a = ['L630','L615','L1155','L1156','L1463','L3392','L3418','L3631','L3824','L4595','L4664','L5201','L5199','L5200']
var b = true
var c = false

var demodata = [
{ "workId": "L630", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "De civitate Dei, I-III"},
{ "workId": "L615", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "Confessiones"},
{ "workId": "L1155", "wordCount": "",  "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Civili"},
{ "workId": "L1156", "wordCount": "",  "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Gallico"},
{ "workId": "L1463", "wordCount": "",  "author": "Marcus Tullius Cicero", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epistle", "work": "Epistolae ad Familiares"},
{ "workId": "L3392", "wordCount": "",  "author": "Marcus Annaeus Lucanus", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Epic", "work": "De Bello Civili / Bellum Civile / Pharsalia"},
{ "workId": "L3418", "wordCount": "",  "author": "Titus Lucretius Carus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "De Rerum Natura"},
{ "workId": "L3631", "wordCount": "",  "author": "Marcus Minucius Felix", "author_location": "Rome, Italy", "century": "CE 2-3", "genre1": "Treatise", "work": "Octavius"},
{ "workId": "L3824", "wordCount": "",  "author": "Publius Ovidius Naso", "author_location": "Sulmo, Italy", "century": "BCE 1-1 CE", "genre1": "Epic", "work": "Metamorphoses"},
{ "workId": "L4595", "wordCount": "",  "author": "Gaius Sallustius Crispus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Catilinae Coniuratio / Bellum Catilinae / De Catilinae Coniuratione"},
{ "workId": "L4664", "wordCount": "",  "author": "Lucius Annaeus Seneca Iunior", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Philosophy", "work": "De Constantia"},
{ "workId": "L5201", "wordCount": "",  "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Aeneis"},
{ "workId": "L5199", "wordCount": "",  "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Eclogae"},
{ "workId": "L5200", "wordCount": "",  "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Georgica"}
]

var demo2 = [
  { "workId": "L630", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "De civitate Dei, I-III", "otherref": "<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?tabelle=Augustinus_Hipponensis_cps2&corpus=2&allow_download=0&lang=0\" target=\"_blank\">Get text</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa003\" target=\"_blank\">Perseus</a>"},
{ "workId": "L615", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "Confessiones", "otherref": "<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?tabelle=Augustinus_Hipponensis_cps2&corpus=2&allow_download=0&lang=0\" target=\"_blank\">CPL 251; PL 32 (659-869)</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L1155", "wordCount": "", "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Civili", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0075\" target=\"_blank\">p0448001</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi002.perseus-eng1\" target=\"_blank\">Perseus</a>"},
{ "workId": "L1156", "wordCount": "", "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Gallico", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0002\" target=\"_blank\">p0448002</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L1463", "wordCount": "", "author": "Marcus Tullius Cicero", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epistle", "work": "Epistolae ad Familiares", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0009\" target=\"_blank\">p0474056</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0474.phi056\" target=\"_blank\">Perseus</a>"},
{ "workId": "L3392", "wordCount": "", "author": "Marcus Annaeus Lucanus", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Epic", "work": "De Bello Civili / Bellum Civile / Pharsalia", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0133\" target=\"_blank\">p0917 001</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0917.phi001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L3418", "wordCount": "", "author": "Titus Lucretius Carus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "De Rerum Natura", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0130\" target=\"_blank\">p0550 001</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0550.phi001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L3631", "wordCount": "", "author": "Marcus Minucius Felix", "author_location": "Rome, Italy", "century": "CE 2-3", "genre1": "Treatise", "work": "Octavius", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2008.01.0569\" target=\"_blank\">Get text</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0203.stoa001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L3824", "wordCount": "", "author": "Publius Ovidius Naso", "author_location": "Sulmo, Italy", "century": "BCE 1-1 CE", "genre1": "Epic", "work": "Metamorphoses", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0029\" target=\"_blank\">p0959 006</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi1212.phi002\" target=\"_blank\">Perseus</a>"},
{ "workId": "L4595", "wordCount": "", "author": "Gaius Sallustius Crispus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Catilinae Coniuratio / Bellum Catilinae / De Catilinae Coniuratione", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2008.01.0002%3atext%3dCat.\" target=\"_blank\">p0631 001</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0631.phi001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L4664", "wordCount": "", "author": "Lucius Annaeus Seneca Iunior", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Philosophy", "work": "De Constantia", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2007.01.0013\" target=\"_blank\">p1017</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0255.stoa009\" target=\"_blank\">Perseus</a>"},
{ "workId": "L5201", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Aeneis", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0055\" target=\"_blank\">p0690 003</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi003\" target=\"_blank\">Perseus</a>"},
{ "workId": "L5199", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Eclogae", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0056\" target=\"_blank\">p0690 001</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi001\" target=\"_blank\">Perseus</a>"},
{ "workId": "L5200", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Georgica", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0059\" target=\"_blank\">p0690 002</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi002\" target=\"_blank\">Perseus</a>"},
]

//get from form
var authors = [];
var centRange = [];
var lifeRange = [];
var locations = [];
var works = [];
var genres = [];

//create the table for iclaw / icaaw / ietc
var tableMain = $('#bamMainTable').DataTable({
    data: demo2,
    dom: 'Bfrtip',
    buttons: [
        'colvis', 'copy', 'csv','print'
    ],
    "pageLength": 20,
    columns: [{
            data: 'workId',
            title: 'BAM Id'
        },
        {
            data: 'wordCount',
            title: 'Occurences'
        },
        {
            data: 'author',
            title: 'Author'
        },
        {
            data: 'author_location',
            title: 'Author Location'
        },
        // {
        //     data: 'birth',
        //     title: 'Birth'
        // },
        {
            data: 'century',
            title: 'Century'
        },
        // {
        //     data: 'death',
        //     title: 'Death'
        // },
        {
            data: 'genre1',
            title: 'Work Genre'
        },
        {
            data: 'work',
            title: 'Work Title'
        },
        {
          data: 'otherref',
          title: 'Other Ref#'
        },
        {
          data: 'catlink',
          title: 'Catalogue Entry'
        }
    ]
});
//from our basic BAM functions
makeDataTablesColumnsSearchable(tableMain, 'bamMainTable');
//show the table!
tableMain.draw();

//listen for return, then fire submit
$(document).keypress(function(e) {
    if(e.which == 13) {
$("#iclawSubmit").click();    }
});

//need to read values from the form on submit then fire the function

$("#iclawSubmit").click(function() {

  var x = document.getElementById("term").value;
  if (document.getElementById("lemm").checked == true) {b = true} else {b = false};
  if (document.getElementById("regex").checked == true) {c = true} else {c = false};
  // document.getElementById("demo").innerHTML = x;
    corpusOccurrences(
      x,
      a,
      'latin',
      b,
      c,
      handleResults2,
      function(err) { console.log(JSON.stringify(err));}
      );



  // //all the old stuff
  //   //take all input, split on character (;) to split the array; push each part into value; test from there
  //   authors = $("#authorSearch").val().split(";");
  //   //for now the years are not functional
  //   //centRange =$("#timeStart").val().split(";");
  //   //lifeRange = $("#timeBirth").val().split(";");
  //   locations = $("#locSearch").val().split(";");
  //   works = $("#workSearch").val().split(";");
  //   genres = $("#genreSearch").val().split(";");


    // searchDB(authors, centRange, lifeRange, locations, works, genres);
});
// this will be a cool way to manage some data links? TODO
// $(document).ready(function() {
//
//     $('#bamMainTable tr').click(function() {
//         var href = $(this).find("a").attr("href");
//         if(href) {
//             window.open (href, '_blank');
//         }
//         var fillform = $(this).find("workId");
//         console.log(fillform);
//     });
//
// });


//also not working yet
// $(document).ready(function() {
//
//     $('#bamMainTable td').click(function() {
//       var workSelect = $(this[0]);
//
//         // document.getElementById("workId-WC").innerHTML = $(this);
//         // document.getElementById("workId-TR").innerHTML = $(this);
// console.log(workSelect)
//     });
//
// });

$("#TR").click(function() {



$("#WC").click(function() {

  var wnd = window.open("about:blank", "");
        wnd.document.write(htmlStringWC);
        wnd.document.close();


});

function searchDEMO(workIdlist) {

}

function searchDB(authors, centRange, lifeRange, locations, works, genres) {
    //clear the table. If there is a null result, then a blank table is fine
    tableMain.clear();
    if (genres[0] == "") {
        genres = [];
    }
    $.ajax({
        type: 'POST',
        url: urlFacet,
        dataType: 'json',
        data: {
            functionName: 'searchDB',
            arguments: [authors, centRange, lifeRange, locations, works, genres]
        },
        success: function(obj, textStatus) {
            //populate table
            tableMain.rows.add(obj);
            if (!("error" in obj)) {
                //callback(obj.genres);
                console.log(obj);
            } else {
                console.log(obj.error);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
            console.log(XMLHttpRequest);
            //rebuild blank table
        },
        complete: function(obj) {
            //just resetting all the values, as spaces and nulls were driving the search PHP insane
            authors = [];
            centRange = [];
            lifeRange = [];
            locations = [];
            works = [];
            genres = [];
            //redraw table
            tableMain.draw();
			//show the table!
			$('#databaseBox').show();
        }

    });
}

function corpusOccurrences(term, workList, language, lemmatized, regex, success, failure) {
	var data = {
		'functionName': 'corpusOccurrences',
		'arguments': {
			'term': term
		},
		'regex': regex,
		'lemmatized': lemmatized
	};
	if (workList) {
		data['arguments']['workList'] = workList;
	}

	$.ajax({
		type: "POST",
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/' + language + '/search_function/inc/api.php',
		data: data,
		success: success,
		error: failure
	});
}

function handleResults2(results) {
console.log(Object.keys($.parseJSON(results)));
var response = $.parseJSON(results)
console.log(response)
workIdlist = Object.keys(response)
// console.log(workIdlist)
// console.log(workdata)




  $(function() {
      $.each(response, function(i, item) {

  // workLength = item.wordCount
  // values = item.occurrences
  var y = document.getElementById("term").value;
  // console.log(item[y])
  // console.log(item)

          var $tr = $('<tr>').append(
               $('<td>').text("Work ID: " + i + ", "),
              $('<td>').text("Document total word count: " + item.wordCount + ","),
              $('<td>').text("\"" + y + "\" , occurs " + item[y] + " times"))
          //.appendTo('#timelineHolder');
          .appendTo('#bamMainTable');

        })})
       }


function getGenres() {
    $.ajax({
        type: 'POST',
        url: urlPath,
        dataType: 'json',
        data: {
            functionName: 'getGenres'
        },
        success: function(returnValue) {
            console.log(returnValue);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("Status: " + textStatus);
            console.log("Error: " + errorThrown);
            console.log(XMLHttpRequest);
        }
    });
}

var htmlStringTR = '<html><head><style>body {  font: 10px sans-serif;}.bar rect {  shape-rendering: crispEdges;}.bar text {  fill: #999999;}.axis path, .axis line {  fill: none;  stroke: #000;  shape-rendering: crispEdges;}</style></head><body>TEST<script src="https://d3js.org/d3.v3.min.js"></script><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script type="text/javascript" src="js/histogram.js"></script><div id="results"></div><p>Voyant inspired <a href="http://docs.voyant-tools.org/tools/termsradio/">Terms Radio</a> for the Iowa Latin Canon database (L5201 is the Aeneid):</p><p>Code adapted from <a href="http://bl.ocks.org/nnattawat/8916402">Nattawat Nonsung\'s Block</a></p>Number of bars <input type="number" id="bins" min="5" max="30" value="12"><input type="checkbox" id="lemm" checked/>Lemmatized<input type="checkbox" id="regex">Regex<input type="text" id="term" value="regina"><input type="text"id="workId" value="L5201"><button onclick="myFunction()">Try it</button><!-- Select number of bars <input type="number" id="bins" min="5" max="30" value="20"> --><!-- <button onclick="setbins()">Set bars #</button> --><p id="demo"></p><script>var bins = document.getElementById("bins").value;  var b = true  var c = false  function myFunction() {    var t = document.getElementById("term").value;    var a = document.getElementById("workId").value;if(document.getElementById("lemm").checked == true) {b = true} else {b = false};if (document.getElementById("regex").checked == true) {c = true} else {c = false};console.log(a);console.log(b);console.log(c);      	termOccurrence(    		t,    		[a],    		\'latin\',    		b,    		c    	);      	}var color = "steelblue";var workLength = 100var values = []var formatCount = d3.format(",.0f");var margin = {top: 20, right: 30, bottom: 30, left: 30},   width = 960 - margin.left - margin.right,    height = 500 - margin.top - margin.bottom;var max = workLength;var min = 0;var x = d3.scale.linear()      .domain([min, max])      .range([0, width]);var      tempScale = d3.scale.linear().domain([0, bins]).range([min, max]);var      tickArray = d3.range(bins + 1).map(tempScale);var data = d3.layout.histogram()    .bins(tickArray)    (values);var yMax = d3.max(data, function(d){return d.length});var yMin = d3.min(data, function(d){return d.length});var colorScale = d3.scale.linear()            .domain([yMin, yMax])            .range([d3.rgb(color).brighter(), d3.rgb(color).darker()]);var y = d3.scale.linear()    .domain([0, yMax])    .range([height, 0]);var xAxis = d3.svg.axis()    .scale(x)    .orient("bottom");var svg = d3.select("body").append("svg")    .attr("width", width + margin.left + margin.right)    .attr("height", height + margin.top + margin.bottom)  .append("g")    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");var bar = svg.selectAll(".bar")    .data(data)  .enter().append("g")    .attr("class", "bar")    .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });bar.append("rect")    .attr("x", 1)    .attr("width", (x(data[0].dx) - x(0)) - 1)    .attr("height", function(d) { return height - y(d.y); })    .attr("fill", function(d) { return colorScale(d.y) });bar.append("text")    .attr("dy", ".75em")    .attr("y", -12)    .attr("x", (x(data[0].dx) -x(0)) / 2)    .attr("text-anchor", "middle")    .text(function(d) { return formatCount(d.y); });svg.append("g")    .attr("class", "x axis")    .attr("transform", "translate(0," + height + ")")    .call(xAxis);function refresh(values){  var bins = document.getElementById("bins").value;  var max = workLength;  var min = 0;  var x = d3.scale.linear()        .domain([min, max])        .range([0, width]);        var      tempScale = d3.scale.linear().domain([0, bins]).range([min, max]);       var      tickArray = d3.range(bins + 1).map(tempScale);        var data = d3.layout.histogram()            .bins(tickArray)            (values);    var xAxis = d3.svg.axis()        .scale(x)        .orient("bottom");        svg.selectAll("g.x.axis")        .attr("transform", "translate(0," + y.range()[0] + ")")              .call(xAxis);  var yMax = d3.max(data, function(d){return d.length});  var yMin = d3.min(data, function(d){return d.length});  y.domain([0, yMax]);  var colorScale =d3.scale.linear()              .domain([yMin, yMax])              .range([d3.rgb(color).brighter(), d3.rgb(color).darker()]);  var bar = svg.selectAll(".bar").data(data);  bar.exit().remove();  bar.transition()    .duration(1000)    .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });  bar.select("rect")      .transition()      .duration(1000)      .attr("x", 1)      .attr("width", (x(data[0].dx) - x(0)) - 1)      .attr("height", function(d) { return height - y(d.y); })      .attr("fill", function(d) { return colorScale(d.y) });  bar.select("text")      .transition()      .duration(1000)      .attr("dy", ".75em")      .attr("y", -12)      .attr("x", (x(data[0].dx) - x(0)) / 2)      .attr("text-anchor", "middle")      .text(function(d) { return formatCount(d.y); });}</body></html>'
