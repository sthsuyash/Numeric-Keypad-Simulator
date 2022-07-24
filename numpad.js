// Function to convert mobile numeric keypad sequence into its equivalent string
function printSentence(sequence) {
    // Store the mobile keypad mappings
    let nums = [
        "0",
        "1",
        "ABC2",
        "DEF3",
        "GHI4",
        "JKL5",
        "MNO6",
        "PQRS7",
        "TUV8",
        "WXYZ9"
    ];

    let str = sequence.split("");

    // Traverse the string str
    let i = 0;
    st = ""
    while (i < str.length) {
        // If the current character is '.', then continue to the next iteration
        if (str[i] == '.') {
            i++;
            continue;
        }

        // Stores the number of continuous clicks
        let count = 0;

        // Iterate a loop to find the
        // count of same characters
        while (i + 1 < str.length && str[i] == str[i + 1]) {

            // 2, 3, 4, 5, 6 and 8 keys will have maximum of 4 letters
            if (count == 3 && ((str[i] >= '2' && str[i] <= '6') || (str[i] == '8')))
                break;

            // 7 and 9 keys will have maximum of 5 keys
            else if (count == 4 && (str[i] == '7' || str[i] == '9'))
                break;

            count++;
            i++;

            // Handle the end condition
            if (i == str.length)
                break;
        }

        // Check if the current pressed key is 7 or 9
        if (str[i] == '7' || str[i] == '9') {
            st += nums[str[i].charCodeAt(0) - 48][count % 5];
        }

        // else, the key pressed is either 2, 3, 4, 5, 6 or 8
        else {
            st += nums[str[i].charCodeAt(0) - 48][count % 4];
        }
        i++;
    }
    return st;
}

// Driver Code
console.log("\n\n\t\tWelcome to Physical  Keyboard Simulator:\n\n");
console.log("\t\tPlease enter in following keyboard format:\n");
console.log("\t\t---------------------------------------------------");
console.log("\t\t|       1       |        2        |       3       |");
console.log("\t\t|               |     (A,B,C)     |    (D,E,F)    |");
console.log("\t\t---------------------------------------------------");
console.log("\t\t|       4       |        5        |       6       |");
console.log("\t\t|    (G,H,I)    |     (J,K,L)     |    (M,N,O)    |");
console.log("\t\t---------------------------------------------------");
console.log("\t\t|       7       |        8        |       9       |");
console.log("\t\t|   (P,Q,R,S)   |     (T,U,V)     |   (W,X,Y,Z)   |");
console.log("\t\t---------------------------------------------------");
console.log("\t\t|        *      |        0        |       #       |");
console.log("\t\t---------------------------------------------------");

// node module to take input from user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// prints question first and 
// takes input in str variable
readline.question('Enter the sequence: ', str => {
    console.log(`Corresponding string: ${printSentence(str)}`);
    readline.close();
});
