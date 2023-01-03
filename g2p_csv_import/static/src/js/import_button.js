odoo.define('button_near_create.tree_button', function (require) {
    "use strict";
    var ListController = require('web.ListController');
    var ListView = require('web.ListView');
    var viewRegistry = require('web.view_registry');
    var TreeButton = ListController.extend({
        buttons_template: 'button_near_create.buttons',
        events: _.extend({}, ListController.prototype.events, {
            'click .open_wizard_action': '_OpenWizard',
        }),
        _OpenWizard: function () {
            var self = this;
            this.do_action({
                type: 'ir.actions.client',
                tag: 'import',
                params: { 
                    'model': 'res.partner', 
                    'context': "{ 'default_is_registrant': 'True', 'default_is_group': 'False','registrant_form': 'True' }" }
            });
        }
    });
    var IndividualListView = ListView.extend({
        config: _.extend({}, ListView.prototype.config, {
            Controller: TreeButton,
        }),
    });
    viewRegistry.add('button_in_tree', IndividualListView);
});