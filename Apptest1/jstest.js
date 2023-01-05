var superman = {
 
    heroName: 'Superman',  
   
    sayHello: function() {
        console.log("Hello, I'm " + this.heroName );
    }  
  };
   
  superman.sayHello();  

  var failThis = superman.sayHello;
 
failThis();