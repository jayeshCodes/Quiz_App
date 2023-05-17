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

from flask import Flask

app = Flask(__name__)

@app.route('/CAT/<boolean:res>')


def CAT(res):
    est_theta = estimator.estimate(items=items, administered_items=administered_items, response_vector=responses, est_theta=est_theta)
    print('Estimated proficiency, given answered items:', est_theta)

    #stop check
    _stop = stopper.stop(administered_items=items[administered_items], theta=est_theta)
    print('Should the test be stopped:', _stop)
    print(see(est_theta,items[administered_items]))

    if(_stop == "True"):
        return "STOP"
    else:
        #selection
        item_index = selector.select(items=items, administered_items=administered_items, est_theta=est_theta)
        print('Next item to be administered:', item_index)
        #add the administered question
        administered_items.append(item_index)
        #maybe put this at the begining otherwise administered_items will be one bigger than responses
        responses.append(res)
        return str(item_index)
    
if __name__ == "__main__":
    app.run(debug=True)