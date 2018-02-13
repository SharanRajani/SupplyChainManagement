function backtracking() {
  var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open('GET', 'http://localhost:3000/api/queries/selectOwnersOfProduct', true);
  req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    var i=0;
    $("#output5").html("");
    var str1,str2,str3,productId,seller,buyer,resArray1,resArray2,resArray3;
    str1=jsonResponse[i].eventsEmitted[0].product;
    resArray1 = str1.split("#");
    productId=resArray1[1];
    // console.log(jsonResponse[i].eventsEmitted[0].buyer);
    while(i<jsonResponse.length && productId.localeCompare($("#own_productId").val())==0){
      str2=jsonResponse[i].eventsEmitted[0].buyer;
      resArray2 = str2.split("#");
      buyer=resArray2[1];
      str3=jsonResponse[i].eventsEmitted[0].seller;
      resArray3 = str3.split("#");
      seller=resArray3[1];
      $('#output5').append("</br>"+ "Buyer: "+ buyer+ " Seller: "+ seller +" Product: "+ productId + "</br>");
      i++;
    }
  };
  req.send();
}
