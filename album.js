$(function(){
  loadData();
  $("#album").on("click",".btn-danger",handleDelete)                                           

});

function loadData(){
    $.ajax({
url: "https://jsonplaceholder.typicode.com/albums",
method: "GET",

error: function(response) {
  var data = $("#album");
  data.html("An Error has occured");
},

success: function(response){
  console.log(response);
  var load = $("#album");
  $("#album").empty();
  for (var i = 0; i< response.length; i++)
  {
      var data = response[i];
   load.append(`<div class = "title" data-id ="${data.id}"><h3>${data.id}</h3><p><button class = "btn btn-info btn-sm float-right"> update </button><button class = "btn btn-danger btn-sm float-right" >Delete Album</button><button class = "btn btn-info btn-sm float-right" >Add Album</button> ${data.title}</p></div>`);
      

  }
}
//  recipes.append("<div><h3>" + rec.title + "</h3></div>");

});
}

function handleDelete(response){
var btn = $(this);
var parentDiv = btn.closest(".title");
let id = parentDiv.attr("data-id");
console.log(id);
console.log("handeled");
$.ajax({
url: "https://jsonplaceholder.typicode.com/albums"+id,
method: "DELETE",

error: function(response) {

  console.log("An Error has occured");
},

success: function() {
    loadData();
    
}
});
}