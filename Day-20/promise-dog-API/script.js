function dog_image(){
    url ="https://dog.ceo/api/breeds/image/random";
   fetch(url)
   .then(function(response){
     return response.json();
   })
   .then(function(data){
    display_pic(data.message)
   })

   .catch(function(error){
     console.log("error: " + error);
   });
}

function display_pic(picture){
    document.getElementById("image").src=picture
}