$( document ).ready(function() {

var main = "../db/ola.txt"

var initialize = function(novo){

  var animal={ registo: null,
               name: null
              };

  if(novo===0){

    $("#btn_guardar").click(function(){
      criarNovo();
    });


  } else{

  }

}

var criarNovo = function(){



    var fso, iStream, n, csv=[];

    console.log(fopen(main,3));

    //fso=new ActiveXObject('Scripting.FileSystemObject');

    alert("ola2");


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
