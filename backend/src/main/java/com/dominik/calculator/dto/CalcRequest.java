package com.dominik.calculator.dto;

import lombok.Getter;
import lombok.Setter;

 @Getter
 @Setter
public class CalcRequest {

    private double a;
    private double b;
    private String op;

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getOp() {
        return op;
    }

    public void setOp(String op) {
        this.op = op;
    }
}