// add solution here
var musicians = ['John Lennon','Stuart Sutcliffe', 'Tommy Moore', 'Ringo Starr'];
var instruments = ['guitar', 'bass', 'drum kits', 'drum kits'];


theBeatlesPlay(musicians,instruments);
function theBeatlesPlay(musc,inst) {
  var myArray = [];

  //Just for this specific example, i didnt check the lebgth of instruments and musicians to be equal
  for(var i =0; i < musc.length; i++) {
    myArray[i] = musc[i] + " plays " + inst[i];
  }

  return myArray;
}

const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts() {
  var updated_facts = [];
  var i = 0;
  while()
}
