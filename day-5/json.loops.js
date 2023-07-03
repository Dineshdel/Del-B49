
var json = [{
    "bike" : 'duke',
    'model': 250,
    'speed' : 170,
    'company' : 'ktm'
},
{
   "bike" : 'bmw',
    'model': 'v4',
    'speed' : 300,
    'company' : 'motor'
}];


//for loop
for(var i = 0; i < json.length; i++)
{
   var obj = json[i];
 console.log(obj.bike);
    console.log(obj.model);
  console.log(obj.speed);
   console.log(obj.company);

}


//for Each
json.forEach(function(obj)
{ 
    console.log(obj.bike);
    });

//for In
for (var key in json) 
{
if (json.hasOwnProperty(key)) 
{
  console.log(json[key].model);
}
}

//for Of
var text = "";
for (var x of json[key].model) 
{
 text += x; 
}
 console.log(text);
