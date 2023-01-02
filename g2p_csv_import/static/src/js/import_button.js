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
               type: 'ir.actions.act_window',
               res_model: 'res.partner',
               name :'import',
               view_mode: 'form',
               view_type: 'form',
               views: [[false, 'form']],
               target: 'current',
               res_id: false,
               context:{'default_is_registrant':1,'default_is_group':0,'registrant_form':1}
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