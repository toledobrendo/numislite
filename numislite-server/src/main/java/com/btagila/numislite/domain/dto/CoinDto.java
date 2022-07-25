package com.btagila.numislite.domain.dto;

import com.btagila.numislite.domain.reference.CoinType;
import lombok.Data;

import java.util.List;

@Data
public class CoinDto {
    private int numistaId;
    private String url;
    private String title;
    private int minYear;
    private int maxYear;
    private CoinType type;
    private String shape;
    private String composition;
    private String orientation;
    private String status;

    private IssuerDto issuer;
    private List<RulerDto> ruler;
    private ValueDto value;
    private SideDto obverse;
    private SideDto reverse;
    private SideDto edge;
    private List<CoinReferenceDto> references;
    private MeasurementDto externalMeasurement;
    private MeasurementDto localMeasurement;
}
