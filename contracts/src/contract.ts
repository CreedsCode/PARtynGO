// Find all our documentation at https://docs.near.org
import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";
@NearBindgen({})
class HelloNear {
  greeting: string = "Hello";

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.greeting;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ greeting }: { greeting: string }): void {
    near.log(`Saving greeting ${greeting}`);
    this.greeting = greeting;
  }
}


type Game = {
  name: string;
  roomOwner: string;
  joinedUser: {
    name: string;
    isAdmin: boolean;
  }[];
};

@NearBindgen({})

class ParTynGo {
  games: UnorderedMap<Game>;

  constructor() {
    this.games = new UnorderedMap("a");
  }

  @call({}) // This method changes the state, for which it cost gas
  createGame({ _name }: { _name: string }): string {
    near.log(`Creating Game, ${_name}`);
    const id = Math.random().toString(36).substr(2, 6).toUpperCase();
    this.games.set(id, ({ name: _name, roomOwner: near.signerAccountId(), joinedUser: [{ name: near.signerAccountId(), isAdmin: true }], }));
    return id;
  }

  @view({}) // This method is read-only and can be called for free
  getGame({ _id }: { _id: string }): Game {
    return this.games.get(_id);
  }
}