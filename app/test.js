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

function addProduct() {
	var preId = document.getElementById("productId").value;
	var preOwner = "resource:xchain.logistics.Trader#"
	var ownerConcat = document.getElementById("OwnerId").value;
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

  xmlhttp.onreadystatechange = function () {
  if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
    console.log(xmlhttp.responseText);
    document.getElementById("status").innerHTML="Success!";
  }
  else{
    document.getElementById("status").innerHTML="Failed!";
  }
};

}

function addTrader() {
    var preId = document.getElementById("TraderId").value;
	console.log(preId);
    var prePassword = document.getElementById("password").value;
    var preName = document.getElementById("Name").value;
    var Id = String(preId);
    var Password = String(prePassword);
    var Name = String(preName);
	console.log(Id);
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost:3000/api/xchain.logistics.Trader");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var jsonAdd = {};
	jsonAdd["$class"] ="xchain.logistics.Trader" ;
	jsonAdd["traderId"] = Id;
	jsonAdd["password"] = Password ;
	jsonAdd["name"] = Name;
	xmlhttp.send(JSON.stringify(jsonAdd));
    console.log(xmlhttp.readyState);
    console.log(xmlhttp.status);
    xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
      console.log(xmlhttp.responseText);
      document.getElementById("status1").innerHTML="Success!";
    }
    else{
      document.getElementById("status1").innerHTML="Failed!";
    }
  };
}


function transfer() {
    var sellerId = document.getElementById("sender_address").value;
	console.log(sellerId);
    var sellerPassword = document.getElementById("trans_password").value;
    var productId = document.getElementById("trans_productId").value;
    var receiverId = document.getElementById("receiver_address").value;
    var seller = String(sellerId);
    var password = String(sellerPassword);
    var product = String(productId);
    var buyer = String(receiverId);
	console.log(productId);
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	xmlhttp.open("POST", "http://localhost:3000/api/xchain.logistics.Transfer");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var jsonAdd = {};
	jsonAdd["$class"] ="xchain.logistics.Transfer" ;
	jsonAdd["buyer"] = buyer;
	jsonAdd["seller"] = seller;
	jsonAdd["product"] = product;
    jsonAdd["password"] = password;
	xmlhttp.send(JSON.stringify(jsonAdd));
    xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
      console.log(xmlhttp.responseText);
      document.getElementById("status2").innerHTML="Success!";
    }
    else{
      document.getElementById("status2").innerHTML="Failed!";
    }
  };
}
