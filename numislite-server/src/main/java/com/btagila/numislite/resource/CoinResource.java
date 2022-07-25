package com.btagila.numislite.resource;

import com.btagila.numislite.domain.dto.CoinDto;
import com.btagila.numislite.service.CoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("coin")
public class CoinResource {

    private CoinService coinService;

    @Autowired
    public CoinResource(CoinService coinService) {
        this.coinService = coinService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoinDto> getCoin(@PathVariable int id) {
        return ResponseEntity.ok(coinService.getCoin(id));
    }
}
