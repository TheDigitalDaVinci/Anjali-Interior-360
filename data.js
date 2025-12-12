var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5929184045079339,
        "pitch": 0.05267619155918801,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -3.0259863383934054,
          "pitch": 0.37105403942798354,
          "rotation": 4.71238898038469,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5840185901050905,
        "pitch": -0.015078546676093652,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.2193562329946328,
          "pitch": 0.16981658810647815,
          "rotation": 1.5707963267948966,
          "target": "0-foyer"
        },
        {
          "yaw": 3.0683401551622644,
          "pitch": 0.3712995052055277,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.13767586724626923,
        "pitch": -0.0037072930641635082,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.36649162355870324,
          "pitch": 0.18795331037721574,
          "rotation": 1.5707963267948966,
          "target": "3-wash"
        },
        {
          "yaw": -0.862776685405727,
          "pitch": 0.06340430388448581,
          "rotation": 0,
          "target": "6-upper-living"
        },
        {
          "yaw": 0.8592958355212588,
          "pitch": -0.024165813931681157,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.9706223914885506,
          "pitch": 0.27196430936430005,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": -1.1604441019260765,
          "pitch": 0.14136859038649163,
          "rotation": 4.71238898038469,
          "target": "7-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5682658232514406,
        "pitch": 0.10076987457310338,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.1749572283072798,
          "pitch": 0.13019639104656022,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 0.6214136310031506,
          "pitch": -0.08003036087662352,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.4526687209120537,
          "pitch": -0.0018659311429605197,
          "rotation": 1.5707963267948966,
          "target": "1-living"
        },
        {
          "yaw": 2.6330922123597773,
          "pitch": -0.24235044023311403,
          "rotation": 1.5707963267948966,
          "target": "6-upper-living"
        },
        {
          "yaw": 2.0395246722128775,
          "pitch": 0.004032703384705627,
          "rotation": 0,
          "target": "7-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1622715089077502,
        "pitch": -0.006255911339643205,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.805645439953036,
          "pitch": 0.033986565128721224,
          "rotation": 0.7853981633974483,
          "target": "5-work-area"
        },
        {
          "yaw": 0.7211795205953617,
          "pitch": 0.07208339839393751,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.614382068466787,
          "pitch": 0.02248746508578492,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.5876037274720076,
          "pitch": 0.07635895721253938,
          "rotation": 4.71238898038469,
          "target": "11-ff-bedroom"
        },
        {
          "yaw": 0.09789515480724553,
          "pitch": -0.006663913602901417,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gf-bedroom-1",
      "name": "GF Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.2199589558516628,
        "pitch": -0.0018822929505439845,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.6061921183403705,
          "pitch": 0.18218433609880513,
          "rotation": 0,
          "target": "8-gf-bedroom-1"
        },
        {
          "yaw": 3.089833515445706,
          "pitch": 0.025329587997486414,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-bedroom-1",
      "name": "GF Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4817648528056466,
        "pitch": 0.011159193200459327,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.2491632987551018,
          "pitch": 0.22539234179213352,
          "rotation": 0,
          "target": "7-gf-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-bedroom-2",
      "name": "GF Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3490607646056958,
        "pitch": 0.026014815224989718,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.22273435052371227,
          "pitch": 0.15858512456387786,
          "rotation": 0,
          "target": "10-gf-bedroom-2"
        },
        {
          "yaw": -2.729432248498272,
          "pitch": 0.08400139469413404,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gf-bedroom-2",
      "name": "GF Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4690501564104217,
        "pitch": 0.023035723328149516,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.07043088477720794,
          "pitch": 0.23754378531990916,
          "rotation": 0,
          "target": "9-gf-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ff-bedroom",
      "name": "FF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.1433981850824857,
          "pitch": 0.32238907502287617,
          "rotation": 0,
          "target": "12-ff-bedroom"
        },
        {
          "yaw": 2.0842352931038803,
          "pitch": 0.10939488968423916,
          "rotation": 0,
          "target": "6-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ff-bedroom",
      "name": "FF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.29688590368975376,
        "pitch": 0.011159193200466433,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.22446652399006695,
          "pitch": 0.09458538792011773,
          "rotation": 0,
          "target": "11-ff-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Anjali's Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
