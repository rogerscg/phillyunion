setInterval(() => {
  // arr is a list of CSS names for flair
  var x = arr.shift();
  var inputs = document.querySelectorAll("[name=css_class]");
  inputs[inputs.length - 2].value = x;
  var buttons = document.querySelectorAll(".flair-entry button");
  buttons.forEach(x => {
    if (x.innerHTML == "save")
      x.click();
  });
}, 1000);