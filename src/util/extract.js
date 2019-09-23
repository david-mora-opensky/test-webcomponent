const extract = {
	extractValues: (selectable, original) => {
		return Object.keys(selectable).reduce((a, b) => ((a[b] = original[b]), a), {});
	}
};

export default extract;
