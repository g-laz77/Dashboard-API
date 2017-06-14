from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import json
import sentiment_mod as s

#consumer key, consumer secret, access token, access secret.
ckey="jFeK60kMElaWen8B8d28JpCLb"
csecret="vgjyqhro3HNcOFvhw89XOjrLfudLG7ERlaNfGC0OBAcTUt8UxB"
atoken="2759142285-zSGf1fjn7xyaH9BOuE9FNokM0ZW5f4MpmVWEGQq"
asecret="pCEepyB3iX3rdkQ9mCkf9EN5o9MWTcgoDchXslFxJwwxE"

class listener(StreamListener):

    def on_data(self, data):
        all_data = json.loads(data)
        tweet = all_data["text"]
        username = all_data["user"]["screen_name"]
        print((username,tweet))
        return(True)

    def on_error(self, status):
        print(status)

auth = OAuthHandler(ckey, csecret)
auth.set_access_token(atoken, asecret)

twitterStream = Stream(auth, listener())
twitterStream.filter(track=["authbase.net"])