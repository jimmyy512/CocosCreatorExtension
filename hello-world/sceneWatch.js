module.exports = {
    'get-canvas-children': function (event, args) {
        let argsObj = JSON.parse(args);
        Editor.log("scene get-canvas-children:", argsObj);
        var canvas = cc.find('Canvas');


        let findNode = cc.engine.getInstanceById(argsObj.execNode);
        findNode.active = argsObj.isChecked;

        if (event.reply) {
            event.reply(null, canvas.children.length);
        }
    }
};