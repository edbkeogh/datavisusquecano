function createV4SelectableForceDirectedGraph(svg, graph) {
    // if both d3v3 and d3v4 are loaded, we'll assume
    // that d3v4 is called d3v4, otherwise we'll assume
    // that d3v4 is the default (d3)
    var container = svg.append('g');

    // Create form for search (see function below).
    var search = d3.select("body").append('form').attr('onsubmit', 'return false;');

    var box = search.append('input')
    	.attr('type', 'text')
    	.attr('id', 'searchTerm')
    	.attr('placeholder', 'Type to search...');

    var button = search.append('input')
    	.attr('type', 'button')
    	.attr('value', 'Search')
    	.on('click', function () { searchNodes(); });


    if (typeof d3v4 == 'undefined')
        d3v4 = d3;

    var width = +svg.attr("width"),
        height = +svg.attr("height");

        var degreeSize = d3.scaleLinear()
        	.domain([d3.min(graph.nodes, function(d) {return d.degree; }),d3.max(graph.nodes, function(d) {return d.degree; })])
        	.range([5,35]);

    let parentWidth = d3v4.select('svg').node().parentNode.clientWidth;
    let parentHeight = d3v4.select('svg').node().parentNode.clientHeight;

    var svg = d3v4.select('svg')
    .attr('width', parentWidth)
    .attr('height', parentHeight)

    // remove any previous graphs
    svg.selectAll('.g-main').remove();

    var gMain = svg.append('g')
    .classed('g-main', true);

    var rect = gMain.append('rect')
    .attr('width', parentWidth)
    .attr('height', parentHeight)
    .style('fill', 'white')

    var gDraw = gMain.append('g');

    var zoom = d3v4.zoom()
    .on('zoom', zoomed)

    gMain.call(zoom);


    function zoomed() {
        gDraw.attr('transform', d3v4.event.transform);
    }

    function searchNodes() {
      console.log("successful button")
    	var term = document.getElementById('searchTerm').value;
    	var searched = gMain.selectAll('.node').filter(function (d, i) {
    		return d.name.toLowerCase().search(term.toLowerCase()) == -1;
    	});
    	searched.style('opacity', '0');
    	var link = gMain.selectAll('.link');
    	link.style('stroke-opacity', '0');
    	d3.selectAll('.node').transition()
    		.duration(5000)
    		.style('opacity', '1');
    	d3.selectAll('.link').transition().duration(5000).style('stroke-opacity', '0.1');
    }

    var color = d3v4.scaleOrdinal(d3v4.schemeCategory20);

    if (! ("links" in graph)) {
        console.log("Graph is missing links");
        return;
    }

    var nodes = {};
    var i;
    for (i = 0; i < graph.nodes.length; i++) {
        nodes[graph.nodes[i].id] = graph.nodes[i];
        graph.nodes[i].weight = 1.01;
    }

    // the brush needs to go before the nodes so that it doesn't
    // get called when the mouse is over a node


    var link = gDraw.append("g")
        .attr("class", "link")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-opacity", .3 )
        .attr("stroke-width", function(d) { return Math.abs(d.weight) * .5 });

        var gBrushHolder = gDraw.append('g');
        var gBrush = null;

    var node = gDraw.append("g")
        .attr("class", "node")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr('r', function(d, i) { return degreeSize(d.degree); })
        .attr("fill", function(d) {
            if ('color' in d)
                return d.color;
            else
                return color(d.group);
        })


        // .attr("fx", function(d) {         // I tried this but it didn't work
        //   if ('x' in d)
        //     return d.x;
        //   else
        //       return parentWidth/2;
        //    })
        // .attr("fy", function(d) {
        //   if ('y' in d)
        //         return d.y;
        //         else
        //             return parentHeight/2;
        //          })
        // .on('dblclick', function (d) { release(); };)
        .call(d3v4.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
        // .call(brush)
        ;

        var dropdown = d3.select("#controls")
                  .append('select')
                  .on('change', function() {
                    var centrality = this.value;
                    var centralitySize = d3.scaleLinear()
                      .domain([d3.min(graph.nodes, function(d) { return d[centrality]; }), d3.max(graph.nodes, function(d) { return d[centrality]; })])
                      .range([5,35]);
                    node.attr('r', function(d) { return centralitySize(d[centrality]); } );
                    // Recalculate collision detection based on selected centrality.
                    simulation.force("collide", d3.forceCollide().radius( function (d) { return centralitySize(d[centrality]); }));
                    simulation.alphaTarget(0.1).restart();
                  });

                dropdown.selectAll('option')
//the options for the mention_measures.json file
                  // .data(['Degree','Eigen_Cent','In_Degree','Out_Degree','Weighted_Indegree','Weighted_Outdegree','Weighted_Degree','Eccentricity','Close_Cent','Harm_Cent','Between_Cent','Authority','Hub','Page_Ranks','Clustering'])
                  .data(['Degree','Eigen_Cent','Weighted_Degree','Eccentricity','Close_Cent','Harm_Cent','Between_Cent','Authority','Hub','Page_Ranks','Clustering','Triangles'])
                  .enter().append('option')
                  .attr('value', function(d) { return d.split(' ')[0].toLowerCase(); })
                  .text(function(d) { return d; });



    // add titles for mouseover blurbs
    node.append("title")
        .text(function(d) {
            if ('name' in d)
                return d.name.concat("\n Other Info: ", d.type, " ", d.OwnerPatron, " ", d.Family, " ", d.School, "\n Modularity Class: ", d.Mod_Class, "\n Eigenvector Centrality: ", d.eigen_cent);
            else
                return d.id;
        });


    var simulation = d3v4.forceSimulation()
        .force("link", d3v4.forceLink()
                .id(function(d) { return d.id; })
                .distance(function(d) {
                    return d.weight * 10
                        })
                // .strength(function(d) {
                //   return .1 * d.weight
                // })
              )
        .force("charge", d3v4.forceManyBody()
      .strength([-240]).distanceMax([900]))
        .force("center", d3v4.forceCenter(parentWidth / 2, parentHeight / 2))
      //  .force("x", d3v4.forceX(parentWidth/2))
      //  .force("y", d3v4.forceY(parentHeight/2));

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

          simulation.force("collide", d3.forceCollide().radius( function (d) { return degreeSize(d.degree) + 2; }));

    function ticked() {
        // update node and line positions at every step of
        // the force simulation
        link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }

    var brushMode = false;
    var brushing = false;

    var brush = d3v4.brush()
        .on("start", brushstarted)
        .on("brush", brushed)
        .on("end", function(d) {
          displayTable(d);
          brushended(d)
        });

//    testing text     .on("mouseover", function(d) {
//   highlightImage(d);
//   showTextToolTip(d);
// });

    function brushstarted() {
        // keep track of whether we're actively brushing so that we
        // don't remove the brush on keyup in the middle of a selection
        brushing = true;

        node.each(function(d) {
            d.previouslySelected = shiftKey && d.selected;
        });
    }

    rect.on('click', () => {
        node.each(function(d) {
            d.selected = false;
            d.previouslySelected = false;
        });
        node.classed("selected", false);
        node.attr('fill', function(d, i) { return d.color })
        // .attr('r', function(d, i) { return degreeSize(d.degree); }); //TODO this resets the size
        clearTableRows();
    });

    function brushed() {
        if (!d3v4.event.sourceEvent) return;
        if (!d3v4.event.selection) return;

        var extent = d3v4.event.selection;

        var brush_coords = d3.brushSelection(this);

        // style brushed circles
        node.filter(function (){

                   var cx = d3.select(this).attr("cx"),
                       cy = d3.select(this).attr("cy");

                   return isBrushed(brush_coords, cx, cy);
               })
               .attr('fill', '#00F281')
               // .attr('r', 7); // I can change the size - probably color, TODO want to figure out how to add labels

        node.classed("selected", function(d) {
            return d.selected = d.previouslySelected ^
            (extent[0][0] <= d.x && d.x < extent[1][0]
             && extent[0][1] <= d.y && d.y < extent[1][1]);

        });

    }

    function brushended() {
        if (!d3v4.event.sourceEvent) return;
        if (!d3v4.event.selection) return;
        if (!gBrush) return;

        gBrush.call(brush.move, null);


        if (!brushMode) {
            // the shift key has been release before we ended our brushing
            gBrush.remove();
            gBrush = null;
        }

        brushing = false;
    }

    d3v4.select('body').on('keydown', keydown);
    d3v4.select('body').on('keyup', keyup);

    var shiftKey;

    function keydown() {
        shiftKey = d3v4.event.shiftKey;

        if (shiftKey) {
            // if we already have a brush, don't do anything
            if (gBrush)
                return;

            brushMode = true;

            if (!gBrush) {
                gBrush = gBrushHolder.append('g');
                gBrush.call(brush);
            }
        }
    }

    function keyup() {
        shiftKey = false;
        brushMode = false;

        if (!gBrush)
            return;

        if (!brushing) {
            // only remove the brush if we're not actively brushing
            // otherwise it'll be removed when the brushing ends
            gBrush.remove();
            gBrush = null;
        }
    }


    function dragstarted(d) {
      if (!d3v4.event.active) simulation.alphaTarget(0.9).restart();

        if (!d.selected && !shiftKey) {
            // if this node isn't selected, then we have to unselect every other node
            node.classed("selected", function(p) { return p.selected =  p.previouslySelected = false; });
        }

        d3v4.select(this).classed("selected", function(p) { d.previouslySelected = d.selected; return d.selected = true; });

        node.filter(function(d) { return d.selected; })
        .each(function(d) { //d.fixed |= 2;
          d.fx = d.x;
          d.fy = d.y;
        })

    }

    function dragged(d) {
      //d.fx = d3v4.event.x;
      //d.fy = d3v4.event.y;
            node.filter(function(d) { return d.selected; })
            .each(function(d) {
                d.fx += d3v4.event.dx;
                d.fy += d3v4.event.dy;
            })
    }


    function dragended(d) {
      if (!d3v4.event.active) simulation.alphaTarget(0);
      d.fx = d.x;                                     // change these and the ones just after to 'null' to not have the dragged ones stay
      d.fy = d.y;
        node.filter(function(d) { return d.selected; })
        .each(function(d) { //d.fixed &= ~6;
            d.fx = d.x;
            d.fy = d.y;
        })
    }


      //   simulation.force("collide", d3.forceCollide().radius( function (d) { return centralitySize(d[centrality]); }));
      //   simulation.alphaTarget(0.1).restart();
      // });
      // d3.select(graph.nodes).call(d3.keybinding()
      //     .on('←', node.each(function(d) { //d.fixed &= ~6;
      //         d.fx = null;
      //         d.fy = null;
      //     })));

    function release(d) {
      // if (!d3v4.event.active) simulation.alphaTarget(0);
      // d.fx = null;                                     // change these and the ones just after to 'null' to not have the dragged ones stay
      // d.fy = null;
        node.each(function(d) { //d.fixed &= ~6;
            d.fx = null;
            d.fy = null;
        })
    }

    function isBrushed(brush_coords, cx, cy) {

         var x0 = brush_coords[0][0],
             x1 = brush_coords[1][0],
             y0 = brush_coords[0][1],
             y1 = brush_coords[1][1];

        return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;
    }

    function displayTable() {

        // disregard brushes w/o selections
        // ref: http://bl.ocks.org/mbostock/6232537
        if (!d3.event.selection) return;

        // programmed clearing of brush after mouse-up
        // ref: https://github.com/d3/d3-brush/issues/10
        // d3.select(this).call(brush.move, null);

        var d_brushed =  d3.selectAll(".selected").data();

        // populate table if one or more elements is brushed
        if (d_brushed.length > 0) {
            clearTableRows();
            d_brushed.forEach(d_row => populateTableRow(d_row))
        } else {
                        clearTableRows();

        }

    }

    function clearTableRows() {

        hideTableColNames();
        d3.selectAll(".row_data").remove();
    }
    function hideTableColNames() {
        d3.select("table").style("visibility", "hidden");
    }

    function showTableColNames() {
        d3.select("table").style("visibility", "visible");
    }

    function populateTableRow(d_row) {

        showTableColNames();

        var d_row_filter = [d_row.name,
                            d_row.type,
                            d_row.OwnerPatron,
                            d_row.family,
                            d_row.School,
                            d_row.Mod_Class,
                            d_row.Eigen_Cent
                        ];

        d3.select("table")
          .append("tr")
          .attr("class", "row_data")
          .selectAll("td")
          .data(d_row_filter)
          .enter()
          .append("td")
          // .attr("align", "left")
          // .attr("width", "50px")
          .text(d => d);
    }

//TODO add the slider for force power

var button = d3.select("#controls")
  .append('input')
  .attr('type', 'button')
  .attr('value', 'Release fixed nodes')
  .on('click', function () { release(); });

    var texts = ['Use the scroll wheel to zoom',
                 'Hold the shift key to select nodes',
                            ]

    svg.selectAll('text')
        .data(texts)
        .enter()
        .append('text')
        .attr('x', 200)
        .attr('y', function(d,i) { return 700 + i * 18; })
        .text(function(d) { return d; });

    return graph;
};
