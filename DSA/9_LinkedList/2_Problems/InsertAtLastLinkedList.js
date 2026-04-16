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

  insertatlast(val) {
    this.size++;
    const newNode = new Node(val);
    let temp = this.head;
    if (this.head == null) {
      this.head = newNode;
      return
    }

    while (temp.next !=null) {
        temp = temp.next
    }
    temp.next = newNode
  }

  print() {
    if (this.head == null) {
      console.log("Enpty Linked List");
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "-->");
      temp = temp.next;
    }
    console.log("Null");
  }
}

let obj = new LinkedList()
obj.insertatlast(10)
obj.insertatlast(20)
obj.insertatlast(30)
obj.insertatlast(40)
obj.insertatlast(50)

obj.print()
