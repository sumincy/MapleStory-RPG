﻿var status = -1;
var beauty = 0;
var hair_Colo_new;

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
            cm.askMenu("如果您有#b#t5150052##k或者#b#t5151036##k，就让我来为您打造新的形象吧！下面做出您的选择吧。\r\n#b#L0#美发（使用#b#t5150052#）#l\r\n#L1#染发（使用#b#t5151036#）#l");
            break;
        case 1:
            if (selection == 0) {
                var hair = cm.getPlayerStat("HAIR");
                hair_Colo_new = [];
                beauty = 1;
                if (cm.getPlayerStat("GENDER") == 0) {
                    hair_Colo_new = [30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30380, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 30990, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33420, 33430, 33440, 33450, 33460, 33470, 33480, 33490, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33970, 33980, 33990, 36000, 36010, 36020, 36030, 36040, 36050, 36070, 36080, 36090, 36100, 36110, 36120, 36130, 36140, 36150, 36160, 36170, 36180, 36190, 36210, 36220, 36230, 36240, 36250, 36290, 36300, 36310, 36330, 36340, 36350, 36360, 36370, 36380, 36410, 36420, 36430, 36440, 36450, 36460, 36470, 36480, 36510, 36520, 36530, 36540, 36550, 36560, 36580, 36590, 36640, 36680, 36700, 36720, 37550];
                } else {
                    hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
                }
                for (var i = 0; i < hair_Colo_new.length; i++) {
                    hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
                }
                cm.askAvatar("我能把您现在的头发换个全新的发型。您对现在的发型不厌倦吗？只要您有#b#t5150052##k，我就帮您换发型。慢慢挑选您想要的发型吧！", hair_Colo_new, 5150052);
            } else if (selection == 1) {
                var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
                hair_Colo_new = [];
                beauty = 2;
                for (var i = 0; i < 8; i++) {
                    hair_Colo_new[i] = currenthaircolo + i;
                }
                cm.askAvatar("我能把您现在的头发换个全新的颜色。您对现在的发色不厌倦吗？只要您有#b#t5151036##k，我就帮您换发色。慢慢挑选您想要的发色吧！", hair_Colo_new, 5151036);
            }
            break;
        case 2:
            if (beauty == 1) {
                if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                    cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
                } else {
                    cm.sendOk("嗯……您好像没有#b#t5150052##k啊？不好意思，没有会员卡的话，我不能帮您美发。");
                }
            } else {
                if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                    cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
                } else {
                    cm.sendOk("嗯……您好像没有#b#t5151036##k啊？不好意思，没有会员卡的话，我不能帮您染发。");
                }
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}