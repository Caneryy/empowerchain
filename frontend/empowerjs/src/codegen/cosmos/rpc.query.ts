import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      app: {
        v1alpha1: (await import("./app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("./auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("./authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      autocli: {
        v1: (await import("./autocli/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("./bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("./base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("./consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("./distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("./evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("./gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("./gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("./group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("./nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("./orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      params: {
        v1beta1: (await import("./params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("./slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("./staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("./tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};