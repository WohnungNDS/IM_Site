opensdg.tableConfigAlter(function(config) {
    var overrides = {
        "order": [[ 0, "desc" ]]
    };
    $.extend(true, config, overrides);
});

function printDiv() 
{

  var divToPrint=document.getElementById('chart-canvas');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}


function printingDiv(){
        var printContents = document.getElementById("chart-canvas").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
}

  var myApp = new function () {
        this.printDiv = function () {
            // Store DIV contents in the variable.
            var div = document.getElementById('chart-canvas');

            // Create a window object.
            var win = window.open('', '', 'height=700,width=700'); // Open the window. Its a popup window.
            win.document.write(div.outerHTML);     // Write contents in the new window.
            win.document.close();
            win.print();       // Finally, print the contents.
        }
    }
