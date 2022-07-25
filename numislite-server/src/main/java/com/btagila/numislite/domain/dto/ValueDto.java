package com.btagila.numislite.domain.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ValueDto {
    private String text;
    private BigDecimal numericValue;
    private CurrencyDto currency;
}
