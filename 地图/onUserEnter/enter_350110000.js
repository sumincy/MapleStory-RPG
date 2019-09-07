// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		cm.updateInfoQuest(18593, "fin=1");
		cm.fieldEffect_PlayFieldSound("Ambience.img/blizzard_soft")
		cm.setAmbience("Ambience.img/blizzard_soft", 100, 60);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 440, -1729);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/blackHeaven/nexon", 0, 1500, 0, 0, 12, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_Unew150("Map/Effect2.img/Blizzard/skeleton", "normal", "", 257, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(16000, 1000, 16000, 440, 251);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.npc_ChangeController(1540805, "oid=8238487", 450, 271, 0);
		cm.npc_SetSpecialAction("oid=8238487", "summon");
		cm.npc_SetSpecialAction("oid=8238487", "special1");
		cm.npc_ChangeController(1540807, "oid=8238488", -700, 271, 0);
		cm.npc_SetSpecialAction("oid=8238488", "summon");
		cm.npc_ChangeController(1540798, "oid=8238489", 1350, 350, 0);
		cm.npc_SetSpecialAction("oid=8238489", "summon");
		cm.npc_ChangeController(1540798, "oid=8238490", 1300, 350, 0);
		cm.npc_SetSpecialAction("oid=8238490", "summon");
		cm.npc_ChangeController(1540798, "oid=8238491", 1250, 350, 0);
		cm.npc_SetSpecialAction("oid=8238491", "summon");
		cm.npc_ChangeController(1540799, "oid=8238492", 1160, 350, 0);
		cm.npc_SetSpecialAction("oid=8238492", "summon");
		cm.npc_SetForceMove("oid=8238489", -1, 750, 150);
		cm.npc_SetForceMove("oid=8238490", -1, 750, 150);
		cm.npc_SetForceMove("oid=8238491", -1, 750, 150);
		cm.npc_SetForceMove("oid=8238492", -1, 750, 150);
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("……看上去并没有很古怪啊。", 1540799);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/1");
		cm.sendNextNoESC_Bottom("肯定是那些放哨的看错了。", 1540798);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/2");
		cm.sendNextNoESC_Bottom("也对，怎么会有外人穿过如此暴风雪而来，\r\n他们又不傻。", 1540799);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/3");
		cm.sendNextNoESC_Bottom("不过还是不要放松警惕，我们得继续留心观察，\r\n这是戴米安的命令。", 1540799);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/4");
		cm.sendNextNoESC_Bottom("是！", 1540798);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/5");
		cm.npc_SetForceMove("oid=8238492", -1, 1500, 150);
		cm.npc_SetForceMove("oid=8238489", -1, 1500, 150);
		cm.npc_SetForceMove("oid=8238490", -1, 1500, 150);
		cm.npc_SetForceMove("oid=8238491", -1, 1500, 150);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 15000, 440, 421);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("走了，走了。", 1540807);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/6");
		cm.npc_SetSpecialAction("oid=8238487", "special2");
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/evan_appear");
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=8238487", "special3");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=8238492");
		cm.npc_LeaveField("oid=8238489");
		cm.npc_LeaveField("oid=8238490");
		cm.npc_LeaveField("oid=8238491");
		cm.sendNextNoESC_Bottom("#face0#嘿嘿，捉迷藏作战计划成功！", 1540807);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/7");
		cm.sendNextNoESC_Bottom("#face2#额啊啊……米乐，我的手脚动不了了……", 1540805);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/8");
		cm.sendNextNoESC_Bottom("#face0#要给你喷点火吗？会很暖和的。", 1540807);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/9");
		cm.sendNextNoESC_Bottom("#face2#算了，你难不成打算把我给烤熟吗？", 1540805);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/10");
		cm.sendNextNoESC_Bottom("#face0#我开玩笑的，主人你太小只了，就算烤掉也不够吃的啊？", 1540807);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/11");
		cm.sendNextNoESC_Bottom("#face6#呜呜……这家伙现在还真是什么都敢说了，看来我不该养你啊。", 1540805);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/HofM/ACT1/OP/12");
		cm.fieldEffect_PlayBGM("Bgm45/Through The Blizzard");
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1-\r\n#fs28#龙沉睡的岛: #fs20#暴风雪笼罩的雪龟岛", 1);
	} else if (status === i++) {
		cm.effect_Voice("Field.img/flowervioleta/wink");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.setInGameDirectionMode(false, false, false);
		cm.npc_LeaveField("oid=8238487");
		cm.npc_LeaveField("oid=8238488");

		ms.dispose();
		cm.warp(350110010);
	} else {
		ms.dispose();
	}
}
