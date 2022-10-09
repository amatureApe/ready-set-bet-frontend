import { useState, useEffect } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useNotification } from "web3uikit"
import betHandlerAbi from "../constants/betHandlerAbi";

export default function BetBox({ betHandlerAddress, betId }) {
  const { isWeb3Enabled, account } = useMoralis();
  const { runContractFunction: bets, isLoading, isFetching } = useWeb3Contract({
    abi: betHandlerAbi,
    contractAddress: betHandlerAddress,
    functionName: "bets",
    params: {
      betId: betId
    }
  });

  async function updateUI() {
    const bet = await bets();
    console.log("PING", bet);
  }

  const dispatch = useNotification();

  const handleSuccess = async function (tx) {
    await tx.wait(1);
    handleNewNotification(tx);
    updateUI();
  }

  const handleNewNotification = function () {
    dispatch({
      type: "info",
      message: "Transaction Complete!",
      title: "Tx Notification",
      position: "topR",
      icon: "bell",
    })
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI()
    }
  }, [isWeb3Enabled])

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async function () {
          await bets({
            onSuccess: handleSuccess,
            onError: (error) => console.log(error),
          })
        }}
        disabled={isLoading || isFetching}
      >
        {isLoading || isFetching ? (
          <div className="animate spinner-border h-8 w-8 border-b-2 rounded-full"></div>
        ) : (
          <div>Load Bets</div>
        )}
      </button>
    </div>
  )
}
