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
	//return document.querySelectorAll('div#grand-node');
	//document.getelementById(id).querySelectorAll()
	return document.querySelector('#grand-node div div div div');
}