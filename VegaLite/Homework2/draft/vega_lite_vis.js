var vg_1 = "choropleth.json";
var vg_2 = "choropleth-interactive.json";

vegaEmbed("#choropleth", vg_1) .then(function(result) {

    // Access the Vega view instance (https://vega.github/io/vega/docs/api/view) as result.view

}).catch(console.error);

vegaEmbed("#choropleth-interactive", vg_2) .then(function(result) {

    // Access the Vega view instance (https://vega.github/io/vega/docs/api/view) as result.view

}).catch(console.error);
