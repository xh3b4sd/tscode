import * as PostClient from "./pbf/post/ApiServiceClientPb";
import * as PostCreate from "./pbf/post/create_pb";
import * as PostDelete from "./pbf/post/delete_pb";
import * as PostSearch from "./pbf/post/search_pb";
import * as PostUpdate from "./pbf/post/update_pb";
export declare const Post: {
    Client: typeof PostClient.APIClient;
    CreateI: typeof PostCreate.CreateI;
    CreateO: typeof PostCreate.CreateO;
    Delete: typeof PostDelete;
    Search: typeof PostSearch;
    Update: typeof PostUpdate;
};
import * as UserClient from "./pbf/user/ApiServiceClientPb";
import * as UserCreate from "./pbf/user/create_pb";
import * as UserDelete from "./pbf/user/delete_pb";
import * as UserSearch from "./pbf/user/search_pb";
import * as UserUpdate from "./pbf/user/update_pb";
export declare const User: {
    Client: typeof UserClient;
    Create: typeof UserCreate;
    Delete: typeof UserDelete;
    Search: typeof UserSearch;
    Update: typeof UserUpdate;
};
//# sourceMappingURL=index.d.ts.map