const MyPuppyYuta = {
	name: "yuta",
    species: "dog",
    breed:"shiba inu",
    favouriteplace:"grassland",
    age:"2",
    eyeCount:"2",
    legCount:"4",
    tailCount:"1",
    isAdorable:true,
	isABoy: true,
    isNaugty:true,
    siblings: ["harden"],
    birthplace: ["china,zhejiang,huzhou"],
    observations: [
		'has the personality of the cat',  
		'difficult to tell him to come over',
	],
    color: [
       {
        ageInYears: 0,
		description: "darkbrown"    
       },
       
       {
        ageInYears: 0.5,
		description: "brown"    
       },
       
        {
        ageInYears: 1,
		description: "ginger, white",  
       },
       
        {
        ageInYears: 1.5,
		description: "brown,orange, white",  
       },
       
       {
        ageInYears: 2,
		description: "orange, white",  
       },
       
        ],
        
    catch: function(toy) {
		if (!toy) {
			console.log("ball");
      return;
		}

		console.log("Catching" + toy);
	},
    
    chew: function(shoes) {
		if (!shoes) {
			console.log("dad's shoes");
      return;
		}

		console.log("Chewing" + shoes);
	},    
	
};

let food = [ "chicken", "apple", "cookies" ];

food.forEach(function(item, i) {
	console.log(i, item);
});

const smile = function() {
    
 console.log ("smiley shiba inu face");
 
};

const bark = function(barkCount) {
    
	console.log("bark", barkCount);
	
};

const ball1 = {
	color:function(r, g, b){
		setColor(r, g, b);
	},
	r: 100,
	g: 200,
	b: 140,
	position: {
		x: 40,
		y: 115
	},
	move: function(mom) { 
	let angry = "stay in dad's company";
	if(mom == angry) {
		console.log("GET OUT");
	}
	else if (mom == happy){
		console.log("STAY");
	}
	else{
		console.log("THINK");
	}
	
}
};
