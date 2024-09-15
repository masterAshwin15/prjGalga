   /*
        Ashwin, Harshaan, Evan
        2021-01-28
        Gamepage
        This is the Phaser code for out galaga game. The Phaser code includes the code for our title scene, main game scene, boss scene, and end game scene  
   */

   //worker comments
   /*Harshaan Mahendran 2021-01-07 7:55pm Work on game movement*/
   /*Harshaan Mahendran 2021-01-08 6:52pm Work on game movement and shooting*/
   /*Harshaan Mahendran 2021-01-09 6:28pm Work on game movement and shooting*/
   /*Harshaan Mahendran 2021-01-10 7:01pm Work on background screen and game*/
   /*Harshaan Mahendran 2021-01-11 6:55pm Work on game and linking*/
   /*Harshaan Mahendran 2021-01-12 4:45pm Work on game*/
   /*Harshaan Mahendran 2021-01-13 1:35pm Work on game*/
   /*Harshaan Mahendran 2021-01-13 6:05pm Work on cpu projectile fireing*/
   /*Harshaan Mahendran 2021-01-14 11:01am Work on game*/
   /*Harshaan Mahendran 2021-01-14 7:09pm Work on game*/
   /*Harshaan Mahendran 2021-01-15 9:35am Work on game*/
   /*Harshaan Mahendran 2021-01-16 4:11pm Work on game*/
   /*Harshaan Mahendran 2021-01-17 6:40pm Work on game*/
   /*Harshaan Mahendran 2021-01-18 7:33pm Work on game*/
   /*Harshaan Mahendran 2021-01-19 10:01am Work on game*/
   /*Harshaan Mahendran 2021-01-19 5:26pm Work on game*/
   /*Harshaan Mahendran 2021-01-20 9:35am Work on game*/
   /*Harshaan Mahendran 2021-01-20 7:20pm Work on game*/
   /*Harshaan Mahendran 2021-01-21 9:32am Work on game*/
   /*Harshaan Mahendran 2021-01-21 7:28pm Work on game*/
   /*Harshaan Mahendran 2021-01-22 10:07am Prepare for Submission of Code*/
   /*Harshaan Mahendran 2021-01-23 4:10pm Work on game*/
   /*Harshaan Mahendran 2021-01-24 5:00pm Work on game*/
   /*Harshaan Mahendran 2021-01-25 10:00am Work on game*/
   /*Harshaan Mahendran 2021-01-26 9:20am Final Game Touches*/
   /*Harshaan Mahendran 2021-01-26 5:45pm Final Game Touches*/
   /*Harshaan Mahendran 2021-01-27 10:10am Final Game Touches*/
   /*Ashwin Vigneswaramoorthy 2021-01-09 8:25 PM Work on implimenting game audio*/
   /*Ashwin Vigneswaramoorthy 2021-01-09 7:01 PM Work on updating score and lives constantly*/
   /*Ashwin Vigneswaramoorthy 2021-01-10 6:45 PM Work on making all sprites transparent*/
   /*Ashwin Vigneswaramoorthy 2021-01-12 5:07 PM Work on game*/
   /*Ashwin Vigneswaramoorthy 2021-01-13 6:05 PM Work on animating sprites*/
   /*Ashwin Vigneswaramoorthy 2021-01-15 9:40 AM Work on game */
   /*Ashwin Vigneswaramoorthy 2021-01-14 7:09 PM Work on switching scenes between game and boss */
   /*Ashwin Vigneswaramoorthy 2021-01-15 9:42 AM Work on game*/
   /*Ashwin Vigneswaramoorthy 2021-01-16 5:10 PM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-17 6:37 PM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-18 7:21 PM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-19 11:05 AM Work on documentation for all parameters of the assignment*/
   /*Ashwin Vigneswaramoorthy 2021-01-19 5:07 PM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-20 10:02 AM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-20 7:41 PM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-21 9:32 AM Work on animating sprites and creating spritesheets*/
   /*Ashwin Vigneswaramoorthy 2021-01-21 10:07 AM Debugging new bugs and fixing animations to work and preparing for submission*/
   /*Ashwin Vigneswaramoorthy 2021-01-23 9:37 AM Debugging new bugs*/
   /*Ashwin Vigneswaramoorthy 2021-01-25 10:13 AM Work on animating sprites and creating spritesheets and debugging any bugs*/
   /*Ashwin Vigneswaramoorthy 2021-01-26 9:53 AM debugging any bugs*/
   /*Ashwin Vigneswaramoorthy 2021-01-27 10:31 AM Final Game Touches*/

   //TODO fix formatting done
   //TODO Fix Explosion glitch by using new explosion spritesheet 

   /********PLEASE NOTE: Variables were tested in lexical positions in the phaser game, they do not work. Thus, variables are either GLOBAL or LOCAL.********/

   //global variables
   let bug = null; //the bug is to be used in multiple different scenes, hence it is a global variable. For now it is only used in the mainGame scene.
   let hornet = null; //the hornet is to be used in multiple different scenes, hence it is a global variable. For now it is only used in the mainGame scene.
   let squid = null; //the squid is to be used in multiple different scenes, hence it is a global variable. For now it is only used in the mainGame scene.
   let ship = null; //the ship is to be used in multiple different scenes as it is the player's character, hence it is a global variable.
   let bullet = null; //the bullet is to be used in multiple different scenes as it is the player's fireable projectile, hence it is a global variable.
   let leftKey = null; //controls the ship in multiple scenes.
   let rightKey = null; //controls the ship in multiple scenes.
   let upKey = null; //controls the ship in multiple scenes.
   let downKey = null; //controls the ship in multiple scenes.
   let shootKey = null; //controls the projectile firing in multiple scenes.
   let aimKey = null; //controls the projectile aiming process in multiple scenes.
   let startKey = null; //used in the title scene to start the game, thus, it is a global variable.
   let cpuBullet = null; //used in multiple scenes to control the fireballs going horizontally across the screen. For now only used in the mainGame scene.
   let boss = null; //used in multiple boss scenes to represent the boss. For now only used in the boss scene to represent the boss.
   let shotsTaken = null; //used to count all the shots taken in all the scenes. 
   let shotsHit = null; //used to represent the shots that hit objects in all the scenes. 
   let explosionEffect = null; //used as an animated affect when the enemies are destroyed, and when made lexical, it causes bugs in our game
   let dxBoss = 15; //used to represent the movement of the boss on the x-axis. Used in multiple parts of the boss scene, hence is global
   let cpuBullet2 = null; //used in multiple scenes to control the fireballs going horizontally across the screen in the mainGame.
   let cpuBullet3 = null; //used in multiple scenes to control the fireballs going horizontally across the screen in the mainGame.
   let cpuBullet4 = null; //used in multiple scenes to control the fireballs going horizontally across the screen in the mainGame.
   let cpuBullet5 = null; //used in multiple scenes to control the fireballs going horizontally across the screen in the mainGame.
   let cpuBullet6 = null; //used in multiple scenes to control the fireballs going horizontally across the screen in the mainGame.
   let meteor1 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let meteor2 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let meteor3 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let meteor4 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let meteor5 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let meteor6 = null; //used in multiple scenes to control the meteors going vertically across the screen in the mainGame.
   let blackHole = null; //used in multiple scenes to control the black hole in the mainGame scene.
   let blackHoleSuction = null; //used in multiple scenes to control the black hole suction of the ship. For now only used in the mainGame scene.

   //call function
   let _thisMainGame = null; //used in mainGame scene to call functions
   let _thisMainGame2 = null; //used in mainGame2 scene to call functions
   let _thisMainGame3 = null; //used in mainGame3 scene to call functions
   let _thisMainGame4 = null; //used in mainGame4 scene to call functions
   let _thisBossScene = null; //used in boss scene to call functions
   let _thisBossScene2 = null; //used in boss scene 2 to call functions
   let _thisBossScene3 = null; //used in boss scene 3 to call functions
   let _thisEndScene = null; //used in end scene to call functions

   //variables to store game info
   let lives = 5; //used to contain lives in multiple scenes.
   let score = 0; //used to contain score
   let score2 = 0; //used to contain score
   let score3 = 0; //used to contain score
   let score4 = 0; //used to contain score
   let finalScore = 0; //used to contain finalScore, basically the sum of all three scores. 
   let bossHp = 500; //We are going to have multiple boss scenes where the difficulty slowly increases, so all boss scenes needs access to this variable
   let bossHp2 = 500; //We are going to have multiple boss scenes where the difficulty slowly increases, so all boss scenes needs access to this variable
   let bossHp3 = 500; //We are going to have multiple boss scenes where the difficulty slowly increases, so all boss scenes needs access to this variable

   /*********Scores Array, this array stores each score variable from all three waves*********/
   let scores = []; //is global so mainGame and bossScene can have access to this array to store the scores between switching scenes. Stores the scores and is used to calculate the finalScore at the end.

   //variables to store text objects on our game screen
   let txtLives; //txtLives is accessed through the mainGame and bossScene, as it is needed as conditions to lose the game
   let txtScore; //txtScore is accessed through all scenes beside titleScene, as the objective is to beat the score, and the score is accessed through all scenes to keep track and finally display in the endGame scene
   let txtBossHp; //txtBossHp is accessed in the Boss Scene. Since it is acessed in multiple parts of the scene, it is declared globally. 

   //sound effect variables
   let shipShooting = null; //the ship can shoot projectiles when playing the mainGame scene and the bossScene, and therefore is easier to access when made global
   let backgroundMusic = null; //attempted to make this lexical to the mainGame scene and created bugs, therefore it needs to be global
   let shipDestruction = null; //the ship can be destroyed through playing the mainGame scene and the bossScene, and therefore is easier to access when made global
   let enemyDestruction = null; //enemy desctruction sound affects are used between the mainGame scene and the bossScene, and therefore it is easier to access when made as a global variable
   let collision = null; //collision sound affects are used throughout all scenes, therefore it needs to be global
   let titleAudio = null; //attempted to make this lexical to the titleScene and created bugs, therefore it needs to be global
   let gameBackground = null; //attempted to make this lexical to the endGame scene and created bugs, therefore it needs to be global
   let endMusic = null; //attempted to make this lexical to the endGame scene and created bugs, therefore it needs to be global

   /*****CUSTOM FUNCTIONS****/

   /*******Function to Adjust Obstacles (Left): Used in multiple scenes once waves are added in, thus is global********/
   function cpuFireAdjustLeft(proj) {
       proj.x = 0;
       proj.y = Math.round(1 + Math.random() * 900);
   }
   /*******Function to Fire Obstacles (Left): Used in multiple scenes once waves are added in, thus is global********/
   function cpuFireLeft(proj) {
       proj.x += 5;
       if (proj.x > 1900) {
           cpuFireAdjustLeft(proj);
       }
   }
   /*******Function to Adjust Meteors: Used in multiple scenes once waves are added in, thus is global********/
   function cpuMeteorAdjust(proj) {
       proj.y = 0;
       proj.x = Math.round(1 + Math.random() * 1900);
   }
   /*******Function to Move Meteors: Used in multiple scenes once waves are added in, thus is global********/
   function cpuMeteorMovement(proj) {
       proj.y += 5;
       if (proj.y > 900) {
           cpuMeteorAdjust(proj);
       }
   }
   /*******Function to Adjust Obstacles (Right): Used in multiple scenes once waves are added in, thus is global********/
   function cpuFireAdjustRight(proj) {
       proj.x = 1900;
       proj.y = Math.round(1 + Math.random() * 900);
   }
   /*******Function to Fire Obstacles (Right): Used in multiple scenes once waves are added in, thus is global********/
   function cpuFireRight(proj) {
       proj.x -= 5;
       if (proj.x < 0) {
           cpuFireAdjustRight(proj);
       }
   }
   /*******Counter Function for Black Holes: Used in multiple scenes once waves are added in, thus is global********/
   function incrementSeconds() {
       let seconds = 0;
       seconds++;
       if (seconds == 10) {
           blackHoleGenerator();
           seconds == 0;
       }
   }
   /*******Function to Generate Black Holes: Used in multiple scenes once waves are added in, thus is global********/
   function blackHoleGenerator() {
       blackHole.x = 1700;
       blackHole.y = 200;
       ship.x += 10;
       ship.y -= 10;
   }
   /*******Function to Reset Black Holes: Used in multiple scenes once waves are added in, thus is global********/
   function blackHoleReset() {
       blackHole.x = 3000;
       blackHole.y = 3000;
       ship.x += 0;
       ship.y -= 0;
   }
   /*******Function to Add Score if Squid is shot: Used in multiple scenes once waves are added in, thus is global********/
   function addScoreSquid() {
       score += 30;
   }
   /*******Function to Add Score if Bug is shot: Used in multiple scenes once waves are added in, thus is global********/
   function addScoreBug() {
       score += 10;
   }
   /*******Function to Add Score if Hornet is shot: Used in multiple scenes once waves are added in, thus is global********/
   function addScoreHornet() {
       score += 20;
   }
   /*******Function to Switch between Scenes: Used in multiple scenes once waves are added in, thus is global. The boss variation of this function is lexical for now but will become global later********/
   function switchScenes(scene1, scene2) {
       game.scene.remove(scene1);
       game.scene.start(scene2);
       console.log("Starting " + scene2);
   }
   /*******Function for Border Control: Used in multiple scenes, thus is global********/
   function borderControl(obj) {
       if (obj.x > 1900 || obj.x < 0) {
           obj.x = 950;
           obj.y = 750;
       } else if (obj.y > 900 || obj.y < 0) {
           obj.x = 950;
           obj.y = 750;
       }
   }
   /*******Function for Moving Ship: Used in multiple scenes, thus is global********/
   function moveShip(ship, speed) {
       ship.x += speed * 2;
   }
   /*******Function for Moving Bug: Used in multiple scenes once waves are added, thus is global********/
   function moveBug(monster) {
       monster.y += 3;
       if (monster.y > 900) {
           resetMonsterPos(monster);
       }
   }
   /*******Function for Moving Hornet: Used in multiple scenes once waves are added, thus is global********/
   function moveHornet(monster) {
       monster.y += 4;
       if (monster.y > 900) {
           resetMonsterPos(monster);
       }
   }
   /*******Function for Moving Squid: Used in multiple scenes once waves are added, thus is global********/
   function moveSquid(monster) {
       monster.y += 1;
       if (monster.y > 900) {
           resetMonsterPos(monster);
       }
   }
   /*******Function for resetting monster position: Used in multiple scenes once waves are added, thus is global********/
   function resetMonsterPos(monster) {
       let randomX = Phaser.Math.Between(80, 1800);
       monster.x = randomX;
       monster.y = 0;
   }
   /*******Function for Moving when right key bind is pressed: Used in multiple scenes, thus is global********/
   function moveOnKeyRight(object) {
       object.x += 5;
   }
   /*******Function for Moving when left key bind is pressed: Used in multiple scenes, thus is global********/
   function moveOnKeyLeft(object) {
       object.x -= 5;
   }
   /*******Function for Moving when up key bind is pressed: Used in multiple scenes, thus is global********/
   function moveOnKeyUp(object) {
       object.y -= 5;
   }
   /*******Function for Moving when down key bind is pressed: Used in multiple scenes, thus is global********/
   function moveOnKeyDown(object) {
       object.y += 5;
   }
   /*******Function for resetting the projectile when it goes off screen: Used in multiple scenes, thus is global********/
   function resetProjectile(object) {
       object.x = ship.x;
       object.y = ship.y;
   }
   /*******Function for firing the projectile: Used in multiple scenes, thus is global********/
   function fire(object) {
       for (let x = 0; x <= 30; x++) {
           object.y -= 5;
       }
       if (object.y < 0) {
           resetProjectile(object);
       }
   }
   /*******Function for killing the monster: Used in multiple scenes once waves are added, thus is global********/
   function killMonster(monster) {
       monster.x = 100000;
       monster.y = 100000;
   }
   /*******Function for resetting the ship's position when it gets destroyed: Used in multiple scenes, thus is global********/
   function resetShip(sprite1) {
       sprite1.x = 30;
       sprite1.y = 865;
   }
   /*******Function for destroying the ship: Used in multiple scenes, thus is global********/
   function destroyShip(obj) {
       obj.x = 100000;
       obj.y = 100000;
       txtLives = "Game OVER";
   }
   /***********Function for relocating explosion sprite*********/
   function explosionRelocater(obj) {
       explosionEffect.x = obj.x;
       explosionEffect.y = obj.y;
   }
   /*********Function to switch from boss scenes to end scene******/
   function bossToEnd(scene1, scene2) {
       game.scene.remove(scene1);
       game.scene.start(scene2);
       console.log("Starting " + scene2);
   }

   /***********BELOW THIS COMMENT IS THE TITLE SCENE***********/

   class titleScene extends Phaser.Scene {

           constructor() {
                   super(config);
               } //end of constructor

           preload() {
                   //background load in
                   this.load.image("background", "../assets/images/bg.jpg");
                   //audio load in
                   this.load.audio("titleAudio", "../assets/music/titleMusic.mp3");
                   //images load in
                   this.load.image("title", "../assets/titleImages/galagaLogo.png");
               } //end of preload

           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   //images
                   let title = this.physics.add.image(950, 450, "title");
                   //keys
                   startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
                   //text
                   let startButton = this.add.text(675, 700, "Press SPACE To Start", {
                       fontFamily: "Monospace",
                       fontSize: 50,
                       color: "#00ff00"
                   });
                   //audio
                   this.titleAudio = this.sound.add("titleAudio");
                   this.titleAudio.play();
               } //end of create

           update() {
                   //background update
                   this.background.tilePositionY -= 0.5;
                   //keyCheck
                   if (startKey.isDown) {
                       game.scene.start("wave1");
                       game.scene.remove("titleScene");
                       this.titleAudio.pause();
                   }
               } //end of update
               //custom titleScreen functions
       } //end of titleScene

   /***********BELOW THIS COMMENT ARE THE GAME SCENES***********/

   class mainGame extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisMainGame = this;

               } //end of constructor

           preload() {
                   //sprites load in
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("cpuMeteor", "../assets/sprites/meteorSpriteSheet.png", {
                       frameWidth: 100,
                       frameHeight: 120
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.image("blackHole", "../assets/sprites/blackHole.png");
                   this.load.image("cpuProjectile", "../assets/sprites/cpuProj.png");
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("bug", "../assets/sprites/bug.png");
                   this.load.image("hornet", "../assets/sprites/hornet.png");
                   this.load.image("squid", "../assets/sprites/squid.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("bg", "../assets/music/backgroundMusic.mp3");
                   this.load.audio("killEnemy", "../assets/music/kill.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
                   this.load.audio("gameBackground", "../assets/music/gameBackgroundMusic.mp3");
                   this.load.audio("blackHoleSuction", "../assets/music/blackHole.mp3");
               } //end of preload

           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   //addMonsters
                   bug = this.physics.add.image(900, 60, "bug");
                   hornet = this.physics.add.image(700, 60, "hornet");
                   squid = this.physics.add.image(500, 60, "squid");
                   //bug=_this.createMonster("bug");
                   //_this.createMonster(hornet);
                   //_this.createMonster(squid);
                   //otherAddIns
                   blackHole = this.physics.add.image(3000, 3000, "blackHole");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   txtScore = this.add.text(870, 10, "Score:0" + score, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:5", { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   this.shipShooting = this.sound.add("fire");
                   this.backgroundMusic = this.sound.add("bg");
                   this.gameBackground = this.sound.add("gameBackground");
                   this.blackHoleSuction = this.sound.add("blackHoleSuction");
                   this.backgroundMusic.play();
                   //playBackground
                   this.gameBackground.play({ volume: 0.5 });
                   this.enemyDestruction = this.sound.add("killEnemy");
                   this.collision = this.sound.add("collision");
                   //Sprite animations
                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });

                   ship.play("ship_anim");
               } //end of create

           update() {
                   //background update
                   this.background.tilePositionY -= 2;
                   //border control ship
                   borderControl(ship);
                   moveBug(bug);
                   moveHornet(hornet);
                   moveSquid(squid);
                   //blackHole
                   let blackHoleChance = Math.round(1 + Math.random() * 100);
                   if (blackHoleChance == 5) {
                       blackHoleGenerator();
                       this.blackHoleSuction.play({ volume: 0.2 });
                       for (let x = 0; x <= 10000; x++) {
                           let seconds = 0;
                           seconds++;
                       }
                   } else {
                       blackHoleReset();
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   //collisionCheck
                   if (_thisMainGame.collisionChecker(bullet, bug)) {
                       explosionRelocater(bug);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(bug);
                       addScoreBug();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame.collisionChecker(bullet, squid)) {
                       explosionRelocater(squid);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(squid);
                       addScoreSquid();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame.collisionChecker(bullet, hornet)) {
                       explosionRelocater(hornet);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(hornet);
                       addScoreHornet();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   //collision Ship and Monster
                   if (_thisMainGame.collisionChecker(ship, bug)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(bug);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame.collisionChecker(ship, hornet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(hornet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame.collisionChecker(ship, squid)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(squid);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //Switch is lives=0
                   console.log(lives);
                   if (lives <= 0) {
                       switchScenes("wave1", "endScene");
                       this.gameBackground.pause();
                   }
                   //Switch if score>=500
                   if (score >= 500) {
                       switchScenes("wave1", "bossScene");
                   }
               } //end of update
               //custom function 
               /*******Function for collision checks between sprites and projectiles: Used locally because when used globally a bug is created********/
           collisionChecker(sprite1, sprite2) {
               return this.physics.world.overlap(sprite1, sprite2);
           }
       } //end of mainGame scene

   class mainGame2 extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisMainGame2 = this;

               } //end of constructor

           preload() {
                   //sprites load in
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.spritesheet("fireProjectile", "../assets/sprites/fireSpriteSheet.png", {
                       frameWidth: 75,
                       frameHeight: 70
                   });



                   this.load.image("blackHole", "../assets/sprites/blackHole.png");
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("bug", "../assets/sprites/bug.png");
                   this.load.image("hornet", "../assets/sprites/hornet.png");
                   this.load.image("squid", "../assets/sprites/squid.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("bg", "../assets/music/backgroundMusic.mp3");
                   this.load.audio("killEnemy", "../assets/music/kill.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
                   this.load.audio("gameBackground", "../assets/music/gameBackgroundMusic.mp3");
                   this.load.audio("blackHoleSuction", "../assets/music/blackHole.mp3");
               } //end of preload

           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   //addMonsters
                   bug = this.physics.add.image(900, 60, "bug");
                   hornet = this.physics.add.image(700, 60, "hornet");
                   squid = this.physics.add.image(500, 60, "squid");
                   //bug=_this.createMonster("bug");
                   //_this.createMonster(hornet);
                   //_this.createMonster(squid);
                   //otherAddIns
                   blackHole = this.physics.add.image(3000, 3000, "blackHole");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   cpuBullet = this.physics.add.sprite(0, 750, "fireProjectile");
                   cpuBullet2 = this.physics.add.sprite(1900, 550, "fireProjectile");
                   cpuBullet3 = this.physics.add.sprite(0, 350, "fireProjectile");
                   cpuBullet4 = this.physics.add.sprite(1900, 150, "fireProjectile");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   txtScore = this.add.text(870, 10, "Score:0" + score, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   this.shipShooting = this.sound.add("fire");
                   this.backgroundMusic = this.sound.add("bg");
                   this.gameBackground = this.sound.add("gameBackground");
                   this.blackHoleSuction = this.sound.add("blackHoleSuction");
                   this.enemyDestruction = this.sound.add("killEnemy");
                   this.collision = this.sound.add("collision");
                   //Sprite animations
                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "cpuProjectile_anim",
                       frames: this.anims.generateFrameNumbers("fireProjectile", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });

                   ship.play("ship_anim");

                   cpuBullet.play("cpuProjectile_anim");
                   cpuBullet2.play("cpuProjectile_anim");
                   cpuBullet3.play("cpuProjectile_anim");
                   cpuBullet4.play("cpuProjectile_anim");

               } //end of create

           update() {
                   //background update
                   this.background.tilePositionY -= 4;
                   //border control ship
                   borderControl(ship);
                   moveBug(bug);
                   cpuFireLeft(cpuBullet);
                   cpuFireRight(cpuBullet2);
                   cpuFireLeft(cpuBullet3);
                   cpuFireRight(cpuBullet4);
                   moveHornet(hornet);
                   moveSquid(squid);
                   //blackHole
                   let blackHoleChance = Math.round(1 + Math.random() * 100);
                   if (blackHoleChance == 5) {
                       blackHoleGenerator();
                       this.blackHoleSuction.play({ volume: 0.2 });
                       for (let x = 0; x <= 10000; x++) {
                           let seconds = 0;
                           seconds++;
                       }
                   } else {
                       blackHoleReset();
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   //collisionCheck
                   if (_thisMainGame2.collisionChecker(bullet, bug)) {
                       explosionRelocater(bug);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(bug);
                       addScoreBug();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame2.collisionChecker(bullet, squid)) {
                       explosionRelocater(squid);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(squid);
                       addScoreSquid();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame2.collisionChecker(bullet, hornet)) {
                       explosionRelocater(hornet);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(hornet);
                       addScoreHornet();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   //collision Ship and Monster
                   if (_thisMainGame2.collisionChecker(ship, bug)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(bug);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame2.collisionChecker(ship, hornet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(hornet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame2.collisionChecker(ship, squid)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(squid);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //collision with Obstacles
                   if (_thisMainGame2.collisionChecker(ship, cpuBullet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame2.collisionChecker(ship, cpuBullet2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame2.collisionChecker(ship, cpuBullet3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame2.collisionChecker(ship, cpuBullet4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //Switch is lives=0
                   console.log(lives);
                   if (lives <= 0) {
                       switchScenes("wave2", "endScene");
                       this.gameBackground.pause();
                   }
                   //Switch if score>=500
                   if (score >= 500) {
                       switchScenes("wave2", "bossScene2");
                   }
               } //end of update
               //custom function 
               /*******Function for collision checks between sprites and projectiles: Used locally because when used globally a bug is created********/
           collisionChecker(sprite1, sprite2) {
               return this.physics.world.overlap(sprite1, sprite2);
           }
       } //end of mainGame2 scene

   class mainGame3 extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisMainGame3 = this;

               } //end of constructor

           preload() {
                   //sprites load in
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("cpuMeteor", "../assets/sprites/meteorSpriteSheet.png", {
                       frameWidth: 100,
                       frameHeight: 120
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.spritesheet("fireProjectile", "../assets/sprites/fireSpriteSheet.png", {
                       frameWidth: 75,
                       frameHeight: 70
                   });


                   this.load.image("blackHole", "../assets/sprites/blackHole.png");
                   this.load.image("cpuProjectile", "../assets/sprites/cpuProj.png");
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("bug", "../assets/sprites/bug.png");
                   this.load.image("hornet", "../assets/sprites/hornet.png");
                   this.load.image("squid", "../assets/sprites/squid.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("bg", "../assets/music/backgroundMusic.mp3");
                   this.load.audio("killEnemy", "../assets/music/kill.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
                   this.load.audio("gameBackground", "../assets/music/gameBackgroundMusic.mp3");
                   this.load.audio("blackHoleSuction", "../assets/music/blackHole.mp3");
               } //end of preload

           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   //addMonsters
                   bug = this.physics.add.image(900, 60, "bug");
                   hornet = this.physics.add.image(700, 60, "hornet");
                   squid = this.physics.add.image(500, 60, "squid");
                   //otherAddIns
                   blackHole = this.physics.add.image(3000, 3000, "blackHole");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   cpuBullet = this.physics.add.sprite(0, 750, "fireProjectile");
                   cpuBullet2 = this.physics.add.sprite(1900, 550, "fireProjectile");
                   cpuBullet3 = this.physics.add.sprite(0, 350, "fireProjectile");
                   cpuBullet4 = this.physics.add.sprite(1900, 150, "fireProjectile");
                   meteor1 = this.physics.add.sprite(200, 0, "cpuMeteor");
                   meteor2 = this.physics.add.sprite(500, 0, "cpuMeteor");
                   meteor3 = this.physics.add.sprite(800, 0, "cpuMeteor");
                   meteor4 = this.physics.add.sprite(1100, 0, "cpuMeteor");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   txtScore = this.add.text(870, 10, "Score:0" + score, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   this.shipShooting = this.sound.add("fire");
                   this.backgroundMusic = this.sound.add("bg");
                   this.gameBackground = this.sound.add("gameBackground");
                   this.blackHoleSuction = this.sound.add("blackHoleSuction");
                   this.enemyDestruction = this.sound.add("killEnemy");
                   this.collision = this.sound.add("collision");
                   //Sprite animations
                   this.anims.create({
                       key: "cpuMeteor_anim",
                       frames: this.anims.generateFrameNumbers("cpuMeteor", { start: 0, end: 2 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });

                   this.anims.create({
                       key: "cpuProjectile_anim",
                       frames: this.anims.generateFrameNumbers("fireProjectile", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   ship.play("ship_anim");
                   meteor1.play("cpuMeteor_anim");
                   meteor2.play("cpuMeteor_anim");
                   meteor3.play("cpuMeteor_anim");
                   meteor4.play("cpuMeteor_anim");
                   cpuBullet.play("cpuProjectile_anim");
                   cpuBullet2.play("cpuProjectile_anim");
                   cpuBullet3.play("cpuProjectile_anim");
                   cpuBullet4.play("cpuProjectile_anim");


               } //end of create

           update() {
                   //background update
                   this.background.tilePositionY -= 6;
                   //border control ship
                   borderControl(ship);
                   moveBug(bug);
                   cpuFireLeft(cpuBullet);
                   cpuFireRight(cpuBullet2);
                   cpuFireLeft(cpuBullet3);
                   cpuFireRight(cpuBullet4);
                   cpuMeteorMovement(meteor1);
                   cpuMeteorMovement(meteor2);
                   cpuMeteorMovement(meteor3);
                   cpuMeteorMovement(meteor4);
                   moveHornet(hornet);
                   moveSquid(squid);
                   //blackHole
                   let blackHoleChance = Math.round(1 + Math.random() * 100);
                   if (blackHoleChance == 5) {
                       blackHoleGenerator();
                       this.blackHoleSuction.play({ volume: 0.2 });
                       for (let x = 0; x <= 10000; x++) {
                           let seconds = 0;
                           seconds++;
                       }
                   } else {
                       blackHoleReset();
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   //collisionCheck
                   if (_thisMainGame3.collisionChecker(bullet, bug)) {
                       explosionRelocater(bug);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(bug);
                       addScoreBug();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame3.collisionChecker(bullet, squid)) {
                       explosionRelocater(squid);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(squid);
                       addScoreSquid();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame3.collisionChecker(bullet, hornet)) {
                       explosionRelocater(hornet);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(hornet);
                       addScoreHornet();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   //collision Ship and Monster
                   if (_thisMainGame3.collisionChecker(ship, bug)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(bug);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, hornet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(hornet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, squid)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(squid);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //collision with Obstacles
                   if (_thisMainGame3.collisionChecker(ship, cpuBullet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, cpuBullet2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, cpuBullet3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, cpuBullet4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, meteor1)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor1);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, meteor2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, meteor3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame3.collisionChecker(ship, meteor4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //Switch is lives=0
                   console.log(lives);
                   if (lives <= 0) {
                       switchScenes("wave3", "endScene");
                       this.gameBackground.pause();
                   }
                   //Switch if score>=500
                   if (score >= 500) {
                       bossHp3 == 500;
                       switchScenes("wave3", "bossScene3");
                   }
               } //end of update
               //custom function 
               /*******Function for collision checks between sprites and projectiles: Used locally because when used globally a bug is created********/
           collisionChecker(sprite1, sprite2) {
               return this.physics.world.overlap(sprite1, sprite2);
           }
       } //end of mainGame3 scene

   class mainGame4 extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisMainGame4 = this;

               } //end of constructor

           preload() {
                   //sprites load in
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("cpuMeteor", "../assets/sprites/meteorSpriteSheet.png", {
                       frameWidth: 100,
                       frameHeight: 120
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.spritesheet("fireProjectile", "../assets/sprites/fireSpriteSheet.png", {
                       frameWidth: 75,
                       frameHeight: 70
                   });


                   this.load.image("blackHole", "../assets/sprites/blackHole.png");
                   this.load.image("cpuProjectile", "../assets/sprites/cpuProj.png");
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("bug", "../assets/sprites/bug.png");
                   this.load.image("hornet", "../assets/sprites/hornet.png");
                   this.load.image("squid", "../assets/sprites/squid.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("bg", "../assets/music/backgroundMusic.mp3");
                   this.load.audio("killEnemy", "../assets/music/kill.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
                   this.load.audio("gameBackground", "../assets/music/gameBackgroundMusic.mp3");
                   this.load.audio("blackHoleSuction", "../assets/music/blackHole.mp3");
               } //end of preload

           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   //addMonsters
                   bug = this.physics.add.image(900, 60, "bug");
                   hornet = this.physics.add.image(700, 60, "hornet");
                   squid = this.physics.add.image(500, 60, "squid");
                   //otherAddIns
                   blackHole = this.physics.add.image(3000, 3000, "blackHole");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   cpuBullet = this.physics.add.sprite(0, 750, "fireProjectile");
                   cpuBullet2 = this.physics.add.sprite(1900, 550, "fireProjectile");
                   cpuBullet3 = this.physics.add.sprite(0, 350, "fireProjectile");
                   cpuBullet4 = this.physics.add.sprite(1900, 150, "fireProjectile");
                   cpuBullet5 = this.physics.add.sprite(0, 850, "fireProjectile");
                   cpuBullet6 = this.physics.add.sprite(1900, 750, "fireProjectile");
                   meteor1 = this.physics.add.sprite(200, 0, "cpuMeteor");
                   meteor2 = this.physics.add.sprite(500, 0, "cpuMeteor");
                   meteor3 = this.physics.add.sprite(800, 0, "cpuMeteor");
                   meteor4 = this.physics.add.sprite(1100, 0, "cpuMeteor");
                   meteor5 = this.physics.add.sprite(1300, 0, "cpuMeteor");
                   meteor6 = this.physics.add.sprite(1500, 0, "cpuMeteor");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   txtScore = this.add.text(870, 10, "Score:0" + score, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   this.shipShooting = this.sound.add("fire");
                   this.backgroundMusic = this.sound.add("bg");
                   this.gameBackground = this.sound.add("gameBackground");
                   this.blackHoleSuction = this.sound.add("blackHoleSuction");
                   this.enemyDestruction = this.sound.add("killEnemy");
                   this.collision = this.sound.add("collision");
                   //Sprite animations
                   this.anims.create({
                       key: "cpuMeteor_anim",
                       frames: this.anims.generateFrameNumbers("cpuMeteor", { start: 0, end: 2 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });

                   this.anims.create({
                       key: "cpuProjectile_anim",
                       frames: this.anims.generateFrameNumbers("fireProjectile", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   ship.play("ship_anim");
                   meteor1.play("cpuMeteor_anim");
                   meteor2.play("cpuMeteor_anim");
                   meteor3.play("cpuMeteor_anim");
                   meteor4.play("cpuMeteor_anim");
                   meteor5.play("cpuMeteor_anim");
                   meteor6.play("cpuMeteor_anim");
                   cpuBullet.play("cpuProjectile_anim");
                   cpuBullet2.play("cpuProjectile_anim");
                   cpuBullet3.play("cpuProjectile_anim");
                   cpuBullet4.play("cpuProjectile_anim");
                   cpuBullet5.play("cpuProjectile_anim");
                   cpuBullet6.play("cpuProjectile_anim");


               } //end of create

           update() {
                   //background update
                   this.background.tilePositionY -= 8;
                   //border control ship
                   borderControl(ship);
                   moveBug(bug);
                   cpuFireLeft(cpuBullet);
                   cpuFireRight(cpuBullet2);
                   cpuFireLeft(cpuBullet3);
                   cpuFireRight(cpuBullet4);
                   cpuFireLeft(cpuBullet5);
                   cpuFireRight(cpuBullet6);
                   cpuMeteorMovement(meteor1);
                   cpuMeteorMovement(meteor2);
                   cpuMeteorMovement(meteor3);
                   cpuMeteorMovement(meteor4);
                   cpuMeteorMovement(meteor5);
                   cpuMeteorMovement(meteor6);
                   moveHornet(hornet);
                   moveSquid(squid);
                   //blackHole
                   let blackHoleChance = Math.round(1 + Math.random() * 100);
                   if (blackHoleChance == 5) {
                       blackHoleGenerator();
                       this.blackHoleSuction.play({ volume: 0.2 });
                       for (let x = 0; x <= 10000; x++) {
                           let seconds = 0;
                           seconds++;
                       }
                   } else {
                       blackHoleReset();
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   //collisionCheck
                   if (_thisMainGame4.collisionChecker(bullet, bug)) {
                       explosionRelocater(bug);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(bug);
                       addScoreBug();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame4.collisionChecker(bullet, squid)) {
                       explosionRelocater(squid);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(squid);
                       addScoreSquid();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   if (_thisMainGame4.collisionChecker(bullet, hornet)) {
                       explosionRelocater(hornet);
                       explosionEffect.play("explosion_anim");
                       resetProjectile(bullet);
                       killMonster(hornet);
                       addScoreHornet();
                       txtScore.text = ("Score:" + score);
                       this.enemyDestruction.play();
                       shotsHit++;
                   }
                   //collision Ship and Monster
                   if (_thisMainGame4.collisionChecker(ship, bug)) {
                       explosionRelocater(bug);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(ship);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, hornet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(hornet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, squid)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       resetMonsterPos(squid);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //collision with Obstacles
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet5)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet5);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, cpuBullet6)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet6);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor1)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor1);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor5)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisMainGame4.collisionChecker(ship, meteor6)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //Switch is lives=0
                   console.log(lives);
                   if (lives <= 0) {
                       switchScenes("wave4", "endScene");
                       this.gameBackground.pause();
                   }
               } //end of update
               //custom function 
               /*******Function for collision checks between sprites and projectiles: Used locally because when used globally a bug is created********/
           collisionChecker(sprite1, sprite2) {
               return this.physics.world.overlap(sprite1, sprite2);
           }
       } //end of mainGame4 scene

   /***********BELOW THIS COMMENT IS THE END SCENE***********/

   class endScene extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisEndScene = this;
               } //end of constructor

           preload() {
                   //audio
                   this.load.audio("end", "../assets/music/endSceneMusic.mp3");
                   //images load in
                   this.load.image("title", "../assets/endImages/title.png");
               } //end of preload
           create(data) {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   if (shotsTaken == null) {
                       shotsTaken = 0;
                   }
                   //images
                   let title = this.physics.add.image(950, 250, "title");
                   let end = this.add.text(795, 500, "GAME OVER", {
                       fontFamily: "Monospace",
                       fontSize: 50,
                       color: "#00ff00"
                   });
                   /*********Calls on function to add score variables to score array*********/
                   _thisEndScene.addScoreToArray(score, score2, score3, score4);
                   let finalScoreText = this.add.text(740, 600, "FINAL SCORE: " + finalScore, {
                       fontFamily: "Monospace",
                       fontSize: 50,
                       color: "#00ff00"
                   });
                   let shotsT = this.add.text(740, 700, "Shots Taken: " + shotsTaken, {
                       fontFamily: "Monospace",
                       fontSize: 50,
                       color: "#00ff00"
                   });
                   let shotsH = this.add.text(740, 800, "Shots On Target: " + shotsHit, {
                       fontFamily: "Monospace",
                       fontSize: 50,
                       color: "#00ff00"
                   });
                   //music
                   this.endMusic = this.sound.add("end");
                   this.endMusic.play({ volume: 5 });
               } //end of create
           update() {
                   //background update
                   this.background.tilePositionY -= 0.5;
               } //end of update
               //custom functions
               /*******Adds the score from all scenes to an Array: Only used in this scene, hence is lexical.********/
           addScoreToArray(number1, number2, number3, number4) {
                   /*********Adding To the Score Array*********/
                   scores.push(number1);
                   scores.push(number2);
                   scores.push(number3);
                   scores.push(number4);
                   _thisEndScene.scoreAdder();
               }
               /*******Takes each score from the Array and adds them to a single variable to display in the end scene: Only used in this scene, hence is lexical.********/
           scoreAdder() {
               for (let x = 0; x < scores.length; x++) {
                   /*********Uses Score Array to calculate final score*********/
                   let toAdd = scores[x];
                   finalScore += toAdd;
               }
               return finalScore;
           }
       } //end of endScene scene

   /****************BELOW THIS COMMENT ARE THE BOSS SCENES******************/

   class bossScene extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisBossScene = this;
               } //end of constructor
           preload() {
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("boss", "../assets/sprites/boss.png");
                   this.load.image("ship", "../assets/sprites/ship.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
               } //end of preload
           create() {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   txtBossHp = this.add.text(850, 10, "BOSS HP:" + bossHp, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   boss = this.physics.add.image(950, 300, "boss");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   this.collision = this.sound.add("collision");
                   this.shipShooting = this.sound.add("fire");
                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: 10000
                   });
                   ship.play("ship_anim");
               } //end of create
           update() {
                   //background update
                   this.background.tilePositionY -= 0.5;
                   //border control ship
                   borderControl(ship);
                   _thisBossScene.moveBoss(boss);
                   if (boss.x > 1900 || boss.x < 0) {
                       _thisBossScene.resetMonsterPos(boss);
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   if (_thisBossScene.collisionChecker(bullet, boss)) {
                       resetProjectile(bullet);
                       bossHp -= 20;
                       txtBossHp.text = ("BOSS HP:" + bossHp);
                       shotsHit++;
                   }
                   if (bossHp <= 0) {
                       _thisBossScene.switchScenes("bossScene", "wave2");
                   }
                   if (_thisBossScene.collisionChecker(ship, boss)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (lives <= 0) {
                       bossToEnd("bossScene", "endScene");
                   }
               } //end of update
               //custom functions
               /*******Function for making the CPU Boss move by itself: Used in this scene, thus is lexical.********/
           moveBoss(monster) {
                   monster.x += dxBoss;
               }
               /*******Function for when the monster attempts to go out of boundries, so the direction of the monster switches: Used in this scene, thus is lexical.********/
           resetMonsterPos(monster) {
                   dxBoss *= -1;
               }
               /*******Function for collision checks between sprites and projectiles: Used in this scene, thus is lexical.********/
           collisionChecker(sprite1, sprite2) {
                   return this.physics.world.overlap(sprite1, sprite2);
               }
               /*******Function to Switch between Scenes for Boss Scene: Used in this scene, thus is lexical.********/
           switchScenes(scene1, scene2) {
               game.scene.remove(scene1);
               game.scene.start(scene2);
               score2 = score;
               score = 0;
               console.log("Starting " + scene2);
           }
       } //end of bossScene

   class bossScene2 extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisBossScene2 = this;
               } //end of constructor
           preload() {
                   this.load.spritesheet("fireProjectile", "../assets/sprites/fireSpriteSheet.png", {
                       frameWidth: 75,
                       frameHeight: 70
                   });
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("boss", "../assets/sprites/boss.png");
                   this.load.image("ship", "../assets/sprites/ship.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
               } //end of preload
           create() {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   txtBossHp = this.add.text(850, 10, "BOSS HP:" + bossHp2, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   boss = this.physics.add.image(950, 300, "boss");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   cpuBullet = this.physics.add.sprite(0, 750, "fireProjectile");
                   cpuBullet2 = this.physics.add.sprite(1900, 550, "fireProjectile");
                   cpuBullet3 = this.physics.add.sprite(0, 350, "fireProjectile");
                   cpuBullet4 = this.physics.add.sprite(1900, 150, "fireProjectile");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   this.collision = this.sound.add("collision");
                   this.shipShooting = this.sound.add("fire");
                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: 10000
                   });
                   this.anims.create({
                       key: "cpuProjectile_anim",
                       frames: this.anims.generateFrameNumbers("fireProjectile", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });
                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });
                   ship.play("ship_anim");
                   cpuBullet.play("cpuProjectile_anim");
                   cpuBullet2.play("cpuProjectile_anim");
                   cpuBullet3.play("cpuProjectile_anim");
                   cpuBullet4.play("cpuProjectile_anim");
               } //end of create
           update() {
                   //background update
                   this.background.tilePositionY -= 0.5;
                   cpuFireLeft(cpuBullet);
                   cpuFireRight(cpuBullet2);
                   cpuFireLeft(cpuBullet3);
                   cpuFireRight(cpuBullet4);
                   //border control ship
                   borderControl(ship);
                   _thisBossScene2.moveBoss(boss);
                   if (boss.x > 1900 || boss.x < 0) {
                       _thisBossScene2.resetMonsterPos(boss);
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   if (_thisBossScene2.collisionChecker(bullet, boss)) {
                       resetProjectile(bullet);
                       bossHp2 -= 20;
                       txtBossHp.text = ("BOSS HP:" + bossHp2);
                       shotsHit++;
                   }
                   if (bossHp2 <= 0) {
                       _thisBossScene2.switchScenes("bossScene2", "wave3");
                   }
                   if (_thisBossScene2.collisionChecker(ship, boss)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //collision with Obstacles
                   if (_thisBossScene2.collisionChecker(ship, cpuBullet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene2.collisionChecker(ship, cpuBullet2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene2.collisionChecker(ship, cpuBullet3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene2.collisionChecker(ship, cpuBullet4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (lives <= 0) {
                       bossToEnd("bossScene2", "endScene");
                   }
               } //end of update
               //custom functions
               /*******Function for making the CPU Boss move by itself: Used in this scene, thus is lexical.********/
           moveBoss(monster) {
                   monster.x += dxBoss;
               }
               /*******Function for when the monster attempts to go out of boundries, so the direction of the monster switches: Used in this scene, thus is lexical.********/
           resetMonsterPos(monster) {
                   dxBoss *= -1;
               }
               /*******Function for collision checks between sprites and projectiles: Used in this scene, thus is lexical.********/
           collisionChecker(sprite1, sprite2) {
                   return this.physics.world.overlap(sprite1, sprite2);
               }
               /*******Function to Switch between Scenes for Boss Scene: Used in this scene, thus is lexical.********/
           switchScenes(scene1, scene2) {
               game.scene.remove(scene1);
               game.scene.start(scene2);
               score3 = score;
               score = 0;
               console.log("Starting " + scene2);
           }
       } //end of bossScene2

   class bossScene3 extends Phaser.Scene {

           constructor(config) {
                   super(config);
                   _thisBossScene3 = this;
               } //end of constructor
           preload() {
                   this.load.spritesheet("ship", "../assets/sprites/shipSpriteSheet.png", {
                       frameWidth: 50,
                       frameHeight: 57
                   });
                   this.load.spritesheet("cpuMeteor", "../assets/sprites/meteorSpriteSheet.png", {
                       frameWidth: 100,
                       frameHeight: 120
                   });
                   this.load.spritesheet("explosion", "../assets/sprites/realExplosion.png", {
                       frameWidth: 64,
                       frameHeight: 85
                   });
                   this.load.spritesheet("fireProjectile", "../assets/sprites/fireSpriteSheet.png", {
                       frameWidth: 75,
                       frameHeight: 70
                   });
                   this.load.image("bullet", "../assets/sprites/bullet.png");
                   this.load.image("boss", "../assets/sprites/boss.png");
                   this.load.image("ship", "../assets/sprites/ship.png");
                   this.load.audio("fire", "../assets/music/galagaShoot.mp3");
                   this.load.audio("collision", "../assets/music/collision.mp3");
               } //end of preload
           create() {
                   //background
                   this.background = this.add.tileSprite(950, 450, config.width, config.height, "background");
                   bullet = this.physics.add.image(950, 750, "bullet");
                   txtBossHp = this.add.text(850, 10, "BOSS HP:" + bossHp3, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   txtLives = this.add.text(1000, 10, "Lives:" + lives, { fontFamily: "Monospace", fontSize: 22, color: "#00ff00" });
                   boss = this.physics.add.image(950, 300, "boss");
                   ship = this.physics.add.sprite(950, 750, "ship");
                   leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
                   rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
                   upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
                   aimKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
                   shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
                   downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
                   cpuBullet = this.physics.add.sprite(0, 750, "fireProjectile");
                   cpuBullet2 = this.physics.add.sprite(1900, 550, "fireProjectile");
                   cpuBullet3 = this.physics.add.sprite(0, 350, "fireProjectile");
                   cpuBullet4 = this.physics.add.sprite(1900, 150, "fireProjectile");
                   meteor1 = this.physics.add.sprite(200, 0, "cpuMeteor");
                   meteor2 = this.physics.add.sprite(500, 0, "cpuMeteor");
                   meteor3 = this.physics.add.sprite(800, 0, "cpuMeteor");
                   meteor4 = this.physics.add.sprite(1100, 0, "cpuMeteor");
                   explosionEffect = this.physics.add.sprite(5000, 5000, "explosion");
                   this.collision = this.sound.add("collision");
                   this.shipShooting = this.sound.add("fire");

                   this.anims.create({
                       key: "ship_anim",
                       frames: this.anims.generateFrameNumbers("ship", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: 10000
                   });

                   this.anims.create({
                       key: "cpuMeteor_anim",
                       frames: this.anims.generateFrameNumbers("cpuMeteor", { start: 0, end: 2 }),
                       frameRate: 7,
                       repeat: -1
                   });

                   this.anims.create({
                       key: "explosion_anim",
                       frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 16 }),
                       frameRate: 15,
                       repeat: 0
                   });

                   this.anims.create({
                       key: "cpuProjectile_anim",
                       frames: this.anims.generateFrameNumbers("fireProjectile", { start: 0, end: 3 }),
                       frameRate: 7,
                       repeat: -1
                   });
                   ship.play("ship_anim");
                   meteor1.play("cpuMeteor_anim");
                   meteor2.play("cpuMeteor_anim");
                   meteor3.play("cpuMeteor_anim");
                   meteor4.play("cpuMeteor_anim");
                   cpuBullet.play("cpuProjectile_anim");
                   cpuBullet2.play("cpuProjectile_anim");
                   cpuBullet3.play("cpuProjectile_anim");
                   cpuBullet4.play("cpuProjectile_anim");
               } //end of create
           update() {
                   //background update
                   this.background.tilePositionY -= 0.5;

                   cpuFireLeft(cpuBullet);
                   cpuFireRight(cpuBullet2);
                   cpuFireLeft(cpuBullet3);
                   cpuFireRight(cpuBullet4);
                   cpuMeteorMovement(meteor1);
                   cpuMeteorMovement(meteor2);
                   cpuMeteorMovement(meteor3);
                   cpuMeteorMovement(meteor4);

                   //border control ship
                   borderControl(ship);
                   _thisBossScene3.moveBoss(boss);
                   if (boss.x > 1900 || boss.x + 250 < 0) {
                       _thisBossScene3.resetMonsterPos(boss);
                   }
                   if (leftKey.isDown) {
                       moveOnKeyLeft(ship);
                   }
                   if (rightKey.isDown) {
                       moveOnKeyRight(ship);
                   }
                   if (upKey.isDown) {
                       moveOnKeyUp(ship);
                   }
                   if (downKey.isDown) {
                       moveOnKeyDown(ship);
                   }
                   if (aimKey.isDown) {
                       resetProjectile(bullet, ship);
                   }
                   if (shootKey.isDown) {
                       fire(bullet);
                       this.shipShooting.play();
                       shotsTaken += 1;
                   }
                   if (_thisBossScene3.collisionChecker(bullet, boss)) {
                       resetProjectile(bullet);
                       bossHp3 -= 20;
                       txtBossHp.text = ("BOSS HP:" + bossHp3);
                       shotsHit++;
                   }
                   if (_thisBossScene3.collisionChecker(ship, boss)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   //collision with Obstacles
                   if (_thisBossScene3.collisionChecker(ship, cpuBullet)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, cpuBullet2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, cpuBullet3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustLeft(cpuBullet3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, cpuBullet4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuFireAdjustRight(cpuBullet4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, meteor1)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor1);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, meteor2)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor2);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, meteor3)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor3);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (_thisBossScene3.collisionChecker(ship, meteor4)) {
                       explosionRelocater(ship);
                       explosionEffect.play("explosion_anim");
                       resetShip(ship);
                       cpuMeteorAdjust(meteor4);
                       lives -= 1;
                       txtLives.text = ("Lives: " + lives);
                       this.collision.play();
                   }
                   if (bossHp3 <= 0) {
                       _thisBossScene3.switchScenes("bossScene3", "wave4");
                   }
                   if (lives <= 0) {
                       bossToEnd("bossScene3", "endScene");
                   }
               } //end of update
               //custom functions
               /*******Function for making the CPU Boss move by itself: Used in this scene, thus is lexical.********/
           moveBoss(monster) {
                   monster.x += dxBoss;
               }
               /*******Function for when the monster attempts to go out of boundries, so the direction of the monster switches: Used in this scene, thus is lexical.********/
           resetMonsterPos(monster) {
                   dxBoss *= -1;
               }
               /*******Function for collision checks between sprites and projectiles: Used in this scene, thus is lexical.********/
           collisionChecker(sprite1, sprite2) {
                   return this.physics.world.overlap(sprite1, sprite2);
               }
               /*******Function to Switch between Scenes for Boss Scene: Used in this scene, thus is lexical.********/
           switchScenes(scene1, scene2) {
               game.scene.remove(scene1);
               game.scene.start(scene2);
               score4 = score;
               score = 0;
               console.log("Starting " + scene2);
           }
       } //end of bossScene3

   var config = {
       type: Phaser.AUTO,
       parent: 'phaser-example',
       width: 1900,
       height: 900,
       physics: {
           default: 'arcade',
           arcade: {
               debug: false

           }
       }
   };

   var game = new Phaser.Game(config);

   //scene adding and starting
   game.scene.add("titleScene", titleScene);
   game.scene.add("endScene", endScene);
   game.scene.add("wave1", mainGame);
   game.scene.add("wave2", mainGame2);
   game.scene.add("wave3", mainGame3);
   game.scene.add("wave4", mainGame4);
   game.scene.add("bossScene", bossScene);
   game.scene.add("bossScene2", bossScene2);
   game.scene.add("bossScene3", bossScene3);
   game.scene.start("titleScene");