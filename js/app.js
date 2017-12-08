/**
 * Created by HRH on 2017/6/30
 */
(function(win) {
    'use strict';

    // 设置图片目录（项目根目录）
    // var baseURI = 'http://119.29.149.113/phaser-init'
    var baseURI ='../..'

    //将图片目录放在内存中，方便全局调用
    localStorage.baseURI = baseURI

    //将整个canvas挂载在$('#game-container')元素上
    document.getElementById('game-container').style.height = document.body.clientHeight + 'px';

    //获取屏幕的缩放比
    var Ratio = window.devicePixelRatio

    //获取屏幕的宽和高
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;

    //因为我们在index.html设置了禁止缩放的meta头
    //<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    //所以当我们将屏幕的宽和高直接传入Phaser.Game对象时，浏览器会自动将canvas按屏幕的缩放比缩放，也就是当你的屏幕缩放比是2时，canvas宽高你设置成屏幕的宽高时实际看到的却只有一半，因此相应我们需要将画布放大Ratio倍
    var ww = Ratio * w
    var hh = Ratio * h

    //前两个参数是Phaser要创建的canvas元素的宽高，第三个参数是游戏渲染的引擎，这里让Phaser自己识别设置即可，第四个参数是游戏挂载在哪个元素上
    var game = new Phaser.Game(ww, hh, Phaser.AUTO, 'game-container');

    //
    game.state.add('Boot', Boot)
    game.state.add('Preload', Preload)
    game.state.add('State1', State1)
    game.state.add('State2', State2)

    game.state.start('Boot')

})(window)
