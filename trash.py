import json
# Next we want to open the JSON file. We tag this file as
# "r" read only because we are only going to look at the data.
tweetFile = open("tweets_small.json", "r")

# We use the JSON library to get data from the file as JSON data.
tweetData = json.load(tweetFile)

tweetFile.close()

# print(type(tweetData))

tweetData [0]["text"]
tweetlist = []
for i in range(len(tweetData)):
	if "text" in tweetData[i]:
		tweetlist.append(tweetData[i]['text'])
# print(list)

import json
from textblob import TextBlob
import matplotlib.pyplot as plt

#Get the JSON data
tweetFile = open("tweets_small.json", "r")
tweetData = json.load(tweetFile)
tweetFile.close()
