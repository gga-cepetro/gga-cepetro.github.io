
            
  function pageselectCallback(page_index, jq){
                var new_content = jQuery('#hiddenresult div.result:eq('+page_index+')').clone();
                $('#Searchresult').empty().append(new_content);
                return false;
            }

            function initPagination() {  
                var num_entries = jQuery('#hiddenresult div.result').length;
                $("#Pagination").pagination(num_entries, {
                    callback: pageselectCallback,
                    items_per_page:1 // Show only one item per page
                });
             }



             
             function initButtons() {
               var pg = $('#Pagination');
               $('#btnPrev').click(function(){
                 pg.trigger('prevPage');
               });
               $('#btnNext').click(function(){
                 $('#Pagination').trigger('nextPage');
               });
               $('#btnSet').click(function(){
                   pg.trigger('setPage', [1]); // Note how you pass the page number as a parameter here.
               });
             }
            
            // When document is ready, initialize pagination and buttons
            $(document).ready(function(){      
                initPagination();
                initButtons();
            });