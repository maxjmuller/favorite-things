$(document).ready(function() {
  var flavors = ["Mint Chocolate Chip","Carmel Cone","Strawberry","Coffee","Vanilla","Chocolate"];
  // var rank = 0;
  // flavors.forEach(function(flavor) {
  for (var index = 0; index < flavors.length; index = index + 1) {
    // rank +=1;
    $(".number" + (index+1)).text(flavors[index]);
    console.log(index);
    console.log(flavors[index]);
  }
});
