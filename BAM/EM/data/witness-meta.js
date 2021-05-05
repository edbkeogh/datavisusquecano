// var witnessLabels = ["Author", "Bibliography", "Content", "Form(s)", "ID", "Latitiude", "Longitude", "Substrate Material(s)", "Place of Composition", "Religious Affiliation", "Terminus ante quem", "Terminus post quem", "Text", "Work"]
// var witnessLabels = {author: "Author", bibliography: "Bibliography", content: "Content", id: "ID", latitude: "Latitiude", longitude: "Longitude", place_of_composition: "Place of Composition", religious_affiliation: "Religious Affiliation", terminus_ante_quem: "Terminus ante quem", terminus_post_quem: "Terminus post quem", text: "Text", work: "Work"};
var witnessGeoJSON =
{
  "type": "FeatureCollection",
  "features": [
    // {
    //   "type": "Feature",
    //   "properties": {},
    //   "geometry": {
    //     "type": "Point",
    //     "coordinates": [
    //       45.52734375,
    //       41.11246878918088
    //     ]
    //   }
    // }
  ]
};

//witnessGeoJSON.features.push("geometry": {      "type": "Point",        "coordinates": [0,0]      })
// default shape = {"type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [0,0] } }
var witnessLabels = {author: "Author", bibliography: "Bibliography", content: "Content", forms: "Form(s)", id: "ID", latitude: "Latitiude", longitude: "Longitude", materials: "Substrate Material(s)", place_of_composition: "Place of Composition", religious_affiliation: "Religious Affiliation", terminus_ante_quem: "Terminus ante quem", terminus_post_quem: "Terminus post quem", text: "Text", work: "Work"};

var witness_forms_substrates = [

    {
    id: "0", form: "indexplaceholder", substrate_material: "indexplaceholder"
    },
    {
  id: "1", form: "Scroll; Codex; Tablets", substrate_material: "Papyrus; Parchment; Bark; Ivory; Wax"
    },
    {
  id: "2", form: "Scroll; Codex", substrate_material: "Papyrus; Parchment"
    },
    {
  id: "3", form: "Booklet", substrate_material: "Linen"
    },
    {
  id: "4", form: "Booklet", substrate_material: "Linen"
    },
    {
  id: "5", form: "Leaf (Unbound)", substrate_material: "Palm Leaf"
    },
    {
  id: "6", form: "Scroll?", substrate_material: "Bark; Papyrus"
    },
    {
  id: "7", form: "Booklet", substrate_material: "Linen"
    },
    {
  id: "8", form: "Scroll?", substrate_material: "Linen"
    },
    {
  id: "9", form: "Scroll?", substrate_material: "Animal Skin"
    },
    {
  id: "10", form: "Scroll", substrate_material: "Papyrus?", type: "image"
    },
    {
  id: "11", form: "Tablet", substrate_material: "Wood"
    },
    {
  id: "12", form: "Codex", substrate_material: "Parchment or Paper"
    },
    {
  id: "13", form: "Scroll?", substrate_material: "Leather"
    },
    {
  id: "14", form: "Scroll?  Booklet?", substrate_material: "Paper"
    },
    {
  id: "15", form: "Scroll\?  Booklet\?", substrate_material: "Paper"
    },
    {
  id: "16", form: "Codex (likely Bifolio)", substrate_material: "Paper?", type: "image"
    },
    {
  id: "17", form: "Scroll?  Codex?", substrate_material: "Papyrus? Parchment?"
    },
    {
  id: "18", form: "Pothi", substrate_material: "Palm Leaf (Talipot)"
    },
    {
  id: "19", form: "Scroll\?  Codex\?", substrate_material: "Papyrus"
    },
    {
  id: "20", form: "Pothi", substrate_material: "Birchbark"
    },
    {
  id: "21", form: "Pothi?", substrate_material: "Palm Leaf? Birchbark?"
    },
    {
  id: "22", form: "Tablet", substrate_material: "Wood?"
    },
    {
  id: "23", form: "Scroll?", substrate_material: "Silk"
    },
    {
  id: "24", form: "Codex?", substrate_material: "Palm Leaf"
    },
    {
  id: "25", form: "Leaf", substrate_material: "Palm Leaf"
    },
    {
  id: "26", form: "Leaf", substrate_material: "Olive Leaf"
    },
    {
  id: "27", form: "Folded Tablet", substrate_material: "Wood and Wax?"
    },
    {
  id: "28", form: "Inscriptions?  Rolls?", substrate_material: "Stone?  Papyrus?"
    },
    {
  id: "29", form: "Scroll?  Tablet?  Codex?", substrate_material: "Lead"
    },
    {
  id: "30", form: "Scroll", substrate_material: "Papyrus or Parchment"
    },
    {
  id: "31", form: "Tablet, Scroll", substrate_material: "Wood, Wax, Papyrus", type: "image"
    },
    {
  id: "32", form: "Tablet", substrate_material: "Wood, Wax", type: "image"
    },
    {
  id: "33", form: "Inscription; Scroll", substrate_material: "Stone; Papyrus or Parchment"
    },
    {
  id: "34", form: "Codex", substrate_material: "Paper or Parchment", type: "image"
    },
    {
  id: "35", form: "", substrate_material: ""
    },
    {
  id: "36", form: "", substrate_material: ""
    },
    {
  id: "37", form: "", substrate_material: ""
    },
    {
  id: "38", form: "", substrate_material: ""
    },
    {
  id: "39", form: "", substrate_material: ""
    },
    {
  id: "40", form: "", substrate_material: ""
    }
];
console.log(witness_forms_substrates);
