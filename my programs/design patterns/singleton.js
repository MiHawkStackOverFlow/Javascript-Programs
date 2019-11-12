var Singleton = (function() {
    var instance;

    function createInstance() {
       var obj = new Object("Abhishek");
       return obj;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


let object1 = Singleton.getInstance();
let object2 = Singleton.getInstance();
console.log("Is object1 equal to object2 ? ", object1 === object2);
console.log("What is the object1 ", object1);
console.log("What is the object2 ", object2);