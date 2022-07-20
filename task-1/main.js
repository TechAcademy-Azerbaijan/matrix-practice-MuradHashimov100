// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]

// Write code here. 


let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
];
let arr = [];
for(let i = 0;i<matrix.length;i++){
    for(let j = 0; j<matrix[i].length;j++){
        if(matrix[i][j] < 0){
            arr.push(matrix[i][j]);
        }
    }
}
console.log(arr);
let count = 0;
let sum = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i] % 2 == 0){
        count++;
        sum = sum + arr[i]
    }
}

console.log(count,sum);
