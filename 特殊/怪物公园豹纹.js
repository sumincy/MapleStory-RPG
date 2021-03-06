﻿var maps = Array(953030000, 953040000, 953050000, 954000000, 954010000);
var minLevel = Array(95, 100, 110, 120, 125);
var maxLevel = Array(105, 110, 120, 130, 135);
var id = -1;
function start() {
    var selStr = "你想进入哪个地方？\r\n#b(95级以上135级以下的玩家可以使用)\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "##m" + maps[i] + "# (" + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
    }
    cm.askMenu(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过#b队长#k入场。");
        } else {
            if (cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection]) && cm.allMembersHere()) {
                var em = cm.getEventManager("MonsterPark");
                //id = maps[selection] + cm.getParty().getId();
                for (var i = 0; i < 16; i++) {
                    id = maps[selection] + i;
                    if (em.getInstance("MonsterPark" + id) == null) {
                        break;
                    } else if (i == 15) {
                        id = -1;
                    }
                }
                if (em == null || id == -1) {
                    cm.sendOk("怪物公园里面已经有人了。");
                } else {
                    //cm.setPartyPQLog("MonsterPark");
                    em.startInstance_Party("" + id, cm.getPlayer(), maxLevel[selection]);
                }
            } else {
                cm.sendOk("请确定你组员都在该地图,并且都在等级范围内。");
            }
        }
    }
    cm.dispose();
}