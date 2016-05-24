var Particle = function(name, symbol, type, mass, spin, charge) {
	this.name = name;
	this.dashName = name.replace(' ', '-');
	this.camelName = name.indexOf(' ') == -1 ? name : name.slice(0, name.indexOf(' ')) + name.charAt(name.indexOf(' ') + 1).toUpperCase() + name.slice(name.indexOf(' ') + 2, name.length);
	this.symbol = symbol;
	this.type = type;
	this.mass = mass;
	this.spin = spin;
	this.charge = charge;
};

//&plusmdn;

var up = new Particle('up', 'u', 'quark'),
	down = new Particle('down', 'd', 'quark'),
	charm = new Particle('charm', 'c', 'quark'),
	strange = new Particle('strange', 's', 'quark'),
	topParticle = new Particle('top', 't', 'quark'),
	bottom = new Particle('botton', 'b', 'quark'),
	electron = new Particle('electron', 'e', 'lepton'),
	electronNeutrino = new Particle('electron neutrino', '&nu;<sub>e</sub>', 'lepton');
	muon = new Particle('muon', '&mu;', 'lepton'),
	muonNeutrino = new Particle('muon neutrino', '&nu;<sub>&mu;</sub>', 'lepton'),
	tau = new Particle('tau', '&tau;', 'lepton'),
	tauNeutrino = new Particle('tau neutrino', '&nu;<sub>&nu;</sub>', 'lepton'),
	gluon = new Particle('gluon', 'g', 'gauge boson'),
	photon = new Particle('photon', '&gamma;', 'gauge boson'),
	zBoson = new Particle('Z boson', 'Z', 'gauge boson'),
	wBoson = new Particle('W boson', 'W', 'gauge boson'),
	higgsBoson = new Particle('Higgs boson', 'H', 'higgs boson');
	
var particles = [
	up,
	down,
	charm,
	strange,
	topParticle,
	bottom,
	electron,
	electronNeutrino,
	muon,
	muonNeutrino,
	tau,
	tauNeutrino,
	gluon,
	photon,
	zBoson,
	wBoson,
	higgsBoson];

function init() {

	//alert('loaded');

}

function initDraw() {
	var canvasSize = 512,
		canvasDim = canvasSize.toString() + 'px',
		smdContent = document.getElementById('smd-content');
	
	particles.forEach(function(particle, index) {
		smdContent.innerHTML = smdContent.innerHTML + '<canvas id="smd-' + particles[index].dashName + '" data-camel-name="' + particles[index].camelName + '" class="canvas-layer" height="' + canvasDim + '" width="' + canvasDim + '"></canvas>';
	});
}