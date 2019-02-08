/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a differnt background when you click on one of them*/


// CHANGES BACKGROUND OF SELECTED CLASS TO BLUE USING CSS CODE
$(".hello").on("click", function()
{
    $(this).css("background", "cadetblue")
});



/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */


// CHANGE HEIGHT/WIDTH WITH MOUSEOVER/ADDCLASS
$("h1").on("mouseover", function()
{
    $(this).addClass("selectEx")
});

//REMOVES ADD FUNCTION USING MOUSEOUT/REMOVECLASS

$("h1").on("mouseout", function()
    {
   $(this).removeClass("selectEx")
});



// ADDS A PERIOD TO THE END OF THE SELECTED SENTENCE EACH TIME IT'S CLICKED
$(".hello:first").on("click", function()
{
    $(this).append(".");
});