/* 起源之塔
Made by Jessefjxm
 */
var status = -1;
var level = "48";
var header = "#fn黑体##fs32#B - " + level + " F\r\n\r\n";

function action(mode, type, selection) {
	status++;
	var em = ms.getEventManager("副本_起源之塔");
	var prop = em == null ? null : em.getProperty("stage" + level);
	if (prop != null && prop.equals("start")) {
		ms.dispose();
		return;
	}
	if (ms.isQuestFinished(42010)) {
		em.setProperty("stage" + level, "start");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
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
		ms.spawnNpcForPlayer(2540004, -1433, 270);
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue(header + "#fs22#地下48层是幻想阶梯。\r\n\r\n你要通过这里必须凭借感觉而不能相信自己所看到的。\r\n\r\n那些石蘑菇为了干扰你的注意力正在捣乱，所以你去把它们消灭后通过这里吧。\r\n\r\n啊！那是我上次见过的探险家！这次让我们再次请他帮忙指一次路吧！", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		em.setProperty("stage" + level, "start");
		ms.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
		//ms.warp(992019000, 1);
	} else {
		ms.dispose();
	}
}
