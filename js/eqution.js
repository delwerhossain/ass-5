
document.getElementById("btn-triangle-cal").addEventListener("click", function () {
    const bPart = getValue("input-triangle-v1");
    const hPart = getValue("input-triangle-v2");
    const showValue = 0.5 * bPart * hPart;
    // preview part 
    const name = document.getElementById("triangle-name").innerText;
    tablePart(name, showValue);
    document.getElementById("triangle-bg").style.backgroundColor = generateRandomColor();
    // console.log(generateRandomColor());
    

    // document.getElementById("ans").innerText = showValue;
    // console.log(typeof (parseFloat(55)));
    // console.log(bPart, hPart);
    //------------------------------------------------------->
    // console.log("button clicked");

    
//   document.getElementById("input-value").value = "";
    
    // const clearParent = document.getElementById("cal-container");

    // -------------------------------------------------------------------------
            // clear all btn elements
    // -------------------------------------------------------------------------


//     const divC = document.createElement("div");
//     divC.innerHTML = `
//     <button
//     id="clear-btn"
//     class="hidden mt-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-red-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
//   >
//     <span
//       class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
//     >
//       Clear All
//     </span>
//   </button>  
//   `;
    
//   document.getElementById("cal-container").appendChild(divC);

//   document.getElementById("clear-btn").addEventListener("click", function (e) {
//       console.log(e.target.parentNode);
//       e.target.parentNode.style.display = "none";
//   });
    
    

});
// random color picker
document.getElementById("triangle-bg").addEventListener("mouseenter", function () { 

    document.getElementById("triangle-bg").style.backgroundColor = ''+generateRandomColor();
});

//------------------------------------------------------->
//------------------------------------------------------->
//                  clear 
//------------------------------------------------------->



//------------------------------------------------------->
//                  clear 
//------------------------------------------------------->

document  
    .getElementById("btn-rectangle-cal").addEventListener("click", function () {
        const wPart = getValue("input-rectangle-v1");
        const iPart = getValue("input-rectangle-v2");
        const showValue = wPart * iPart;
        // document.getElementById("ans").innerText = showValue;

        //preview part       

        const name = document.getElementById("rectangle-name").innerText;
        tablePart(name, showValue);
    });

// random color picker
    document.getElementById("rectangle-bg").addEventListener("mouseenter", function () { 

        document.getElementById("rectangle-bg").style.backgroundColor = ''+generateRandomColor();
    });

document
    .getElementById("btn-parallelogram-cal").addEventListener("click", function () {
        const bPart = getValue("input-parallelogram-v1");
        const hPart = getValue("input-parallelogram-v2");
        const showValue = bPart * hPart;
        // document.getElementById("ans").innerText = showValue;

        //preview part        
        
        const name = document.getElementById("parallelogram-name").innerText;
        tablePart(name, showValue);
    });
    
// random color picker
document.getElementById("parallelogram-bg").addEventListener("mouseenter", function () { 

    document.getElementById("parallelogram-bg").style.backgroundColor = ''+generateRandomColor();
});

document
    .getElementById("btn-rhombus-cal").addEventListener("click", function () {
        const d1Part = getValue("input-rhombus-v1");
        const d2Part = getValue("input-rhombus-v2");
        const showValue = 0.5 * d1Part * d2Part;
        // document.getElementById("ans").innerText = showValue;
        //preview part        
        
        const name = document.getElementById("rhombus-name").innerText;
        tablePart(name, showValue);
    });
    // random color picker
document.getElementById("rhombus-bg").addEventListener("mouseenter", function () { 

    document.getElementById("rhombus-bg").style.backgroundColor = ''+generateRandomColor();
});

document
    .getElementById("btn-pentagon-cal").addEventListener("click", function () {
        const pPart = getValue("input-pentagon-v1");
        const bPart = getValue("input-pentagon-v2");
        const showValue = 0.5 * pPart * bPart;
        // document.getElementById("ans").innerText = showValue;
        //preview part        
        
        const name = document.getElementById("pentagon-name").innerText;
        tablePart(name, showValue);
    });
    // random color picker
document.getElementById("pentagon-bg").addEventListener("mouseenter", function () { 

    document.getElementById("pentagon-bg").style.backgroundColor = ''+generateRandomColor();
});

document
    .getElementById("btn-ellipse-cal").addEventListener("click", function () {
        const aPart = getValue("input-ellipse-v1");
        const bPart = getValue("input-ellipse-v2");
        const pi = 3.14159265359;
        const value = pi * aPart * bPart;
        const showValue = financial(value);
        
        // document.getElementById("ans").innerText = showValue;
        //preview part        
        
        const name = document.getElementById("ellipse-name").innerText;
        tablePart(name, showValue);
    });
    // random color picker
document.getElementById("ellipse-bg").addEventListener("mouseenter", function () { 

    document.getElementById("ellipse-bg").style.backgroundColor = ''+generateRandomColor();
});



    
document.getElementById("clear-btn").addEventListener("click", function (e) {
    console.log(e.target.parentNode);
    e.target.parentNode.style.display = "none";
});


document.getElementById("btn-blog").addEventListener("click", function () {
  
    location.href = "blog.html";
});




// colors picker
// genNew.addEventListener("mouseenter", setBg);
// setBg();

// addEventListener("mouseenter", setBg);