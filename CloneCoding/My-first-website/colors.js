var Links = {
    SetColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
    console.log(alist[i]);
    alist[i].style.color = color;
    i+=1;}
}}
var Body = {
setColor:function(color){
    document.querySelector('body').style.color = color;},
setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
}
}

function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.SetColor('powderblue');
}   
else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'night';      
   Links.SetColor('blue');

}
}