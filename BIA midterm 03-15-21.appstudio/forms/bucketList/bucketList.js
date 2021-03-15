let bucketList = [ ]
let i = 0

let Var1 = false
while (Var1 == false){
    bucketList[i] = prompt("Enter the next Bucket list item: ")
    i++
    Var1 = confirm("Are you done adding to your bucket list?")
    }
for (let i= bucketList.length; i>=0; i--){
console.log(bucketList[i]) 
}
