export const MineralNames = {
    34: 'Tritanium',
    35: 'Pyerite',
    36: 'Mexallon',
    37: 'Isogen',
    38: 'Nocxium',
    39: 'Zydrine',
    40: 'Megacyte',
    11399: 'Morphite',
};


export const MoonMaterialNames = {
    16633: 'Hydrocarbons',
    16634: 'Atmospheric Gases',
    16635: 'Evaporite Deposits',
    16636: 'Silicates',
    16637: 'Tungsten',
    16638: 'Titanium',
    16639: 'Scandium',
    16640: 'Cobalt',
    16641: 'Chromium',
    16642: 'Vanadium',
    16643: 'Cadmium',
    16644: 'Platinum',
    16646: 'Mercury',
    16647: 'Caesium',
    16648: 'Hafnium',
    16649: 'Technetium',
    16650: 'Dysprosium',
    16651: 'Neodymium',
    16652: 'Promethium',
    16653: 'Thulium',
};

export const MoonMaterialLowercaseNames = {
    16633: 'hydrocarbons',
    16634: 'atmosphericgases',
    16635: 'evaporitedeposits',
    16636: 'silicates',
    16637: 'tungsten',
    16638: 'titanium',
    16639: 'scandium',
    16640: 'cobalt',
    16641: 'chromium',
    16642: 'vanadium',
    16643: 'cadmium',
    16644: 'platinum',
    16646: 'mercury',
    16647: 'caesium',
    16648: 'hafnium',
    16649: 'technetium',
    16650: 'dysprosium',
    16651: 'neodymium',
    16652: 'promethium',
    16653: 'thulium',
};

export const MoonOreNames = {
    45492: 'Bitumens',
    46284: 'Brimful Bitumens',
    46285: 'Glistening Bitumens',
    45493: 'Coesite',
    46286: 'Brimful Coesite',
    46287: 'Glistening Coesite',
    45491: 'Sylvite',
    46282: 'Brimful Sylvite',
    46283: 'Glistening Sylvite',
    45490: 'Zeolites',
    46280: 'Brimful Zeolites',
    46281: 'Glistening Zeolites',
    45494: 'Cobaltite',
    46288: 'Copious Cobaltite',
    46289: 'Twinkling Cobaltite',
    45495: 'Euxenite',
    46290: 'Copious Euxenite',
    46291: 'Twinkling Euxenite',
    45497: 'Scheelite',
    46294: 'Copious Scheelite',
    46295: 'Twinkling Scheelite',
    45496: 'Titanite',
    46292: 'Copious Titanite',
    46293: 'Twinkling Titanite',
    45501: 'Chromite',
    46302: 'Lavish Chromite',
    46303: 'Shimmering Chromite',
    45498: 'Otavite',
    46296: 'Lavish Otavite',
    46297: 'Shimmering Otavite',
    45499: 'Sperrylite',
    46298: 'Lavish Sperrylite',
    46299: 'Shimmering Sperrylite',
    45500: 'Vanadinite',
    46300: 'Lavish Vanadinite',
    46301: 'Shimmering Vanadinite',
    45502: 'Carnotite',
    46304: 'Replete Carnotite',
    46305: 'Glowing Carnotite',
    45506: 'Cinnabar',
    46310: 'Replete Cinnabar',
    46311: 'Glowing Cinnabar',
    45504: 'Pollucite',
    46308: 'Replete Pollucite',
    46309: 'Glowing Pollucite',
    45503: 'Zircon',
    46306: 'Replete Zircon',
    46307: 'Glowing Zircon',
    45512: 'Loparite',
    46316: 'Bountiful Loparite',
    46317: 'Shining Loparite',
    45511: 'Monazite',
    46314: 'Bountiful Monazite',
    46315: 'Shining Monazite',
    45510: 'Xenotime',
    46312: 'Bountiful Xenotime',
    46313: 'Shining Xenotime',
    45513: 'Ytterbite',
    46318: 'Bountiful Ytterbite',
    46319: 'Shining Ytterbite',
};

export const OreDetail = [{
    id: 'bitumens',
    names: [MoonOreNames[45492], 'Brimful', 'Glistening'],
    types_raw: [45492, 46284, 46285],
    batch: 100,
    volume: 10,
    materials: {
        hydrocarbons: 65
    },
    minerals: {
        tritanium: 6e3,
        pyerite: 6e3,
        mexallon: 400
    }
}, {
    id: 'coesite',
    names: [MoonOreNames[45493], 'Brimful', 'Glistening'],
    types_raw: [45493, 46286, 46287],
    batch: 100,
    volume: 10,
    materials: {
        silicates: 65
    },
    minerals: {
        tritanium: 1e4,
        pyerite: 2e3,
        mexallon: 400
    }
}, {
    id: 'sylvite',
    names: [MoonOreNames[45491], 'Brimful', 'Glistening'],
    types_raw: [45491, 46282, 46283],
    batch: 100,
    volume: 10,
    materials: {
        evaporitedeposits: 65
    },
    minerals: {
        tritanium: 8e3,
        pyerite: 4e3,
        mexallon: 400
    }
}, {
    id: 'zeolites',
    names: [MoonOreNames[45490], 'Brimful', 'Glistening'],
    types_raw: [45490, 46280, 46281],
    batch: 100,
    volume: 10,
    materials: {
        atmosphericgases: 65
    },
    minerals: {
        tritanium: 4e3,
        pyerite: 8e3,
        mexallon: 400
    }
}, {
    id: 'cobaltite',
    names: [MoonOreNames[45494], 'Copious', 'Twinkling'],
    types_raw: [45494, 46288, 46289],
    batch: 100,
    volume: 10,
    materials: {
        cobalt: 40
    },
    minerals: {
        tritanium: 7500,
        pyerite: 1e4,
        mexallon: 500
    }
}, {
    id: 'euxenite',
    names: [MoonOreNames[45495], 'Copious', 'Twinkling'],
    types_raw: [45495, 46290, 46291],
    batch: 100,
    volume: 10,
    materials: {
        scandium: 40
    },
    minerals: {
        tritanium: 1e4,
        pyerite: 7500,
        mexallon: 500
    }
}, {
    id: 'scheelite',
    names: [MoonOreNames[45497], 'Copious', 'Twinkling'],
    types_raw: [45497, 46294, 46295],
    batch: 100,
    volume: 10,
    materials: {
        tungsten: 40
    },
    minerals: {
        tritanium: 12500,
        pyerite: 5e3,
        mexallon: 500
    }
}, {
    id: 'titanite',
    names: [MoonOreNames[45496], 'Copious', 'Twinkling'],
    types_raw: [45496, 46292, 46293],
    batch: 100,
    volume: 10,
    materials: {
        titanium: 40
    },
    minerals: {
        tritanium: 15e3,
        pyerite: 2500,
        mexallon: 500
    }
}, {
    id: 'chromite',
    names: [MoonOreNames[45501], 'Lavish', 'Shimmering'],
    types_raw: [45501, 46302, 46303],
    batch: 100,
    volume: 10,
    materials: {
        chromium: 40,
        hydrocarbons: 10
    },
    minerals: {
        pyerite: 5e3,
        mexallon: 1250,
        isogen: 750,
        nocxium: 50
    }
}, {
    id: 'otavite',
    names: [MoonOreNames[45498], 'Lavish', 'Shimmering'],
    types_raw: [45498, 46296, 46297],
    batch: 100,
    volume: 10,
    materials: {
        cadmium: 40,
        atmosphericgases: 10
    },
    minerals: {
        tritanium: 5e3,
        mexallon: 1500,
        isogen: 500,
        nocxium: 50
    }
}, {
    id: 'sperrylite',
    names: [MoonOreNames[45499], 'Lavish', 'Shimmering'],
    types_raw: [45499, 46298, 46299],
    batch: 100,
    volume: 10,
    materials: {
        platinum: 40,
        evaporitedeposits: 10
    },
    minerals: {
        tritanium: 5e3,
        mexallon: 1e3,
        isogen: 1e3,
        zydrine: 50
    }
}, {
    id: 'vanadinite',
    names: [MoonOreNames[45500], 'Lavish', 'Shimmering'],
    types_raw: [45500, 46300, 46301],
    batch: 100,
    volume: 10,
    materials: {
        vanadium: 40,
        silicates: 10
    },
    minerals: {
        pyerite: 5e3,
        mexallon: 750,
        isogen: 1250,
        zydrine: 50
    }
}, {
    id: 'carnotite',
    names: [MoonOreNames[45502], 'Replete', 'Glowing'],
    types_raw: [45502, 46304, 46305],
    batch: 100,
    volume: 10,
    materials: {
        technetium: 50,
        cobalt: 10,
        atmosphericgases: 15
    },
    minerals: {
        mexallon: 1e3,
        isogen: 1250,
        zydrine: 50
    }
}, {
    id: 'cinnabar',
    names: [MoonOreNames[45506], 'Replete', 'Glowing'],
    types_raw: [45506, 46310, 46311],
    batch: 100,
    volume: 10,
    materials: {
        mercury: 50,
        tungsten: 10,
        evaporitedeposits: 15
    },
    minerals: {
        mexallon: 1500,
        isogen: 750,
        megacyte: 50
    }
}, {
    id: 'pollucite',
    names: [MoonOreNames[45504], 'Replete', 'Glowing'],
    types_raw: [45504, 46308, 46309],
    batch: 100,
    volume: 10,
    materials: {
        caesium: 50,
        scandium: 10,
        hydrocarbons: 15
    },
    minerals: {
        mexallon: 1250,
        isogen: 1e3,
        zydrine: 50
    }
}, {
    id: 'zircon',
    names: [MoonOreNames[45503], 'Replete', 'Glowing'],
    types_raw: [45503, 46306, 46307],
    batch: 100,
    volume: 10,
    materials: {
        hafnium: 50,
        titanium: 10,
        silicates: 15
    },
    minerals: {
        mexallon: 1750,
        isogen: 500,
        megacyte: 50
    }
}, {
    id: 'loparite',
    names: [MoonOreNames[45512], 'Bountiful', 'Shining'],
    types_raw: [45512, 46316, 46317],
    batch: 100,
    volume: 10,
    materials: {
        promethium: 22,
        platinum: 10,
        scandium: 20,
        hydrocarbons: 20
    },
    minerals: {
        nocxium: 100,
        zydrine: 200,
        megacyte: 50
    }
}, {
    id: 'monazite',
    names: [MoonOreNames[45511], 'Bountiful', 'Shining'],
    types_raw: [45511, 46314, 46315],
    batch: 100,
    volume: 10,
    materials: {
        neodymium: 22,
        chromium: 10,
        tungsten: 20,
        evaporitedeposits: 20
    },
    minerals: {
        nocxium: 50,
        zydrine: 150,
        megacyte: 150
    }
}, {
    id: 'xenotime',
    names: [MoonOreNames[45510], 'Bountiful', 'Shining'],
    types_raw: [45510, 46312, 46313],
    batch: 100,
    volume: 10,
    materials: {
        dysprosium: 22,
        vanadium: 10,
        cobalt: 20,
        atmosphericgases: 20
    },
    minerals: {
        nocxium: 200,
        zydrine: 100,
        megacyte: 50
    }
}, {
    id: 'ytterbite',
    names: [MoonOreNames[45513], 'Bountiful', 'Shining'],
    types_raw: [45513, 46318, 46319],
    batch: 100,
    volume: 10,
    materials: {
        thulium: 22,
        cadmium: 10,
        titanium: 20,
        silicates: 20
    },
    minerals: {
        nocxium: 50,
        zydrine: 100,
        megacyte: 200
    }
}];
