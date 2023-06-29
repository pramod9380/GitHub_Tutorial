package com.example.tutorial.service;

import com.example.tutorial.model.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class EmployeeService {

    static List<Employee> employeeList = new ArrayList<>();
    static {
        employeeList.add(new Employee("qqqqae", 11231));
        employeeList.add(new Employee("askahsdg", 1221));
    }

    public List<Employee> getEmployeeList(){
        return employeeList;
    }

    public String addEmployee(Employee employee){
        employeeList.add(employee);
        return "added employee";
    }

}
