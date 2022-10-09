Latest verified contract on Goerli - 0x4d954AbddF500966AD58dF99F05Fc37a88F70652

1. Ready Set Bet is a platform built on UMA to allow users to take flexible wagers on virtually any
  publicly knowable topic
2. To understand the platform it is important to understand how UMA works. UMA allows users to requestData
  from their oracle that ensures valid answers through game theory. UMA requires certain parameters from the
  the oracle requests that dictate how the request will be processed. For the purposes of this application,
  the three most important parameters are the `ancillaryData`, `reward`, and `liveness`.

  The ancillaryData is the question that we will be asking the oracle (converted to bytes).

  The reward is the fee paid to the validators in surplus of the regular fees that UMA chrages. While on testnets inputting a reward of 0 is ok, on mainnet it should be high enough to incentivize human
  participation as all the majority of questions posed by Ready Set Bet to the oracle would require humans
  to manually answer them.

  The liveness period is the amount of time that is allocated for disputers to assess wrongly answered
  questions. 30 seconds is ok for testing purposes, but UMA generally recommends a minimum of 2 hours
  (measured in seconds) for live production code.
3. To pass through the full cycle of the Ready Set Bet contracts, do the following:
    1. Make sure to have some wETH on your wallet and approve the Ready Set Bet contract
    (0x4d954AbddF500966AD58dF99F05Fc37a88F70652 on Goerli)  to spend some of your wETH tokens
    at 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6 on Goerli
    2. Call the `setBet` function on the contract with the following arguments -
        string calldata _question,
        address _bondCurrency,
        uint256 _reward,
        uint256 _liveness,
        bool _privateBet,
        `If _privateBet is false, _privateBetRecipient should be 0x0000000000000000000000000000000000000000`
        address _privateBetRecipient,
        bool _affirmation,
        uint256 _betAmount,
        uint256 _counterBetAmount
    3. On a separate wallet, do the same as you did on the first wallet, getting some wETH and approving the
    tokens to be spent
    4. Call the `takeBet` function on the Ready Set Bet contract with the second wallet, passing in the betId
    as the argument. The current betId can be found on the read functions of the contract. Note that the
    betId increments when `setBet` is called, so your bet may be the latest betId - 1.
    5. On either one of the wallets, call the `requestData` function, again passing in the betId as an argument.
    6. Now go to the UMA oracle requests UI at https://testnet.oracle.umaproject.org/, pass in either 1 or 0
    into your query. You can also pass in 2 in the case of a unanswerable question, but if you answer with 2
    you can only call `killBet` afterwards which will return the bettors their money (minus fees on mainnet)
    7. After the liveness period (should be 30 seconds) you can call `settleRequest` which will determine who
    won the bet.
    8. Call `claimWinnings` on the wallet that won the bet, again passing in the betId
    9. That is the entirety of the contract cycle. You can also cancel a bet that hasn't been activated after
    the `takeBet` call by calling `cancelBet`. This will close the bet and return you your collateral.


To start the UI, use the standard react commands - `yarn install` and `yarn dev`. The UI is still WIP and does
not interact with the contracts. However, you can read more about the project and plans for the future on the about page of the UI and see the general layout of the app.