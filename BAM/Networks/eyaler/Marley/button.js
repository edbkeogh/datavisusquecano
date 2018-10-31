

var button = d3.select("#controls")
  .append('input')
  .attr('type', 'checkbox')
  .attr('value', 'Squares')
  .on('click', function () {
    //I don't know what to put in here
    buttonholder = 'S'
    console.log(keys)
    buttonpress()



  });
