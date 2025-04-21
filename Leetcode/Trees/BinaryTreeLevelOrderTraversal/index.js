

// Time complexity is O(n) ie: total nodes once and space complexity is O(n) calculaculated has
// has the maximum amount of nodes in a single level

function levelOrder(root: TreeNode | null): number[][] {
let result: number[][] = []
if(!root) return result;

let queue: TreeNode[] = [root]

while(queue.length !== 0){

const levelLength = queue.length
const currentLevelValues: number[] = []

for(let x =0; x<levelLength;x++){
const currNode = queue.shift()
currentLevelValues.push(currNode.val)
if(currNode.left) queue.push(currNode.left)
if(currNode.right)queue.push(currNode.right)
}
result.push(currentLevelValues)
}
return result;
};

// Costly shift() fix
function levelOrder(root: TreeNode | null): number[][] {
const result: number[][] = [];
if (!root) return result;

const queue: TreeNode[] = [];
let head = 0;
queue.push(root);

while (head < queue.length) {
const levelSize = queue.length - head;
const currentLevel: number[] = [];

for (let i = 0; i < levelSize; i++) {
const node = queue[head++];
currentLevel.push(node.val);
if (node.left) queue.push(node.left);
if (node.right) queue.push(node.right);
}

result.push(currentLevel);
}

return result;
}

// Ultimate optimized version
function levelOrder(root: TreeNode | null): number[][] {
if (!root) return [];

const result: number[][] = [];
const queue: TreeNode[] = [root];
let start = 0;

while (start < queue.length) {
const end = queue.length;
const level: number[] = [];

for (let i = start; i < end; i++) {
const node = queue[i];
level.push(node.val);
if (node.left) queue.push(node.left);
if (node.right) queue.push(node.right);
}

result.push(level);
start = end;
}

return result;
}
