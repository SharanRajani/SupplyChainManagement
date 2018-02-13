function backtracking() {

var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'http://localhost:3000/api/queries/selectOwnersOfProduct', true);
//alert(req.readyState + " " + req.status);
req.onload  = function() {
  console.log(req.responseText);
   var jsonResponse = JSON.parse(req.responseText);
   // do something with jsonResponse
   console.log(jsonResponse);
   var i=0;
   // console.log(jsonResponse[0].accountBalance);
  // if(JSON.stringify(jsonResponse[i].eventsEmitted[0].product[35])=="2"){
//&& JSON.parse(jsonResponse[i].eventsEmitted[0].product[35])==2
   document.getElementById("output5").innerHTML="";
   while(i<jsonResponse.length && JSON.parse(jsonResponse[i].eventsEmitted[0].product[35])==2){
  //  if(JSON.parse(jsonResponse[i].eventsEmitted[0].product[35])==3){
    //  .insertAdjacentHTML('beforeend', html_to_insert);
   document.getElementById("output5").insertAdjacentHTML('beforeend', "</br>"
    + "Buyer: "+ JSON.parse(jsonResponse[i].eventsEmitted[0].buyer[34])+ " Seller: "
    + JSON.parse(jsonResponse[i].eventsEmitted[0].seller[34])
    +" Product: "+ JSON.parse(jsonResponse[i++].eventsEmitted[0].product[35]) + "</br>");
  //}
}
};
req.send();
}
