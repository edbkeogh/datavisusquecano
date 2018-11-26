//additional code for iclaw
//set variables
//not functional until the server is moved and updated
//var urlPath = 'http://latincanon.spencerschmalz.com/wordcount/inc/api.php';
var urlFacet = 'http://s-lib024.lib.uiowa.edu/greekandlatincanons/latin/search_function/inc/api.php';

//getGenres();
//wait until API gets moved



//get from form
var authors = [];
var centRange = [];
var lifeRange = [];
var locations = [];
var works = [];
var genres = [];

//create the table for iclaw / icaaw / ietc
var tableMain = $('#bamMainTable').DataTable({
    data: null,
    dom: 'Bfrtip',
    buttons: [
        'colvis', 'copy', 'csv','print'
    ],
    columns: [{
            data: 'author',
            title: 'Author'
        },
        {
            data: 'author_location',
            title: 'Author Location'
        },
        {
            data: 'birth',
            title: 'Birth'
        },
        {
            data: 'century',
            title: 'Century'
        },
        {
            data: 'death',
            title: 'Death'
        },
        {
            data: 'genre',
            title: 'Work Genre'
        },
        {
            data: 'work',
            title: 'Work Title'
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

    //take all input, split on character (;) to split the array; push each part into value; test from there
    authors = $("#authorSearch").val().split(";");
    //for now the years are not functional
    //centRange =$("#timeStart").val().split(";");
    //lifeRange = $("#timeBirth").val().split(";");
    locations = $("#locSearch").val().split(";");
    works = $("#workSearch").val().split(";");
    genres = $("#genreSearch").val().split(";");


    searchDB(authors, centRange, lifeRange, locations, works, genres);
});

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
