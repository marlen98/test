
function openNav() {
   document.getElementById("myMenu").style.width = "250px";
    document.getElementById("tabs-content").style.marginLeft = "250px";
    document.getElementById("header").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
};

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('myMenu');
    if (!container.contains(e.target)) {
        document.getElementById("myMenu").style.width = "0";
        document.getElementById("tabs-content").style.marginLeft = "0";
        document.getElementById("header").style.marginLeft = "0";
        document.body.style.backgroundColor = "rgb(51, 51, 51)";
    
     }

});

function changeColor () {  
    const tab= document.getElementById ('slider');
     document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
          tab.addEventListener('click', changeBack);
    function changeBack () {document.body.style.backgroundColor = "rgb(51, 51, 51)";}
    
     }

