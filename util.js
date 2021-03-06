// from http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object/728694#728694
function clone(obj) {
	// Handle the 3 simple types, and null or undefined
	if (null == obj || "object" != typeof obj) return obj;

	// Handle Array
	if (obj instanceof Array) {
		var copy = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			copy[i] = clone(obj[i]);
		}
		return copy;
	}

	// Handle Object
	if (obj instanceof Object) {
		var copy = {};
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
		}
		return copy;
	}

	throw new Error("Unable to copy obj! Its type isn't supported.");
}

function mapProperties(obj, fn) {
	return Object.keys(obj).map(function(k) { return fn(k, obj[k]); });
}

// polyfills

String.prototype.repeat = String.prototype.repeat || function(n) {
	return new Array(n + 1).join(this);
}

String.prototype.startsWith = String.prototype.startsWith || function(prefix) {
	return this.indexOf(prefix) == 0;
}
