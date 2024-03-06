cc.Class({
    extends: cc.Component,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {

    },

    // update (dt) {},

    Load_Scene_1() {
      cc.director.loadScene("Scene_1");
    },
    
    Load_Scene_OrangePlanet() {
      cc.director.loadScene("Scene_OrangePlanet");
    },

    Load_Scene_GreenPlanet() {
      cc.director.loadScene("Scene_GreenPlanet");
    },

    Load_Scene_PurplePlanet() {
      cc.director.loadScene("Scene_PurplePlanet");
    },

});
