

function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getFullYear();
    var age = Math.abs(year - 1970);
    var days = age_dt.getDay();
    var months=age_dt.getMonth();
    alert(document.getElementById("result").innerHTML =
        "Age is: " + age + " years, "+"Month is: " + months +" Days is: "+days);
}
// }