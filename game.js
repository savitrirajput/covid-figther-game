function load_images(){
    enemy_image=new Image;
    enemy_image.src="https://www.bing.com/images/search?view=detailV2&ccid=WRJwrRCU&id=60A961A848ED967B55C9A209D4857FA67CF9EC8A&thid=OIP.WRJwrRCUAHZ0hNFtNKaIHQHaEK&mediaurl=https%3a%2f%2fcdn.cnn.com%2fcnnnext%2fdam%2fassets%2f200417125229-01-coronavirus-cdc-image-super-tease.jpg&exph=619&expw=1100&q=corona+virus&simid=608047978009397790&FORM=IRPRST&ck=A4866B7D23EAA071721F5283C99EA817&selectedIndex=1&ajaxhist=0&ajaxserp=0";
   
    player_img= new image;
    player_image.src="";

    gem_image=new image;
    player_image.src="";
}
function init(){
canvas=document.getelementbyid("my canvas")
console.log(canvas)
w=700;
h=400;
canvas.width=w;
canvas.hieght=h;
pen=canvas.getcontext('2d');
console.log(pen);
game_over=false;

e1={
    x:150,
    y=50,
    w=60,
    h=60,
    speed:10,
};
e2={
    x:300,
    y=150,
    w=60,
    h=60,
    speed:30,
};
e3={
    x:450,
    y=20,
    w=60,
    h=60,
    speed:40,
};
enemy[e1,e2,e3];
 player={
    x:20,
    y:h/2,
    w:60,
    h:60,
    speed:20,
    moving:false,
    health=100;
};
     gem={
        x:w-100,
        y:h/2,
        w:60,
        h:60,
     };
     canvas.addEventListener('mousedown',function(){
        console.log("mouse pressed")
        player.moving=true;
     });
     canvas.addEventListener('mousedown',function(){
        console.log("mouse released")
        player.moving=false;
     });

     function isoverlap(rect1,rect2){
        if(rect1.x< rect2.x+rect2.w &&
            rect1.x + rect1.w > rect2.x &&
            rect1.y> rect2.y+rect2.h &&
            rect1.y + rect1.h > rect2.y){
                return true
            }
            return false
     }
}
function draw(){
    pen.clearRect(0,0,w,h);
    pen.fillstyle="red";
    pen.drawImage(enemy_image,box.x,box.y,box.w,box.h);

    pen.drawImage(player_image,player.x,player.y,player.w,player.h);
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);
    for(let i=0;i<enemy.length;i++){
        pen.drawImage(enemy_image,enemy.x,enemy.y,enemy.w,enemy.h);
    }

}
function update(){

    if(player.moving==true){
        player.x += player.speed;
        player.health +=20;
    }
       for(let i=0; i<enemy.length;i++){
        if(overlap(enemy[i], player)){
       player.health -= 50;
       if(player.health<0){
         console.log(player.health);
         game_over=true;
         alert("game_over"+str(player.health));
       }
        }
       }

      if(overlap(player, gem)){
        draw();
        console.log("you won");
        alert("you won!");
        game_over=true;
        return;
      }

    for(let i=0;i<enemy.length;i++){
    enemy[i].y +=enemy[i].speed;
    if(enemy[i].y>h-enemy[i].h || enemy[i].y<0){
        enemy[i].speed*=-1;
    }
}


    box+=box.speed;
    if(box.y>= h-box.h||box.y<0){
        box.speed *=-1;
    }

}
function gameloop(){
    if(game_over==true){
        clearInterval(f);
    }
     dwaw();
     update();
     console.log("in gameloop");
}
load_images();
init();
var f = setinterval(gameloop,100);