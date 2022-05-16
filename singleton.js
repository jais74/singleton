const singleton = ( function (){
    let instance;
    function createInstance(){
        if(!instance){
            const object = new Object("i'm an object");
            return object;
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
}
)();