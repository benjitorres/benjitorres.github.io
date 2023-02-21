/*
document.addEventListener("touchstart", function(event) {
var textBox = document.getElementById("text-box");
textBox.classList.add("fade");
setTimeout(function() {
    textBox.innerHTML = `
    <div class="text-center">
        <b>New Text</b>
    </div>
    This is the new text in the box.
    `;
    textBox.classList.remove("fade");
}, 500);
}, false);
*/

document.addEventListener("touchstart", function(event) {
    var textBox = document.getElementById("text-box");
    textBox.classList.add("fade");
  
    // Define the array of text
    var textArray = [
      {
        title: ":)",
        content: "",
      },
      
      {
        title: "Salmo 37:5",
        content: "Ipagkatiwala mo sa Panginoon ang lahat ng iyong ginagawa; magtiwala ka sa kanya at tutulungan ka niya"
      },
      
      {
        title: "Jeremias 17:7",
        content: "Pero mapalad ang taong nagtitiwala at lubos na umaasa lamang sa akin"
      },
      
      {
        title: "Mateo 6:33",
        content: "Kaya unahin ninyo ang mapabilang sa kaharian ng Dios at ang pagsunod sa kanyang kalooban, at ibibgay niya ang lahat nang pangangailangan ninyo."
      },
      
      {
        title: "Filipos 4:6-7",
        content: "Huwag kayong mag-alala sa anumang bagay. Sa halip, ilapit sa Dios ang lahat ng pangangailangan n'yo sa pamamagitan ng panalangin na may pasasalamat. Kapag ginaway n'yo ito, bibigyan kayo ng Dios ng kapayapaan na siyang mag-iingat sa puso ninyo at pag-iisip dahil kayo'y nakay Cristo Jesus. At ang kapayapaang ito ay hindi kayang unawain ng tao."
      },
      
      {
        title: "Kawikaan 3:5-6",
        content: "Magtiwala ka nang buong puso sa Panginoon at huwag kang manalig sa iyong sariling karunungan. Alalahanin mo ang Panginoon sa lahat ng young ginagawa at ituturo niya sa iyo ang tamang landas."
      },
    ];
  
    // Keep track of the current index
    var currentIndex = parseInt(textBox.getAttribute("data-index")) || 0;
    currentIndex = (currentIndex + 1) % textArray.length;
  
    // Update the text box
    setTimeout(function() {
      var currentText = textArray[currentIndex];
      textBox.innerHTML = `
        <div class="text-center">
          <b>${currentText.title}</b>
        </div>
        ${currentText.content}
      `;
      textBox.setAttribute("data-index", currentIndex);
      textBox.classList.remove("fade");
    }, 500);
  }, false);
  