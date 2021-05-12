

let sel;

function setup() {
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('pear');
  sel.option('kiwi');
  sel.option('grape');
  sel.option('peasr');
  sel.option('kiwsi');
  sel.option('graspe');
  sel.option('peassr');
  sel.option('kiwssi');
  sel.option('grasspe');
  sel.option('peasssr');
  sel.option('kiwssssi');
  sel.option('grassspe');
  sel.option('peaddr');
  sel.option('kddiwi');
  sel.option('graddpe');
  sel.option('pddeasr');
  sel.option('kiddwsi');
  sel.option('grddaspe');
  sel.option('peaddssr');
  sel.option('kiwddssi');
  sel.option('graddsspe');
  sel.option('peasddssr');
  sel.option('kiwdddssssi');
  sel.option('grasddsspe');
  
  
  sel.selected('kiwi');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();
  background(200);
  text('It is a ' + item + '!', 50, 50);
}
  
