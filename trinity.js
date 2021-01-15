trinity();
function trinity()
{
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59

    if(h < 10)
    {
        h = "0"+h;
    }
    if(m < 10)
    {
        m = "0"+m;
    }
    let h1 = h.toString().substring(0, 1);
    let h2 = h.toString().substring(1, 2);
    let m1 = m.toString().substring(0, 1);
    let m2 = m.toString().substring(1, 2);

    let img_h1 = "<img src=\"images/n" + h1 + ".png\" alt=\"\" />";
    let img_h2 = "<img src=\"images/n" + h2 + ".png\" alt=\"\" />";
    let img_m1 = "<img src=\"images/n" + m1 + ".png\" alt=\"\" />";
    let img_m2 = "<img src=\"images/n" + m2 + ".png\" alt=\"\" />";

    document.getElementById("h1").innerHTML=img_h1;
    document.getElementById("h2").innerHTML=img_h2;
    document.getElementById("m1").innerHTML=img_m1;
    document.getElementById("m2").innerHTML=img_m2;

    setTimeout(trinity, 1000);
}
