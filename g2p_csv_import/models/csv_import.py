from odoo import models


class BaseImport(models.Model):
    _name = "base.import"
    _inherit = ["base_import.import"]
