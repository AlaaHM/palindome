function reverse(str){
  return Array.from(str).reverse().join("");
}

function Phrase(content){
  this.content=content;

  this.processedContent=function processedContent(){
    return this.content.toLowerCase();
  }

  this.palindrome=function palindrome(){
    return this.processedContent()===reverse(this.processedContent());
  }
}
