﻿/*
 任务: 称号 - 愤怒化身
 描述: 为了祝贺恶魔复仇者第2次转职而发放的勋章。
 获得: 1142554
 */

        var status = -1;
var level = 30;
var itemId = 1142554;

function start(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && ((qm.getJob() >= 3120 && qm.getJob() <= 3122) || qm.getJob() == 3101) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(itemId, 1)) {
        qm.forceCompleteQuest();
    } else if (qm.canHold(itemId, 1) && ((qm.getJob() >= 3120 && qm.getJob() <= 3122) || qm.getJob() == 3101) && qm.getLevel() >= level) {
        qm.gainItem(itemId, 1);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}