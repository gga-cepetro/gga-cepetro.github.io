// $.ajax({
//   url: "resources/",
//   success: function(data){
//     meuVetor = new Array (); 
//     var i=0;
//     var caminho;
//     $(data).find("a:contains(.txt)").each(function(){
//           var texto = $(this).attr("href").replace(/.\w+$/,"");
//           meuVetor[i] = texto;
//  		  i++;  
//     });
//     meuVetor = meuVetor.reverse();
//     for(j= 0; j < meuVetor.length;  j++ ){     
//       caminho = "resources/"+meuVetor[j]+'.txt';

//       var collapse = "collapseOne"+j;
//       var carregarAr = "carregarAr"+j;
//       var articles = "articles";

//          document.getElementById("accordion").innerHTML += '<div class='+articles+'><h1>'+meuVetor[j]+'</h1>'
//                     +'<div id='+carregarAr+' ></div></div>';
//              readTextFile(caminho,carregarAr); 
//   	}
//   }
// });

// function readTextFile(file, id)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 var linhas = allText.split('|');
//                 for (i = 2; i < linhas.length-1; i++) {
//                    document.getElementById(id).innerHTML +=  linhas[i] + '</br></br>'  ;
//                 }
//             }
//         }
//     }
//     rawFile.send(null);
// }
