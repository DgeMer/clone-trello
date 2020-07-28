const reorder = (obj, sourceIndex, destinationIndex) => {
	let keys = Object.keys(obj);
	[keys[sourceIndex], keys[destinationIndex]] = [keys[destinationIndex], keys[sourceIndex]];
	return keys.reduce((ret, key) => {
		ret[key] = obj[key];
		return ret;
	}, {});
};

const getBase64 = (file) => new Promise(function (resolve, reject) {
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => resolve(reader.result);
	reader.onerror = (error) => reject('Error: ', error);
});

module.exports = {reorder, getBase64};