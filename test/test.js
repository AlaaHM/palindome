let assert =require("assert");
let Phrase=require("../index.js");

describe("Phrase",function(){
  describe("#palindrome",function(){
    it("should be false for nonPalindrome string",function(){
      let nonPalindrome=new Phrase("asasd");//1ala
      assert(!nonPalindrome.palindrome());
    })
    it("should be true for plain palindrome string",function(){
      let plainPalindrome=new Phrase("ala");
      assert(plainPalindrome.palindrome());
    })

    it("should be true for mixed-case string",function(){
      let mixedPalindrome=new Phrase("Ala");
      assert(mixedPalindrome.palindrome());
    })

    it("should be true for a phrases which contain spaces and punctuations",function(){
      let complexPalindrome=new Phrase("Madam I'm Adam");
      assert(complexPalindrome.palindrome());
    })
  })
describe("#letters",function(){
  it("should return only letters",function(){
    let onlyLetter=new Phrase("Madam, I'm Adam.");
    assert.strictEqual(onlyLetter.letters(),"MadamImAdam");
  })
})
})
