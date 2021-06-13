// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 

    // Create a variable that filters the samples for the object with the desired sample number.

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    // Create a variable that holds the first sample in the array.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // 2. Create a variable that holds the first sample in the metadata array.
    var result = resultArray[0];
    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var 
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      type: "indicator",
      mode: "gauge+number",
      gauge: {
          axis: {
              range: [0, 9],
              tickmode: 'linear',
              tickfont: {
                  size: 15
              }
          },
          bar: { color: 'rgba(8,29,88,0)' },
          steps: [
              { range: [0, 1], color: 'rgb(255,255,217)' },
              { range: [1, 2], color: 'rgb(237,248,217)' },
              { range: [2, 3], color: 'rgb(199,233,180)' },
              { range: [3, 4], color: 'rgb(127,205,187)' },
              { range: [4, 5], color: 'rgb(65,182,196)' },
              { range: [5, 6], color: 'rgb(29,145,192)' },
              { range: [6, 7], color: 'rgb(34,94,168)' },
              { range: [7, 8], color: 'rgb(37,52,148)' },
              { range: [8, 9], color: 'rgb(8,29,88)' }
          ]
      }
  };
     
    ];
    
    // 5. Create the layout  the gauge chart.
    var gaugeLayout = { 

     title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
     maximum range: 10,
    

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
