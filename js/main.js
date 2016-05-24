var Particle = function (name, symbol, type, mass, spin, charge) {
    this.name = name;
    this.dashName = name.replace(' ', '-');
    this.camelName = name.indexOf(' ') == -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
    this.symbol = symbol;
    this.type = type;
    this.mass = mass + 'eV/c<sup>2</sup>';
    this.spin = spin;
    this.charge = charge;
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
}

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
    up,
    charm,
    topParticle,
    down,
    strange,
    bottom,
    electron,
    muon,
    tau,
    electronNeutrino,
    muonNeutrino,
    tauNeutrino,
    gluon,
    photon,
    zBoson,
    wBoson,
    higgsBoson];

function init() {

    alert('loaded');
    initDraw();

}

function initDraw() {
    var canvasSize = 1024,
        canvasDim = canvasSize.toString() + 'px',
        smdContent = document.getElementById('smd-content'),
        unit = canvasSize / 8,
        lastUsed = 0;

    particles.forEach(function (particle, index) {
        smdContent.innerHTML = smdContent.innerHTML + '<canvas id="smd-' + particles[index].dashName + '" data-camel-name="' + particles[index].camelName + '" class="canvas-layer" height="' + canvasDim + '" width="' + canvasDim + '"></canvas>';


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
        ctx.arc(canvasSize / 2, canvasSize / 2, particleType.radius * unit, start, end, false);
        ctx.stroke();
    })
}