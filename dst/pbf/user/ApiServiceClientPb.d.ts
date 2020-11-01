/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as create_pb from './create_pb';
import * as delete_pb from './delete_pb';
import * as search_pb from './search_pb';
import * as update_pb from './update_pb';
export declare class APIClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoCreate: grpcWeb.AbstractClientBase.MethodInfo<create_pb.CreateI, create_pb.CreateO>;
    create(request: create_pb.CreateI, metadata: grpcWeb.Metadata | null): Promise<create_pb.CreateO>;
    create(request: create_pb.CreateI, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: create_pb.CreateO) => void): grpcWeb.ClientReadableStream<create_pb.CreateO>;
    methodInfoDelete: grpcWeb.AbstractClientBase.MethodInfo<delete_pb.DeleteI, delete_pb.DeleteO>;
    delete(request: delete_pb.DeleteI, metadata: grpcWeb.Metadata | null): Promise<delete_pb.DeleteO>;
    delete(request: delete_pb.DeleteI, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: delete_pb.DeleteO) => void): grpcWeb.ClientReadableStream<delete_pb.DeleteO>;
    methodInfoSearch: grpcWeb.AbstractClientBase.MethodInfo<search_pb.SearchI, search_pb.SearchO>;
    search(request: search_pb.SearchI, metadata: grpcWeb.Metadata | null): Promise<search_pb.SearchO>;
    search(request: search_pb.SearchI, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: search_pb.SearchO) => void): grpcWeb.ClientReadableStream<search_pb.SearchO>;
    methodInfoUpdate: grpcWeb.AbstractClientBase.MethodInfo<update_pb.UpdateI, update_pb.UpdateO>;
    update(request: update_pb.UpdateI, metadata: grpcWeb.Metadata | null): Promise<update_pb.UpdateO>;
    update(request: update_pb.UpdateI, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: update_pb.UpdateO) => void): grpcWeb.ClientReadableStream<update_pb.UpdateO>;
}
//# sourceMappingURL=ApiServiceClientPb.d.ts.map