import logging
from odoo import api, fields, models

_logger = logging.getLogger(__name__)


class G2PIndividual(models.Model):
    _inherit = "res.partner"

    def action_import(self):
        print('hi')