#Handle baking time

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int baking time already elapsed.
    :return: int remaining bake time derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(layers):
    """Calculate the time to prepare the layers

    :param layers: int total numbers of layers being cooked
    """

    return layers * PREPARATION_TIME

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Determine that time that has elapsed in minutes

    :param number_of_layers: int total number of layers being cooked
    :param elapsed_bake_time: int time it has taken so far baking

    """

    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
