let people = 2;

    function calculate() {
      const bill = Number(document.getElementById("bill").value);
      const tip = Number(document.getElementById("tip").value);
      const total = bill + (bill * tip / 100);
      const perPerson = total / people;
      document.getElementById("result").innerHTML = "$" + perPerson.toFixed(2);
    }

    function changePeople(amount) {
      if (people + amount < 1) return;
      people += amount;
      document.getElementById("people").innerHTML = people;
      calculate();
    }

    document.getElementById("bill").addEventListener("input", calculate);
    document.getElementById("tip").addEventListener("input", calculate);

    calculate();