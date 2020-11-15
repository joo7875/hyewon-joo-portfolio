/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      // this.classList.toggle("active");

      var dropdownContent = this.nextElementSibling;

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    

  // Image Gallery

  var slideIndex = 1;
  var slideIndex_title = 1;
  showDivs(slideIndex);
  showDivs_title(slideIndex_title);

  function plusDivs(n) {
    showDivs(slideIndex += n);
    showDivs_title(slideIndex_title += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("huinno-img");

    if (n > x.length) slideIndex = 1;
    if (n < 1) slideIndex = x.length;

    for (i = 0; i < x.length; i++) 
      x[i].style.display = "none";  
    
    x[slideIndex-1].style.display = "block";  
  }

  function showDivs_title(n) {
    var j;
    var y = document.getElementsByClassName("huinno-title");

    if (n > y.length) slideIndex_title = 1;
    if (n < 1) slideIndex_title = y.length;

    for (j = 0; j < y.length; j++) 
      y[j].style.display = "none";  
    
    y[slideIndex_title-1].style.display = "block";  
  }
