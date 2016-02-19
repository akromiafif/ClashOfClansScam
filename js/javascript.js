function validate(form) {
  var errorText = "";
  var pass = true;
  var emailID = form[8].value;
  var atpos = emailID.indexOf("@");
  var dotpos = emailID.lastIndexOf(".");

  for (var i = 0; i < 12; i++) {
    switch (i) {
     case 0: errorText = 'Gold'; break;
     case 1: errorText = 'Elixir'; break;
     case 2: errorText = 'Gems'; break;
     case 3: errorText = 'Dark Elixir'; break;
     case 4: errorText = 'Gold'; break;
     case 5: errorText = 'Elixir'; break;
     case 6: errorText = 'Gems'; break;
     case 7: errorText = 'Dark Elixir'; break;
     case 8: errorText = 'Email Address'; break;
     case 9: errorText = 'Phone Number'; break;
     case 10: errorText = 'Townhall'; break;
   }

    if (form[i].value.trim().length == "") {
      form[i].insertAdjacentHTML("afterbegin", form[i].value =  errorText + ' is required');
      pass = false;
    } else if (i < 8 && form[i].value.trim() > 10000000){
        form[i].insertAdjacentHTML("afterbegin", form[i].value =  'Max ' + errorText + ' is 10.000.000');
        pass = false;
      } else if  (i < 8 && isNaN(form[i].value.trim())) {
        form[i].insertAdjacentHTML("afterbegin", form[i].value =  'Error wrong format');
        pass = false;
      } else if (atpos < 1 || ( dotpos - atpos < 2 )) {
          form[8].insertAdjacentHTML("afterbegin", form[8].value =  'Incorrect email address');
          pass = false;
        } else if  (isNaN(form[10].value.trim())) {
          form[10].insertAdjacentHTML("afterbegin", form[11].value =  'Error wrong format');
          pass = false;
        }
      }
  return pass;
}

window.onload = function() {
  var input = document.getElementById("focus").focus();
}

function nospaces(t){
  if(t.value.match(/\s/g)){
    t.value = t.value.replace(/\s/g, '');
  }
}

function statusReady() {
  document.getElementById('readyHeading').innerHTML = 'Status : Engine Ready';
  document.getElementById('readyHeading').style.color = 'white';
}
