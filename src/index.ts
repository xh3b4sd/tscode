//
// Do not edit. This file was generated via the "pag" command line tool. More
// information about the tool can be found at github.com/xh3b4sd/pag.
//
//     pag generate typescript
//

// -------------------------------------------------------------------------- //

import * as PostClient from "./pbf/post/ApiServiceClientPb";
import * as PostCreate from "./pbf/post/create_pb";
import * as PostDelete from "./pbf/post/delete_pb";
import * as PostSearch from "./pbf/post/search_pb";
import * as PostUpdate from "./pbf/post/update_pb";

export const Post = {
  Client: PostClient.APIClient,
  Create: {
    I: PostCreate.CreateI,
    O: PostCreate.CreateO,
  },
  Delete: {
    I: PostDelete.DeleteI,
    O: PostDelete.DeleteO,
  },
  Search: {
    I: PostSearch.SearchI,
    O: PostSearch.SearchO,
  },
  Update: {
    I: PostUpdate.UpdateI,
    O: PostUpdate.UpdateO,
  },
};

// -------------------------------------------------------------------------- //

// -------------------------------------------------------------------------- //

import * as UserClient from "./pbf/user/ApiServiceClientPb";
import * as UserCreate from "./pbf/user/create_pb";
import * as UserDelete from "./pbf/user/delete_pb";
import * as UserSearch from "./pbf/user/search_pb";
import * as UserUpdate from "./pbf/user/update_pb";

export const User = {
  Client: UserClient.APIClient,
  Create: {
    I: UserCreate.CreateI,
    O: UserCreate.CreateO,
  },
  Delete: {
    I: UserDelete.DeleteI,
    O: UserDelete.DeleteO,
  },
  Search: {
    I: UserSearch.SearchI,
    O: UserSearch.SearchO,
  },
  Update: {
    I: UserUpdate.UpdateI,
    O: UserUpdate.UpdateO,
  },
};

// -------------------------------------------------------------------------- //
