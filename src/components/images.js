import tree from "../images/tree.png";
import rslang from "../images/rslang.png";
import quiz from "../images/quiz.png";
import momentum from "../images/momentum.png";
import race from "../images/race.png";
import template1 from "../images/layout.png";
import template2 from "../images/layout2.png";
import template3 from "../images/layout3.png";

function images(name) {
  if (name === "christmas-tree") {
    return tree;
  } else if (name === "rslang") {
    return rslang;
  } else if (name === "art") {
    return quiz;
  } else if (name === "momentum") {
    return momentum;
  } else if (name === "async-race") {
    return race;
  } else if (name === "template") {
    return template1;
  } else if (name === "template2") {
    return template2;
  } else if (name === "template3") {
    return template3;
  }
}

export default images;
