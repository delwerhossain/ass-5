document
  .getElementById("btn-triangle-cal")
  .addEventListener("click", function () {
    const bPart = parseFloat(
      document.getElementById("input-triangle-v1").value
    );
    const hPart = parseFloat(
      document.getElementById("input-triangle-v2").value
    );
    if ((bPart <= 0) || (hPart <= 0)|| (bPart == '') || (hPart == '')) {
      return;
    } else if ((isNaN(bPart)) || (isNaN(hPart))) {
        return;
    }
    const showValue = 0.5 * bPart * hPart;
      //empty triangle inputed
    getempty("input-triangle-v1", "input-triangle-v2");
    // preview part
    const name = document.getElementById("triangle-name").innerText;
      tablePart(name, showValue);
      // color picker part
    document.getElementById("triangle-bg").style.backgroundColor =
      generateRandomColor();
  });

document
  .getElementById("triangle-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("triangle-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

//------------------------------------------------------->
//------------------------------------------------------->
//                  clear
//------------------------------------------------------->

//------------------------------------------------------->
//                  clear
//------------------------------------------------------->

document
  .getElementById("btn-rectangle-cal")
  .addEventListener("click", function () {
    const bPart = parseFloat(
      document.getElementById("input-rectangle-v1").value
    );
    const hPart = parseFloat(
      document.getElementById("input-rectangle-v2").value
    );
    if ((bPart <= 0) || (hPart <= 0)|| (bPart == '') || (hPart == '')) {
      return;
    } else if ((isNaN(bPart)) || (isNaN(hPart))) {
        return;
    }
    //empty triangle inputed
      getempty("input-rectangle-v1", "input-rectangle-v2");
      

      const showValue = bPart * hPart;
      
    // document.getElementById("ans").innerText = showValue;

    //preview part

    const name = document.getElementById("rectangle-name").innerText;
    tablePart(name, showValue);
  });

// random color picker
document
  .getElementById("rectangle-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("rectangle-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

document
  .getElementById("btn-parallelogram-cal")
  .addEventListener("click", function () {
    const bPart = parseFloat(
      document.getElementById("input-parallelogram-v1").value
    );
    const hPart = parseFloat(
      document.getElementById("input-parallelogram-v2").value
    );
    if ((bPart <= 0) || (hPart <= 0)|| (bPart == '') || (hPart == '')) {
      return;
    } else if ((isNaN(bPart)) || (isNaN(hPart))) {
        return;
    }
    //empty triangle inputed
      getempty("input-parallelogram-v1", "input-parallelogram-v2");
      
    const showValue = bPart * hPart;
    // document.getElementById("ans").innerText = showValue;

    //preview part

    const name = document.getElementById("parallelogram-name").innerText;
    tablePart(name, showValue);
  });

// random color picker
document
  .getElementById("parallelogram-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("parallelogram-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

document
  .getElementById("btn-rhombus-cal")
  .addEventListener("click", function () {
    const d1Part = getValue("input-rhombus-v1");
    const d2Part = getValue("input-rhombus-v2");
    const showValue = 0.5 * d1Part * d2Part;
    // document.getElementById("ans").innerText = showValue;
    //preview part

    const name = document.getElementById("rhombus-name").innerText;
    tablePart(name, showValue);
  });
// random color picker
document
  .getElementById("rhombus-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("rhombus-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

document
  .getElementById("btn-pentagon-cal")
  .addEventListener("click", function () {
    const pPart = getValue("input-pentagon-v1");
    const bPart = getValue("input-pentagon-v2");
    const showValue = 0.5 * pPart * bPart;
    // document.getElementById("ans").innerText = showValue;
    //preview part

    const name = document.getElementById("pentagon-name").innerText;
    tablePart(name, showValue);
  });
// random color picker
document
  .getElementById("pentagon-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("pentagon-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

document
  .getElementById("btn-ellipse-cal")
  .addEventListener("click", function () {
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
document
  .getElementById("ellipse-bg")
  .addEventListener("mouseenter", function () {
    document.getElementById("ellipse-bg").style.backgroundColor =
      "" + generateRandomColor();
  });

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById('cal-container').style.display = "none";
});

document.getElementById("btn-blog").addEventListener("click", function () {
  location.href = "blog.html";
});



// colors picker
// genNew.addEventListener("mouseenter", setBg);
// setBg();

// addEventListener("mouseenter", setBg);
