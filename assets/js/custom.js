opensdg.tableConfigAlter(function(config) {
    var overrides = {
        "order": [[ 0, "desc" ]]
    };
    $.extend(true, config, overrides);
});

function printDiv() 
{

  var divToPrint=document.getElementById('main-content');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}


function printingDiv(){
        var printContents = document.getElementById("main-content").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
}



this.createIndicatorPrintButtons(chartInfo.indicatorDownloads, chartInfo.shortIndicatorId, '#chartSelectionDownload');

    $("#btnPrint").click(function() {
      var filename = chartInfo.indicatorId + '.png',
          element = document.getElementById('chart-canvas'),
          footer = document.getElementById('selectionChartFooter'),
          height = element.clientHeight + 25 + ((footer) ? footer.clientHeight : 0),
          width = element.clientWidth + 25;
      var options = {
        // These options fix the height, width, and position.
        height: height,
        width: width,
        windowHeight: height,
        windowWidth: width,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        // Allow a chance to alter the screenshot's HTML.
        onclone: function(clone) {
          // Add a body class so that the screenshot style can be custom.
          clone.body.classList.add('image-download-in-progress');
        },
        // Decide which elements to skip.
        ignoreElements: function(el) {
          // Keep all style, head, and link elements.
          var keepTags = ['STYLE', 'HEAD', 'LINK'];
          if (keepTags.indexOf(el.tagName) !== -1) {
            return false;
          }
          // Keep all elements contained by (or containing) the screenshot
          // target element.
          if (element.contains(el) || el.contains(element)) {
            return false;
          }
          // Leave out everything else.
          return true;
        }
      };
