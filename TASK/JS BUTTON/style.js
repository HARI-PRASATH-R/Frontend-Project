let people = 2;


    function changePeople(amount) {
      if (people + amount < 1) ;
      people += amount;
      document.getElementById("people").innerHTML = people;
      calculate();
    }
