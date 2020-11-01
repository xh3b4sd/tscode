import * as PostClient from "./pbf/post/ApiServiceClientPb";
import * as PostCreate from "./pbf/post/create_pb";
import * as PostDelete from "./pbf/post/delete_pb";
import * as PostSearch from "./pbf/post/search_pb";
import * as PostUpdate from "./pbf/post/update_pb";
export declare const Post: {
    Client: typeof PostClient.APIClient;
    Create: {
        I: typeof PostCreate.CreateI;
        O: typeof PostCreate.CreateO;
    };
    Delete: {
        I: typeof PostDelete.DeleteI;
        O: typeof PostDelete.DeleteO;
    };
    Search: {
        I: typeof PostSearch.SearchI;
        O: typeof PostSearch.SearchO;
    };
    Update: {
        I: typeof PostUpdate.UpdateI;
        O: typeof PostUpdate.UpdateO;
    };
};
import * as UserClient from "./pbf/user/ApiServiceClientPb";
import * as UserCreate from "./pbf/user/create_pb";
import * as UserDelete from "./pbf/user/delete_pb";
import * as UserSearch from "./pbf/user/search_pb";
import * as UserUpdate from "./pbf/user/update_pb";
export declare const User: {
    Client: typeof UserClient.APIClient;
    Create: {
        I: typeof UserCreate.CreateI;
        O: typeof UserCreate.CreateO;
    };
    Delete: {
        I: typeof UserDelete.DeleteI;
        O: typeof UserDelete.DeleteO;
    };
    Search: {
        I: typeof UserSearch.SearchI;
        O: typeof UserSearch.SearchO;
    };
    Update: {
        I: typeof UserUpdate.UpdateI;
        O: typeof UserUpdate.UpdateO;
    };
};
//# sourceMappingURL=index.d.ts.map