let count = parseInt(prompt("How many numbers do you want to find their sum and average"));
let arr = [];
let sum = 0;
let avg = 0;
for (let i = 0; i < count; i++) {
    arr[i] = parseInt(prompt(`Enter Number ${i + 1}`));
    console.log(arr);
    sum = sum + arr[i];
}
avg = sum / count;
alert(`Sum = ${sum}`);
alert(`Average = ${avg}`);