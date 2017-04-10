document.getElementById("download").addEventListener("click", download, false);


function download(e) {

    data = [["id","value"]];

    var f = d3.selectAll("#csvForm > input")[0];

    f.forEach(function(d,i){
      	data.push([d.id, d.value]);
    });

    console.log(data);

    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function (d, i) {
        dataString = d.join(",");
        csvContent += i < data.length ? dataString + "\n" : dataString;
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "FormRegisto.csv");
    link.click();
}
