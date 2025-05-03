import { formatCurrency } from "../script/utils/money";


console.log("Test Suite: format currency");


console.log('converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log("passed");
}else{
    console.log("failed");
}


