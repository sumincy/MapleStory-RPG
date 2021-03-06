/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var level = 25;
	var quest = 32024 + level/5;
	var medal = 1142685 + level/5;
	// 领取过了
	if (ms.isQuestFinished(quest)) {
		ms.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.forceStartQuest(quest);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC("视贺你！你是第一次来到第" + level + "层吧？算起来我们的目标已经完成一半了！", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("我要送你一份礼物！", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("希望你能继续发挥出色，我们的目标还在更深处呢。", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.forceCompleteQuest(quest);
		ms.gainItem(medal, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
