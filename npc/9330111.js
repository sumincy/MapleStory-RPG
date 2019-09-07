﻿var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var status = -1;
var itemList = Array(
        Array(2613050, 350, 1, 1), //枫叶型耳环
        Array(2613051, 500, 1, 1), //枫叶型耳环
        Array(2612061, 350, 1, 1), //可乐耳环
        Array(2612062, 500, 1, 1), //工作人员C的旧收信机
        Array(2616061, 350, 1, 1), //工作人员C的旧收信机
        Array(2616062, 500, 1, 1), //工作人员C的旧收信机
        Array(2615031, 350, 1, 1), //工作人员C钛质收信机
        Array(2615032, 500, 1, 1), //工作人员C钛质收信机
        Array(2046577, 500, 1, 1), //工作人员C钛质收信机
        Array(2046578, 500, 1, 1), //工作人员C钛质收信机
        Array(2046579, 500, 1, 1), //工作人员C钛质收信机
        Array(2046580, 500, 1, 1), //工作人员C钛质收信机
        Array(2046763, 500, 1, 1), //工作人员C钛质收信机
        Array(2046764, 500, 1, 1), //工作人员C钛质收信机
        Array(2046765, 500, 1, 1), //工作人员C钛质收信机
        Array(2046766, 500, 1, 1), //工作人员C钛质收信机
        Array(2047818, 500, 1, 1), //工作人员C钛质收信机
        Array(2046997, 500, 1, 1), //工作人员C钛质收信机
        Array(2046996, 500, 1, 1), //工作人员C钛质收信机
        Array(2046913, 500, 1, 1), //工作人员C钛质收信机
        Array(2046914, 500, 1, 1), //工作人员C钛质收信机
        Array(2046173, 500, 1, 1), //工作人员C钛质收信机
        Array(2612059, 500, 1, 1), 
        Array(2046074, 500, 1, 1), 
        Array(2046075, 500, 1, 1), 
        Array(2046149, 500, 1, 1), 
        Array(2046160, 500, 1, 1), 
        Array(2046006, 500, 1, 1), 
        Array(2046007, 500, 1, 1), 
        Array(2046008, 500, 1, 1), 
        Array(2046009, 500, 1, 1), 
        Array(2046010, 500, 1, 1), 
        Array(2046011, 500, 1, 1), 
        Array(2046106, 500, 1, 1), 
        Array(2046107, 500, 1, 1), 
        Array(2046108, 500, 1, 1), 
        Array(2040006, 500, 1, 1),
        Array(2040007, 500, 1, 1),
        Array(2040303, 500, 1, 1),
        Array(2040403, 500, 1, 1),
        Array(2040506, 500, 1, 1),
        Array(2040507, 500, 1, 1),
        Array(2040603, 500, 1, 1),
        Array(2040709, 500, 1, 1),
        Array(2040710, 500, 1, 1),
        Array(2040711, 500, 1, 1),
        Array(2040806, 500, 1, 1),
        Array(2040903, 500, 1, 1),
        Array(2041024, 500, 1, 1),
        Array(2041025, 500, 1, 1),
        Array(2043003, 500, 1, 1),
        Array(2043103, 500, 1, 1),
        Array(2043203, 500, 1, 1),
        Array(2043303, 500, 1, 1),
        Array(2043703, 500, 1, 1),
        Array(2043803, 500, 1, 1),
        Array(2044003, 500, 1, 1),
        Array(2044019, 500, 1, 1),
        Array(2044103, 500, 1, 1),
        Array(2044203, 500, 1, 1),
        Array(2044303, 500, 1, 1),
        Array(2044403, 500, 1, 1),
        Array(2044503, 500, 1, 1),
        Array(2044603, 500, 1, 1),
        Array(2044703, 500, 1, 1),
        Array(2044815, 500, 1, 1),
        Array(2044908, 500, 1, 1),
        Array(2046109, 500, 1, 1), 
        Array(2046110, 500, 1, 1), 
        Array(2046111, 500, 1, 1), 
        Array(2046213, 500, 1, 1), 
        Array(2046214, 500, 1, 1), 
        Array(2046219, 500, 1, 1), 
        Array(2046220, 500, 1, 1), 
        Array(2046221, 500, 1, 1), 
        Array(2046222, 500, 1, 1), 
        Array(2046308, 500, 1, 1),
        Array(2046309, 500, 1, 1), 
        Array(2046310, 500, 1, 1), 
        Array(2046311, 500, 1, 1), 
        Array(2046312, 500, 1, 1), 
        Array(2046313, 500, 1, 1),  
        Array(2043108, 500, 1, 1), 
        Array(2043208, 500, 1, 1),
        Array(2043308, 500, 1, 1),
        Array(2043408, 500, 1, 1),
        Array(2043508, 500, 1, 1), 
        Array(2043708, 500, 1, 1), 
        Array(2043808, 500, 1, 1), 
        Array(2044008, 500, 1, 1), 
        Array(2044108, 500, 1, 1),
        Array(2044208, 500, 1, 1),
        Array(2044308, 500, 1, 1),
        Array(2044408, 500, 1, 1),
        Array(2044508, 500, 1, 1),
        Array(2044608, 500, 1, 1),
        Array(2044708, 500, 1, 1),
        Array(2044810, 500, 1, 1), 
        Array(2044905, 500, 1, 1), 
        Array(2049750, 500, 1, 1), 
        Array(2049752, 500, 1, 1), 
        Array(2049762, 500, 1, 1),
        Array(2049600, 500, 1, 1), 
        Array(2049605, 500, 1, 1), 
        Array(2040008, 500, 1, 1),
        Array(2040010, 500, 1, 1),
        Array(2040014, 500, 1, 1),
        Array(2040104, 500, 1, 1),
        Array(2040109, 500, 1, 1),
        Array(2040204, 500, 1, 1),
        Array(2040209, 500, 1, 1),
        Array(2040304, 500, 1, 1),
        Array(2040308, 500, 1, 1),
        Array(2040404, 500, 1, 1),
        Array(2040410, 500, 1, 1),
        Array(2040508, 500, 1, 1),
        Array(2040510, 500, 1, 1),
        Array(2040604, 500, 1, 1),
        Array(2040606, 500, 1, 1),
        Array(2040608, 500, 1, 1),
        Array(2040610, 500, 1, 1),
        Array(2040712, 500, 1, 1),
        Array(2040714, 500, 1, 1),
        Array(2040716, 500, 1, 1),
        Array(2040807, 500, 1, 1),
        Array(2040808, 500, 1, 1),
        Array(2040810, 500, 1, 1),
        Array(2040814, 500, 1, 1),
        Array(2040904, 500, 1, 1),
        Array(2040916, 500, 1, 1),
        Array(2040921, 500, 1, 1),
        Array(2041026, 500, 1, 1),
        Array(2041028, 500, 1, 1),
        Array(2041032, 500, 1, 1),
        Array(2041034, 500, 1, 1),
        Array(2041036, 500, 1, 1),
        Array(2041038, 500, 1, 1),
        Array(2041040, 500, 1, 1),
        Array(2041205, 500, 1, 1),
        Array(2041210, 500, 1, 1),
        Array(2043004, 500, 1, 1),
        Array(2043006, 500, 1, 1),
        Array(2043104, 500, 1, 1),
        Array(2043204, 500, 1, 1),
        Array(2043304, 500, 1, 1),
        Array(2043704, 500, 1, 1),
        Array(2044004, 500, 1, 1),
        Array(2044104, 500, 1, 1),
        Array(2044204, 500, 1, 1),
        Array(2044304, 500, 1, 1),
        Array(2044404, 500, 1, 1),
        Array(2044504, 500, 1, 1),
        Array(2044604, 500, 1, 1),
        Array(2044704, 500, 1, 1),
        Array(2040878, 500, 1, 1),
        Array(2049606, 500, 1, 1),
        Array(2049607, 500, 1, 1),
        Array(2049615, 500, 1, 1),
        Array(2049616, 500, 1, 1),
        Array(2049618, 500, 1, 1),
        Array(2049300, 500, 1, 1),
        Array(2049323, 500, 1, 1),
        Array(5064000, 500, 1, 1),
        Array(5064003, 500, 1, 1),
        Array(2049401, 500, 1, 1),
        Array(2049400, 500, 1, 1),
        Array(2049402, 500, 1, 1),
        Array(2340000, 500, 1, 1),
        Array(2048305, 500, 1, 1),
        Array(2048307, 500, 1, 1),
        Array(2048308, 500, 1, 1),
        Array(2048309, 500, 1, 1),
        Array(2048310, 500, 1, 1),
        Array(2048311, 500, 1, 1),
        Array(2048314, 500, 1, 1),
        Array(2048316, 500, 1, 1)
        );


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {

        if (cm.haveItem(4310233,1)) {
            cm.askYesNo("            #e" + tz15 + "#r『万花筒硬币转蛋机』 " + tz15 + "\r\n#k使用“#b1个#t4310233##k”就可以交换. 极品卷轴如下：#k现在要玩转蛋机么?\r\n———————————————————————— \r\n#v2049323#  #v2049618#  #v2049766#  #v5064000#  #v5064003#  #v2049401#   #v2048333#\r\n   #v2612061#   #v2046138#   #v2047818#   #v2046173#  #v2044003#  #v2040109#");
        } else {
            cm.sendOk("            #e" + tz15 + "#r『万花筒硬币转蛋机』 " + tz15 + "\r\n#k使用“#b1个#t4310233##k”就可以交换. 极品卷轴如下：#k现在要玩转蛋机么?\r\n———————————————————————— \r\n#v2049323#  #v2049618#  #v2049766#  #v5064000#  #v5064003#  #v2049401#   #v2048333#\r\n   #v2612061#   #v2046138#   #v2047818#  #v2046173#  #v2044003#  #v2040109#");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 800);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(4310233) && cm.canHold()) {
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "万花筒硬币转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.gainItem(4310233, -1);
                cm.sendOk("你获得了 #b#t" + itemId + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你确实有个#b#t4310233##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("#r(获得了安慰奖：什么都没有。)\r\n今天的运气可真差，什么都没有拿到。");
            cm.gainItem(4032226, -1);
            cm.gainItem(4001839, 10);
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}




















/*function start() {
 status = -1;
 cm.sendSimple("冒险岛转蛋机中有各类#b装备、卷轴或稀有新奇的道具#k噢！使用“#b#t5220040##k”就可以交换. 游戏商城中的“其他”－“游戏”区里有噢。 假如不买转蛋券的话，是不可以使用我的。现在要玩转蛋机么？\r\n你可以选择以下转蛋机哦\r\n#L0##p9330112#\r\n#L1##p9330113#\r\n#L2##p9330114#\r\n#L3##p9330115#\r\n#L4##p9330116#\r\n#L6##p9330118#\r\n");
 }
 
 
 function action(mode, type, selection) {
 
 if (mode == 1) {
 status++;
 } else {
 if (status == 0) {
 cm.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
 cm.dispose();
 }
 status--;
 }
 
 if (status == 0) {
 //cm.sendOk("在冒险岛生活还愉快吗？");
 //cm.dispose();
 cm.dispose();
 cm.openNpc(9330112+selection,null);
 return;
 
 
 }
 cm.dispose();
 }*/
