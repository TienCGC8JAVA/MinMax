let nums =[];
for (let i = 0; i < 10 ; i ++)
{
    nums[i] = Math.floor(Math.random()*100);
    console.log(nums[i]);
}

function  findMin(arr)
{
    let min = arr[0];
    let max = arr[0];
    for (let j of arr)
    {
        if (min > j) min = j; else if (max < j) max = j;
    }
    document.getElementById("result").innerHTML = "The minimum value is: " + min + "<br/>" + "The maximum value is: " + max;
}

findMin(nums);