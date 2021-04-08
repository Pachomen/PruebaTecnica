var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function newElement() {
  var strValue = document.getElementById("myInput").value;
  var indexNum = strValue.indexOf(":");
  var classType = "secondary";
  var li = document.createElement("li");
  var inputValue = strValue.slice(indexNum + 1, strValue.length);;
  var text = document.createTextNode(inputValue);
  li.classList.add("alert");
  if(strValue.indexOf(":") > 0 ){
    classType = strValue.slice(0, indexNum);
  }
  li.classList.add("alert-" + classType);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Debes poner una tarea");
  } else {
    document.getElementById("myUL").appendChild(li);

  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}