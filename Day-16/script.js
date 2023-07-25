function subject(callback){
    console.log("1st period is maths whats 2nd period..");
    setTimeout(() => {
        console.log("period over...");
        callback();
},2000);
    }

    function nextsubject(){
     console.log("Next period is physics...")
    }

    subject(nextsubject)
