function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
   return document.getElementById('nested').querySelector('div.target');
} 

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0; i<lis.length; i++){
    var parsed = parseInt(lis[i].innerHTML); 
    lis[i].innerHTML = (parsed + n);
    console.log(lis[i].innerHTML);
  }
}
//increaseRankBy(1);

function deepestChild(){
 let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
	// node = '#grand-node div div div div';
	
}

