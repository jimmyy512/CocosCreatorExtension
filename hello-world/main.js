'use strict';

module.exports = {
    load() {
        // // 当 package 被正确加载的时候执行
        // let fs = require('fs');
        // let path = require('path');
        // // 插件加载后在项目根目录自动创建指定文件夹
        // fs.mkdirSync(path.join(Editor.Project.path, 'myNewFolder'));
        // Editor.success('New folder created!');
    },

    unload() {
    },

    messages: {
        "cool"() {
            Editor.log('open!');
            Editor.Panel.open('hello-world');
        },
        "post": function (event, ...args) {
            Editor.Scene.callSceneScript('hello-world', 'get-canvas-children', ...args, function (err, length) {
                console.log(`get-canvas-children callback : length - ${length}`);
            });
        },
        'say-hello'() {
            Editor.log('Hello Worlderer!');
            Editor.Ipc.sendToPanel('hello-world', 'cool2', 'How are you?', function (error, answer) {
                Editor.log(`response`, answer);
            });
        }
    }
};