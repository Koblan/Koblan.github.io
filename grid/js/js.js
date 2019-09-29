
function gridColumnFr(){
    let grid = document.querySelector(".example-three");
    grid.style.gridTemplateColumns = "2fr 1fr 1fr";
 }
 function gridColumnTwoFr(){
     let grid = document.querySelector(".example-three");
     grid.style.gridTemplateColumns = "fr 1fr";
  }

 function gridRowsPx(){
    let grid = document.querySelector(".example-three");
    grid.style.gridTemplateRows = "100px 200px";
 }

 function gridColumnFrPx(){
    let grid = document.querySelector(".example-three");
    grid.style.gridTemplateColumns = "2fr 1fr 200px";
 }
 function gridGap(){
    let grid = document.querySelector(".example-three");
    grid.style.gridGap = "10px;";
 }
 function gridAutoRows(){
    let grid = document.querySelector(".example-three");
    grid.style.gridAutoRows = "90px;";
 }