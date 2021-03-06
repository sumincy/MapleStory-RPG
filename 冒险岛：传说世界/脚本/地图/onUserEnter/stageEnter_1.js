/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "01";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + parseInt(level));
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		startMap(em);
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
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "是#fs22#地下一层的#fs27#古代绿水灵。#fs22#\r\n\r\n据说现在已经灭绝了，不过从前，它们曾像花蘑菇一样繁盛兴旺。\r\n\r\n第一层可以通过积累冲击量来突破，也可以通过猎杀300个古代绿水灵突破。", 30000);
	} else if (status === i++) {
		ms.sendNextSNoESC("#b（什么是冲击量呢……要不要问问？）");
	} else if (status === i++) {
		ms.sendNextNoESC("我有听到你的问题！简单地说，冲击量就是对它们造成的伤害啦！当力量足够，也可以突破这一层的封印。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("原来如此，就是大力出奇迹啊。好，我开工了！");
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		startMap(em);
	} else {
		ms.dispose();
	}
}

function startMap(em){
	ms.dispose();
	var pos = ms.getMap().getPortal(1).getPosition();
	ms.onTeleport(1, ms.getPlayer().getId(), pos.getX(), pos.getY());
	em.setProperty("stage" + parseInt(level), "start");
	ms.getMap().getWeatherEffectNotice("请打猎怪物或者积累5千万以上的伤害！", 147, 60000, 1);
	ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
