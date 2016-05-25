var Particle = function (name, symbol, type, mass, spin, charge) {
    this.name = name;
    this.dashName = name.replace(' ', '-');
    this.camelName = name.indexOf(' ') == -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
    this.symbol = symbol;
    this.type = type;
    this.mass = mass + 'eV/c<sup>2</sup>';
    this.spin = spin;
    this.charge = charge;
    this.el = function () {
        return document.getElementById('smd-' + this.dashName)
    };
    this.focus = function () {
        $(this.el())
            .addClass('particle-focus')
            .removeClass('particle-standard')
            .removeClass('particle-blur')
            .animate({
                zoom: "110%"
            }, {
                duration: 1000,
                easing: "easeOutQuart"
            });
    };
    this.normalize = function () {
        $(this.el())
            .addClass('particle-standard')
            .removeClass('particle-focus')
            .removeClass('particle-blur')
            .animate({
                zoom: "100%"
            }, {
                duration: 1000,
                easing: "easeOutQuart"
            });
    }
    this.blur = function () {
        $(this.el())
            .addClass('particle-blur')
            .removeClass('particle-focus')
            .removeClass('particle-standard')
            .animate({
                zoom: "90%"
            }, {
                duration: 1000,
                easing: "easeOutQuart"
            });
    }
};

var Type = function (name, type, radius, start, end, color, quant) {
    this.name = name;
    this.dashName = name.replace(' ', '-');
    this.camelName = name.indexOf(' ') == -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
    this.type = type;
    this.radius = radius;
    this.start = start;
    this.end = end;
    this.color = color;
    this.quant = quant;
};

//&plusmdn;

var quark = new Type('quark', 'matter', 3, 0, Math.PI, '', 6),
    lepton = new Type('lepton', 'matter', 3, Math.PI, 2 * Math.PI, '', 6),
    gaugeBoson = new Type('gauge boson', 'force carrier', 2, 0, 2 * Math.PI, '', 4),
    higgsBosonT = new Type('Higgs boson', 'force carrier', 1, 0, 2 * Math.PI, '', 1);

var up = new Particle('up', 'u', quark, '2.3M', '2/3', '1/2'),
    charm = new Particle('charm', 'c', quark, '1.275G', '2/3', '1/2'),
    topParticle = new Particle('top', 't', quark, '173.07G', '2/3', '1/2'),
    down = new Particle('down', 'd', quark, '4.8M', '-1/3', '1/2'),
    strange = new Particle('strange', 's', quark, '95M', '-1/3', '1/2'),
    bottom = new Particle('bottom', 'b', quark, '4.180G', '-1/3', '1/2'),
    electron = new Particle('electron', 'e', lepton, '0.511M', '-1', '1/2'),
    muon = new Particle('muon', '&mu;', lepton, '105.7M', '-1', '1/2'),
    tau = new Particle('tau', '&tau;', lepton, '1.777G', '-1', '1/2'),
    electronNeutrino = new Particle('electron neutrino', '&nu;<sub>e</sub>', lepton, '2.2', '0', '1/2'),
    muonNeutrino = new Particle('muon neutrino', '&nu;<sub>&mu;</sub>', lepton, '0.17M', '0', '1/2'),
    tauNeutrino = new Particle('tau neutrino', '&nu;<sub>&nu;</sub>', lepton, '15.5M', '0', '1/2'),
    gluon = new Particle('gluon', 'g', gaugeBoson, '0', '0', '1'),
    photon = new Particle('photon', '&gamma;', gaugeBoson, '0', '0', '1'),
    zBoson = new Particle('Z boson', 'Z', gaugeBoson, '91.2G', '0', '1'),
    wBoson = new Particle('W boson', 'W', gaugeBoson, '80.4G', '&plusmdn;1', '1'),
    higgsBoson = new Particle('Higgs boson', 'H', higgsBosonT, '126G', '0', '0');

higgsBoson.camelName = 'higgsBoson';

var particles = [
    up, // 0
    charm, // 1
    topParticle, // 2
    down, // 3
    strange, // 4
    bottom, // 5
    electron, // 6
    muon, // 7
    tau, // 8
    electronNeutrino, // 9
    muonNeutrino, // 10
    tauNeutrino, // 11
    gluon, // 12
    photon, // 13
    zBoson, // 14
    wBoson, // 15
    higgsBoson]; // 16

var windowHeight = window.innerHeight,
    windowWidth = window.innerWidth;


function init() {

    document.getElementById('standard-model-diagram').style.width = window.innerHeight + 'px';
    document.getElementById('standard-model-diagram').style.height = window.innerHeight + 'px';
/*    document.getElementById('smd-click-listener').style.height = window.innerHeight + 'px';
    document.getElementById('smd-click-listener').style.width = window.innerHeight + 'px';*/

    initDraw();


    $('#smd-click-listener').click(function(event) {clickSMD(event);});


}

function initDraw() {
    var canvasSize = windowHeight,
        offset = canvasSize / 2,
        canvasDim = canvasSize.toString() + 'px',
        smdContent = document.getElementById('smd-content'),
        unit = canvasSize / 8 * 1.25,
        lastUsed = 0;

    particles.forEach(function (particle, index) {
        smdContent.innerHTML = '<canvas id="smd-' + particles[index].dashName + '" data-camel-name="' +
            particles[index].camelName + '" class="canvas-layer particle-standard" height="' + canvasDim +
            '" width="' + canvasDim + '"></canvas>' + smdContent.innerHTML;
    });

    particles.forEach(function (particle, index) {
        var canvas = smdContent.getElementsByClassName('canvas-layer')[index],
            ctx = canvas.getContext('2d'),
            particleType = particles[index].type,
            start = lastUsed,
            end = (particleType.end - particleType.start) / particleType.quant + start;
        lastUsed = end;
        /*console.log(canvas);
         console.log(particleType);
         console.log(start);
         console.log(end);*/

        ctx.strokeStyle = "white";
        ctx.beginPath();
        if (particleType !== higgsBosonT) {
            ctx.moveTo((particleType.radius - 1) * unit * Math.cos(start) + offset, (particleType.radius - 1) * unit * Math.sin(start) + offset);
            ctx.lineTo(particleType.radius * unit * Math.cos(start) + offset, particleType.radius * unit * Math.sin(start) + offset);
        }
        ctx.arc(canvasSize / 2, canvasSize / 2, particleType.radius * unit, start, end, false);
        if (particleType !== higgsBosonT) {
            ctx.lineTo((particleType.radius - 1) * unit * Math.cos(end) + offset, (particleType.radius - 1) * unit * Math.sin(end) + offset);
            ctx.arc(canvasSize / 2, canvasSize / 2, (particleType.radius - 1) * unit, end, start, true);
        }
        ctx.stroke();

        ctx.fillStyle = 'white'
        ctx.font = '1.5em Open Sans';
        ctx.fillText(particle.name, (particleType.radius - 0.5) * unit * Math.cos((end + start) / 2) + offset, (particleType.radius - 0.5) * unit * Math.sin((end + start) / 2) + offset);

    });
}

function getParticleNum(particle) {

}

function focusParticle(particleNum) {
    particles.forEach(function(particle, index) {
        if (particleNum !== index) {
            particle.blur();
        } else {
            particle.focus();
        }
    });
}

function normalizeParticles() {
    particles.forEach(function(particle) {
       particle.normalize();
    });
}

function getMouseParticle(x, y) {
    var centeredX = x - windowHeight / 2,
        centeredY = windowHeight / 2 - y,
        rawTheta = Math.atan(centeredY / centeredX),
        theta,
        radius = Math.sqrt(centeredX * centeredX + centeredY * centeredY) / (windowHeight / 8 * 1.25),
        particle = -1;

    console.log(centeredX + ', ' + centeredY);
    console.log(radius);

    if (centeredX === 0) {
        theta = centeredY >= 0 ? Math.PI / 2 : 3 * Math.PI / 2;
    } else {
        if (centeredX < 0) {
            theta = rawTheta + Math.PI;
        } else if (rawTheta < 0) {
            theta = rawTheta + 2 * Math.PI;
        } else {
            theta = rawTheta;
        }
    }

    if (radius < 1) {
        particle = 16;
    } else if (radius < 2) {
        particle = Math.floor(-2 * theta / Math.PI + 16);
    } else if (radius < 3) {
        particle = Math.floor(-6 * theta / Math.PI + 12);
    }

    return particle;
}

function clickSMD(e) {
    console.log(event.pageX + ', ' + event.pageY);
    var part = getMouseParticle(event.pageX,event.pageY);
    console.log(part);
    if (part !== -1) {
        focusParticle(-1 * part + 16);
    } else {
        normalizeParticles();
    }
}