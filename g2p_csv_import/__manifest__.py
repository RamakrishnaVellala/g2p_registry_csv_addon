# Part of OpenG2P Registry. See LICENSE file for full copyright and licensing details.
{
    "name": "G2P Registry: Csv Import",
    "category": "G2P",
    "version": "15.0.0.0.1",
    "sequence": 1,
    "author": "OpenG2P",
    "website": "https://github.com/OpenG2P/openg2p-csv-import",
    "depends": ["base", "web","g2p_registry_individual","base_import"],
    "data": [
        
        # "security/ir.model.access.csv",
        "views/individuals_view.xml",

    ],
    'assets': {
   'web.assets_backend': [
       'g2p_csv_import/static/src/js/import_button.js',
    ],
   'web.assets_qweb': [
       'g2p_csv_import/static/src/xml/import_button.xml',
      ],
},
  
    "demo": [],
    "images": [],
    "application": False,
    "installable": True,
    "auto_install": False,
}
