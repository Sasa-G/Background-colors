var index = 0;

function changeColors(){
    var colors = ["red", "organge", "yellow", "green","blue", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length -1)
    index = 0
}