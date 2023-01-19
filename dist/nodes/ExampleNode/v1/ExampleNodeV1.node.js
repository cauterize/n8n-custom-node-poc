"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleNodeV1 = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class ExampleNodeV1 {
    constructor(baseDescription) {
        this.versionDescription = {
            displayName: 'Example Node',
            name: 'exampleNodeV1',
            group: ['transform'],
            version: 1,
            description: 'Basic Example Node',
            defaults: {
                name: 'Example Node',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'My String',
                    name: 'myString',
                    type: 'string',
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                },
            ],
        };
        this.description = {
            ...baseDescription,
            ...this.versionDescription,
        };
    }
    async execute() {
        const items = this.getInputData();
        let item;
        let myString;
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                myString = this.getNodeParameter('myString', itemIndex, '');
                item = items[itemIndex];
                item.json['myString'] = myString;
            }
            catch (error) {
                if (this.continueOnFail()) {
                    items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
                }
                else {
                    if (error.context) {
                        error.context.itemIndex = itemIndex;
                        throw error;
                    }
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), error, {
                        itemIndex,
                    });
                }
            }
        }
        return this.prepareOutputData(items);
    }
}
exports.ExampleNodeV1 = ExampleNodeV1;
//# sourceMappingURL=ExampleNodeV1.node.js.map