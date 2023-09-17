import { describe, it, expect } from 'vitest';
import filterEmployees from '../filterEmployees';
import transferPayrollAmount from '../transferPayrollAmount';

describe('Data Structure Test', () => {  
  describe('Filter Employees', () => {
    it('Should be filtered', () => {
      const employees = [
        { "nik":"1", "name":"ABIYYU" },
        { "nik":"2", "name":"ADHIKA" },
        { "nik":"3", "name":"AFRIE" },
        { "nik":"4", "name":"ALAM"}
      ];
      
      const selected_employees = [
        { "nik": "3", "name": "AFRIE" },
        { "nik": "4","name":"ALAM"}
      ];

      const filtered_employees = [
        { "nik":"1", "name":"ABIYYU" },
        { "nik":"2", "name":"ADHIKA" }
      ];

      expect(filterEmployees(employees, selected_employees)).toEqual(filtered_employees);
    });
  });

  describe('Transfer Payroll Amount', () => {
    it('The amount should be transfered from source to target', () => {
      const benefit = [
        {
          id: 1,
          name: "Gaji Pokok",
          amount: 3000000,
          unit: 12
        },
        {
          id: 2,
          name: "Tunjangan Hari Raya (THR)",
          amount: 0,
          unit: 1
        },
        {
          id: 3,
          name: "Uang makan",
          amount: 100000,
          unit: 12
        },
        {
          id: 4,
          name: "Tunjangan shift",
          amount: 0,
          unit: 0.2
        },
      ];

      const benefit_result = [
        {
          id: 1,
          name: "Gaji Pokok",
          amount: 3000000,
          unit: 12
        },
        {
          id: 2,
          name: "Tunjangan Hari Raya (THR)",
          amount: 3000000,
          unit: 1
        },
        {
          id: 3,
          name: "Uang makan",
          amount: 100000,
          unit: 12
        },
        {
          id: 4,
          name: "Tunjangan shift",
          amount: 3000000,
          unit: 0.2
        },
      ];

      const criteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift']}];

      expect(transferPayrollAmount(benefit, criteria)).toEqual(benefit_result);
    });
  });
});