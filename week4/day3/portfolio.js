
// $("#my-portfolio").animate({height: "1079px"}, 2000);

$(".fab-lst .fab").on("click", function(){
    var tabName = $(this).get(0).classList[0];
    console.log(tabName);
    $("section").fadeOut();
    $("#" + tabName).fadeIn();

    $(".fab-lst .fab.active").removeClass("active");
    $(this).addClass("active");
});