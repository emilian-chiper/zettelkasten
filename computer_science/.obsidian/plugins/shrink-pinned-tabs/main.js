/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ShrinkPinnedTabs
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  hideTitle: false,
  tabWidth: 60
};
var ShrinkPinnedTabs = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    // refresh function for when we change settings
    this.refresh = () => {
      this.updateStyle();
    };
    // update the styles (at the start, or as the result of a settings change)
    this.updateStyle = () => {
      console.log("Update style");
      const tabs = document.querySelectorAll(".workspace-tab-header:has(.mod-pinned)");
      if (tabs != null) {
        for (var i = 0; i < tabs.length; i++) {
          const title = tabs[i].querySelectorAll(".workspace-tab-header-inner-title");
          if (title != null) {
            title[0].toggleClass("mod-pinned-hide", this.settings.hideTitle);
          }
          tabs[i].style.maxWidth = this.settings.tabWidth + "px";
        }
      }
    };
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new ShrinkPinnedTabsSettingTab(this.app, this));
    this.addCommand({
      id: "toggle-tab-title",
      name: "Toggle tab title display",
      callback: () => {
        this.settings.hideTitle = !this.settings.hideTitle;
        this.saveData(this.settings);
        this.refresh();
      }
    });
    this.refresh();
  }
  onunload() {
    console.log("Unloading Shrink pinned tabs plugin");
    this.updateStyle();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
};
var ShrinkPinnedTabsSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Hide tab title").setDesc("Defines if you want to hide the tab title").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.hideTitle).onChange((value) => {
        this.plugin.settings.hideTitle = value;
        this.plugin.saveData(this.plugin.settings);
        this.plugin.refresh();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Width tab").setDesc("Defines the width tab when shrinked").addSlider(
      (text) => text.setLimits(20, 160, 10).setValue(this.plugin.settings.tabWidth).setDynamicTooltip().onChange((value) => {
        this.plugin.settings.tabWidth = value;
        this.plugin.saveData(this.plugin.settings);
        this.plugin.refresh();
      })
    );
  }
};