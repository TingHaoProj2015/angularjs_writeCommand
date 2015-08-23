(function(){
 var app = angular.module('test',[]);
 app.controller("ReviewController", function(){
    this.review = {};
    this.onwrite=0;
   
     this.addReview = function(product) {
     product.reviews.push(this.review);
     this.review = {};   
};
   
   
    
   
   
   
 });
  
   app.controller("StoreController", function(){
    this.products = gems;
       this.setWrite = function(i) {
    this.onwrite=i;
};
 });
  
  

  
  
  var gems = [
    {
     name: 'test1 Name Awesome Multi-touch Keyboard',
     price: 250.00,
     description: "...",
     onwrite:false,
     reviews: [
           {
           stars: 5,
           body: "I love this product!",
           author: "joe@thomas.com"
           },
           {
           stars: 1,
           body: "This product sucks",
           author: "tim@hater.com"
           } 
      
     ]
    },
    {
     name: 'test2 Name Awesome Multi-touch Keyboard',
     price: 550.00,
     description: "...",
      onwrite:false,
     reviews: [
           {
           stars: 10,
           body: "I love this product!",
           author: "joe@thomas.com"
           },
           {
           stars: 20,
           body: "This product sucks",
           author: "tim@hater.com"
           } 
      
     ]
    }
    
    
  ];
  
  
})();