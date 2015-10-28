(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/cidade.jpg", id:"cidade"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,231);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,118);


(lib.cidade = function() {
	this.initialize(img.cidade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,600);


(lib.toggle = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0.1,0.2,0.713,0.713);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,50.6,84.1);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0.1,0.2,0.713,0.713);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,164.7,164.7);


(lib.marcacao = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Marcação", "22px 'Weber Brush'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 199;
	this.text.setTransform(-3.6,-21.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AuEjTIcJAAIAAGnI8JAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AuEDUIAAmnIcJAAIAAGng");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103,-22.2,203,47.8);


(lib.htbtn7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("A9GO0IHkmvIgempIGBlTIgugNIAAmEIAXgQIKdCeIAAkEIDli1IJICEIAAEqICsApIFGkaIF+BVIAAFwIIRCAQAXAQgGAaIt4Q7g");
	this.shape.setTransform(186.4,94.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,372.7,189.6);


(lib.hitbtn5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("AwpTsMAAAgnpIGBBzIAAEaIFZBfIAAjmIIdjXIJLBWIAAFZIERA8IAAEQIkHCRIAAGPIgbAaIAAiSIhSgWIAAgdInkhrIngD2IAAAlIhlA0IASLMIqhGsg");
	this.shape.setTransform(106.6,127.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213.3,255.6);


(lib.hitbtn3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("AvDPmQgZgPAJgiIFjoGIBcioIAVAEIBniXQgQguApgYQAigagdgeQgogmApgmIAgAEQgrAeA5A4ICHjDQgcguAugqIABgBQAegcgggkQgkgnAigjIAhAEQgXAcAZAmQAcAqgyAtQgUAaANAPIEYmdIAAh9ICmjxIBNAMIAcgqIlYgpIAAmHIAagOINMBLIgJF9IBZACMAAAAm8g");
	this.shape.setTransform(98.3,147.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,196.6,295.2);


(lib.hitbtn2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("AB6TTI7/mmQg8gIAmgnIISnsIhFgGIAAgzIBFgiIAAh/IhFgGIAAgxIFhkdIAAgqIBuhwID0AYIAAiaQAWiNElhJQBRgVBngPIi4gWIAAl7IAWgVINKBHIAAFyQCNAbBqBDIC0AUQgGgLATgLQhTg6AYhXQAOgmAqgZQBciDBWCJQAaBTgkBCQgQA8g5AaIIGA6IAAAZIjWEGQgzg+g6BUQAwgVAnAaIgJAKQhKgZADBvIlKGRQg9gqgsBHQA7gZAVAZIgSAWQhKgCAGBWIjIDzQg/AWgDA6IgRAVQhMiGhSCvQBXhfA/BAIgLANQhzgxAGC3Ik6F9QgZAdgmAAQgSAAgVgGg");
	this.shape.setTransform(170.2,123.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,341.4,248.3);


(lib.hitbtn1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("AC0SgItRjOIAAgfIo5h7IgWALIvhjxIAAhFIB6hPIgDm2IDbh4IgHiqIEcioIBZANIAAhFIlLg2IAAlOIARgMILkBWIAJFoIgjATIlkg6IAABEIEpAsIAADxIA0AGIBJgzIAAmlIGFjRIFQASIAABgICJhLIFMAZIAABrINZBjIAAmTIIejrIF5AOIAJLqIDeAaQgnALAXBoQAQg/BCgrQgSA0AfA5Ik5DxQgBgPgCgNQgGgbgOgNQgWgWgrAKQAWghArAIQAfAGArAdQglhLglgMQgqgNgrBDQhUhHgcBQQArgMAaAYQhiAQAeBxQAdhUA2AFQgOAwArBAIkxDrQhLi3hmCjQgmhvhNBlQA/gQAmAtQiXgKBCCDQAVg+BBgcQgXBFAhAoImoFGQgQh9hlAfQA9hJByBcQh5jshLDgQhNiUhIB3QBvgKANAjQiygSBBC4QAnheA/gbQgSBnA3AwImdE/QglAeg0AAQgXAAgagGgALpLmQAGgngSghQBEgCAuBRIhmBOgAUZEbQAkgCAyAxIhIA3QAShPgggXgAUhEHQAuhBBsBJIg1ApQgThPhSAegAcAhhQA0AEAWA7IhKA3gEAiqgGFIAUADQAhAWgmAvIgPAMg");
	this.shape.setTransform(225.4,118.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,450.8,238.2);


(lib.hitBotao = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("A5NPqIAA+gIBFAAIAAktILWABIAZAZIAAFSIlEAQIAABhIC3CaIAAHGICPAMIAAHEIGWibIHGA5QDeghFEgFIAACZIFIA4IAABIIhcgOIkWCfIAACtIjiB6IAAAoInmEIIjfghIjgBigAzJtiIA8AyIAAg1gAPeHCIAAhGIEZAsIhnA3gAVUCFQCZgCBhASIjOBqIAABaIgsAXg");
	this.shape.setTransform(161.4,124.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,322.8,250.5);


(lib.hitbnt6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,190,190,0.008)").s().p("AqFTxIwumjQgTgOATgRIEvjVIgjvzIBsg2IAAguIHkjsIHeBrIAAAbIBPAYIAACaIAggWIAAmcILXmNIAYAFIAAClID5iKII2B/IAAHFIGVBqQAjAPgZAhMgjtAbjg");
	this.shape.setTransform(172.6,126.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,345.2,253.1);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.toggle();
	this.instance.setTransform(32.9,62.6,1,1,0,0,0,35.3,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:25.4,regY:42.3,scaleX:1,scaleY:1,x:23,y:46},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:45.7},0).wait(1).to({scaleX:0.96,scaleY:1.02,y:45.1},0).wait(1).to({scaleX:0.91,scaleY:1.05,x:23.1,y:44.1},0).wait(1).to({scaleX:0.85,scaleY:1.08,x:23,y:42.9},0).wait(1).to({scaleX:0.82,scaleY:1.09,y:42.2},0).wait(1).to({scaleX:0.81,scaleY:1.1,y:41.9},0).wait(1).to({regX:35.4,regY:58.8,scaleX:0.8,scaleY:1.1,x:31,y:60},0).wait(1).to({regX:25.4,regY:42.3,scaleX:0.83,scaleY:1.09,x:23,y:42.5},0).wait(1).to({scaleX:1,scaleY:1,x:23.1,y:46.1},0).wait(1).to({scaleX:1.19,scaleY:0.9,y:50.2},0).wait(1).to({regX:35.3,regY:58.8,scaleX:1.23,scaleY:0.88,x:35.2,y:65.6},0).wait(1).to({regX:25.4,regY:42.3,scaleX:1.2,scaleY:0.89,x:23.1,y:50.6},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:48.1},0).wait(1).to({scaleX:0.89,scaleY:1.02,y:45.2},0).wait(1).to({regX:35.4,regY:58.7,scaleX:0.86,scaleY:1.03,x:31.6,y:61.6},0).wait(1).to({regX:25.4,regY:42.3,scaleX:0.88,scaleY:1.03,x:23,y:45},0).wait(1).to({scaleX:0.96,scaleY:0.99,y:46.5},0).wait(1).to({scaleX:1.07,scaleY:0.95,y:48.2},0).wait(1).to({regX:35.3,regY:58.8,scaleX:1.09,scaleY:0.94,x:33.8,y:64.1},0).wait(1).to({regX:25.4,regY:42.3,scaleX:1.07,scaleY:0.95,x:23,y:48.3},0).wait(1).to({scaleX:1,scaleY:0.98,x:23.1,y:47},0).wait(1).to({scaleX:0.93,scaleY:1.01,y:45.6},0).wait(1).to({regX:35.4,regY:58.7,scaleX:0.92,scaleY:1.02,x:32.2,y:62},0).to({regX:35.3,regY:58.8,scaleX:1.07,scaleY:0.96,x:33.6,y:63.5},4).to({scaleX:1,scaleY:1,x:32.9,y:62.6},4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,4,50.6,84.1);


(lib.bt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{UP:0,"UP":1,CHECK:2,OVER:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.htbtn7();
	this.hit.setTransform(182.7,73.1,1,1,0,0,0,186.3,94.8);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(189.5,84.2);

	this.instance = new lib.pin();
	this.instance.setTransform(210.4,0.8,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(220.5,78.5,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(220.5,76.5,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("A9GO0IHkmvIgdmqIGAlTIgugMIAAmEIAXgQIKeCfIAAkFIDki0IJJCDIAAEqICrApIFGkaIF/BVIAAFwIIQCAQAXAQgGAaIt4Q7g");
	this.shape_2.setTransform(182.7,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.5,62.5,203,47.3);


(lib.bt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitbnt6();
	this.hit.setTransform(170.7,99.3,1,1,0,0,0,172.6,126.5);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(156.5,79.9);

	this.instance = new lib.pin();
	this.instance.setTransform(261.4,-11.2,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(96.3,113.9,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(96.3,111.9,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("AqFTxIwumjQgTgNATgSIEvjVIgjvzIBsg2IAAguIHkjsIHeBrIAAAbIBPAYIAACaIAggWIAAmcILXmNIAYAFIAAClID5iKII2B/IAAHFIGVBqQAjAPgaAhMgjsAbjg");
	this.shape_2.setTransform(170.7,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.5,58.2,203,47.3);


(lib.bt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitbtn5();
	this.hit.setTransform(105.6,130.1,1,1,0,0,0,106.6,127.8);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(98.5,54.2);

	this.instance = new lib.pin();
	this.instance.setTransform(77.7,29.5,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(128.3,63.9,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(128.3,61.9,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("AwpTsMAAAgnpIGBBzIAAEaIFZBfIAAjmIIdjWIJLBVIAAFZIERA8IAAEQIkHCQIAAGQIgbAaIAAiSIhSgWIAAgcInlhsInfD2IAAAlIhlA0IASLMIqhGrg");
	this.shape_2.setTransform(105.6,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,32.5,203,47.3);


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitBotao();
	this.hit.setTransform(130.8,97.7,1,1,0,0,0,127.9,125.2);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(133.5,114.2);

	this.instance = new lib.pin();
	this.instance.setTransform(139.4,73.8,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(108.3,163.9,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(108.3,161.9,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("A5NPqIAA+gIBEAAIAAktILXABIAZAZIAAFSIlEAQIAABhIC2CaIAAHGICQAMIAAHEIGWibIHGA5QDeghFDgFIAACZIFJA4IAABIIhcgOIkWCfIAACtIjiB6IAAAoInnEIIjeghIjgBigAzJtiIA7AyIAAg1gAPeHHIAAhGIEZArIhmA4gAVUCPQCagCBgASIjOBqIAABZIgsAYg");
	this.shape_2.setTransform(164.4,97.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.5,92.5,203,47.2);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitbtn3();
	this.hit.setTransform(99.5,151.6,1,1,0,0,0,98.3,147.6);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(69.5,212.2);

	this.instance = new lib.pin();
	this.instance.setTransform(141.4,150.9,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(136.5,180.5,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(136.5,178.5,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("AvDPmQgZgPAJgiIFjoFIBcipIAVAEIBniWQgQgvApgZQAigZgdgdQgognApgnIAgAFQgrAeA5A4ICHjCQgcgwAugoIABgBQAegdgggjQgkgpAigiIAhAEQgXAbAZAmQAcArgyAuQgUAZANAOIEYmcIAAh8ICmjyIBNAMIAcgqIlYgpIAAmHIAagNINMBKIgJF+IBZABMAAAAm9g");
	this.shape_2.setTransform(99.5,151.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,190.5,203,47.3);


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitbtn2();
	this.hit.setTransform(170.7,124.1,1,1,0,0,0,170.7,124.1);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(189.5,114.2);

	this.instance = new lib.pin();
	this.instance.setTransform(206.4,-33.2,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(180.4,132.9,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(180.4,130.9,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("AB6TTI7/mmQg8gIAmgnIISnsIhFgGIAAgzIBFgiIAAh/IhFgGIAAgxIFhkdIAAgqIBuhwID0AYIAAiaQAWiNElhJQBRgVBngPIi4gWIAAl7IAWgVINKBHIAAFyQCNAbBqBDIC0AUQgGgLATgLQhTg6AYhXQAOgmAqgZQBciDBWCJQAaBTgkBCQgQA8g5AaIIGA6IAAAZIjWEGQgzg+g6BUQAwgVAnAaIgJAKQhKgZADBvIlKGRQg9gqgsBHQA7gZAVAZIgSAWQhKgCAGBWIjIDzQg/AWgDA6IgRAVQhMiGhSCvQBXhfA/BAIgLANQhzgxAGC3Ik6F9QgZAdgmAAQgSAAgVgGg");
	this.shape_2.setTransform(170.2,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.5,92.5,203,47.2);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"UP":1,"CHECK":2,"OVER":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.marcacaoMc.visible = false;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 1
	this.hit = new lib.hitbtn1();
	this.hit.setTransform(277.2,120.4,1,1,0,0,0,225.7,119.1);
	this.hit._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1).to({_off:false},0).wait(3));

	// Layer 3
	this.marcacaoMc = new lib.marcacao();
	this.marcacaoMc.setTransform(189.5,114.2);

	this.instance = new lib.pin();
	this.instance.setTransform(211.7,75.6,1,1,0,0,0,35.3,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92D417").s().p("ArZbBQlQiNkFkFQkDkDiPlSQiUldAAl9QAAl8CUldQCPlSEDkDQEFkEFQiOQFciUF9AAQF+AAFcCUQFRCOEEEEQEEEECOFRQCUFcAAF9QAAF+iUFcQiOFRkEEEQkEEElRCOQlcCUl+AAQl9AAlciUgApB1aQkLBxjODPQjODOhxELQh2EUABEtQgBEuB2EUQBxELDODOQDODPELBxQEVB1EsAAQEtAAEVh1QEMhxDNjPQDPjOBxkLQB1kUAAkuQAAkth1kUQhxkLjPjOQjNjOkMhyQkVh1ktAAQksAAkVB1g");
	this.shape.setTransform(193.8,143.1,0.19,0.19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92D417").s().p("AxZBEQgcgbAAgoQAAglAcgcIDvjwQAcgcAoAAQAnAAAbAcIHJHHIP+v+QAcgbAoAAQAoAAAbAbIDwDwQAcAcAAAnQAAAogcAbI11V0g");
	this.shape_1.setTransform(193.8,141.2,0.19,0.19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.247)").s().p("ACxSgItQjOIAAgfIo6h7IgWALIvgjxIAAhFIB6hPIgEm2IDbh4IgGiqIEcioIBYANIAAhFIlLg2IAAlOIASgMILkBWIAIFoIgiATIllg6IAABEIEqAsIAADxIAzAGIBKgzIAAmlIGEjRIFRASIAABgICIhLIFNAZIAABrINZBjIAAmTIIejrIF5AOIAJLqIDeAaQgnALAXBoQAQg/BBgrIAAAAQgRA0AeA5Ik5DxQAAgPgDgNQgFgagPgOQgWgVgrAJQAXghAqAIQAgAGAqAdQgkhLgmgMQgqgNgrBDQhUhHgcBQQAsgMAaAYQhiAQAdBxQAdhTA3AEQgPAwAsBAIkyDrIg0ApQgThPhSAeQAuhBBrBJQhKi3hnCjQglhvhOBlQBAgQAlAtQiXgJBCCCQAWg+BBgcQgYBFAiAoImoFGQgQh9hlAfQA9hJByBcQh5jshMDgQhNiUhHB3QBvgKANAjQiygSBAC4QAoheA+gbQgRBnA3AwImeE/QgkAeg0AAQgXAAgbgGgALsLmQAGgmgTgiQBFgCAtBRIhlBOgAUbEbQAlgCAxAxIhHA3QAShPghgXgAcDhhQA0AFAWA6IhKA3gEAisgGFIAUADQAiAWgmAvIgQAMg");
	this.shape_2.setTransform(277.1,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.marcacaoMc}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.5,92.5,203,47.2);


// stage content:



(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var btn ="btn";
		var btnAll = parent.course.modulosData.menusAll;
		var menusAtivos = parent.course.modulosData.menusAtivos;
		
		this.getStage().enableMouseOver();
		setTimeout( initMenu, 1000 * 0.5 );
		
		function initMenu(){
			for(var i = 1; i <= btnAll; i++ )
			{
				_this[ btn + i ].id = i;
				_this[ btn + i ].cursor = "pointer";
				
				if( menusAtivos[ i-1 ] == 0 )
					_this[ btn + i ].statusMenu = "UP";
				else
					_this[ btn + i ].statusMenu = "CHECK";
				
				_this[ btn + i ].gotoAndStop( _this[ btn + i ].statusMenu );		
				_this[ btn + i ].hit.on("click", clickMenu);
				_this[ btn + i ].hit.on("mouseover", overMenu);
				_this[ btn + i ].hit.on("mouseout", outMenu);
			}
		}
		
		function clickMenu(ev){
			var botao = ev.currentTarget.parent;
			botao.statusMenu = "CHECK";
			botao.gotoAndStop( botao.statusMenu );
			parent.course.telaInfo = botao.id;
			parent.course.createModal("paginas/AA" +  botao.id + "/index.html", 1000, 600, false , false);
		}
		
		function overMenu(ev){
			for(var i = 1; i <= btnAll; i++ )
			{
				_this[ btn + i ].gotoAndStop( _this[ btn + i ].statusMenu );
			}
			var botao = ev.currentTarget.parent;
			botao.gotoAndStop( "OVER" );
		}
		
		function outMenu(ev){
			var botao = ev.currentTarget.parent;
			botao.gotoAndStop( botao.statusMenu );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#253C5F").s().p("EAhwABnIgGgBIACgNIAFABIAEAAQAFAAADgCQADgCAAgFQAAgEgDgCIgFgBIgEAAIgFABIAAgMIAHgCIAIAAQAKAAAFAFQAFAGAAAHQAAAJgEAGQgEAFgHACQgGADgHAAIgGgBgA7iBnIgGgBIACgNIAFABIAEAAQAFAAADgCQADgCAAgFQAAgEgDgCIgFgBIgEAAIgFABIAAgMIAHgCIAIAAQAKAAAFAFQAFAGAAAHQAAAJgEAGQgEAFgHACQgGADgHAAIgGgBgEglxABnIgGgBIACgNIAFABIAEAAQAFAAADgCQADgCAAgFQAAgEgDgCIgFgBIgEAAIgFABIAAgMIAHgCIAIAAQAKAAAFAFQAFAGAAAHQAAAJgEAGQgEAFgHACQgGADgHAAIgGgBgAYfBeQgKgCgHgDIAFgZQAHADAIADQAJACAHAAQAJAAAFgFQAFgGAAgLIAAgHQgDAEgGACQgGAEgJAAQgMgBgIgFQgJgGgFgMQgFgMAAgRQAAgKADgKQACgKAFgIQAFgIAHgFQAIgFAKABQAJAAAGADQAGACADADIACgGIAaAAIAABoQAAAMgEAKQgEALgJAGQgKAGgRABQgMAAgLgDgAYugeQgEADgCAGQgCAIAAANQAAAOAEAHQAEAIAIAAQAEAAAEgCIAGgDIAAgzIgHgFIgHgBIgBAAQgEAAgDADgAuOBeQgLgCgGgDIAEgZQAHADAJADQAIACAHAAQAKAAAEgFQAFgGAAgLIAAgHQgDAEgGACQgGAEgJAAQgLgBgJgFQgIgGgFgMQgFgMAAgRQAAgKACgKQACgKAFgIQAFgIAIgFQAHgFALABQAJAAAFADQAGACAEADIABgGIAbAAIAABoQAAAMgEAKQgEALgKAGQgKAGgRABQgMAAgKgDgAt/geQgEADgCAGQgDAIAAANQAAAOAEAHQAEAIAJAAQAEAAADgCIAGgDIAAgzIgGgFIgHgBIgCAAQgDAAgDADgAkFBdIAAgyIgDADIgIAFQgFACgHABQgMAAgJgHQgIgFgFgNQgFgMAAgRQAAgOAEgNQAEgNAJgIQAJgHAOAAQAIAAAGACQAGADAEADIABgHIAbAAIAACTgAkbgfQgEAEgCAGQgDAIAAANQAAAOAEAIQAFAIAIAAQAEAAADgCIAHgDIAAg0IgHgFIgHgBQgEAAgEACgEguYAAwQgMgHgHgLQgHgKgDgNQgDgLAAgNQAAgPADgNQADgOAGgLQAHgKALgHQALgGARgBQASABAKAFQAKAGAFAKQAFAIACALIgdAHQgCgLgFgGQgFgGgJAAQgIAAgFAFQgFAEgDAIQgCAHgBAJIgBAPQAAAYAIANQAHANASgBQAJAAAJgCQAIgDAIgEIAFAZQgHAEgLADQgLADgPABQgSgBgLgGgEArkAAxQgKgFgFgIQgGgIgCgKQgCgKAAgIQAAgLACgKQACgJAGgJQAFgHAJgFQAJgFAOABQAMAAAIAEQAHAEAFAGQAEAHACAJIgZAJQgBgHgDgEQgDgEgHgBQgGAAgDAFQgDAEgCAHQgBAGAAAJQAAANAFAIQAFAJAMAAQAIAAAGgCIANgFIACAYQgGAEgIACQgIACgLAAQgPAAgJgFgEAkzAAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgEAlAgAbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgEAhqAAxQgKgFgFgIQgGgIgCgKQgCgKAAgIQAAgLACgKQACgJAGgJQAFgHAJgFQAJgFAOABQAMAAAIAEQAHAEAFAGQAEAHACAJIgZAJQgBgHgDgEQgDgEgHgBQgGAAgDAFQgDAEgCAHQgBAGAAAJQAAANAFAIQAFAJAMAAQAIAAAGgCIANgFIACAYQgGAEgIACQgIACgLAAQgPAAgJgFgAVkAxQgJgEgFgJQgFgIgCgJQgDgKAAgJQAAgPAFgNQAGgNAKgHQALgIAQABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgCAKQgDAKgGAIQgFAJgJAEQgKAFgNAAQgNAAgJgFgAVxgbQgDAEgBAHQgCAIAAAIQAAANAEAIQADAJAJAAQAGAAAEgEQADgEACgIIABgOIgBgQQgBgHgEgEQgDgFgGAAQgHAAgEAFgAHwAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgAH9gbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgAEbA0IgNgEQgGgCgDgCIAHgZQAHAFAIADQAIADAIAAQAHAAADgCQADgCAAgFQAAgGgGgDQgGgDgJgBQgHgCgHgEQgHgCgEgGQgEgFAAgLQAAgLAFgHQAGgIAJgDQAIgEAMAAQANAAAIAEQAJADAEAFQAFAGABAGIgWAJQgDgGgFgDQgEgDgGAAQgFAAgCACQgDACgBAFQABAGAFADIANAEQAIACAHAEQAHADAFAEQAEAHABALQAAALgGAIQgFAIgKAEQgJAEgNAAQgIAAgIgCgACyAxQgJgEgFgJQgFgIgCgJQgDgKAAgJQAAgPAFgNQAGgNAKgHQALgIAQABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgCAKQgDAKgGAIQgFAJgJAEQgKAFgNAAQgNAAgJgFgAC/gbQgDAEgBAHQgCAIAAAIQAAANAEAIQADAJAJAAQAGAAAEgEQADgEACgIIABgOIgBgQQgBgHgEgEQgDgFgGAAQgHAAgEAFgAm2A0IgOgEQgGgCgDgCIAIgZQAGAFAIADQAJADAIAAQAHAAADgCQADgCAAgFQgBgGgFgDQgGgDgJgBQgIgCgGgEQgHgCgEgGQgEgFAAgLQAAgLAFgHQAFgIAJgDQAJgEALAAQAOAAAIAEQAIADAFAFQAEAGACAGIgXAJQgDgGgEgDQgEgDgGAAQgFAAgDACQgDACAAAFQAAAGAFADIAOAEQAIACAHAEQAHADAEAEQAFAHAAALQAAALgFAIQgGAIgJAEQgKAEgMAAQgIAAgIgCgAofAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgAoSgbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgAqzAxQgKgFgFgIQgGgIgCgKQgCgKAAgIQAAgLACgKQACgJAGgJQAFgHAJgFQAJgFAOABQAMAAAIAEQAHAEAFAGQAEAHACAJIgZAJQgBgHgDgEQgDgEgHgBQgGAAgDAFQgDAEgCAHQgBAGAAAJQAAANAFAIQAFAJAMAAQAIAAAGgCIANgFIACAYQgGAEgIACQgIACgLAAQgPAAgJgFgAsgAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgAsTgbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgA7oAxQgKgFgFgIQgGgIgCgKQgCgKAAgIQAAgLACgKQACgJAGgJQAFgHAJgFQAJgFAOABQAMAAAIAEQAHAEAFAGQAEAHACAJIgZAJQgBgHgDgEQgDgEgHgBQgGAAgDAFQgDAEgCAHQgBAGAAAJQAAANAFAIQAFAJAMAAQAIAAAGgCIANgFIACAYQgGAEgIACQgIACgLAAQgPAAgJgFgA+jAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgA+WgbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgEgl3AAxQgKgFgFgIQgGgIgCgKQgCgKAAgIQAAgLACgKQACgJAGgJQAFgHAJgFQAJgFAOABQAMAAAIAEQAHAEAFAGQAEAHACAJIgZAJQgBgHgDgEQgDgEgHgBQgGAAgDAFQgDAEgCAHQgBAGAAAJQAAANAFAIQAFAJAMAAQAIAAAGgCIANgFIACAYQgGAEgIACQgIACgLAAQgPAAgJgFgEgspAAxQgJgEgFgJQgGgIgCgJQgCgKAAgJQAAgPAFgNQAFgNALgHQAKgIARABQASgBAKAIQAKAHAEANQAEAMAAAPQAAAJgDAKQgCAKgGAIQgGAJgJAEQgJAFgNAAQgNAAgJgFgEgscgAbQgEAEgBAHQgBAIAAAIQAAANADAIQAEAJAJAAQAGAAADgEQAEgEABgIIABgOIgBgQQgBgHgDgEQgDgFgHAAQgGAAgEAFgEAudAAxQgEgEAAgIQAAgGAEgEQAEgFAHgBQAIABAEAEQADAFABAGQAAAIgEAEQgEAEgHABQgIgBgEgEgEAttAAzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQAAABABABQAAAAABAAQAAABABAAQABAAAAAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgEAtKAAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgEAnAAAvQgHgGgBgLIgBgGIAAgHIAAhEIAegDIAABDIAAAEIABADQABAFACACQADABAEAAQAFABAFgDIAIgFIAAhLIAeAAIAABqIgbAAIgBgJQgGAEgHADQgIADgJABQgPAAgHgHgEAjzAAzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQABABAAABQAAAAABAAQAAABABAAQAAAAABAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgEAjQAAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgEAgpAAzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQAAABABABQAAAAABAAQAAABABAAQABAAAAAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgEAgGAAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgAa5AzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQABABAAABQAAAAABAAQAAABABAAQABAAAAAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgAaWAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgAT4AzQgEgEgCgFQgEAEgIADQgIAFgKAAQgLgBgHgEQgHgEgEgIQgDgIAAgJQAAgTAKgHQAKgKAVAAIAIABIAIABIAAgCQAAgJgFgFQgGgDgIAAIgOABIgMAEIgEgWIAJgCIAMgCIANgBQALAAAJACQAIACAGAGQAGAGACALIACAJIAAALIAAAhQAAADACACQAAABAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIADgBIACASIgJADIgJABQgIAAgFgDgATWAEQgFAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAFgDACgCIAAgVIgEgCIgHgBIgBAAQgHAAgEAEgAOoAvQgHgGgCgLIgBgGIAAgHIAAhEIAfgDIAABDIAAAEIAAADQABAFADACQACABAFAAQAFABAEgDIAIgFIAAhLIAfAAIAABqIgbAAIgBgJQgGAEgIADQgHADgKABQgOAAgHgHgANGAzQgEgEgCgFQgEAEgIADQgIAFgKAAQgLgBgHgEQgHgEgEgIQgDgIAAgJQAAgTAKgHQAKgKAVAAIAIABIAIABIAAgCQAAgJgFgFQgGgDgIAAIgOABIgMAEIgEgWIAJgCIAMgCIANgBQALAAAJACQAIACAGAGQAGAGACALIACAJIAAALIAAAhQAAADACACQAAABAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIADgBIACASIgJADIgJABQgIAAgFgDgAMkAEQgFAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAFgDACgCIAAgVIgEgCIgHgBIgBAAQgHAAgEAEgAGcAtQgHgIABgOIAAg4IgOAAIAAgVIAOAAIAAgSIAegOIAAAgIAXAAIAAAVIgXAAIAAAxQAAAEACAFQABADAGAAIAHAAIAGgCIAEAWQgFADgHACIgOABQgRAAgHgJgAhQAtQgLgHgFgNQgEgNAAgNQAAgUAGgMQAGgMALgFQAKgGAMABQAVAAAKAMQAKAOAAAYIAAAIIg3AAQABAOAGAGQAGAGAKAAQAHAAAHgCIAOgGIACAZQgGAEgJACQgIACgKAAQgUAAgLgJgAgqgNQAAgKgEgGQgDgFgGAAQgHAAgEAGQgDAGAAAJIAbAAIAAAAgAjHAvQgHgGgBgLIgBgGIAAgHIAAhEIAegDIAABDIAAAEIABADQABAFACACQADABAEAAQAFABAFgDIAIgFIAAhLIAeAAIAABqIgbAAIgBgJQgGAEgHADQgIADgJABQgPAAgHgHgAv3AtQgLgHgEgNQgEgNAAgNQAAgUAGgMQAGgMAKgFQAKgGANABQAVAAAKAMQAKAOAAAYIAAAIIg4AAQABAOAGAGQAHAGAJAAQAIAAAHgCIAOgGIABAZQgFAEgJACQgJACgKAAQgUAAgLgJgAvRgNQAAgKgDgGQgEgFgGAAQgHAAgDAGQgDAGAAAJIAaAAIAAAAgA2JAtQgLgHgEgNQgEgNAAgNQAAgUAGgMQAGgMAKgFQAKgGANABQAVAAAKAMQAKAOAAAYIAAAIIg4AAQABAOAGAGQAHAGAJAAQAIAAAHgCIAOgGIABAZQgFAEgJACQgJACgKAAQgUAAgLgJgA1jgNQAAgKgDgGQgEgFgGAAQgHAAgDAGQgDAGAAAJIAaAAIAAAAgA35AvQgIgFgFgNQgFgMAAgRQAAgOAEgNQAEgNAKgIQAJgHAOAAQAHAAAFACIAIADIAAgoIAfAAIAACOIgbAAIgBgJQgDADgGAEQgGADgKABQgMAAgJgHgA3jgfQgEAEgCAGQgDAIAAANQAAAOAEAIQAFAIAIAAQAEAAADgCIAHgDIAAg1IgHgEQgDgBgEAAQgEAAgEACgA5fAzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQABABAAABQAAAAABAAQAAABABAAQAAAAABAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgA6CAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgEghXAAzQgEgEgCgFQgEAEgIADQgIAFgKAAQgLgBgHgEQgHgEgEgIQgDgIAAgJQAAgTAKgHQAKgKAVAAIAIABIAIABIAAgCQAAgJgFgFQgGgDgIAAIgOABIgMAEIgEgWIAJgCIAMgCIANgBQALAAAJACQAIACAGAGQAGAGACALIACAJIAAALIAAAhQAAADACACQAAABAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIADgBIACASIgJADIgJABQgIAAgFgDgEgh5AAEQgFAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAFgDACgCIAAgVIgEgCIgHgBIgBAAQgHAAgEAEgEgjuAAzQgFgEgBgFQgFAEgIADQgHAFgLAAQgLgBgHgEQgHgEgDgIQgEgIAAgJQAAgTAKgHQALgKAUAAIAJABIAIABIAAgCQAAgJgGgFQgFgDgJAAIgOABIgLAEIgFgWIAJgCIANgCIANgBQALAAAIACQAJACAGAGQAFAGADALIABAJIABALIAAAhQAAADABACQAAABABABQAAAAABAAQAAABABAAQABAAAAAAIADAAIADgBIACASIgKADIgJABQgHAAgFgDgEgkRAAEQgEAEAAAJQAAAHADADQADAEAGAAQAFAAAEgCQAEgDADgCIAAgVIgFgCIgGgBIgCAAQgHAAgEAEgEgngAAtQgLgHgEgNQgEgNAAgNQAAgUAGgMQAGgMAKgFQAKgGANABQAVAAAKAMQAKAOAAAYIAAAIIg4AAQABAOAGAGQAHAGAJAAQAIAAAHgCIAOgGIABAZQgFAEgJACQgJACgKAAQgUAAgLgJgEgm6gANQAAgKgDgGQgEgFgGAAQgHAAgDAGQgDAGAAAJIAaAAIAAAAgEAqZAA0IAAhqIAfAAIAABqgEApjAA0IAAhEIAAgDIA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");
	this.shape.setTransform(442.9,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// titulo
	this.instance = new lib.Symbol1();
	this.instance.setTransform(853,89.4,1,1,0,0,0,82.7,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn7
	this.btn3 = new lib.bt7();
	this.btn3.setTransform(492.7,509.6,1,1,0,0,0,184.6,84.5);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(1));

	// btn6
	this.btn5 = new lib.bt6();
	this.btn5.setTransform(219.1,477.6,1,1,0,0,0,169,110.5);

	this.timeline.addTween(cjs.Tween.get(this.btn5).wait(1));

	// btn5
	this.btn1 = new lib.bt5();
	this.btn1.setTransform(117,410.6,1,1,0,0,0,109,128.5);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// btn4
	this.btn4 = new lib.b4();
	this.btn4.setTransform(162.1,184.5,1,1,0,0,0,158.1,108.5);

	this.timeline.addTween(cjs.Tween.get(this.btn4).wait(1));

	// btn3
	this.btn7 = new lib.b3();
	this.btn7.setTransform(894.2,360.1,1,1,0,0,0,99,147);

	this.timeline.addTween(cjs.Tween.get(this.btn7).wait(1));

	// btn2
	this.btn2 = new lib.b2();
	this.btn2.setTransform(692.9,317,1,1,0,0,0,170.7,124.1);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// btn1
	this.btn6 = new lib.b1();
	this.btn6.setTransform(384.7,259.6,1,1,0,0,0,244.6,118.6);

	this.timeline.addTween(cjs.Tween.get(this.btn6).wait(1));

	// Camada 3
	this.instance_1 = new lib.cidade();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,300,1000,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;