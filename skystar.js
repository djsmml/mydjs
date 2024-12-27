// poem
var words=[
    '夏天的飞鸟，飞到我的窗前唱歌，又飞去了',
    '秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里',
    '世界对着它的爱人，把它浩翰的面具揭下了',
    '是大地的泪点，使她的微笑保持着青春不谢',
    '如果你因失去了太阳而流泪，那么你也将失去群星了',
    '生如夏花之绚烂，死如秋叶之静美',
    '我们把世界看错，反说它欺骗了我们',
    '愿为江水',
    '与君重逢',
    '天空中没有留下鸟的痕迹，但我已飞过',
    '思之若狂',
    '好想回到那个夏天',
    '世界上那些漂泊的灵魂啊，请在我的心田里留下你们的足迹',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我的存在，对我是一个永久的神奇，这就是生活',
    '料青山见我也应如是',
    '因为你，我多少适应了这个世界',
    '我不能选择那最好的，是那最好的选择我',
    '那些把灯背在背上的人，把他们的影子投到了自己前面',
    '创造的神秘，有如夜间的黑暗——是伟大的',
    '知识的幻影却不过如晨间之雾',
    '绿叶在恋爱时变成了花，花在崇拜时变成了果实',
    '信念是鸟，它在黎明仍然黑暗之际，感觉到了光明，唱出了歌',
    '纵然伤心，也不要愁眉不展，因为你不知是谁会爱上你的笑容',
    '夏天的飞鸟，飞到我的窗前唱歌，又飞去了',
    '秋天的黄叶，它们没有什么可唱，只叹息一声，飞落在那里',
    '世界对着它的爱人，把它浩翰的面具揭下了',
    '是大地的泪点，使她的微笑保持着青春不谢',
    '如果你因失去了太阳而流泪，那么你也将失去群星了',
    '生如夏花之绚烂，死如秋叶之静美',
    '我们把世界看错，反说它欺骗了我们',
    '愿为江水',
    '与君重逢',
    '天空中没有留下鸟的痕迹，但我已飞过',
    '思之若狂',
    '好想回到那个夏天',
    '世界上那些漂泊的灵魂啊，请在我的心田里留下你们的足迹',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我的存在，对我是一个永久的神奇，这就是生活',
    '料青山见我也应如是',
    '因为你，我多少适应了这个世界',
    '我不能选择那最好的，是那最好的选择我',
    '那些把灯背在背上的人，把他们的影子投到了自己前面',
    '创造的神秘，有如夜间的黑暗——是伟大的',
    '知识的幻影却不过如晨间之雾',
    '绿叶在恋爱时变成了花，花在崇拜时变成了果实',
    '信念是鸟，它在黎明仍然黑暗之际，感觉到了光明，唱出了歌',
    '纵然伤心，也不要愁眉不展，因为你不知是谁会爱上你的笑容'
    
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '你若盛开，清风自来';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '时至今日';
        texttwo.innerHTML = '你依然';
        textthree.innerHTML = '是我心里的光';
      },112500)


 
