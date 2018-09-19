var form = document.getElementsByTagName("form")[0];
var input = document.getElementsByTagName("input")[0];

input.addEventListener("focus", function() {
    form.setAttribute("style", "box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);");
});

input.addEventListener("blur", function() {
    form.setAttribute("style", "box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);");
})
