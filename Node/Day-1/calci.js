function operation (a,b,choice) {
    switch (choice) 
    {        
            case "add" :
            console.log("THe Add Value is: ", a+b);
            break;
             
             case "sub" :
             console.log("THe Sub Value is: ", a-b);
             break; 
            
             case "mul" :
             console.log("THe Mul Value is: ", a*b);
             break; 
            
             case "div" :
             console.log("THe Div Value is: ", a/b);
             break;  
            
             default:
             console.log("Invalid Choice");
    }
}
operation(10,20,"mul")
