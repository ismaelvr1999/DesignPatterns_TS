interface MediaPlayerState {
    play(): void;
    pause(): void;
    stop(): void;
}

class MediaPlayer {
    private state: MediaPlayerState = new StoppedState(this);

    play(){
        this.state.play()
    }

    pause() {
        this.state.pause()
    }

    stop() {
        this.state.stop()
    }

    changeState(state: MediaPlayerState){
        this.state = state;
    }
}

class PlayingState implements MediaPlayerState {
    constructor(private context: MediaPlayer){}
    play(): void {
        console.log("the song is already playing")
    }
    pause(): void {
        console.log("song paused");
        this.context.changeState(new PausedState(this.context));
    }
    stop(): void {
        console.log("song stopped");
        this.context.changeState(new StoppedState(this.context));
    }
}

class PausedState implements MediaPlayerState {
    constructor(private context: MediaPlayer){}
    play(): void {
        console.log("song playing")
        this.context.changeState(new PlayingState(this.context));
    }
    pause(): void {
        console.log("the song is already paused");
    }
    stop(): void {
        console.log("song stopped");
        this.context.changeState(new StoppedState(this.context));
    }
}

class StoppedState implements MediaPlayerState {
    constructor(private context: MediaPlayer){}
    play(): void {
        console.log("song playing")
        this.context.changeState(new PlayingState(this.context));
    }
    pause(): void {
        console.log("song paused");
        this.context.changeState(new PausedState(this.context));
    }
    stop(): void {
        console.log("the song is already stopped");
    }
}
let mediaPlayer = new MediaPlayer();
mediaPlayer.play();
mediaPlayer.pause();
mediaPlayer.stop();

