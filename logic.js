var inputArray = [];
var lotteryArray=[];
var finalArray = [];
var number = prompt('Enter the number of students already selected');

for(var i=0; i<number; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter ' + (i+1) + "th Roll No");
}

console.log(inputArray);

var totalNumber = prompt('Total number of sudents');
for(var j=1;j<=totalNumber;j++)
{
    lotteryArray [j-1] = j;
}


for(var k = 0; k<=inputArray.length; k++){
    for(var l = 0; l<=lotteryArray.length; l++){
        if (inputArray[k]==lotteryArray[l])
        {
            delete lotteryArray[l];
        }
    }
}
console.log(lotteryArray);
for (var m=0;m<=lotteryArray.length;m++){
    if(lotteryArray[m]!==undefined)
    {
        finalArray.push(lotteryArray[m]);
    }
}
console.log(finalArray)

const random = Math.floor(Math.random() * finalArray.length);
alert(finalArray[random]);


