var arr = ["Catch Balls","Sit","Lay Down","Turn","Fake Death","High Five"];
        var btn = document.getElementById('btn');
        var content = document.getElementById('answer');
        var span = document.getElementById('span');
        var timer;
        var testNum = true;
        btn.onclick = function(){
            if(testNum){
              
                start();
                btn.innerHTML = 'stop';
                btn.style.backgroundColor = "#DD001B";
                testNum = false;
            }
            else{
               
                stop();
                btn.innerHTML = "Another Skill";
                btn.style.backgroundColor ="";
                testNum = true;
            }
        }
        function start(){
                timer = setInterval(function(){
                    var num = random(0,arr.length - 1);
                    span.innerHTML = arr[num];
                },50)
        }
        function stop(){
                clearInterval(timer);      
        }
        
        function random(a,b){
            var randomNum = Math.round(Math.random() * (b - a) + a);
            return randomNum;
        }        
