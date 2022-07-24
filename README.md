# [Numeric Keypad Simulator](https://github.com/sthsuyash/Numeric-Keypad-Simulator/blob/main/numpad.js)

Convert a Mobile Numeric Keypad sequence to equivalent sentence.

- coded using JavaScript (use node.js)
- Given a string sequence of size N, consisting of digits [0 – 9] and character ‘.’
- the task is to print the string that can be obtained by pressing the mobile keypad in the given sequence. 
- The keyboard layout is:

<table>
  <tr>
    <td align="center">1</br></td>
    <td align="center">2<br/>(A,B,C)</td>
    <td align="center">3<br/>(D,E,F)</td>
  </tr>
  <tr>
    <td align="center">4<br/>(G,H,I)</td>
    <td align="center">5<br/>(J,K,L)</td>
    <td align="center">6<br/>(M,N,O)</td>
  </tr>
  <tr>
    <td align="center">7<br/>(P,Q,R,S)</td>
    <td align="center">8<br/>(T,U,V)</td>
    <td align="center">9<br/>(W,X,Y,Z)</td></tr>
</table>
<br/>

```README
  Note: ‘.’ represents a break while typing.
```
<br/>

__Approach:__ The given problem can be solved by storing the mobile keypad mappings in an array and then traverse the string 'sequence' and convert it into its equivalent string. 

### Follow the steps below to solve the problem:

- Initialize an empty string, say ans to store the required result.
- Store the string associated to each key in the mobile keypad in an array nums[] such that nums[i] represent the set of characters on pressing the digit i.
- Traverse the given string S using the variable i and perform the following steps:
-
    - If S[i] is equal to ‘.’, then increment i by 1, and continue to the next iteration.
    - Otherwise, initialize a variable count as 0 to store the count of the same characters.
    - Iterate until S[i] is equal to S[i + 1] and in each iteration check the following conditions:
      - If count is equal to 3 and S[i] is 2, 3, 4, 5, 6, or 8, then break out of the loop because keys: 2, 3, 4, 5, 6, and 8 contain the same number of characters, i.e., 4.
      - If count is equal to 4 and S[i] is 7 or 9, then break out of the loop because keys: 7 and 9 contain the same number of characters, i.e., 5.
      - Increment the value of count and i by 1.
    - If S[i] is either 7 or 9, then add the character nums[str[i]][count%4] to the string ans.
    - Otherwise, add the character nums[str[i]][count%3] to the string ans.
    - Increment the value of i by 1.
- After completing the above steps, return the ans string from the function and print in the main function.
