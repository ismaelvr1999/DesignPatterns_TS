class DVDPlayer {
    movie: string = "no movie"
    turnOn() {
        console.log("DVD player turned on and playing " + this.movie)
    }

    turnOff() {
        console.log("DVDPLayer turned off")
    }
}


class Projector {
    turnOn() {
        console.log("Projector turned on")
    }

    turnOff() {
        console.log("Projector turned off")
    }
}

class SoundSystem {
    turnOn() {
        console.log("SoundSystem turned on")
    }

    turnOff() {
        console.log("SoundSystem turned off")
    }
}

class HomeTheaterFacade {
    dvdPlayer: DVDPlayer = new DVDPlayer();
    projector: Projector = new Projector();
    soundSystem: SoundSystem = new SoundSystem();

    watchMovie(movie: string) {
        this.dvdPlayer.movie = movie;
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.soundSystem.turnOn();
    }

    endMovie() {
        this.dvdPlayer.turnOff();
        this.projector.turnOff();
        this.soundSystem.turnOff();
    }
}

let homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("The thing");
homeTheater.endMovie();