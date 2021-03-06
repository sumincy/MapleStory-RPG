﻿var status = -1;

function start() {
    if (cm.getMapId() == 807100000) {
        action(1, 0, 0);
    } else {
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendNextNoESC_Bottom("这一时刻终于来到了。第六天魔王的化身——织田信长的传奇到今天终于要结束了。", 9131007);
    } else if (status == 1) {
        cm.sendNextSNoESC_Bottom("之前的我没能护住自己侍奉的主公，没能保住自己的家门，就连姬儿都没能守护住……一想到今日终于能一雪前耻，我就激动得浑身发抖。");
    } else if (status == 2) {
        cm.sendNextNoESC_Bottom("能够一雪前耻当然是好事，但是切记，不要被复仇蒙蔽了你的双眼。我承认你确实很有本事，但是激动过头只会影响你的判断，并让你的动作出现破绽。", 9131007);
    } else if (status == 3) {
        cm.sendNextSNoESC_Bottom("谢谢你的提醒，不知道能不能控制涌入我剑上的血。");
    } else if (status == 4) {
        cm.sendNextNoESC_Bottom("哈哈哈，你能这麽说就代表你还不错，那我就相信你的实力，把本能寺进攻第一步让你迈开可以吗？", 9131007);
    } else if (status == 5) {
        cm.sendNextSNoESC_Bottom("你是说东门的开门吗？");
    } else if (status == 6) {
        cm.sendNextNoESC_Bottom("是喔，你翻过本能寺墙壁打开东门的话武田信玄骑马队进攻践踏魔王的手下的。", 9131007);
    } else if (status == 7) {
        cm.sendNextSNoESC_Bottom("我的切开云雾之剑只要敌人的血，不在乎任务，请交给我吧。");
    } else if (status == 8) {
        cm.sendNextNoESC_Bottom("哈哈哈，很强大的气魄！若可以的话就这样一直都把你留作我的手下，祝你好运，武田信玄骑马队很快会跟上去的！", 9131007);
    } else if (status == 9) {
        cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        cm.fieldEffect("guide1");
        cm.fieldEffect("guide2");
        cm.fieldEffect("guide3");
        cm.fieldEffect("guide4");
        cm.dispose();
    }
}