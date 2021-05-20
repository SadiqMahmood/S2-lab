$(function() {
   $("#btnData").click(loadData);

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

         load.append(`<div class = "data"><h3>${data.name}</h3><p><button class = "btn btn-info btn-sm float-right" >Update</button> ${data.email}</p></div>`);
            

        }
    }
       
    });
}
