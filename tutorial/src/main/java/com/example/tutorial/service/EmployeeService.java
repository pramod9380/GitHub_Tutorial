package com.example.tutorial.service;

import com.example.tutorial.model.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class EmployeeService {

    static List<Employee> list = new ArrayList<>();
    static {
        list.add(new Employee("qqqqwe", 12));
    }

}
