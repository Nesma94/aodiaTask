if ($(".content-news-block").length > 0) {
  var Page = 1;

  function LoadImages(idx) {

    var URL = "https://socialnuts-projects.com/2019/porto/products/allMedia/" + idx + "";

    $.ajax({
      type: 'GET',
      url: URL,
      dataType: 'json',
      beforeSend: function (xhr) {
        $(".media-list").data("loading");

      },
      success: function (data) {

        Page = Page + 1;
        $.each(data, function (index, element) {

          var name = element.name;

          var html = '<li class="media-item" data-id="" data-title="" data-caption="">';
          html += '<div class="media-img-container"> <i class="fa fa-check"></i> <div class="media-img-center">';
          html += '<img src="https://socialnuts-projects.com/2019/porto/assets/uploads/' + name + '" data-src="https://socialnuts-projects.com/2019/porto/assets/uploads/' + name + '" alt="Media Image" class="media-image lazy">';
          html += '<input type="radio" class="selected-img" name="imgRadio" id="imRadio1">';
          html += '</div> </div> </li>';

          $(".media-list").append(html);

          var myLazyLoad1 = new LazyLoad({
            container: document.getElementById('mediaModal')
          });
        });
      }
    });
  }


  $('#mediaModal').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#mediaModal").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#mediaModal');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });

  $('#missionModal').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#missionModal").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#missionModal');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal3').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal3").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal3');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal4').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal4").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal4');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal5').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal5").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal5');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal6').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal6").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal6');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal7').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal7").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal7');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal8').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal8").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal8');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal9').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal9").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal9');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal10').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal10").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal10');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal11').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal11").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal11');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });
  $('#Modal12').on('shown.bs.modal', function () {
    $(function () {
      LoadImages(Page);

      $("#Modal12").on("scroll", function () {

        console.log("scroll");
        var $this = $(this);
        var $results = $('#Modal12');

        var minusHeight = $this.height();

        if (!$results.data("loading")) {

          if ($results.scrollTop() + $results.innerHeight() > this.scrollHeight - 100) {
            LoadImages(Page);
          }
        }
      });
    });
  });


  // Upload Button
  $("#visibleInputUpload").on("click", function (e) {
    e.preventDefault();
    $("#hiddenInput").click();
  });


  // $(".img-triggers").hide();
  if ($("#img-chosen-name").val()) {
    var val = $("#img-chosen-name").val();
    if (val.indexOf("https://") == 0) {
      $("#side-chosen-img")
        .show()
        .attr("src", val);
    } else {
      $("#side-chosen-img")
        .show()
        .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
    }

  }
  if ($("#img-chosen-name2").val()) {
    var val = $("#img-chosen-name2").val();
    $("#side-chosen-img2")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name3").val()) {
    var val = $("#img-chosen-name3").val();
    $("#side-chosen-img3")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name4").val()) {
    var val = $("#img-chosen-name4").val();
    $("#side-chosen-img4")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name5").val()) {
    var val = $("#img-chosen-name5").val();
    $("#side-chosen-img5")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name6").val()) {
    var val = $("#img-chosen-name6").val();
    $("#side-chosen-img6")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name7").val()) {
    var val = $("#img-chosen-name7").val();
    $("#side-chosen-img7")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name8").val()) {
    var val = $("#img-chosen-name8").val();
    $("#side-chosen-img8")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name9").val()) {
    var val = $("#img-chosen-name9").val();
    $("#side-chosen-img9")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name10").val()) {
    var val = $("#img-chosen-name10").val();
    $("#side-chosen-img10")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name11").val()) {
    var val = $("#img-chosen-name11").val();
    $("#side-chosen-img11")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }
  if ($("#img-chosen-name12").val()) {
    var val = $("#img-chosen-name12").val();
    $("#side-chosen-img12")
      .show()
      .attr("src", "https://socialnuts-projects.com/2019/porto/assets/uploads/" + val);
  }


  $("#del_news_img1").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name").val("");
    $(".trg1").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });

  $("#del_news_img2").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name2").val("");
    $(".trg2").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img3").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name3").val("");
    $(".trg3").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img4").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name4").val("");
    $(".trg4").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img5").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name5").val("");
    $(".trg5").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img6").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name6").val("");
    $(".trg6").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img7").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name7").val("");
    $(".trg7").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img8").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name8").val("");
    $(".trg8").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img9").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name9").val("");
    $(".trg9").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img10").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name10").val("");
    $(".trg10").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img11").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name11").val("");
    $(".trg11").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });
  $("#del_news_img12").on('click', function (e) {
    e.preventDefault();
    $("#img-chosen-name12").val("");
    $(".trg12").hide(function () {
      $(this)
        .find("img")
        .attr("src", "");
    });
  });

 var cached_imgs = [];
 var textarea = $("textarea");
 if ($(".form-group textarea").length > 0) {
   if ($(".form-group #editor").length > 0){
     CKEDITOR.replace("editor", {
       language: "en",
       customConfig: "https://socialnuts-projects.com/2019/porto/assets/js/ckeditor_config.js",
       skin: "moono",
       emailProtection: "encode",
       
     });
     nanospell.ckeditor('editor', {
       dictionary: "en",
       server: "php",
       ignore_block_caps: false,
       ignore_non_alpha: false
     });
   }if ($(".form-group #arabic").length > 0){
     CKEDITOR.replace("arabic", {
       language: "ar",
       customConfig: "https://socialnuts-projects.com/2019/porto/assets/js/ckeditor_config.js",
       skin: "moono",
       emailProtection: "encode"
     });

   }

   
 }
  $("#mediaModal").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });

  $("#mediaModal").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");
    console.log(img.split("/")[7]);
    $(".trg1").show(function () {
      $("#img-chosen-name").val(img.split("/")[7]);
      $("#side-chosen-img").attr("src", img);
    });
  });

  $("#mediaModal").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);
    $("#image").attr("src", img);
    $(".trg1").show(function () {
      $("#img-chosen-name").val(img.split("/")[7]);
      $("#side-chosen-img").attr("src", img);
    });
  });
  $("#missionModal").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal3").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal4").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal5").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal6").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal7").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal8").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal9").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal10").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal11").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });
  $("#Modal12").on("shown.bs.modal", function () {
    $(".media-list li").each(function () {
      cached_imgs.push({
        element: this,
        text: $(this)
          .attr("data-title")
          .trim()
          .toLowerCase()
      });
    });
  });

  $("#missionModal").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg2").show(function () {
      $("#img-chosen-name2").val(img.split("/")[7]);
      $("#side-chosen-img2").attr("src", img);
    });
  });

  $("#Modal3").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);
    $("#image").attr("src", img);
    $(".trg3").show(function () {
      $("#img-chosen-name3").val(img.split("/")[7]);
      $("#side-chosen-img3").attr("src", img);
    });
  });

  $("#Modal4").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg4").show(function () {
      $("#img-chosen-name4").val(img.split("/")[7]);
      $("#side-chosen-img4").attr("src", img);
    });
  });

  $("#Modal5").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg5").show(function () {
      $("#img-chosen-name5").val(img.split("/")[7]);
      $("#side-chosen-img5").attr("src", img);
    });
  });
  $("#Modal12").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg12").show(function () {
      $("#img-chosen-name12").val(img.split("/")[7]);
      $("#side-chosen-img12").attr("src", img);
    });
  });

  $("#Modal6").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg6").show(function () {
      $("#img-chosen-name6").val(img.split("/")[7]);
      $("#side-chosen-img6").attr("src", img);
    });
  });
  $("#Modal7").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg7").show(function () {
      $("#img-chosen-name7").val(img.split("/")[7]);
      $("#side-chosen-img7").attr("src", img);
    });
  });
  $("#Modal8").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg8").show(function () {
      $("#img-chosen-name8").val(img.split("/")[7]);
      $("#side-chosen-img8").attr("src", img);
    });
  });
  $("#Modal9").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg9").show(function () {
      $("#img-chosen-name9").val(img.split("/")[7]);
      $("#side-chosen-img9").attr("src", img);
    });
  });

  $("#Modal10").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg10").show(function () {
      $("#img-chosen-name10").val(img.split("/")[7]);
      $("#side-chosen-img10").attr("src", img);
    });
  });

  $("#Modal11").delegate(".media-list li", "click", function () {
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    $("#image").attr("src", img);
    $(".trg11").show(function () {
      $("#img-chosen-name11").val(img.split("/")[7]);
      $("#side-chosen-img11").attr("src", img);
    });
  });
  // Upload Button
  $("#falseinput").on("click", function (e) {
    e.preventDefault();
    $("#fileinput").click();
  });

  $(".edit-attachment").on('click', function (e) {
    e.preventDefault();
    if ($("#mediaModal").length > 0) {
      $("#mediaModal .modal-title").text("Edit Image");
      $("#mediaModal .modal-footer .insert-img").hide();
      $("#mediaModal .modal-footer .save-img").show();
    }
    var $image = $("#image");
    var options = {
      aspectRatio: 16 / 9,
      preview: ".img-preview"
    };
    options[name] = "NaN";
    $(".choose-media").hide();
    $(".media-edit-cropper").show();
    $image.cropper("destroy").cropper(options);
  });

  $(".save-img").on('click', function (e) {
    e.preventDefault();
    $(".choose-media").show();
    $(".media-edit-cropper").hide();
    if ($("#mediaModal").length > 0) {
      $("#mediaModal .modal-title").text("Add Image");
      $("#mediaModal .modal-footer .insert-img").show();
      $("#mediaModal .modal-footer .save-img").hide();
    }
  });

  // Disable Checkboxes in Categories Section
  $(".categories-container .form-check-label input:checkbox").on(
    "click",
    function () {
      var $inputs = $(".categories-container .form-check-label input:checkbox");
      if ($(this).is(":checked")) {
        $inputs.not(this).prop("disabled", true);
      } else {
        $inputs.prop("disabled", false);
      }
    }
  );

  // FILTERING USING KEYWORDS
  $(document).ready(function () {
    $("#searchInput").on('keyup input', function () {
      // Retrieve the input field text
      var filter = $(this)
        .val()
        .trim()
        .toLowerCase();
      // Loop through the captions div
      cached_imgs.forEach(function (img) {
        var index = 0;
        if (filter) {
          index = img.text.indexOf(filter);
        }
        img.element.style.display = index === -1 ? "none" : "";
      });
    });
  });

  // ON CLICKING ON AN IMAGE IN UPLOAD MODAL, GET ALL ITS DATA
  $("#mediaModal").delegate(".media-list li", "click", function () {
    $(".details-col").removeClass("d-none");

    var $selectedImg = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#url-field").val($selectedImg);
    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);

    var $selectedImgName = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src")
      .split("/");
    // console.log($selectedImgName);

    $selectedImgName = $selectedImgName[6];
    $(".filename").html($selectedImgName);

    // Value on Hidden Input for Image
    if ($("#img-chosen-name").length == 0) {
      $("#img-chosen-name").val($selectedImgName);
    }

    $(".details-col .attachment-info img").attr("src", $selectedImg);

    $ImgWidth = Math.floor(
      $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .width()
    );

    $ImgHeight = Math.floor(
      $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .height()
    );

    $(".selected-img-width").html($ImgWidth);
    $(".selected-img-height").html($ImgHeight);

    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", $selectedImg, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var $sizeInKB = formatFileSize(
            xhr.getResponseHeader("Content-Length")
          );
          $(".file-size").html($sizeInKB);
        } else {
          alert("ERROR!, The Image is corrupt");
        }
      }
    };
    xhr.send(null);
  });
}
// media scrips
if ($(".content-media-block").length > 0) {
  var cached_imgs = [];
  // $('#mediaModal').on('shown.bs.modal', function () {
  // });

  // Without the Modal TAKE CARE !!!
  $(".media-item").each(function () {
    cached_imgs.push({
      element: this,
      text: $(this)
        .attr("data-title")
        .trim()
        .toLowerCase()
    });
  });

  // Upload Button
  $("#visibleInputUpload").on("click", function (e) {
    e.preventDefault();
    $("#hiddenInput").click();
  });

  $("#mediaModal").delegate(".media-list li", "click", function () {
    $("#mediaModal").modal({
      show: true
    });
    $(".media-item").removeClass("checked-img");
    $(this).toggleClass("checked-img");
    $(".insert-img").removeAttr("disabled");
    $(".media-list li .media-img-container .media-img-center input").attr(
      "checked",
      false
    );
    $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("input")
      .attr("checked", true);
    var img = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src");

    var $selectedImgName = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .attr("src")
      .split("/");
    // console.log($selectedImgName);

    $selectedImgName = $selectedImgName[6];
    $(".filename").html($selectedImgName);

    $(".attachment-info .image img").attr("src", img);
    var $selectedImgUrl = img;
    var $selectedImgTitle = $(this).data("title");
    var $selectedImgCaption = $(this).data("caption");

    $("#title-field").val($selectedImgTitle);
    $("#caption-field").val($selectedImgCaption);
    $("#url-field").val($selectedImgUrl);

    var img_id = $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .data("image");

    $(".attachment-info .image img").attr("data-id", img_id);

    $(".img_get_id").val(img_id);

    $ImgWidth = Math.floor(
      $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .width()
    );

    $ImgHeight = Math.floor(
      $(this)
      .find(".media-img-container")
      .find(".media-img-center")
      .find("img")
      .height()
    );

    $(".selected-img-width").html($ImgWidth);
    $(".selected-img-height").html($ImgHeight);

    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", img, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var $sizeInKB = formatFileSize(
            xhr.getResponseHeader("Content-Length")
          );
          $(".file-size").html($sizeInKB);
        } else {
          alert("ERROR!, The Image is corrupt");
        }
      }
    };
    xhr.send(null);

    $("#image, #side-chosen-img").attr("src", img);
    $("#img-chosen-name").val(img);

    var $image = $("#image");
    var options = {
      aspectRatio: 16 / 9,
      preview: ".img-preview"
    };
    options[name] = "NaN";
    $(".choose-media").hide();
    $(".media-edit-cropper").show();
    $image.cropper("destroy").cropper(options);
  });

  // NON-REFRESHIG FILTERING BY CATEGORY
  $("#filter-by-category").on("change", function () {
    var val = $("#filter-by-category").val();
    if (val == "all") {
      $(".media-item").show();
    } else {
      $(".media-item").hide();
      $($(".media-item[data-id=" + val + "]")).show();
    }
  });

  // FILTERING USING KEYWORDS
  $(document).ready(function () {
    $("#searchInput").on('keyup input', function () {
      // Retrieve the input field text
      var filter = $(this)
        .val()
        .trim()
        .toLowerCase();
      // Loop through the captions div
      cached_imgs.forEach(function (img) {
        var index = 0;
        if (filter) {
          index = img.text.indexOf(filter);
        }
        img.element.style.display = index === -1 ? "none" : "";
      });
    });
  });

  $(".delete-attachment").on('click', function (e) {
    e.preventDefault();
    var id = $(".attachment-info .image img").data("id");
    delete_image(id);
  });
}

// Function to Get File size
function formatFileSize(bytes, decimalPoint) {
  if (bytes == 0) return "0 Bytes";
  var k = 1000,
    dm = decimalPoint || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseInt((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function delete_image(x) {
  // https://localhost/drcegEditorEn/media
  var r = confirm(" Do You Really Want To Delete This Image !!");
  if (r == true) {
    window.location = "https://localhost.com/saf/media/deleteMedia/" + x;
  } else {}
}