from odoo import models,fields,api


class BaseImport(models.Model):
    _name = "base.import"
    _inherit = ["base_import.import"]


  