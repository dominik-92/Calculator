package com.dominik.calculator.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgument(
            IllegalArgumentException ex
    ) {

        return ResponseEntity
                .badRequest()
                .body(
                        Map.of(
                                "error", ex.getMessage()
                        )
                );
    }
}