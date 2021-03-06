import { createGroupMutation } from './common/createGroupMutation';

export default createGroupMutation(
	'swap-group-mutation',
	(groups, [fromIndexes, toIndexes]) => {
		groups.swap(fromIndexes, toIndexes);
	}
);
