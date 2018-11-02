if (occ == [0]) {
  return words[i]
          .replace(/[!\.,:;\?]/g, '')
          .split(' ')
          .map(function(d) {
              return {text: d, size: 10 + Math.random() * 60};
          })
        }
        else {
var max = d3.max(occ)
var min = d3.min(occ)

      var rsocc =  d3.scale.linear()
                .domain([min, max])
                .range([10, 50]);

          return words[i]
                  .replace(/[!\.,:;\?]/g, '')
                  .split(' ')
                  .map(function(d) {
                      return {text: d, size: rsocc[i]};
                  })
        }
