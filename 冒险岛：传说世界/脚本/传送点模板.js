/**
-- BMS 传送点脚本空白模板 -------------------------------------------------------------------------
传送点 ID： %传送点ID%
传送点名称： %传送点名称%
所在地图ID： %所在地图ID%
所在地图名称： %所在地图名称%
-- 作者 -------------------------------------------------------------------------------------------
模板：Jessefjxm
---------------------------------------------------------------------------------------------------
 **/

function enter(pi) {
	var cm = ms = rm = qm = im = pi;
	var id = pi.getPortal().getId();
	var name = pi.getPortal().getName();
	pi.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： %SCRIPT_PATH% 【注意】修改完脚本后要在控制台重载才能生效！");
}
