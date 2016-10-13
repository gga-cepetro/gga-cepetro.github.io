$(document).ready(function () {
    $('#pagination-demo').twbsPagination({
        totalPages: "10",
        visiblePages: "3",
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
        }
    });
});

