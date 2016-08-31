// $.ajax({
//   url: "resources/",
//   success: function(data){
//     meuVetor = new Array (); 
//     var i=0;
//     var caminho;
//     //var texto;
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
//       var tresPrimeiros = "checked";

//         if(j > 2){
//           tresPrimeiros ="";
//         }
//          document.getElementById("accordion").innerHTML += '<div><input id='+collapse+' name='+collapse+' class="accordionDesliza" type="checkbox" onclick="readTextFile(\''+ caminho + '\',\''+ carregarAr + '\')"'+tresPrimeiros+' />'
//                     +'<label for='+collapse+' >'+meuVetor[j]+'</label>'
//                     +'<article class="ac-small"  >'
//                      +    '<div><ul class="publications" id='+carregarAr+'></ul></div>'
//                     +'</article></div>';
//          if (j < 3){
//           readTextFile(caminho,carregarAr);         
//         } 
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
//                 document.getElementById(id).innerHTML=""; 
//                 for (i = 2; i < linhas.length-1; i++) {
//                    document.getElementById(id).innerHTML += '<li>'+ linhas[i] + '</li>';
//                 }
//             }
//         }
//     }
//     rawFile.send(null);
// }

