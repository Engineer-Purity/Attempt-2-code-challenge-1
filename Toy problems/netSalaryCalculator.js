// netSalaryCalculator.js

function calculateNetSalary(basicSalary, benefits) {
    const payeeRate = 0.3;
    const nhifRate = 0.025;
    const nssfRate = 0.06;

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * payeeRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

module.exports = calculateNetSalary;
