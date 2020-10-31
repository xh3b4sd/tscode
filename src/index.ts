import * as PostClient  from "./pbf/post/ApiServiceClientPb";
import * as PostCreate  from "./pbf/post/create_pb";
import * as PostDelete  from "./pbf/post/delete_pb";
import * as PostSearch  from "./pbf/post/search_pb";
import * as PostUpdate  from "./pbf/post/update_pb";

export const Post = {
  Client:  PostClient.APIClient,
  CreateI: PostCreate.CreateI,
  CreateO: PostCreate.CreateO,
  DeleteI: PostDelete.DeleteI,
  DeleteO: PostDelete.DeleteO,
  SearchI: PostSearch.SearchI,
  SearchO: PostSearch.SearchO,
  UpdateI: PostUpdate.UpdateI,
  UpdateO: PostUpdate.UpdateO,
}

// ---------------------------------------------------------------------------

import * as UserClient  from "./pbf/user/ApiServiceClientPb";
import * as UserCreate  from "./pbf/user/create_pb";
import * as UserDelete  from "./pbf/user/delete_pb";
import * as UserSearch  from "./pbf/user/search_pb";
import * as UserUpdate  from "./pbf/user/update_pb";

export const User = {
  Client:  UserClient.APIClient,
  CreateI: UserCreate.CreateI,
  CreateO: UserCreate.CreateO,
  DeleteI: UserDelete.DeleteI,
  DeleteO: UserDelete.DeleteO,
  SearchI: UserSearch.SearchI,
  SearchO: UserSearch.SearchO,
  UpdateI: UserUpdate.UpdateI,
  UpdateO: UserUpdate.UpdateO,
}
