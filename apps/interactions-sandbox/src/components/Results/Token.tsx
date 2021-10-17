import { useState } from "react";
import classnames from "classnames";
import { Token as TokenType } from "../../types/web3Interactions";

const Token = ({ token }: { token: TokenType }) => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <div
      key={token.id}
      className={classnames("flex w-64 p-4 rounded-lg justify-center items-center bg-black", {
        "w-full p-8": isExpanded,
      })}
      onClick={() => setExpand((v) => !v)}
    >
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img alt="" className="h-full w-full" src={token?.image || ""} />
      </div>
      <div className="w-full px-8 flex flex-col text-white">
        <div>
          <div className="font-bold text-xs">{token?.name}</div>
          <div className="uppercase">({token?.symbol})</div>
        </div>
        {isExpanded && (
          <div>
            {token?.description && (
              <div className="text-xs bg-white text-black p-4 rounded-md my-4 leading-4">
                {token?.description}
              </div>
            )}
            <div className="my-2">
              <div className="text-xs underline">contract address</div>
              <div className="text-md text-yellow">{token?.contractAddress}</div>
            </div>
            <div className="my-2">
              <div className="text-xs underline">total supply</div>
              <div className="text-md text-yellow">{token?.totalSupply}</div>
            </div>
            <div className="my-2">
              <div className="text-xs underline">homePageUrl</div>
              <div className="text-md text-yellow">{token?.homePageUrl || "-"}</div>
            </div>
            <div className="my-2">
              <div className="text-xs underline">telegram</div>
              <div className="text-md text-yellow">{token?.telegramChannelIdentifier || "-"}</div>
            </div>
            <div className="my-2">
              <div className="text-xs underline">twitter</div>
              <div className="text-md text-yellow">{token?.twitterScreenName || "-"}</div>
            </div>
            <div className="my-2">
              <div className="text-xs underline">reddit</div>
              <div className="text-md text-yellow">{token?.subRedditURL || "-"}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Token;
