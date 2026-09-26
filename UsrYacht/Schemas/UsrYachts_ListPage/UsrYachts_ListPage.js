define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 138.00001525878906
						},
						{
							"id": "347abad2-dc82-656c-e069-efc81cb2b7d1",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 31,
							"width": 200.00001525878906
						},
						{
							"id": "cdf36ccb-e2fc-648d-03fd-aff915dbda9b",
							"code": "PDS_UsrColumn9",
							"caption": "#ResourceString(PDS_UsrColumn9)#",
							"dataValueType": 10,
							"width": 131.00001525878906
						},
						{
							"id": "f1c18d72-440e-f2a7-c0b1-3c353a1e38b8",
							"code": "PDS_UsrColumn10",
							"caption": "#ResourceString(PDS_UsrColumn10)#",
							"dataValueType": 10,
							"width": 185.00001525878906
						},
						{
							"id": "0a6446f7-c914-8d03-5f38-1af868640898",
							"code": "PDS_UsrColumn11",
							"caption": "#ResourceString(PDS_UsrColumn11)#",
							"dataValueType": 4
						},
						{
							"id": "fd80cb9d-9cb0-5e33-9605-f1297193a104",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrColumn9": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					},
					"PDS_UsrColumn10": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_UsrColumn11": {
						"modelConfig": {
							"path": "PDS.UsrColumn11"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "UsrColumn11"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrColumn9": {
							"path": "UsrColumn9"
						},
						"UsrColumn10": {
							"path": "UsrColumn10"
						},
						"UsrColumn11": {
							"path": "UsrColumn11"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});