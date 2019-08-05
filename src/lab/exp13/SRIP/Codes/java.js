var img;

function construct() {

    var draw = window.value;

    var v1 = draw.polyline([
        [800, 500],
        [1100, 500],
        [1100, 510],
        [800, 510],
        [800, 500]
    ]).stroke({
        width: 2
    }).attr({
        'fill': '#A3A09E'
    });

    var v2 = draw.line([
        [800, 500],
        [800, 335]
    ]).stroke({
        width: 2
    });

    var v12 = draw.line([
        [800, 295],
        [800, 250]
    ]).stroke({
        width: 2
    });

    var v3 = draw.line([
        [1100, 500],
        [1100, 250]
    ]).stroke({
        width: 2
    });

    // var v4 = draw.path('M 800 250 q 150 -350 300 0').fill('none').stroke({
    //     width: 2
    // });

    // var v5=draw.path('M800,50 a1,1 0 0,0 270,0').fill('none').stroke({
    // 	width:2
    // });

	var v5=draw.path('M 800 250 A 100 100 0 0 1 1100 250').fill('none').stroke({
    	width:2
    })

    // var v15=draw.polyline([[998,260],[1025,260],[998,240]]).stroke({width:2});

    // var v16=draw.polyline([[900,240],[873,240],[900,260]]).stroke({width:2});

    // var v17=draw.polyline([[955,200],[955,175],[935,202]]).stroke({width:2});

    // var v18=draw.polyline([[940,300],[940,325],[960,298]]).stroke({width:2});

    // var v19=draw.polyline([[976,290],[998,305],[993,275]]).stroke({width:2});

    var v7 = draw.polyline([
        [970, 165],
        [970, 140],
        [1100, 140],
        [1100, 150],
        [980, 150],
        [980, 165]
    ]).fill('none').stroke({
        width: 2
    });

    var v15 = draw.polyline([
        [970, 165],
        [960, 171],
        [990, 171],
        [980, 165]
    ]).stroke({
        width: 2
    });

    var v8 = draw.polyline([
        [850, 300],
        [780, 290],
        [680, 290]
    ]).fill('none').stroke({
        width: 2
    });

    var v9 = draw.polyline([
        [850, 330],
        [780, 340],
        [680, 340]
    ]).fill('none').stroke({
        width: 2
    });

    // var v10=draw.polyline([[680,340],[650,330]]).fill('none').stroke({width:2});


    // var v10=draw.path('M 680 340 Q 630 340 550 200').fill('none').stroke({width:2});

    // var v11=draw.path('M 680 290 Q 640 270 610 200').fill('none').stroke({width:2});

    var v10 = draw.polyline([
        [680, 340],
        [630, 340],
        [630, 180]
    ]).fill('none').stroke({
        width: 2
    });

    var v11 = draw.polyline([
        [680, 290],
        [680, 180]
    ]).fill('none').stroke({
        width: 2
    });


    var v13 = draw.polyline([
        [600, 310],
        [780, 310],
        [780, 305],
        [790, 315],
        [780, 325],
        [780, 320],
        [600, 320]
    ]).fill('none').stroke({
        width: 2
    });

    // var v14=draw.polyline([[400,650],[400,510],[1250,510],[1250,650],[400,650]]).fill('none').stroke({width:2});

    var v14 = draw.polyline([
        [1200, 580],
        [450, 580],
        [650, 400],
        [800, 400]
    ]).fill('none').stroke({
        width: 2
    });
    var v15 = draw.polyline([
        [1100, 400],
        [1350, 400],
        [1200, 580]
    ]).fill('none').stroke({
        width: 2
    });

    var v16 = draw.polyline([
        [450, 580],
        [450, 600],
        [1200, 600],
        [1200, 580]
    ]).fill('none').stroke({
        width: 2
    });
    var v17 = draw.polyline([
        [1200, 600],
        [1350, 420],
        [1350, 400]
    ]).fill('none').stroke({
        width: 2
    });

    var v18 = draw.polyline([
        [500, 600],
        [500, 760],
        [520, 760],
        [520, 600]
    ]).fill('none').stroke({
        width: 2
    });
    var v19 = draw.polyline([
        [630, 600],
        [630, 670],
        [650, 670],
        [650, 600]
    ]).fill('none').stroke({
        width: 2
    });
    var v20 = draw.polyline([
        [1130, 600],
        [1130, 760],
        [1150, 760],
        [1150, 600]
    ]).fill('none').stroke({
        width: 2
    });
    var v21 = draw.polyline([
        [1310, 467],
        [1310, 600],
        [1330, 600],
        [1330, 442]
    ]).fill('none').stroke({
        width: 2
    });

    img = draw.image('pelton.jpg');
    img.size(135, 135).move(880, 190);
}

window.onload = function() {
    window.value = SVG("setup").size(1800, 800);
    document.getElementById('plot').disabled = true;
    construct();
}

function reload() {
    document.getElementById('start').disabled = true;

    location.reload();
}

function animation(btn) {

    document.getElementById(btn.id).disabled = true;

    var draw = window.value;

    // construct();

    var v0 = draw.rect(48, 0.1).attr({
        'fill': '#00B0EA',
        x: 631,
        y: 200
    });

    v0.animate().size(48, 139);

    v0.animate({
        delay:'7s'
    }).size(48,0.1);


     var v_0 = draw.rect(48, 0.1).attr({
        'fill': '#FFFFFF',
        x: 631,
        y: 200
    });

    v_0.animate({
        delay:'7s'
    }).size(48, 139);


    var v1 = draw.rect(0.01, 48).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 675,
        y: 291
    });

    v1.animate({
        delay: '1s'
    }).size(112, 48);

    var v_1 = draw.rect(0.01, 48).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 670,
        y: 291
    });

    v_1.animate({
        delay: '8s'
    }).size(117, 48);

    var v2 = draw.rect(0.00001, 45).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 785,
        y: 294

    });

    v2.animate({
        delay: '2s'
    }).size(29, 42);


    var v_2 = draw.rect(0.0001, 45).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 783,
        y: 294

    });

    v_2.animate({
        delay: '9s'
    }).size(31, 42);


    construct();

    var v3 = draw.rect(0.0001, 35).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 800,
        y: 298
    });

    v3.animate({
        delay: '2.75s'
    }).size(110, 35);

    var v_3 = draw.rect(0.0001, 38).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 798,
        y: 297
    });

    v_3.animate({
        delay: '9.75s'
    }).size(112, 38);


    // construct();

    var v4 = draw.rect(0.1, 18).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 910,
        y: 315
    });

    v4.animate({
        delay: '3.65s'
    }).size(15, 18);


    // construct();

    var v_4 = draw.rect(0.001, 18).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 910,
        y: 315
    });

    v_4.animate({
        delay: '9.65s'
    }).size(15, 18);



    var v5 = draw.rect(0.1, 17).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 920,
        y: 316
    });

    v5.animate({
        delay: '4.25s'
    }).size(63, 17);


    // construct();

    var v_5 = draw.rect(0.1, 17).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 920,
        y: 316
    });

    v_5.animate({
        delay: '10.25s'
    }).size(63, 17);


    var v7 = draw.rect(80, 0.1).attr({
        'fill': '#00B0EA',
        // 'fill-opacity':'0.7',			
        x: 903,
        y: 317
    });

    v7.animate({
        delay: '5s'
    }).size(80, 181);

    // construct();

    var v_7 = draw.rect(82, 0.1).attr({
        'fill': '#FFFFFF',
        // 'fill-opacity':'0.7',            
        x: 902,
        y: 316
    });

    v_7.animate({
        delay: '10.75s'
    }).size(82, 84);



    $('#container').delay(5000)
        .animate({
            'height':'+=50px',
            'top': 525
        }, 2500);


    $('#container').delay(4000)
        .animate({
            'height':'+=30px',
             'top':495
        },2500);

    // construct();

    img.animate({
        delay: '3.75s'
    }).rotate(-70);

    
    img.animate({
        delay: '0s'
    }).rotate(-80);

}


function b() {
    var g = 9.81;
    var density = 1000;
    var pi = 3.14159265359;

    var Q, Q2, H, H2, n, n2, x, x2, n, m2;

    Q = document.getElementById("form").elements["water-rate1"].value;

    Q2 = document.getElementById("form").elements["water-rate2"].value;

    H = document.getElementById("form").elements["water-head1"].value;

    H2 = document.getElementById("form").elements["water-head2"].value;

    n = document.getElementById("form").elements["revolution1"].value;

    n2 = document.getElementById("form").elements["revolution2"].value;

    x = document.getElementById("form").elements["length1"].value;

    x2 = document.getElementById("form").elements["length2"].value;

    m = document.getElementById("form").elements["mass1"].value;

    m2 = document.getElementById("form").elements["mass2"].value;

    var omega = 2 * pi * n;
    var omega2 = 2 * pi * n2;

    try {
        var input_power = density * g * H * Q;

        input_power = parseFloat(input_power) / 1000;

        var output_power = parseFloat(omega) * m * x;


        var input_power2 = density * g * H2 * Q2;

        input_power2 = parseFloat(input_power2) / 1000;

        var output_power2 = parseFloat(omega2) * m2 * x2;

        var efficiency = parseFloat(output_power - output_power2) / parseFloat(input_power - input_power2);

        // alert("The input power is "+input_power);
        // alert("The output power is "+output_power);
        // alert("Efficiency of the Pelton Turbine is "+efficiency);


        var chart = new CanvasJS.Chart("chartContainer", {

            title: {

                text: "Efficiency of the Pelton Turbine"
            },

            data: [{
                type: "line",

                dataPoints: [{
                        x: input_power,
                        y: output_power
                    },
                    {
                        x: input_power2,
                        y: output_power2
                    }
                ]
            }]
        });

        chart.render();

    } catch (e) {
        alert("Error: " + e);
    }
}

function enable() {
    document.getElementById('plot').disabled = false;
}