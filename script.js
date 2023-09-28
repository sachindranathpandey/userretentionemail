function send_handle() {
  let num = document.getElementById("number").value;

  let windate = document.getElementById("wdate").value;
  let longMessage =
    "Dear Fan2Play User,\n\n" +"%0a"+"%0a"+
    "As a valued user of Fan2Play, we want to thank you."+"%0a"+
    "To celebrate the upcoming World Cup 2023 and show our support for Team India,*we have a special gift for you*"+"%0a"
    +"Kindly share your current address and a working phone number so we can send it your way."+"%0a"+
    "Regards"+"%0a"+
    "Fan2Play";

  console.log(longMessage);

  console.log(windate);
  var win = window.open(
    `https://wa.me/${num}?text=%20${longMessage}`,
    "_blank"
  );
  // win.focus();
}
