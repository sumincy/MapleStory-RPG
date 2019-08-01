﻿/*
 * 起源之塔
 */

var mapIds = new Array();
var mapHall = 992000000;
var mobs = [9309087, 9309085, 9309047, 9309046, 9309043, 9309042, 9309037, 9309035, 9300891, 9300699, 9010171, 8620011, 8620010];

function init() {
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
	// 暂时很多地图有问题
	for (var i = 992001000; i <= 992001000; i += 1000) {
		mapIds.push(i);
	}
}

function setup(eim, leaderid) {
	em.setProperty("state", "1");
	em.setProperty("leader", "true");
	var eim = em.newInstance("Map_TowerOfOz");
	for (var i = 0; i < mapIds.length; i++) {
		var map = eim.setInstanceMap(mapIds[i]);
		// 注册所有怪物事件
		map.getAllMonster().forEach(function (element) {
			eim.registerMonster(em.getMonster(element));
		});
		map.resetFully();
		map.killAllMonsters(false);
	}
	eim.startEventTimer(60 * 60 * 1000);
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
	return false;
}

function changedMap(eim, player, mapid) {
	if (mapIds.indexOf(mapid) < 0) {
		playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function scheduledTimeout(eim) {
	em.disposeIfPlayerBelow(100, mapHall);
	em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (em.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
	}
}

function monsterValue(eim, mobId) {
	em.broadcastServerMsg("[monsterValue]=" + mobId);
	return 1;
}

// not work?
function allMonstersDead(eim) {
	em.broadcastServerMsg("[allMonstersDead]");
	var state = em.getProperty("state");
	if (state.equals("1")) {
		em.setProperty("state", "2");
	} else if (state.equals("2")) {
		em.setProperty("state", "3");
	}
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}
function pickUpItem(eim, player, itemID) {}

function monsterDamaged(eim, player, mobID, damage) {
	em.broadcastServerMsg("[monsterDamaged]=mobID");
}

function monsterKilled(eim, player, mobID) {
	em.broadcastServerMsg("[monsterKilled]=mobID");
	/*
	var map = player.getMap();
	var check = eim.getProperty("Mob_" + mobID);
	if (check != null) {
	map.playFieldSound("Dojang/clear");
	map.showScreenEffect("dojang/end/clear");
	var reactor = map.getReactorByID(2508000);
	if (reactor != null) {
	reactor.forceHitReactor(1);
	}
	var stage = parseInt(map.getMapID() % 10000 / 100);
	eim.setProperty("Floor_" + stage, "1");
	}
	 */
}
