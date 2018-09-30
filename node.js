function Node(val) {
    this.value = val;
    this. left = null;
    this.right = null;
}

Node.prototype.addNode = function(n) {
    //Using recursion to add node
    if(n.value < this.value) {
        //If the left is null put it there
        //else, call function again
        if(this.left == null) {
            this.left = n;
        }
        else {
            this.left.addNode(n);
        }
        //If the right is null put it there
        //else, call function again
    } else {
        if(this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        return this;
    } else if(val < this.val && this.left != null) {
        return this.left.search(val);
    } else if(val > this.val && this.right !=null) {
        return this.right.search(val);
    }
    return null;
}

Node.prototype.visit = function() {
    if(this.left != null) {
        this.left.visit();
    }
    console.log(this.value);
    if(this.right != null) {
        this.right.visit();
    }
}