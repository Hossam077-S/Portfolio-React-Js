import './trails.css';

const Tails = () => {
    // dots is an array of Dot objects,
    // mouse is an object used to track the X and Y position
    // of the mouse, set with a mousemove event listener below
    var dots = [],
        mouse = {
            x: 0,
            y: 0
        };

    // The Dot object used to scaffold the dots
    var Dot = function() {
        this.x = 0;
        this.y = 0;
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
        }());
    };

    // The Dot.prototype.draw() method sets the position of 
    // the object's <div> node
    Dot.prototype.draw = function() {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
        this.node.style.opacity = 1;
        this.node.style.transition = "all 0s ease";
        
    };

    // Creates the Dot objects, populates the dots array
    for (var i = 0; i < 50; i++) {
        var d = new Dot();
        dots.push(d);
    }

    // This is the screen redraw function
    function draw() {
        // Make sure the mouse position is set everytime
        // draw() is called.

        var x = mouse.x,
            y = mouse.y;    
        x = x + 125;

        // This loop is where all the 90s magic happens
        dots.forEach(function(dot, index, dots) {
            var nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .6;
            y += (nextDot.y - dot.y) * .6;
        });
    }

    // Create EventListener for mouseStope
    (function (mouseStopDelay) {
        var timeout;
        document.addEventListener('mousemove', function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                var event = new CustomEvent("mousestop", {
                    detail: {
                        clientX: e.clientX,
                        clientY: e.clientY
                    },
                    bubbles: true,
                    cancelable: true
                });
                e.target.dispatchEvent(event);
            }, mouseStopDelay);
        });
    }(1700));

    var el = document.getElementById('intro');
    if(el){
        el.addEventListener('mousemove', function(event) {
            // event.preventDefault();
            mouse.x = event.pageX;
            mouse.y = event.pageY;
            
            Dot.prototype.draw = function() {
                this.node.style.left = this.x + "px";
                this.node.style.top = this.y + "px";
                this.node.style.opacity = 1;
                this.node.style.transition = "all 0s ease";
                
            };
        });

        // Where is mouse stopped in intro section
        el.addEventListener('mousestop', function(e) {
            console.log('Mouse coordinates are: ', e.detail.clientX, e.detail.clientY);
            // The event will bubble up to parent elements.

            // Hide The dots
            Dot.prototype.draw = function() {
                this.node.style.opacity = 0;
                this.node.style.transition = "all 0.5s ease";
            };
        });
    }
    var el2 = document.getElementById('portfolio');
    if (el2) {
        el2.addEventListener('mouseenter', function(e) {
            // Hide The dots
            
           Dot.prototype.draw = function() {
                this.node.style.opacity = 0;
                this.node.style.transition = "all 0.5s ease";
            };
        });
    }
    var el3 = document.getElementById('topbar');
    if (el3) {
        el3.addEventListener('mouseenter', function(e) {
            // Hide The dots
            mouse.x = e.pageX;
            mouse.y = e.pageY -100;
        });
    }
    
    // animate() calls draw() then recursively calls itself
    // everytime the screen repaints via requestAnimationFrame().
    function animate() {
    draw();
    requestAnimationFrame(animate);
    }

    // And get it started by calling animate().
    animate();
    

    return null;
}

export default Tails;
