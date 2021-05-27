$(function() {
   $("#btnData").click(loadData);
   $("#data").on("click", ".btn-warning", handleUpdate);

   $("#UpdateSave").click(function() {
    var id = $("#updateId").val();
    
    var email = $("#updateBody").val();
    $.ajax({
    url: "https://jsonplaceholder.typicode.com/comments/"+id,
    data: {email:email},
    method: "PUT",
    success: function(response){
            console.log(response); 
            loadData();
            $("#updateModel").modal("hide");
    }

  
});
});

  });
  function loadData() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET", 
      
      error: function(response) {
        var loadData = $("#data");
        loadData.html("An Error has occured");
      },
      
    success: function(response){
        console.log(response);
        var load = $("#data");
        $("#data").empty();
        for (var i = 0; i< response.length; i++)
        {
            var data = response[i];
         //load.append("<div><h3>"+data.title+"</h3><p>"+ data.body+"</p></div>");

         load.append(`<div class = "data" data-id = "${data.id}"><h3>${data.name}</h3><p><button class = "btn btn-warning btn-sm float-right" >Update</button> ${data.email}</p></div>`);
            

        }
    }
       
    });
}

function handleUpdate() {
    var btn = $(this);
    var parentDiv = btn.closest(".data");
    let id = parentDiv.attr("data-id");
    $.get("https://jsonplaceholder.typicode.com/comments/" + id, function(response) {
      $("#updateId").val(response.id);
      $("#updateBody").val(response.email);
      
      $("#updateModel").modal("show");

    });
  }
