package com.btagila.numislite.domain.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class MeasurementDto {
    private BigDecimal weight;
    private BigDecimal size;
    private BigDecimal thickness;
}
