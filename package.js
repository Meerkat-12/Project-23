class package {
    constructor(){
        var package_options = {
            restitution : 2,
            friction : 0.5,
            isStatic : true
             }
        this.body = Bodies.rectangle(x,y,width,height, package_options);
        this.width = width;
        this.height = height;
    }
}