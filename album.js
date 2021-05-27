$(function(){
  loadData();
  $("#album").on("click",".btn-danger",handleDelete) ;
  $("#album").on("click", ".btn-warning", handleUpdate );
  $("#addbtn").click(AddAlbum);
  
  $("#UpdateSave").click(function(){
     
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums/"+id,
    data: {title},
    method: "PUT",
    success: function(response){
            console.log(response); 
            loadData();
            $("#updateModel").modal("hide");
    }

  
});
});

});

function AddAlbum(){
  var title = $("#title").val();
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/albums",
    method: "POST",
    data: { title },
    success: function(response) {
      console.log(response);
      $("#title").val("");
      loadData();
     
    }
  });
}

function handleUpdate(){
  var btn = $(this);
  var parentDiv = btn.closest(".title");
  let id = parentDiv.attr("data-id");
  $.get("https://jsonplaceholder.typicode.com/albums/" + id, function(response) {
    $("#updateId").val(response.id);
    $("#updateTitle").val(response.title); 
    
    $("#updateModel").modal("show");

  });
}

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
   load.append(`<div class = "title" data-id ="${data.id}"><h3>${data.id}</h3><p><button class = "btn btn-warning btn-sm float-right"> update </button><button class = "btn btn-danger btn-sm float-right" >Delete Album</button>${data.title}</p></div>`);
      

  }
}

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

