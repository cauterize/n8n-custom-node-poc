"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleNode = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const ExampleNodeV1_node_1 = require("./v1/ExampleNodeV1.node");
class ExampleNode extends n8n_workflow_1.VersionedNodeType {
    constructor() {
        const baseDescription = {
            displayName: 'Example Node',
            name: 'exampleNode',
            group: ['transform'],
            description: 'Basic Example Node',
            defaultVersion: 1,
        };
        const nodeVersions = {
            1: new ExampleNodeV1_node_1.ExampleNodeV1(baseDescription),
        };
        super(nodeVersions, baseDescription);
    }
}
exports.ExampleNode = ExampleNode;
//# sourceMappingURL=ExampleNode.node.js.map