console.log("This is module");
//1. Console Output
//Yeh line console par "This is module" print karegi jab yeh file execute hogi.


function average(arr){
    let sum = 0;
    arr.forEach(element => {
       sum = sum + element; 
    });
    return sum/arr.length;
}
//2. Average Function
// Yeh function average ek array arr ko parameter ke roop mein leta hai.

// forEach method ka use karke, yeh har element ko iterate karta hai aur sum mein add karta hai.

// Akhir mein, yeh sum ko array ke length se divide karke average return karta hai.


module.exports = {
 avg:average,
 name:"Harrry",
 repo:'GitHub',
 
}

//3. Exporting the Module
// module.exports ka use karke, hum is module se kuch values export kar rahe hain taaki doosre files mein require karke inhe use kiya ja sake.

// Yahan hum ek object export kar rahe hain jisme:

// avg: average function ko refer karta hai.

// name: ek string "Harrry" hai.

// repo: ek string 'GitHub' hai.
    