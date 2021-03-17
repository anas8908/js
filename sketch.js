var logo,logoImg,text;
var login,loginImg,login2;
var student,StudentIMG;
var teacher,teacherImg;
var background1;



function preload() {
    logoImg = loadImage("200x200bb.jpg")
    loginImg = loadImage("login-button-png-5.png")
   StudentIMG = loadImage("student-png-pollpath-27.png")
   teacherImg = loadImage("teacher.png")
}
function setup() {
    createCanvas(displayWidth - 20, displayHeight-30);
    

    logo = createSprite(displayWidth - 550, displayHeight-650);
    logo.addAnimation("logo",logoImg);
    logo.scale = 0.5

    login = createSprite(displayWidth - 950, displayHeight-400,50,50);
    login.addAnimation("login",loginImg);
    login.scale = 0.2

    student = createSprite(displayWidth - 800, displayHeight-450,50,50)
    student.addAnimation("student",StudentIMG);
    student.scale = 0.15

    login2 = createSprite(displayWidth - 950, displayHeight-200);
    login2.addAnimation("login",loginImg);
    login2.scale = 0.2

    teacher = createSprite(displayWidth - 800, displayHeight-250,50,50);
    teacher.addAnimation("teacher",teacherImg);
    teacher.scale = 0.2;

    background1 = createSprite(displayWidth,displayHeight,10000,10000);
    background1.shapeColor = "white";
    background1.visible = false;
   
   

    

    
    

    text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650);

    //tex("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650)


}

function draw() {
    background("white");

    
    text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650);
   
    text("Students login here",displayWidth - 1000, displayHeight-500);

    text("Teachers login here",displayWidth - 1000, displayHeight-300);

    text("SCHOOL DIARY",displayWidth - 500, displayHeight-300)

   
   

    if(mousePressedOver(login)) {
      background("white")
      background1.visible = true;

      
         

      this.input = createInput("Username");
        this.input1 = createInput("Password");
        
      this.button = createButton('Login');
      this.greeting = createElement('h2');
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input.visible = false;
  
      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{

        
        
        
        this.value = this.input.value();
        this.greeting.html("Hello " + this.value)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.input.hide();
        this.input1.hide();
      
      

      
    });
      
      }

      if(mousePressedOver(login2)) {
        background("white")
        background1.visible = true;

        

        this.input = createInput("Username");
        this.input1 = createInput("Password");
        
      this.button = createButton('Login');
      this.greeting = createElement('h2');
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input.visible = false;
  
      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{

        
        
        
        this.value = this.input.value();
        this.greeting.html("Hello " + this.value)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.input.hide();
        this.input1.hide();
        
        

        
      });


}

drawSprites();
}