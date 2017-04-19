$( document ).ready(function() {

var main = "../db/main.csv"

var initialize = function(novo){

  var animal={ registo: null,
               name: null,
              };

  if(novo===0){

    $("#btn_guardar").click(function(){
      alert("ola");
      criarNovo();
    });


  } else{

  }

}

var criarNovo = function(){



    var fso, iStream, n, csv=[];
alert("ola2");


    fso=new ActiveXObject('Scripting.FileSystemObject');


    iStream=fso.OpenTextFile(main,1,true);



    for(n=0;!iStream.AtEndOfStream;n++){
        csv[n]=iStream.ReadLine().split(';');
    }
    iStream.Close();
    //return csv;

    console.log(csv);

};

initialize(0);

});
