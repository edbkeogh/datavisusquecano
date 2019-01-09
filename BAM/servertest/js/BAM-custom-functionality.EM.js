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
  { "man": "Dunhuang Manuscripts", "wordCount": "", "GettyURI": "7001969", "loc": "Dunhuang, China", "century": "CE 4", "genre1": "Treatise", "work": "De civitate Dei, I-III", "link": "<a href=\"http://vocab.getty.edu/page/tgn/7001969\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa003\" target=\"_blank\">stoa0040.stoa003</a>"},
{ "man": "Bower Manuscript", "wordCount": "", "GettyURI": "6003207", "loc": "Kucha, China", "century": "CE 4", "genre1": "Treatise", "work": "Confessiones", "link": "<a href=\"http://vocab.getty.edu/page/tgn/7001969\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:stoa0040.stoa001\" target=\"_blank\">CPL 251; PL 32 (659-869)</a>"},
{ "man": "Bakkshali Manuscript", "wordCount": "", "GettyURI": "7002453", "loc": "Peshawar, Pakistan", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Civili", "link": "<a href=\"http://vocab.getty.edu/page/tgn/7002453\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi002.perseus-eng1\" target=\"_blank\">p0448002</a>"},
{ "man": "Gandharan Buddist Manuscripts", "wordCount": "", "GettyURI": "6002201", "loc": "Gandhara, Pakistan", "century": "BCE 1", "genre1": "History", "work": "Comentarii de Bello Gallico", "link": "<a href=\"http://vocab.getty.edu/page/tgn/6002201\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0448.phi001\" target=\"_blank\">p0448001</a>"},
{ "man": "Bamiyan Scrolls", "wordCount": "", "GettyURI": "1065380", "loc": "Bamiyan, Afghanistan", "century": "BCE 1", "genre1": "Epistle", "work": "Epistolae ad Familiares", "link": "<a href=\"http://vocab.getty.edu/page/tgn/1065380\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0474.phi056\" target=\"_blank\">p0474056</a>"},
{ "man": "Gilgit Manuscripts", "wordCount": "", "GettyURI": "1083462", "loc": "Gilgit, Pakistan", "century": "CE 1", "genre1": "Epic", "work": "De Bello Civili / Bellum Civile / Pharsalia", "link": "<a href=\"http://vocab.getty.edu/page/tgn/1083462\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0917.phi001\" target=\"_blank\">p0917 001</a>"},
{ "man": "Khotan Darmapada", "wordCount": "", "GettyURI": "1139089", "loc": "Khotan, China", "century": "BCE 1", "genre1": "Epic", "work": "De Rerum Natura", "link": "<a href=\"http://vocab.getty.edu/page/tgn/1139089\" target=\"_blank\">Getty URI</a>", "catlink": "<a href=\"http://catalog.perseus.org/catalog/urn:cts:latinLit:phi0550.phi001\" target=\"_blank\">p0550 001</a>"}
]

var demo3 = [
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Dunhuang_manuscripts\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/7001969\" target=\"_blank\">Getty URI, </a>", "place": "Peshawar, Pakistan", "cen": "4-11 CE", "name": "<b>Dunhuang Manuscripts</b>"},
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Bower_Manuscript\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/6003207\" target=\"_blank\">Getty URI, </a>", "place": "Bamiyan, Afghanistan", "cen": "4-6 CE", "name": "<b>Bower Manuscript</b>"},
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Bakhshali_manuscript\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/7002453\" target=\"_blank\">Getty URI, </a>", "place": "Kucha, China", "cen": "3-10 CE", "name": "<b>Bakkshali Manuscript</b>"},
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Gandh%C4%81ran_Buddhist_texts\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/6002201\" target=\"_blank\">Getty URI, </a>", "place": "Dunhuang, China", "cen": "2-7 CE", "name": "<b>Gandharan Buddist Manuscripts</b>"},
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Birch_bark_manuscript#cite_note-Olivelle2006-6\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/1065380\" target=\"_blank\">Getty URI, </a>", "place": "Gandhara, Pakistan", "cen": "2-8 CE", "name": "<b>Bamiyan Scrolls</b>"},
  {"links": "<a href=\"https://en.wikipedia.org/wiki/Gilgit\" target=\"_blank\">Wikipedia, </a><a href=\"http://vocab.getty.edu/page/tgn/1083462\" target=\"_blank\">Getty URI, </a>", "place": "Gilgit, Pakistan", "cen": "5-6 CE", "name": "<b>Gilgit Manuscripts</b>"},
  {"links": "<a href=\"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/61C9E0D8D8400DA0A45EBFC0A0D29363/S0041977X00072256a.pdf/khotan_dharmapada.pdf\" target=\"_blank\">Cambridge University Press, </a><a href=\"http://vocab.getty.edu/page/tgn/1139089\" target=\"_blank\">Getty URI, </a>", "place": "Khotan, China", "cen": "1? CE", "name": "<b>Khotan Darmapada</b>"}
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
    data: demo3,
    dom: 'Bfrtip',
    buttons: [
        'colvis', 'copy', 'csv','print'
    ],
    "pageLength": 20,
    columns: [
      {
        data: 'name',
        title: 'Manuscript'
    },
    {
        data: 'cen',
        title: 'Century'
    },
    {
        data: 'place',
        title: 'Location'
    },

        {
            data: 'links',
            title: 'Links'
        }


        // ,
        // // {
        // //     data: 'birth',
        // //     title: 'Birth'
        // // },
        // {
        //     data: 'century',
        //     title: 'Century'
        // },
        // // {
        // //     data: 'death',
        // //     title: 'Death'
        // // },
        // {
        //     data: 'genre1',
        //     title: 'Work Genre'
        // },
        //       {
        //   data: 'otherref',
        //   title: 'Text Source'
        // },
        // {
        //   data: 'catlink',
        //   title: 'Canonical References'
        // },
        // {
        //       data: 'workId',
        //       title: 'BAM Id'
        //   }
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

        // var input = $( "#workId-WC" );
        // input.val( clickedrow );
        // var input = $( "#workId-TR" );
        // input.val( clickedrow );


         clickedrow = $(this).find("b").html();
         console.log(clickedrow)
         var m = markersList[this.model.id];
    markers.zoomToShowLayer(m, function() {
        m.openPopup();
    });
        // var input = $( "#workId-WC" );
        // input.val( input.val() + clickedrow );
        // var input = $( "#workId-TR" );
        // input.val( input.val() + clickedrow );

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
