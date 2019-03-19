function toggle(){
    if($(".main").css("transform") == "matrix(1, 0, 0, 1, 0, -55)"){
       $(".sidebar").css("transform", "translate(-250px, 0)");
       $(".main").css("transform", "translate(0, 0)");
       $("#body").css("transform", "translate(0, 55px)");
    }else{
        $(".sidebar").css("transform", "translate(0, 0)");
        $(".main").css("transform", "translate(0, -55px)");
        $("#body").css("transform", "translate(0, 0");
    }
}


   

