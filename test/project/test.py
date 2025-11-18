from client import TemperatureServiceClient
from random import randrange
import time

client = TemperatureServiceClient()

id_length = 8
min_value = 10**(id_length-1)
max_value = 10**id_length - 1

while True:
    randomId = randrange(min_value, max_value + 1)
    client.sendTemperatureChange(randomId)
    print("New temperature detected " + str(randomId) + " sent to temperature/changed")
    time.sleep(1)