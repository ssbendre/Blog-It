let LikeMe = function (btnElement) {
//    console.log(btnElement.childNodes[0]);


    let LikeCounter = btnElement.childNodes[0].nodeValue;

    let LikeCount = parseInt(LikeCounter);

    LikeCount++;
    // console.log(LikeCount);

    btnElement.childNodes[0].nodeValue= LikeCount;


}


