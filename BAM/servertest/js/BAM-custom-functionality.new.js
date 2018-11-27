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
            title: 'BAMId'
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
