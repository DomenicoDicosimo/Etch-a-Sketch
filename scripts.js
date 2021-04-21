const container = document.getElementById("container");
const reset = document.querySelectorAll('button');


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(5, 5);
assignMouseOver();

function assignMouseOver()
{ 
  const boxes = Array.from(document.getElementsByClassName("grid-item"));
  boxes.forEach(box => box.addEventListener("mouseover",function(){
  box.style.backgroundColor = "black";
  }));
}

function removeBoxes()
{
  const boxes2 = Array.from(document.getElementsByClassName("grid-item"));
  boxes2.forEach(box => 
    {
      box.parentNode.removeChild(box)
    });
}
  

reset.forEach((button) =>
{
  resetButton.addEventListener('click', () =>
  {
    let gridsize = prompt("How big would you like to make the grid?")
    if(gridsize <= 100)
    {
      removeBoxes();
      makeRows(gridsize,gridsize);
      assignMouseOver();

    }
    else
    {
      alert("The grid must be 100 squares or smaller.")
    }

  });
});

