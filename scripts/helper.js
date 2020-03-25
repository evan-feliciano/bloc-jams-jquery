class Helper {
  playPauseAndUpdate(song) {
    player. playPause(song);
    $('#time-control .duration').text( duration );
    helper.playPauseAndUpdate  = $(player.playPause).val()

  }
};

const helper = new Helper();
