var wms_layers = [];

var lyr_ASTGTM2_S20W070_dem_bgis_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ASTGTM2_S20W070_dem_bgis",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ASTGTM2_S20W070_dem_bgis_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7792379.816570, -2273047.380290, -7681029.403695, -2154919.563177]
                            })
                        });

        var lyr_goosatelitete_1 = new ol.layer.Tile({
            'title': 'goo satelitete',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'Google Satellite: http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_tpo_2 = new ol.layer.Tile({
            'title': 'tpo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_wd_3 = new ol.layer.Tile({
            'title': 'wd',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n’'
            })
        });
var format_mr1000_4 = new ol.format.GeoJSON();
var features_mr1000_4 = format_mr1000_4.readFeatures(json_mr1000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mr1000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mr1000_4.addFeatures(features_mr1000_4);
var lyr_mr1000_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mr1000_4, 
                style: style_mr1000_4,
                interactive: true,
                title: '<img src="styles/legend/mr1000_4.png" /> mr1000'
            });
var format_p1aza_5 = new ol.format.GeoJSON();
var features_p1aza_5 = format_p1aza_5.readFeatures(json_p1aza_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p1aza_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p1aza_5.addFeatures(features_p1aza_5);
var lyr_p1aza_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p1aza_5, 
                style: style_p1aza_5,
                interactive: true,
                title: '<img src="styles/legend/p1aza_5.png" /> p1aza'
            });

lyr_ASTGTM2_S20W070_dem_bgis_0.setVisible(true);lyr_goosatelitete_1.setVisible(true);lyr_tpo_2.setVisible(true);lyr_wd_3.setVisible(true);lyr_mr1000_4.setVisible(true);lyr_p1aza_5.setVisible(false);
var layersList = [lyr_ASTGTM2_S20W070_dem_bgis_0,lyr_goosatelitete_1,lyr_tpo_2,lyr_wd_3,lyr_mr1000_4,lyr_p1aza_5];
lyr_mr1000_4.set('fieldAliases', {'id': 'id', 'nm': 'nm', 'foto': 'foto', });
lyr_p1aza_5.set('fieldAliases', {'id': 'id', 'nm': 'nm', });
lyr_mr1000_4.set('fieldImages', {'id': 'TextEdit', 'nm': 'TextEdit', 'foto': 'ExternalResource', });
lyr_p1aza_5.set('fieldImages', {'id': 'TextEdit', 'nm': 'TextEdit', });
lyr_mr1000_4.set('fieldLabels', {'id': 'inline label', 'nm': 'inline label', 'foto': 'inline label', });
lyr_p1aza_5.set('fieldLabels', {'id': 'inline label', 'nm': 'no label', });
lyr_p1aza_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});