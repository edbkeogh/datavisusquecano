// A slider (using only d3 and HTML5) that removes nodes below the input threshold.
var slider = d3.select('body').append('p').text('Edge Weight Threshold: ');

slider.append('label')
  .attr('for', 'threshold')
  .text('1');
slider.append('input')
  .attr('type', 'range')
  .attr('min', d3.min(graph.links, function(d) {return d.year; }))
  .attr('max', d3.max(graph.links, function(d) {return d.year; }))
  .attr('value', d3.min(graph.links, function(d) {return d.year; }))
  .attr('id', 'threshold')
  .style('width', '50%')
  .style('display', 'block')
  .on('input', function () {
    var threshold = this.value;

    d3.select('label').text(threshold);

    // Find the links that are at or above the threshold.
    var newData = [];
    graph.links.forEach( function (d) {
      if (d.year >= threshold) {newData.push(d); };
    });

    // Data join with only those new links.
    link = link.data(newData, function(d) {return d.source + ', ' + d.target;});
    link.exit().remove();
    var linkEnter = link.enter().append('line').attr('class', 'link');
    link = linkEnter.merge(link);

    node = node.data(graph.nodes);

    // Restart simulation with new link data.
    simulation
      .nodes(graph.nodes).on('tick', ticked)
      .force("link").links(newData);

    simulation.alphaTarget(0.1).restart();

  });
