import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TabComponent extends Component {
  @tracked selectedTabId = null; // Data down

  tabId = null;

  get selected() {
    return this.tabId === this.args.selectedTabId;
  }

  constructor() {
    super(...arguments);

    this.tabId = guidFor(this);
  }

  actionBeforeSelection = async function(func, tabId) {
    await func();

    this.onTabClick(tabId);
  }

  @action tabClick() {
    if (this.args.tabAction) {
      return this.actionBeforeSelection(this.args.tabAction, this.tabId);
    }

    this.args.onTabClick(this.tabId);
  }
}
