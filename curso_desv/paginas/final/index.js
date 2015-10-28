(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"}
	]
};



// symbols:



(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1830,600);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,860,652);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,291);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,165);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,370);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(286.6,-5.7,0.713,0.713,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.7,292.4,263.8);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,860,652);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1830,600);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-8.2,-6.9,0.713,0.713);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-6.9,316.6,117.7);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-2.4,-5.8,0.713,0.713);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-5.8,956.7,207.9);


(lib.item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_146 = function() {
		this.stop();
		var _this = this;
		
		
		/*_this[ "finalizarMc" ].cursor = "pointer";
		_this[ "finalizarMc" ].on("click", function(){
			parent.course.removeModal();
		})*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(146).call(this.frame_146).wait(1));

	// Layer 7
	this.instance = new lib.Symbol1();
	this.instance.setTransform(51.2,-26.8,1,1,0,0,0,477.1,101);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(1).to({regX:232.9,regY:97.9,x:-193,y:-30.4,alpha:0.006},0).wait(1).to({y:-32.2,alpha:0.03},0).wait(1).to({y:-36.1,alpha:0.078},0).wait(1).to({y:-43.6,alpha:0.172},0).wait(1).to({y:-58.2,alpha:0.354},0).wait(1).to({y:-80.2,alpha:0.63},0).wait(1).to({y:-95.5,alpha:0.821},0).wait(1).to({y:-103.4,alpha:0.919},0).wait(1).to({y:-107.4,alpha:0.97},0).wait(1).to({y:-109.3,alpha:0.993},0).wait(1).to({regX:477.1,regY:101,x:51.2,y:-106.8,alpha:1},0).wait(90));

	// Layer 6
	this.instance_1 = new lib.Symbol18();
	this.instance_1.setTransform(82.4,-40.9,0.68,0.68,0,0,0,137.4,120.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123).to({_off:false},0).wait(1).to({regX:140.4,regY:126.2,x:84.7,y:-36.9,alpha:0.002},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:85.6,y:-36.8,alpha:0.007},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:87.3,y:-36.6,alpha:0.017},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:89.9,y:-36.3,alpha:0.033},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:93.8,y:-35.7,alpha:0.056},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:99.3,y:-35,alpha:0.088},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:106.8,y:-34,alpha:0.134},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:117.6,y:-32.6,alpha:0.198},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:132.9,y:-30.6,alpha:0.289},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:154.1,y:-27.9,alpha:0.416},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:179.2,y:-24.6,alpha:0.566},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:201.3,y:-21.8,alpha:0.698},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:217.4,y:-19.7,alpha:0.794},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:228.7,y:-18.2,alpha:0.861},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:236.7,y:-17.1,alpha:0.909},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:242.4,y:-16.4,alpha:0.942},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:246.3,y:-15.9,alpha:0.966},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:249.1,y:-15.5,alpha:0.982},0).wait(1).to({scaleX:1,scaleY:1,x:250.8,y:-15.3,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,x:251.7,y:-15.2,alpha:0.998},0).wait(1).to({regX:137.4,regY:120.3,scaleX:1,scaleY:1,x:249.1,y:-21,alpha:1},0).wait(3));

	// Layer 5
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(260.7,219.7,1,1,0,0,0,150.5,51);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).wait(1).to({regX:150,regY:51.9,x:260.2,y:220.3,alpha:0.005},0).wait(1).to({y:219.4,alpha:0.024},0).wait(1).to({y:217.6,alpha:0.063},0).wait(1).to({y:214.4,alpha:0.134},0).wait(1).to({y:208.4,alpha:0.263},0).wait(1).to({y:198,alpha:0.49},0).wait(1).to({y:187.2,alpha:0.725},0).wait(1).to({y:180.9,alpha:0.861},0).wait(1).to({y:177.5,alpha:0.935},0).wait(1).to({y:175.7,alpha:0.975},0).wait(1).to({y:174.8,alpha:0.994},0).wait(1).to({regX:150.5,regY:51,x:260.7,y:173.7,alpha:1},0).wait(48));

	// Layer 4
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(916.2,-1.9,1,1,0,0,0,430.2,326.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).wait(1).to({regX:430,regY:326,x:910.8,y:-2},0).wait(1).to({x:892.3},0).wait(1).to({x:853.2},0).wait(1).to({x:778.2},0).wait(1).to({x:632.9},0).wait(1).to({x:412.1},0).wait(1).to({x:259.2},0).wait(1).to({x:180.8},0).wait(1).to({x:140.2},0).wait(1).to({x:121.2},0).wait(1).to({regX:430.2,regY:326.1,x:116,y:-1.9},0).wait(68));

	// Layer 3
	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(-1417,0,1,1,0,0,0,915,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({x:-1415.5},0).wait(1).to({x:-1410.8},0).wait(1).to({x:-1402.4},0).wait(1).to({x:-1389.9},0).wait(1).to({x:-1372.5},0).wait(1).to({x:-1349.4},0).wait(1).to({x:-1319.4},0).wait(1).to({x:-1281.2},0).wait(1).to({x:-1232.7},0).wait(1).to({x:-1171.4},0).wait(1).to({x:-1093.6},0).wait(1).to({x:-994.2},0).wait(1).to({x:-866.9},0).wait(1).to({x:-706.7},0).wait(1).to({x:-518.9},0).wait(1).to({x:-327.7},0).wait(1).to({x:-160.3},0).wait(1).to({x:-26.1},0).wait(1).to({x:78.6},0).wait(1).to({x:160.3},0).wait(1).to({x:224.3},0).wait(1).to({x:274.8},0).wait(1).to({x:314.4},0).wait(1).to({x:345.4},0).wait(1).to({x:369.3},0).wait(1).to({x:387.3},0).wait(1).to({x:400.2},0).wait(1).to({x:408.7},0).wait(1).to({x:413.5},0).wait(1).to({x:415},0).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2332,-300,1830,600);


// stage content:



(lib._final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.getStage().enableMouseOver();
		
		parent.course.telaInfo = "complete";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.item1 = new lib.item1();
	this.item1.setTransform(500,300);

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1332,300,1830,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;