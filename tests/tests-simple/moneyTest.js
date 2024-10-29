/*There are two types test cases

     1.Basic Test Case
     = tests if the code is working

     2.Edge Case
     =test with values  that are triky


     Disadvantage of Manual Testing

       1.Hard to test every situation

       2.Hard to Re-test
*/


import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('Failed');
}

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('Failed');
}