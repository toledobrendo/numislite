package com.btagila.numislite.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class SideDto {
    private List<String> engravers;
    private String description;
    private String lettering;
    private String picture;
    private String thumbnail;
    private String pictureCopyright;
    private String pictureCopyrightUrl;
}
