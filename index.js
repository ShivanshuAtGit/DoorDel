document.addEventListener('scroll' , function(){

    var value = window.scrollY;

    var left = document.querySelector('.left__person');
    var right = document.querySelector('.right__person');

    var leftTalk = document.querySelector('.left__talk');
    var rightTalk = document.querySelector('.right__talk');


    // console.log(value);

    if(value > 350){
        left.style.opacity = 1;
        right.style.opacity = 1;

        if(value < 550){
            left.style.left = (value - 350) * (5/4) + "px";
            right.style.right = (value - 350) * (5/4) + "px";
        }
         
    }

    else{
        left.style.opacity = 0;
        right.style.opacity = 0;

        if(value < 550){
            left.style.left = (value - 350) * (5/4) + "px";
            right.style.right = (value - 350) * (5/4) + "px";
        }
    }


    if(value > 600){
        leftTalk.style.opacity = 1;
        rightTalk.style.opacity = 1;

        if(value < 550){
            leftTalk.style.left = (value - 350) * (5/4) + "px";
            rightTalk.style.right = (value - 350) * (5/4) + "px";
        }
         
    }

    else{
        leftTalk.style.opacity = 0;
        rightTalk.style.opacity = 0;

        if(value < 550){
            leftTalk.style.left = (value - 350) * (5/4) + "px";
            rightTalk.style.right = (value - 350) * (5/4) + "px";
        }
    }
   
});

 