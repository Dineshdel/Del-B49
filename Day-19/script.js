function del(a,b){
    try{
        if (b > a) {
            throw new Error("B is Greater than A...");
        }
        let result = a - b;
        console.log("Result", result);
    } catch(err)
    {
    console.log("Error",err);
    }
}

del(30, 20);