class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertatfirst(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  deleteatlast() {
    let temp = this.head;
    if (this.head == null) {
      console.log("Empty List");
      return;
    }

    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
    this.size--;
  }

  printLL() {
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "-->");
      temp = temp.next;
    }
    console.log("null");
  }
}

let obj = new LinkedList();
obj.insertatfirst(10);
obj.insertatfirst(20);
obj.insertatfirst(30);
obj.insertatfirst(40);
obj.insertatfirst(10);

obj.printLL();
obj.deleteatlast();
obj.deleteatlast();
obj.deleteatlast();
obj.printLL();
obj.deleteatlast();
obj.deleteatlast();
obj.printLL();
