package com.dominik.calculator.service;

import org.springframework.stereotype.Service;

@Service
public class CalcService {

    public double calculate(double a, double b, String op) {

        if (op.equals("/") && b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }

        return switch (op) {
            case "+" -> a + b;
            case "-" -> a - b;
            case "*" -> a * b;
            case "/" -> a / b;
            default -> throw new IllegalArgumentException("Unknown op");
        };

    }

}
