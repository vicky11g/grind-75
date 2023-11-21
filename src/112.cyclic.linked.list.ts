import { ListNode } from './types/list.node';

/* 
Given head, the head of a linked list, determine if the linked list
has a cycle in it.
There is a cycle in a linked list if there is some node in the list 
that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next 
pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

function hasCycle(head: ListNode | null): { status: boolean; f: ListNode } {
  let slow = head?.next;
  let fast = head?.next?.next;
  while (true) {
    if (!slow || !fast) return { status: false, f: null };
    if (slow === fast) return { status: true, f: fast };
    slow = slow.next;
    fast = fast.next?.next;
  }
}

function cyclePoint(head: ListNode) {
  let { status, f } = hasCycle(head);
  let curr = head.next;
  if (!status) return null;
  while (true) {
    if (f !== curr) return f;
    curr = curr.next;
    f = f.next;
  }
}

const list = new ListNode();

list.next = new ListNode(3);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(0);
list.next.next.next.next = new ListNode(4);
list.next.next.next.next.next = list.next.next.next;

console.log(hasCycle(list));
console.log(cyclePoint(list).val);
// print(list);
