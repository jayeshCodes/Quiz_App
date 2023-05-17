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


def item_generator():
    bank_size = 100
    items = generate_item_bank(bank_size, itemtype='3PL')

    initializer = FixedPointInitializer(0)
    selector = MaxInfoSelector()
    estimator = NumericalSearchEstimator()
    stopper = MinErrorStopper(0.2)

    # initialization
    est_theta = initializer.initialize()
    print('Examinee initial proficiency:', est_theta)
