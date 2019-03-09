module.exports=Phrase;


function reverse(str){
  return Array.from(str).reverse().join("");
}

function Phrase(content){
  this.content=content;

  this.processedContent=function processedContent(){
    return this.letters().toLowerCase();
  }

  this.letters=function letters(){
    return this.content.match(/[a-z]/ig).join("");
  }

  this.palindrome=function palindrome(){
    return this.processedContent()===reverse(this.processedContent());
  }
}
