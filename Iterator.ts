//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
class Song {
    constructor(
        public title: string,
        public artist: string,
        public durations: number
    ) { }
}

interface CustomeI<T> {
    nextItem(): T;
    currrent(): T;
    key(): number;
}

class PlaylistIterator implements CustomeI<Song> {
    private position = 0;
    constructor(
        private collection: Playlist,
    ) { }
    nextItem(): Song {
        this.position++;
        return this.collection.songs[this.position];
    }
    isIndexValid(index: number): boolean {
        if (index > this.collection.songs.length) {
            return false;
        }
        return true;
    }
    currrent(): Song {
        return this.collection.songs[this.position];
    }

    key() {
        return this.position;
    }
}

class Playlist {
    public songs: Song[] = [];

    getIterator(): CustomeI<Song> {
        return new PlaylistIterator(this);
    }

}