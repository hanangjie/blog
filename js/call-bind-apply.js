var c={}
function a(){
	this.b=1;
	this.add=function(){
		this.b++;
		console.log(this.b)
	}
}
var c={}
a.call(c)
c.add()
console.log(c.b)

var call = function(context, a){
    var new_func = this.bind(context);
    return new_func(a);
}
var d={
	b:4
}
var e=new a();

e.add.bind(d)