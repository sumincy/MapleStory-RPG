/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:椅子专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(
Array(" 鼠鼠派对发箍",1004158, 10000),
Array(" 来自心心的我",1004157, 10000),
Array(" 来自星星的你",1004156, 10000),
Array(" 天使旋律",1004175, 10000),
Array(" 11周年神圣帽",1004172, 10000),
Array(" 旋转木马帽",1004171, 10000),
Array(" 斑斓可爱的芭菲帽",1004170, 10000),
Array(" 美味荷包蛋帽",1004169, 10000),
Array(" 呆萌猫咪帽",1004168, 10000),
Array(" 绿色恐龙帽",1004167, 10000),
Array(" 黑色蝴蝶结发箍",1004166, 10000),
Array(" 玫瑰闪耀",1004165, 10000),
Array(" 丝绸头盔",1004164, 10000),
Array(" 爱丽丝表丝带",1004163, 10000),
Array(" 柴郡猫耳朵",1004162, 10000),
Array(" 克洛帝皇冠",1004161, 10000),
Array(" 大海贼头盔",1004160, 10000),
Array(" 粉红天使翅膀帽",1004191, 10000),
Array(" 微笑旋律耳机",1004190, 10000),
Array(" 企鹅王帽子",1004189, 10000),
Array(" 白雪人帽子",1004188, 10000),
Array(" 小猴子帽子",1004187, 10000),
Array(" 幼红独角狮帽子",1004186, 10000),
Array(" 蓝色蘑菇帽",1004185, 10000),
Array(" 偷水贼帽子",1004184, 10000),
Array(" 粉网球帽",1004183, 10000),
Array(" 头顶包包兔耳帽",1004182, 10000),
Array(" 糖果晚会丝带发卡",1004181, 10000),
Array(" 俏皮帽子",1004180, 10000),
Array(" 红色魔法帽",1004179, 10000),
Array(" 黑暗希纳斯",1004177, 10000),
Array(" 爱丽丝兔面具",1004176, 10000),
Array(" 红色小马憨憨针织帽",1004205, 10000),
Array(" 蓝色小马憨憨针织帽",1004204, 10000),
Array(" 喵星人的秘密",1004203, 10000),
Array(" 隐武士战盔",1004202, 10000),
Array(" 暗夜精灵战盔",1004201, 10000),
Array(" 夏日兔草帽",1004200, 10000),
Array(" 菖蒲发卡",1004199, 10000),
Array(" 太极发箍",1004198, 10000),
Array(" 夺命鲨鱼",1004197, 10000),
Array(" 风车头箍",1004196, 10000),
Array(" 足球发箍",1004195, 10000),
Array(" 蝴蝶结贝雷帽",1004194, 10000),
Array(" 搞怪翅膀帽",1004193, 10000),
Array(" 哆来咪耳麦",1004192, 10000),
Array(" 伊库莱迪海王星",1004223, 10000),
Array(" 伊库莱迪迷踪帽",1004222, 10000),
Array(" 伊库莱迪霓翎帽",1004221, 10000),
Array(" 伊库莱迪玄妙帽",1004220, 10000),
Array(" 伊库莱迪冠军盔",1004219, 10000),
Array(" 死灵法师船长帽",1004218, 10000),
Array(" 死灵法师追踪者帽",1004217, 10000),
Array(" 死灵法师哨兵帽",1004216, 10000),
Array(" 死灵法师魔法师帽",1004215, 10000),
Array(" 死灵法师战士帽",1004214, 10000),
Array(" 呼拉呼拉羽毛装饰",1004213, 10000),
Array(" 晶莹精致丝带",1004212, 10000),
Array(" 哈尼绒绒耳",1004211, 10000),
Array(" 山茶花头饰",1004209, 10000),
Array(" 桃太郎帽子",1004239, 10000),
Array(" 皇家班·雷昂船长头盔",1004238, 10000),
Array(" 皇家班·雷昂追踪者头盔",1004237, 10000),
Array(" 皇家班·雷昂哨兵头盔",1004236, 10000),
Array(" 皇家班·雷昂魔法师头盔",1004235, 10000),
Array(" 皇家班·雷昂战士头盔",1004234, 10000),
Array(" 芬撒里尔船长帽",1004233, 10000),
Array(" 芬撒里尔追踪者帽",1004232, 10000),
Array(" 芬撒里尔哨兵便帽",1004231, 10000),
Array(" 芬撒里尔魔法师帽",1004230, 10000),
Array(" 芬撒里尔战斗头盔",1004229, 10000),
Array(" 穆斯佩尔海盗帽",1004228, 10000),
Array(" 穆斯佩尔飞侠帽",1004227, 10000),
Array(" 穆斯佩尔弓箭手帽",1004226, 10000),
Array(" 穆斯佩尔魔法师帽",1004225, 10000),
Array(" 穆斯佩尔战士帽",1004224, 10000),
Array(" 宾果之王帽子",1004254, 10000),
Array(" 星星糖果雪糕",1004250, 10000),
Array(" 苹果蒂风情帽",1004269, 10000),
Array(" 生命之花",1004268, 10000),
Array(" 粉色波点胡子帽",1004285, 10000),
Array(" 橙色波点胡子帽",1004284, 10000),
Array(" 绿胡子帽",1004283, 10000),
Array(" 点点红蝴蝶结",1004282, 10000),
Array(" 竹蜻蜓帽子",1004281, 10000),
Array(" 松鼠软呢帽",1004279, 10000),
Array(" 甘迪面具",1004276, 10000),
Array(" 幸运帽",1004275, 10000),
Array(" 丁香花头饰",1004300, 10000),
Array(" 泰迪萌犬帽(棕)",1004299, 10000),
Array(" 泰迪萌犬帽(白)",1004298, 10000),
Array(" 萌动飞天小鸡帽",1004296, 10000),
Array(" 音乐飞天小鸡帽",1004295, 10000),
Array(" 甜柿帽",1004294, 10000),
Array(" 俠客头饰",1004335, 10000),
Array(" 我爱小狗",1004332, 10000),
Array(" 奢华羊绒小礼帽",1004330, 10000),
Array(" 蓝色棒球帽发夹",1004329, 10000),
Array(" 粉色棒球帽",1004328, 10000),
Array(" 星星闪亮发箍",1004327, 10000),
Array(" 传说中的奈比尔",1004326, 10000),
Array(" 防疫队精英",1004325, 10000),
Array(" 防毒面罩",1004324, 10000),
Array(" 巨岩僵尸",1004323, 10000),
Array(" 骷髅帽",1004343, 10000),
Array(" 魔女帽",1004342, 10000),
Array(" 披肩假发",1004341, 10000),
Array(" 骷髅帽",1004340, 10000),
Array(" 陈旧魔女帽",1004339, 10000),
Array(" 披肩假发",1004338, 10000),
Array(" 生病的奥尔卡假发",1004337, 10000),
Array(" 暴走斯乌假发",1004336, 10000),
Array(" 趴趴三笠",1004399, 10000),
Array(" 趴趴艾伦",1004398, 10000),
Array(" 清扫头巾",1004397, 10000),
Array(" 利威尔套装",1004396, 10000),
Array(" 阿明套装",1004395, 10000),
Array(" 三笠套装",1004394, 10000),
Array(" 艾伦套装",1004393, 10000),
Array(" 智能机器人头盔",1004392, 10000)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            choices = "\r\n点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "稀有点装1号店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "稀有点装1号店", 3, true);
				if (gachaponItem != -1) {
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				} else {
					cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
				}
            }
        }
    }
}
