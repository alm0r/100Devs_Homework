//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter(charName, charDifficuly, charTier, CharArchetype) {
  this.name = charName;
  this.difficulty = charDifficuly;
  this.tier = charTier;
  this.archetype = CharArchetype;

  this.shoryuken = function () {
    console.log("dp");
  };

  this.jump = function () {
    console.log("jump");
  };

  this.blockLow = function () {
    console.log("blocklow");
  };
}

let ryu = new MakeCharacter("ryu", "low", "S", "shoto");
