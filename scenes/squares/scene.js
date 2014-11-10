define(['jquery', 'app/fft', 'vendor/processing', 'app/params'],
  function($, FFTJS, processing, Params) {
    var processingInstance, drawerSketch;
    var API = {};

    API.init = function() {
      $('#snap-content').append('<canvas id="squares" class="container">');

      drawerSketch = function(processing) {
        var params;
        var width = window.innerWidth;

        var height = window.innerHeight;

        var halfWidth = width / 2;
        var halfHeight = height / 2;

        processing.size(width, height);

        var bTrans = false;
        var bMouse = false;
        var ponies = [];

        function Vector(x, y) {
          this.x = x;
          this.y = y;
          this.add = function(vector) {
            this.x += vector.x;
            this.y += vector.y;
          };
          this.times = function(vector) {
            this.x *= vector.x;
            this.y *= vector.y;
          };
        }

        function Pony(position, velocity, rotVelocity) {
          this.acceleration = new Vector(0,0.5);
          this.velocity = velocity;
          this.radius = 300;
          this.position = position;
          this.hue = Math.random() * 360;
          this.rotation = 0;
          this.rotVelocity = rotVelocity;

          this.is_in_bounds = function() {
            if (this.position.x > width || this.position.x < 0) {
              return false;
            } else {
              return true;
            }
          };

          this.update = function() {
            this.position.add(this.velocity);
            this.rotation += this.rotVelocity;
            this.bounce();
          };
          this.draw = function() {
            if (bTrans === true) {
              processing.fill(this.hue, 50, 100, 0.5);
            } else {
              processing.fill(this.hue, 50, 100, 1);
            };
            processing.pushMatrix();
              processing.translate(this.position.x, this.position.y);
              processing.rotate(processing.radians(this.rotation));
              processing.translate(this.radius / -2, this.radius / -2);
              processing.rect(0,0, this.radius, this.radius);
            processing.popMatrix();
          };
          this.bounce = function() {
            // bounce
            if (this.position.y > height) {
              this.position.y = height;
              this.velocity.times(new Vector(1, -1));
              this.damage();
            }
            if (this.position.y < 0) {
              this.position.y = 0;
              this.velocity.times(new Vector(1, -1));
              this.damage();
            }
            if (this.position.x > width) {
              this.position.x = width;
              this.velocity.times(new Vector(-1, 1));
              this.damage();
            }
            if (this.position.x < 0) {
              this.position.x = 0;
              this.velocity.times(new Vector(-1, 1));
              this.damage();
            }
          };
          this.damage = function() {
            this.rotVelocity = - this.rotVelocity;
          };
        }

        processing.setup = function() {
          processing.noStroke();
          processing.textSize(32);
          processing.colorMode(processing.HSB, 360, 100, 100, 1);


        };

        newPony = function(position, velocity, rotVelocity, hue) {
          var pony = new Pony(position, velocity, rotVelocity);
          console.log(pony);
          ponies.push(pony);
        };

        processing.draw = function() {
          params = Params.getParams();
          processing.background(0,0,100, 0);
          for (var pony in ponies) {
            ponies[pony].update();
            ponies[pony].draw();
          }
          if (processing.frameCount % 2 === 0) {
            if (processing.frameCount < 500) {
              var velocity = new Vector((params[0].value / 127) * 10 - 5, (params[1].value / 127) * 10 - 5);
              var rotVelocity = (params[2].value / 127) * 10 - 5;
              var hue = (params[3].value / 127) * 360;
              newPony(new Vector(halfWidth, halfHeight), velocity, rotVelocity, hue);
            }
            if (bMouse === true) {
              var velocity = new Vector((params[0].value / 127) * 10 - 5, (params[1].value / 127) * 10 - 5);
              var rotVelocity = (params[2].value / 127) * 10 - 5;
              var hue = (params[3].value / 127) * 360;
              newPony(new Vector(processing.mouseX, processing.mouseY), velocity, rotVelocity, hue);
            }
          }
        };

        processing.keyPressed = function() {
          switch(processing.key.toString()) {
            case 'c':
            case 'C':
              ponies = [];
              break;
            case 't':
            case 'T':
              bTrans = !bTrans;
              break;
          }
          console.log(processing.key);
        };

        processing.mousePressed = function() {
          bMouse = true;
        };

        processing.mouseReleased = function() {
          bMouse = false;
        };

      };

      // attach the sketch function to the canvas
      processingInstance = new Processing(document.getElementById('squares'), drawerSketch);
    };

    API.destroy = function() {
      $('#squares').remove();
    };

    return API;
  }
);
