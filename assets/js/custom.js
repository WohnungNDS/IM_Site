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
