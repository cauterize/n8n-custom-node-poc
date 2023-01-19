import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { ExampleNodeV1 } from './v1/ExampleNodeV1.node';

export class ExampleNode extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Example Node',
			name: 'exampleNode',
			group: ['transform'],
			description: 'Basic Example Node',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new ExampleNodeV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
