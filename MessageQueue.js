class MessageQueue {
	constructor(size) {
		this.size = size;
		this.queue = [];
	}
	push(item) {
		if(this.queue.length == this.size) {
			this.queue.shift();
		}
		this.queue.push(item);
	}
	pop() {
		return this.queue.shift();
	}
	getAll() {
		return this.queue;
	}
}

module.exports = MessageQueue;
