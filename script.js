// Automatic Slider
let counter = 1;
      setInterval(() => {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 10) counter = 1;
      }, 
      3000);