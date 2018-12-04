//additional code for iclaw
//set variables
//not functional until the server is moved and updated
//var urlPath = 'http://latincanon.spencerschmalz.com/wordcount/inc/api.php';
var urlFacet = 'http://s-lib024.lib.uiowa.edu/greekandlatincanons/latin/search_function/inc/api.php';

var clicked = ""
var clickedrow = ""

var workIdlist = []
//getGenres();
//wait until API gets moved
var bins = 12

var a = ['L630','L615','L1155','L1156','L1463','L3392','L3418','L3631','L3824','L4595','L4664','L5201','L5199','L5200']
var b = true
var c = false
// the lemm and then regex for TR
var t = 'quoddam'
var d = false
var e = false
// the wordcloud lemm and stop words
var f = false
var g = true
var h = ['630']

var demo2 = [
  { "workId": "<button>L630</button>", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "De civitate Dei, I-III", "otherref": "<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?tabelle=Augustinus_Hipponensis_cps2&corpus=2&allow_download=0&lang=0\" target=\"_blank\">Corpus Corporum</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa003\" target=\"_blank\">stoa0040.stoa003</a>"},
{ "workId": "<button>L615</button>", "wordCount": "", "author": "Augustinus Hipponensis", "author_location": "Annaba, Algeria", "century": "CE 4", "genre1": "Treatise", "work": "Confessiones", "otherref": "<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?tabelle=Augustinus_Hipponensis_cps2&corpus=2&allow_download=0&lang=0\" target=\"_blank\">Corpus Corporum</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa001\" target=\"_blank\">CPL 251; PL 32 (659-869)</a>"},
{ "workId": "<button>L1155</button>", "wordCount": "", "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Civili", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0075\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi002.perseus-eng1\" target=\"_blank\">p0448002</a>"},
{ "workId": "<button>L1156</button>", "wordCount": "", "author": "Caesar, Gaius Iulius ", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Gallico", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0002\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi001\" target=\"_blank\">p0448001</a>"},
{ "workId": "<button>L1463</button>", "wordCount": "", "author": "Marcus Tullius Cicero", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epistle", "work": "Epistolae ad Familiares", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0009\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0474.phi056\" target=\"_blank\">p0474056</a>"},
{ "workId": "<button>L3392</button>", "wordCount": "", "author": "Marcus Annaeus Lucanus", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Epic", "work": "De Bello Civili / Bellum Civile / Pharsalia", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0133\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0917.phi001\" target=\"_blank\">p0917 001</a>"},
{ "workId": "<button>L3418</button>", "wordCount": "", "author": "Titus Lucretius Carus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "De Rerum Natura", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0130\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0550.phi001\" target=\"_blank\">p0550 001</a>"},
{ "workId": "<button>L3631</button>", "wordCount": "", "author": "Marcus Minucius Felix", "author_location": "Rome, Italy", "century": "CE 2-3", "genre1": "Treatise", "work": "Octavius", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2008.01.0569\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0203.stoa001\" target=\"_blank\">stoa0203.stoa001</a>"},
{ "workId": "<button>L3824</button>", "wordCount": "", "author": "Publius Ovidius Naso", "author_location": "Sulmo, Italy", "century": "BCE 1-1 CE", "genre1": "Epic", "work": "Metamorphoses", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0029\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi1212.phi002\" target=\"_blank\">p1212 002</a>"},
{ "workId": "<button>L4595</button>", "wordCount": "", "author": "Gaius Sallustius Crispus", "author_location": "Rome, Italy", "century": "BCE 1", "genre1": "History", "work": "Catilinae Coniuratio / Bellum Catilinae / De Catilinae Coniuratione", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2008.01.0002%3atext%3dCat.\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0631.phi001\" target=\"_blank\">p0631 001</a>"},
{ "workId": "<button>L4664</button>", "wordCount": "", "author": "Lucius Annaeus Seneca Iunior", "author_location": "Cordoba, Spain / Rome, Italy", "century": "CE 1", "genre1": "Philosophy", "work": "De Constantia", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a2007.01.0013\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0255.stoa009\" target=\"_blank\">p1017</a>"},
{ "workId": "<button>L5201</button>", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Aeneis", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0055\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi003\" target=\"_blank\">p0690 003</a>"},
{ "workId": "<button>L5199</button>", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Eclogae", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0056\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi001\" target=\"_blank\">p0690 001</a>"},
{ "workId": "<button>L5200</button>", "wordCount": "", "author": "Publius Vergilius Maro", "author_location": "Mantova, Italy (born) / Rome, Italy", "century": "BCE 1", "genre1": "Epic", "work": "Georgica", "otherref": "<a href=\"http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.02.0059\" target=\"_blank\">Perseus Digital Library</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0690.phi002\" target=\"_blank\">p0690 002</a>"},
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
    columns: [
      {
        data: 'author',
        title: 'Author'
    },
    {
        data: 'work',
        title: 'Work Title'
    },

        // {
        //     data: 'wordCount',
        //     title: 'Occurences'
        // },

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
          data: 'otherref',
          title: 'Text Source'
        },
        {
          data: 'catlink',
          title: 'Canonical References'
        },
        {
              data: 'workId',
              title: 'BAM Id'
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
$(document).ready(function() {

    $('#bamMainTable tr').click(function() {

        var input = $( "#workId-WC" );
        input.val( clickedrow );
        var input = $( "#workId-TR" );
        input.val( clickedrow );


         clickedrow = $(this).find("button").html();
        var input = $( "#workId-WC" );
        input.val( input.val() + clickedrow );
        var input = $( "#workId-TR" );
        input.val( input.val() + clickedrow );

        clickedrow = ""

        // if(href) {
        //     window.open (href, '_blank');
        // }
        // var fillform = $(this).find("workId");
    //    console.log(href);
    });

});


$("#bamMainTable button").click(function() { // using the unique ID of the button
  var input = $( "#workId-WC" );
  input.val( clicked );
  var input = $( "#workId-TR" );
  input.val( clicked );


   clicked = $(this).html();
  var input = $( "#workId-WC" );
  input.val( input.val() + clicked );
  var input = $( "#workId-TR" );
  input.val( input.val() + clicked );

  clicked = ""
  // document.getElementById("workId-WC").innerHTML = clicked
  // document.getElementById("workId-TR").innerHTML = clicked
});

// //also not working yet
// $(document).ready(function() {
//
//     $('#bamMainTable tr').click(function() {
//       var workSelect = $(this);
// //      var workSelect = $(this).find("innerHTML");
//
//         // document.getElementById("workId-WC").innerHTML = $(this);
//         // document.getElementById("workId-TR").innerHTML = $(this);
// console.log(workSelect)
//     });
//
// });

$("#TR").click(function() {
   bins = document.getElementById("bins-TR").value;
   t = document.getElementById("term-TR").value;
  // document.getElementById("demo").innerHTML = x;
   h = document.getElementById("workId-TR").value;
if (document.getElementById("lemm-TR").checked == true) {d = true} else {d = false};
if (document.getElementById("regex-TR").checked == true) {e = true} else {e = false};
console.log(t)
console.log(h)
console.log(d)
console.log(e)
console.log(bins)

window.open("tr-demo.html",'_blank')

});

$("#WC").click(function() {

window.open("wc-demo.html",'_blank')
  //var wnd = window.open("about:blank", "");
      //  wnd.document.write();
      //  wnd.document.close();


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


// function getGenres() {
//     $.ajax({
//         type: 'POST',
//         url: urlPath,
//         dataType: 'json',
//         data: {
//             functionName: 'getGenres'
//         },
//         success: function(returnValue) {
//             console.log(returnValue);
//         },
//         error: function(XMLHttpRequest, textStatus, errorThrown) {
//             console.log("Status: " + textStatus);
//             console.log("Error: " + errorThrown);
//             console.log(XMLHttpRequest);
//         }
//     });
// }
//
 //var htmlStringTR = '<p>Voyant inspired <a href="http://docs.voyant-tools.org/tools/termsradio/">Terms Radio</a> for the Iowa Latin Canon database:</p> <p>Code adapted from <a href="http://bl.ocks.org/nnattawat/8916402">Nattawat Nonsungs Block</a></p> Number of bars <input type="number" id="bins" min="5" max="30" value="12"> <input type="checkbox" id="lemm" checked/>Lemmatized <input type="checkbox" id="regex">Regex <input type="text" id="term" value="regina"> <input type="text" id="workId" value="L5201"> <button onclick="myFunction()">Try it</button>'
