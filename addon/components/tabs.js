import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action, setProperties } from '@ember/object';

export default class TabsComponent extends Component {
  activeTabIndexOnRender = 0;
  selectedPanelId = null;
  selectedTabId = null;
  tabsId = null;

  constructor() {
    super(...arguments);

    this.tabsId = guidFor(this);
  }

  @action didInsertTabs() {
    this.linkPanels();
    this.selectTab();
  }

  @action didUpdateTabs() {
    let {
      tabId: selectedTabId
    } = this.panels[this.activeTabIndexOnRender];

    this.selectTab(selectedTabId);
  }

  @action onTabClick(tabId) {
    this.selectTab(tabId);
  }

  linkPanels() {
    let tabs = this.getAllTabs();
    let panels = [];

    tabs.forEach((tab) => {
      let panel = tab.nextElementSibling;
      if (!panel.getAttribute('data-panel')) {
        throw new Error(`Tab #${tab.id} is not a sibling of a div[data-panel]`);
      }

      let tabPanel = {
        tabId: tab.id,
        panelId: panel.id
      };

      panels.push(tabPanel);

      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });

    this.panels = panels;
  }

  selectTab(tabId) {
    let selectedPanelId = this.panels[this.activeTabIndexOnRender].panelId;
    let selectedTabId = this.panels[this.activeTabIndexOnRender].tabId;

    if (tabId) {
      let selectedPanel = this.panels.find((obj) => obj.tabId === tabId);
      selectedTabId = selectedPanel.tabId;
      selectedPanelId = selectedPanel.panelId;
      this.activeTabIndexOnRender = this.panels.indexOf(selectedPanel);
    }

    let tab = document.getElementById(selectedTabId);
    let panel = document.getElementById(selectedPanelId);

    if (panel.id !== tab.getAttribute('aria-controls')) {
      throw new Error(`No panel with id ${tab.getAttribute('aria-controls')}`);
    }

    setProperties(this, {
      selectedPanelId,
      selectedTabId
    });

    tab.focus();
  }

  getAllTabs() {
    let element = document.getElementById(this.tabsId);

    return Array.from(element.querySelectorAll(`#${this.tabsId} > div[data-tab]`));
  }
}
