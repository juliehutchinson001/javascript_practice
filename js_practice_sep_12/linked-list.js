class Node {
	
	constructor(data) {
		this.data = data;
		this.next = null;
	}
	
}


class LinkedList {
	
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	
	isEmpty() { return this.head === null }
	
	/*
	isEmpty() {
		//head is empty or not
		
		return this.head === null ? true : false;
		

		
		if(this.head === null) {
			return true;
		} else {
			return false;
		}
		
		
	}*/
	
	
	append(data) {
		//it creates the node with the data given
		
		const newNode = new Node(data);

		
		if (this.head.isEmpty()) {
			
			this.head = newNode;
		
		} else {
			
			this.tail.next = newNode;
			
		}
		
		this.tail = newNode; //tail always keeps track of last node
		this.size += 1;
		
	}
	
	prepend(data) {
		//attaches something at the beginning of the LL
		
		const newNode = new Node(data);
		
		if (this.head.isEmpty()) {
			
			this.head = newNode;
		
		} else {
		
		    newNode.next = this.head;
		}
		
		this.head = newNode; //head always keeps track of first node
		this.size += 1
		
	}
	
	isFound(data) {
		//this method returns a bool if data is on LL
		
		if (this.head.isEmpty()) {
			
			return false;
		
		}
		
		while()
		
		
	}
	
	
	
	
	
	
	
	
}


const newNode = new Node('A');