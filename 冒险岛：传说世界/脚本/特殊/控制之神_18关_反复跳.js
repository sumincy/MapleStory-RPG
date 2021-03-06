﻿/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var em = cm.getEventManager("小游戏_控制之神");
	var count = parseInt(em.getProperty("level18_count")) + 1;
	if (count >= 30) {
		cm.addPopupSay(9070203, 2000, "三十！很好！做得好！成功了！");
		actionFinish(mode, type, selection);
	} else {
		var id = cm.getNpc();
		var switchId = parseInt(em.getProperty("level18_switch"));
		if (switchId != id) {
			em.setProperty("level18_switch", id);
			em.setProperty("level18_count", count);
			var text = ""
				if (count == 1) {
					text += "这是一个好的开始！";
				}
				text += NumberToChinese(count) + "！";
			if (count == 5) {
				text += "比光还要快！";
			} else if (count == 10) {
				text += "我的名字是闪电箭！";
			} else if (count == 15) {
				text += "就算辛苦也要坚持！";
			} else if (count == 20) {
				text += "想妈妈了吧？！";
			} else if (count == 25) {
				text += "现在就剩下五个了！";
			} else if (count == 29) {
				text += "最后一个！";
			}
			cm.addPopupSay(9070203, 2000, text);
		}
		cm.dispose();
	}
}
function actionFinish(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		// 初始化
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/prize");
		cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		cm.getWeatherEffectNotice("已通关，前往大厅。", 212, 2000, 1);
		cm.emotion(10, 3000);
		cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/Catch");
		cm.effect_Direction("Effect/CharacterEff.img/12thMiniGame/getMesso3");

		var em = cm.getEventManager("小游戏_控制之神");
		var eim = em.getInstance("小游戏_控制之神");
		var time = Math.round((10 * 60 * 1000 - eim.getTimeLeft()) / 1000);
		eim.stopEventTimer();
		var level = Math.round((cm.getMapId() - 993001000) / 10);
		var data = getData(cm, 18838 + level, ["isClear", "br", "cs", "first"]);
		data[0][1] = 1;
		data[1][1] = time;
		var oldstar = parseInt(data[2][1]);
		data[2][1] = 3 - timeLevel(level, time);
		saveData(cm, 18838 + level, data);
		cm.playerMessage(-1, cm.getPlayer().getName() + "以" + data[2][1] + "颗星通关！");
		cm.gainItem(4310266, level * data[2][1]);

		var dataGame = getData(cm, 18838, ["count", "stageT", "hack", "stage", "mode"]);
		dataGame[3][1] = Math.max(parseInt(dataGame[3][1]), level);
		saveData(cm, 18838, dataGame);

		var dataTime = getData(cm, 18870, ["timeSum", "timeSumT"]);
		dataTime[0][1] = parseInt(dataTime[0][1]) + time;
		dataTime[1][1] = new Date().getTime();
		saveData(cm, 18870, dataTime);

		if (oldstar < data[1][3]) {
			var dataStar = getData(cm, 18869, ["starSumT", "starSum"]);
			dataStar[0][1] = new Date().getTime();
			dataStar[1][1] = parseInt(dataStar[1][1]) + data[2][1] - oldstar;
			saveData(cm, 18869, dataStar);
		}

		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		cm.warp(993001000);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

var medalTime = [[20, 30, 50], [20, 30, 50], [20, 30, 50], [10, 30, 50], [20, 60, 100], [15, 45, 75], [30, 90, 180], [15, 45, 75], [20, 60, 100], [35, 105, 175], [30, 90, 150], [20, 60, 100], [25, 75, 125], [15, 45, 75], [15, 45, 75], [20, 60, 100], [20, 60, 100], [120, 200, 300], [40, 120, 200], [50, 150, 250], [30, 90, 150], [30, 90, 150], [30, 90, 150], [30, 90, 150], [40, 120, 200], [40, 120, 200], [60, 180, 300], [60, 180, 300], [35, 105, 175], [30, 90, 150], [30, 90, 150], [15, 45, 75], [60, 180, 300], [15, 45, 75], [60, 180, 300], [40, 120, 200], [40, 120, 200], [45, 135, 225], [35, 105, 175], [540, 570, 600]];

function timeLevel(level, time) {
	if (time < medalTime[level][0])
		return 0;
	else if (time < medalTime[level][1])
		return 1;
	else if (time < medalTime[level][2])
		return 2;
	else
		return 3;
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}

function NumberToChinese(num) {
	var unitPos = 0;
	var strIns = '',
	chnStr = '';
	var needZero = false;

	if (num === 0) {
		return chnNumChar[0];
	}
	while (num > 0) {
		var section = num % 10000;
		if (needZero) {
			chnStr = chnNumChar[0] + chnStr;
		}
		strIns = SectionToChinese(section);
		strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
		chnStr = strIns + chnStr;
		needZero = (section < 1000) && (section > 0);
		num = Math.floor(num / 10000);
		unitPos++;
	}

	return chnStr;
}

function SectionToChinese(section) {
	var strIns = '',
	chnStr = '';
	var unitPos = 0;
	var zero = true;
	while (section > 0) {
		var v = section % 10;
		if (v === 0) {
			if (!zero) {
				zero = true;
				chnStr = chnNumChar[v] + chnStr;
			}
		} else {
			zero = false;
			strIns = chnNumChar[v];
			strIns += chnUnitChar[unitPos];
			chnStr = strIns + chnStr;
		}
		unitPos++;
		section = Math.floor(section / 10);
	}
	return chnStr;
}
var chnUnitSection = ["","万","亿","万亿","亿亿"];
var chnNumChar = ['零','一','二','三','四','五','六','七','八','九'];
var chnUnitChar = ['','十','百','千','万','十','百','千','亿','十','百','千'];