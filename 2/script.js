function Tamagochy() {
  this.prop = {
    happy: 100,
    tired: 0,
    hangry: 0,
    boring: 0,
    scared: false,
    sad: 0,
  };
  this.ishappy = () => {
   this.prop.happy += 10;  
  };
  this.ishangry = () => {
    this.prop.hangry -= 10; 
  }; 
  this.istired = () => {
    this.prop.tired -= 10; 
  }; 
  this.isboring = () => {
    this.prop.boring -= 10; 
  }; 
  this.isscared = () => {
   this.prop.scared = false
  }; 
  this.issad = () => {
    this.prop.sad -= 10;
  };
  let count;
  function goOut() {
     clearInterval(count)  
     // this.prop = null;
     return null 
  }  
  this.start = () => {
    count = setInterval(() =>{
        this.prop.happy -= 10;
        if (this.prop.happy < 50) {console.log('I am crying');}
        this.prop.hangry += 10; 
        if (this.prop.hangry > 50) {console.log('FEED ME!!!');  }
         this.prop.tired += 10; 
        if (this.prop.tired > 50) {console.log('I am tired'); }
         this.prop.boring += 10; 
        if (this.prop.boring > 50) {console.log('Play with me'); }
         this.prop.sad += 10;
         if (this.prop.sad < 50) {console.log('Walk with me')}  
         this.prop.scared = Math.round(Math.random());
         if (this.prop.scared) {console.log('I am scared')}  
         if (!this.prop.happy || this.prop.tired > 90 || this.prop.sad > 80 ) {
         console.log(` ------- goOut ---------
              happy:  ${this.prop.happy}
              tired:  ${this.prop.tired}
              sad:    ${this.prop.sad}
              `) ;
             goOut();
         }
          console.log(`
              hangry: ${this.prop.hangry}
              happy:  ${this.prop.happy}
              tired:  ${this.prop.tired}
              boring: ${this.prop.boring}
              scared: ${this.prop.scared}
              sad:    ${this.prop.sad}
              `)     
       }, 1000)
    }
}


function water(arr) {
  let i = 0
  let j = arr.length
  let sum = 0
  while (i < j) {
    max = arr[i]
    next = arr[i++]
    if (max > next) {
      sum += max - next
    } else {
      max = next
      if (i < j - 1) {
        next = arr[i++]
      } else {
        break
      }
    }
  }
  return sum
}