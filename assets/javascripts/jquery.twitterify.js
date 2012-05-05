(function($) {

  $.fn.twitterify = function (options) {

    var defaults;

    defaults = {
      'count': 5,
      'include_retweets': true,
      'exclude_replies': true
    };
    options = $.extend(defaults, options);

    return this.each(function () {

      var self, twitterifier;

      self = $(this);
      twitterifier = new Twitterifier(self, options);
      twitterifier.init();
    });
  };

  var Twitterifier = function (container, options) {

    var LOADING_CLASS, HTTP_METHOD, DATA_TYPE, TIMELINE_URL, ANIMATION_DURATION, tweetList;

    LOADING_CLASS = 'loading';
    HTTP_METHOD = 'GET';
    DATA_TYPE = 'jsonp';
    TIMELINE_URL = 'http://api.twitter.com/1/statuses/user_timeline.json';
    ANIMATION_DURATION = 300;

    tweetList = container.find('ol').first();

    this.init = function () {

      // TODO: Add validation for list element.
      // TODO: Add validation for required parameters.
      // TODO: Add refresh interval.

      container.addClass(LOADING_CLASS);
      $.ajax({
        type: HTTP_METHOD,
        url: TIMELINE_URL,
        data: generateQueryData(),
        dataType: DATA_TYPE,
        context: this,
        complete: onRequestComplete,
        error: onRequestFailure,
        success: onRequestSuccess
      });
    };

    function generateQueryData() {
      return {
        'screen_name': options['screen_name'],
        'count': options['count'],
        'exclude_replies': options['exclude_replies'],
        'include_rts': options['include_retweets'],
        'include_entities': true
      };
    };

    function onRequestComplete(xhr, status) {
      container.removeClass(LOADING_CLASS);
    };

    function onRequestFailure(xhr, status, error) {
      console.log('Failed!');
    };

    function onRequestSuccess(data, status, xhr) {

      var tweet, formatter;

      $(data).each(function (i, tweetData) {
        tweet = new Tweet(tweetData);
        formatter = new TweetFormatter();
        formatter.format(tweet)
          .hide()
          .appendTo(tweetList)
          .delay(i * ANIMATION_DURATION)
          .slideDown(ANIMATION_DURATION);
      });
    };
  };

  var Tweet = function (data) {

    // TODO: Provide formattedTweet() method.

    this.text = data['text'];
    this.createdAt = new Date(data['created_at']);
  };

  // TODO: This should be a TweetDisplayer.
  // TODO: Only instantiate one TweetDisplayer.
  // TODO: Encode tweet data.
  // TODO: Move tweet loading into its own class.
  var TweetFormatter = function () {
    this.format = function (tweet) {

      var content, date, meta;

      content = $('<p>').text(tweet.text);
      date = $('<span>')
        .addClass('author')
        .text(formatDate(tweet.createdAt));
      meta = $('<p>').append(date);
      return $('<li>').append(content).append(meta);
    };

    function formatDate(date) {

      var month, day;

      month = TweetFormatter.Months[date.getMonth()];
      day = date.getDate();
      return [month, day].join(' ');
    };
  };

  TweetFormatter.Months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };

}(jQuery));
