export default function transferPayrollAmount(arrPayroll, keyTransfer) {
    // This variable is used for storing the name of benefit as key
    // and the amount of those as the value
    const nameToAmount = {};

    // Iterating on store every single of benefit and the value as an object
    for (const payroll of arrPayroll) {
        nameToAmount[payroll['name']] = payroll['amount'];
    }

    // This for below is used for iterating array of criteria
    for (const key of keyTransfer) {
        // This for below is used for getting the source of benefit name
        // that will be transfered to another benefit
        for (const source in key) {
            // store all target names that will be replaced
            const targets = key[source];
            // temporary value for storing the source benefit amount
            const amount = nameToAmount[source];
            // Iterating through target and set the amount from the source
            // using nameToAmount object to avoid iterating a whole benefit object
            for (const target of targets) {
                if (nameToAmount[target] !== undefined) {
                    nameToAmount[target] = amount;
                }
            }
        }
    }

    // As the new value is already asigned on nameToAmount object
    // assigning the new value to the benefit object
    for (const payroll of arrPayroll) {
        payroll['amount'] = nameToAmount[payroll['name']];
    }

    return arrPayroll;
}