define(function(module) {
	function requireFilesInGroups(conf, groups, callback) {
		return function() {
			if (callback && groups.length == 0) {
				callback();
			}
			var head = groups[0];
			var tail = groups.slice(1);
			if (head) {
				require(head, requireFilesInGroups(conf, tail, callback));
			}
		};
	}
	return requireFilesInGroups;
});