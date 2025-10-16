$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(700,650, 200,12);
    createPlatform(500,550,200, 12);
    createPlatform(700,450,200,12);
    createPlatform(400,380,200,12);
    createPlatform(200,300,200,12);
    createPlatform(600,200,200,12);
    createPlatform(100,600,200,12);




    // TODO 3 - Create Collectables
    createCollectable("steve", 180, 530);
    createCollectable("kennedi",450,680);
    createCollectable("max",550,650);



    

    // TODO 4 - Create Cannons

    createCannon("left", 300, 2000)
    createCannon("left", 200, 2000)
    createCannon('left', 100, 2000)



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
