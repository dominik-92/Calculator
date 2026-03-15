package com.dominik.calculator.dto;

public class CalcResponse {

    private double result;

    public CalcResponse(double result) {
        this.result = result;
    }

    public double getResult() {
        return result;
    }
}
