# this function generates an item bank, in case the user cannot provide one
from catsim.cat import generate_item_bank
# simulation package contains the Simulator and all abstract classes
from catsim.simulation import *
# initialization package contains different initial proficiency estimation strategies
from catsim.initialization import *
# selection package contains different item selection strategies
from catsim.selection import *
# estimation package contains different proficiency estimation methods
from catsim.estimation import *
# stopping package contains different stopping criteria for the CAT
from catsim.stopping import *
import catsim.plot as catplot
from catsim.irt import icc
from catsim.irt import detect_model
from catsim.irt import see

import random
import numpy as np
from flask import Flask, jsonify
import json
from flask_cors import CORS


jsonstr = '{"response_code":0,"results":[{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Which%20Apollo%20mission%20was%20the%20first%20one%20to%20land%20on%20the%20Moon%3F","correct_answer":"Apollo%2011","incorrect_answers":["Apollo%2010","Apollo%209","Apollo%2013"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Which%20of%20the%20following%20bones%20is%20not%20in%20the%20leg%3F","correct_answer":"Radius","incorrect_answers":["Patella","Tibia","Fibula%20"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20is%20considered%20the%20rarist%20form%20of%20color%20blindness%3F","correct_answer":"Blue","incorrect_answers":["Red","Green","Purple"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20of%20the%20following%20liquids%20is%20least%20viscous%3F%20Assume%20temperature%20is%2025%C2%B0C.","correct_answer":"Acetone","incorrect_answers":["Water","Mercury","Benzene"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Which%20of%20these%20bones%20is%20hardest%20to%20break%3F","correct_answer":"Femur","incorrect_answers":["Cranium","Humerus","Tibia"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20is%20the%20chemical%20name%20of%20H2O%3F","correct_answer":"Dihydrogen%20Monoxide","incorrect_answers":["Ammonium%20chloride","Anhydrous%20Sodium%20Carbonate","Manganese%20dioxide"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"How%20many%20objects%20are%20equivalent%20to%20one%20mole%3F","correct_answer":"6.022%20x%2010%5E23","incorrect_answers":["6.002%20x%2010%5E22","6.022%20x%2010%5E22","6.002%20x%2010%5E23"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"What%20does%20the%20letter%20%27S%27%20stand%20for%20in%20%27NASA%27%3F","correct_answer":"Space","incorrect_answers":["Science","Society","Star"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"The%20moons%2C%20Miranda%2C%20Ariel%2C%20Umbriel%2C%20Titania%20and%20Oberon%20orbit%20which%20planet%3F","correct_answer":"Uranus","incorrect_answers":["Jupiter","Venus","Neptune"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Rhinoplasty%20is%20a%20surgical%20procedure%20on%20what%20part%20of%20the%20human%20body%3F","correct_answer":"Nose","incorrect_answers":["Ears","Chin","Neck"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Which%20type%20of%20rock%20is%20created%20by%20intense%20heat%20AND%20pressure%3F","correct_answer":"Metamorphic","incorrect_answers":["Sedimentary","Igneous","Diamond"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"The%20%27Islets%20of%20Langerhans%27%20is%20found%20in%20which%20human%20organ%3F","correct_answer":"Pancreas","incorrect_answers":["Kidney","Liver","Brain"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"What%20is%20the%20first%20element%20on%20the%20periodic%20table%3F","correct_answer":"Hydrogen","incorrect_answers":["Helium","Oxygen","Lithium"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"How%20many%20degrees%20Fahrenheit%20is%20100%20degrees%20Celsius%3F%20","correct_answer":"212","incorrect_answers":["326","100","451"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"Which%20chemical%20element%20has%20the%20lowest%20boiling%20point%3F","correct_answer":"Helium","incorrect_answers":["Hydrogen","Neon","Nitrogen"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"An%20organic%20compound%20is%20considered%20an%20alcohol%20if%20it%20has%20what%20functional%20group%3F","correct_answer":"Hydroxyl","incorrect_answers":["Carbonyl","Alkyl","Aldehyde"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"All%20of%20the%20following%20human%20genetic%20haplogroup%20names%20are%20shared%20between%20Y-chromosome%20and%20mitochondrial%20DNA%20haplogroups%20EXCEPT%3A","correct_answer":"Haplogroup%20U","incorrect_answers":["Haplogroup%20L","Haplogroup%20T","Haplogroup%20J"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"How%20many%20officially%20recognized%20dwarf%20planets%20in%20the%20solar%20system%20are%20named%20after%20Polynesian%20deities%3F","correct_answer":"2","incorrect_answers":["0","1","5"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20is%20the%20scientific%20name%20of%20the%20knee%20cap%3F","correct_answer":"Patella","incorrect_answers":["Femur","Foramen%20Magnum","Scapula"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"If%20you%20planted%20the%20seeds%20of%20Quercus%20robur%20what%20would%20grow%3F","correct_answer":"Trees","incorrect_answers":["Flowers","Vegtables","Grains"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20is%20isobutylphenylpropanoic%20acid%20more%20commonly%20known%20as%3F","correct_answer":"Ibuprofen","incorrect_answers":["Morphine","Ketamine","Aspirin"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20polymer%20is%20used%20to%20make%20CDs%2C%20safety%20goggles%20and%20riot%20shields%3F","correct_answer":"Polycarbonate","incorrect_answers":["Rubber","Nylon","Bakelite"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20is%20the%20atomic%20number%20of%20the%20element%20Strontium%3F","correct_answer":"38","incorrect_answers":["73","47","11"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"Which%20of%20these%20is%20NOT%20a%20part%20of%20the%20structure%20of%20a%20typical%20neuron%3F","correct_answer":"Islets%20of%20Langerhans","incorrect_answers":["Node%20of%20Ranvier","Schwann%20cell","Myelin%20sheath"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20of%20the%20following%20is%20NOT%20a%20real%20element%3F","correct_answer":"Vitrainium","incorrect_answers":["Praseodymium","Hassium","Lutetium"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20one%20of%20these%20is%20scientific%20term%20for%20%22Brain%20Freeze%22%3F","correct_answer":"Sphenopalatine%20Ganglioneuralgia","incorrect_answers":["Hyacinthoides%20Italica","Amaranthus%20Retroflexus","Amblyomma%20Americanum"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"%22The%20Big%20Bang%20Theory%22%20was%20first%20theorized%20by%20a%20priest%20of%20what%20religious%20ideology%3F","correct_answer":"Catholic","incorrect_answers":["Christian","Jewish","Islamic"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"After%20which%20Danish%20city%20is%20the%2072th%20element%20on%20the%20periodic%20table%20named%3F","correct_answer":"Copenhagen","incorrect_answers":["Odense","Herning","Skagen"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20does%20the%20yellow%20diamond%20on%20the%20NFPA%20704%20fire%20diamond%20represent%3F","correct_answer":"Reactivity","incorrect_answers":["Health","Flammability","Radioactivity"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20moon%20is%20the%20only%20satellite%20in%20our%20solar%20system%20to%20possess%20a%20dense%20atmosphere%3F","correct_answer":"Titan","incorrect_answers":["Europa","Miranda","Callisto"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"A%20comet%27s%20gaseous%20envelope%20%28which%20creates%20the%20tail%29%20is%20called%20what%3F","correct_answer":"The%20coma","incorrect_answers":["The%20wake","The%20backwash","The%20ablative"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Human%20cells%20typically%20have%20how%20many%20copies%20of%20each%20gene%3F","correct_answer":"2","incorrect_answers":["1","4","3"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"Myopia%20is%20the%20scientific%20term%20for%20which%20condition%3F","correct_answer":"Shortsightedness","incorrect_answers":["Farsightedness","Double%20Vision","Clouded%20Vision"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20of%20these%20is%20a%20stop%20codon%20in%20DNA%3F","correct_answer":"TAA","incorrect_answers":["ACT","ACA","GTA"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"Which%20of%20the%20following%20plastic%20is%20commonly%20used%20for%20window%20frames%2C%20gutters%20and%20drain%20pipes%3F","correct_answer":"Polyvinylchloride%20%28PVC%29%20","incorrect_answers":["Polyethylene%20%28PE%29","Polypropylene%20%28PP%29","Polystyrene%20%28PS%29"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"At%20what%20temperature%20does%20water%20boil%3F","correct_answer":"212%C2%B0F","incorrect_answers":["200%C2%B0F","181%C2%B0F","178%C2%B0F"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20does%20the%20term%20%22isolation%22%20refer%20to%20in%20microbiology%3F","correct_answer":"The%20separation%20of%20a%20strain%20from%20a%20natural%2C%20mixed%20population%20of%20living%20microbes","incorrect_answers":["A%20lack%20of%20nutrition%20in%20microenviroments","The%20nitrogen%20level%20in%20soil","Testing%20effects%20of%20certain%20microorganisms%20in%20an%20isolated%20enviroments%2C%20such%20as%20caves"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20is%20the%20unit%20of%20electrical%20inductance%3F","correct_answer":"Henry","incorrect_answers":["Weber","Coulomb","Mho"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20are%20human%20nails%20made%20of%3F","correct_answer":"Keratin","incorrect_answers":["Bone","Chitin","Calcium"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20do%20you%20study%20if%20you%20are%20studying%20entomology%3F","correct_answer":"Insects","incorrect_answers":["Humans","the%20Brain","Fish"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"Approximately%20how%20long%20is%20a%20year%20on%20Uranus%3F","correct_answer":"84%20Earth%20years","incorrect_answers":["47%20Earth%20years","62%20Earth%20years","109%20Earth%20years"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20is%20the%20half-life%20of%20Uranium-235%3F","correct_answer":"703%2C800%2C000%20years","incorrect_answers":["4%2C300%2C400%2C000%20years","1%2C260%2C900%2C000%20years","Uranium-235%20is%20a%20stable%20isotope"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"An%20organism%20described%20as%20%22heliotropic%22%20has%20a%20tendancy%20to%20move%20towards%20which%20of%20these%20things%3F","correct_answer":"Light","incorrect_answers":["Water","Trees","Pollen"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"How%20many%20protons%20are%20in%20an%20oxygen%20atom%3F","correct_answer":"Eight","incorrect_answers":["Four","Two","Six"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20physics%20principle%20relates%20the%20net%20electric%20flux%20out%20of%20a%20closed%20surface%20to%20the%20charge%20enclosed%20by%20that%20surface%3F","correct_answer":"Gauss%27s%20Law","incorrect_answers":["Faraday%27s%20Law","Ampere%27s%20Law","Biot-Savart%20Law"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20was%20the%20first%20organic%20compound%20to%20be%20synthesized%20from%20inorganic%20compounds%3F","correct_answer":"Urea","incorrect_answers":["Propane","Ethanol","Formaldehyde"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"hard","question":"What%20is%20the%20most%20potent%20toxin%20known%3F","correct_answer":"Botulinum%20toxin","incorrect_answers":["Ricin","Cyanide","Asbestos"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"What%20is%20Hypernatremia%3F","correct_answer":"Increase%20in%20blood%20sodium","incorrect_answers":["Decrease%20in%20blood%20potassium","Increase%20in%20blood%20glucose","Decrease%20in%20blood%20iron"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"medium","question":"How%20old%20is%20the%20universe%3F","correct_answer":"13.8%20Billion%20Years","incorrect_answers":["4.5%20Billion%20Years","7.9%20Billion%20Years","16.2%20Billion%20Years"]},{"category":"Science%20%26%20Nature","type":"multiple","difficulty":"easy","question":"Who%20discovered%20the%20Law%20of%20Gravity%3F","correct_answer":"Sir%20Isaac%20Newton","incorrect_answers":["Galileo%20Galilei","Charles%20Darwin","Albert%20Einstein"]}]}'

jsonstr2 = '{"response_code":0,"results":[{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"The%20Harvard%20architecture%20for%20micro-controllers%20added%20which%20additional%20bus%3F","correct_answer":"Instruction","incorrect_answers":["Address","Data","Control"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"What%20does%20CPU%20stand%20for%3F","correct_answer":"Central%20Processing%20Unit","incorrect_answers":["Central%20Process%20Unit","Computer%20Personal%20Unit","Central%20Processor%20Unit"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20internet%20company%20began%20life%20as%20an%20online%20bookstore%20called%20%27Cadabra%27%3F","correct_answer":"Amazon","incorrect_answers":["eBay","Overstock","Shopify"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"What%20does%20the%20%22MP%22%20stand%20for%20in%20MP3%3F","correct_answer":"Moving%20Picture","incorrect_answers":["Music%20Player","Multi%20Pass","Micro%20Point"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Whistler%20was%20the%20codename%20of%20this%20Microsoft%20Operating%20System.","correct_answer":"Windows%20XP","incorrect_answers":["Windows%202000","Windows%207","Windows%2095"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Moore%27s%20law%20originally%20stated%20that%20the%20number%20of%20transistors%20on%20a%20microprocessor%20chip%20would%20double%20every...","correct_answer":"Year","incorrect_answers":["Four%20Years","Two%20Years","Eight%20Years"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"The%20programming%20language%20%27Swift%27%20was%20created%20to%20replace%20what%20other%20programming%20language%3F","correct_answer":"Objective-C","incorrect_answers":["C%23","Ruby","C%2B%2B"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"HTML%20is%20what%20type%20of%20language%3F","correct_answer":"Markup%20Language","incorrect_answers":["Macro%20Language","Programming%20Language","Scripting%20Language"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20five%20letter%20word%20is%20the%20motto%20of%20the%20IBM%20Computer%20company%3F","correct_answer":"Think","incorrect_answers":["Click","Logic","Pixel"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"Which%20computer%20hardware%20device%20provides%20an%20interface%20for%20all%20other%20connected%20devices%20to%20communicate%3F","correct_answer":"Motherboard","incorrect_answers":["Central%20Processing%20Unit","Hard%20Disk%20Drive","Random%20Access%20Memory"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"On%20which%20computer%20hardware%20device%20is%20the%20BIOS%20chip%20located%3F","correct_answer":"Motherboard","incorrect_answers":["Hard%20Disk%20Drive","Central%20Processing%20Unit","Graphics%20Processing%20Unit"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20of%20the%20following%20languages%20is%20used%20as%20a%20scripting%20language%20in%20the%20Unity%203D%20game%20engine%3F","correct_answer":"C%23","incorrect_answers":["Java","C%2B%2B","Objective-C"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"The%20series%20of%20the%20Intel%20HD%20graphics%20generation%20succeeding%20that%20of%20the%205000%20and%206000%20series%20%28Broadwell%29%20is%20called%3A","correct_answer":"HD%20Graphics%20500","incorrect_answers":["HD%20Graphics%20700%20","HD%20Graphics%20600","HD%20Graphics%207000"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"In%20web%20design%2C%20what%20does%20CSS%20stand%20for%3F","correct_answer":"Cascading%20Style%20Sheet","incorrect_answers":["Counter%20Strike%3A%20Source","Corrective%20Style%20Sheet","Computer%20Style%20Sheet"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20of%20these%20is%20the%20name%20for%20the%20failed%20key%20escrow%20device%20introduced%20by%20the%20National%20Security%20Agency%20in%201993%3F","correct_answer":"Clipper%20Chip","incorrect_answers":["Enigma%20Machine","Skipjack","Nautilus"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"What%20is%20the%20code%20name%20for%20the%20mobile%20operating%20system%20Android%207.0%3F","correct_answer":"Nougat","incorrect_answers":["Ice%20Cream%20Sandwich","Jelly%20Bean","Marshmallow"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"The%20internet%20domain%20.fm%20is%20the%20country-code%20top-level%20domain%20for%20which%20Pacific%20Ocean%20island%20nation%3F","correct_answer":"Micronesia","incorrect_answers":["Fiji","Tuvalu","Marshall%20Islands"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Generally%2C%20which%20component%20of%20a%20computer%20draws%20the%20most%20power%3F","correct_answer":"Video%20Card","incorrect_answers":["Hard%20Drive","Processor","Power%20Supply"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"How%20many%20cores%20does%20the%20Intel%20i7-6950X%20have%3F","correct_answer":"10","incorrect_answers":["12","8","4"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20one%20of%20these%20is%20not%20an%20official%20development%20name%20for%20a%20Ubuntu%20release%3F","correct_answer":"Mystic%20Mansion","incorrect_answers":["Trusty%20Tahr","Utopic%20Unicorn","Wily%20Werewolf"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20is%20the%20name%20of%20the%20default%20theme%20that%20is%20installed%20with%20Windows%20XP%3F","correct_answer":"Luna","incorrect_answers":["Neptune","Whistler","Bliss"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"On%20Twitter%2C%20what%20was%20the%20original%20character%20limit%20for%20a%20Tweet%3F","correct_answer":"140","incorrect_answers":["120","160","100"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"In%20CSS%2C%20which%20of%20these%20values%20CANNOT%20be%20used%20with%20the%20%22position%22%20property%3F","correct_answer":"center","incorrect_answers":["static","absolute","relative"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"In%20%22Hexadecimal%22%2C%20what%20color%20would%20be%20displayed%20from%20the%20color%20code%3F%20%22%2300FF00%22%3F","correct_answer":"Green","incorrect_answers":["Red","Blue","Yellow"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20is%20the%20correct%20term%20for%20the%20metal%20object%20in%20between%20the%20CPU%20and%20the%20CPU%20fan%20within%20a%20computer%20system%3F","correct_answer":"Heat%20Sink","incorrect_answers":["CPU%20Vent","Temperature%20Decipator","Heat%20Vent"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"Which%20computer%20language%20would%20you%20associate%20Django%20framework%20with%3F","correct_answer":"Python","incorrect_answers":["C%23","C%2B%2B","Java"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20of%20these%20programming%20languages%20is%20a%20low-level%20language%3F","correct_answer":"Assembly","incorrect_answers":["Python","C%23","Pascal"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20does%20%22LCD%22%20stand%20for%3F","correct_answer":"Liquid%20Crystal%20Display","incorrect_answers":["Language%20Control%20Design","Last%20Common%20Difference","Long%20Continuous%20Design"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"Who%20is%20the%20original%20author%20of%20the%20realtime%20physics%20engine%20called%20PhysX%3F","correct_answer":"NovodeX","incorrect_answers":["Ageia","Nvidia","AMD"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20of%20the%20following%20is%20a%20personal%20computer%20made%20by%20the%20Japanese%20company%20Fujitsu%3F","correct_answer":"FM-7","incorrect_answers":["PC-9801","Xmillennium%20","MSX"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"Which%20data%20structure%20does%20FILO%20apply%20to%3F","correct_answer":"Stack","incorrect_answers":["Queue","Heap","Tree"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20does%20the%20term%20GPU%20stand%20for%3F","correct_answer":"Graphics%20Processing%20Unit","incorrect_answers":["Gaming%20Processor%20Unit","Graphite%20Producing%20Unit","Graphical%20Proprietary%20Unit"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"What%20is%20the%20name%20of%20the%20process%20that%20sends%20one%20qubit%20of%20information%20using%20two%20bits%20of%20classical%20information%3F","correct_answer":"Quantum%20Teleportation","incorrect_answers":["Super%20Dense%20Coding","Quantum%20Entanglement","Quantum%20Programming"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20is%20the%20main%20CPU%20is%20the%20Sega%20Mega%20Drive%20%2F%20Sega%20Genesis%3F","correct_answer":"Motorola%2068000","incorrect_answers":["Zilog%20Z80","Yamaha%20YM2612","Intel%208088"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"This%20mobile%20OS%20held%20the%20largest%20market%20share%20in%202012.","correct_answer":"iOS","incorrect_answers":["Android","BlackBerry","Symbian"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"What%20does%20the%20International%20System%20of%20Quantities%20refer%201024%20bytes%20as%3F","correct_answer":"Kibibyte","incorrect_answers":["Kylobyte","Kilobyte","Kelobyte"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"When%20did%20the%20online%20streaming%20service%20%22Mixer%22%20launch%3F","correct_answer":"2016","incorrect_answers":["2013","2009","2011"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Laserjet%20and%20inkjet%20printers%20are%20both%20examples%20of%20what%20type%20of%20printer%3F","correct_answer":"Non-impact%20printer","incorrect_answers":["Impact%20printer","Daisywheel%20printer","Dot%20matrix%20printer"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"How%20many%20values%20can%20a%20single%20byte%20represent%3F","correct_answer":"256","incorrect_answers":["8","1","1024"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"What%20does%20the%20term%20MIME%20stand%20for%2C%20in%20regards%20to%20computing%3F","correct_answer":"Multipurpose%20Internet%20Mail%20Extensions","incorrect_answers":["Mail%20Internet%20Mail%20Exchange","Multipurpose%20Interleave%20Mail%20Exchange","Mail%20Interleave%20Method%20Exchange"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"Released%20in%202001%2C%20the%20first%20edition%20of%20Apple%27s%20Mac%20OS%20X%20operating%20system%20%28version%2010.0%29%20was%20given%20what%20animal%20code%20name%3F","correct_answer":"Cheetah","incorrect_answers":["Puma","Tiger","Leopard"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"easy","question":"The%20C%20programming%20language%20was%20created%20by%20this%20American%20computer%20scientist.%20","correct_answer":"Dennis%20Ritchie","incorrect_answers":["Tim%20Berners%20Lee","al-Khw%C4%81rizm%C4%AB","Willis%20Ware"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Which%20programming%20language%20was%20developed%20by%20Sun%20Microsystems%20in%201995%3F","correct_answer":"Java","incorrect_answers":["Python","Solaris%20OS","C%2B%2B"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Approximately%20how%20many%20Apple%20I%20personal%20computers%20were%20created%3F","correct_answer":"200","incorrect_answers":["100","500","1000"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"In%20programming%2C%20what%20do%20you%20call%20functions%20with%20the%20same%20name%20but%20different%20implementations%3F","correct_answer":"Overloading","incorrect_answers":["Overriding","Abstracting","Inheriting"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"What%20major%20programming%20language%20does%20Unreal%20Engine%204%20use%3F","correct_answer":"C%2B%2B","incorrect_answers":["Assembly","C%23","ECMAScript"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"The%20teapot%20often%20seen%20in%20many%203D%20modeling%20applications%20is%20called%20what%3F","correct_answer":"Utah%20Teapot","incorrect_answers":["Pixar%20Teapot","3D%20Teapot","Tennessee%20Teapot"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"Unix%20Time%20is%20defined%20as%20the%20number%20of%20seconds%20that%20have%20elapsed%20since%20when%3F","correct_answer":"Midnight%2C%20January%201%2C%201970","incorrect_answers":["Midnight%2C%20July%204%2C%201976","Midnight%20on%20the%20creator%20of%20Unix%27s%20birthday","Midnight%2C%20July%204%2C%201980"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"medium","question":"How%20many%20bits%20make%20up%20the%20significand%20portion%20of%20a%20single%20precision%20floating%20point%20number%3F","correct_answer":"23","incorrect_answers":["8","53","15"]},{"category":"Science%3A%20Computers","type":"multiple","difficulty":"hard","question":"Which%20of%20these%20Cherry%20MX%20mechanical%20keyboard%20switches%20is%20both%20tactile%20and%20clicky%3F","correct_answer":"Cherry%20MX%20Blue","incorrect_answers":["Cherry%20MX%20Black","Cherry%20MX%20Red","Cherry%20MX%20Brown"]}]}'
lst = json.loads(jsonstr)
l = [(k, v) for k, v in lst.items()]
list1 = list(l[1])[1]
lst = json.loads(jsonstr2)
l = [(k, v) for k, v in lst.items()]
list2 = list(l[1])[1]
list3 = list1+list2
# print(list3[99])

app = Flask(__name__)
items = np.array([[ 0.84448257,  0.28413181,  0.29585899,  1.        ],
       [ 1.51512205, -0.30435212,  0.2345062 ,  1.        ],
       [ 1.03191339, -0.80210546,  0.26907641,  1.        ],
       [ 1.10329196,  1.06031284,  0.25099689,  1.        ],
       [ 1.47823992,  1.00740169,  0.26276354,  1.        ],
       [ 0.94546695,  0.85706527,  0.24999966,  1.        ],
       [ 1.30750747,  1.32243398,  0.26509093,  1.        ],
       [ 0.99853685, -0.14138091,  0.23304203,  1.        ],
       [ 1.1156649 , -0.00323729,  0.25220213,  1.        ],
       [ 0.87599528, -0.4691748 ,  0.22294082,  1.        ],
       [ 1.26816688,  0.66984918,  0.23873347,  1.        ],
       [ 1.28249497, -1.55527356,  0.23879264,  1.        ],
       [ 1.06210766,  0.44761852,  0.249026  ,  1.        ],
       [ 1.23110713, -0.47246086,  0.2754557 ,  1.        ],
       [ 1.14559679, -0.94658667,  0.26336522,  1.        ],
       [ 1.67633754,  1.97531416,  0.24168424,  1.        ],
       [ 1.65626294, -0.14025325,  0.2336463 ,  1.        ],
       [ 1.00809183,  0.59866443,  0.2416532 ,  1.        ],
       [ 1.11146667,  0.24274502,  0.26929984,  1.        ],
       [ 1.07579491, -0.10709898,  0.28039906,  1.        ],
       [ 0.80303816,  0.04687937,  0.25420696,  1.        ],
       [ 1.32254124,  0.36981417,  0.25143765,  1.        ],
       [ 0.96150279,  0.42704405,  0.26450368,  1.        ],
       [ 0.87861643,  0.34593781,  0.24351657,  1.        ],
       [ 1.58417942,  0.15683107,  0.22769114,  1.        ],
       [ 1.25134049, -0.69819879,  0.24323778,  1.        ],
       [ 1.46890943,  0.93821361,  0.25046337,  1.        ],
       [ 1.12351623, -1.64138869,  0.22833982,  1.        ],
       [ 1.24059664,  0.35216787,  0.26734392,  1.        ],
       [ 1.45588085,  0.47480428,  0.24106642,  1.        ],
       [ 1.4906895 ,  0.90629475,  0.21920988,  1.        ],
       [ 1.60274684, -0.53696739,  0.22424402,  1.        ],
       [ 1.2338694 ,  1.29645915,  0.24276487,  1.        ],
       [ 1.11664747, -1.13344373,  0.24340946,  1.        ],
       [ 1.29845256, -2.80474497,  0.25795654,  1.        ],
       [ 1.11259285,  0.43849539,  0.26258938,  1.        ],
       [ 1.76044835, -1.61677994,  0.22879802,  1.        ],
       [ 1.17571861, -0.25491806,  0.23535299,  1.        ],
       [ 1.25200225,  2.5598911 ,  0.24313653,  1.        ],
       [ 1.0274479 ,  1.44361349,  0.24914762,  1.        ],
       [ 0.89465612,  0.88481076,  0.23923068,  1.        ],
       [ 0.97285832, -1.75065296,  0.28612863,  1.        ],
       [ 1.27853407,  1.3297416 ,  0.26004105,  1.        ],
       [ 0.74779227, -0.80947241,  0.26745307,  1.        ],
       [ 1.15776666,  1.82048428,  0.27270427,  1.        ],
       [ 1.4512968 ,  0.53953817,  0.24322742,  1.        ],
       [ 1.10862899, -1.37812873,  0.25222869,  1.        ],
       [ 0.66673342, -0.3933393 ,  0.26472938,  1.        ],
       [ 1.24165045,  0.23459691,  0.24072233,  1.        ],
       [ 1.03659966,  0.69445551,  0.24962176,  1.        ],
       [ 1.12570624, -1.03757174,  0.2485137 ,  1.        ],
       [ 0.84964647, -0.49582021,  0.27987697,  1.        ],
       [ 1.36556461,  0.38620293,  0.26673208,  1.        ],
       [ 0.73919111, -0.3211705 ,  0.25395467,  1.        ],
       [ 1.18823833,  1.2790494 ,  0.27416265,  1.        ],
       [ 1.10679357, -0.92958372,  0.23930428,  1.        ],
       [ 0.88503293,  0.36073342,  0.23184755,  1.        ],
       [ 1.16670247,  0.27080034,  0.25289889,  1.        ],
       [ 0.98264113,  0.9046053 ,  0.25731167,  1.        ],
       [ 0.93632483,  0.28339922,  0.23441219,  1.        ],
       [ 0.87072452,  0.4065393 ,  0.24246442,  1.        ],
       [ 1.85591463,  0.9427517 ,  0.26701658,  1.        ],
       [ 0.78113442,  0.2908455 ,  0.25236393,  1.        ],
       [ 1.40357533, -0.31896458,  0.26765526,  1.        ],
       [ 1.08864237,  0.53216048,  0.24552981,  1.        ],
       [ 1.01817132, -0.10776822,  0.28324381,  1.        ],
       [ 1.32815869, -0.81458464,  0.22496874,  1.        ],
       [ 0.78235268, -0.60195964,  0.23589149,  1.        ],
       [ 0.95980525,  0.08850809,  0.26015524,  1.        ],
       [ 1.06392111, -1.17296951,  0.25979491,  1.        ],
       [ 0.74268158,  1.23186219,  0.25562857,  1.        ],
       [ 1.23978144, -1.53513659,  0.23311311,  1.        ],
       [ 1.72625639,  0.50251239,  0.26610059,  1.        ],
       [ 1.54800962, -0.31261203,  0.23986938,  1.        ],
       [ 0.73135681, -0.28779279,  0.26432137,  1.        ],
       [ 1.52496934,  0.23153002,  0.23194539,  1.        ],
       [ 0.78113577,  0.37105264,  0.24262441,  1.        ],
       [ 1.07610441,  1.26343873,  0.26262298,  1.        ],
       [ 0.79650311,  0.43113951,  0.21719139,  1.        ],
       [ 1.74418561,  0.20334588,  0.2605299 ,  1.        ],
       [ 1.07535195, -0.94239901,  0.26178323,  1.        ],
       [ 1.16863628, -1.51622451,  0.2634553 ,  1.        ],
       [ 1.45852026, -0.37800773,  0.23296212,  1.        ],
       [ 1.3197124 , -0.47390232,  0.21954136,  1.        ],
       [ 1.17677071, -0.84697512,  0.23348321,  1.        ],
       [ 1.22203447,  0.51491347,  0.27770865,  1.        ],
       [ 0.96505877, -1.87462625,  0.25424703,  1.        ],
       [ 1.52102959,  1.21276638,  0.1970985 ,  1.        ],
       [ 1.2724198 ,  1.56479611,  0.22121951,  1.        ],
       [ 1.41768548, -0.14508061,  0.23951746,  1.        ],
       [ 1.00784963,  0.2755894 ,  0.26458097,  1.        ],
       [ 0.7961282 , -1.4930145 ,  0.23643077,  1.        ],
       [ 1.19807037, -1.91531043,  0.27243759,  1.        ],
       [ 1.40758922, -1.46066612,  0.26094395,  1.        ],
       [ 0.94610252, -1.95609786,  0.23815658,  1.        ],
       [ 1.36706167, -0.99775678,  0.20972772,  1.        ],
       [ 1.23814369,  0.64211591,  0.23475013,  1.        ],
       [ 1.06015891,  0.52894668,  0.22538959,  1.        ],
       [ 0.95490318, -0.08232356,  0.28301505,  1.        ],
       [ 0.69743521,  0.06328826,  0.23322454,  1.        ]])
administered_items = []
responses = []
est_theta = 0.0
flag = False
item_index = 0
selector = MaxInfoSelector()
estimator = NumericalSearchEstimator()
stopper = MinErrorStopper(0.2)

# Select a random question to be administered at the begining of the test
@app.route('/start')
def start():
    global item_index
    item_index = random.randrange(0,99)
    administered_items.append(item_index)
    return administered_items

@app.route('/CAT/<res>', methods = ['POST'])
def CAT(res):
    global items, administered_items, responses, est_theta, flag, item_index

    if res.lower() == 'true':
        responses.append(True)
    else:
        responses.append(False)

    # Estimate proficiency
    est_theta = estimator.estimate(items=items, administered_items=administered_items, response_vector=responses, est_theta=est_theta)
    print('Estimated proficiency, given answered items:', est_theta)

    # Stop check
    _stop = stopper.stop(administered_items=items[administered_items], theta=est_theta)
    print('Should the test be stopped:', _stop)
    print(see(est_theta, items[administered_items]))

    if _stop:
        return "STOP"
    else:
        # Item selection
        item_index = selector.select(items=items, administered_items=administered_items, est_theta=est_theta)
        print('Next item to be administered:', item_index)
        # Add the administered question
        administered_items.append(item_index)
        # Append the response
        # responses.append(res)
        print(responses)
        return str(item_index)
    
@app.route('/question')
def question():
    global item_index, flag
    if(flag == False):
        start()
        flag = True
    print("Question",item_index)
    # print(type(list3[item_index]))
    json_object = jsonify(list3[item_index])
    return json_object
    
CORS(app)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)