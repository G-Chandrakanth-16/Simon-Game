gameSequence=[];
colors=["green","red"];
userSequence=[];
level=0;
value=true;
$(".start").on("click",function(event){
       
    $(".start").val("Reset");
        if(value){
        nextSequence();
        value=false;
        }
        else{
            $(".start").val("Start");
            $("#level-title").text("Press Start key to Start");
            startOver();
        }
});
$(".btn").click(function(){
    var userColor=$(this).attr('id');
    var audio=new Audio("./sounds/"+userColor+".mp3");
    audio.play();
    userSequence.push(userColor);
    $("#"+userColor).addClass('pressed');
    setTimeout(function() {
        $("#"+userColor).removeClass('pressed');
    }, 100);
    check(userSequence.length-1);
});
function check( clevel){
    if(gameSequence[clevel]===userSequence[clevel])
    {
            if(userSequence.length==gameSequence.length)
            {
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }
    }
    else{
        $("body").addClass("game-over");
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("Game Over,Press Reset key to Restart!");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
       
    }
}
function nextSequence(){
    level++;
    $("h1").text("Level "+level);
    userSequence=[];
    let x=Math.floor((Math.random() * 2));
    var audio=new Audio("./sounds/"+colors[x]+".mp3");
    audio.play();
    gameSequence.push(colors[x]);
    $("#"+colors[x]).addClass('pressed');
    setTimeout(function() {
        $("#"+colors[x]).removeClass('pressed');
    }, 100);
}
function startOver(){
    gameSequence=[];
    userSequence=[];
    level=0;
    value=true;
}






