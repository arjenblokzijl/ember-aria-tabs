ember-aria-tabs
==============================================================================

This addon is inspired by the _howto-tabs_ from the [howto-components](https://github.com/GoogleChromeLabs/howto-components) repository of _Goolge Chrome Labs_.

It is purposely made without any css at all.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```console
ember install ember-aria-tabs
```


Usage
------------------------------------------------------------------------------

Simple example with inline styles:

```hbs
<Tabs style="display: flex; flex-wrap: wrap;" as |t|>
  <t.tab style="padding: 5px 10px;">one tab</t.tab>
  <t.panel style="flex-basis: 100%; order: 99999; padding: 5px 10px;">one panel</t.panel>
  <t.tab style="padding: 5px 10px;">two tab</t.tab>
  <t.panel style="flex-basis: 100%; order: 99999; padding: 5px 10px;">two panel</t.panel>
  <t.tab style="padding: 5px 10px;">three tab </t.tab>
  <t.panel style="flex-basis: 100%; order: 99999; padding: 5px 10px;">three panel</t.panel>
</Tabs>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
