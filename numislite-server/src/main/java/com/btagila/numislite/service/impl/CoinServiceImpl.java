package com.btagila.numislite.service.impl;

import com.btagila.numislite.domain.dto.*;
import com.btagila.numislite.domain.reference.CoinType;
import com.btagila.numislite.service.CoinService;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class CoinServiceImpl implements CoinService {
    @Override
    public CoinDto getCoin(int id) {
        CoinDto coinDto = new CoinDto();
        coinDto.setNumistaId(420);
        coinDto.setUrl("https://en.numista.com/catalogue/pieces420.html");
        coinDto.setTitle("5 Cents - Victoria");
        coinDto.setMinYear(1858);
        coinDto.setMaxYear(1901);
        coinDto.setType(CoinType.STANDARD);
        coinDto.setShape("Round");
        coinDto.setComposition("Silver (.925)");
        coinDto.setOrientation("coin");
        coinDto.setStatus("In collection");

        IssuerDto issuerDto = new IssuerDto();
        issuerDto.setCode("canada");
        issuerDto.setName("Canada");
        coinDto.setIssuer(issuerDto);

        RulerDto rulerDto = new RulerDto();
        rulerDto.setId(1774L);
        rulerDto.setName("Victoria");
        rulerDto.setWikidataId("Q9439");
        coinDto.setRuler(Lists.newArrayList(rulerDto));

        ValueDto valueDto = new ValueDto();
        valueDto.setText("5 Cents");
        valueDto.setNumericValue(new BigDecimal("0.05"));
        CurrencyDto currencyDto = new CurrencyDto();
        currencyDto.setId(44L);
        currencyDto.setName("Canadian dollar");
        currencyDto.setFullName("Canadian dollar (1858-date)");
        valueDto.setCurrency(currencyDto);
        coinDto.setValue(valueDto);

        MeasurementDto externalMeasurement = new MeasurementDto();
        externalMeasurement.setWeight(new BigDecimal("1.167"));
        externalMeasurement.setSize(new BigDecimal("15.494"));
        externalMeasurement.setThickness(new BigDecimal("0.7"));
        coinDto.setExternalMeasurement(externalMeasurement);

        MeasurementDto localMeasurement = new MeasurementDto();
        localMeasurement.setWeight(new BigDecimal("1.2"));
        localMeasurement.setSize(new BigDecimal("15"));
        localMeasurement.setThickness(new BigDecimal("0.7"));
        coinDto.setLocalMeasurement(localMeasurement);

        SideDto obverseSideDto = new SideDto();
        obverseSideDto.setEngravers(Lists.newArrayList("Leonard Charles Wyon"));
        obverseSideDto.setDescription("The portrait in left profile of Victoria is surrounded with the inscriptions &quot;CANADA&quot; and &quot;VICTORIA DEI GRATIA REGINA&quot; (Victoria, Queen by the grace of God)");
        obverseSideDto.setLettering("VICTORIA DEI GRATIA REGINA.\r\nCANADA");
        obverseSideDto.setPicture("https://en.numista.com/catalogue/photos/canada/1009-original.jpg");
        obverseSideDto.setThumbnail("https://en.numista.com/catalogue/photos/canada/1009-135.jpg");
        obverseSideDto.setPictureCopyright("Heritage Auctions");
        obverseSideDto.setPictureCopyrightUrl("https://www.ha.com");
        coinDto.setObverse(obverseSideDto);

        SideDto reverseSideDto = new SideDto();
        reverseSideDto.setEngravers(Lists.newArrayList("Leonard Charles Wyon"));
        reverseSideDto.setDescription("The face value is surrounded with two maple boughs and the crown of Queen Victoria");
        reverseSideDto.setLettering("5\r\nCENTS\r\n1858");
        reverseSideDto.setPicture("https://en.numista.com/catalogue/photos/canada/1010-original.jpg");
        reverseSideDto.setThumbnail("https://en.numista.com/catalogue/photos/canada/1010-135.jpg");
        reverseSideDto.setPictureCopyright("Heritage Auctions");
        reverseSideDto.setPictureCopyrightUrl("https://www.ha.com");
        coinDto.setReverse(reverseSideDto);

        SideDto edgeSideDto = new SideDto();
        edgeSideDto.setDescription("Reeded");
        coinDto.setEdge(edgeSideDto);

        CoinReferenceDto referenceDto1 = new CoinReferenceDto();
        referenceDto1.setCode("KM");
        referenceDto1.setId(3L);
        referenceDto1.setNumber(2);

        CoinReferenceDto referenceDto2 = new CoinReferenceDto();
        referenceDto2.setId(24L);
        referenceDto2.setCode("Schön");
        referenceDto2.setNumber(2);
        coinDto.setReferences(Lists.newArrayList(referenceDto1, referenceDto2));

        return coinDto;
    }
}
