﻿/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜 
 */

var a = 0;
var List = Array(
        Array("爆率查询", 5, 0),
        Array("银行管理", 14, 0),
        Array("整形医院", 9, 0),
        Array("武器破功", 1000, 0),
        Array("蜡笔潜能", 1001, 0),
        Array("答    题", 604, 0),
        Array("删除角色", 2000, 0),
        Array("宠物相关", 25, 0),
        Array("寄售系统", 605, 0),
		Array("名匠特效", 2001, 0)
        //Array("全属装备", 606, 0)
        )
var icon = "#fUI/Basic.img/BtMin2/normal/0#";

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var x = 0;
            var text = "#h0#。你好，要什么帮助？\r\n\r\n#b";
            for (var i = 0; i < List.length; i++) {
                if (i != 0 && i % 3 != 0) {
                    text += "  ";
                }
                if (x == 2) {
                    text += "#L" + i + "# " + icon + " " + List[i][0] + "#l\r\n";
                    x = 0;
                } else {
                    text += "#L" + i + "# " + icon + " " + List[i][0] + "#l";
                    x = x + 1
                }
            }
            cm.askMenu(text)
        } else if (a == 1) {
            if (selection == 8) {
                cm.sendStorage();
                cm.dispose();
            } else {
                var sel = List[selection][1];
                cm.dispose();
                cm.openNpc(9900003, sel)
                //cm.setNPC_Mode(0)
            }
        }//a
    }//mode
}//f