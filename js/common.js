let count = 0;
function tablePart(name, showValue) {
  count += 1;
  // console.log(myInputValue);

  const parent = document.getElementById("content-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    
    <td
    class="px-2 py-4 font-semibold text-gray-900 dark:text-white"
  >
    ${count}
  </td>
  <td
    class="pl-4 py-6 font-semibold text-gray-900 dark:text-white"
  >
  ${name}
  </td>
  <td
    class="pl-8 py-6 font-semibold text-gray-900 dark:text-white"
  >
  ${showValue}  cm <sup>2</sup>
  </td>
  <td class="pl-2 py-1">
    <button
      class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Covert to m <sup>2</sup>
      </span>
    </button>
  </td>
  `;

  parent.appendChild(tr);

  const elements = document.querySelectorAll(".deletebtn");
  // const clearAll = document.querySelectorAll("#clear-btn");

  for (const value of elements) {
    value.addEventListener("click", function (e) {
      // console.log(event.target.parentNode.parentNode);
      e.target.parentNode.parentNode.style.display = "none";
    });
  }

  // -------------------------------------------------------------------------
  // clear all btn elements
  // -------------------------------------------------------------------------

    //   const divC = document.createElement("div");
    //   divC.innerHTML = `
    //   <button
    //   id="clear-btn"
    //   class="mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-red-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    // >
    //   <span
    //     class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
    //   >
    //     Clear All
    //   </span>
    // </button>
    // `;

    // document.getElementById("cal-container").appendChild(divC);

}

// -------------------------------------------------------------------------
//                          getValue function 
// -------------------------------------------------------------------------

function getempty(v1,v2) {
  // if (
  //   (showValue <= 0) &&
  //   (showValue == "") &&
  //   (showValue == undefined) &&
  //   (showValue == 0) &&
  //   isNaN(showValue)
  // ) {
  //   document.getElementById(value).value = "";
  //   alert("Please enter correct numerical");
  //   return 0;
  // }
  document.getElementById(v1).value = "";
  document.getElementById(v2).value = "";
}

// 2 fixed values
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
  

// -------------------------------------------------------------------------
//                          getInnertext function
// -------------------------------------------------------------------------


function getInnertext(innerText) {
  let show = document.getElementById(innerText);
  // let showValue = parseInt(show.innerText);
  return show;
}

//---------------------------------------------------------------->

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.getElementsByClassName('genNew').style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}