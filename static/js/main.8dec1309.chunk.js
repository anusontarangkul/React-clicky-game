(this["webpackJsonpclicky-app"]=this["webpackJsonpclicky-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"pic1","image":"https://cdn.ebaumsworld.com/mediaFiles/picture/604025/86030610.jpg","clicked":false},{"id":2,"name":"pic2","image":"https://origympersonaltrainercourses.co.uk/files/img_cache/2111/450_450__1554909083_gymmeme11.jpg","clicked":false},{"id":3,"name":"pic3","image":"https://i.pinimg.com/originals/73/1e/7f/731e7fdf24c3d51a0cc1d162e574b477.jpg","clicked":false},{"id":4,"name":"pic4","image":"https://pics.me.me/squatting-youre-doing-it-wrong-73-gym-memes-fitness-59122280.png","clicked":false},{"id":5,"name":"pic5","image":"https://i.redd.it/gtpglvo1t3zz.jpg","clicked":false},{"id":6,"name":"pic6","image":"https://i.pinimg.com/originals/57/a9/f3/57a9f3022ed4f936d55bab015f1bba74.jpg","clicked":false},{"id":7,"name":"pic7","image":"https://i.pinimg.com/originals/5e/c0/e0/5ec0e0fffd2aee9d340e798a83162ced.jpg","clicked":false},{"id":8,"name":"pic8","image":"https://i.pinimg.com/originals/f3/a8/28/f3a828668c97fa2ad4e2141ab134fe1d.jpg","clicked":false},{"id":9,"name":"pic9","image":"https://i.pinimg.com/736x/6d/b2/f0/6db2f0cc66cedcca44bf16c66d2848b7.jpg","clicked":false},{"id":10,"name":"pic10","image":"https://i2.wp.com/themodestfitgirl.com/wp-content/uploads/2019/01/other-girls-in-the-gym-meme-min.jpg?resize=429%2C585&ssl=1","clicked":false},{"id":11,"name":"pic11","image":"https://pics.me.me/weird-flex-but-ok-i-forgot-i-made-this-like-37933895.png","clicked":false},{"id":12,"name":"pic12","image":"https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/images/073ab730c300db43a7a815455fad9b9a531d/normal.jpg","clicked":false}]')},,,,,,,,function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){},function(e,i,c){"use strict";c.r(i);var t=c(0),a=c(1),s=c.n(a),n=c(3),r=c.n(n),o=c(4),m=c(5),d=c(8),l=c(7);c(14);var p=function(e){return Object(t.jsx)("div",{className:"wrapper",children:e.children})};c(15);var g=function(e){return Object(t.jsxs)("nav",{className:"nav",children:[Object(t.jsx)("h1",{children:"Gym Memes"}),Object(t.jsx)("h3",{className:"message",children:e.message}),Object(t.jsxs)("h3",{children:["Score: ",e.score," | Top Score: ",e.topScore]})]})};c(16);var h=function(e){return Object(t.jsx)("div",{className:"jumbo",children:Object(t.jsx)("h2",{children:"Click on an image to earn points. If you click on an image twice, you lose!"})})};c(17);c(18);var f=function(e){return Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{onClick:e.handleClick,id:e.id,src:e.imageURL,className:"image-edits",alt:e.alt,"data-id":e.id})})})})},j=c(6),u=(c(19),[]),b=function(e){Object(d.a)(c,e);var i=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(e=i.call.apply(i,[this].concat(a))).state={Memes:j,score:0,highScore:0,message:"Click a picture to start!"},e.handleClick=function(i){var c=i.target.getAttribute("data-id");if(e.setState({message:"Let's play"}),u.includes(c))e.setState({score:0}),e.setState({message:"Incorrect"}),u=[];else{u.push(c);var t=e.state.score+1;e.setState({score:t}),e.setState({message:"Good Job!"}),t>e.state.highScore&&e.setState({highScore:t})}for(var a=e.state.Memes,s=a.length-1;s>0;s--){var n=Math.floor(Math.random()*a.length),r=a[s];a[s]=a[n],a[n]=r}e.setState({Memes:a})},e}return Object(m.a)(c,[{key:"render",value:function(){var e=this;return Object(t.jsxs)(p,{children:[Object(t.jsx)(g,{score:this.state.score,topScore:this.state.highScore,message:this.state.message}),Object(t.jsx)(h,{}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-3",children:this.state.Memes.map((function(i){return Object(t.jsx)(f,{imageURL:i.image,id:i.id,alt:i.name,handleClick:e.handleClick},i.id)}))})})})]})}}]),c}(a.Component);r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(b,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8dec1309.chunk.js.map