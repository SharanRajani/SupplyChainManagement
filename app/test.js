function addProduct() {

	var preId = document.getElementById("productID").value;
	var preOwner = "resource:xchain.logistics.Trader#"
	var ownerConcat = document.getElementById("OwnerID").value;
    var preDescription = document.getElementById("Description").value;
    var Id = String(preId);
    var Description = String(preDescription);
    var ownerPost = String(ownerConcat);
    var newOwner = preOwner.concat(ownerPost);
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost:3000/api/xchain.logistics.Product");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	var jsonAdd = {};
	jsonAdd["$class"] = "xchain.logistics.Product" ;
	jsonAdd["productId"] = Id;
	jsonAdd["description"] = Description ;
	jsonAdd["owner"] =  newOwner;
	xmlhttp.send(JSON.stringify(jsonAdd));
}
function addTrader() {

    var preId = document.getElementById("TraderID").value;
    var prePassword = document.getElementById("password").value;
    var preName = document.getElementById("Name").value;
    var Id = String(preId);
    var Password = String(prePassword);
    var Name = String(preName);
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost:3000/api/xchain.logistics.Product");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var a = String(id);
	console.log(a);
	var jsonAdd = {};
	jsonAdd["$class"] ="xchain.logistics.Trader" ;
	jsonAdd["traderId"] = Id;
	jsonAdd["password"] = Password ;
	jsonAdd["owner"] = Name;
	xmlhttp.send(JSON.stringify(jsonAdd));
}

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
