const x = document.getElementById("ul");
const y = document.getElementById("ndSpan");
function clickbtn() {
        if (x.style.display === 'none'){
        x.style.display = 'block'; 
        y.style.width="100%";
        }
        else{
        x.style.display = 'none';
        y.style.width="60%";
        }
    }