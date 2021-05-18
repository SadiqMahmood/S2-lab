$(function() {
   $("#btnData").click(loadData);
   $("#btn").click(album);
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
function album(){
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
           load.append(`<div class = "album"><h3>${data.id}</h3><p><button class = "btn btn-danger btn-sm float-right" >update</button> ${data.title}</p></div>`);
              
  
          }
      }
        //  recipes.append("<div><h3>" + rec.title + "</h3></div>");
         
      });

}