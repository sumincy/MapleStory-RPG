﻿var facetype = [];
var faceCard = [5152053, 5152093, 5152094, 5152098, 5152211, 5152053];
var status = -1;
var beauty = -1;
var types = -1;
var ct = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.askMenu("你好，我是整形手术领域的艺术家#b#p9201148##k。我可以为你做脸部整形手术。怎么样？ 你想让自己的脸变得完美无瑕吗？\r\n#b#L0#换脸(使用皇家整容优惠劵)#l\r\n#b#L1#换脸(使用经典皇家整容优惠劵)#l\r\n#b#L2#换脸(RED皇家整容优惠劵)#l\r\n#b#L3#换脸(周年庆皇家整容劵)#l\r\n#b#L4#换脸(闪耀之星皇家整容劵)#l\r\n#b#L5#换脸(BMS新加皇家整容劵)#l");
            break;
        case 1:
            beauty = selection;
            getFaceID(selection);
            var iNow = 0;
            var face = cm.getPlayerStat("FACE");
            var faceTypeNow = [];
            for (var i = 0; i < facetype.length; i++) {
                if (facetype[i] != face - face % 1000 + face % 100) {
                    faceTypeNow[iNow++] = facetype[i] + face % 1000 - (face % 100);
                }
            }
            facetype = cm.getCanFace(faceTypeNow);
            cm.askMenu("那么你想...\r\n#b#L0#看看这里都有什么脸型#l\r\n#b#L1#变换脸型#l");
            break;
        case 2:
            if (selection == 0) {
                types = 0;
                cm.askAvatar("那么请随便随便看..", facetype, faceCard[beauty]);

            } else if (selection == 1) {
                types = 1;
                if (beauty != -1) {
                    cm.askYesNo("使用#b#t" + faceCard[beauty] + "##k，可以随意更改脸型。但是请别担心，我的手术已经达到了一树的境界。你真的要使用#b#t0" + faceCard[beauty] + "##k，更换发型吗？");
                } else {
                    cm.sendOk("出现未知错误");
                    cm.dispose();
                }
            }
            break;
        case 3:
            if (types == 0) {
                status = 0;
                action(mode, type, beauty);
            } else {
                if (cm.setRandomAvatar(faceCard[beauty], facetype) == 1) {
                    cm.dispose();
					cm.sendOk("好了,让朋友们赞叹你的新脸型吧!");
                    status = -1;
                    cm.addTrait("charm", 50);
                } else {
                    cm.askYesNo("您没有可使用的会员卡。是否想消耗980抵用券/点卷直接购买使用？");
                }
            }
            break;
        case 4:
            status = 2;
            if (cm.getChar().getCSPoints(1) >= 980) {
                ct = 1;
            }
            if (cm.getChar().getCSPoints(2) >= 980) {
                ct = 2;
            }
            if (ct != -1) {
                cm.gainNX(ct, -980);
                cm.gainItem(faceCard[beauty], 1);
                //cm.sendOk("你好像没有足够的点卷/抵用卷!");
                //cm.playerMessage(1, "你好像没有足够的点卷/抵用卷!");
            } else {
                beauty = -1;
            }
            action(mode, type, selection);
            break;
        default:
            cm.dispose();
            break;
    }
}

function getFaceID(selection) {
    switch (selection) {
        case 0://5152053, 5152093, 5152094, 5152098,5152211
            if (cm.getPlayerStat("GENDER") == 0) {//皇家
                facetype = [
                    20000, //最初冒                 
					20001, //最初冒险(帅)
                    20002, //最初冒险(柔)
                    20003, //不屑
                    20004, //别惹我
                    20005, //好少年
                    20006, //性感嘴唇
                    20007, //乖萌
                    20008, //无所谓
                    20009, //讨厌
                    20010, //皱眉
                    20011, //反应慢
                    20012, //精干大眼
                    20013, //不良少年
                    20014, //柔情大眼
                    20015, //怒气
                    20016, //神气大眼
                    20017, //正派
                    20018, //小书生
                    20019, //小公举
                    20020, //藐视
                    20021, //笑眯眯
                    20022, //小淘气
                    20023, //温柔赞许
                    20024, //干瞪眼
                    20025, //天然呆
                    20026, //闭眼
                    20027, //泪痣
                    20028, //嫌弃
                    20029, //坏坏
                    20031, //懒散
                    20030, //傲视
                    20033, //伪娘
                    20032, //迷离
                    20037, //龙神
                    20048, //帅气魔族
                    20049, //冷酷精灵
                    23000, //活力冒险家
                    23001, //勇敢冒险家险(萌)
                    20050 //近视
                ];
            } else {
                facetype = [
                    21000, //最初冒险(酷)
                    21001, //最初冒险(萌)
                    21002, //最初冒险(帅)
                    21003, //小美
                    21004, //炯炯有神
                    21005, //嘟嘴小眼
                    21006, //嘟嘴大眼
                    21007, //成熟浓妆
                    21008, //无辜
                    21009, //干瞪眼
                    21010, //滴溜溜
                    21011, //水汪汪
                    21012, //睁大眼
                    21013, //下垂眼
                    21014, //弱弱
                    21015, //凶巴巴
                    21016, //神采奕奕
                    21017, //聚精会神
                    21018, //迷离
                    21019, //严肃
                    21020, //对眼
                    21021, //葵瓜子眼
                    21022, //美少妇
                    21023, //空洞
                    21025, //闭眼
                    21026, //忧思
                    21024, //泪痣
                    21027, //石榴姐
                    21029, //小淘气
                    21028, //卡哇伊
                    21030, //嫑笑
                    21031, //乖小囡
                    21035, //龙神
                    21046, //帅气魔族
                    21047, //冷酷精灵
                    21053, //冷艳
                    21054, //美瞳
                    21055, //温和精灵
                    21056, //耍酷幻影
                    21057//温柔幻影
                ];
            }
            break;
        case 1:
            if (cm.getPlayerStat("GENDER") == 0) {//经典皇家
                facetype = [
                    20053, //单眼皮
                    20051, //猫眼
                    20055, //呆萌
                    20056, //美瞳
                    20057, //温和精灵
                    20058, //耍酷幻影
                    20059, //温柔幻影
                    20060, //坚毅
                    20061, //豆豆
                    20062, //犀利利
                    20063, //大方脸
                    20065, //双刀
                    20066, //噘嘴
                    20067, //好好先生
                    20068, //忧愁
                    20069, //米哈尔
                    20070, //漫画高手
                    20074, //坚韧异瞳
                    20075, //冷静异瞳
                    20077, //铃铛眼
                    20076, //狂龙战士
                    20080, //星星眼
                    20081, //雪亮
                    20083, //懵懂少年
                    20084, //孤独
                    20085, //沉着
                    20086, //斯乌
                    20087, //端正
                    20088, //稚气少年
                    20043, //双瞳色
                    20045, //个性
                    20046, //外星人
                    20047, //漫画
                    20035, //水灵灵
                    20036, //战神
                    20141, //人心安卓
                    20142, //无心安卓
                    20040, //明眸
                    20052, //异界美型
                    20071, //瞳焰红
                    20072 //瞳焰紫
                ];
            } else {
                facetype = [
                    21058, //雪亮
                    21059, //小芳脸
                    21061, //双刀
                    21062, //噘嘴
                    21064, //忧愁
                    21065, //小傻瓜
                    21069, //坚韧异瞳
                    21070, //冷静异瞳
                    21071, //狂龙战士
                    21072, //铃铛眼
                    21073, //萌天使
                    21074, //聪明诺巴
                    21075, //可爱诺巴
                    21077, //大圆眼
                    21078, //漫画高手
                    21079, //阿莉亚
                    21080, //忧郁
                    21081, //奥尔卡
                    21082, //天真
                    21083, //典雅
                    21084, //吊眼
                    21085, //维丽尔
                    21041, //双瞳色
                    21043, //个性
                    21044, //外星人
                    21045, //漫画
                    21033, //水灵灵
                    21034, //战神
                    21036, //豆豆
                    21050, //异界美型
                    21038, //明眸
                    21139, //人心安卓
                    21140, //无心安卓
                    21049, //猫眼
                    21048, //近视
                    21052, //坚定
                    21066, //瞳焰红
                    21067, //瞳焰紫
                    21086, //初心者
                    21089//紫色妖姬
                ];
            }
            break;
        case 2:
            if (cm.getPlayerStat("GENDER") == 0) {//RED皇家
                facetype = [
                    20089, //初心者
                    20093, //妖艳眉
                    20094, //雄心勃勃
                    20095, //滴溜溜
                    20054, //坚定
                    20097, //水晶葡萄
                    20090, //顽皮
                    20098, //正太
                    20099, //提斯
                    20096, //眈眈
                    23002, //褐眉大侠
                    23003, //伦多
                    23005, //奥利弗
                    23004, //异能
                    23006, //呆萌少年
                    23008, //模范生
                    20864, //天真弟
                    20882, //凝视
                    20044, //深邃大眼
                    23013, //路人甲
                    23014, //路人乙
                    23010, //月光
                    23011, //聪明玲珑
                    23023, //信心满满
                    23012, //隐月
                    23021, //呆萌傻笑
                    23020, //大眼仔
                    23016, //宝玉
                    23018, //恶魔
                    23024, //睡美男
                    23017, //丹凤眼
                    23015, //大眼睫毛
                    23019, //古惑仔
                    23031, //深邃大圆眼
                    23028, //平静
                    23025 //委屈
                ];
            } else {
                facetype = [
                    21090, //凝神
                    21091, //琉璃眼
                    21093, //水晶葡萄
                    21094, //亲切冒险家
                    21095, //非凡冒险家
                    21092, //温柔女孩
                    24001, //萝莉
                    21096, //奕奕
                    21097, //修嘉
                    21198, //奥利维亚
                    24002, //褐眉女侠
                    24003, //坚毅女侠
                    21099, //未来机器人
                    24004, //呆萌少女
                    // 21860, //天真妹
                    21863, //俏皮眼
                    21042, //深邃大眼
                    24009, //路人甲
                    24010, //路人乙
                    24007, //月光
                    24008, //朦妹妹
                    24016, //大眼
                    24018, //大佬夫人
                    24011, //假睫毛
                    24012, //黛玉
                    24019, //模范生
                    24014, //恶魔
                    24020, //睡美人
                    24021, //俏夫人
                    24013, //小凤仙
                    24015, //古惑囡
                    24026, //深邃大圆眼
                    24024, //平静
                    24022, //委屈
                    24023, //艳夫人
                    24027, //水晶之心
                    24025, //大姐大
                    24028, //自然萌
                    24031, //睫毛弯弯
                    24032 //紫色诱惑
                ];
            }
            break;
        case 3:
            if (cm.getPlayerStat("GENDER") == 0) {//周年庆皇家
                facetype = [
                    23026, //学生1
                    23027, //学生2
                    23032, //水晶之心
                    23029, //鹰钩鼻大叔
                    23030, //僵尸脸
                    23035, //坚决
                    23033, //自然萌
                    23039, //兵团少年
                    23041, //刚毅
                    23042, //深邃
                    23043, //悲壮
                    23038, //迪伦
                    23034, //娃娃脸
                    23055, //未来机器人
                    23058, //天天变整容
                    23057, //芝麻眼
                    23056, //星光熠熠
                    23044, //派对精灵
                    23653, //不高兴
                    23654, //婴儿脸
                    23059, //逗比
                    23563, //小乖乖
                    23064, //笑盈盈
                    23060, //纯真年代
                    20091, //侍神
                    20092, //隼人
                    20273, //热血剑豪
                    20078, //坚毅剑豪
                    23069, //妖精
                    23071, //乖宝贝
                    23065, //真挚
                    23066, //冷静
                    23076, //黯然神伤
                    23072, //忧郁少年
                    23878, //憔悴病怏怏
                    23877, //中年帅哥
                    23070 //男才脸型
                ];
            } else {
                facetype = [
                    24036, //兵团少女
                    24038, //冷酷
                    24039, //正直 
                    24040, //悲壮
                    24041, //糕点师
                    24035, //水朦朦
                    24029, //娃娃脸
                    24056, //天天变整容
                    24053, //哈允德
                    24055, //芝麻眼
                    24054, //星光熠熠
                    24050, //派对精灵
                    24051, //婴儿脸
                    24057, //逗比
                    24061, //笑盈盈
                    24058, //纯真年代
                    24059, //水晶女孩
                    24060, //小乖乖
                    21087, //热血剑豪
                    21088, //侍神
                    21068, //阴阳道师
                    21076, //阴阳术士
                    24068, //妖精
                    24069, //女貌脸型
                    24070, //乖宝贝
                    24071, //黯然神伤
                    24063, //精干
                    24064, //温柔
                    24072//忧郁少女
                ];
            }
            break;
        case 4:
            if (cm.getPlayerStat("GENDER") == 0) {//闪耀之星
                facetype = [
                    23017, //丹凤眼
                    20083, //懵懂少年
                    23034, //娃娃脸
                    20080, //星星眼
                    20147, //漫画
                    20377, //铃铛眼
                    23033, //自然萌
                    23039, //兵团少年
                    23041, //刚毅
                    23042, //深邃
                    23043, //悲壮
                    23038, //迪伦
                    23034, //娃娃脸
                    23055, //未来机器人
                    23058, //天天变整容
                    23057, //芝麻眼
                    23056, //星光熠熠
                    23044, //派对精灵
                    23653, //不高兴
                    23654, //婴儿脸
                    23059, //逗比
                    23563, //小乖乖
                    23064, //笑盈盈
                    23060, //纯真年代
                    20091, //侍神
                    20092, //隼人
                    20273, //热血剑豪
                    20078, //坚毅剑豪
                    23069, //妖精
                    23071, //乖宝贝
                    23065, //真挚
                    23066, //冷静
                    23076, //黯然神伤
                    23072, //忧郁少年
                    23878, //憔悴病怏怏
                    23877, //中年帅哥
                    23070 //男才脸型
                ];
            } else {
                facetype = [
                    24036, //兵团少女
                    24038, //冷酷
                    24039, //正直 
                    24040, //悲壮
                    24041, //糕点师
                    24035, //水朦朦
                    24029, //娃娃脸
                    24056, //天天变整容
                    24053, //哈允德
                    24055, //芝麻眼
                    24054, //星光熠熠
                    24050, //派对精灵
                    24051, //婴儿脸
                    24057, //逗比
                    24061, //笑盈盈
                    24058, //纯真年代
                    24059, //水晶女孩
                    24060, //小乖乖
                    21087, //热血剑豪
                    21088, //侍神
                    21068, //阴阳道师
                    21076, //阴阳术士
                    24068, //妖精
                    24069, //女貌脸型
                    24070, //乖宝贝
                    24071, //黯然神伤
                    24063, //精干
                    24064, //温柔
                    24072, //忧郁少女
                    21077, //大圆眼
                    24816, //大眼睛
                    24050, //派对精灵
                    24057, //逗比脸型
                    23053, //不高兴
                    23064, //笑盈盈
                    24020, //睡美人
                    24126, //甜美脸型
                    24059, //水晶女孩
                    23057, //芝麻眼
                    24052//未来机器人
                ];
            }
            break;
		case 5:
            if (cm.getPlayerStat("GENDER") == 0) {//BMS新加
                facetype = [
                    


20009,
20010,
20011,
20012,
20013,
20014,
20015,
20016,
20017,
20018,
20019,
20020,
20021,
20022,
20023,
20024,
20025,
20026,
20027,
20028,
20029,
20030,
20031,
20032,
20033,
20034,
20035,
20036,
20037,
20038,
20039,
20040,
20041,
20042,
20043,
20044,
20045,
20046,
20047,
20048,
20049,
20050,
20051,
20052,
20053,
20054,
20055,
20056,
20057,
20058,
20059,
20060,
20061,
20062,
20063,
20064,
20065,
20066,
20067,
20068,
20069,
20070,
20071,
20072,
20073,
20074,
20075,
20076,
20077,
20078,
20079,
20080,
20081,
20082,
20083,
20084,
20085,
20086,
20087,
20088,
20089,
20090,
20091,
20092,
20093,
20094,
20095,
20096,
20097,
20098,
20099,
20100,
20101,
20102,
20103,
20104,
20105,
20106,
20107,
20108,
20109,
20110,
20111,
20112,
20113,
20114,
20115,
20116,
20117,
20118,
20119,
20120,
20121,
20122,
20123,
20124,
20125,
20126,
20127,
20128,
20129,
20130,
20131,
20132,
20133,
20134,
20135,
20136,
20137,
20138,
20139,
20140,
20141,
20142,
20143,
20144,
20145,
20146,
20147,
20148,
20149,
20150,
20151,
20152,
20153,
20154,
20155,
20156,
20157,
20158,
20159,
20160,
20161,
20162,
20163,
20164,
20165,
20166,
20167,
20168,
20169,
20170,
20171,
20172,
20173,
20174,
20175,
20176,
20177,
20178,
20179,
20180,
20181,
20182,
20183,
20184,
20185,
20186,
20187,
20188,
20189,
20190,
20191,
20192,
20193,
20194,
20195,
20196,
20197,
20198,
20199,
20200,
20201,
20202,
20203,
20204,
20205,
20206,
20207,
20208,
20209,
20210,
20211,
20212,
20213,
20214,
20215,
20216,
20217,
20218,
20219,
20220,
20221,
20222,
20223,
20224,
20225,
20226,
20227,
20228,
20229,
20230,
20231,
20232,
20233,
20234,
20235,
20236,
20237,
20238,
20239,
20240,
20241,
20242,
20243,
20244,
20245,
20246,
20247,
20248,
20249,
20250,
20251,
20252,
20253,
20254,
20255,
20256,
20257,
20258,
20259,
20260,
20261,
20262,
20263,
20264,
20265,
20266,
20267,
20268,
20269,
20270,
20271,
20272,
20273,
20274,
20275,
20276,
20277,
20278,
20279,
20280,
20281,
20282,
20283,
20284,
20285,
20286,
20287,
20288,
20289,
20290,
20291,
20292,
20293,
20294,
20295,
20296,
20297,
20298,
20299,
20300,
20301,
20302,
20303,
20304,
20305,
20306,
20307,
20308,
20309,
20310,
20311,
20312,
20313,
20314,
20315,
20316,
20317,
20318,
20319,
20320,
20321,
20322,
20323,
20324,
20325,
20326,
20327,
20328,
20329,
20330,
20331,
20332,
20333,
20334,
20335,
20336,
20337,
20338,
20339,
20340,
20341,
20342,
20343,
20344,
20345,
20346,
20347,
20348,
20349,
20350,
20351,
20352,
20353,
20354,
20355,
20356,
20357,
20358,
20359,
20360,
20361,
20362,
20363,
20364,
20365,
20366,
20367,
20368,
20369,
20370,
20371,
20372,
20373,
20374,
20375,
20376,
20377,
20378,
20379,
20380,
20381,
20382,
20383,
20384,
20385,
20386,
20387,
20388,
20389,
20390,
20391,
20392,
20393,
20394,
20395,
20396,
20397,
20398,
20399,
20400,
20401,
20402,
20403,
20404,
20405,
20406,
20407,
20408,
20409,
20410,
20411,
20412,
20413,
20414,
20415,
20416,
20417,
20418,
20419,
20420,
20421,
20422,
20423,
20424,
20425,
20426,
20427,
20428,
20429,
20430,
20431,
20432,
20433,
20434,
20435,
20436,
20437,
20438,
20439,
20440,
20441,
20442,
20443,
20444,
20445,
20446,
20447,
20448,
20449,
20450,
20451,
20452,
20453,
20454,
20455,
20456,
20457,
20458,
20459,
20460,
20461,
20462,
20463,
20464,
20465,
20466,
20467,
20468,
20469,
20470,
20471,
20472,
20473,
20474,
20475,
20476,
20477,
20478,
20479,
20480,
20481,
20482,
20483,
20484,
20485,
20486,
20487,
20488,
20489,
20490,
20491,
20492,
20493,
20494,
20495,
20496,
20497,
20498,
20499,
20500,
20501,
20502,
20503,
20504,
20505,
20506,
20507,
20508,
20509,
20510,
20511,
20512,
20513,
20514,
20515,
20516,
20517,
20518,
20519,
20520,
20521,
20522,
20523,
20524,
20525,
20526,
20527,
20528,
20529,
20530,
20531,
20532,
20533,
20534,
20535,
20536,
20537,
20538,
20539,
20540,
20541,
20542,
20543,
20544,
20545,
20546,
20547,
20548,
20549,
20550,
20551,
20552,
20553,
20554,
20555,
20556,
20557,
20558,
20559,
20560,
20561,
20562,
20563,
20564,
20565,
20566,
20567,
20568,
20569,
20570,
20571,
20572,
20573,
20574,
20575,
20576,
20577,
20578,
20579,
20580,
20581,
20582,
20583,
20584,
20585,
20586,
20587,
20588,
20589,
20590,
20591,
20592,
20593,
20594,
20595,
20596,
20597,
20598,
20599,
20600,
20601,
20602,
20603,
20604,
20605,
20606,
20607,
20608,
20609,
20610,
20611,
20612,
20613,
20614,
20615,
20616,
20617,
20618,
20619,
20620,
20621,
20622,
20623,
20624,
20625,
20626,
20627,
20628,
20629,
20630,
20631,
20632,
20633,
20634,
20635,
20636,
20637,
20638,
20639,
20640,
20641,
20642,
20643,
20644,
20645,
20646,
20647,
20648,
20649,
20650,
20651,
20652,
20653,
20654,
20655,
20656,
20657,
20658,
20659,
20660,
20661,
20662,
20663,
20664,
20665,
20666,
20667,
20668,
20669,
20670,
20671,
20672,
20673,
20674,
20675,
20676,
20677,
20678,
20679,
20680,
20681,
20682,
20683,
20684,
20685,
20686,
20687,
20688,
20689,
20690,
20691,
20692,
20693,
20694,
20695,
20696,
20697,
20698,
20699,
20700,
20701,
20702,
20703,
20704,
20705,
20706,
20707,
20708,
20709,
20710,
20711,
20712,
20713,
20714,
20715,
20716,
20717,
20718,
20719,
20720,
20721,
20722,
20723,
20724,
20725,
20726,
20727,
20728,
20729,
20730,
20731,
20732,
20733,
20734,
20735,
20736,
20737,
20738,
20739,
20740,
20741,
20742,
20743,
20744,
20745,
20746,
20747,
20748,
20749,
20750,
20751,
20752,
20753,
20754,
20755,
20756,
20757,
20758,
20759,
20760,
20761,
20762,
20763,
20764,
20765,
20766,
20767,
20768,
20769,
20770,
20771,
20772,
20773,
20774,
20775,
20776,
20777,
20778,
20779,
20780,
20781,
20782,
20783,
20784,
20785,
20786,
20787,
20788,
20789,
20790,
20791,
20792,
20793,
20794,
20795,
20796,
20797,
20798,
20799,
20800,
20801,
20802,
20803,
20804,
20805,
20806,
20807,
20808,
20809,
20810,
20811,
20812,
20813,
20814,
20815,
20816,
20817,
20818,
20819,
20820,
20821,
20822,
20823,
20824,
20825,
20826,
20827,
20828,
20829,
20830,
20831,
20832,
20833,
20834,
20835,
20836,
20837,
20838,
20839,
20840,
20841,
20842,
20843,
20844,
20845,
20846,
20847,
20848,
20849,
20850,
20851,
20852,
20853,
20854,
20855,
20856,
20857,
20858,
20859,
20860,
20861,
20862,
20863,
20864,
20865,
20866,
20867,
20868,
20869,
20870,
20871,
20872,
20873,
20874,
20875,
20876,
20877,
20878,
20879,
20880,
20881,
20882,
20883,
20884,
20885,
20886,
20887,
20888,
20889,
20890,
20891,
20892,
20893,
20894,
20895,
20896,
20897,
20898
                ];
            } else {
                facetype = [
                    26190,//睡眼惺忪（黑色眼睛）
                    25184,//睡眼惺忪（蓝色眼睛）
					26078,//猫眼整形（黑色眼睛）
					26079,//桃金娘（黑色眼睛）
					25075,//桃太郎（黑色眼睛）
					26077,//柴犬的凝视-女脸（黑色眼睛）
					26076,//浓眉大眼脸型（黑色眼睛）

					


26079,
26080,
26081,
26082,
26083,
26084,
26085,
26086,
26087,
26088,
26089,
26090,
26091,
26092,
26093,
26094,
26095,
26096,
26097,
26098,
26099,
26100,
26101,
26102,
26103,
26104,
26105,
26106,
26107,
26108,
26109,
26110,
26111,
26112,
26113,
26114,
26115,
26116,
26117,
26118,
26119,
26120,
26121,
26122,
26123,
26124,
26125,
26126,
26127,
26128,
26129,
26130,
26131,
26132,
26133,
26134,
26135,
26136,
26137,
26138,
26139,
26140,
26141,
26142,
26143,
26144,
26145,
26146,
26147,
26148,
26149,
26150,
26151,
26152,
26153,
26154,
26155,
26156,
26157,
26158,
26159,
26160,
26161,
26162,
26163,
26164,
26165,
26166,
26167,
26168,
26169,
26170,
26171,
26172,
26173,
26174,
26175,
26176,
26177,
26178,
26179,
26180,
26181,
26182,
26183,
26184,
26185,
26186,
26187,
26188,
26189,
26190,
26191,
26192,
26193,
26194,
26195,
26196,
26197,
26198,
26199,
26200,
26201,
26202,
26203,
26204,
26205,
26206,
26207,
26208,
26209,
26210,
26211,
26212,
26213,
26214,
26215,
26216,
26217,
26218,
26219,
26220,
26221,
26222,
26223,
26224,
26225,
26226,
26227,
26228,
26229,
26230,
26231,
26232,
26233,
26234,
26235,
26236,
26237,
26238,
26239,
26240,
26241,
26242,
26243,
26244,
26245,
26246,
26247,
26248,
26249,
26250,
26251,
26252,
26253,
26254,
26255,
26256,
26257,
26258,
26259,
26260,
26261,
26262,
26263,
26264,
26265,
26266,
26267,
26268,
26269,
26270,
26271,
26272,
26273,
26274,
26275,
26276,
26277,
26278,
26279,
26280,
26281,
26282,
26283,
26284,
26285,
26286,
26287,
26288,
26289,
26290,
26291,
26292,
26293,
26294,
26295,
26296,
26297,
26298,
26299,
26300,
26301,
26302,
26303,
26304,
26305,
26306,
26307,
26308,
26309,
26310,
26311,
26312,
26313,
26314,
26315,
26316,
26317,
26318,
26319,
26320,
26321,
26322,
26323,
26324,
26325,
26326,
26327,
26328,
26329,
26330,
26331,
26332,
26333,
26334,
26335,
26336,
26337,
26338,
26339,
26340,
26341,
26342,
26343,
26344,
26345,
26346,
26347,
26348,
26349,
26350,
26351,
26352,
26353,
26354,
26355,
26356,
26357,
26358,
26359,
26360,
26361,
26362,
26363,
26364,
26365,
26366,
26367,
26368,
26369,
26370,
26371,
26372,
26373,
26374,
26375,
26376,
26377,
26378,
26379,
26380,
26381,
26382,
26383,
26384,
26385,
26386,
26387,
26388,
26389,
26390,
26391,
26392,
26393,
26394,
26395,
26396,
26397,
26398,
26399,
26400,
26401,
26402,
26403,
26404,
26405,
26406,
26407,
26408,
26409,
26410,
26411,
26412,
26413,
26414,
26415,
26416,
26417,
26418,
26419,
26420,
26421,
26422,
26423,
26424,
26425,
26426,
26427,
26428,
26429,
26430,
26431,
26432,
26433,
26434,
26435,
26436,
26437,
26438,
26439,
26440,
26441,
26442,
26443,
26444,
26445,
26446,
26447,
26448,
26449,
26450,
26451,
26452,
26453,
26454,
26455,
26456,
26457,
26458,
26459,
26460,
26461,
26462,
26463,
26464,
26465,
26466,
26467,
26468,
26469,
26470,
26471,
26472,
26473,
26474,
26475,
26476,
26477,
26478,
26479,
26480,
26481,
26482,
26483,
26484,
26485,
26486,
26487,
26488,
26489,
26490,
26491,
26492,
26493,
26494,
26495,
26496,
26497,
26498,
26499,
26500,
26501,
26502,
26503,
26504,
26505,
26506,
26507,
26508,
26509,
26510,
26511,
26512,
26512,
26513,
26514,
26515,
26516,
26517,
26518,
26519,
26520,
26521,
26522,
26523,
26524,
26525,
26526,
26527,
26528,
26529,
26530,
26531,
26532,
26533,
26534,
26535,
26536,
26537,
26538,
26539,
26540,
26541,
26542,
26543,
26544,
26545,
26546,
26547,
26548,
24601,
24602,
24603,
24604,
24605,
24606,
24607,
24608,
24609,
24610,
24611,
24612,
24613,
24614,
24615,
24616,
24617,
24618,
24619,
24620,
24621,
24622,
24623,
24624,
24625,
24626,
24627,
24628,
24629,
24630,
24631,
24632,
24633,
24634,
24635,
24636,
24637,
24638,
24639,
24640,
24641,
24642,
24643,
24644,
24645,
24646,
24647,
24648,
24649,
24650,
24651,
24652,
24653,
24654,
24655,
24656,
24657,
24658,
24659,
24660,
24661,
24662,
24663,
24664,
24665,
24666,
24667,
24668,
24669,
24670,
24671,
24672,
24673,
24674,
24675,
24676,
24677,
24678,
24679,
24680,
24681,
24682,
24683,
24684,
24685,
24686,
24687,
24688,
24689,
24690,
24691,
24692,
24693,
24694,
24695,
24696,
24697,
24698,
24699,
24700,
24701,
24702,
24703,
24704,
24705,
24706,
24707,
24708,
24709,
24710,
24711,
24712,
24713,
24714,
24715,
24716,
24717,
24718,
24719,
24720,
24721,
24722,
24723,
24724,
24725,
24726,
24727,
24728,
24729,
24730,
24731,
24732,
24733,
24734,
24735,
24736,
24737,
24738,
24739,
24740,
24741,
24742,
24743,
24744,
24745,
24746,
24747,
24748,
24749,
24750,
24751,
24752,
24753,
24754,
24755,
24756,
24757,
24758,
24759,
24760,
24761,
24762,
24763,
24764,
24765,
24766,
24767,
24768,
24769,
24770,
24771,
24772,
24773,
24774,
24775,
24776,
24777,
24778,
24779,
24780,
24781,
24782,
24783,
24784,
24785,
24786,
24787,
24788,
24789,
24790,
24791,
24792,
24793,
24794,
24795,
24796,
24797,
24798,
24799,
24800
                ];
            }
            break;
    }
}