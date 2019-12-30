(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<aside [mdcDrawerContainer]=\"temporary\" [(open)]=\"drawerOpen\">\r\n  <nav mdcDrawer (click)=\"toggleDrawer()\">\r\n    <!-- <div mdcDrawerToolbarSpacer>\r\n      <a mdcToolbarTitle class=\"router-active\" routerLink=\"/\">明日方舟工具箱</a>\r\n    </div> -->\r\n    <div mdcDrawerHeader>\r\n      <div mdcDrawerHeaderContent>\r\n        <div fxLayout=\"row\" class=\"drawer-header\">\r\n          <a href=\"/\"><img class=\"img-header\" src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/icons/android-chrome-192x192.png\" /></a>\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"space-around end\">\r\n            <div>\r\n              <a mdcToolbarTitle class=\"router-active\" routerLink=\"/\">明日方舟工具箱</a><br />\r\n            </div>\r\n            <div>\r\n              <a mdcToolbarTitle class=\"router-active small\">by 一只灰喵</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mdcDrawerContent mdcListGroup>\r\n      <nav mdcList>\r\n        <a mdcListItem routerLink=\"/hr\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">person_add</i>公开招募\r\n        </a>\r\n        <a mdcListItem routerLink=\"/lvlup\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">trending_up</i>升级计算\r\n        </a>\r\n        <a mdcListItem routerLink=\"/material\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">add_shopping_cart</i>精英材料\r\n        </a>\r\n        <a mdcListItem routerLink=\"/charmat\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">nature_people</i>干员材料\r\n        </a>\r\n        <a mdcListItem routerLink=\"/autodetecthash\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">search</i>自动导入(hash)\r\n        </a>\r\n      </nav>\r\n      <hr mdcListDivider>\r\n      <nav mdcList>\r\n        <a mdcListItem href=\"https://github.com/graueneko/\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">email</i>联系作者\r\n        </a>\r\n        <a mdcListItem href=\"https://github.com/graueneko/aktools/\">\r\n          <i mdcListItemGraphic class=\"material-icons\" aria-hidden=\"true\">people</i>加入我们\r\n        </a>\r\n      </nav>\r\n    </div>\r\n  </nav>\r\n</aside>\r\n<header mdcToolbar *ngIf=\"showNavbar\">\r\n  <div mdcToolbarRow>\r\n    <section mdcToolbarSection alignStart shrinkToFit>\r\n      <div mdcToolbarRow>\r\n        <a mdcToolbarIcon class=\"material-icons\" (click)=\"toggleDrawer()\">menu</a>\r\n        <a href=\"/\">\r\n          <div class=\"toolbar-titles\"><img class=\"img-title\" src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/icons/android-chrome-192x192.png\" /></div>\r\n        </a>\r\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-md=\"true\" class=\"toolbar-titles\">\r\n          <span><a mdcToolbarTitle routerLink=\"/hr\" routerLinkActive=\"router-active\">公开招募</a></span>\r\n          <span><a mdcToolbarTitle routerLink=\"/lvlup\" routerLinkActive=\"router-active\">升级计算</a></span>\r\n          <span><a mdcToolbarTitle routerLink=\"/material\" routerLinkActive=\"router-active\">精英材料</a></span>\r\n          <span><a mdcToolbarTitle routerLink=\"/charmat\" routerLinkActive=\"router-active\">干员材料</a></span>\r\n          <span><a mdcToolbarTitle routerLink=\"/autodetecthash\" routerLinkActive=\"router-active\">自动导入(hash)</a></span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section mdcToolbarSection alignEnd>\r\n      <a mdcToolbarIcon class=\"material-icons\" *ngIf=\"nav.share\" aria-label=\"Share\" alt=\"Share\" title=\"分享\"\r\n        (click)=\"doShare()\">share</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" *ngIf=\"!nav.share\" aria-label=\"Copy\" alt=\"Copy\" title=\"分享\" ngxClipboard\r\n        [cbContent]=\"'明日方舟工具箱 - '+baseUrl\" (cbOnSuccess)=\"showSnackBar('链接已复制','好的')\">content_copy</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" aria-label=\"Update\" alt=\"Update\" title=\"更新\"\r\n        (click)=\"doUpdate()\">update</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" routerLink=\"/help\" aria-label=\"Help\" alt=\"Help\" title=\"帮助\">help</a>\r\n      <a mdcToolbarIcon class=\"material-icons\" routerLink=\"/settings\" aria-label=\"Settings\" alt=\"Settings\"\r\n        title=\"设置\">settings</a>\r\n    </section>\r\n  </div>\r\n</header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auto-detect-hash/auto-detect-hash.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auto-detect-hash/auto-detect-hash.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ad-containr\" fxLayout=\"column\">\r\n\r\n  <div mdcCard class=\"card-title\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n    <button mdcButton raised dense type=\"button\" (click)=\"fileInput.click()\">\r\n      选择仓库图片\r\n    </button>\r\n    <input #fileInput type=\"file\" id=\"test-image-file\" name=\"test\" accept=\"image/gif, image/jpeg, image/png, image/jpg\"\r\n      (change)=\"choiceImage($event)\" style=\"display:none;\">\r\n    <button mdcButton raised dense [disabled]=\"!ImageLoaded||ButtonLock\" (click)=\"objectRegonition()\">开始识别</button><br>\r\n  </div>\r\n  <div mdcCard fxLayout=\"row wrap\">\r\n    <div mdcCardActions fullBleed fxFlex=\"100\">\r\n      <a mdcButton (click)=\"toMaterialCalc()\">\r\n        保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div mdcCard>\r\n    <p style=\"text-align:center;margin:5px auto;\">{{InfoText}}</p>\r\n  </div>\r\n  <div mdcLinearProgress [progressValue]=\"progress\" bufferValue=\"1\"></div>\r\n  <canvas style=\"margin:0 auto;\" (click)=\"ModifyData(dialog,$event)\">浏览器不支持Canvas 建议您换用最新版的Chrome/Firefox浏览器</canvas>\r\n  <aside #dialog=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n    <div mdcDialogSurface>\r\n      <header mdcDialogHeader>\r\n        <h2 mdcDialogHeaderTitle>修改数据</h2>\r\n      </header>\r\n      <section mdcDialogBody>\r\n        <div id=\"headImage\" style=\"text-align: center;\">\r\n          <img [src]=\"ItemImage||''\" style=\"margin: 0 auto;\" width=\"100\" />\r\n        </div>\r\n        <div id=\"DataChange\" style=\"text-align: center;\">\r\n          <ng-container *ngIf=\"ModifyingItem!==null\">\r\n            <div mdcSelect style=\"width:80%;\">\r\n              <select mdcSelectControl [(ngModel)]=\"ModifyBuffer.name\" [disabled]='ModifyBuffer.delete'>\r\n                <option *ngFor=\"let item of ModifyingItem.item; let i=index\" [value]=\"item.name\" [selected]=\"i === 0\">\r\n                  {{item.name}}</option>\r\n              </select>\r\n              <label mdcFloatingLabel></label>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"ModifyingItem!==null\">\r\n              <div mdcTextField dense class=\"input-field\" style=\"width:80%;\">\r\n                  <span>\r\n                    <button mdcButton dense [disabled]='ModifyBuffer.delete'>\r\n                      <i mdcButtonIcon class=\"material-icons\" (click)=\"ModifyBuffer.have=ModifyBuffer.have-(ModifyBuffer.have>0?1:0)\">remove</i>\r\n                    </button>\r\n                  </span>\r\n                  <span style=\"width:100%;\">\r\n                    <input mdcTextFieldInput type=\"number\" [(ngModel)]=\"ModifyBuffer.have\" [disabled]='ModifyBuffer.delete'>\r\n                    <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">识别结果</label>\r\n                  </span>\r\n                  <span>\r\n                    <button mdcButton dense [disabled]='ModifyBuffer.delete'>\r\n                      <i mdcButtonIcon class=\"material-icons\" (click)=\"ModifyBuffer.have=ModifyBuffer.have+1\">add</i>\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n          </ng-container>\r\n          <p *ngIf=\"ModifyingItem!==null&&ModifyBuffer.delete\">该材料已被删除</p>\r\n        </div>\r\n      </section>\r\n      <footer mdcDialogFooter>\r\n        <button mdcButton mdcDialogCancel (click)=\"fixNumberHash(fixNumber)\">校准数字识别数据</button>\r\n        <button mdcButton *ngIf=\"ModifyingItem!==null\" (click)=\"toggleItem()\">{{ModifyBuffer.delete ? \"恢复该材料\" : \"删除该材料\"}}</button>\r\n        <button mdcButton mdcDialogCancel>取消</button>\r\n        <button mdcButton mdcDialogAccept (click)=\"AcceptModify()\">确定</button>\r\n      </footer>\r\n    </div>\r\n    <div mdcDialogBackdrop></div>\r\n  </aside>\r\n  <aside #fixNumber=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n      <div mdcDialogSurface>\r\n        <header mdcDialogHeader>\r\n          <h2 mdcDialogHeaderTitle>校准数字识别数据</h2>\r\n        </header>\r\n        <section mdcDialogBody>\r\n          <div id=\"headImage\" style=\"text-align: center;\">\r\n            <img *ngFor=\"let item of FixingNumberData; let i=index\" [src]=\"item.src\" style=\"margin: 0 5px;\" height=\"30\" width=\"20\" (click)=\"FixingNumberIndex=i\" [class.select]=\"i==FixingNumberIndex\"/>\r\n          </div>\r\n          <div id=\"DataChange\" style=\"text-align: center;\">\r\n              <div *ngIf=\"FixingNumberData[FixingNumberIndex]\" mdcTextField class=\"input-field\" style=\"width:80%;\">\r\n                  <input mdcTextFieldInput [(ngModel)]=\"FixingNumberData[FixingNumberIndex].realData\">\r\n                  <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">在此输入你选择的那个数字(或万)</label>\r\n              </div>\r\n          </div>\r\n          <div>\r\n            <p>通过对数字进行标记可以提升数字的识别准确度</p>\r\n            <p>你可以在这里对识别不准确的数字进行标记</p>\r\n            <p>程序会自动存储下你标记的数字数据以用于下次识别</p>\r\n            <p>点击识别错误的数字，然后在输入框填写你看到的文字</p>\r\n          </div>\r\n        </section>\r\n        <footer mdcDialogFooter>\r\n          <button mdcButton mdcDialogCancel>取消</button>\r\n          <button mdcButton mdcDialogAccept (click)=\"AcceptFixNumber()\">确定</button>\r\n        </footer>\r\n      </div>\r\n      <div mdcDialogBackdrop></div>\r\n    </aside>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auto-detect/auto-detect.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auto-detect/auto-detect.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ad-container\" fxLayout=\"column\">\n\n  <div mdcCard class=\"card-title\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <button mdcButton raised dense type=\"button\" (click)=\"fileInput.click()\">\n      选择仓库图片\n    </button>\n    <input #fileInput type=\"file\" id=\"test-image-file\" name=\"test\" accept=\"image/gif, image/jpeg, image/png, image/jpg\"\n      (change)=\"previewImage($event)\" style=\"display:none;\">\n    <button mdcButton raised dense [disabled]=\"!imageSrc\" (click)=\"objectRegonition()\">开始识别</button><br>\n    <a href=\"https://github.com/Luke-lujunxian/aktools/blob/auto-fillin/HOWTOHELP.md\"><small>识别率低/识别出错？</small></a>\n  </div>\n  <div mdcCard fxLayout=\"row wrap\">\n    <div mdcCardActions fullBleed fxFlex=\"100\">\n      <a mdcButton (click)=\"toMaterialCalc()\">\n        保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\n      </a>\n    </div>\n\n    <ng-container *ngFor=\"let m of detectedItemList\">\n      <div class=\"matcard-item\" fxFlex=\"25\" fxFlex.gt-xs=\"16\" fxLayout=\"column\" fxLayoutAlign=\"space-between center\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"matcard-item-image\">\n            <img class=\"mat-icon\" src=\"../../assets/img/material/{{m[0]}}.png\" />\n          </div>\n          <div class=\"mat-card-item-title\">\n            <p>{{this.getMaterialInfo(m[0])}}</p>\n          </div>\n        </div>\n        <div>\n          <div mdcTextField dense class=\"input-field\">\n            <span>\n              <button mdcButton dense (click)=\"m[1]=m[1]-(m[1]>0?1:0)\">\n                <i mdcButtonIcon class=\"material-icons\">remove</i>\n              </button>\n            </span>\n            <span>\n              <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"m[1]\">\n              <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">识别结果</label>\n            </span>\n            <span>\n              <button mdcButton dense (click)=\"m[1]=m[1]+1\">\n                <i mdcButtonIcon class=\"material-icons\">add</i>\n              </button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n\n\n  <img fxHide=false style=\"width: 100%; height: 100%\" [src]=\"imageSrc||''\" id=\"display\" alt=\"等待上传\">\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/char-mat-charcard/char-mat-charcard.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/char-mat-charcard/char-mat-charcard.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdcCard class=\"ch-lvl-{{char.rarity}}\">\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <div mdcInputField><button mdcIconButton class=\"material-icons\" (click)=\"emitRemove()\">close</button></div>\n      <div class=\"card-heading\">{{char.name}}</div>\n    </div>\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <!-- 精英化 -->\n      <div mdcFormField>\n        <button mdcButton class=\"btnTitle\">精英化</button>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(false,false)\" [attr.disabled]=\"data.ce>0?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.ce\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(false,true)\"\n            [attr.disabled]=\"data.ce>=limits.maxEvolve?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(true,false)\" [attr.disabled]=\"data.te>0?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.te\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onEvolveClick(true,true)\"\n            [attr.disabled]=\"data.te>=limits.maxEvolve?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <!-- 通用技能 -->\n      <div mdcFormField>\n        <button mdcButton class=\"btnTitle\">全技能</button>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(false,false)\" [attr.disabled]=\"data.cs>1?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.cs\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(false,true)\" [attr.disabled]=\"data.cs>=limits.maxSkill?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(true,false)\" [attr.disabled]=\"data.ts>1?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.ts\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSkillClick(true,true)\" [attr.disabled]=\"data.ts>=limits.maxSkill?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <div fxFlex=\"50\" fxFlex.gt-md=\"33\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n      *ngFor=\"let idx of data.specials\">\n      <!-- 专精技能 -->\n      <div mdcFormField>\n        <button mdcButton class=\"btnTitle\">{{char.sskillCosts[idx].skillName}}</button>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,false,false)\" [attr.disabled]=\"data.css[idx]>0?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.css[idx]\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,false,true)\"\n            [attr.disabled]=\"data.css[idx]>=limits.maxSpecial[idx]?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,true,false)\" [attr.disabled]=\"data.tss[idx]>0?null:''\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" (change)=\"onInputChange()\" [(ngModel)]=\"data.tss[idx]\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标</label>\n        </span>\n        <span>\n          <button *ngIf=\"!isExsm\" mdcButton dense (click)=\"onSpecialClick(idx,true,true)\"\n            [attr.disabled]=\"data.tss[idx]>=limits.maxSpecial[idx]?'':null\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/char-mat-matcard/char-mat-matcard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/char-mat-matcard/char-mat-matcard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdcCard fxLayout=\"row wrap\">\n  <div mdcCardActions fullBleed fxFlex=\"100\">\n    <a mdcButton (click)=\"toMaterialCalc()\">\n      保存并导入材料计算器 <i class=\"material-icons\" aria-hidden=\"true\">arrow_forward</i>\n    </a>\n  </div>\n  <div class=\"matcard-item place-holder\" fxFlex=\"100\"></div>\n  <ng-container *ngFor=\"let m of smats\">\n    <div class=\"matcard-item m-lvl-{{allmats[m.id].rarity}}\" fxFlex=\"45\" fxFlex.gt-xs=\"31\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <div class=\"matcard-item-image\">\n        <img src=\"../../assets/img/material/{{allmats[m.id].icon}}.png\" />\n      </div>\n      <div class=\"mat-card-item-title\">\n        <p>{{allmats[m.id].name}}</p>\n      </div>\n      <div class=\"mat-card-item-need\">\n        <p>{{m.count}}</p>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/char-mat/char-mat.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/char-mat/char-mat.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50%\" ngClass.gt-sm=\"padding-x-1\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n    <div fxFlex=\"26\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(ngModel)]=\"star\" (change)=\"onFilterChange()\">\n          <option value=\"0\" selected>全部</option>\n          <option value=\"6\">6★</option>\n          <option value=\"5\">5★</option>\n          <option value=\"4\">4★</option>\n          <option value=\"3\">3★</option>\n          <option value=\"2\">2★</option>\n          <option value=\"1\">1★</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">星级</label>\n      </div>\n    </div>\n    <div fxFlex=\"26\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(ngModel)]=\"prof\" (change)=\"onFilterChange()\">\n          <option value=\"全部\" selected>全部</option>\n          <option value=\"辅助\">辅助</option>\n          <option value=\"近卫\">近卫</option>\n          <option value=\"先锋\">先锋</option>\n          <option value=\"特种\">特种</option>\n          <option value=\"重装\">重装</option>\n          <option value=\"术师\">术师</option>\n          <option value=\"狙击\">狙击</option>\n          <option value=\"医疗\">医疗</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">职业</label>\n      </div>\n    </div>\n    <div fxFlex=\"26\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(ngModel)]=\"char\">\n          <option value=\"{{ch}}\" *ngFor=\"let ch of joindChars\">{{ch}}</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">干员</label>\n      </div>\n    </div>\n    <div>\n      <div mdcInputField>\n        <button mdcIconButton class=\"material-icons\" (click)=\"onCharAdd()\">add</button>\n      </div>\n    </div>\n    <div fxFlex=\"100\">\n      <div *ngFor=\"let chn of selectedChars\">\n        <app-char-mat-charcard [char]=\"cmMap[chn]\" (reportRemove)=\"onCharRemove($event)\"\n          (reportMats)=\"onMatReport($event)\"></app-char-mat-charcard>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50%\" ngClass.gt-sm=\"padding-x-1\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n    <app-char-mat-matcard [allmats]=\"mats\" [smats]=\"summarizedMats\"></app-char-mat-matcard>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/help/help.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/help.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-container\">\n    <h2>目录</h2>\n    <ul>\n        <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(iconstr)\"><strong>右上角图标说明</strong></a></li>\n        <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreen)\"><strong>添加到主屏幕</strong></a></li>\n        <ul>\n            <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreeni)\">添加到主屏幕(iOS)</a></li>\n            <li><a href=\"javascript:void(0)\" (click)=\"scrollToAnchor(homescreena)\">添加到主屏幕(Android)</a></li>\n        </ul>\n    </ul>\n    \n    <h2 #iconstr>右上角图标说明</h2>\n    <p>右上角图标根据浏览器不同可能会有不同的显示，但每个位置功能相同：</p>\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/iconstr1.jpg\" /><br />\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/iconstr2.jpg\" />\n    <p>依次为：复制或分享，更新，帮助，清空</p>\n    <ul>\n        <li><i class=\"material-icons\">content_copy</i><strong>复制</strong> 或<i class=\"material-icons\">share</i><strong>分享</strong> 按钮可以帮您快速分享或者保存本工具链接。</li>\n        <li><i class=\"material-icons\">update</i><strong>更新</strong> 按钮可以强制更新本App，由于更新速度较快，请时常点击一下。</li>\n        <li><i class=\"material-icons\">help</i><strong>帮助</strong> 按钮带您回到本页面。</li>\n        <li><i class=\"material-icons\">delete</i><strong>清空</strong> 按钮可以清除本地的输入数据信息，这并不会影响到下次应用加载速度，也不会强制更新。</li>\n    </ul>\n    \n    \n    <h2 #homescreen>添加到主屏幕教程</h2>\n    <p>本工具箱以移动设备优先，添加到主屏幕后可以获得原生App体验：</p>\n    <p>首次加载后，后续使用加载飞快，可以离线使用，自动更新。</p>\n    \n    <h4 #homescreeni>iOS 11及以上</h4>\n    <p>1. 使用Safari浏览器打开本站任意页面；</p>\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreen-04.jpg\" />\n    <p>2. 点击底部分享按钮；</p>\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreen-01.jpg\" />\n    <p>3. 选择“添加到主屏幕”；</p>\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreen-02.jpg\" />\n    <p>4. 若图标未加载出来，请稍等或者稍后重试；</p>\n    <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreen-03.jpg\" />\n    <p>5. 现在可以在主屏幕使用，无需安装。</p>\n    \n    <h4 #homescreena>Android 4.1以及上</h4>\n\t  <p>1. 使用Chrome浏览器打开本站任意页面；</p>\n\t  <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreena-01.jpg\" />\n\t  <p>2. 点击底部添加按钮；</p>\n\t  <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreena-02.jpg\" />\n    <p>3. 若按钮未加载出来，可以到菜单栏选择“添加到主屏幕”；</p>\n\t  <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreena-03.jpg\" />\n    <p>4. 点击“添加”；</p>\n\t  <img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/help/add-to-homescreena-04.jpg\" />\n    <p>5. 现在可以在主屏幕使用，无需安装。</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr-comb/hr-comb.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr-comb/hr-comb.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"option===0\">\n  <div mdcCard class=\"inline-block\" *ngFor=\"let comb of hrcombs; trackBy: trackComb\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [ngClass]=\"{'gap-row': true}\">\n      <div class=\"p-25\">\n        <button mdcButton outlined class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button>\n      </div>\n    </div>\n    <hr mdcListDivider>\n    <div class=\"p-25\">\n      <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\n        [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"option===1\">\n  <div *ngFor=\"let comb of hrcombs; trackBy: trackComb\">\n    <div mdcCard class=\"inline-block\">\n      <div class=\"p-25 inline-block gap-row\">\n        <button mdcButton outlined class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button> </div>\n      <span class=\"p-25\">\n        <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\n          [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\n      </span>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"option===2\">\n  <div class=\"table-container\">\n    <table>\n      <tr *ngFor=\"let comb of hrcombs; trackBy: trackComb; let even=even\" [ngClass]=\"{'gap-row': even}\">\n        <td>\n          <button mdcButton raised class=\"btn-tag\" *ngFor=\"let tag of comb.tags\">{{tag}}</button>\n        </td>\n        <td>\n          <button mdcButton raised (click)=\"onNameClick(char.name)\" class=\"char-lvl-{{char.level}}\"\n            [ngClass]=\"{'char-hl': char.name===charSelected}\" *ngFor=\"let char of comb.possible\">{{char.name}}</button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr-tags/hr-tags.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr-tags/hr-tags.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout=\"row inline\">\n  <div><button mdcButton raised id=\"btnClear\" (click)=\"clearTags()\">清空</button></div>\n  <div fxShow=\"false\" fxShow.lt-sm=\"false\">\n    <button mdcButton outlined raised>名称</button>\n    <button mdcButton outlined>图片</button>\n    <button mdcButton outlined>小</button>\n    <button mdcButton outlined>中</button>\n    <button mdcButton outlined>大</button>\n    <button mdcButton outlined>特大</button>\n  </div>\n</div> -->\n\n<div class=\"no-padding btnStarGroup\">\n  <button mdcButton outlined dense [raised]=\"selectedStars[0]\" (click)=\"onStarBtnClick(0)\">\n    ALL\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[6]\" (click)=\"onStarBtnClick(6)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>6\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[5]\" (click)=\"onStarBtnClick(5)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>5\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[4]\" (click)=\"onStarBtnClick(4)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>4\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[3]\" (click)=\"onStarBtnClick(3)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>3\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[2]\" (click)=\"onStarBtnClick(2)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>2\n  </button>\n  <button mdcButton outlined dense [raised]=\"selectedStars[1]\" (click)=\"onStarBtnClick(1)\">\n    <i mdcButtonIcon class=\"material-icons\">star</i>1\n  </button>\n</div>\n\n<table>\n  <tbody>\n    <tr [ngClass]=\"{'even-row': even}\" *ngFor=\" let tagrow of tagrows; let even=even\">\n      <td>\n        <button mdcButton class=\"btnRowTitle\">{{tagrow.title}}</button>\n      </td>\n      <td>\n        <button mdcButton outlined [raised]=\"selectedTags.includes(tag)\" (click)=\"onTagClick(tag)\"\n          *ngFor=\"let tag of tagrow.tags\">{{tag}}</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hr/hr.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hr/hr.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" class=\"hr-viewport\">\n  <div *ngIf=\"showTags\" fxFlex=\"100%\" fxFlex.gt-sm=\"39%\" [ngClass.gt-sm]=\"{'float-box': true}\">\n    <div [ngClass.gt-sm]=\"{'tagrows-container':true}\">\n      <app-hr-tags [tagrows]=\"hrdata.tagrows\" (reportSelectedTags)=\"onSelectTagChanged($event)\"\n        (reportSelectedStars)=\"onSelectStarChanged($event)\"></app-hr-tags>\n      <div fxLayout=\"row inline\">\n        <div ><button mdcButton raised id=\"btnClear\" (click)=\"clearTags()\">清空</button></div>\n        <div><button mdcButton raised [ngClass]=\"'option-'+option\" id=\"btnOption\"\n            (click)=\"toggleOption()\">切换TAG位置</button></div>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"60%\" fxFlexOffset.gt-sm=\"40%\">\n    <app-hr-comb [hrcombs]=\"hrdata.combs\" [charSelected]=\"charSelected\" [option]=\"option\"\n      (reportCharClick)=\"showCharTags($event)\">\n    </app-hr-comb>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lvlup/lvlup.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lvlup/lvlup.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n  <div fxFlex=\"100%\" fxFlex.gt-md=\"50%\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around start\">\n    <div fxFlex=\"30\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(ngModel)]=\"star\" (change)=\"onStarChange()\">\n          <option value=\"6\" selected>6★</option>\n          <option value=\"5\">5★</option>\n          <option value=\"4\">4★</option>\n          <option value=\"3\">3★</option>\n          <option value=\"2\">2★</option>\n          <option value=\"1\">1★</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">星级</label>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(value)]=\"lsMap\">\n          <option value=\"5\" selected>LS-5</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">经验本</label>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcSelect class=\"input-field\">\n        <select mdcSelectControl [(value)]=\"ceMap\">\n          <option value=\"5\" selected>CE-5</option>\n        </select>\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">金币本</label>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button mdcButton dense (click)=\"onEvolveChange(false,false)\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentEvolve\" placeholder=\"当前精英化\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前精英化</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"onEvolveChange(false,true)\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button mdcButton dense (click)=\"currentLvl=1\">\n            <i mdcButtonIcon class=\"material-icons\">first_page</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentLvl\" placeholder=\"当前等级\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前等级</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"toMaxLvl(true)\">\n            <i mdcButtonIcon class=\"material-icons\">last_page</i>\n          </button>\n        </span>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"currentExp\" placeholder=\"当前经验\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">当前经验</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"currentExp=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button mdcButton dense (click)=\"onEvolveChange(true,false)\">\n            <i mdcButtonIcon class=\"material-icons\">remove</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"targetEvolve\" placeholder=\"目标精英化\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标精英化</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"onEvolveChange(true,true)\">\n            <i mdcButtonIcon class=\"material-icons\">add</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <button mdcButton dense (click)=\"targetLvl=1\">\n            <i mdcButtonIcon class=\"material-icons\">first_page</i>\n          </button>\n        </span>\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"targetLvl\" placeholder=\"目标等级\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">目标等级</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"toMaxLvl(false)\">\n            <i mdcButtonIcon class=\"material-icons\">last_page</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n\n    <div fxFlex=\"30\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"gold\" placeholder=\"已有金币\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">已有金币</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"gold=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n    <div fxFlex=\"22\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookBasic\" placeholder=\"基础经验书\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'基础书':'基础经验书'}}</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"bookBasic=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n    <div fxFlex=\"22\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookPrimary\" placeholder=\"初级经验书\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'初级书':'初级经验书'}}</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"bookPrimary=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n    <div fxFlex=\"22\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookMiddle\" placeholder=\"中级经验书\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'中级书':'经验书'}}</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"bookMiddle=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n\n    </div>\n\n    <div fxFlex=\"22\">\n      <div mdcTextField dense class=\"input-field\">\n        <span>\n          <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"bookAdvanced\" placeholder=\"\">\n          <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">{{isExsm?'高级书':'高级经验书'}}</label>\n        </span>\n        <span>\n          <button mdcButton dense (click)=\"bookAdvanced=0\">\n            <i mdcButtonIcon class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n      <span>\n        <button mdcButton raised class=\"btnCalc\" (click)=\"calc()\">计算</button>\n      </span>\n    </div>\n  </div>\n\n  <div fxFlex=\"100%\" fxFlex.gt-md=\"50%\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around start\">\n    <div mdcCard>\n      <div class=\"custom-card-group-heading\">{{star}}★ 精{{currentEvolve}}.LV{{currentLvl}} →\n        精{{targetEvolve}}.LV{{targetLvl}}</div>\n      <hr mdcListDivider>\n      <table>\n        <tbody>\n          <tr>\n            <th>体力总计</th>\n            <td>\n              <b>{{math.ceil(lsAp+ceAp)}}</b> <sub> = {{math.ceil(lsAp)}} + {{math.ceil(ceAp)}}</sub>\n            </td>\n          </tr>\n          <tr>\n            <th>经验</th>\n            <td>\n              <b>{{math.ceil(lvlupExp-expMinus>0?(lvlupExp-expMinus):0)}}</b> <sub> = {{math.ceil(lvlupExp)}} -\n                {{math.ceil(expMinus)}}</sub>\n            </td>\n          </tr>\n          <tr>\n            <th>LS体力 <sub>场数</sub></th>\n            <td>\n              <b>{{math.ceil(lsAp)}}</b> <sub> = 30 * {{math.ceil(lsCount)}}</sub>\n            </td>\n          </tr>\n          <tr>\n            <th>金币</th>\n            <td>\n              <b>{{math.ceil(lvlupGold+evolveGold-goldMinus>0?(lvlupGold+evolveGold-goldMinus):0)}}</b> <sub> =\n                {{math.ceil(lvlupGold+evolveGold)}} - {{goldMinus}}</sub>\n            </td>\n          </tr>\n          <tr>\n            <th>CE体力 <sub>场数</sub></th>\n            <td>\n              <b>{{math.ceil(ceAp)}}</b> <sub> = 30 * {{math.ceil(ceCount)}}</sub>\n            </td>\n          </tr>\n          <tr>\n            <th>升级金币</th>\n            <td>\n              {{math.ceil(lvlupGold)}}\n            </td>\n          </tr>\n          <tr>\n            <th>精英化金币</th>\n            <td>\n              {{math.ceil(evolveGold)}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- <table>\n      <thead>\n        <tr>\n          <th>资源</th><td>\n          <th>需求</th><td>\n        </td></tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th>体力总计</th><td>\n          <b>{{lsAp+ceAp}}</b> <sub>= {{lsAp}} + {{ceAp}}</sub>\n        </td></tr>\n        <tr>\n          <th>经验</th><td>\n          <b>{{lvlupExp-expMinus>0?(lvlupExp-expMinus):0}}</b> <sub>= {{lvlupExp}} - {{expMinus}}</sub>\n        </td></tr>\n        <tr>\n          <th>LS体力 <sub>场数</sub></th><td>\n          <b>{{lsAp}}</b> <sub>= 30 * {{lsCount}}</sub>\n        </td></tr>\n        <tr>\n          <th>金币</th><td>\n          <b>{{lvlupGold+evolveGold-goldMinus>0?(lvlupGold+evolveGold-goldMinus):0}}</b> <sub>=\n              {{lvlupGold+evolveGold}} - {{goldMinus}}</sub>\n        </td></tr>\n        <tr>\n          <th>CE体力 <sub>场数</sub></th><td>\n          <b>{{ceAp}}</b> <sub>= 30 * {{ceCount}}</sub>\n        </td></tr>\n        <tr>\n          <th>升级金币</th><td>\n          {{lvlupGold}}\n        </td></tr>\n        <tr>\n          <th>精英化金币</th><td>\n          {{evolveGold}}\n        </td></tr>\n      </tbody>\n    </table> -->\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div fxLayout=\"row\">\n        <div>\n            <img class=\"img-title\" src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/icons/android-chrome-512x512.png\" />\n        </div>\n        <div>\n            <h2>明日方舟工具箱</h2>\n            <p>欢迎使用，请在导航栏选择相应功能使用。</p>\n            <p class=\"notice\"><a href=\"https://mrfz.xyz/?ak\">另一个工具箱 mrfz.xyz</a></p>\n            <p *ngIf=\"!cn\" class=\"notice\"><a href=\"https://akcn.mrfz.xyz\">国内用户请点这里</a></p>\n            <p *ngIf=\"cn\" class=\"notice\"><a href=\"https://ak.mrfz.xyz\">国际用户请点这里</a></p>\n\n        </div>\n    </div>\n    &nbsp;\n    <p>Tip: 移动端和平板用户可以将任意页面添加到桌面，获得与本地App相同的使用体验：快速加载，离线使用，自动更新。</p>\n    <p>详情请点击右上角<i class=\"material-icons\">help</i>查看。</p>\n    <div fxLayout=\"row wrap\">\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <h3>已实现功能</h3>\n            <ul>\n                <li>公开招募</li>\n                <li>升级消耗</li>\n                <li>精英材料</li>\n                <li>干员材料多合一计算：精英化，通用技能，专精技能</li>\n                <li>自动识别仓库中材料(测试中)</li>\n            </ul>\n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n            <h3>实现中功能</h3>\n            <ul>\n                <li>干员技能、属性表</li>\n                <li>干员基建技能总览</li>\n            </ul>\n        </div>\n    </div>\n    <h3>贡献者</h3>\n    <div class=\"contributors\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <a href=\"https://github.com/graueneko/\"><img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/main/graueneko.png\" /></a>\n            <a href=\"https://github.com/graueneko/\">一只灰猫</a>\n        </div>\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <a href=\"https://github.com/Evealicemier\"><img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/main/crystal.jpg\" /></a>\n            <a href=\"https://github.com/Evealicemier\">水晶泡芙</a>\n        </div>\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <a href=\"https://github.com/Luke-lujunxian\"><img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/main/Luke_lu.jpg\" /></a>\n            <a href=\"https://github.com/Luke-lujunxian\">Luke_lu</a>\n        </div>\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <a href=\"https://github.com/bbaa-bbaa\"><img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/main/bbaa.png\" /></a>\n            <a href=\"https://github.com/bbaa-bbaa\">bbaa</a>\n        </div>\n    </div>\n\n    <h4>建议/需求/加入我们</h4>\n    <div class=\"joinus\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n        <div class=\"contributor\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <a href=\"https://github.com/graueneko/aktools\"><img src=\"https://cdn.jsdelivr.net/gh/ocsp/aktools/src/assets/img/main/github.png\" /></a>\n            <a href=\"https://github.com/graueneko/aktools\">Github</a>\n        </div>\n    </div>\n    <h4>友情链接</h4>\n    <p>欢迎访问 <a href=\"https://bbs.nga.cn/thread.php?fid=-34587507\">NGA明日方舟-罗德岛驻艾泽拉斯大使馆</a></p>\n    <p>欢迎向 <a href=\"https://penguin-stats.io\">企鹅物流数据统计</a> 贡献材料掉落信息</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-card/material-card.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-card/material-card.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdcCard fxLayout=\"column\" class=\"m-lvl-{{item.rarity}}\" [ngClass]=\"{'op-card': itemdata.lack===0}\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div class=\"img-icon-box\" fxFlex=\"15\" fxFlex.gt-xs=\"23\">\n      <img class=\"img-icon\" src=\"./assets/img/material/{{item.icon}}.png\" />\n    </div>\n    <div class=\"material-detail\" fxLayout=\"column\" fxFlex=\"60\" fxFlex.gt-xs=\"50\">\n      <div class=\"card-title\">{{item.name}}</div>\n      <div class=\"material-source\" *ngFor=\"let s of item.source | keyvalue\">{{s.key}} <sub>{{s.value}}</sub></div>\n    </div>\n    <div class=\"material-detail\" fxLayout=\"column\" fxFlex=\"23\" fxFlex.gt-xs=\"25\" fxLayoutAlign=\"end end\">\n      <div>\n        <button mdcButton class=\"need-button\" [ngClass]=\"{'notice': itemdata.lack!==0}\"\n          disabled>{{itemdata.lack}}</button>\n      </div>\n      <div>\n        <button mdcButton dense [raised]=\"itemdata.canMerge\" class=\"btnMerge\" (click)=\"doMerge()\"\n          [disabled]=\"!(itemdata.canMerge)\"><i mdcButtonIcon class=\"material-icons\">merge_type</i></button>\n      </div>\n    </div>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"49\" mdcTextField dense class=\"input-field\">\n      <span>\n        <button mdcButton dense (click)=\"itemdata.need=itemdata.need-(itemdata.need>0?1:0);onInputChange()\">\n          <i mdcButtonIcon class=\"material-icons\">remove</i>\n        </button>\n      </span>\n      <span>\n        <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"itemdata.need\" (change)=\"onInputChange()\">\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">需要</label>\n      </span>\n      <span>\n        <button mdcButton dense (click)=\"itemdata.need=itemdata.need+1;onInputChange()\">\n          <i mdcButtonIcon class=\"material-icons\">add</i>\n        </button>\n      </span>\n    </div>\n    <div fxFlex=\"49\" mdcTextField dense class=\"input-field\">\n      <span>\n        <button mdcButton dense (click)=\"itemdata.have=itemdata.have-(itemdata.have>0?1:0);onInputChange()\">\n          <i mdcButtonIcon class=\"material-icons\">remove</i>\n        </button>\n      </span>\n      <span>\n        <input mdcTextFieldInput #input1=\"ngModel\" type=\"number\" [(ngModel)]=\"itemdata.have\" (change)=\"onInputChange()\">\n        <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">已有</label>\n      </span>\n      <span>\n        <button mdcButton dense (click)=\"itemdata.have=itemdata.have+1;onInputChange()\">\n          <i mdcButtonIcon class=\"material-icons\">add</i>\n        </button>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material/material.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material/material.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside #dialogPlan=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n  <div mdcDialogSurface>\r\n    <header mdcDialogHeader>\r\n      <h2 mdcDialogHeaderTitle>材料路径规划（试行，仅供参考）</h2>\r\n    </header>\r\n    <section mdcDialogBody scrollable>\r\n      <h4>by <a href=\"https://github.com/ycremar/ArkPlanner\">@ycremar</a>(算法) & <a\r\n          href=\"https://github.com/invisiblearts/ArkPlanner\">@invisiblearts</a>(数据)</h4>\r\n      <h4>体力预计消耗：<strong>{{cost}}</strong></h4>\r\n      <ng-container *ngIf=\"stagesText.length!==0\">\r\n        <h4>刷本获取：</h4>\r\n        <ul mdcList>\r\n          <li mdcListItem *ngFor=\"let st of stagesText\">{{st}}</li>\r\n        </ul>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"synsText.length!==0\">\r\n        <h4>合成获取：</h4>\r\n        <ul mdcList>\r\n          <li mdcListItem *ngFor=\"let sy of synsText\">{{sy}}</li>\r\n        </ul>\r\n      </ng-container>\r\n\r\n    </section>\r\n    <footer mdcDialogFooter>\r\n      <button mdcButton mdcDialogCancel>关闭</button>\r\n      <button mdcButton mdcDialogAccept (click)=\"copyResult()\">复制</button>\r\n    </footer>\r\n  </div>\r\n  <div mdcDialogBackdrop></div>\r\n</aside>\r\n<aside #dialogData=\"mdcDialog\" mdcDialog mdcFocusTrap>\r\n  <div mdcDialogSurface class=\"dialog-data\">\r\n    <!-- <header mdcDialogHeader>\r\n      <h2 mdcDialogHeaderTitle>材料路径规划（试行，仅供参考）</h2>\r\n    </header> -->\r\n    <section mdcDialogBody>\r\n      <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <button mdcButton raised dense id=\"btnReset\" (click)=\"reset()\">重置</button>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div mdcTextField [dense]=\"true\">\r\n              <textarea mdcTextFieldInput type=\"text\" rows=\"5\" cols=\"60\" #input1=\"ngModel\" [(ngModel)]=\"exportedData\"></textarea>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <button mdcButton raised dense id=\"btnExport\" (click)=\"copyExport()\">复制</button>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <p><small>若未弹出成功提示，或复制失败，请手动复制。</small></p>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <div mdcTextField [dense]=\"true\">\r\n                <textarea mdcTextFieldInput type=\"text\" rows=\"5\" cols=\"60\" #input1=\"ngModel\" [(ngModel)]=\"importedData\"></textarea>\r\n              </div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <button mdcButton raised dense id=\"btnImport\" (click)=\"getImportedData()\">导入</button>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </section>\r\n    <footer mdcDialogFooter>\r\n      <button mdcButton mdcDialogCancel>关闭</button>\r\n    </footer>\r\n  </div>\r\n  <div mdcDialogBackdrop></div>\r\n</aside>\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"end center\" fxLayoutGap=\"1%\"\r\n    class=\"options-box\">\r\n    <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-xs=\"30\" fxLayoutAlign=\"start center\">\r\n      <div mdcFormField fxFlex=\"100\">\r\n        <!-- <button mdcButton raised dense id=\"btnReset\" (click)=\"reset()\">重置</button> -->\r\n        <button mdcButton raised dense id=\"btnData\" (click)=\"dialogData.open()\">重置/导入/导出</button>\r\n      </div>\r\n      <div fxFlex=\"100\" fxShow=\"true\" fxShow.gt-xs=\"false\" class=\"sepatator\">\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-xs=\"65\" fxLayoutAlign=\"end center\">\r\n      <div mdcFormField>\r\n        <div mdcSwitch>\r\n          <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showOnly3plus\" (change)=\"onOptionChange()\" />\r\n        </div>\r\n        <label mdcFormFieldLabel>3★及以上</label>\r\n      </div>\r\n      <div mdcFormField>\r\n        <div mdcSwitch>\r\n          <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.filtered\" (change)=\"onOptionChange()\" />\r\n        </div>\r\n        <label mdcFormFieldLabel>过滤</label>\r\n      </div>\r\n      <div mdcFormField>\r\n        <button mdcButton raised dense (click)=\"plan();dialogPlan.open()\">刷图规划</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"start center\" fxLayoutGap=\"1%\" class=\"options-box\">\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showMat\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>精英材料</label>\r\n    </div>\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showBook\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>技能书</label>\r\n    </div>\r\n    <div mdcFormField>\r\n      <div mdcSwitch>\r\n        <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"options.showChip\" (change)=\"onOptionChange()\" />\r\n      </div>\r\n      <label mdcFormFieldLabel>芯片</label>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxFlex=\"100\" fxLayoutAlign=\"start start\">\r\n    <ng-container *ngFor=\"let item of items; trackBy:trackItem\">\r\n      <div fxFlex=\"50\" fxFlex.gt-xs=\"33\" fxFlex.gt-sm=\"25\" fxFlex.gt-md=\"16\" class=\"padding-025\"\r\n        [hidden]=\"((options.filtered&&(!(data[item.name].have||data[item.name].need||data[item.name].lack)))||(options.showOnly3plus&&item.id.startsWith('30')&&(item.rarity<3))||(!options.showMat&&(item.id.startsWith('30'))||(!options.showBook&&(item.id.startsWith('33'))||(!(options.showChip)&&(item.id.startsWith('32'))))))\">\r\n        <app-material-card [item]=\"item\" [itemdata]=\"data[item.name]\" (dataChange)=\"onDataChange($event)\"\r\n          (reportMerge)=\"onMatMerge($event)\"></app-material-card>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside #dialog1=\"mdcDialog\" mdcDialog mdcFocusTrap (accept)=\"dialog.acceptCallback()\"\n  (decline)=\"dialog.declineCallback()\">\n  <div mdcDialogSurface>\n    <header mdcDialogHeader>\n      <h2 mdcDialogHeaderTitle>{{dialog.title}}</h2>\n    </header>\n    <section mdcDialogBody>\n      {{dialog.message}}\n    </section>\n    <footer mdcDialogFooter>\n      <button mdcButton mdcDialogCancel>{{dialog.decline}}</button>\n      <button mdcButton mdcDialogAccept>{{dialog.accept}}</button>\n    </footer>\n  </div>\n  <div mdcDialogBackdrop></div>\n</aside>\n<div class=\"settings-container\">\n  <div mdcListGroup>\n    <h3 mdcListGroupSubHeader>设置</h3>\n    <ul mdcList>\n      <li mdcListItem>\n        <div mdcFormField>\n          <div mdcSwitch>\n            <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"isExtraSmall\" (change)=\"saveSettings()\" />\n          </div>\n          <label mdcFormFieldLabel>超小屏幕模式</label>\n        </div>\n      </li>\n      <li mdcListDivider></li>\n      <li mdcListItem>\n        <div mdcFormField>\n          <div mdcSwitch>\n            <input mdcSwitchInput type=\"checkbox\" [(ngModel)]=\"isMaxFontSize\" (change)=\"saveSettings()\" />\n          </div>\n          <label mdcFormFieldLabel>自动导入(hash):最大字体模式</label>\n        </div>\n      </li>\n      <li mdcListDivider></li>\n      <li mdcListItem>\n        <div mdcFormField>\n          <div mdcTextField dense class=\"input-field\" style=\"width:80%;\">\n            <input mdcTextFieldInput [(ngModel)]=\"detectColor\" (change)=\"saveSettings()\" (input)=\"saveSettings()\"/>\n            <label mdcFloatingLabel class=\"mdc-floating-label--float-above\">自动导入(hash):文字颜色</label>\n          </div>\n          <label mdcFormFieldLabel></label>\n        </div>\n      </li>\n      <li mdcListDivider></li>\n      <li mdcListItem (click)=\"beforeClear();dialog1.open()\">\n        <i mdcListItemGraphic class=\"material-icons\">delete</i>清空本地数据\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hr_hr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr/hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lvlup/lvlup.component */ "./src/app/lvlup/lvlup.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.component */ "./src/app/material/material.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./char-mat/char-mat.component */ "./src/app/char-mat/char-mat.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auto-detect/auto-detect.component */ "./src/app/auto-detect/auto-detect.component.ts");
/* harmony import */ var _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auto-detect-hash/auto-detect-hash.component */ "./src/app/auto-detect-hash/auto-detect-hash.component.ts");












var routes = [
    { path: 'hr', component: _hr_hr_component__WEBPACK_IMPORTED_MODULE_3__["HrComponent"] },
    { path: 'lvlup', component: _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_4__["LvlupComponent"] },
    { path: 'material', component: _material_material_component__WEBPACK_IMPORTED_MODULE_5__["MaterialComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"] },
    { path: 'charmat', component: _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_8__["CharMatComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] },
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], pathMatch: 'full' },
    { path: 'autodetect', component: _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_10__["AutoDetectComponent"] },
    { path: 'autodetecthash', component: _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_11__["AutoDetectHashComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n[mdcDrawerHeader],\n[mdcDrawerToolbarSpacer],\n[mdcToolbar] {\n  background-color: #5c638b;\n  /* @alternate */\n  background-color: var(--mdc-theme-primary, #5c638b);\n  color: #fff;\n  /* @alternate */\n  color: var(--mdc-theme-on-primary, #fff);\n  /* Support for iOS 11.2+. */\n  padding-top: env(safe-area-inset-top);\n  padding-right: env(safe-area-inset-right);\n  padding-left: env(safe-area-inset-left);\n}\n\n[mdcDrawerHeader] {\n  height: 128px;\n}\n\n[mdcDrawerToolbarSpacer],\n[mdcToolbar] {\n  height: 64px;\n}\n\n[mdcToolbarRow] {\n  min-height: 100%;\n}\n\n.container {\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-background, #fff);\n  color: rgba(0, 0, 0, 0.87);\n  /* @alternate */\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  max-width: 1400px;\n  margin: auto;\n  padding-top: calc(0.5em + env(safe-area-inset-top));\n  padding-right: calc(0.5em + env(safe-area-inset-right));\n  padding-bottom: calc(0.5em + env(safe-area-inset-bottom));\n  padding-left: calc(0.5em + env(safe-area-inset-left));\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.mdc-toolbar__title {\n  font-size: 1.125em;\n  color: #ababab;\n  padding: 0.25em;\n}\n\n.mdc-toolbar__title.router-active {\n  color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 1em 0.5em 1em 0.5em;\n  border-color: #ffffff;\n}\n\n[mdcDrawerHeaderContent] .mdc-toolbar__title.router-active {\n  border: none;\n}\n\n.router-active.small {\n  font-size: 80%;\n}\n\n.toolbar-titles {\n  height: 100%;\n  align-items: center;\n  display: flex;\n}\n\n.img-header {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n}\n\n.img-title {\n  width: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiIsIi96ZWl0LzI1ZGZkMjgyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGhlbWUvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLHFCQUFBO0VBQ0EsY0FoQmtCO0FDRXBCOztBQ0xBOzs7RUN1RE0seUJBdkJNO0VBdUNKLGVBQUE7RUFDQSxtREFBQTtFQWpCRixXQXZCTTtFQXVDSixlQUFBO0VBQ0Esd0NBQUE7RURqRU4sMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUNBQUE7QURVRjs7QUNIQTtFQUNFLGFBQUE7QURNRjs7QUNKQTs7RUFFRSxZQUFBO0FET0Y7O0FDTEE7RUFDRSxnQkFBQTtBRFFGOztBQ0xBO0VDMkJNLHNCQXZCTTtFQXVDSixlQUFBO0VBQ0EsbURBQUE7RUFqQkYsMEJBdkJNO0VBdUNKLGVBQUE7RUFDQSx1RUFBQTtFRHhDTixpQkFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLHVEQUFBO0VBQ0EseURBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRFdGOztBQ1RBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFlGOztBQ1ZBO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBRGFGOztBQ1ZBO0VBQ0UsWUFBQTtBRGFGOztBQ1ZBO0VBQ0UsY0FBQTtBRGFGOztBQ1ZBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRGFGOztBQ1ZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURhRjs7QUNWQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEYUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxuJGNvbG9yLTE6ICNkMDY5NGU7XG4kY29sb3ItMjogI2Y2Y2U4YztcbiRjb2xvci0zOiAjYzNlM2U1O1xuJGNvbG9yLTQ6ICM1ODliYWQ7XG5cbiRtZGMtdGhlbWUtcHJpbWFyeTogIzVjNjM4YjtcbiRtZGMtdGhlbWUtc2Vjb25kYXJ5OiAjODdhMGM2O1xuJG1kYy10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmO1xuJG1kYy10aGVtZS1zdXJmYWNlOiAjZmZmO1xuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcbiAgc2Fucy1zZXJpZjtcblxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xufVxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNWM2MzhiO1xufVxuXG5bbWRjRHJhd2VySGVhZGVyXSxcblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcblttZGNUb29sYmFyXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzYzOGI7XG4gIC8qIEBhbHRlcm5hdGUgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM1YzYzOGIpO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogQGFsdGVybmF0ZSAqL1xuICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXByaW1hcnksICNmZmYpO1xuICAvKiBTdXBwb3J0IGZvciBpT1MgMTEuMisuICovXG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIHBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG59XG5cblttZGNEcmF3ZXJIZWFkZXJdIHtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cblxuW21kY0RyYXdlclRvb2xiYXJTcGFjZXJdLFxuW21kY1Rvb2xiYXJdIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5bbWRjVG9vbGJhclJvd10ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogQGFsdGVybmF0ZSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtYmFja2dyb3VuZCwgI2ZmZik7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAvKiBAYWx0ZXJuYXRlICovXG4gIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtdGV4dC1wcmltYXJ5LW9uLWJhY2tncm91bmQsIHJnYmEoMCwgMCwgMCwgMC44NykpO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogY2FsYygwLjVlbSArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMC41ZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWRjLXRvb2xiYXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xuICBjb2xvcjogI2FiYWJhYjtcbiAgcGFkZGluZzogMC4yNWVtO1xufVxuXG4ubWRjLXRvb2xiYXJfX3RpdGxlLnJvdXRlci1hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFlbSAwLjVlbSAxZW0gMC41ZW07XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuW21kY0RyYXdlckhlYWRlckNvbnRlbnRdIC5tZGMtdG9vbGJhcl9fdGl0bGUucm91dGVyLWFjdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJvdXRlci1hY3RpdmUuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLnRvb2xiYXItdGl0bGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1nLWhlYWRlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltZy10aXRsZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59IiwiQGltcG9ydCBcIi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiQG1hdGVyaWFsL3RoZW1lL21peGluc1wiO1xuXG5bbWRjRHJhd2VySGVhZGVyXSxcblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcblttZGNUb29sYmFyXSB7XG4gIC8vIGNvbG9yIHRoZSBoZWFkZXIgdmFyaWFudHMgdGhlIHNhbWUgd2F5IGFzIHRoZSB0b29sYmFyOlxuICBAaW5jbHVkZSBtZGMtdGhlbWUtcHJvcChiYWNrZ3JvdW5kLWNvbG9yLCBwcmltYXJ5KTtcbiAgQGluY2x1ZGUgbWRjLXRoZW1lLXByb3AoY29sb3IsIG9uLXByaW1hcnkpO1xuXG4gIC8qIFN1cHBvcnQgZm9yIGlPUyAxMS4yKy4gKi9cbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgcGFkZGluZy1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIHBhZGRpbmctbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbn1cblxuLy8gLnRvb2xiYXItdGl0bGVzIHtcbi8vICAgcGFkZGluZzogMC41ZW07XG4vLyB9XG5cblttZGNEcmF3ZXJIZWFkZXJdIHtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cblttZGNEcmF3ZXJUb29sYmFyU3BhY2VyXSxcblttZGNUb29sYmFyXSB7XG4gIGhlaWdodDogNjRweDtcbn1cblttZGNUb29sYmFyUm93XSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBAaW5jbHVkZSBtZGMtdGhlbWUtcHJvcChiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kKTtcbiAgQGluY2x1ZGUgbWRjLXRoZW1lLXByb3AoY29sb3IsIHRleHQtcHJpbWFyeS1vbi1iYWNrZ3JvdW5kKTtcblxuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogY2FsYygwLjVlbSArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMC41ZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDAuNWVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1kYy10b29sYmFyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgY29sb3I6ICNhYmFiYWI7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cbi5tZGMtdG9vbGJhcl9fdGl0bGUucm91dGVyLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMWVtIDAuNWVtIDFlbSAwLjVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5bbWRjRHJhd2VySGVhZGVyQ29udGVudF0gLm1kYy10b29sYmFyX190aXRsZS5yb3V0ZXItYWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucm91dGVyLWFjdGl2ZS5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4udG9vbGJhci10aXRsZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWctaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1nLXRpdGxlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vXG4vLyAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4vL1xuXG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCB0aGVtZSBjb2xvciBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LlxuLy8gJHByb3BlcnR5IGlzIHR5cGljYWxseSBjb2xvciBvciBiYWNrZ3JvdW5kLWNvbG9yLCBidXQgY2FuIGJlIGFueSBDU1MgcHJvcGVydHkgdGhhdCBhY2NlcHRzIGNvbG9yIHZhbHVlcy5cbi8vICRzdHlsZSBzaG91bGQgYmUgb25lIG9mIHRoZSBtYXAga2V5cyBpbiAkbWRjLXRoZW1lLXByb3BlcnR5LXZhbHVlcyAoX3ZhcmlhYmxlcy5zY3NzKSwgb3IgYSBsaXRlcmFsIGNvbG9yIHZhbHVlLlxuLy8gJGVkZ2VPcHRPdXQgY29udHJvbHMgd2hldGhlciB0byBmZWF0dXJlLWRldGVjdCBhcm91bmQgRWRnZSB0byBhdm9pZCBlbWl0dGluZyBDU1MgdmFyaWFibGVzIGZvciBpdCxcbi8vIGludGVuZGVkIGZvciB1c2UgaW4gY2FzZXMgd2hlcmUgaW50ZXJhY3Rpb25zIHdpdGggcHNldWRvLWVsZW1lbnQgc3R5bGVzIGNhdXNlIHByb2JsZW1zIGR1ZSB0byBFZGdlIGJ1Z3MuXG5AbWl4aW4gbWRjLXRoZW1lLXByb3AoJHByb3BlcnR5LCAkc3R5bGUsICRpbXBvcnRhbnQ6IGZhbHNlLCAkZWRnZU9wdE91dDogZmFsc2UpIHtcbiAgQGlmIHR5cGUtb2YoJHN0eWxlKSA9PSBcImNvbG9yXCIgb3IgJHN0eWxlID09IFwiY3VycmVudENvbG9yXCIge1xuICAgIEBpZiAkaW1wb3J0YW50IHtcbiAgICAgICN7JHByb3BlcnR5fTogJHN0eWxlICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICAjeyRwcm9wZXJ0eX06ICRzdHlsZTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1kYy10aGVtZS1wcm9wZXJ0eS12YWx1ZXMsICRzdHlsZSkge1xuICAgICAgQGVycm9yIFwiSW52YWxpZCBzdHlsZTogJyN7JHN0eWxlfScuIENob29zZSBvbmUgb2Y6ICN7bWFwLWtleXMoJG1kYy10aGVtZS1wcm9wZXJ0eS12YWx1ZXMpfVwiO1xuICAgIH1cblxuICAgICR2YWx1ZTogbWFwLWdldCgkbWRjLXRoZW1lLXByb3BlcnR5LXZhbHVlcywgJHN0eWxlKTtcblxuICAgIEBpZiAkaW1wb3J0YW50IHtcbiAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlICFpbXBvcnRhbnQ7XG5cbiAgICAgIEBpZiAkZWRnZU9wdE91dCB7XG4gICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICBAc3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIHNjc3Mvc2VsZWN0b3Itbm8tcmVkdW5kYW50LW5lc3Rpbmctc2VsZWN0b3JcbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc3R5bGVsaW50LWVuYWJsZSBzY3NzL3NlbGVjdG9yLW5vLXJlZHVuZGFudC1uZXN0aW5nLXNlbGVjdG9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgbWF4LW5lc3RpbmctZGVwdGhcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWU7XG5cbiAgICAgIEBpZiAkZWRnZU9wdE91dCB7XG4gICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICAgIEBhdC1yb290IHtcbiAgICAgICAgICBAc3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIHNjc3Mvc2VsZWN0b3Itbm8tcmVkdW5kYW50LW5lc3Rpbmctc2VsZWN0b3JcbiAgICAgICAgICAgICYge1xuICAgICAgICAgICAgICAvKiBAYWx0ZXJuYXRlICovXG4gICAgICAgICAgICAgICN7JHByb3BlcnR5fTogdmFyKC0tbWRjLXRoZW1lLSN7JHN0eWxlfSwgJHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1lbmFibGUgc2Nzcy9zZWxlY3Rvci1uby1yZWR1bmRhbnQtbmVzdGluZy1zZWxlY3RvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzdHlsZWxpbnQtZW5hYmxlIG1heC1uZXN0aW5nLWRlcHRoXG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLyogQGFsdGVybmF0ZSAqL1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHZhcigtLW1kYy10aGVtZS0jeyRzdHlsZX0sICR2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(snackBar, swUpdate, router, activatedRoute) {
        var _this = this;
        this.snackBar = snackBar;
        this.swUpdate = swUpdate;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = '明日方舟工具箱 by 一只灰猫';
        this.drawerOpen = false;
        this.temporary = 'temporary';
        this.showNavbar = true;
        this.baseUrl = window.location.origin;
        this.nav = window.navigator;
        if (this.swUpdate.isEnabled) {
            this.swUpdate.checkForUpdate();
            this.swUpdate.available.subscribe(function () {
                var snackbarRef = _this.snackBar.show({
                    message: '有新版本可用，是否更新？(同样可以点击右上角手动更新）',
                    actionText: '更新',
                    multiline: true,
                    actionOnBottom: true,
                    timeout: 5000
                });
                snackbarRef.action().subscribe(function () {
                    _this.doUpdate();
                });
            });
        }
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.showNavbar = !('hidenav' in params);
        });
    }
    AppComponent.prototype.toggleDrawer = function () {
        this.drawerOpen = !this.drawerOpen;
    };
    AppComponent.prototype.showSnackBar = function (msg, action) {
        this.snackBar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    };
    AppComponent.prototype.doUpdate = function () {
        this.swUpdate.activateUpdate().then(function () { return window.location.reload(); });
    };
    AppComponent.prototype.doShare = function () {
        if (this.nav && this.nav.share) {
            this.nav.share({
                title: this.title,
                text: this.title,
                url: window.location.origin
            });
        }
    };
    AppComponent.prototype.onbeforeinstallprompt = function (e) {
        e.preventDefault();
        this.deferredPrompt = e;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeinstallprompt', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onbeforeinstallprompt", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hr_hr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hr/hr.component */ "./src/app/hr/hr.component.ts");
/* harmony import */ var _hr_tags_hr_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hr-tags/hr-tags.component */ "./src/app/hr-tags/hr-tags.component.ts");
/* harmony import */ var _hr_comb_hr_comb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hr-comb/hr-comb.component */ "./src/app/hr-comb/hr-comb.component.ts");
/* harmony import */ var _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lvlup/lvlup.component */ "./src/app/lvlup/lvlup.component.ts");
/* harmony import */ var _material_material_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.component */ "./src/app/material/material.component.ts");
/* harmony import */ var _material_card_material_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-card/material-card.component */ "./src/app/material-card/material-card.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./char-mat/char-mat.component */ "./src/app/char-mat/char-mat.component.ts");
/* harmony import */ var _char_mat_charcard_char_mat_charcard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./char-mat-charcard/char-mat-charcard.component */ "./src/app/char-mat-charcard/char-mat-charcard.component.ts");
/* harmony import */ var _char_mat_matcard_char_mat_matcard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./char-mat-matcard/char-mat-matcard.component */ "./src/app/char-mat-matcard/char-mat-matcard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auto-detect/auto-detect.component */ "./src/app/auto-detect/auto-detect.component.ts");
/* harmony import */ var _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auto-detect-hash/auto-detect-hash.component */ "./src/app/auto-detect-hash/auto-detect-hash.component.ts");



 // (optional)






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _hr_hr_component__WEBPACK_IMPORTED_MODULE_9__["HrComponent"],
                _hr_tags_hr_tags_component__WEBPACK_IMPORTED_MODULE_10__["HrTagsComponent"],
                _hr_comb_hr_comb_component__WEBPACK_IMPORTED_MODULE_11__["HrCombComponent"],
                _lvlup_lvlup_component__WEBPACK_IMPORTED_MODULE_12__["LvlupComponent"],
                _material_material_component__WEBPACK_IMPORTED_MODULE_13__["MaterialComponent"],
                _material_card_material_card_component__WEBPACK_IMPORTED_MODULE_14__["MaterialCardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_18__["HelpComponent"],
                _char_mat_char_mat_component__WEBPACK_IMPORTED_MODULE_20__["CharMatComponent"],
                _char_mat_charcard_char_mat_charcard_component__WEBPACK_IMPORTED_MODULE_21__["CharMatCharcardComponent"],
                _char_mat_matcard_char_mat_matcard_component__WEBPACK_IMPORTED_MODULE_22__["CharMatMatcardComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
                _auto_detect_auto_detect_component__WEBPACK_IMPORTED_MODULE_24__["AutoDetectComponent"],
                _auto_detect_hash_auto_detect_hash_component__WEBPACK_IMPORTED_MODULE_25__["AutoDetectHashComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _blox_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_19__["ClipboardModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-detect-hash/auto-detect-hash.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auto-detect-hash/auto-detect-hash.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img[src=\"\"],\nimg:not([src]) {\n  opacity: 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n.ad-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.ad-container .card-title {\n  max-width: 100%;\n  width: 400;\n  padding: 0.25em;\n  display: block;\n}\n\n[mdcCard] {\n  margin: 0.5em;\n}\n\n[mdcCard] .mat-icon {\n  max-height: 48px;\n  max-width: 48px;\n  height: auto;\n  width: auto;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.25em;\n}\n\n[mdcLinearProgress] {\n  max-width: 1200px;\n  margin: 0 auto 10px auto;\n}\n\ncanvas {\n  width: 100%;\n  max-width: 1200px;\n}\n\n.select {\n  border: blue 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvYXV0by1kZXRlY3QtaGFzaC9hdXRvLWRldGVjdC1oYXNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRvLWRldGVjdC1oYXNoL2F1dG8tZGV0ZWN0LWhhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsVUFBQTtBQ0NGOztBRENBOztFQUVFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxTQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESkU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTUo7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtBQ0tKOztBREZBO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxzQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvYXV0by1kZXRlY3QtaGFzaC9hdXRvLWRldGVjdC1oYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nW3NyYz1cIlwiXSxcclxuaW1nOm5vdChbc3JjXSkge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tZGMtYnV0dG9uLS1kZW5zZSB7XHJcbiAgbWluLXdpZHRoOiAyMHB4O1xyXG59XHJcbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmFkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiA0MDA7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcblttZGNDYXJkXSB7XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIG1heC1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbiAgLm1hdGNhcmQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblttZGNMaW5lYXJQcm9ncmVzc10ge1xyXG4gIG1heC13aWR0aDoxMjAwcHg7XHJcbiAgbWFyZ2luOjAgYXV0byAxMHB4IGF1dG87XHJcbn1cclxuY2FudmFzIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1heC13aWR0aDogIDEyMDBweDtcclxufVxyXG4uc2VsZWN0IHtcclxuICBib3JkZXI6Ymx1ZSAycHggc29saWQ7XHJcbn0iLCJpbWdbc3JjPVwiXCJdLFxuaW1nOm5vdChbc3JjXSkge1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xufVxuXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFkLWNvbnRhaW5lciAuY2FyZC10aXRsZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDQwMDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuW21kY0NhcmRdIHtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblttZGNDYXJkXSAubWF0LWljb24ge1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBtYXgtd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5bbWRjQ2FyZF0gLm1hdGNhcmQtaXRlbSB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblxuW21kY0xpbmVhclByb2dyZXNzXSB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG59XG5cbmNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cblxuLnNlbGVjdCB7XG4gIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/auto-detect-hash/auto-detect-hash.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auto-detect-hash/auto-detect-hash.component.ts ***!
  \****************************************************************/
/*! exports provided: AutoDetectHashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDetectHashComponent", function() { return AutoDetectHashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AutoDetectHashComponent = /** @class */ (function () {
    function AutoDetectHashComponent(fetchService, snackbar, router, el) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.router = router;
        this.el = el;
        // tslint:disable: max-line-length
        this.detectedItemList = [];
        this.ItemHashList = [];
        this.InfoText = '等待处理';
        this.progress = 0;
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.ItemHash = [];
        this.ImageGreyData = {};
        this.ButtonLock = false;
        this.ItemImage = '';
        this.ModifyingItem = null;
        this.ModifyBuffer = { name: '', have: 0, delete: false };
        this.Modifying = { x: 0, y: 0 };
        this.NumberData = [];
        this.FixingNumberData = [];
        this.FixingNumberIndex = 0;
        this.textColor = '#00ff00';
        this.NumberHash = {
            1: '0000100000001000000010000000100000001000000010000000100000000001',
            2: '0010011110000001000000010000000100000011000001000001100000100000',
            3: '0010001100000001000000010000011000000011000000000000000100100011',
            4: '0000001000001010000110100011001001000010000000110000001000000010',
            5: '0010000101100000011000000011001100000000000000000000000101100011',
            6: '0000001101100000010000001100011111100001110000000110000100110011',
            7: '0000000000000001000000110000010000000100000010000000100000001000',
            8: '0001001101100000011000000011101101100001110000000100000000010001',
            9: '0010001111000001100000011100000000001101000000010000000101000111',
            0: '0011001101100001110000011100000011000000110000010110000100110111',
            万: '0000100000010000000100000001000100100001001000010110000111000001'
        };
        this.HighQNumberHash = {};
        this.MaxFontSize = true;
        this.FontSize = 0;
    }
    AutoDetectHashComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var SaveHash;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                SaveHash = this.fetchService.getLocalStorage('detect-hash', false);
                if (SaveHash === false) {
                    this.fetchService.getJson('./assets/data/MaterialHash.json').subscribe(function (data) {
                        _this.ItemHashList = data;
                        _this.fetchService.setLocalStorage('detect-hash', {
                            NumberHash: _this.NumberHash,
                            ItemHash: data
                        });
                    });
                }
                else {
                    this.ItemHashList = SaveHash.ItemHash;
                    this.NumberHash = SaveHash.NumberHash;
                }
                this.MaxFontSize = this.fetchService.getLocalStorage('detect-mfs', true);
                this.textColor = this.fetchService.getLocalStorage('detect-tclr', '#00ff00');
                this.ImageElement = document.createElement('img');
                this.Canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
                this.Ctx = this.Canvas.getContext('2d');
                this.onPasteImage();
                return [2 /*return*/];
            });
        });
    };
    AutoDetectHashComponent.prototype.choiceImage = function (event) {
        var _this = this;
        var ImageContainer = event.target;
        var Reader = new FileReader();
        Reader.onload = function (e) {
            _this.LoadImage(Reader.result.toString());
        };
        Reader.readAsDataURL(ImageContainer.files[0]);
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.detectedItemList = [];
        this.ItemHash = [];
    };
    AutoDetectHashComponent.prototype.onPasteImage = function () {
        var ctx = this;
        document.addEventListener("paste", function (event) {
            var items = event.clipboardData && event.clipboardData.items;
            if (items && items.length) {
                if (items[0].type.indexOf("image") !== -1) {
                    var file = items[0].getAsFile();
                    var Reader_1 = new FileReader();
                    Reader_1.onload = function (e) {
                        ctx.LoadImage(Reader_1.result.toString());
                    };
                    Reader_1.readAsDataURL(file);
                    ctx.XBound = [];
                    ctx.YBound = [];
                    ctx.ItemGreyData = [];
                    ctx.detectedItemList = [];
                    ctx.ItemHash = [];
                }
            }
        });
    };
    AutoDetectHashComponent.prototype.LoadImage = function (src) {
        var _this = this;
        this.ImageElement.src = src;
        this.ImageElement.onload = function () {
            _this.setProgress('等待处理', 0);
            var img = _this.ImageElement;
            _this.Canvas.width = _this.ImageElement.width;
            _this.Canvas.height = _this.ImageElement.height;
            var maxSize = 1200;
            /*const width = img.width > img.height ? maxSize : (maxSize * img.width / img.height);
            const height = img.width > img.height ? (maxSize * img.height / img.width) : maxSize;
            this.Canvas.style.width = width + 'px';
            this.Canvas.style.height = height + 'px';*/
            _this.ImageLoaded = true;
            _this.Ctx.drawImage(img, 0, 0);
            // this.Ctx.font = img.height / 750 * 15 + 'px serif';
            _this.Ctx.textAlign = 'center';
            _this.ImageData = _this.Ctx.getImageData(0, 0, _this.Canvas.width, _this.Canvas.height);
        };
    };
    AutoDetectHashComponent.prototype.objectRegonition = function () {
        var _this = this;
        this.XBound = [];
        this.YBound = [];
        this.ItemGreyData = [];
        this.detectedItemList = [];
        this.ItemHash = [];
        this.setProgress('正在扫描图片', 0.1);
        this.ButtonLock = true;
        this.searchBoundary().then(function () {
            return _this.CropImage();
        }).then(function () {
            return _this.genHash();
        }).then(function () {
            return _this.checkHash();
        }).then(function () {
            return _this.Ocr();
        }).then(function () {
            return _this.drawText();
        }).then(function () {
            _this.setProgress('识别完成，可点击图像对应位置对识别结果进行修改', 1);
            _this.ButtonLock = false;
        });
    };
    AutoDetectHashComponent.prototype.Ocr = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // 十分简易的文字识别
            _this.setProgress('正在识别各物品数量', 0.90);
            setTimeout(function () {
                // 惯例两for遍历
                for (var y = 0, YAll = _this.detectedItemList.length; y < YAll; y++) {
                    _this.NumberData.push([]);
                    var YDistance = _this.YBound[y][1] - _this.YBound[y][0];
                    var top_1 = Math.floor(YDistance * 0.735) + y;
                    var bottom = Math.floor(YDistance * 0.0725);
                    var height = YDistance - bottom - top_1;
                    var realTop = _this.YBound[y][0] + top_1;
                    for (var x = 0, XAll = _this.detectedItemList[y].length; x < XAll; x++) {
                        _this.NumberData[y].push([]);
                        var XDistance = _this.XBound[x][1] - _this.XBound[x][0];
                        var width = Math.floor(XDistance * 0.485);
                        var realLeft = Math.floor(_this.XBound[x][0] + (XDistance * 0.4));
                        // 1.裁剪出数字的地方
                        var NumberBuffer = document.createElement('canvas').getContext('2d');
                        NumberBuffer.canvas.height = height;
                        NumberBuffer.canvas.width = width;
                        NumberBuffer.drawImage(_this.ImageElement, realLeft, realTop, width, height, 0, 0, width, height);
                        var rImgData = NumberBuffer.getImageData(0, 0, width, height);
                        var ImgData = rImgData.data;
                        // 2.图像预处理，只保留出两种状态
                        var easyData = [];
                        for (var ny = 0; ny < height; ny++) {
                            easyData.push([]);
                            var BaseY = (ny * width) * 4;
                            for (var nx = 0; nx < width; nx++) {
                                if (255 - Math.floor((ImgData[BaseY + nx * 4] + ImgData[BaseY + nx * 4 + 1] + ImgData[BaseY + nx * 4 + 2]) / 3) <= 80) {
                                    ImgData[BaseY + nx * 4] = 255;
                                    ImgData[BaseY + nx * 4 + 1] = 255;
                                    ImgData[BaseY + nx * 4 + 2] = 255;
                                    easyData[ny][nx] = true;
                                }
                                else {
                                    ImgData[BaseY + nx * 4] = 0;
                                    ImgData[BaseY + nx * 4 + 1] = 0;
                                    ImgData[BaseY + nx * 4 + 2] = 0;
                                    easyData[ny][nx] = false;
                                }
                            }
                        }
                        // 3. 分割每个数字，方便计算Hash
                        var XNumberBound = [];
                        var YNumberBound = [];
                        _this.Ctx.fillStyle = '#00ff00';
                        for (var nx = 0, whiteLock = false, i = void 0; nx < width; nx++) {
                            var white = 0;
                            for (var ny = 0; ny < height; ny++) {
                                if (easyData[ny][nx]) {
                                    white++;
                                }
                            }
                            if (white && !whiteLock) {
                                i = XNumberBound.push([]) - 1;
                                XNumberBound[i][0] = nx;
                                _this.Ctx.fillRect(realLeft + nx, realTop, 1, height);
                                whiteLock = true;
                            }
                            else if (whiteLock && white === 0) {
                                XNumberBound[i][1] = nx;
                                _this.Ctx.fillRect(realLeft + nx, realTop, 1, height);
                                whiteLock = false;
                            }
                        }
                        for (var index = 0, all = XNumberBound.length; index < all; index++) {
                            for (var ny = 0, whiteLock = false; ny < height; ny++) {
                                var white = 0;
                                for (var nx = XNumberBound[index][0]; nx <= XNumberBound[index][1]; nx++) {
                                    if (easyData[ny][nx]) {
                                        white++;
                                    }
                                }
                                if (white && !whiteLock) {
                                    YNumberBound[index] = [];
                                    YNumberBound[index][0] = ny;
                                    _this.Ctx.fillRect(realLeft + XNumberBound[index][0], realTop + ny, XNumberBound[index][1] - XNumberBound[index][0], 1);
                                    whiteLock = true;
                                }
                                else if (whiteLock && white === 0) {
                                    YNumberBound[index][1] = ny;
                                    _this.Ctx.fillRect(realLeft + XNumberBound[index][0], realTop + ny, XNumberBound[index][1] - XNumberBound[index][0], 1);
                                    whiteLock = false;
                                }
                            }
                        }
                        _this.Ctx.fillStyle = '#ff0000';
                        var NumberString = '';
                        NumberBuffer.putImageData(rImgData, 0, 0);
                        var _loop_1 = function (i, all) {
                            if (XNumberBound[i].length !== 2) {
                                return "continue";
                            }
                            if (XNumberBound[i][1] - XNumberBound[i][0] >= 1 && XNumberBound[i][1] - XNumberBound[i][0] <= 3) {
                                NumberString = NumberString.replace(/\./g, '') + '.';
                                return "continue";
                            }
                            if (XNumberBound[i][1] - XNumberBound[i][0] < 6 || XNumberBound[i][1] - XNumberBound[i][0] >= 24) {
                                return "continue";
                            }
                            _this.Ctx.fillRect(realLeft + XNumberBound[i][0], realTop, 1, height);
                            _this.Ctx.fillRect(realLeft + XNumberBound[i][1], realTop, 1, height);
                            var hash = '';
                            var SingleNumber = document.createElement('canvas').getContext('2d');
                            SingleNumber.canvas.width = 9;
                            SingleNumber.canvas.height = 8;
                            // 数值范围显示:this.Ctx.fillRect(realLeft + XNumberBound[i][0], realTop+YNumberBound[i][0], XNumberBound[i][1] - XNumberBound[i][0], YNumberBound[i][1] - YNumberBound[i][0]);
                            SingleNumber.drawImage(NumberBuffer.canvas, XNumberBound[i][0], YNumberBound[i][0], XNumberBound[i][1] - XNumberBound[i][0], YNumberBound[i][1] - YNumberBound[i][0], 0, 0, SingleNumber.canvas.width, SingleNumber.canvas.height);
                            var SingleNumberData = SingleNumber.getImageData(0, 0, SingleNumber.canvas.width, SingleNumber.canvas.height).data;
                            for (var j = 0, dataAll = SingleNumberData.length; j < dataAll; j += 4) {
                                if (Math.floor(j / 4) % SingleNumber.canvas.width === (SingleNumber.canvas.width - 1)) {
                                    continue;
                                }
                                hash += (Math.floor((SingleNumberData[j] + SingleNumberData[j + 1] + SingleNumberData[j + 2]) / 3) > Math.floor((SingleNumberData[j + 4] + SingleNumberData[j + 5] + SingleNumberData[j + 6]) / 3)) ? '1' : '0';
                            }
                            var Q = Infinity;
                            var Value = '';
                            for (var _i = 0, _a = Object.keys(_this.NumberHash); _i < _a.length; _i++) {
                                var key = _a[_i];
                                var distance = _this.NumberHash[key].split('').reduce(function (count, value, index) {
                                    return count + (value === hash[index] ? 0 : 1);
                                }, 0);
                                /*const LD = this.LD(hash, this.NumberHash[key]);
                                const LCS = this.LCS(hash, this.NumberHash[key]);
                                const S = (1 - (LCS / (LD + LCS))) * 100;*/
                                Q = Math.min(Q, distance);
                                if (Q === distance) {
                                    Value = key;
                                }
                            }
                            NumberString += Q > 15 ? '' : Value; // 去噪声
                            var TempCanvas = document.createElement('canvas').getContext('2d');
                            TempCanvas.canvas.width = XNumberBound[i][1] - XNumberBound[i][0];
                            TempCanvas.canvas.height = YNumberBound[i][1] - YNumberBound[i][0];
                            TempCanvas.drawImage(_this.ImageElement, realLeft + XNumberBound[i][0], realTop + YNumberBound[i][0], TempCanvas.canvas.width, TempCanvas.canvas.height, 0, 0, TempCanvas.canvas.width, TempCanvas.canvas.height);
                            _this.NumberData[y][x].push({ hash: hash, src: TempCanvas.canvas.toDataURL(), realData: null });
                            TempCanvas.canvas.remove();
                            SingleNumber.canvas.remove();
                        };
                        for (var i = 0, all = XNumberBound.length; i < all; i++) {
                            _loop_1(i, all);
                        }
                        if (NumberString.indexOf('.') === -1 || /万\d+/.test(NumberString)) {
                            NumberString = NumberString.replace(/万/g, '');
                        }
                        if (NumberString[0] === '.') {
                            NumberString = NumberString.substr(1, NumberString.length - 1);
                        }
                        // this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (this.XBound[x][1] - this.XBound[x][0]) / 2), Math.floor(this.YBound[y][0] + (this.YBound[y][1] - this.YBound[y][0]) / 2 + this.ImageElement.height / 750 * 15));
                        if (NumberString.substr(NumberString.length - 1, 1) === '万') {
                            _this.detectedItemList[y][x].have = Number(NumberString.substr(0, NumberString.length - 1)) * 10000;
                        }
                        else {
                            _this.detectedItemList[y][x].have = Number(NumberString);
                        }
                        NumberBuffer.canvas.remove();
                        /* 直接对比汉明距离在这里不太好用，使用编辑距离来进行比较
                        // 实际测试中发现对不同设备的兼容性不够良好
                        for (let ny = 0; ny < height; ny++) {
                            for (let nx = XNumberBound[i][0]; nx <= XNumberBound[i][1]; nx++) {
                                hash += easyData[ny][nx] ? '1' : '0';
                            }
                        }
                        let min = Infinity;
                        let Value: string;
                        for (const key of Object.keys(this.NumberHash)) {
                            const ld = this.LD((hash.length < this.NumberHash[key]) ? hash.padEnd(this.NumberHash[key].length, '0') : hash, (hash.length < this.NumberHash[key]) ? this.NumberHash[key] : this.NumberHash[key].padEnd(hash.length, '0'));
                            min = Math.min(min, ld);
                            if (ld === min) {
                                Value = key;
                            }
                        }
                        NumberString += (min > 100) ? '' : Value;
                    }
                    if (NumberString.indexOf('.') === -1) {
                        NumberString.replace(/万/g, '');
                    }
                    this.Ctx.fillStyle = '#00ff00';
                    this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (this.XBound[x][1] - this.XBound[x][0]) / 2), Math.floor(this.YBound[y][0] + (this.YBound[y][1] - this.YBound[y][0]) / 2 + 20));
                    if (NumberString.substr(NumberString.length - 1, 1) === '万') {
                        this.detectedItemList[y][x].have = Number(NumberString.substr(0, NumberString.length - 1)) * 10000;
                    } else {
                        this.detectedItemList[y][x].have = Number(NumberString);
                    }
                    */
                        // //console.log(easyData);
                        // //console.log(XNumberBound);
                    }
                }
                resolve();
            }, 25);
        });
    };
    /*
    LD(str1: string, str2: string) {
        // 实现LD算法计算编辑距离 可以优化成LDCompare(https://www.cnblogs.com/grenet/archive/2009/12/17/1626649.html#comment_body_1727150)?
        // 代码参考https://www.cnblogs.com/grenet/archive/2010/06/01/1748448.html
        const L = [];
        L[0] = [];
        L[0][0] = 0;
        for (let i = 1, all = str1.length; i <= all; i++) {
            L[i] = [];
            L[i][0] = i;
        }
        for (let j = 1, all = str2.length; j <= all; j++) {
            L[0][j] = j;
        }
        for (let i = 1, all = str1.length; i <= all; i++) {
            for (let j = 1, all2 = str2.length; j <= all2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    L[i][j] = L[i - 1][j - 1];
                } else {
                    L[i][j] = Math.min(L[i - 1][j - 1], L[i - 1][j], L[i][j - 1]) + 1;
                }
            }
        }
        return L[str1.length][str2.length];
    }
    LCS(str1: string, str2: string) {
        const L = [];
        L[0] = [];
        L[0][0] = 0;
        for (let i = 1, all = str1.length; i <= all; i++) {
            L[i] = [];
            L[i][0] = 0;
        }
        for (let j = 1, all = str2.length; j <= all; j++) {
            L[0][j] = 0;
        }
        for (let i = 1, all = str1.length; i <= all; i++) {
            for (let j = 1, all2 = str2.length; j <= all2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    L[i][j] = L[i - 1][j - 1] + 1;
                } else {
                    L[i][j] = Math.max(L[i - 1][j - 1], L[i - 1][j], L[i][j - 1]);
                }
            }
        }
        return L[str1.length][str2.length];
    }*/
    AutoDetectHashComponent.prototype.CropImage = function () {
        var _this = this;
        // 裁剪图片
        return new Promise(function (resolve, reject) {
            _this.setProgress('正在裁剪并缩放各物品图片', 0.55);
            setTimeout(function () {
                var TempCanvas = document.createElement('canvas');
                TempCanvas.width = 9;
                TempCanvas.height = 8;
                var TempCtx = TempCanvas.getContext('2d');
                for (var y = 0, YAll = _this.YBound.length; y < YAll; y++) {
                    if (_this.YBound[y].length !== 2) {
                        continue;
                    }
                    _this.ItemGreyData.push([]);
                    for (var x = 0, XAll = _this.XBound.length; x < XAll; x++) {
                        if (_this.XBound[x].length !== 2) {
                            continue;
                        }
                        TempCtx.drawImage(_this.ImageElement, _this.XBound[x][0], _this.YBound[y][0], _this.XBound[x][1] - _this.XBound[x][0], _this.YBound[y][1] - _this.YBound[y][0], 0, 0, TempCanvas.width, TempCanvas.height);
                        var TempImageData = TempCtx.getImageData(0, 0, TempCanvas.width, TempCanvas.height).data;
                        var l = _this.ItemGreyData[y].push([]) - 1;
                        for (var ya = 0; ya < TempCanvas.height; ya++) {
                            _this.ItemGreyData[y][l].push([]);
                            for (var xa = 0; xa < TempCanvas.width; xa++) {
                                var index = (ya * TempCanvas.width + xa) * 4;
                                _this.ItemGreyData[y][l][ya][xa] = Math.floor((TempImageData[index] + TempImageData[index + 1] + TempImageData[index + 2]) / 3);
                            }
                        }
                    }
                }
                TempCanvas.remove();
                resolve();
            }, 25);
        });
    };
    AutoDetectHashComponent.prototype.genHash = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.setProgress('正在计算Hash(请耐心等待)', 0.65);
            setTimeout(function () {
                for (var ya = 0, YaAll = _this.ItemGreyData.length; ya < YaAll; ya++) {
                    _this.ItemHash.push([]);
                    for (var xa = 0, XaAll = _this.ItemGreyData[ya].length; xa < XaAll; xa++) {
                        var hash = '';
                        for (var yb = 0, YbAll = _this.ItemGreyData[ya][xa].length; yb < YbAll; yb++) {
                            for (var xb = 0, XbAll = _this.ItemGreyData[ya][xa][yb].length; xb < XbAll - 1; xb++) {
                                hash += (_this.ItemGreyData[ya][xa][yb][xb] > _this.ItemGreyData[ya][xa][yb][xb + 1] ? '1' : '0');
                            }
                        }
                        _this.ItemHash[ya][xa] = hash;
                    }
                }
                resolve();
            }, 25);
        });
    };
    AutoDetectHashComponent.prototype.checkHash = function () {
        var _this = this;
        // 对比Hash部分
        return new Promise(function (resolve, reject) {
            _this.setProgress('正在识别物品', 0.75);
            setTimeout(function () {
                var _loop_2 = function (y, YAll) {
                    _this.detectedItemList.push([]);
                    var _loop_3 = function (x, XAll) {
                        _this.detectedItemList[y][x] = {
                            have: 0,
                            item: _this.ItemHashList.map(function (item) {
                                if (item.hash === '') {
                                    return { distance: 64, name: item.name, hash: item.hash };
                                }
                                return {
                                    distance: _this.ItemHash[y][x].split('').reduce(function (count, value, index) {
                                        return count + (value === item.hash[index] ? 0 : 1);
                                    }, 0), name: item.name, hash: item.hash
                                };
                            }).sort(function (a, b) { return a.distance - b.distance; })
                        };
                        _this.detectedItemList[y][x].name = _this.detectedItemList[y][x].item[0].name;
                        _this.detectedItemList[y][x].delete = false;
                    };
                    for (var x = 0, XAll = _this.ItemHash[y].length; x < XAll; x++) {
                        _loop_3(x, XAll);
                    }
                };
                for (var y = 0, YAll = _this.ItemHash.length; y < YAll; y++) {
                    _loop_2(y, YAll);
                }
                resolve();
            }, 25);
        });
    };
    AutoDetectHashComponent.prototype.getPixelGrey = function (x, y) {
        if (x < 0 || y < 0 || x > this.Canvas.width || y > this.Canvas.height) {
            return -1;
        }
        var offset = y * 10000 + x;
        if (typeof this.ImageGreyData[offset] !== 'undefined') {
            return this.ImageGreyData[offset];
        }
        var index = (y * this.Canvas.width + x) * 4;
        this.ImageGreyData[offset] = Math.floor((this.ImageData.data[index] + this.ImageData.data[index + 1] + this.ImageData.data[index + 2]) / 3);
        return this.ImageGreyData[offset];
    };
    AutoDetectHashComponent.prototype.searchBoundary = function () {
        var _this = this;
        this.setProgress('扫描图像边界', 0.2);
        var XBlank = Array(this.Canvas.width).fill(0);
        var YBlank = Array(this.Canvas.height).fill(0);
        var XSpace = Array(this.Canvas.height).fill(0);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                // //console.time("a");
                for (var y = 100, BlackPoint = -1; y < _this.Canvas.height; y++) {
                    var LastBlank = 0;
                    var _loop_4 = function (x) {
                        var GreyList = [
                            [_this.getPixelGrey(x - 1, y - 1), _this.getPixelGrey(x, y - 1), _this.getPixelGrey(x + 1, y - 1)],
                            [_this.getPixelGrey(x - 1, y), _this.getPixelGrey(x, y), _this.getPixelGrey(x + 1, y)],
                            [_this.getPixelGrey(x - 1, y - 1), _this.getPixelGrey(x, y - 1), _this.getPixelGrey(x + 1, y - 1)]
                        ];
                        if ((function () {
                            for (var ya = 0; ya < 3; ya++) {
                                for (var xa = 0; xa < 3; xa++) {
                                    if (GreyList[ya][xa] === -1) {
                                        GreyList[ya][xa] = GreyList[1][1];
                                        continue;
                                    }
                                    if (ya === 1 && xa === 1) {
                                        continue;
                                    }
                                    if (Math.abs(GreyList[ya][xa] - GreyList[1][1]) <= 10) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        })()) {
                            if (LastBlank === 0) {
                                LastBlank = x;
                            }
                            else {
                                XSpace[y] += (x - LastBlank);
                                LastBlank = x;
                                BlackPoint++;
                            }
                            YBlank[y]++;
                            XBlank[x]++;
                        }
                    };
                    for (var x = 15; x < _this.Canvas.width - 1; x++) {
                        _loop_4(x);
                    }
                    XSpace[y] /= BlackPoint;
                }
                // console.log(XSpace);
                _this.ImageGreyData = {};
                // //console.timeEnd("a");
                resolve();
            }, 25);
        }).then(function () {
            _this.setProgress('正在计算各元素Y轴方向上的边界', 0.35);
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    _this.Ctx.fillStyle = '#00ff00';
                    for (var y = 0, isObject = false, LastBlank = 0, SpaceLength = void 0, ItemHeight = void 0, length_1; y < _this.Canvas.height; y++) {
                        if (!isObject && YBlank[y] > (10)) {
                            length_1 = _this.YBound.push([]);
                            isObject = true;
                            _this.YBound[length_1 - 1][0] = y;
                            SpaceLength = 0;
                            ItemHeight = 0;
                            _this.Ctx.fillRect(0, y, _this.Canvas.width, 1);
                        }
                        if (isObject && ItemHeight > 100 && YBlank[y] <= (_this.YBound.length < 3 ? 10 : 30)) {
                            SpaceLength++;
                            if (SpaceLength > 15) {
                                SpaceLength = 0;
                                _this.YBound[length_1 - 1][1] = LastBlank;
                                isObject = false;
                                _this.Ctx.fillRect(0, LastBlank, _this.Canvas.width, 1);
                                // if (this.YBound.length === 3) { break; }
                            }
                        }
                        if (isObject && YBlank[y] > (_this.YBound.length < 3 ? 5 : 20)) {
                            LastBlank = XSpace[y] > 0.01 ? y : LastBlank;
                            SpaceLength = 0;
                        }
                        if (isObject) {
                            ItemHeight++;
                        }
                    }
                    // console.log(this.YBound);
                    resolve();
                }, 25);
            });
        }).then(function () {
            _this.setProgress('正在计算各元素X轴方向上的边界', 0.45);
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    for (var x = 0, isObject = false, LastBlank = 0, SpaceLength = void 0, ItemWidth = void 0, length_2; x < _this.Canvas.width; x++) {
                        if (!isObject && XBlank[x] > (_this.XBound.length > 0 ? 5 : 20)) {
                            length_2 = _this.XBound.push([]);
                            isObject = true;
                            _this.XBound[length_2 - 1][0] = x;
                            SpaceLength = 0;
                            ItemWidth = 0;
                            _this.Ctx.fillRect(x, 0, 1, _this.Canvas.height);
                        }
                        if (isObject && ItemWidth > 100 && XBlank[x] <= 10) {
                            SpaceLength++;
                            if (SpaceLength > 15) {
                                SpaceLength = 0;
                                _this.XBound[length_2 - 1][1] = LastBlank;
                                isObject = false;
                                _this.Ctx.fillRect(LastBlank, 0, 1, _this.Canvas.height);
                                if (_this.XBound.length === 8) {
                                    break;
                                }
                            }
                        }
                        if (isObject && XBlank[x] > 5) {
                            LastBlank = x;
                            SpaceLength = 0;
                        }
                        if (isObject) {
                            ItemWidth++;
                        }
                    }
                    // //console.log(XBlank);
                    resolve();
                }, 25);
            });
        });
    };
    AutoDetectHashComponent.prototype.setProgress = function (text, Progress) {
        this.InfoText = text;
        this.progress = Progress;
    };
    AutoDetectHashComponent.prototype.ModifyData = function (dialog, e) {
        if (this.detectedItemList.length === 0) {
            return;
        }
        var rect = this.Canvas.getBoundingClientRect();
        var clickY = e.offsetY * (this.Canvas.height / rect.height);
        var clickX = e.offsetX * (this.Canvas.width / rect.width);
        var x;
        var y;
        for (var ya = 0, YAll = this.YBound.length; ya < YAll; ya++) {
            if (this.YBound[ya].length !== 2) {
                continue;
            }
            if (clickY >= this.YBound[ya][0] && clickY <= this.YBound[ya][1]) {
                y = ya;
                break;
            }
        }
        for (var xa = 0, XAll = this.XBound.length; xa < XAll; xa++) {
            if (this.XBound[xa].length !== 2) {
                continue;
            }
            if (clickX >= this.XBound[xa][0] && clickX <= this.XBound[xa][1]) {
                x = xa;
                break;
            }
        }
        if (typeof x === 'undefined' || typeof y === 'undefined') {
            return;
        }
        var ItemImage = document.createElement('canvas').getContext('2d');
        ItemImage.canvas.width = this.XBound[x][1] - this.XBound[x][0];
        ItemImage.canvas.height = this.YBound[y][1] - this.YBound[y][0];
        ItemImage.drawImage(this.ImageElement, this.XBound[x][0], this.YBound[y][0], this.XBound[x][1] - this.XBound[x][0], this.YBound[y][1] - this.YBound[y][0], 0, 0, ItemImage.canvas.width, ItemImage.canvas.height);
        this.ItemImage = ItemImage.canvas.toDataURL();
        this.ModifyingItem = this.detectedItemList[y][x];
        for (var _i = 0, _a = Object.keys(this.ModifyingItem); _i < _a.length; _i++) {
            var key = _a[_i];
            if (typeof this.ModifyingItem[key] !== 'object') {
                this.ModifyBuffer[key] = this.ModifyingItem[key];
            }
        }
        this.Modifying.y = y;
        this.Modifying.x = x;
        // //console.dir(dialog);
        dialog.open();
    };
    AutoDetectHashComponent.prototype.AcceptModify = function () {
        var y = this.Modifying.y;
        var x = this.Modifying.x;
        if (this.ModifyBuffer.name !== this.ModifyingItem.name) {
            for (var i = 0, all = this.ItemHashList.length; i < all; i++) {
                if (this.ItemHashList[i].name === this.ModifyBuffer.name) {
                    this.ItemHashList[i].hash = this.ItemHash[y][x];
                    break;
                }
            }
            this.fetchService.setLocalStorage('detect-hash', {
                NumberHash: this.NumberHash,
                ItemHash: this.ItemHashList
            });
        }
        if (this.ModifyBuffer.name !== this.ModifyingItem.name || this.ModifyBuffer.have !== this.ModifyingItem.have || this.ModifyBuffer.delete !== this.ModifyingItem.delete) {
            for (var _i = 0, _a = Object.keys(this.ModifyBuffer); _i < _a.length; _i++) {
                var key = _a[_i];
                this.ModifyingItem[key] = this.ModifyBuffer[key];
            }
            this.Ctx.drawImage(this.ImageElement, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1);
            this.drawText(x, y);
        }
        if (this.ModifyingItem.delete) {
            this.Ctx.drawImage(this.ImageElement, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1, this.XBound[x][0] + 1, this.YBound[y][0] + 1, this.XBound[x][1] - this.XBound[x][0] - 1, this.YBound[y][1] - this.YBound[y][0] - 1);
            return;
        }
    };
    AutoDetectHashComponent.prototype.toMaterialCalc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, y, Yall, x, Xall;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.detectedItemList || this.detectedItemList.length === 0) {
                    this.snackbar.show({
                        message: '材料为空，请先输入需求。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                    return [2 /*return*/];
                }
                data = this.fetchService.getLocalStorage('m-data', {});
                if (Object.keys(data).length === 0) {
                    this.snackbar.show({
                        message: '请先打开一次材料计算页面。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                    return [2 /*return*/];
                }
                for (y = 0, Yall = this.detectedItemList.length; y < Yall; y++) {
                    for (x = 0, Xall = this.detectedItemList[y].length; x < Xall; x++) {
                        if (this.detectedItemList[y][x].name in data && !isNaN(this.detectedItemList[y][x].have) && this.detectedItemList[y][x].have !== 0 && !this.detectedItemList[y][x].delete) {
                            data[this.detectedItemList[y][x].name].have = this.detectedItemList[y][x].have;
                        }
                    }
                }
                this.fetchService.setLocalStorage('m-data', data);
                this.router.navigateByUrl('/material');
                return [2 /*return*/];
            });
        });
    };
    AutoDetectHashComponent.prototype.toggleItem = function () {
        this.ModifyBuffer.delete = !this.ModifyBuffer.delete;
    };
    AutoDetectHashComponent.prototype.fixNumberHash = function (dialog) {
        this.FixingNumberData = this.NumberData[this.Modifying.y][this.Modifying.x];
        this.FixingNumberIndex = 0;
        dialog.open();
    };
    AutoDetectHashComponent.prototype.AcceptFixNumber = function () {
        for (var i = 0, all = this.FixingNumberData.length; i < all; i++) {
            if (this.FixingNumberData[i].realData !== null) {
                this.NumberHash[this.FixingNumberData[i].realData] = this.FixingNumberData[i].hash;
                /*if (this.FixingNumberIndex === i) {
                    this.HighQNumberHash[this.FixingNumberData[i].realData] = this.HighQNumberHash[this.FixingNumberData[i].realData] || { hash: new Array(144).fill(0), count: 0 };
                    this.HighQNumberHash[this.FixingNumberData[i].realData].hash = this.HighQNumberHash[this.FixingNumberData[i].realData].hash.map((item: number, index: number) => {
                        return item + Number(this.FixingNumberData[i].hash[index]);
                    });
                    this.HighQNumberHash[this.FixingNumberData[i].realData].count++;
                    console.log(this.HighQNumberHash);
                }*/
            }
        }
        this.fetchService.setLocalStorage('detect-hash', {
            NumberHash: this.NumberHash,
            ItemHash: this.ItemHashList
        });
    };
    AutoDetectHashComponent.prototype.drawText = function () {
        var _this = this;
        var pos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pos[_i] = arguments[_i];
        }
        this.Ctx.fillStyle = this.textColor;
        if (pos.length === 0) {
            this.setProgress('正在绘制文字', 0.95);
            return new Promise(function (reduce, reject) {
                setTimeout(function () {
                    for (var y = 0, Yall = _this.detectedItemList.length; y < Yall; y++) {
                        for (var x = 0, Xall = _this.detectedItemList[y].length; x < Xall; x++) {
                            var width = _this.XBound[x][1] - _this.XBound[x][0];
                            var height = _this.YBound[y][1] - _this.YBound[y][0];
                            var NumberString = (_this.detectedItemList[y][x].have / 10000 >= 1) ? Math.round(_this.detectedItemList[y][x].have / 100) / 100 + '万' : _this.detectedItemList[y][x].have.toString();
                            var fontSize = Math.min(_this.getSuitFontSize(_this.detectedItemList[y][x].name, width, height), _this.getSuitFontSize(NumberString, width, height));
                            _this.Ctx.font = fontSize + 'px serif';
                            _this.Ctx.fillText(_this.detectedItemList[y][x].name, Math.floor(_this.XBound[x][0] + (width) / 2), Math.floor(_this.YBound[y][0] + (height) / 2));
                            _this.Ctx.fillText(NumberString, Math.floor(_this.XBound[x][0] + (width) / 2), Math.floor(_this.YBound[y][0] + (height) / 2) + fontSize);
                        }
                    }
                    reduce();
                }, 25);
            });
        }
        else {
            var x = pos[0];
            var y = pos[1];
            var width = this.XBound[x][1] - this.XBound[x][0];
            var height = this.YBound[y][1] - this.YBound[y][0];
            var NumberString = (this.detectedItemList[y][x].have / 10000 >= 1) ? Math.round(this.detectedItemList[y][x].have / 100) / 100 + '万' : this.detectedItemList[y][x].have.toString();
            // this.Ctx.font = this.getSuitFontSize(NumberString, width) + 'px serif';
            var fontSize = Math.min(this.getSuitFontSize(this.detectedItemList[y][x].name, width, height), this.getSuitFontSize(NumberString, width, height));
            this.Ctx.font = fontSize + 'px serif';
            this.Ctx.fillText(this.detectedItemList[y][x].name, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2));
            this.Ctx.fillText(NumberString, Math.floor(this.XBound[x][0] + (width) / 2), Math.floor(this.YBound[y][0] + (height) / 2) + fontSize);
        }
    };
    AutoDetectHashComponent.prototype.getSuitFontSize = function (text, width, height) {
        if (!this.MaxFontSize) {
            if (this.FontSize === 0) {
                this.MaxFontSize = true;
                this.FontSize = this.getSuitFontSize('技能概要·卷3', width, height);
                this.MaxFontSize = false;
            }
            return this.FontSize;
        }
        var BaseFontSize = 10;
        while (true) {
            this.Ctx.font = BaseFontSize + 'px serif';
            if (this.Ctx.measureText(text).width > width || BaseFontSize * 2 + 10 > height) {
                return BaseFontSize - 1;
            }
            BaseFontSize++;
        }
    };
    AutoDetectHashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auto-detect',
            template: __webpack_require__(/*! raw-loader!./auto-detect-hash.component.html */ "./node_modules/raw-loader/index.js!./src/app/auto-detect-hash/auto-detect-hash.component.html"),
            styles: [__webpack_require__(/*! ./auto-detect-hash.component.scss */ "./src/app/auto-detect-hash/auto-detect-hash.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutoDetectHashComponent);
    return AutoDetectHashComponent;
}());



/***/ }),

/***/ "./src/app/auto-detect/auto-detect.component.scss":
/*!********************************************************!*\
  !*** ./src/app/auto-detect/auto-detect.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img[src=\"\"],\nimg:not([src]) {\n  opacity: 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.matcard-item .mdc-button--dense {\n  min-width: 20px;\n  width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n.ad-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.ad-container img {\n  width: 100%;\n  height: auto;\n}\n\n.ad-container .card-title {\n  max-width: 100%;\n  width: 400;\n  padding: 0.25em;\n  display: block;\n}\n\n[mdcCard] {\n  margin: 0.5em;\n}\n\n[mdcCard] .mat-icon {\n  max-height: 48px;\n  max-width: 48px;\n  height: auto;\n  width: auto;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvYXV0by1kZXRlY3QvYXV0by1kZXRlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dG8tZGV0ZWN0L2F1dG8tZGV0ZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFVBQUE7QUNDRjs7QURDQTs7RUFFRSxrQkFBQTtBQ0VGOztBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBO0VBQ0UsU0FBQTtBQ0VGOztBREFBO0VBS0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRExFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNPSjs7QURERTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hdXRvLWRldGVjdC9hdXRvLWRldGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1tzcmM9XCJcIl0sXG5pbWc6bm90KFtzcmNdKSB7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXRjYXJkLWl0ZW0ge1xuICAubWRjLWJ1dHRvbi0tZGVuc2Uge1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLm1kYy10ZXh0LWZpZWxkLS11cGdyYWRlZDpub3QoLm1kYy10ZXh0LWZpZWxkLS1mdWxsd2lkdGgpOm5vdCgubWRjLXRleHQtZmllbGQtLWJveCkge1xuICBtYXJnaW46IDA7XG59XG4uYWQtY29udGFpbmVyIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogNDAwO1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG5bbWRjQ2FyZF0ge1xuICBtYXJnaW46IDAuNWVtO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgbWF4LWhlaWdodDogNDhweDtcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5tYXRjYXJkLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgfVxufVxuIiwiaW1nW3NyYz1cIlwiXSxcbmltZzpub3QoW3NyY10pIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXRjYXJkLWl0ZW0gLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFkLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFkLWNvbnRhaW5lciAuY2FyZC10aXRsZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDQwMDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuW21kY0NhcmRdIHtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblttZGNDYXJkXSAubWF0LWljb24ge1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBtYXgtd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5bbWRjQ2FyZF0gLm1hdGNhcmQtaXRlbSB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auto-detect/auto-detect.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auto-detect/auto-detect.component.ts ***!
  \******************************************************/
/*! exports provided: AutoDetectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDetectComponent", function() { return AutoDetectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// TODO:可调整识别结果
var AutoDetectComponent = /** @class */ (function () {
    function AutoDetectComponent(fetchService, snackbar, router) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.router = router;
        this.detectedItemList = [];
        this.ImageLoaded = false;
        this.items = [];
        this.resultList = [];
    }
    AutoDetectComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // TestONLY
                /*this.detectedItemList = [['MTL_SL_DS',2,1],
                ['MTL_SL_RUSH4',3,1],
                ['MTL_SL_KETONE2',3,1],
                ['MTL_SL_BN',2,1],
                ['MTL_SL_RUSH1',3,1],
                ['MTL_SL_STRG4',3,1],
                ['MTL_SKILL2',1,1]]*/
                this.fetchService.getJson('./assets/data/material.json').subscribe(function (data) {
                    _this.items = [];
                    for (var k in data) {
                        if (data[k]) {
                            _this.items.push(data[k]);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    // 图片预览
    AutoDetectComponent.prototype.previewImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            reader_1.onload = function (e) {
                // const image: HTMLImageElement = document.createElement("img");
                // image.src = reader.r;
                var img = new Image();
                img.src = reader_1.result;
                img.onload = function () {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    var maxSize = 1200;
                    // calculate new size
                    var width = img.width > img.height ? maxSize : (maxSize * img.width / img.height);
                    var height = img.width > img.height ? (maxSize * img.height / img.width) : maxSize;
                    // resize the canvas to the new dimensions
                    canvas.width = width;
                    canvas.height = height;
                    // scale & draw the image onto the canvas
                    ctx.drawImage(img, 0, 0, width, height);
                    _this.imageSrc = canvas.toDataURL('image/jpeg');
                };
            };
            reader_1.readAsDataURL(event.target.files[0]);
        }
    };
    AutoDetectComponent.prototype.objectRegonition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fetchService.postJson('https://rest.graueneko.xyz:1443/aktools/detect', {
                    image: this.imageSrc
                }).subscribe(function (result) {
                    if (result.error) {
                        _this.snackbar.show({
                            message: '服务器内部错误，请重试',
                            actionText: '好的',
                            multiline: false,
                            actionOnBottom: false
                        });
                        return;
                    }
                    var resultList = result.itemList;
                    for (var _i = 0, resultList_1 = resultList; _i < resultList_1.length; _i++) {
                        var item = resultList_1[_i];
                        var dulplicate = false;
                        if (isNaN(item[2])) {
                            item[2] = 1;
                        }
                        for (var _a = 0, _b = _this.detectedItemList; _a < _b.length; _a++) {
                            var existed = _b[_a];
                            if (existed[0] === item[0]) {
                                dulplicate = true;
                                if (existed[2] < item[2]) {
                                    existed[2] = item[2];
                                    existed[1] = item[1];
                                }
                                break;
                            }
                        }
                        if (!dulplicate) {
                            _this.detectedItemList.push(item);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AutoDetectComponent.prototype.downLoad = function (url, name) {
        var oA = document.createElement('a');
        oA.download = name; // 设置下载的文件名，默认是'下载'
        oA.href = url;
        document.body.appendChild(oA);
        oA.click();
        oA.remove(); // 下载之后把创建的元素删除
    };
    AutoDetectComponent.prototype.toMaterialCalc = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _i, _a, m, name_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                if (!this.detectedItemList || this.detectedItemList.length === 0) {
                    this.snackbar.show({
                        message: '材料为空，请先输入需求。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                    return [2 /*return*/];
                }
                data = this.fetchService.getLocalStorage('m-data', {});
                if (Object.keys(data).length === 0) {
                    this.snackbar.show({
                        message: '请先打开一次材料计算页面。',
                        actionText: '好的',
                        multiline: false,
                        actionOnBottom: false
                    });
                    return [2 /*return*/];
                }
                for (_i = 0, _a = this.detectedItemList; _i < _a.length; _i++) {
                    m = _a[_i];
                    if (!m[0]) {
                        continue;
                    }
                    console.log(m[0]);
                    try {
                        name_1 = this.getMaterialInfo(m[0]);
                        if (name_1 === m[0]) {
                            continue;
                        }
                        data[name_1].have = m[1];
                    }
                    catch (e) {
                        console.error(e);
                        continue;
                    }
                }
                this.fetchService.setLocalStorage('m-data', data);
                this.fetchService.setLocalStorage('m-option', {
                    showOnly3plus: true,
                    filtered: true,
                    showMat: true,
                    showChip: true,
                    showBook: true
                });
                this.router.navigateByUrl('/material');
                return [2 /*return*/];
            });
        });
    };
    AutoDetectComponent.prototype.getMaterialInfo = function (name) {
        for (var k in this.items) {
            if (this.items[k]) {
                if (this.items[k].icon === name) {
                    return this.items[k].name;
                }
            }
        }
        // console.warn("Unable to find proper name")
        return name;
    };
    AutoDetectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auto-detect',
            template: __webpack_require__(/*! raw-loader!./auto-detect.component.html */ "./node_modules/raw-loader/index.js!./src/app/auto-detect/auto-detect.component.html"),
            styles: [__webpack_require__(/*! ./auto-detect.component.scss */ "./src/app/auto-detect/auto-detect.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AutoDetectComponent);
    return AutoDetectComponent;
}());



/***/ }),

/***/ "./src/app/char-mat-charcard/char-mat-charcard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/char-mat-charcard/char-mat-charcard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-button--dense .material-icons {\n  font-size: 16px;\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput, select {\n  text-align: center;\n}\n\n[mdcCard] {\n  max-width: 100%;\n  width: 100%;\n  margin: 0.75em 0;\n  padding: 0.25em;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 0.5em 0.5em;\n}\n\n[mdcCard] .card-heading {\n  color: #5c638b;\n  padding: 8px 16px;\n  text-align: center;\n}\n\n[mdcCard] .material-source {\n  color: #87a0c6;\n  font-size: 0.875em;\n}\n\n[mdcCard] .material-detail {\n  color: #5c638b;\n  padding: 0.25em;\n}\n\n.mdc-card.ch-lvl-5 {\n  border-color: #d0694e;\n}\n\n.mdc-card.ch-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n.mdc-card.ch-lvl-3 {\n  border-color: #589bad;\n}\n\n.mdc-card.ch-lvl-2 {\n  border-color: #7ebc59;\n}\n\n.mdc-card.ch-lvl-1 {\n  border-color: #c3e3e5;\n}\n\nbutton {\n  margin: 0;\n}\n\n[mdcIconButton] {\n  padding: 0.5em;\n}\n\n[mdcButton] {\n  font-size: 0.875em;\n  padding: 0px;\n}\n\n[mdcButton].btnTitle {\n  min-width: 54px;\n  width: 54px;\n  white-space: normal;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvY2hhci1tYXQtY2hhcmNhcmQvY2hhci1tYXQtY2hhcmNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXItbWF0LWNoYXJjYXJkL2NoYXItbWF0LWNoYXJjYXJkLmNvbXBvbmVudC5zY3NzIiwiL3plaXQvMjVkZmQyODIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxjQWhCa0I7QUNFcEI7O0FDUEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURVRjs7QUNSQTtFQUNFLGVBQUE7QURXRjs7QUNUQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FEWUY7O0FDVkE7RUFDRSxrQkFBQTtBRGFGOztBQ1hBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLG9DQUFBO0FEY0o7O0FDWkk7RUFDRSxjRm5CYztFRW9CZCxpQkFBQTtFQUNBLGtCQUFBO0FEY047O0FDWEk7RUFDRSxjRnhCZ0I7RUV5QmhCLGtCQUFBO0FEYU47O0FDWEk7RUFDRSxjRjdCYztFRThCZCxlQUFBO0FEYU47O0FDVEU7RUFDRSxxQkFBQTtBRFlKOztBQ1ZFO0VBQ0UscUJBQUE7QURhSjs7QUNYRTtFQUNFLHFCQUFBO0FEY0o7O0FDWkU7RUFDRSxxQkFBQTtBRGVKOztBQ2JFO0VBQ0UscUJBQUE7QURnQko7O0FDYkU7RUFDRSxTQUFBO0FEZ0JKOztBQ2RFO0VBQ0UsY0FBQTtBRGlCSjs7QUNmRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBRGtCSjs7QUNmRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QURrQko7O0FDaEJFO0VBQ0UsYUFBQTtBRG1CSiIsImZpbGUiOiJzcmMvYXBwL2NoYXItbWF0LWNoYXJjYXJkL2NoYXItbWF0LWNoYXJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtYnV0dG9uLS1kZW5zZSAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuW21kY0NhcmRdIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjc1ZW0gMDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBib3JkZXI6IDAuMTI1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJlbSAwLjVlbSAwLjVlbSAwLjVlbTtcbn1cblttZGNDYXJkXSAuY2FyZC1oZWFkaW5nIHtcbiAgY29sb3I6ICM1YzYzOGI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5bbWRjQ2FyZF0gLm1hdGVyaWFsLXNvdXJjZSB7XG4gIGNvbG9yOiAjODdhMGM2O1xuICBmb250LXNpemU6IDAuODc1ZW07XG59XG5bbWRjQ2FyZF0gLm1hdGVyaWFsLWRldGFpbCB7XG4gIGNvbG9yOiAjNWM2MzhiO1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbi5tZGMtY2FyZC5jaC1sdmwtNSB7XG4gIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcbn1cblxuLm1kYy1jYXJkLmNoLWx2bC00IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjljZThjO1xufVxuXG4ubWRjLWNhcmQuY2gtbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG5cbi5tZGMtY2FyZC5jaC1sdmwtMiB7XG4gIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcbn1cblxuLm1kYy1jYXJkLmNoLWx2bC0xIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzNlM2U1O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDA7XG59XG5cblttZGNJY29uQnV0dG9uXSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5bbWRjQnV0dG9uXSB7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5bbWRjQnV0dG9uXS5idG5UaXRsZSB7XG4gIG1pbi13aWR0aDogNTRweDtcbiAgd2lkdGg6IDU0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpIHtcbiAgbWFyZ2luLXRvcDogMDtcbn0iLCJAaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWRjLWJ1dHRvbi0tZGVuc2UgLm1hdGVyaWFsLWljb25ze1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaW5wdXQtZmllbGR7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cbmlucHV0LCBzZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5bbWRjQ2FyZF0ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAuNzVlbSAwO1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICBib3JkZXI6IDAuMTI1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtIDAuNWVtIDAuNWVtIDAuNWVtO1xuICBcbiAgICAuY2FyZC1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5tYXRlcmlhbC1zb3VyY2Uge1xuICAgICAgY29sb3I6ICRtZGMtdGhlbWUtc2Vjb25kYXJ5O1xuICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgIH1cbiAgICAubWF0ZXJpYWwtZGV0YWlsIHtcbiAgICAgIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgfVxuICB9XG4gIFxuICAubWRjLWNhcmQuY2gtbHZsLTUge1xuICAgIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcbiAgfVxuICAubWRjLWNhcmQuY2gtbHZsLTQge1xuICAgIGJvcmRlci1jb2xvcjogI2Y5Y2U4YztcbiAgfVxuICAubWRjLWNhcmQuY2gtbHZsLTMge1xuICAgIGJvcmRlci1jb2xvcjogIzU4OWJhZDtcbiAgfVxuICAubWRjLWNhcmQuY2gtbHZsLTIge1xuICAgIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcbiAgfVxuICAubWRjLWNhcmQuY2gtbHZsLTEge1xuICAgIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFttZGNJY29uQnV0dG9uXSB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbiAgW21kY0J1dHRvbl17XG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBcbiAgfVxuICBbbWRjQnV0dG9uXS5idG5UaXRsZXtcbiAgICBtaW4td2lkdGg6IDU0cHg7XG4gICAgd2lkdGg6NTRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG4gIC5tZGMtdGV4dC1maWVsZC0tdXBncmFkZWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoKTpub3QoLm1kYy10ZXh0LWZpZWxkLS1ib3gpe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/char-mat-charcard/char-mat-charcard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/char-mat-charcard/char-mat-charcard.component.ts ***!
  \******************************************************************/
/*! exports provided: CharMatCharcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatCharcardComponent", function() { return CharMatCharcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



var CharMatCharcardComponent = /** @class */ (function () {
    function CharMatCharcardComponent(fetch) {
        this.fetch = fetch;
        this.reportRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportMats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = {
            ce: 0,
            te: 0,
            cs: 1,
            ts: 1,
            specials: [],
            css: [],
            tss: []
        };
        this.limits = {
            maxEvolve: 0,
            maxSkill: 1,
            maxSpecial: [],
        };
        this.isExsm = false;
    }
    CharMatCharcardComponent.prototype.emitRemove = function () {
        this.reportRemove.emit(this.char.name);
    };
    CharMatCharcardComponent.prototype.getOrDefault = function (o, k, v) {
        if (v === void 0) { v = 0; }
        return k in o ? o[k] : v;
    };
    CharMatCharcardComponent.prototype.saveLocal = function () {
        this.fetch.setLocalStorage('cm-' + this.char.name, this.data);
    };
    CharMatCharcardComponent.prototype.ngOnInit = function () {
        // console.log(this.char.evolveCosts.length);
        this.limits.maxSkill = this.char.askillCosts.length + 1;
        this.limits.maxEvolve = this.char.evolveCosts.length - 1;
        var cml = this.fetch.getLocalStorage('cm-' + this.char.name, {
            ce: 0,
            te: this.limits.maxEvolve,
            cs: 1,
            ts: this.limits.maxSkill,
            specials: [],
            css: [],
            tss: []
        });
        this.data = cml;
        var specialCount = this.char.sskillCosts.length;
        if (specialCount !== 0 && this.data.specials.length === 0) {
            for (var i = 0; i < specialCount; i++) {
                var maxSpecial = this.char.sskillCosts[i].levelUpCost.length;
                this.data.css.push(cml.css.length > i ? cml.css[i] : 0);
                this.data.tss.push(cml.tss.length > i ? cml.tss[i] : 0); // 专精技能并不会全部强化，因此取消默认最大。
                this.limits.maxSpecial.push(maxSpecial);
                this.data.specials.push(i);
            }
        }
        this.calc();
        this.isExsm = this.fetch.getLocalStorage('s-exsm', false);
    };
    CharMatCharcardComponent.prototype.onEvolveClick = function (isTarget, isAdd) {
        var maxEvolve = this.char.evolveCosts.length - 1;
        if (isTarget) {
            this.data.te = this.checkFix(this.data.te + (isAdd ? 1 : -1), 0, maxEvolve);
        }
        else {
            this.data.ce = this.checkFix(this.data.ce + (isAdd ? 1 : -1), 0, maxEvolve);
        }
        if (this.data.te < this.data.ce) {
            if (isTarget) {
                this.data.ce = this.data.te;
            }
            else {
                this.data.te = this.data.ce;
            }
        }
        this.calc();
    };
    CharMatCharcardComponent.prototype.onSkillClick = function (isTarget, isAdd) {
        var maxSkill = this.char.askillCosts.length + 1;
        if (isTarget) {
            this.data.ts = this.checkFix(this.data.ts + (isAdd ? 1 : -1), 1, maxSkill);
        }
        else {
            this.data.cs = this.checkFix(this.data.cs + (isAdd ? 1 : -1), 1, maxSkill);
        }
        if (this.data.ts < this.data.cs) {
            if (isTarget) {
                this.data.cs = this.data.ts;
            }
            else {
                this.data.ts = this.data.cs;
            }
        }
        this.calc();
    };
    CharMatCharcardComponent.prototype.onSpecialClick = function (idx, isTarget, isAdd) {
        var maxSpecial = this.char.sskillCosts[idx].levelUpCost.length;
        if (isTarget) {
            this.data.tss[idx] = this.checkFix(this.data.tss[idx] + (isAdd ? 1 : -1), 0, maxSpecial);
        }
        else {
            this.data.css[idx] = this.checkFix(this.data.css[idx] + (isAdd ? 1 : -1), 0, maxSpecial);
        }
        if (this.data.tss[idx] < this.data.css[idx]) {
            if (isTarget) {
                this.data.css[idx] = this.data.tss[idx];
            }
            else {
                this.data.tss[idx] = this.data.css[idx];
            }
        }
        this.calc();
    };
    CharMatCharcardComponent.prototype.addOrCreate = function (o, key, val) {
        if (key in o) {
            o[key] += val;
        }
        else {
            o[key] = val;
        }
    };
    CharMatCharcardComponent.prototype.calc = function () {
        var m = {};
        // evolve
        for (var i = this.data.ce + 1; i <= this.data.te; i++) {
            var ec = this.char.evolveCosts[i];
            for (var _i = 0, ec_1 = ec; _i < ec_1.length; _i++) {
                var eci = ec_1[_i];
                this.addOrCreate(m, eci.id, eci.count);
            }
        }
        // all skills
        for (var i = this.data.cs; i < this.data.ts; i++) {
            var sc = this.char.askillCosts[i - 1];
            for (var _a = 0, _b = sc.lvlUpCost; _a < _b.length; _a++) {
                var sci = _b[_a];
                this.addOrCreate(m, sci.id, sci.count);
            }
        }
        // specials
        for (var _c = 0, _d = this.data.specials; _c < _d.length; _c++) {
            var idx = _d[_c];
            for (var i = this.data.css[idx]; i < this.data.tss[idx]; i++) {
                var spc = this.char.sskillCosts[idx].levelUpCost[i];
                for (var _e = 0, _f = spc.levelUpCost; _e < _f.length; _e++) {
                    var spci = _f[_e];
                    this.addOrCreate(m, spci.id, spci.count);
                }
            }
        }
        // console.log(this);
        this.saveLocal();
        this.reportMats.emit({ name: this.char.name, mat: m });
    };
    CharMatCharcardComponent.prototype.checkFix = function (val, min, max) {
        // console.log(val, min, max);
        if (val === null || val < min) {
            return min;
        }
        if (val > max) {
            return max;
        }
        return val;
    };
    CharMatCharcardComponent.prototype.onInputChange = function () {
        var maxEvolve = this.char.evolveCosts.length - 1;
        this.data.te = this.checkFix(this.data.te, 0, maxEvolve);
        this.data.ce = this.checkFix(this.data.ce, 0, maxEvolve);
        var maxSkill = this.char.askillCosts.length + 1;
        this.data.ts = this.checkFix(this.data.ts, 1, maxSkill);
        this.data.cs = this.checkFix(this.data.cs, 1, maxSkill);
        for (var _i = 0, _a = this.data.specials; _i < _a.length; _i++) {
            var idx = _a[_i];
            var maxSpecial = this.char.sskillCosts[idx].levelUpCost.length;
            this.data.tss[idx] = this.checkFix(this.data.tss[idx], 0, maxSpecial);
            this.data.css[idx] = this.checkFix(this.data.css[idx], 0, maxSpecial);
        }
        this.calc();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CharMatCharcardComponent.prototype, "char", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CharMatCharcardComponent.prototype, "reportRemove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CharMatCharcardComponent.prototype, "reportMats", void 0);
    CharMatCharcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-char-mat-charcard',
            template: __webpack_require__(/*! raw-loader!./char-mat-charcard.component.html */ "./node_modules/raw-loader/index.js!./src/app/char-mat-charcard/char-mat-charcard.component.html"),
            styles: [__webpack_require__(/*! ./char-mat-charcard.component.scss */ "./src/app/char-mat-charcard/char-mat-charcard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
    ], CharMatCharcardComponent);
    return CharMatCharcardComponent;
}());



/***/ }),

/***/ "./src/app/char-mat-matcard/char-mat-matcard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/char-mat-matcard/char-mat-matcard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n[mdcCard] {\n  min-width: 300px;\n  width: 100%;\n  max-width: 100%;\n  margin-top: 0.5em;\n  color: #5c638b;\n  padding: 0.25em;\n}\n\n[mdcCard] img {\n  max-width: 48px;\n  max-height: 48px;\n  width: auto;\n  height: auto;\n  margin: auto;\n}\n\n[mdcCard] p {\n  margin: 0;\n}\n\n[mdcCard] .matcard-item {\n  padding: 0.125em 0.5em;\n  min-width: 150px;\n  width: 160px;\n  max-width: 100%;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 0.5em 2em;\n  font-size: 0.875rem;\n  margin: 0.125em;\n}\n\n[mdcCard] .matcard-item-image {\n  width: 48px;\n  height: 48px;\n  display: flex;\n}\n\n[mdcCard] [mdcCardActions] {\n  min-width: 300px;\n  width: 300px;\n}\n\n[mdcCard] .place-holder {\n  height: 0px;\n  border: none;\n}\n\n[mdcCard] .m-lvl-5 {\n  border-color: #d0694e;\n}\n\n[mdcCard] .m-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n[mdcCard] .m-lvl-3 {\n  border-color: #589bad;\n}\n\n[mdcCard] .m-lvl-2 {\n  border-color: #7ebc59;\n}\n\n[mdcCard] .m-lvl-1 {\n  border-color: #c3e3e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvY2hhci1tYXQtbWF0Y2FyZC9jaGFyLW1hdC1tYXRjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFyLW1hdC1tYXRjYXJkL2NoYXItbWF0LW1hdGNhcmQuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNQQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEVUY7O0FDVEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURXSjs7QUNSRTtFQUNFLFNBQUE7QURVSjs7QUNQRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURTSjs7QUNQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRFNKOztBQ05FO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FEUUo7O0FDTEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRE9KOztBQ0pFO0VBQ0UscUJBQUE7QURNSjs7QUNKRTtFQUNFLHFCQUFBO0FETUo7O0FDSkU7RUFDRSxxQkFBQTtBRE1KOztBQ0pFO0VBQ0UscUJBQUE7QURNSjs7QUNKRTtFQUNFLHFCQUFBO0FETUoiLCJmaWxlIjoic3JjL2FwcC9jaGFyLW1hdC1tYXRjYXJkL2NoYXItbWF0LW1hdGNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxuJGNvbG9yLTE6ICNkMDY5NGU7XG4kY29sb3ItMjogI2Y2Y2U4YztcbiRjb2xvci0zOiAjYzNlM2U1O1xuJGNvbG9yLTQ6ICM1ODliYWQ7XG5cbiRtZGMtdGhlbWUtcHJpbWFyeTogIzVjNjM4YjtcbiRtZGMtdGhlbWUtc2Vjb25kYXJ5OiAjODdhMGM2O1xuJG1kYy10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmO1xuJG1kYy10aGVtZS1zdXJmYWNlOiAjZmZmO1xuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcbiAgc2Fucy1zZXJpZjtcblxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xufVxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNWM2MzhiO1xufVxuXG5bbWRjQ2FyZF0ge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgY29sb3I6ICM1YzYzOGI7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbn1cblttZGNDYXJkXSBpbWcge1xuICBtYXgtd2lkdGg6IDQ4cHg7XG4gIG1heC1oZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblttZGNDYXJkXSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuW21kY0NhcmRdIC5tYXRjYXJkLWl0ZW0ge1xuICBwYWRkaW5nOiAwLjEyNWVtIDAuNWVtO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAyZW0gMC41ZW0gMC41ZW0gMmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW46IDAuMTI1ZW07XG59XG5bbWRjQ2FyZF0gLm1hdGNhcmQtaXRlbS1pbWFnZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5bbWRjQ2FyZF0gW21kY0NhcmRBY3Rpb25zXSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblttZGNDYXJkXSAucGxhY2UtaG9sZGVyIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblttZGNDYXJkXSAubS1sdmwtNSB7XG4gIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcbn1cblttZGNDYXJkXSAubS1sdmwtNCB7XG4gIGJvcmRlci1jb2xvcjogI2Y5Y2U4Yztcbn1cblttZGNDYXJkXSAubS1sdmwtMyB7XG4gIGJvcmRlci1jb2xvcjogIzU4OWJhZDtcbn1cblttZGNDYXJkXSAubS1sdmwtMiB7XG4gIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcbn1cblttZGNDYXJkXSAubS1sdmwtMSB7XG4gIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcbn0iLCJAaW1wb3J0ICcuLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xuW21kY0NhcmRdIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XG4gICAgbWF4LWhlaWdodDogNDhweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm1hdGNhcmQtaXRlbSB7XG4gICAgcGFkZGluZzogMC4xMjVlbSAwLjVlbTtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJlbSAwLjVlbSAwLjVlbSAyZW07XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBtYXJnaW46IDAuMTI1ZW07XG4gIH1cbiAgLm1hdGNhcmQtaXRlbS1pbWFnZSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBbbWRjQ2FyZEFjdGlvbnNdIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5wbGFjZS1ob2xkZXIge1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5tLWx2bC01IHtcbiAgICBib3JkZXItY29sb3I6ICNkMDY5NGU7XG4gIH1cbiAgLm0tbHZsLTQge1xuICAgIGJvcmRlci1jb2xvcjogI2Y5Y2U4YztcbiAgfVxuICAubS1sdmwtMyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTg5YmFkO1xuICB9XG4gIC5tLWx2bC0yIHtcbiAgICBib3JkZXItY29sb3I6ICM3ZWJjNTk7XG4gIH1cbiAgLm0tbHZsLTEge1xuICAgIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/char-mat-matcard/char-mat-matcard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/char-mat-matcard/char-mat-matcard.component.ts ***!
  \****************************************************************/
/*! exports provided: CharMatMatcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatMatcardComponent", function() { return CharMatMatcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");





var CharMatMatcardComponent = /** @class */ (function () {
    function CharMatMatcardComponent(fetch, router, snackbar) {
        this.fetch = fetch;
        this.router = router;
        this.snackbar = snackbar;
        this.innerSMats = [];
    }
    Object.defineProperty(CharMatMatcardComponent.prototype, "smats", {
        get: function () {
            return this.innerSMats;
        },
        set: function (sm) {
            this.innerSMats = sm;
        },
        enumerable: true,
        configurable: true
    });
    CharMatMatcardComponent.prototype.toMaterialCalc = function () {
        if (!this.innerSMats || this.innerSMats.length === 0) {
            this.snackbar.show({
                message: '材料为空，请先输入需求。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
            return;
        }
        var data = this.fetch.getLocalStorage('m-data', {});
        if (Object.keys(data).length === 0) {
            this.snackbar.show({
                message: '请先打开一次材料计算页面。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
            return;
        }
        for (var _i = 0, _a = this.innerSMats; _i < _a.length; _i++) {
            var m = _a[_i];
            if (data[this.allmats[m.id].name]) {
                data[this.allmats[m.id].name].need = m.count;
            }
            else {
                this.snackbar.show({
                    message: '材料有更新，请先打开一次材料计算页面，当前输入不会清空。',
                    actionText: '好的',
                    multiline: false,
                    actionOnBottom: false
                });
                return;
            }
        }
        this.fetch.setLocalStorage('m-data', data);
        this.fetch.setLocalStorage('m-option', {
            showOnly3plus: true,
            filtered: true,
            showMat: true,
            showChip: true,
            showBook: true
        });
        this.router.navigateByUrl('/material');
    };
    CharMatMatcardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CharMatMatcardComponent.prototype, "allmats", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], CharMatMatcardComponent.prototype, "smats", null);
    CharMatMatcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-char-mat-matcard',
            template: __webpack_require__(/*! raw-loader!./char-mat-matcard.component.html */ "./node_modules/raw-loader/index.js!./src/app/char-mat-matcard/char-mat-matcard.component.html"),
            styles: [__webpack_require__(/*! ./char-mat-matcard.component.scss */ "./src/app/char-mat-matcard/char-mat-matcard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"]])
    ], CharMatMatcardComponent);
    return CharMatMatcardComponent;
}());



/***/ }),

/***/ "./src/app/char-mat/char-mat.component.scss":
/*!**************************************************!*\
  !*** ./src/app/char-mat/char-mat.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput,\nselect {\n  text-align: center;\n  -webkit-padding-start: 0.5em;\n          padding-inline-start: 0.5em;\n}\n\n.padding-x-1 {\n  padding: 0 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvY2hhci1tYXQvY2hhci1tYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXItbWF0L2NoYXItbWF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTs7RUFFRSxrQkFBQTtFQUNBLDRCQUFBO1VBQUEsMkJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NoYXItbWF0L2NoYXItbWF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC4yNWVtO1xufVxuaW5wdXQsXG5zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVlbTtcbn1cbi5wYWRkaW5nLXgtMSB7XG4gIHBhZGRpbmc6IDAgMWVtO1xufVxuIiwiLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC4yNWVtO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNWVtO1xufVxuXG4ucGFkZGluZy14LTEge1xuICBwYWRkaW5nOiAwIDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/char-mat/char-mat.component.ts":
/*!************************************************!*\
  !*** ./src/app/char-mat/char-mat.component.ts ***!
  \************************************************/
/*! exports provided: CharMatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharMatComponent", function() { return CharMatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");




var CharMatComponent = /** @class */ (function () {
    function CharMatComponent(fetch, cdRef, snackbar) {
        this.fetch = fetch;
        this.cdRef = cdRef;
        this.snackbar = snackbar;
        this.chars = [];
        this.joindChars = [];
        this.star = 6;
        this.prof = '全部';
        this.char = '';
        this.selectedChars = [];
        this.rawMat = {};
    }
    CharMatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetch.getJson('./assets/data/charMaterials.json').subscribe(function (data) {
            _this.cmMap = data;
            _this.chars = Object.keys(data);
            var cbs = [[], [], [], [], [], [], []];
            var cbp = { 医疗: [], 近卫: [], 先锋: [], 重装: [], 狙击: [], 术师: [], 辅助: [], 特种: [], 全部: [], 其它: [] };
            for (var chn in data) {
                if (data[chn] && data[chn].profession !== '其它') {
                    cbs[0].push(chn);
                    cbp.全部.push(chn);
                    cbs[+data[chn].rarity + 1].push(chn);
                    cbp[data[chn].profession].push(chn);
                }
            }
            for (var i = 0; i < cbs.length; i++) {
                cbs[i] = cbs[i].sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
            }
            for (var p in cbp) {
                if (cbp[p]) {
                    cbp[p] = cbp[p].sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
                }
            }
            _this.charByStar = cbs;
            _this.charByProf = cbp;
            _this.onFilterChange();
            _this.selectedChars = _this.fetch.getLocalStorage('cm-chars', []);
        });
        this.fetch.getJson('./assets/data/material.json').subscribe(function (data) {
            _this.mats = data;
        });
    };
    CharMatComponent.prototype.onFilterChange = function () {
        var cs = this.charByStar[this.star];
        var cp = this.charByProf[this.prof];
        // 在已排好序的前提下求交集，时间复杂度n+m
        var joind = [];
        for (var i = 0, j = 0; i < cs.length && j < cp.length;) {
            if (cs[i] > cp[j]) {
                j++;
            }
            else if (cs[i] < cp[j]) {
                i++;
            }
            else if (cs[i] === cp[j]) {
                joind.push(cs[i]);
                i++;
                j++;
            }
        }
        this.joindChars = joind;
        if (joind.length > 0) {
            this.char = joind[0];
        }
    };
    CharMatComponent.prototype.onCharAdd = function () {
        if (!this.selectedChars.includes(this.char)) {
            this.selectedChars.unshift(this.char);
            this.fetch.setLocalStorage('cm-chars', this.selectedChars);
        }
        else {
            this.snackbar.show({
                message: '干员已存在。',
                actionText: '好的',
                multiline: false,
                actionOnBottom: false
            });
        }
    };
    CharMatComponent.prototype.onCharRemove = function (name) {
        var index = this.selectedChars.indexOf(name, 0);
        if (index > -1) {
            this.selectedChars.splice(index, 1);
        }
        delete this.rawMat[name];
        this.fetch.setLocalStorage('cm-chars', this.selectedChars);
        this.summaryMats();
    };
    CharMatComponent.prototype.onMatReport = function (charMat) {
        // console.log(charMat);
        this.rawMat[charMat.name] = charMat.mat;
        this.summaryMats();
    };
    CharMatComponent.prototype.addOrCreate = function (m, key, val) {
        if (key in m) {
            m[key] += val;
        }
        else {
            m[key] = val;
        }
    };
    CharMatComponent.prototype.summaryMats = function () {
        var _this = this;
        var sum = {};
        for (var k in this.rawMat) {
            if (this.rawMat[k]) {
                for (var mid in this.rawMat[k]) {
                    if (this.rawMat[k][mid]) {
                        this.addOrCreate(sum, mid, this.rawMat[k][mid]);
                    }
                }
            }
        }
        var sorted = [];
        for (var k in sum) {
            if (sum[k]) {
                sorted.push({
                    id: k,
                    count: sum[k]
                });
            }
        }
        sorted.sort(function (a, b) { return _this.mats[a.id].rarity > _this.mats[b.id].rarity ? -1 :
            (_this.mats[a.id].rarity < _this.mats[b.id].rarity ? 1 :
                (a.id > b.id ? -1 : (a.id < b.id ? 1 : 0))); });
        this.summarizedMats = sorted;
    };
    CharMatComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    CharMatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-char-mat',
            template: __webpack_require__(/*! raw-loader!./char-mat.component.html */ "./node_modules/raw-loader/index.js!./src/app/char-mat/char-mat.component.html"),
            styles: [__webpack_require__(/*! ./char-mat.component.scss */ "./src/app/char-mat/char-mat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
    ], CharMatComponent);
    return CharMatComponent;
}());



/***/ }),

/***/ "./src/app/fetch.service.ts":
/*!**********************************!*\
  !*** ./src/app/fetch.service.ts ***!
  \**********************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FetchService = /** @class */ (function () {
    function FetchService(http) {
        this.http = http;
        this.cache = new Object();
    }
    FetchService.prototype.getJson = function (url) {
        if (url in this.cache) {
            return this.cache[url];
        }
        var resp = this.http.get(url);
        this.cache[url] = resp;
        return resp;
    };
    FetchService.prototype.postJson = function (url, data) {
        var resp = this.http.post(url, data);
        return resp;
    };
    FetchService.prototype.getLocalStorage = function (key, defaultVal) {
        if (defaultVal === void 0) { defaultVal = null; }
        var val = localStorage.getItem(key);
        // console.log({ key: val });
        if (val === null) {
            return defaultVal;
        }
        return JSON.parse(val);
    };
    FetchService.prototype.setLocalStorage = function (key, val) {
        // console.log({ key: val });
        localStorage.setItem(key, JSON.stringify(val));
    };
    FetchService.prototype.removeLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    FetchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FetchService);
    return FetchService;
}());



/***/ }),

/***/ "./src/app/help/help.component.scss":
/*!******************************************!*\
  !*** ./src/app/help/help.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.help-container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1em;\n}\n\np {\n  color: #5c638b;\n}\n\nimg {\n  max-width: 300px;\n  width: auto;\n  height: auto;\n}\n\nul {\n  color: #5c638b;\n}\n\nul li {\n  vertical-align: center;\n  align-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNOQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURTRjs7QUNOQTtFQUNFLGNGSGtCO0FDWXBCOztBQ1BBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRFVGOztBQ1JBO0VBQ0UsY0ZYa0I7QUNzQnBCOztBQ1ZFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FEWUoiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxuJGNvbG9yLTE6ICNkMDY5NGU7XG4kY29sb3ItMjogI2Y2Y2U4YztcbiRjb2xvci0zOiAjYzNlM2U1O1xuJGNvbG9yLTQ6ICM1ODliYWQ7XG5cbiRtZGMtdGhlbWUtcHJpbWFyeTogIzVjNjM4YjtcbiRtZGMtdGhlbWUtc2Vjb25kYXJ5OiAjODdhMGM2O1xuJG1kYy10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmO1xuJG1kYy10aGVtZS1zdXJmYWNlOiAjZmZmO1xuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcbiAgc2Fucy1zZXJpZjtcblxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xufVxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNWM2MzhiO1xufVxuXG4uaGVscC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbnAge1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxudWwge1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cbnVsIGxpIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcblxuLmhlbHAtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMWVtO1xufVxuXG5wIHtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbmltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG51bCB7XG4gIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gIGxpIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.scrollToAnchor = function ($element) {
        $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/hr-comb/hr-comb.component.scss":
/*!************************************************!*\
  !*** ./src/app/hr-comb/hr-comb.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.char-lvl-6 {\n  background-color: #d0694e;\n  color: white;\n}\n\n.char-lvl-5 {\n  background-color: #f9ce8c;\n  color: #1a1d1e;\n}\n\n.char-lvl-4 {\n  background-color: #589bad;\n  color: white;\n}\n\n.char-lvl-3 {\n  background-color: #7ebc59;\n  color: white;\n}\n\n.char-lvl-2 {\n  background-color: #c3e3e5;\n  color: #1a1d1e;\n}\n\n.char-lvl-1 {\n  background-color: #1a1d1e;\n  color: white;\n}\n\n.char-hl {\n  background-color: #5c638b;\n  color: white;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  background: #c3e3e5;\n  color: #fff;\n  font-size: 1em;\n  padding: 0px;\n}\n\n[mdcCard] {\n  margin: 8px 4px;\n}\n\n.mdc-list-divider {\n  margin: 2px;\n}\n\n.mdc-chip {\n  margin: 8px;\n  background: transparent;\n}\n\n.mdc-button {\n  padding: 0em 0.75em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.mdc-button.mdc-button--outlined {\n  padding: 0em 0.5em;\n  background-color: #fff;\n}\n\n.gap-row {\n  background-color: #e8eaf7;\n}\n\n[mdcListDivider] {\n  margin: 0px;\n}\n\n.p-25 {\n  padding: 0.25em;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.hidden-gap-row {\n  height: 1px;\n  width: 100%;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvaHItY29tYi9oci1jb21iLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oci1jb21iL2hyLWNvbWIuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNOQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRFNGOztBQ05BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FEU0Y7O0FDTkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QURTRjs7QUNOQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRFNGOztBQ05BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FEU0Y7O0FDTkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QURTRjs7QUNOQTtFQUNFLHlCRjNCa0I7RUU0QmxCLFlBQUE7QURTRjs7QUNOQTtFQUNFLFdBQUE7QURTRjs7QUNQQTtFQUNFLG1CRnRDUTtFRXVDUixXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURVRjs7QUNQQTtFQUNFLGVBQUE7QURVRjs7QUNEQTtFQUNFLFdBQUE7QURJRjs7QUNEQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBRElGOztBQ0RBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURJRjs7QUNEQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QURJRjs7QUNEQTtFQUNFLHlCRmhFcUI7QUNvRXZCOztBQ0RBO0VBQ0UsV0FBQTtBRElGOztBQ0VBO0VBQ0UsZUFBQTtBRENGOztBQ0NBO0VBQ0UscUJBQUE7QURFRjs7QUNBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBREdGIiwiZmlsZSI6InNyYy9hcHAvaHItY29tYi9oci1jb21iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLmNoYXItbHZsLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA2OTRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWx2bC01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U4YztcbiAgY29sb3I6ICMxYTFkMWU7XG59XG5cbi5jaGFyLWx2bC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4OWJhZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hhci1sdmwtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWJjNTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXItbHZsLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlM2U1O1xuICBjb2xvcjogIzFhMWQxZTtcbn1cblxuLmNoYXItbHZsLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZDFlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWhsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjM4YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICNjM2UzZTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5bbWRjQ2FyZF0ge1xuICBtYXJnaW46IDhweCA0cHg7XG59XG5cbi5tZGMtbGlzdC1kaXZpZGVyIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5tZGMtY2hpcCB7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5tZGMtYnV0dG9uLm1kYy1idXR0b24tLW91dGxpbmVkIHtcbiAgcGFkZGluZzogMGVtIDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZ2FwLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZjc7XG59XG5cblttZGNMaXN0RGl2aWRlcl0ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnAtMjUge1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oaWRkZW4tZ2FwLXJvdyB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcblxuLmNoYXItbHZsLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA2OTRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWx2bC01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2U4YztcbiAgY29sb3I6ICMxYTFkMWU7XG59XG5cbi5jaGFyLWx2bC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4OWJhZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hhci1sdmwtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWJjNTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXItbHZsLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlM2U1O1xuICBjb2xvcjogIzFhMWQxZTtcbn1cblxuLmNoYXItbHZsLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZDFlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGFyLWhsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50aCB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci0zO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuW21kY0NhcmRdIHtcbiAgbWFyZ2luOiA4cHggNHB4O1xufVxuXG5cbi8vIC5idG4tdGFnIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJG1kYy10aGVtZS1zZWNvbmRhcnk7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuXG4ubWRjLWxpc3QtZGl2aWRlciB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ubWRjLWNoaXAge1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbn1cblxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5tZGMtYnV0dG9uLm1kYy1idXR0b24tLW91dGxpbmVkIHtcbiAgcGFkZGluZzogMGVtIDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZ2FwLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRoaWdobGlnaHQtYmFja2dyb3VuZDtcbn1cblxuW21kY0xpc3REaXZpZGVyXSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4vLyB0ZCB7XG4vLyAgIG1pbi13aWR0aDogMTI1cHg7XG4vLyB9XG4ucC0yNXtcbiAgcGFkZGluZzogMC4yNWVtO1xufVxuLmlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oaWRkZW4tZ2FwLXJvdyB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hr-comb/hr-comb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hr-comb/hr-comb.component.ts ***!
  \**********************************************/
/*! exports provided: HrCombComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrCombComponent", function() { return HrCombComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



var HrCombComponent = /** @class */ (function () {
    function HrCombComponent(fetch) {
        this.fetch = fetch;
        this.reportCharClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Note: without this trackBy function, *ngFor re-rendering will be extremely
    // slow due to the tracking mechanism.
    HrCombComponent.prototype.trackComb = function (_, item) {
        if (item === null) {
            return null;
        }
        return item.id;
    };
    HrCombComponent.prototype.onNameClick = function (name) {
        this.reportCharClick.emit(name);
    };
    HrCombComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HrCombComponent.prototype, "hrcombs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HrCombComponent.prototype, "charSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HrCombComponent.prototype, "option", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HrCombComponent.prototype, "reportCharClick", void 0);
    HrCombComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hr-comb',
            template: __webpack_require__(/*! raw-loader!./hr-comb.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr-comb/hr-comb.component.html"),
            styles: [__webpack_require__(/*! ./hr-comb.component.scss */ "./src/app/hr-comb/hr-comb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
    ], HrCombComponent);
    return HrCombComponent;
}());



/***/ }),

/***/ "./src/app/hr-tags/hr-tags.component.scss":
/*!************************************************!*\
  !*** ./src/app/hr-tags/hr-tags.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.mdc-button {\n  padding: 0em 0.5em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.mdc-button--outlined:not(.mdc-button--raised) {\n  background-color: #fff;\n}\n\n.mdc-button.btnTitle {\n  background-color: #87a0c6;\n  color: transparent;\n}\n\n.no-padding {\n  padding: 0px, 0px, 0px, 0px;\n}\n\n.mdc-chip {\n  margin: 2px;\n}\n\n.mdc-chip--selected {\n  background-color: #c3e3e5;\n}\n\n.mdc-button.selected {\n  background-color: #87a0c6;\n  color: #5c638b;\n}\n\n.btnStarGroup .mdc-button {\n  padding: 0 0.25em;\n  min-width: 0px;\n}\n\n.btnRowTitle {\n  padding: 0 0.25em;\n  min-width: 40px;\n  margin: 0px;\n}\n\n.even-row {\n  background-color: #e8eaf7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvaHItdGFncy9oci10YWdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oci10YWdzL2hyLXRhZ3MuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNOQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEU0Y7O0FDTkE7RUFDRSxzQkFBQTtBRFNGOztBQ05BO0VBQ0UseUJGUG9CO0VFUXBCLGtCQUFBO0FEU0Y7O0FDTkE7RUFDRSwyQkFBQTtBRFNGOztBQ05BO0VBQ0UsV0FBQTtBRFNGOztBQ05BO0VBQ0UseUJGeEJRO0FDaUNWOztBQ05BO0VBQ0UseUJGeEJvQjtFRXlCcEIsY0YxQmtCO0FDbUNwQjs7QUNMQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRFFGOztBQ0xBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRFFGOztBQ0xBO0VBQ0UseUJGakNxQjtBQ3lDdkIiLCJmaWxlIjoic3JjL2FwcC9oci10YWdzL2hyLXRhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2NvbG9yaHVudC5jby9wYWxldHRlLzM2MVxuJGNvbG9yLTE6ICNkMDY5NGU7XG4kY29sb3ItMjogI2Y2Y2U4YztcbiRjb2xvci0zOiAjYzNlM2U1O1xuJGNvbG9yLTQ6ICM1ODliYWQ7XG5cbiRtZGMtdGhlbWUtcHJpbWFyeTogIzVjNjM4YjtcbiRtZGMtdGhlbWUtc2Vjb25kYXJ5OiAjODdhMGM2O1xuJG1kYy10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmO1xuJG1kYy10aGVtZS1zdXJmYWNlOiAjZmZmO1xuJG1kYy10eXBvZ3JhcGh5LWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBcIk5vdG8gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJOaW1idXMgU2FucyBMXCIsIEFyaWFsLFxuICBcIkxpYmVyYXRpb24gU2Fuc1wiLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBcIk5vdG8gU2FucyBDSksgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgU0NcIiwgXCJTb3VyY2UgSGFuIFNhbnMgQ05cIixcbiAgU2ltSGVpLCBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIldlbnF1YW55aSBNaWNybyBIZWlcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIlNUIEhlaXRpXCIsIFwiV2VuUXVhbllpIFplbiBIZWkgU2hhcnBcIixcbiAgc2Fucy1zZXJpZjtcblxuJGhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjZThlYWY3O1xuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xufVxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNWM2MzhiO1xufVxuXG4ubWRjLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBlbSAwLjVlbTtcbiAgbWluLXdpZHRoOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4ubWRjLWJ1dHRvbi0tb3V0bGluZWQ6bm90KC5tZGMtYnV0dG9uLS1yYWlzZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1kYy1idXR0b24uYnRuVGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdhMGM2O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4LCAwcHgsIDBweCwgMHB4O1xufVxuXG4ubWRjLWNoaXAge1xuICBtYXJnaW46IDJweDtcbn1cblxuLm1kYy1jaGlwLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2UzZTU7XG59XG5cbi5tZGMtYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3YTBjNjtcbiAgY29sb3I6ICM1YzYzOGI7XG59XG5cbi5idG5TdGFyR3JvdXAgLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5idG5Sb3dUaXRsZSB7XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZXZlbi1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWY3O1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcblxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC41ZW07XG4gIG1pbi13aWR0aDogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLm1kYy1idXR0b24tLW91dGxpbmVkOm5vdCgubWRjLWJ1dHRvbi0tcmFpc2VkKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1kYy1idXR0b24uYnRuVGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWRjLXRoZW1lLXNlY29uZGFyeTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCwgMHB4LCAwcHgsIDBweDtcbn1cblxuLm1kYy1jaGlwIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5tZGMtY2hpcC0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMztcbn1cblxuLm1kYy1idXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWRjLXRoZW1lLXNlY29uZGFyeTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cblxuXG4uYnRuU3Rhckdyb3VwIC5tZGMtYnV0dG9uIHtcbiAgcGFkZGluZzogMCAwLjI1ZW07XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uYnRuUm93VGl0bGUge1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmV2ZW4tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhpZ2hsaWdodC1iYWNrZ3JvdW5kO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/hr-tags/hr-tags.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hr-tags/hr-tags.component.ts ***!
  \**********************************************/
/*! exports provided: HrTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrTagsComponent", function() { return HrTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HrTagsComponent = /** @class */ (function () {
    function HrTagsComponent(snackbar, fetch, activatedRoute) {
        var _this = this;
        this.snackbar = snackbar;
        this.fetch = fetch;
        this.activatedRoute = activatedRoute;
        this.reportSelectedTags = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportSelectedStars = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedTags = ('tags' in params) ? params.tags.split(' ') : [];
        });
        this.selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
    }
    HrTagsComponent.prototype.onStarBtnClick = function (id) {
        if (id === 0) {
            var newStat = !this.selectedStars[0];
            for (var i = 0; i < 7; i++) {
                this.selectedStars[i] = newStat;
            }
        }
        else {
            this.selectedStars[id] = !this.selectedStars[id];
            var allSelected = true;
            for (var i = 1; i < 7; i++) {
                if (!this.selectedStars[i]) {
                    allSelected = false;
                }
            }
            this.selectedStars[0] = allSelected;
        }
        var stars = [];
        for (var i = 1; i < 7; i++) {
            if (this.selectedStars[i]) {
                stars.push(i);
            }
        }
        this.fetch.setLocalStorage('hr-stars', this.selectedStars);
        this.reportSelectedStars.emit(stars);
    };
    HrTagsComponent.prototype.onTagClick = function (tag) {
        var index = this.selectedTags.indexOf(tag, 0);
        if (index > -1) {
            this.selectedTags.splice(index, 1);
        }
        else if (this.selectedTags.length > 5) {
            this.showSnackBar('无法选择更多标签：最多6个', '好的');
            return;
        }
        else {
            this.selectedTags.push(tag);
        }
        this.reportSelectedTags.emit(this.selectedTags);
    };
    HrTagsComponent.prototype.showSnackBar = function (msg, action) {
        this.snackbar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    };
    HrTagsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HrTagsComponent.prototype, "tagrows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HrTagsComponent.prototype, "reportSelectedTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HrTagsComponent.prototype, "reportSelectedStars", void 0);
    HrTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hr-tags',
            template: __webpack_require__(/*! raw-loader!./hr-tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr-tags/hr-tags.component.html"),
            styles: [__webpack_require__(/*! ./hr-tags.component.scss */ "./src/app/hr-tags/hr-tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blox_material__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarService"],
            _fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HrTagsComponent);
    return HrTagsComponent;
}());



/***/ }),

/***/ "./src/app/hr/hr.component.scss":
/*!**************************************!*\
  !*** ./src/app/hr/hr.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.float-box {\n  position: fixed;\n}\n\n.tagrows-container {\n  max-width: 550px;\n}\n\n.mdc-button {\n  padding: 0em 0.75em;\n  min-width: 0px;\n  min-height: 0px;\n  height: 32px;\n}\n\n.option-0 {\n  background-color: #f6ce8c;\n  color: #1a1d1e;\n}\n\n.option-1 {\n  background-color: #c3e3e5;\n  color: #1a1d1e;\n}\n\n.option-2 {\n  background-color: #589bad;\n  color: white;\n}\n\n#btnClear {\n  background-color: #d07057;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvaHIvaHIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hyL2hyLmNvbXBvbmVudC5zY3NzIiwiL3plaXQvMjVkZmQyODIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxjQWhCa0I7QUNFcEI7O0FDTkE7RUFDRSxlQUFBO0FEU0Y7O0FDUEE7RUFDRSxnQkFBQTtBRFVGOztBQ1JBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURXRjs7QUNSQTtFQUNFLHlCRmRRO0VFZVIsY0FBQTtBRFdGOztBQ1RBO0VBQ0UseUJGakJRO0VFa0JSLGNBQUE7QURZRjs7QUNWQTtFQUNFLHlCRnBCUTtFRXFCUixZQUFBO0FEYUY7O0FDWEE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QURjRiIsImZpbGUiOiJzcmMvYXBwL2hyL2hyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLmZsb2F0LWJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnRhZ3Jvd3MtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5vcHRpb24tMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmNlOGM7XG4gIGNvbG9yOiAjMWExZDFlO1xufVxuXG4ub3B0aW9uLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlM2U1O1xuICBjb2xvcjogIzFhMWQxZTtcbn1cblxuLm9wdGlvbi0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4OWJhZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYnRuQ2xlYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA3MDU3O1xuICBjb2xvcjogI2ZmZjtcbn0iLCJAaW1wb3J0IFwiLi4vc3R5bGVzL2N1c3RvbS5zY3NzXCI7XG5cbi5mbG9hdC1ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4udGFncm93cy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuLm1kYy1idXR0b24ge1xuICBwYWRkaW5nOiAwZW0gMC43NWVtO1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5vcHRpb24tMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0yO1xuICBjb2xvcjogIzFhMWQxZTtcbn1cbi5vcHRpb24tMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0zO1xuICBjb2xvcjogIzFhMWQxZTtcbn1cbi5vcHRpb24tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci00O1xuICBjb2xvcjogd2hpdGU7XG59XG4jYnRuQ2xlYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA3MDU3O1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hr/hr.component.ts":
/*!************************************!*\
  !*** ./src/app/hr/hr.component.ts ***!
  \************************************/
/*! exports provided: HrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrComponent", function() { return HrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_hrdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/hrdata */ "./src/app/model/hrdata.ts");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HrComponent = /** @class */ (function () {
    function HrComponent(fetch, snackbar, router, activatedRoute) {
        var _this = this;
        this.fetch = fetch;
        this.snackbar = snackbar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectedTags = [];
        this.selectedStars = [];
        this.charSelected = '';
        this.option = 0;
        this.showTags = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.selectedTags = ('tags' in params) ? params.tags.split(' ') : [];
            _this.showTags = !('hidetags' in params);
        });
        var selectedStars = this.fetch.getLocalStorage('hr-stars', [true, true, true, true, true, true, true]);
        for (var i = 1; i < 7; i++) {
            if (selectedStars[i]) {
                this.selectedStars.push(i);
            }
        }
    }
    HrComponent.prototype.onSelectTagChanged = function (selected) {
        this.selectedTags = selected;
        this.calculateCombs();
    };
    HrComponent.prototype.onSelectStarChanged = function (selected) {
        this.selectedStars = selected;
        this.calculateCombs();
    };
    HrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hrdata = new _model_hrdata__WEBPACK_IMPORTED_MODULE_2__["HrData"]();
        this.option = this.fetch.getLocalStorage('hrcb-opt', 0);
        this.hrdata.tagrows = [
            {
                title: '资质', tags: ['新手', '资深干员', '高级资深干员'],
            },
            {
                title: '位置', tags: ['远程位', '近战位'],
            },
            {
                title: '种类', tags: ['先锋干员', '狙击干员', '医疗干员', '术师干员', '近卫干员', '重装干员', '辅助干员', '特种干员'],
            },
            {
                title: '词缀', tags: ['治疗', '支援', '输出', '群攻', '减速', '生存', '防护', '削弱', '位移', '控场', '爆发', '召唤', '快速复活', '费用回复', '支援机械'],
            }
        ];
        this.hrdata.combs = [];
        this.fetch.getJson('./assets/data/akhr.json').subscribe(function (data) {
            _this.hrjson = data;
            _this.chars = {};
            _this.tags = {};
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var char = data_1[_i];
                if (char.hidden) {
                    continue;
                }
                char.tags.push(char.type + '干员');
                var name_1 = char.name;
                for (var _a = 0, _b = char.tags; _a < _b.length; _a++) {
                    var tag = _b[_a];
                    if (tag in _this.tags) {
                        _this.tags[tag].push({ name: name_1, img: char['name-en'], level: char.level, type: char.type });
                    }
                    else {
                        _this.tags[tag] = [{ name: name_1, img: char['name-en'], level: char.level, type: char.type }];
                    }
                }
                _this.chars[name_1] = { level: char.level, tags: char.tags };
                if (_this.selectedTags.length !== 0) {
                }
            }
            _this.calculateCombs();
        });
    };
    HrComponent.prototype.calculateCombs = function () {
        var len = this.selectedTags.length;
        var count = Math.pow(2, this.selectedTags.length);
        var combs = [];
        for (var i = 0; i < count; i++) {
            var ts = [];
            for (var j = 0, mask = 1; j < len; j++) {
                // tslint:disable-next-line: no-bitwise
                if ((i & mask) !== 0) {
                    ts.push(this.selectedTags[j]);
                }
                mask = mask * 2;
            }
            combs.push({ tags: ts, score: 0.0, possible: [], id: '' });
        }
        for (var _i = 0, combs_1 = combs; _i < combs_1.length; _i++) {
            var comb = combs_1[_i];
            var tags = comb.tags;
            if (tags.length === 0 || tags.length > 3) {
                continue;
            }
            var chars = this.tags[tags[0]].slice();
            for (var j = 1; j < tags.length; j++) {
                var reducedChars = [];
                for (var _a = 0, chars_1 = chars; _a < chars_1.length; _a++) {
                    var char = chars_1[_a];
                    for (var _b = 0, _c = this.tags[tags[j]]; _b < _c.length; _b++) {
                        var tgch = _c[_b];
                        if (char.name === tgch.name) {
                            reducedChars.push(char);
                            break;
                        }
                    }
                }
                chars = reducedChars;
            }
            if (chars.length === 0) {
                continue;
            }
            if (!tags.includes('高级资深干员')) {
                var reduce6 = [];
                for (var _d = 0, chars_2 = chars; _d < chars_2.length; _d++) {
                    var char = chars_2[_d];
                    if (char.level !== 6) {
                        reduce6.push(char);
                    }
                }
                chars = reduce6;
            }
            var filteredChars = [];
            for (var _e = 0, chars_3 = chars; _e < chars_3.length; _e++) {
                var char = chars_3[_e];
                if (this.selectedStars.includes(char.level)) {
                    filteredChars.push(char);
                }
            }
            chars = filteredChars;
            if (chars.length === 0) {
                continue;
            }
            comb.possible = chars.sort(function (a, b) { return a.level > b.level ? -1 : (a.level < b.level ? 1 : 0); });
            var s = 0;
            for (var _f = 0, chars_4 = chars; _f < chars_4.length; _f++) {
                var char = chars_4[_f];
                s += char.level;
            }
            s = s / chars.length;
            comb.score = s + 0.1 / tags.length + 0.9 / chars.length;
            comb.id = tags.join('') + chars.join('');
        }
        combs.sort(function (a, b) {
            return a.score > b.score ? -1 : (a.score < b.score ? 1 :
                (a.tags.length > b.tags.length ? 1 : (a.tags.length < b.tags.length ? -1 : 0)));
        });
        this.hrdata.combs = combs.filter(function (c) { return c.possible.length > 0; });
    };
    HrComponent.prototype.showCharTags = function (name) {
        if (this.hrdata.combsBk.length === 0) {
            this.snackbar.show({
                message: (name + ': ' + this.chars[name].tags.join(', ')),
                actionText: '关闭',
                multiline: true,
                actionOnBottom: true,
                timeout: 10000
            });
            this.hrdata.combsBk = this.hrdata.combs.slice();
            var newCb = [];
            for (var _i = 0, _a = this.hrdata.combs; _i < _a.length; _i++) {
                var c = _a[_i];
                for (var _b = 0, _c = c.possible; _b < _c.length; _b++) {
                    var ch = _c[_b];
                    if (ch.name === name) {
                        this.charSelected = name;
                        newCb.push(c);
                        continue;
                    }
                }
            }
            this.hrdata.combs = newCb;
        }
        else {
            this.hrdata.combs = this.hrdata.combsBk.slice();
            this.hrdata.combsBk = [];
            this.charSelected = '';
        }
    };
    HrComponent.prototype.clearTags = function () {
        var _this = this;
        var currentUrl = this.router.url;
        var param = currentUrl.includes('hidenav') ? '?hidenav=' : '';
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            if (currentUrl.indexOf('?') > 0) {
                _this.router.navigateByUrl(currentUrl.substring(0, currentUrl.indexOf('?')) + param);
            }
            else {
                _this.router.navigateByUrl(currentUrl);
            }
        });
    };
    HrComponent.prototype.toggleOption = function () {
        this.option = (this.option + 1) % 3;
        this.fetch.setLocalStorage('hrcb-opt', this.option);
    };
    HrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hr',
            template: __webpack_require__(/*! raw-loader!./hr.component.html */ "./node_modules/raw-loader/index.js!./src/app/hr/hr.component.html"),
            styles: [__webpack_require__(/*! ./hr.component.scss */ "./src/app/hr/hr.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_3__["FetchService"],
            _blox_material__WEBPACK_IMPORTED_MODULE_4__["MdcSnackbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HrComponent);
    return HrComponent;
}());



/***/ }),

/***/ "./src/app/lvlup/lvlup.component.scss":
/*!********************************************!*\
  !*** ./src/app/lvlup/lvlup.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em;\n}\n\ninput, select {\n  text-align: center;\n}\n\n[mdcCard] {\n  min-width: 280px;\n  max-width: 100%;\n  width: 350px;\n}\n\n[mdcCard] .custom-card-group-heading {\n  color: #5c638b;\n  font-size: 0.875em;\n  padding: 8px 16px;\n  text-align: center;\n}\n\n[mdcCard] th {\n  text-align: end;\n  width: 100px;\n}\n\n[mdcCard] td {\n  text-align: start;\n}\n\n[mdcCard] th, [mdcCard] td {\n  padding: 0.375em 1em;\n}\n\n.btnCalc {\n  margin: 1em 0 0 0;\n  width: 50%;\n}\n\n[mdcCard] {\n  margin: 1em 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvbHZsdXAvbHZsdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2x2bHVwL2x2bHVwLmNvbXBvbmVudC5zY3NzIiwiL3plaXQvMjVkZmQyODIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxjQWhCa0I7QUNFcEI7O0FDTkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURTSjs7QUNQQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FEVUo7O0FDUkE7RUFDSSxrQkFBQTtBRFdKOztBQ1JBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRFdKOztBQ1RJO0VBQ0ksY0ZmWTtFRWdCWixrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURXUjs7QUNSSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FEVVI7O0FDUkk7RUFDSSxpQkFBQTtBRFVSOztBQ1JJO0VBQ0ksb0JBQUE7QURVUjs7QUNOQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBRFNKOztBQ1BBO0VBQ0ksaUJBQUE7QURVSiIsImZpbGUiOiJzcmMvYXBwL2x2bHVwL2x2bHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuW21kY0NhcmRdIHtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMzUwcHg7XG59XG5bbWRjQ2FyZF0gLmN1c3RvbS1jYXJkLWdyb3VwLWhlYWRpbmcge1xuICBjb2xvcjogIzVjNjM4YjtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuW21kY0NhcmRdIHRoIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB3aWR0aDogMTAwcHg7XG59XG5bbWRjQ2FyZF0gdGQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblttZGNDYXJkXSB0aCwgW21kY0NhcmRdIHRkIHtcbiAgcGFkZGluZzogMC4zNzVlbSAxZW07XG59XG5cbi5idG5DYWxjIHtcbiAgbWFyZ2luOiAxZW0gMCAwIDA7XG4gIHdpZHRoOiA1MCU7XG59XG5cblttZGNDYXJkXSB7XG4gIG1hcmdpbjogMWVtIDAgMCAwO1xufSIsIkBpbXBvcnQgJy4uL3N0eWxlcy9jdXN0b20uc2Nzcyc7XG5cbi5tZGMtYnV0dG9uLS1kZW5zZSB7XG4gICAgbWluLXdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmlucHV0LWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMC4yNWVtO1xufVxuaW5wdXQsIHNlbGVjdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5bbWRjQ2FyZF0ge1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAzNTBweDtcblxuICAgIC5jdXN0b20tY2FyZC1ncm91cC1oZWFkaW5nIHtcbiAgICAgICAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICAgIHRoLCB0ZHtcbiAgICAgICAgcGFkZGluZzogMC4zNzVlbSAxZW07XG4gICAgfVxufVxuXG4uYnRuQ2FsYyB7XG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XG4gICAgd2lkdGg6IDUwJTtcbn1cblttZGNDYXJkXSB7XG4gICAgbWFyZ2luOiAxZW0gMCAwIDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/lvlup/lvlup.component.ts":
/*!******************************************!*\
  !*** ./src/app/lvlup/lvlup.component.ts ***!
  \******************************************/
/*! exports provided: LvlupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LvlupComponent", function() { return LvlupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");



var LvlupComponent = /** @class */ (function () {
    function LvlupComponent(fetchService) {
        this.fetchService = fetchService;
        // import math for binding
        this.math = Math;
        // Char
        this.star = 6;
        this.currentEvolve = 0;
        this.targetEvolve = 0;
        this.currentLvl = 1;
        this.targetLvl = 1;
        this.currentExp = 0;
        // Assets
        this.gold = 0;
        this.bookBasic = 0;
        this.bookPrimary = 0;
        this.bookMiddle = 0;
        this.bookAdvanced = 0;
        // Results
        this.lsCount = 0;
        this.ceCount = 0;
        this.lsAp = 0;
        this.ceAp = 0;
        this.expMinus = 0;
        this.goldMinus = 0;
        this.lvlupExp = 0;
        this.lvlupGold = 0;
        this.evolveGold = 0;
        // Maps:
        this.lsMap = '5';
        this.ceMap = '5';
        this.isExsm = false;
        this.isExsm = fetchService.getLocalStorage('s-exsm', false);
    }
    LvlupComponent.prototype.toMaxLvl = function (isCurrent) {
        if (isCurrent) {
            this.currentLvl = this.lvlJson.maxLevel[+this.star - 1][this.currentEvolve];
        }
        else {
            this.targetLvl = this.lvlJson.maxLevel[+this.star - 1][this.targetEvolve];
        }
    };
    LvlupComponent.prototype.onStarChange = function () {
        console.log(this.lvlJson.maxLevel);
        var star = Number(this.star);
        var maxEvolve = this.lvlJson.maxLevel[star - 1].length;
        if (this.currentEvolve >= maxEvolve) {
            this.currentEvolve = maxEvolve - 1;
        }
        if (this.targetEvolve >= maxEvolve) {
            this.targetEvolve = maxEvolve - 1;
        }
        if (this.currentLvl > this.lvlJson.maxLevel[star - 1][this.currentEvolve]) {
            this.currentLvl = this.lvlJson.maxLevel[star - 1][this.currentEvolve];
        }
        if (this.targetLvl > this.lvlJson.maxLevel[star - 1][this.targetEvolve]) {
            this.targetLvl = this.lvlJson.maxLevel[star - 1][this.targetEvolve];
        }
    };
    LvlupComponent.prototype.onEvolveChange = function (isTarget, isAdd) {
        var star = Number(this.star);
        if (isTarget) {
            if (isAdd) {
                this.targetEvolve += this.targetEvolve < this.lvlJson.maxLevel[star - 1].length - 1 ? 1 : 0;
            }
            else {
                this.targetEvolve -= this.targetEvolve > 0 ? 1 : 0;
            }
        }
        else {
            if (isAdd) {
                this.currentEvolve += this.currentEvolve < this.lvlJson.maxLevel[star - 1].length - 1 ? 1 : 0;
                if (this.targetEvolve < this.currentEvolve) {
                    this.targetEvolve = this.currentEvolve;
                }
            }
            else {
                this.currentEvolve -= this.currentEvolve > 0 ? 1 : 0;
            }
        }
    };
    LvlupComponent.prototype.calc = function () {
        // console.log(this);
        var cl = this.currentLvl;
        var ce = this.currentEvolve;
        var star = +this.star;
        var cex = this.currentExp;
        var tl = this.targetLvl;
        var te = this.targetEvolve;
        var higher = te > ce || (te === ce && tl > cl);
        var isHighest = this.maxLevel[star - 1][ce] === cl;
        var expSum = higher ? (isHighest ? 0 : this.charExpMap[ce][cl - 1] - cex) : 0;
        var costSum = higher ? (isHighest ? 0 : this.charUpCostMap[ce][cl - 1] * expSum / this.charExpMap[ce][cl - 1]) : 0;
        cl++;
        // console.log(expSum)
        // console.log(costSum)
        // lvlup
        for (var i = ce, j = cl; i <= te; i++) {
            while (i < te && j < this.maxLevel[star - 1][i]) {
                expSum += this.charExpMap[i][j - 1];
                costSum += this.charUpCostMap[i][j - 1];
                j++;
            }
            while (i === te && j < tl) {
                expSum += this.charExpMap[i][j - 1];
                costSum += this.charUpCostMap[i][j - 1];
                j++;
            }
            j = 1;
        }
        this.lvlupExp = expSum;
        this.lvlupGold = costSum;
        // evolve
        var ea = 0;
        console.log(this.evolGoldCost);
        console.log(star);
        for (var i = ce; i < te; i++) {
            ea += this.evolGoldCost[star - 1][i];
        }
        this.evolveGold = ea;
        // books
        var bb = this.bookBasic;
        var bp = this.bookPrimary;
        var bm = this.bookMiddle;
        var ba = this.bookAdvanced;
        var bs = bb * 200 + bp * 400 + bm * 1000 + ba * 2000;
        this.expMinus = bs;
        if (expSum <= bs) {
            this.lsCount = 0;
            this.lsAp = 0;
        }
        else {
            this.lsCount = Math.ceil((expSum - bs) / 7400);
            this.lsAp = this.lsCount * 30;
        }
        var gs = this.gold + this.lsCount * 360;
        this.goldMinus = gs;
        if (costSum + ea <= gs) {
            this.ceCount = 0;
            this.ceAp = 0;
        }
        else {
            this.ceCount = Math.ceil((costSum + ea - gs) / 7500);
            this.ceAp = this.ceCount * 30;
        }
        // console.log(this);
    };
    LvlupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchService.getJson('./assets/data/aklevel.json').subscribe(function (data) {
            _this.lvlJson = data;
            _this.maxLevel = data.maxLevel;
            _this.charExpMap = data.characterExpMap;
            _this.charUpCostMap = data.characterUpgradeCostMap;
            _this.evolGoldCost = data.evolveGoldCost;
        });
    };
    LvlupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lvlup',
            template: __webpack_require__(/*! raw-loader!./lvlup.component.html */ "./node_modules/raw-loader/index.js!./src/app/lvlup/lvlup.component.html"),
            styles: [__webpack_require__(/*! ./lvlup.component.scss */ "./src/app/lvlup/lvlup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"]])
    ], LvlupComponent);
    return LvlupComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.main-container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 1em;\n}\n\n.img-logos {\n  max-width: 100px;\n  max-height: 100px;\n  width: auto;\n  height: auto;\n}\n\na:not([class]) {\n  text-decoration: none;\n  color: #5c638b;\n}\n\np {\n  color: #5c638b;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: 600;\n}\n\n.contributor {\n  padding: 0.5em;\n}\n\n.contributor img {\n  border-radius: 50%;\n  max-height: 64px;\n  max-width: 64px;\n  height: auto;\n  width: auto;\n}\n\n.joinus img {\n  max-height: 64px;\n  max-width: 64px;\n  height: auto;\n  width: auto;\n}\n\n.notice {\n  font-weight: bold;\n}\n\n.img-title {\n  width: 128px;\n  height: 128px;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNOQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURTRjs7QUNOQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRFNGOztBQ1BBO0VBQ0UscUJBQUE7RUFDQSxjRlZrQjtBQ29CcEI7O0FDUEE7RUFDRSxjRmRrQjtBQ3dCcEI7O0FDUEE7Ozs7O0VBS0UsZ0JBQUE7QURVRjs7QUNQQTtFQUNFLGNBQUE7QURVRjs7QUNQQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURVRjs7QUNSQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEV0Y7O0FDVEE7RUFDRSxpQkFBQTtBRFlGOztBQ1ZBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBRGFGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uaW1nLWxvZ29zIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxucCB7XG4gIGNvbG9yOiAjNWM2MzhiO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRyaWJ1dG9yIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5jb250cmlidXRvciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG4gIG1heC13aWR0aDogNjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmpvaW51cyBpbWcge1xuICBtYXgtaGVpZ2h0OiA2NHB4O1xuICBtYXgtd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5ub3RpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy10aXRsZSB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59IiwiQGltcG9ydCBcIi4uL3N0eWxlcy9jdXN0b20uc2Nzc1wiO1xuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5pbWctbG9nb3Mge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJG1kYy10aGVtZS1wcmltYXJ5O1xufVxuXG5wIHtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb250cmlidXRvciB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY29udHJpYnV0b3IgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtaGVpZ2h0OiA2NHB4O1xuICBtYXgtd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG59XG4uam9pbnVzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG4gIG1heC13aWR0aDogNjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbi5ub3RpY2V7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmltZy10aXRsZXtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.cn = window.location.hostname.includes('cn');
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/material-card/material-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/material-card/material-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.img-icon-box {\n  height: 48px;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  margin: 0.25em;\n}\n\n.img-icon {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  height: auto;\n  float: left;\n}\n\n.input-field {\n  width: 100%;\n  margin: 0.25em 0;\n}\n\ninput,\nselect {\n  text-align: center;\n}\n\n.mdc-button--dense {\n  min-width: 20px;\n  width: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  margin: 0;\n}\n\n[mdcCard] {\n  width: 100%;\n  height: 130px;\n  min-width: 140px;\n  max-height: 170px;\n  padding: 0.25em;\n  margin: 0.25em 0.125em;\n  border: 0.125em solid rgba(0, 0, 0, 0.125);\n  border-radius: 2em 0.5em 2em 0.5em;\n}\n\n[mdcCard] .card-title {\n  color: #5c638b;\n  text-align: start;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n\n[mdcCard] .material-source {\n  color: #87a0c6;\n  font-size: 0.75em;\n  text-align: end;\n}\n\n[mdcCard] .material-detail {\n  color: #5c638b;\n  padding: 0;\n}\n\n.mdc-card.m-lvl-5 {\n  border-color: #d0694e;\n}\n\n.mdc-card.m-lvl-4 {\n  border-color: #f9ce8c;\n}\n\n.mdc-card.m-lvl-3 {\n  border-color: #589bad;\n}\n\n.mdc-card.m-lvl-2 {\n  border-color: #7ebc59;\n}\n\n.mdc-card.m-lvl-1 {\n  border-color: #c3e3e5;\n}\n\n.mdc-card.op-card {\n  opacity: 0.4;\n}\n\n.need-button {\n  font-size: 1.25em;\n  margin: 0;\n  text-align: end;\n  align-items: flex-end;\n  color: #d0694e;\n  font-weight: bold;\n  min-width: 0px;\n}\n\n.need-button::before {\n  position: inherit;\n}\n\n.btnMerge {\n  width: 32px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvbWF0ZXJpYWwtY2FyZC9tYXRlcmlhbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC1jYXJkL21hdGVyaWFsLWNhcmQuY29tcG9uZW50LnNjc3MiLCIvemVpdC8yNWRmZDI4Mi9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QURpQkE7RUFDRSxxQkFBQTtFQUNBLGNBaEJrQjtBQ0VwQjs7QUNKQTtFQUNFLFlBSFM7RUFJVCxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FET0Y7O0FDTEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURRRjs7QUNMQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRFFGOztBQ0xBOztFQUVFLGtCQUFBO0FEUUY7O0FDTkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEU0Y7O0FDUEE7RUFDRSxTQUFBO0FEVUY7O0FDUEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FEVUY7O0FDUkU7RUFDRSxjRjVDZ0I7RUU2Q2hCLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFVKOztBQ1BFO0VBQ0UsY0ZsRGtCO0VFbURsQixpQkFBQTtFQUNBLGVBQUE7QURTSjs7QUNQRTtFQUNFLGNGeERnQjtFRXlEaEIsVUFBQTtBRFNKOztBQ0xBO0VBQ0UscUJBQUE7QURRRjs7QUNOQTtFQUNFLHFCQUFBO0FEU0Y7O0FDUEE7RUFDRSxxQkFBQTtBRFVGOztBQ1JBO0VBQ0UscUJBQUE7QURXRjs7QUNUQTtFQUNFLHFCQUFBO0FEWUY7O0FDVkE7RUFDRSxZQUFBO0FEYUY7O0FDVkE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjRjFGUTtFRTJGUixpQkFBQTtFQUNBLGNBQUE7QURhRjs7QUNYQTtFQUNFLGlCQUFBO0FEY0Y7O0FDWEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGNGIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY2FyZC9tYXRlcmlhbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLmltZy1pY29uLWJveCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwLjI1ZW07XG59XG5cbi5pbWctaWNvbiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbnB1dC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG5pbnB1dCxcbnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkOm5vdCgubWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCk6bm90KC5tZGMtdGV4dC1maWVsZC0tYm94KSB7XG4gIG1hcmdpbjogMDtcbn1cblxuW21kY0NhcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xuICBwYWRkaW5nOiAwLjI1ZW07XG4gIG1hcmdpbjogMC4yNWVtIDAuMTI1ZW07XG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMmVtIDAuNWVtIDJlbSAwLjVlbTtcbn1cblttZGNDYXJkXSAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNWM2MzhiO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuW21kY0NhcmRdIC5tYXRlcmlhbC1zb3VyY2Uge1xuICBjb2xvcjogIzg3YTBjNjtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblttZGNDYXJkXSAubWF0ZXJpYWwtZGV0YWlsIHtcbiAgY29sb3I6ICM1YzYzOGI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tZGMtY2FyZC5tLWx2bC01IHtcbiAgYm9yZGVyLWNvbG9yOiAjZDA2OTRlO1xufVxuXG4ubWRjLWNhcmQubS1sdmwtNCB7XG4gIGJvcmRlci1jb2xvcjogI2Y5Y2U4Yztcbn1cblxuLm1kYy1jYXJkLm0tbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG5cbi5tZGMtY2FyZC5tLWx2bC0yIHtcbiAgYm9yZGVyLWNvbG9yOiAjN2ViYzU5O1xufVxuXG4ubWRjLWNhcmQubS1sdmwtMSB7XG4gIGJvcmRlci1jb2xvcjogI2MzZTNlNTtcbn1cblxuLm1kYy1jYXJkLm9wLWNhcmQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5uZWVkLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb2xvcjogI2QwNjk0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4ubmVlZC1idXR0b246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xufVxuXG4uYnRuTWVyZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcblxuJGltZy1zaXplOiA0OHB4O1xuXG4uaW1nLWljb24tYm94IHtcbiAgaGVpZ2h0OiAkaW1nLXNpemU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMC4yNWVtO1xufVxuLmltZy1pY29uIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC4yNWVtIDA7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1kYy1idXR0b24tLWRlbnNlIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm1kYy10ZXh0LWZpZWxkLS11cGdyYWRlZDpub3QoLm1kYy10ZXh0LWZpZWxkLS1mdWxsd2lkdGgpOm5vdCgubWRjLXRleHQtZmllbGQtLWJveCkge1xuICBtYXJnaW46IDA7XG59XG5cblttZGNDYXJkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtaW4td2lkdGg6IDE0MHB4O1xuICBtYXgtaGVpZ2h0OiAxNzBweDtcbiAgcGFkZGluZzogMC4yNWVtO1xuICBtYXJnaW46IDAuMjVlbSAwLjEyNWVtO1xuICBib3JkZXI6IDAuMTI1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDJlbSAwLjVlbSAyZW0gMC41ZW07XG5cbiAgLmNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAubWF0ZXJpYWwtc291cmNlIHtcbiAgICBjb2xvcjogJG1kYy10aGVtZS1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5tYXRlcmlhbC1kZXRhaWwge1xuICAgIGNvbG9yOiAkbWRjLXRoZW1lLXByaW1hcnk7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ubWRjLWNhcmQubS1sdmwtNSB7XG4gIGJvcmRlci1jb2xvcjogI2QwNjk0ZTtcbn1cbi5tZGMtY2FyZC5tLWx2bC00IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjljZThjO1xufVxuLm1kYy1jYXJkLm0tbHZsLTMge1xuICBib3JkZXItY29sb3I6ICM1ODliYWQ7XG59XG4ubWRjLWNhcmQubS1sdmwtMiB7XG4gIGJvcmRlci1jb2xvcjogIzdlYmM1OTtcbn1cbi5tZGMtY2FyZC5tLWx2bC0xIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzNlM2U1O1xufVxuLm1kYy1jYXJkLm9wLWNhcmQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5uZWVkLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb2xvcjogJGNvbG9yLTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDBweDtcbn1cbi5uZWVkLWJ1dHRvbjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGluaGVyaXQ7XG59XG5cbi5idG5NZXJnZXtcbiAgd2lkdGg6MzJweDtcbiAgaGVpZ2h0OjMycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/material-card/material-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/material-card/material-card.component.ts ***!
  \**********************************************************/
/*! exports provided: MaterialCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCardComponent", function() { return MaterialCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_materialitemdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/materialitemdata */ "./src/app/model/materialitemdata.ts");
/* harmony import */ var _model_materialinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/materialinfo */ "./src/app/model/materialinfo.ts");




var MaterialCardComponent = /** @class */ (function () {
    function MaterialCardComponent() {
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reportMerge = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MaterialCardComponent.prototype.onInputChange = function () {
        this.dataChange.emit(this.itemdata);
    };
    MaterialCardComponent.prototype.doMerge = function () {
        this.reportMerge.emit(this.item.name);
    };
    MaterialCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_materialinfo__WEBPACK_IMPORTED_MODULE_3__["MaterialInfo"])
    ], MaterialCardComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_materialitemdata__WEBPACK_IMPORTED_MODULE_2__["MaterialItemData"])
    ], MaterialCardComponent.prototype, "itemdata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialCardComponent.prototype, "dataChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialCardComponent.prototype, "reportMerge", void 0);
    MaterialCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-material-card',
            template: __webpack_require__(/*! raw-loader!./material-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-card/material-card.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./material-card.component.scss */ "./src/app/material-card/material-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaterialCardComponent);
    return MaterialCardComponent;
}());



/***/ }),

/***/ "./src/app/material/material.component.scss":
/*!**************************************************!*\
  !*** ./src/app/material/material.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0.25em;\n  white-space: nowrap;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.options-box {\n  padding: 0.5em 1em;\n}\n\n.padding-025 {\n  padding: 0.25em;\n}\n\nh2,\nh4 {\n  margin: 0.25em 0;\n}\n\nsection {\n  max-height: 60vh;\n  height: 60vh;\n}\n\na {\n  text-decoration: none;\n  color: #5c638b;\n}\n\n.mdc-list-item {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.25em 0;\n}\n\n#btnReset {\n  background-color: #d0694e;\n}\n\n.sepatator {\n  height: 0.5em;\n  width: 10em;\n}\n\ntextarea {\n  resize: none;\n}\n\n.mdc-text-field__input {\n  padding: 0.25em 0.75em;\n}\n\n.dialog-data {\n  max-width: 600px;\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvbWF0ZXJpYWwvbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsL21hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwiL3plaXQvMjVkZmQyODIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDZkY7O0FEaUJBO0VBQ0UscUJBQUE7RUFDQSxjQWhCa0I7QUNFcEI7O0FDTkE7RUFDRSxrQkFBQTtBRFNGOztBQ1BBO0VBQ0UsZUFBQTtBRFVGOztBQ1JBOztFQUVFLGdCQUFBO0FEV0Y7O0FDVEE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QURZRjs7QUNWQTtFQUNFLHFCQUFBO0VBQ0EsY0Zaa0I7QUN5QnBCOztBQ1hBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QURjRjs7QUNaQTtFQUNFLHlCRnhCUTtBQ3VDVjs7QUNiQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FEZ0JGOztBQ2RBO0VBQ0UsWUFBQTtBRGlCRjs7QUNkQTtFQUNFLHNCQUFBO0FEaUJGOztBQ2RBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBRGlCRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsL21hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2xvcmh1bnQuY28vcGFsZXR0ZS8zNjFcbiRjb2xvci0xOiAjZDA2OTRlO1xuJGNvbG9yLTI6ICNmNmNlOGM7XG4kY29sb3ItMzogI2MzZTNlNTtcbiRjb2xvci00OiAjNTg5YmFkO1xuXG4kbWRjLXRoZW1lLXByaW1hcnk6ICM1YzYzOGI7XG4kbWRjLXRoZW1lLXNlY29uZGFyeTogIzg3YTBjNjtcbiRtZGMtdGhlbWUtYmFja2dyb3VuZDogI2ZmZjtcbiRtZGMtdGhlbWUtc3VyZmFjZTogI2ZmZjtcbiRtZGMtdHlwb2dyYXBoeS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgXCJOb3RvIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFwiTmltYnVzIFNhbnMgTFwiLCBBcmlhbCxcbiAgXCJMaWJlcmF0aW9uIFNhbnNcIiwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgXCJOb3RvIFNhbnMgQ0pLIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIFNDXCIsIFwiU291cmNlIEhhbiBTYW5zIENOXCIsXG4gIFNpbUhlaSwgXCJNaWNyb3NvZnQgWWFIZWlcIiwgXCJXZW5xdWFueWkgTWljcm8gSGVpXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCJTVCBIZWl0aVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpIFNoYXJwXCIsXG4gIHNhbnMtc2VyaWY7XG5cbiRoaWdobGlnaHQtYmFja2dyb3VuZDogI2U4ZWFmNztcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbiIsImJ1dHRvbiB7XG4gIG1hcmdpbjogMC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLm9wdGlvbnMtYm94IHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufVxuXG4ucGFkZGluZy0wMjUge1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG5cbmgyLFxuaDQge1xuICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG5zZWN0aW9uIHtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVjNjM4Yjtcbn1cblxuLm1kYy1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjI1ZW0gMDtcbn1cblxuI2J0blJlc2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNjk0ZTtcbn1cblxuLnNlcGF0YXRvciB7XG4gIGhlaWdodDogMC41ZW07XG4gIHdpZHRoOiAxMGVtO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm1kYy10ZXh0LWZpZWxkX19pbnB1dCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW07XG59XG5cbi5kaWFsb2ctZGF0YSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufSIsIkBpbXBvcnQgXCIuLi9zdHlsZXMvY3VzdG9tLnNjc3NcIjtcblxuLm9wdGlvbnMtYm94IHtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufVxuLnBhZGRpbmctMDI1IHtcbiAgcGFkZGluZzogMC4yNWVtO1xufVxuaDIsXG5oNCB7XG4gIG1hcmdpbjogMC4yNWVtIDA7XG59XG5zZWN0aW9uIHtcbiAgbWF4LWhlaWdodDogNjB2aDtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRtZGMtdGhlbWUtcHJpbWFyeTtcbn1cbi5tZGMtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG59XG4jYnRuUmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItMTtcbn1cbi5zZXBhdGF0b3Ige1xuICBoZWlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMTBlbTtcbn1cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubWRjLXRleHQtZmllbGRfX2lucHV0IHtcbiAgcGFkZGluZzogMC4yNWVtIDAuNzVlbTtcbn1cblxuLmRpYWxvZy1kYXRhIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/material/material.component.ts":
/*!************************************************!*\
  !*** ./src/app/material/material.component.ts ***!
  \************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/materialitemdata */ "./src/app/model/materialitemdata.ts");





var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(fetchService, snackbar) {
        this.fetchService = fetchService;
        this.snackbar = snackbar;
        this.planResult = {
            cost: 0,
            stages: [],
            syntheses: []
        };
        this.cost = 0;
        this.stagesText = [];
        this.synsText = [];
        this.exportedData = '';
        this.importedData = '';
        this.options = this.fetchService.getLocalStorage('m-option', {
            showOnly3plus: true,
            filtered: false,
            showMat: true,
            showBook: true,
            showChip: true
        });
    }
    MaterialComponent.prototype.calc = function () {
        var counts = {};
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            var need = this.data[i.name].need;
            var have = this.data[i.name].have;
            var diff = need - have;
            counts[i.name] = {
                need: need,
                have_s: have,
                have: have,
                upper: 0,
                lack: diff > 0 ? diff : 0
            };
        }
        // 稀有度由高到低，生成所有合成路线
        for (var i = 4; i >= 0; i--) {
            for (var j = this.mByLvl[i].length - 1; j >= 0; j--) {
                var m = this.mIdx[this.mByLvl[i][j]];
                var mm = m.madeof;
                for (var k in mm) {
                    if (mm[k]) {
                        counts[k].upper += mm[k] * counts[m.name].lack;
                        var diff = counts[k].need + counts[k].upper - counts[k].have;
                        counts[k].lack = diff > 0 ? diff : 0;
                    }
                }
            }
        }
        // 稀有度由低到高，检查现有材料是否能向上合成
        for (var i = 1; i < 5; i++) {
            for (var j = this.mByLvl[i].length - 1; j >= 0; j--) {
                var m = this.mIdx[this.mByLvl[i][j]];
                if (counts[m.name].lack === 0) {
                    counts[m.name].canMerge = false;
                    continue;
                }
                var maxCompose = Object.keys(m.madeof).length === 0 ? 0 : Number.MAX_SAFE_INTEGER;
                for (var k in m.madeof) {
                    if (counts[k]) {
                        var cm = counts[k];
                        if (cm.have / m.madeof[k] < maxCompose) {
                            maxCompose = cm.have / m.madeof[k];
                        }
                    }
                }
                maxCompose = Math.floor(maxCompose > counts[m.name].lack ? counts[m.name].lack : maxCompose);
                counts[m.name].canMerge = maxCompose > 0;
            }
        }
        var newData = {};
        for (var _b = 0, _c = this.items; _b < _c.length; _b++) {
            var i = _c[_b];
            var name_1 = i.name;
            var newItemData = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](name_1);
            newItemData.lack = counts[name_1].lack;
            newItemData.have = counts[name_1].have;
            newItemData.need = counts[name_1].need;
            newItemData.canMerge = counts[name_1].canMerge;
            newData[name_1] = newItemData;
        }
        this.data = newData;
        this.fetchService.setLocalStorage('m-data', this.data);
        this.genExportedData();
    };
    MaterialComponent.prototype.onMatMerge = function (name) {
        var m = this.mIdx[name];
        for (var k in m.madeof) {
            if (m.madeof[k]) {
                this.data[k].have -= m.madeof[k];
            }
        }
        this.data[name].have += 1;
        this.calc();
    };
    MaterialComponent.prototype.onDataChange = function (itemData) {
        this.data[itemData.name].have = itemData.have;
        this.data[itemData.name].need = itemData.need;
        this.calc();
    };
    MaterialComponent.prototype.onOptionChange = function () {
        this.fetchService.setLocalStorage('m-option', this.options);
    };
    MaterialComponent.prototype.reset = function () {
        var data = {};
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            data[item.name] = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](item.name);
        }
        this.data = data;
        this.options = {
            showOnly3plus: true,
            filtered: false,
            showMat: true,
            showBook: true,
            showChip: true
        };
        this.calc();
        this.exportedData = '';
    };
    MaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchService.getJson('./assets/data/material.json').subscribe(function (data) {
            var items = [];
            _this.mByLvl = [];
            _this.mIdx = {};
            for (var i = 0; i < 5; i++) {
                _this.mByLvl.push([]);
            }
            var ldata = _this.fetchService.getLocalStorage('m-data', {});
            for (var k in data) {
                if (data[k]) {
                    var item = data[k];
                    items.push(item);
                    if (!(item.name in ldata)) {
                        ldata[item.name] = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](item.name);
                    }
                    _this.mByLvl[data[k].rarity - 1].push(data[k].name);
                    _this.mIdx[data[k].name] = data[k];
                }
            }
            _this.data = ldata;
            _this.items = items.sort(function (a, b) {
                return a.sort > b.sort ? 1 : (a.sort < b.sort ? -1 : 0);
            });
            _this.calc();
        });
    };
    MaterialComponent.prototype.getOrDefault = function (o, k, v) {
        if (v === void 0) { v = 0; }
        return k in o ? o[k] : v;
    };
    MaterialComponent.prototype.trackItem = function (_, item) {
        return item === null ? null : item.id;
    };
    MaterialComponent.prototype.plan = function () {
        var _this = this;
        var owned = {};
        var required = {};
        for (var m in this.data) {
            if (this.data[m]) {
                var mt = this.data[m];
                var mi = this.mIdx[m];
                if (mi.id.startsWith('30')) {
                    if (mt.have !== 0) {
                        owned[m] = mt.have;
                    }
                    if (mt.need !== 0) {
                        required[m] = mt.need;
                    }
                }
            }
        }
        this.planResult = this.fetchService.postJson('https://ak.inva.land/plan/', { owned: owned, required: required, exp_demand: false, extra_outc: false, gold_demand: false })
            .subscribe(function (plan) {
            _this.cost = plan && plan.cost ? plan.cost : 0;
            var stage = plan && plan.stages && plan.stages.length !== 0 ? plan.stages.slice() : [];
            var syns = plan && plan.syntheses && plan.syntheses.length !== 0 ? plan.syntheses.slice() : [];
            _this.stagesText = [];
            _this.synsText = [];
            for (var _i = 0, stage_1 = stage; _i < stage_1.length; _i++) {
                var st = stage_1[_i];
                var text = '[' + st.stage + '] x' + st.count + ' - ';
                var itemsText = [];
                for (var it in st.items) {
                    if (st.items[it]) {
                        itemsText.push(it + ' x' + st.items[it]);
                    }
                }
                _this.stagesText.push(text + itemsText.join(', '));
            }
            for (var _a = 0, syns_1 = syns; _a < syns_1.length; _a++) {
                var syn = syns_1[_a];
                var text = '[' + syn.target + '] x' + syn.count + ' - ';
                var itemsText = [];
                for (var it in syn.materials) {
                    if (syn.materials[it]) {
                        itemsText.push(it + ' x' + syn.materials[it]);
                    }
                }
                _this.synsText.push(text + itemsText.join(', '));
            }
        });
    };
    MaterialComponent.prototype.copyResult = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText('材料规划路线（试用版）\r\n预计体力消耗: ' + this.cost
                                + '\r\n刷图获得：\r\n' + this.stagesText.join('\r\n')
                                + '\r\n合成获得：\r\n' + this.synsText.join('\r\n')
                                + '\r\n来源：明日方舟工具箱: https://aktools.graueneko.xyz & ArkPlanner: https://github.com/ycremar/ArkPlanner , 结果仅供参考')];
                    case 2:
                        _a.sent();
                        this.snackbar.show({
                            message: '已复制到剪切板。',
                            actionText: '好的',
                            multiline: false,
                            actionOnBottom: false
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.snackbar.show({
                            message: '复制失败。',
                            actionText: '好吧',
                            multiline: false,
                            actionOnBottom: false
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MaterialComponent.prototype.genExportedData = function () {
        var storage = {};
        for (var name_2 in this.data) {
            if (this.data[name_2]) {
                var d = this.data[name_2];
                storage[name_2] = [
                    d.have, d.need
                ];
            }
        }
        this.exportedData = JSON.stringify(storage);
    };
    MaterialComponent.prototype.copyExport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(this.exportedData)];
                    case 2:
                        _a.sent();
                        this.snackbar.show({
                            message: '已复制到剪切板。',
                            actionText: '好的',
                            multiline: false,
                            actionOnBottom: false
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.snackbar.show({
                            message: '复制失败。',
                            actionText: '好吧',
                            multiline: false,
                            actionOnBottom: false
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MaterialComponent.prototype.getImportedData = function () {
        var storage = JSON.parse(this.importedData);
        var newData = {};
        for (var name_3 in storage) {
            if (storage[name_3]) {
                var s = storage[name_3];
                var d = new _model_materialitemdata__WEBPACK_IMPORTED_MODULE_4__["MaterialItemData"](name_3);
                d.have = s[0];
                d.need = s[1];
                newData[name_3] = d;
            }
        }
        this.data = newData;
        this.calc();
    };
    MaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(/*! raw-loader!./material.component.html */ "./node_modules/raw-loader/index.js!./src/app/material/material.component.html"),
            styles: [__webpack_require__(/*! ./material.component.scss */ "./src/app/material/material.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_2__["FetchService"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/model/hrdata.ts":
/*!*********************************!*\
  !*** ./src/app/model/hrdata.ts ***!
  \*********************************/
/*! exports provided: HrData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrData", function() { return HrData; });
var HrData = /** @class */ (function () {
    function HrData() {
        this.combs = [];
        this.tagrows = [];
        this.combsBk = [];
    }
    return HrData;
}());



/***/ }),

/***/ "./src/app/model/materialinfo.ts":
/*!***************************************!*\
  !*** ./src/app/model/materialinfo.ts ***!
  \***************************************/
/*! exports provided: MaterialInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialInfo", function() { return MaterialInfo; });
var MaterialInfo = /** @class */ (function () {
    function MaterialInfo() {
    }
    return MaterialInfo;
}());



/***/ }),

/***/ "./src/app/model/materialitemdata.ts":
/*!*******************************************!*\
  !*** ./src/app/model/materialitemdata.ts ***!
  \*******************************************/
/*! exports provided: MaterialItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialItemData", function() { return MaterialItemData; });
var MaterialItemData = /** @class */ (function () {
    function MaterialItemData(name) {
        this.have = 0;
        this.need = 0;
        this.lack = 0;
        this.canMerge = false;
        this.name = name;
    }
    MaterialItemData.prototype.shouldHide = function () {
        return !(this.have || this.need || this.lack);
    };
    return MaterialItemData;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-container {\n  max-width: 600px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi96ZWl0LzI1ZGZkMjgyL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSIsIi5zZXR0aW5ncy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blox_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blox/material */ "./node_modules/@blox/material/dist/material.es5.js");
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetch.service */ "./src/app/fetch.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(fetch, router, snackbar) {
        this.fetch = fetch;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = {
            title: '提示',
            message: '',
            decline: '不了',
            accept: '好的',
            acceptCallback: function () { },
            declineCallback: function () { }
        };
        this.isExtraSmall = false;
        this.isMaxFontSize = true;
        this.detectColor = '#00ff00';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.isExtraSmall = this.fetch.getLocalStorage("s-exsm", false);
        this.isMaxFontSize = this.fetch.getLocalStorage("detect-mfs", true);
        this.detectColor = this.fetch.getLocalStorage("detect-tclr", '#00ff00');
    };
    SettingsComponent.prototype.saveSettings = function () {
        this.fetch.setLocalStorage("s-exsm", this.isExtraSmall);
        this.fetch.setLocalStorage("detect-mfs", this.isMaxFontSize);
        this.fetch.setLocalStorage("detect-tclr", this.detectColor);
        console.log(localStorage);
    };
    SettingsComponent.prototype.showSnackBar = function (msg, action) {
        this.snackbar.show({
            message: msg,
            actionText: action,
            multiline: false,
            actionOnBottom: false
        });
    };
    SettingsComponent.prototype.beforeClear = function () {
        var _this = this;
        this.dialog = {
            title: '提示',
            message: '是否清除本地输入数据？这在有些数据错误时很有用。（缓存数据不受影响）',
            accept: '好的',
            decline: '不了',
            declineCallback: function () { },
            acceptCallback: function () {
                localStorage.clear();
                var currentUrl = _this.router.url;
                _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                    _this.router.navigateByUrl(currentUrl);
                });
                _this.showSnackBar('输入数据已清空', '好的');
            }
        };
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_service__WEBPACK_IMPORTED_MODULE_4__["FetchService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _blox_material__WEBPACK_IMPORTED_MODULE_3__["MdcSnackbarService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /zeit/25dfd282/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
