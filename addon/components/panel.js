import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';

export default class PanelComponent extends Component {
  @tracked selectedPanelId = null; // Data down

  constructor() {
    super(...arguments);

    this.panelId = guidFor(this);
  }

  get isPanelHidden() {
    return this.panelId !== this.args.selectedPanelId;
  }
}
