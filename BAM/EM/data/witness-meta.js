// var witnessLabels = ["Author", "Bibliography", "Content", "Form(s)", "ID", "Latitiude", "Longitude", "Substrate Material(s)", "Place of Composition", "Religious Affiliation", "Terminus ante quem", "Terminus post quem", "Text", "Work"]
// var witnessLabels = {author: "Author", bibliography: "Bibliography", content: "Content", id: "ID", latitude: "Latitiude", longitude: "Longitude", place_of_composition: "Place of Composition", religious_affiliation: "Religious Affiliation", terminus_ante_quem: "Terminus ante quem", terminus_post_quem: "Terminus post quem", text: "Text", work: "Work"};
var witnessLabels = {author: "Author", bibliography: "Bibliography", content: "Content", forms: "Form(s)", id: "ID", latitude: "Latitiude", longitude: "Longitude", materials: "Substrate Material(s)", place_of_composition: "Place of Composition", religious_affiliation: "Religious Affiliation", terminus_ante_quem: "Terminus ante quem", terminus_post_quem: "Terminus post quem", text: "Text", work: "Work"};

var witness_forms_substrates = [
  {
  id: "0", forms: "indexplaceholder", materials: "indexplaceholder"
  },
  {
id: "1", forms: "Scroll; Codex; Tablets", materials: "Papyrus; Parchment; Bark; Ivory; Wax"
  },
  {
id: "2", forms: "Scroll; Codex", materials: "Papyrus; Parchment"
  },
  {
id: "3", forms: "Booklet", materials: "Linen"
  },
  {
id: "4", forms: "Booklet", materials: "Linen"
  },
  {
id: "5", forms: "Leaf (Unbound)", materials: "Palm Leaf"
  },
  {
id: "6", forms: "Scroll?", materials: "Bark; Papyrus"
  },
  {
id: "7", forms: "Booklet", materials: "Linen"
  },
  {
id: "8", forms: "Scroll?", materials: "Linen"
  },
  {
id: "9", forms: "Scroll?", materials: "Animal Skin"
  },
  {
id: "10", forms: "Scroll", materials: "Papyrus?", type: "image"
  },
  {
id: "11", forms: "Tablet", materials: "Wood"
  },
  {
id: "12", forms: "Codex", materials: "Parchment or Paper"
  },
  {
id: "13", forms: "Scroll?", materials: "Leather"
  },
  {
id: "14", forms: "Scroll?  Booklet?", materials: "Paper"
  },
  {
id: "15", forms: "Scroll?  Booklet?", materials: "Paper"
  },
  {
id: "16", forms: "Codex (likely Bifolio)", materials: "Paper?", type: "image"
  },
  {
id: "17", forms: "", materials: ""
  },
  {
id: "18", forms: "", materials: ""
  }
];
console.log(witness_forms_substrates);
