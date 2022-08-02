//this will create a node for our linked list
class Node {
    constructor(a){
        this.data = a;
        this.next = null
    }
}

// this is our linked list main class which takes node as parameter and have multiple methods.

class List{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
// this method is used to add a node element into our linked list
    add(node){
        if(this.head == null){//if linked list contains only head which is null then we will add it to head
            this.head = node;
        }
//         if linked list have multiple nodes then we will add it to the last
        else{
            let current = this.head;
            
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //this shows the current linked list
    show(){
        console.log(this.head)
    }
    
    // this method removes the node from list by comparing the element/data inside node.
    
    remove(n){
        let current = this.head;
        let prev = null;
        
        if(this.size == 1){ //if list whose size is 1 we will set head as null again
            this.head = null
        }
        else{
            while(current != null) {
                if(current.data === n){
                    prev.next = current.next;
                    this.size--;
                }
                prev = current;
                  current = current.next;
                  } 
        }
        
      
    }
    
//     this method insert the node at a specific index
    
    insertAt(data,index){
        let node = new Node(data);
        
        if(index == 0){
            node.next = this.head;
            this.head = node;
        }
        else{
            let current = this.head;
            let prev = null,at = 0;
            
            while(at<index){
                at++;
                prev = current;
                current = current.next;
            }
            
            prev.next = node;
            node.next = current;
            this.size++;
            
        }
        
        
    }
}

let n = new Node(10)
let ll = new List()
let m = new Node(20)
let o = new Node(30)

ll.add(n);
ll.add(m);
ll.add(o);

ll.show();

ll.remove(20)

ll.show();

ll.insertAt(20,1)

ll.show();
