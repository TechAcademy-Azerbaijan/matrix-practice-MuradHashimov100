const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    // Write code here
  
  
        let num = 5;
        let arr = [];
        for(let i = 0;i<num;i++){
            arr.push(new Array(num).fill('*'));
        }   
        console.log(arr);


        // for(let i = 0;i<arr.length;i++){
        //     console.log(arr[i].join(''))
        // }
  
});
