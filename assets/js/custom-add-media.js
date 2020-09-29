$(".media-list li").on('click', function () {
    $(".media-list li .media-img-container .media-img-center input").attr('checked', false);
    $(this).find('.media-img-container').find('.media-img-center').find('input').attr('checked',
        true);
    var img = $(this).find('.media-img-container').find('.media-img-center').find("img").attr(
        "src");
    $("#image").attr('src', img);
    // Show the image and attributes in the info column
});

// Upload Button
$('#falseinput').on('click', function (e) {
    e.preventDefault();
    $("#fileinput").click();
});

// NON-REFRESHIG FILTERING BY CATEGORY
$("#filter-by-category").on('change', function () {
    var val = $("#filter-by-category").val();
    if (val == 'all') {
        $(".media-item").show();
    } else {
        $(".media-item").hide();
        $("." + $(this).val()).show();
    }
});