/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:椅子专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(

Array("火箭爆竹帽",1004925, 10000),
Array("草莓拿铁帽",1004922, 10000),
Array("月光绒球贝雷帽",1004923, 10000),
Array("绿茶拿铁帽",1004920, 10000),
Array("焦糖拿铁帽",1004921, 10000),
Array("瓢啊瓢头带",1004936, 10000),
Array("玫瑰发夹",1004937, 10000),
Array("小花双分叉发夹",1004938, 10000),
Array("铃铛花发夹",1004939, 10000),
Array("小小花发夹",1004940, 10000),
Array("野花发夹",1004941, 10000),
Array("霸王花帽子",1004942, 10000),
Array("粉企鹅防寒帽",1004928, 10000),
Array("小鸡仔防寒帽",1004929, 10000),
Array("守望者帽子",1004930, 10000),
Array("柔软妖精毛帽",1004931, 10000),
Array("斗篷贝雷帽(男)",1004932, 10000),
Array("斗篷贝雷帽(女)",1004933, 10000),
Array("草莓头带",1004934, 10000),
Array("冒险勇士白虎头盔",1004935, 10000),
Array("大侦探帽",1004953, 10000),
Array("狐狸先森套头帽",1004952, 10000),
Array("樱桃发卡",1004955, 10000),
Array("樱桃枝",1004954, 10000),
Array("小苗苗头饰",1004957, 10000),
Array("呱呱雨帽",1004956, 10000),
Array("拿破仑帽子",1004959, 10000),
Array("伊丽莎白假发",1004958, 10000),
Array("潘多拉头饰",1004945, 10000),
Array("活力笑脸帽",1004947, 10000),
Array("雪之铃兰帽子",1004946, 10000),
Array("救赎之魂",1004949, 10000),
Array("活力蝴蝶结",1004948, 10000),
Array("巨星闪耀帽",1004951, 10000),
Array("金色丝带小礼帽",1004950, 10000),
Array("钢铁兔耳",1004970, 10000),
Array("粉色钢铁猫耳",1004971, 10000),
Array("棉花糖帽子",1004968, 10000),
Array("粉红大象玩偶帽",1004969, 10000),
Array("冒险星系头盔",1004974, 10000),
Array("知识的嫩芽帽",1004975, 10000),
Array("天蓝色钢铁猫耳",1004972, 10000),
Array("喵喵头盔",1004973, 10000),
Array("丸子帽",1004961, 10000),
Array("小胡子贝雷帽",1004966, 10000),
Array("小胡子棒球帽",1004967, 10000),
Array("执法者帽子",1004964, 10000),
Array("白梅花",1004965, 10000),
Array("泡泡洗头帽",1004996, 10000),
Array("草檬帽",1004997, 10000),
Array("夏日花精灵帽",1004998, 10000),
Array("龙爪冰冰发箍",1004999, 10000),
Array("GS25金枪鱼沙拉",1004992, 10000),
Array("GS25火辣铁板鸡",1004993, 10000),
Array("GS25全州拌饭",1004994, 10000),
Array("雪莉的公主帽",1004995, 10000),
Array("汪星人趴趴帽",1005021, 10000),
Array("黑暗军师帽子",1005020, 10000),
Array("汪星人吉祥帽",1005023, 10000),
Array("汪星人柴犬帽",1005022, 10000),
Array("俏皮牛仔帽",1005017, 10000),
Array("花朵猫咪帽",1005016, 10000),
Array("咖啡猫休闲帽",1005019, 10000),
Array("苹果兔套头帽",1005018, 10000),
Array("冬阴功帽子",1005013, 10000),
Array("汉堡帽子",1005012, 10000),
Array("猫耳帽子",1005015, 10000),
Array("平衡喵帽子",1005014, 10000),
Array("牛肉面帽子",1005009, 10000),
Array("寿司帽子",1005008, 10000),
Array("意大利面帽子",1005011, 10000),
Array("香辣蟹帽子",1005010, 10000),
Array("乐园的玫瑰",1005038, 10000),
Array("柳德的帽子",1005036, 10000),
Array("乐园的证明",1005037, 10000),
Array("亲亲树精灵",1005034, 10000),
Array("怦然心动头带",1005035, 10000),
Array("金色记忆",1005032, 10000),
Array("金色粒粒",1005033, 10000),

Array("汪星人沙皮帽",1005024, 10000),
Array("花蘑菇狗耳帽",1005025, 10000),
Array("冬恋滑雪帽（蓝色）",1005050, 10000),
Array("冬恋滑雪帽（粉色）",1005049, 10000),
Array("软软蓝熊帽",1005048, 10000),
Array("软软粉熊帽",1005047, 10000),
Array("巴尼兔耳帽",1005046, 10000),
Array("喵喵喵玩偶帽",1005045, 10000),
Array("副厨师长帽",1004562, 10000),
Array("厨师长帽",1004563, 10000),
Array("中级厨师帽",1004560, 10000),
Array("高级厨师帽",1004561, 10000),
Array("草莓刨冰帽",1004566, 10000),
Array("甜瓜刨冰帽",1004564, 10000),
Array("芒果刨冰帽",1004565, 10000),
Array("黑色海魂帽 ",1004570, 10000),
Array("海贼团贝雷帽",1004571, 10000),
Array("呆萌鼠鼠帽",1004568, 10000),
Array("彩虹花开帽子",1004569, 10000),
Array("重启帽子",1004574, 10000),
Array("浪漫玫瑰",1004575, 10000),
Array("海蓝宝石（男）",1004572, 10000),
Array("粉红宝石（女）",1004573, 10000),
Array("熊猫小姐棒球帽",1004547, 10000),
Array("兔兔绅士棒球帽",1004546, 10000),
Array("羊羊妹妹棒球帽",1004545, 10000),
Array("呆萌黑猫棒球帽",1004544, 10000),
Array("虎王欧巴棒球帽",1004548, 10000),
Array("初级厨师帽",1004559, 10000),
Array("赫雅帽子",1004558, 10000),
Array("星光闪耀头盔",1004557, 10000),
Array("枫叶纪念帽",1004556, 10000),
Array("紫色时间",1004592, 10000),
Array("白色乌鲁斯帽",1004597, 10000),
Array("棕色乌鲁斯帽",1004598, 10000),
Array("黑色乌鲁斯帽",1004599, 10000),
Array("海军软帽",1004600, 10000),
Array("小企鹅帽子",1004601, 10000),
Array("农夫的瑰宝 ",1004602, 10000),
Array("星条旗帽",1004603, 10000),
Array("粉色苏打帽",1004577, 10000),
Array("LED鼠标发带",1004576, 10000),
Array("帝国皇冠",1004578, 10000),
Array("糖膏帽",1004581, 10000),
Array("莲花学院青玉饰品",1004580, 10000),
Array("杰的灭菌猫咪眼罩",1004589, 10000),
Array("粉色时间",1004591, 10000),
Array("蓝莓宝石头饰",1004590, 10000),
Array("卖萌花团发卡 ",1004630, 10000),
Array("卖萌花苞发卡 ",1004631, 10000),
Array("卖萌小叶子发卡 ",1004628, 10000),
Array("卖萌小花发卡 ",1004629, 10000),
Array("",1004627, 10000),
Array("茅山道士帽",1004638, 10000),
Array("北极罩帽 ",1004639, 10000),
Array("香蕉郊游帽",1004636, 10000),
Array("趴趴小夜喵",1004634, 10000),
Array("毛线编织帽",1004635, 10000),
Array("卖萌小草发卡 ",1004632, 10000),
Array("灵魂出窍",1004633, 10000),
Array("鲑鱼饭帽子",1004614, 10000),
Array("猪排饭帽子",1004613, 10000),
Array("鳗鱼饭帽子",1004612, 10000),
Array("落在花上的蝴蝶",1004610, 10000),
Array("樱花发簪",1004609, 10000),
Array("栗子松饼帽",1004620, 10000),
Array("黄豆松饼帽",1004619, 10000),
Array("蜂蜜松饼帽",1004618, 10000),
Array("夏至鹿角 ",1004656, 10000),
Array("白露鹿角 ",1004657, 10000),
Array("霜降鹿角 ",1004658, 10000),
Array("保罗熊兜帽",1004659, 10000),
Array("避雷针帽子",1004668, 10000),
Array("避雷针帽子",1004669, 10000),
Array("暖和的兔毛帽子",1004665, 10000),
Array("",1004645, 10000),
Array("",1004646, 10000),
Array("妖精喇叭花",1004641, 10000),
Array("怪物联盟棒球帽",1004640, 10000),
Array("蓝色海军帽",1004643, 10000),
Array("聚光灯帽子",1004642, 10000),
Array("惊蛰鹿角",1004655, 10000),
Array("",1004648, 10000),
Array("黑色时光",1004698, 10000),
Array("白色时光",1004697, 10000),
Array("奇怪饺子帽",1004696, 10000),
Array("英雄戴米安棒球帽",1004703, 10000),
Array("妖精的针织帽",1004702, 10000),
Array("享受冬季",1004701, 10000),
Array("大眼猫头鹰玩偶帽",1004700, 10000),
Array("蓝色妖姬头纱",1004691, 10000),
Array("萌妹头带",1004690, 10000),
Array("绵羊头浴帽",1004689, 10000),
Array("英雄雪龟岛棒球帽",1004688, 10000),
Array("美味饺子帽",1004695, 10000),
Array("圣诞鹿帽",1004694, 10000),
Array("圣诞节帽",1004693, 10000),
Array("雪娃娃",1004692, 10000),
Array("寒冰战神头饰",1004682, 10000),
Array("寒冰战神头饰",1004683, 10000),
Array("神秘幻影帽子",1004680, 10000),
Array("神秘幻影帽子",1004681, 10000),
Array("秘密隐月头饰",1004686, 10000),
Array("秘密隐月头饰",1004687, 10000),
Array("正直夜光法师头饰",1004684, 10000),
Array("正直夜光法师头饰",1004685, 10000),
Array("皇家双弩精灵",1004678, 10000),
Array("皇家双弩精灵",1004679, 10000),
Array("龙神金色之翼",1004676, 10000),
Array("龙神金色之翼",1004677, 10000),
Array("年糕汤月妙公子",1004729, 10000),
Array("年糕汤月妙小姐",1004728, 10000),
Array("撒娇的土豪金",1004731, 10000),
Array("吃年糕汤的月妙",1004730, 10000),
Array("娇滴滴的三花喵",1004732, 10000),
Array("月光蝴蝶发饰",1004721, 10000),
Array("暗影贝雷帽",1004720, 10000),
Array("英雄超越石棒球帽",1004723, 10000),
Array("月光蝴蝶帽",1004722, 10000),
Array("品克缤爱吃肉",1004725, 10000),
Array("金光闪闪帽",1004724, 10000),
Array("和隐月一起玩尤茨游戏",1004727, 10000),
Array("和阿琅一起玩尤茨游戏",1004726, 10000),
Array("微笑融雪种子",1004712, 10000),
Array("쿠라귀장식",1004713, 10000),
Array("英雄黑魔法师棒球帽",1004714, 10000),
Array("音乐会缪斯",1004716, 10000),
Array("亲亲宝贝帽子",1004717, 10000),
Array("夜行者趴趴帽",1004718, 10000),
Array("冬日绒线帽",1004706, 10000),
Array("暖绒绒帽子",1004708, 10000),
Array("蓝嘟嘟绒帽",1004709, 10000),
Array("粉嘟嘟绒帽",1004710, 10000),
Array("炎术士趴趴帽",1004711, 10000),
Array("闪耀明星帽",1004763, 10000),
Array("绿小猪帽",1004761, 10000),
Array("怪物幼儿园帽子",1004760, 10000),
Array("火凤假发",1004759, 10000),
Array("青鸾假发",1004758, 10000),
Array("喵咪帽纸",1004757, 10000),
Array("鲨鱼帽",1004756, 10000),
Array("鱼尾彩虹假发",1004754, 10000),
Array("一撮毛彩虹假发",1004753, 10000),
Array("孢子型彩虹假发",1004752, 10000),
Array("卡森蒂诺彩虹假发",1004750, 10000),
Array("飘逸微秃彩虹假发",1004751, 10000),
Array("情侣部队头盔",1004748, 10000),
Array("",1004749, 10000),
Array("单身部队头盔",1004747, 10000),
Array("小幽灵帽子",1004738, 10000),
Array("彩虹四叶草",1004739, 10000),
Array("黑头带",1004737, 10000),
Array("童子军金装贝雷帽",1004797, 10000),
Array("蓝色萌小象帽子",1004796, 10000),
Array("胡萝卜发卡",1004799, 10000),
Array("童子军蝴蝶结贝雷帽",1004798, 10000),
Array("啦啦啦耳机",1004793, 10000),
Array("水菊头带",1004792, 10000),
Array("水晶鸟",1004795, 10000),
Array("玫瑰鸟",1004794, 10000),
Array("小鸡香波泡泡帽",1004789, 10000),
Array("叶子泡泡帽",1004788, 10000),
Array("水菊别针",1004791, 10000),
Array("侦探团帽子",1004790, 10000),
Array("鸡萌帽子",1004787, 10000),
Array("花栗鼠雨帽",1004776, 10000),
Array("花园的清晨",1004777, 10000),
Array("枫叶贵族王冠",1004778, 10000),
Array("花园晨曦",1004779, 10000),
Array("草莓兔耳朵",1004774, 10000),
Array("草莓花边帽",1004775, 10000)
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
            cm.askMenuS("欢迎来到" + cm.getServerName() + "椅子专卖4号店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "椅子专卖5号店", 3, true);
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
