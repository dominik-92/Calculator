package com.dominik.calculator.controller;

import com.dominik.calculator.dto.CalcRequest;
import com.dominik.calculator.dto.CalcResponse;
import com.dominik.calculator.service.CalcService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
public class CalcController {

    private final CalcService calcService;

    public CalcController(CalcService calcService) {
        this.calcService = calcService;
    }

    @PostMapping
    public CalcResponse calculate(@RequestBody CalcRequest request) {

        double result = calcService.calculate(
                request.getA(),
                request.getB(),
                request.getOp()
        );

        return new CalcResponse(result);
    }

}
