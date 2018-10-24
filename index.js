// add solution here
var musicians = ['John Lennon','Stuart Sutcliffe', 'Tommy Moore', 'Ringo Starr'];
var instruments = ['guitar', 'bass', 'drum kits', 'drum kits'];


theBeatlesPlay(musicians,instruments);
fucntion theBeatlesPlay(musc,inst) {
  //Just for this specific example, i didnt check the lebgth of instruments and musicians to be equal
  for(var i =0; i < musc.length; i++) {
    myArray[i] = musicians[i] + " plays " + instruments[i];
  }
}