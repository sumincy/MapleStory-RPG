/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:椅子专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(
Array(" 焰火椅子",3010798, 10000),
Array(" 雏祭娃娃3",3010793, 10000),
Array(" 雏祭娃娃2",3010792, 10000),
Array(" 森林中休息处(椅子)",3010795, 10000),
Array(" 抖动的舌头椅子",3010794, 10000),
Array(" 爆竹声声",3010789, 10000),
Array(" 巨无霸年夜饭",3010788, 10000),
Array(" 雏祭娃娃1",3010791, 10000),
Array(" 财神椅子",3010790, 10000),
Array(" 爱情水晶球的回忆",3010813, 10000),
Array(" 旋转木马椅",3010812, 10000),
Array(" 单身部队海报椅",3010815, 10000),
Array(" 粉丝抱枕椅子",3010814, 10000),
Array(" 嫩芽椅",3010811, 10000),
Array(" 火车旅行椅",3010810, 10000),
Array(" 军人月妙拜年椅子",3010804, 10000),
Array(" 桃樱芳菲椅",3010806, 10000),
Array(" 学龄前月妙拜年椅子",3010801, 10000),
Array(" 小学生月妙拜年椅子",3010800, 10000),
Array(" 高3月妙拜年椅子",3010803, 10000),
Array(" 中学生月妙拜年椅子",3010802, 10000),
Array(" 雪人椅子",3010767, 10000),
Array(" 尖耳木椅",3010766, 10000),
Array(" 古代战车椅子",3010761, 10000),
Array(" 古代浴池椅子",3010760, 10000),
Array(" 你和我",3010757, 10000),
Array(" 新年招财猫椅子",3010756, 10000),
Array(" 林之灵椅子2",3010758, 10000),
Array(" 暖暖的被炉椅子",3010753, 10000),
Array(" 玫瑰鸟笼",3010752, 10000),
Array(" 小丫丫坐便器椅子",3010755, 10000),
Array(" 百鬼夜行",3010754, 10000),
Array(" 马上有你",3010781, 10000),
Array(" 旋转木马",3010780, 10000),
Array(" 蓝色邦尼屋",3010783, 10000),
Array(" 旋转木马",3010782, 10000),
Array(" 金马祥云轿",3010779, 10000),
Array(" 愤怒的美发师椅子",3010863, 10000),
Array(" 兔子♡胡萝卜椅子",3010862, 10000),
Array(" 心花怒放椅子",3010853, 10000),
Array(" 鲜花椅",3010852, 10000),
Array(" 神秘怪物共聚一堂！",3010854, 10000),
Array(" 最佳新人椅子",3010849, 10000),
Array(" 红地毯主人公椅子",3010848, 10000),
Array(" 夏日沁饮椅子",3010851, 10000),
Array(" 潮流评论家椅子",3010850, 10000),
Array(" 人鱼珊瑚礁",3010877, 10000),
Array(" 冒险岛行星椅子",3010876, 10000),
Array(" 繁星椅子",3010879, 10000),
Array(" 足球助威椅",3010878, 10000),
Array(" 米哈尔的知己",3010873, 10000),
Array(" 胡克的知己",3010872, 10000),
Array(" 弗朗西斯的知己",3010875, 10000),
Array(" 奥尔卡的知己",3010874, 10000),
Array(" 奥兹的知己",3010869, 10000),
Array(" 南哈特的知己",3010868, 10000),
Array(" 伊卡尔特的知己",3010871, 10000),
Array(" 伊莉娜的知己",3010870, 10000),
Array(" 扎昆点赞椅",3010865, 10000),
Array(" 紫色妖姬王座",3010864, 10000),
Array(" 希纳斯的知己",3010867, 10000),
Array(" 土星椅子",3010829, 10000),
Array(" 木星椅子",3010828, 10000),
Array(" 海王星椅子",3010831, 10000),
Array(" 天王星椅子",3010830, 10000),
Array(" 金星椅子",3010825, 10000),
Array(" 水星椅子",3010824, 10000),
Array(" 火星椅子",3010827, 10000),
Array(" 地球椅子",3010826, 10000),
Array(" 童年玩具箱椅子",3010821, 10000),
Array(" 迷你玩具别墅椅子",3010820, 10000),
Array(" 蘑菇智能手表椅子",3010823, 10000),
Array(" 贪吃鳄鱼椅子",3010822, 10000),
Array(" 小金猪椅子",3010845, 10000),
Array(" 麻辣教室椅子",3010844, 10000),
Array(" 兔兔郊游房车",3010843, 10000),
Array(" 猫猫郊游房车",3010842, 10000),
Array(" 温泉奥拉夫椅子",3010837, 10000),
Array(" 度假地奥拉夫椅子",3010836, 10000),
Array(" 冰城堡椅子",3010838, 10000),
Array(" 太阳椅子",3010832, 10000),
Array(" 爱情水晶球记忆椅",3010835, 10000),
Array(" 彩蛋篮子",3010921, 10000),
Array(" 水晶月亮",3010920, 10000),
Array(" 10周年椅子",3010923, 10000),
Array(" 悠长假期(红色)",3010922, 10000),
Array(" 红色龙椅",3010917, 10000),
Array(" 粉红沙滩遮阳伞",3010916, 10000),
Array(" 精灵王座",3010919, 10000),
Array(" 蓝色龙椅",3010918, 10000),
Array(" 扇子月妙抱枕椅",3010913, 10000),
Array(" 蓝帽月妙抱枕椅",3010912, 10000),
Array(" 恶灵附身的娃娃椅子",3010915, 10000),
Array(" 太平萧月妙抱枕椅",3010914, 10000),
Array(" 阿卡伊勒童话书椅子",3010941, 10000),
Array(" 扎昆的帝王椅子",3010943, 10000),
Array(" 魔力品克缤",3010942, 10000),
Array(" 异界的半半椅子",3010937, 10000),
Array(" 青蛙跳楼机",3010936, 10000),
Array(" 异界的匈奴椅子",3010939, 10000),
Array(" 异界的血腥女王椅子",3010938, 10000),
Array(" 狗狗酣睡椅子",3010935, 10000),
Array(" 阿卡伊勒童话书椅子",3010895, 10000),
Array(" 一杯咖啡的悠闲",3010894, 10000),
Array(" 红色设计师椅子",3010909, 10000),
Array(" 海蓝天鹅绒沙发",3010908, 10000),
Array(" 红帽月妙抱枕椅",3010911, 10000),
Array(" 艾莉珍椅子",3010910, 10000),
Array(" 柿子树鞦韆",3010905, 10000),
Array(" 椰子树沙滩椅",3010904, 10000),
Array(" 公沙沙兔靠垫",3010907, 10000),
Array(" 云朵洗手间椅子",3010906, 10000),
Array(" 热情的红色药水椅子",3010901, 10000),
Array(" 宝石枫叶椅子",3010900, 10000),
Array(" 兔子椅子",3010903, 10000),
Array(" 新鲜的蓝色药水椅子",3010902, 10000),
Array(" 生日快乐，恶魔",3010897, 10000),
Array(" 我的女皇椅子",3010896, 10000),
Array(" 摆钟椅子",3010899, 10000),
Array(" 迷你神兽椅子",3010898, 10000),
Array(" 皇宫盛宴椅子",3010984, 10000),
Array(" 兔子箱椅子",3010980, 10000),
Array(" 家庭聚餐椅子",3010983, 10000),
Array(" ",3010977, 10000),
Array(" 为我加油！椅子",3010976, 10000),
Array(" 军团长奥尔卡枕头椅",3010979, 10000),
Array(" 俘虏奥尔卡枕头椅",3010978, 10000),
Array(" 钓鱼用椅子",3011000, 10000),
Array(" “主人，请用餐”椅子",3010999, 10000),
Array(" 铁定咖啡",3010957, 10000),
Array(" 初优果饮",3010956, 10000),
Array(" SOS",3010959, 10000),
Array(" 美式冰咖啡",3010958, 10000),
Array(" 幸运的金蛋椅子",3010955, 10000),
Array(" 与虎啸九天派一起",3010948, 10000),
Array(" 冥王星椅子",3010944, 10000),
Array(" 与飞龙在天派一起",3010947, 10000),
Array(" 森林伙伴野营椅子",3010946, 10000),
Array(" 蝙蝠椅子",3010973, 10000),
Array(" 假面绅士抱枕椅子",3010968, 10000),
Array(" 人鱼的珊瑚礁",3010965, 10000),
Array(" 冒险岛世界椅子",3010964, 10000),
Array(" 假面绅士海报椅子",3010967, 10000),
Array(" 幽灵船椅子",3010966, 10000),
Array(" 沙冰",3010961, 10000),
Array(" 甜甜黑巧克力蛋糕",3010960, 10000),
Array(" 交织甜甜圈",3010962, 10000),
Array(" 梦幻雪晶球",3012009, 10000),
Array(" 稻荷神社椅子",3012008, 10000),
Array(" 我爱巧克力火锅",3012011, 10000),
Array(" 巧克力蛋糕恋人",3012010, 10000),
Array(" 石狮椅子",3012007, 10000),
Array(" 风吹稻香",3012006, 10000),
Array(" 篝火",3012001, 10000),
Array(" 爱心椅子",3012003, 10000),
Array(" 浴桶",3012002, 10000),
Array(" 萌宠下午茶杯椅子",3012028, 10000),
Array(" 猴子恋人椅",3012031, 10000),
Array(" 和你在一起椅子",3012030, 10000),
Array(" 小鸡弹簧床椅子",3012025, 10000),
Array(" 沙滩排球椅子",3012024, 10000),
Array(" 羊羊热气球椅子",3012027, 10000),
Array(" 旋转花茶杯情侣椅子",3012026, 10000),
Array(" 彩虹云朵椅子",3012021, 10000),
Array(" 紫藤花吊篮椅",3012020, 10000),
Array(" mPhone椅子",3012023, 10000),
Array(" 寿司小火车椅子",3012022, 10000),
Array(" 巧克力奶酪椅子",3012017, 10000),
Array(" 情侣糖果椅子",3012016, 10000),
Array(" 爱琴海椅子",3012019, 10000),
Array(" 萌萌育婴摇篮",3012018, 10000),
Array(" 浪漫跳伞双人椅子",3012036, 10000),
Array(" ",3012033, 10000),
Array(" 甜蜜蛋糕屋情侣椅子 ",3012032, 10000),
Array(" 萌兔的胡萝卜篮椅子",3012034, 10000),
Array(" 蛇年团圆椅",3013007, 10000),
Array(" けいおん！ドラム椅子",3013001, 10000),
Array(" 樱花树下",3013000, 10000),
Array(" 烟花祭",3013002, 10000),
Array(" 阿里山火车",3013009, 10000),
Array(" 第104期训练兵团小组椅子",3013008, 10000),
Array(" 与前来射手村兜风的怪物们合影！",3014013, 10000),
Array(" 富士山下椅子",3014012, 10000),
Array(" 废弃都市演出照片椅",3014015, 10000),
Array(" 射手村演出照片椅",3014014, 10000),
Array(" 黑板椅子",3014009, 10000),
Array(" 击掌漫画椅子",3014008, 10000),
Array(" 荣誉名声",3014011, 10000),
Array(" 捕获僵尸拍立得",3014010, 10000),
Array(" 荣誉的象征",3014005, 10000),
Array(" 案件聚焦椅子",3014004, 10000),
Array(" 南国度假信息椅子",3014006, 10000),
Array(" 完美漫画椅子",3014001, 10000),
Array(" 惊人漫画椅子",3014000, 10000),
Array(" 封面模特椅子",3014003, 10000),
Array(" 击掌漫画椅子",3014002, 10000),
Array(" 春节爱的视频简讯椅子",3014029, 10000),
Array(" 辉煌荣誉的象征",3014028, 10000),
Array(" V霓虹版椅子",3014025, 10000),
Array(" 在月色鹊桥相遇的那一天",3014024, 10000),
Array(" 小黑板椅子",3014027, 10000),
Array(" 赏樱郊游",3014026, 10000),
Array(" 和你一同的春季踏青",3014021, 10000),
Array(" 决战巅峰者",3014020, 10000),
Array(" 你还有那些怪物",3014023, 10000),
Array(" 和你一同密室逃脱之日",3014022, 10000),
Array(" 时间神殿演出照片椅",3014017, 10000),
Array(" 阿里安特演出照片椅",3014016, 10000),
Array(" V霓虹版椅子",3014019, 10000),
Array(" 林中之城演出照片椅",3014018, 10000)
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
