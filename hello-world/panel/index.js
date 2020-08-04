const fs = require("fire-fs"),
    path = require("fire-path");
console.log(Editor.log(fs.readFileSync(Editor.url("packages://hello-world/panel/index.css", "utf8"))));
Editor.Panel.extend({
    style: fs.readFileSync(Editor.url("packages://hello-world/panel/index.css", "utf8")) + "",
    template: fs.readFileSync(Editor.url("packages://hello-world/panel/index.html", "utf8")) + "",
    ready() {
        new window.Vue({
            el: this.shadowRoot,
            data: {
                message: 'Hello World',
                isChecked: false,
                execNode: null
            },
            methods: {
                checkConfirm(val, test) {
                    Editor.log("confirm999!", this.execNode);
                    Editor.Ipc.sendToMain('hello-world:post',
                        JSON.stringify({
                            "isChecked": this.isChecked,
                            "execNode": this.execNode
                        }));
                }
            }
        });
    }
});