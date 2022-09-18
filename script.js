var TotalNoArray=document.querySelectorAll('li');// To calculate number of contacts
var headers=Array.from(TotalNoArray); // contacts from li element stored in array
var TotalContact=headers.length; // length of total contacts
//Number of Contact can change according to your preference  

var ContactsPerPages=11;
var Pagescount=Math.ceil(TotalContact/ContactsPerPages); // calculating no. of pages 
var HtmlOfPageNo="";
var i=1; // loop variable

//Inserting Contacts According to page number
var TotalNo1=document.querySelectorAll('.contact-item.cf'); // fetching contacts with its class
var headers1=Array.from(TotalNo1); // putting in an array
var Html,Html1="";

//Adding page-number  to html
while(i<=Pagescount){
    HtmlOfPageNo+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

document.querySelector('#pgNo').insertAdjacentHTML('afterbegin', HtmlOfPageNo);

// when page loades for first time
window.onload = function() {  
  var m;
 var  Html1="";
 var  Contactdisplayed=0;
 var  CurrentPage=1;//Current PAGE-LOAD is 1
     while(i<=Pagescount){
    HtmlOfPageNo+="<li><a href='#' id="+i+" onClick=Display(this.id) >"+i+"</a></li>";
    i++;
}

for(k=0;k<ContactsPerPages;k++){//Loop used for displaying contact list
  Contactdisplayed= (CurrentPage-1)*ContactsPerPages+m;
  Htmllist= headers1[ContactTdisplayed].outerHTML;
  Html1+=Htmllist;
  document.querySelector('.contact-list').innerHTML=Html1;
  }
 }
 // Function to dispay contacts 
function Display(CurrentPageNo){
var k,Html1="",ContactToDisplay=0,CurrentPageNo;
for(k=0;k<ContactsPerPages;k++){
    ContactToDisplay= (CurrentPageNo-1)*ContactsPerPages+k;
    Html= headers1[ContactToDisplay].outerHTML;
    Html1+=Html;
    document.querySelector('.contact-list').innerHTML=Html1;
}
}