class Form {
  constructor() {
    this.input = createInput("name" );
    this.input1 = createInput("age");
    this.input2 = createInput("phone number");
    this.input3 = createInput("emailadress");
    this.button = createButton("play");
    this.greeting = createElement("h2");

  }//hide(){
   // this.greeting.hide()
   // this.button.hide()
    //this.input.hide()
    //this.input1.hide()
    ///this.input2.hide()
   // this.input3.hide()
 // }
  display(){
   
    
    var title = createElement('h2')
    var title2 = createElement('h2')
    title2.html("do you think poverty is a problem in India?")
title2 .position(130,0);
   // title.html("Car Racing Game");
  //  title.position(130, 0);
    this.input.position(130, 100);
    this.input1.position(130,130);
    this.input2.position(130,150);
    this.input3.position(130,180);
  this.button.position(250, 200);

   this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
      this.button.hide();

     player.name  = this.input.value();
      player.age = this.input1.value();
      player.phonenunber = this.input2.value();
      player.emailadress = this.input3.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      
    //  this.greeting.html("Hello " + player.name )
    //  this.greeting.position(130, 100)
    });

  }
}
