var Particle = function (name, symbol, type, mass, spin, charge) {
    'use strict';

    this.name = name;
    this.dashName = name.replace(' ', '-');
    this.camelName = name.indexOf(' ') === -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
    this.symbol = symbol;
    this.type = type;
    this.mass = mass + 'eV/c<sup>2</sup>';
    this.spin = spin;
    this.charge = charge;
    this.description = '';
    this.el = function () {
        return document.getElementById('smd-' + this.dashName);
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
    };
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
    };
};

var Type = function (name, type, radius, start, end, quant) {
    'use strict';

    this.name = name;
    this.dashName = name.replace(' ', '-');
    this.camelName = name.indexOf(' ') === -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
    this.type = type;
    this.radius = radius;
    this.start = start;
    this.end = end;
    this.quant = quant;
    this.description = '';
};

//&plusmdn;

var quark = new Type('quark', 'fermion', 3, 0, Math.PI, 6),
    lepton = new Type('lepton', 'fermion', 3, Math.PI, 2 * Math.PI, 6),
    gaugeBoson = new Type('gauge boson', 'boson', 2, 0, 2 * Math.PI, 4),
    higgsBosonT = new Type('Higgs boson', 'boson', 1, 0, 2 * Math.PI, 1);

var up = new Particle('up', 'u', quark, '2.3M', '2/3', '1/2'),
    charm = new Particle('charm', 'c', quark, '1.275G', '2/3', '1/2'),
    topParticle = new Particle('top', 't', quark, '173.07G', '2/3', '1/2'),
    down = new Particle('down', 'd', quark, '4.8M', '-1/3', '1/2'),
    strange = new Particle('strange', 's', quark, '95M', '-1/3', '1/2'),
    bottom = new Particle('bottom', 'b', quark, '4.180G', '-1/3', '1/2'),
    electron = new Particle('electron', 'e', lepton, '0.511M', '-1', '1/2'),
    muon = new Particle('muon', '&mu;', lepton, '105.7M', '-1', '1/2'),
    tau = new Particle('tau', '&tau;', lepton, '1.777G', '-1', '1/2'),
    electronNeutrino = new Particle('electron neutrino', '&nu;<sub>e</sub>', lepton, '<2.2', '0', '1/2'),
    muonNeutrino = new Particle('muon neutrino', '&nu;<sub>&mu;</sub>', lepton, '<0.17M', '0', '1/2'),
    tauNeutrino = new Particle('tau neutrino', '&nu;<sub>&tau;</sub>', lepton, '<15.5M', '0', '1/2'),
    gluon = new Particle('gluon', 'g', gaugeBoson, '0', '0', '1'),
    photon = new Particle('photon', '&gamma;', gaugeBoson, '0', '0', '1'),
    zBoson = new Particle('Z boson', 'Z', gaugeBoson, '91.2G', '0', '1'),
    wBoson = new Particle('W boson', 'W', gaugeBoson, '80.4G', '&plusmn;1', '1'),
    higgsBoson = new Particle('Higgs boson', 'H', higgsBosonT, '126G', '0', '0');

up.description = '<p>Up quarks are the lightest type of quark. They are fermions - ' +
    'a particle characterized by Fermi-Dirac statistics. As a fermion, up quarks experience ' +
    'the gravitational, electromagnetic, weak, and strong interactions. One up quark and two down quarks ' +
    'form a neutron while two up quarks and one down quark form a proton. Murray Gell-Mann and George ' +
    'Zwei first postulated up quarks in 1964, and experiments at the Stanford Linear Accelerator' +
    ' proved their existence in 1968.</p>';

charm.description = '<p>As charming as its name might be, charm quarks are the third most massive type of quark.  ' +
    'Charm quarks form hadrons such as mesons (J/&phi;), D mesons (D), and charmed Sigma baryons (&Sigma;<sub>C</sub>). ' +
    'Charm quarks are part of the second generation of matter. Many credit their prediction to Sheldon Glashow, ' +
    'John Illiopoulos, and Luciano Maiani in 1970, and they were discovered at the Stanford Linear Accelerator Center.</p>';

topParticle.description = '<p>Also known as a truth quark, top quarks are fermions. It is part of the ' +
    'third generation of quarks and is as massive as an atom of tungsten (1 atom ' +
    'of tungsten is approximately 3.053 &times; 10<sup>-25</sup> kg while a top quark is approximately 3.091 &times; 10<sup>-25</sup> kg). ' +
    'Top quarks have a lifetime of 5 &times; 10<sup>-25</sup> s, and physicists have used its properties to predict the' +
    ' Higgs\' mass. Makoto Kobayashi and Toshihide Maskawa postulated its existence in 1973, and the CDF and DØ experiments' +
    ' at Fermilab discovered the top quark in 1995. </p>';

down.description = '<p>Down quarks are the second lightest type of quark. They are fermions - ' +
    'a particle characterized by Fermi-Dirac statistics. As a fermion, down quarks experience ' +
    'the gravitational, electromagnetic, weak, and strong interactions. One up quark and two down quarks ' +
    'form a neutron while two up quarks and one down quark form a proton. Murray Gell-Mann and George ' +
    'Zwei first postulated down quarks in 1964, and experiments at the Stanford Linear Accelerator' +
    ' proved their existence in 1968.</p>';

strange.description = '<p>Strange quarks are the third lightest type of quark. They are part of the second ' +
    'generation of quarks and form hadrons such as kaons (K), ' +
    'strange D mesons (D<sub>S</sub>, and Sigma baryons (&Sigma;). Murray Gell-Mann and George ' +
    'Zwei first postulated strange quarks in 1964, and experiments at the Stanford Linear Accelerator' +
    ' proved their existence in 1968.</p>';

bottom.description = '<p>Also known as beauty quarks, bottom quarks are part of the third generation of quarks. ' +
    'Top quarks and Higgs Bosons both decay into bottom quarks; the weak interaction causes bottom quarks to decay into ' +
    'up or charm quarks. Makoto Kobayashi and Toshihide Maskawa first theorized bottom quarks in 1973, and the E288 experiment' +
    ' at Fermilab discovered them in 1977. </p>';

electron.description = '<p>Electrons are subatomic particles that compose atoms and have a negative charge. They are denoted' +
    ' by e<sup>-</sup> or &beta;<sup>-</sup> and are part of the first generation of leptons. Electrons have a mass of 1/1836' +
    ' of that of a proton and have properties of both particles and waves. Electrons play a significant role in electricity, ' +
    'magnetism, and thermal conductivity. They are pivotal in discussions of chemical reactions. J. J. Thomson and a team' +
    ' of British hysicists identified the electron in 1897, but its existence had been theorized as early as 1838 and its presence' +
    ' noticed by the ancient Greeks. </p> ';

muon.description = '<p>Muons are similar to electrons but, among other different properties, have greater mass. ' +
    'Muons have a lifetime of about 2.2&mu;s and decay into at least one electron and two different neutrinos. Carl D.' +
    ' Anderson and Seth Neddermeyer discovered muons at Caltech in 1936, arguably by accident. Their discovery was confirmed ' +
    'the next year by J. C. Street and E. C. Stevenson. </p>';

tau.description = '<p>Tau particles are leptons. Their lifetime is shorter than that of muons at 2.9 &times; 10<sup>-13</sup>s' +
    '. Martin Lewis Perl and his colleagues at the SLAC-LBL group first detected tau particles in experiments between ' +
    '1974 and 1977. </p>';

electronNeutrino.description = '<p>Wolfgang Pauli hypothesized the electron neutrino\'s existence in 1930 and ' +
    'Clyde Cowan and Frederick Reines discovered it in 1956. It is part of the first generation of leptons.</p>';

muonNeutrino.description = '<p>First hypothesized in the 1940s, Leon Lederman, Melvin Schwartz and Jack Steinberger discovered ' +
    'it in 1962, winning them the 1988 Nobel Physics Prize. Muon neutrinos are part of the second generation of leptons.</p>';

tauNeutrino.description = '<p>The DONUT collaboration announced the tau neutrino\'s discovery in 2000, but the tau' +
    ' particle\'s discovery in 1977 implied the tau neutrino\'s existence. It is part of the third generation' +
    ' of leptons.</p>';

gluon.description = '<p>Gluons allow the strong force to interact between quarks, similar to how photons allow two' +
    ' charged particles to interact through the electromagnetic force. As the name suggests, gluons act like glue; the' +
    ' quarks of protons and neutrons are held together by gluons.</p>';

photon.description = '<p>Photons form electromagnetic radiation and carries the electromagnetic force. It has zero' +
    ' mass. Although it is best explained by quantum mechanics, it exhibits properties of both waves and particles, ' +
    'known as a wave-particle duality. Albert Einstein developed the modern concept of the photon in an attempt to ' +
    'explain photons\' behavior when it did not follow the classical wave model of light.</p>';

zBoson.description = '<p>Named after the weak force, W and Z bosons are also known as intermediate vector bosons. They ' +
    'are 100 times more massive than protons. ' +
    'They carry the weak force, causing nuclear transmutation in electron or positron emission or absorption and ' +
    'transfering momentum, spin, and energy during elastic neutrino scatter. W bosons may have a positive or negative ' +
    'charge, but Z bosons always have zero charge, hence the Z. W and Z bosons were first discovered in 1983. </p>';

wBoson.description = '<p>Named after the weak force, W and Z bosons are also known as intermediate vector bosons. They ' +
    'are 100 times more massive than protons and, as bosons, follows Bose-Einstein statistics. ' +
    'They carry the weak force, causing nuclear transmutation in electron or positron emission or absorption and ' +
    'transfering momentum, spin, and energy during elastic neutrino scatter. W bosons may have a positive or negative ' +
    'charge, but Z bosons always have zero charge, hence the Z. W and Z bosons were first discovered in 1983. </p>';

higgsBoson.description = '<p>Named after physicist Peter Higgs, who along with six other physicists ' +
    'proposed the existence of the Higgs in 1964, the Higgs Boson is also referred to as the \'God Particle\'' +
    ' due to trouble physicists have gone to in order to detect it. The Higgs is an excitation in the Higgs field and' +
    ' attempts to explain why certain fundamental particles have the masses that they do. It was not discovered until ' +
    'the construction of the LHC (Large Hadron Collider) in Geneva, Switzerland. In 2012, physicists announced the Higgs\'' +
    ' discovery at 125 - 127 GeV/c<sup>2</sup>, a mass that matches neither a perfect Standard Model nor a perfect' +
    ' multiverse. New data from December of 2015 may signal the existence of a heavier version of the Higgs Boson. </p>';

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
    windowWidth = window.innerWidth,
    initialInfoContent;


function initDraw() {
    'use strict';

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

        switch (particleType) {
            case higgsBosonT:
                ctx.fillStyle = '#FFEB3B';
                break;
            case lepton:
                ctx.fillStyle = '#8bc34a';
                break;
            case gaugeBoson:
                ctx.fillStyle = '#536dfe';
                break;
            case quark:
                ctx.fillStyle = '#e91e63';
                break;
        }
        ctx.strokeStyle = 'white';
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
        ctx.fill();

        ctx.fillStyle = '#222';
        ctx.textAlign = 'center';
        ctx.font = '1.5em Open Sans';
        if (particle === higgsBoson) {
            ctx.fillText(particle.name, offset, offset);
        } else {
            ctx.fillText(particle.name, (particleType.radius - 0.5) * unit * Math.cos((end + start) / 2) + offset, (particleType.radius - 0.5) * unit * Math.sin((end + start) / 2) + offset);
        }

    });
}

function focusParticle(particleNum) {
    'use strict';

    particles.forEach(function (particle, index) {
        if (particleNum !== index) {
            particle.blur();
        } else {
            particle.focus();
            var data = document.getElementById('data-row'),
                dataCells = [],
                adjustedParticleNum = -1 * index + 16;

            for (var i = 0; i < data.getElementsByTagName('td').length; i++) {
                dataCells.push(data.getElementsByTagName('td')[i]);
            }

            dataCells.forEach(function (element) {
                var dataType = element.getAttribute('data-particle-data');
                if (dataType === 'type') {
                    element.innerHTML = particles[adjustedParticleNum][dataType].name;
                } else if (dataType === 'statistics') {
                    element.innerHTML = particles[adjustedParticleNum].type.type;
                } else {
                    element.innerHTML = particles[adjustedParticleNum][dataType];
                }
            });

            document.getElementById('particle-name').innerHTML = particles[adjustedParticleNum].name +
                ' - <span style="font-family: Lora; font-style: italic;">' + particles[adjustedParticleNum].symbol +
                '</span>';
            document.getElementById('particle-description').innerHTML = particles[adjustedParticleNum].description;
        }
    });
}

function normalizeParticles() {
    'use strict';

    particles.forEach(function (particle) {
        particle.normalize();
    });

    document.getElementById('info-content').innerHTML = initialInfoContent;
}

function getMouseParticle(x, y) {
    'use strict';

    var centeredX = x - windowHeight / 2,
        centeredY = windowHeight / 2 - y,
        rawTheta = Math.atan(centeredY / centeredX),
        theta,
        radius = Math.sqrt(centeredX * centeredX + centeredY * centeredY) / (windowHeight / 8 * 1.25),
        particle = -1;

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

function clickSMD(e) { // why the fuck does this work!!!????
    'use strict';

    var part = getMouseParticle(event.pageX, event.pageY);
    if (part !== -1) {
        focusParticle(-1 * part + 16);
    } else {
        normalizeParticles();
    }
}

function init() {
    'use strict';

    document.getElementById('standard-model-diagram').style.width = windowHeight + 'px';
    document.getElementById('standard-model-diagram').style.height = windowHeight + 'px';
    document.getElementById('info').style.width = (windowWidth - windowHeight).toString() + 'px';

    initDraw();

    $('#smd-click-listener').click(function (event) {
        clickSMD(event);
    });

    initialInfoContent = document.getElementById('info-content').innerHTML;
}