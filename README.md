# Sparkleswap Interface - Forked From Uniswap

[![Lint](https://github.com/Uniswap/uniswap-interface/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ALint)
[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Sparkleswap -- a protocol for decentralized exchange of Ethereum tokens.

- Swap Interface: [SparkleSwap.finance](https://uniswap.org/)
- Loyalty Platform: [Sparkleloyalty.io](https://sparkleloyalty.io/)
- Twitter: [@Sparkletoken](https://twitter.com/Sparkletoken)
- Telegram: [Sparkle](https://t.me/Sparkleloyalty)
- Medium: [Sparkletoken.medium](https://sparkletoken.medium.com/)

## Accessing the Uniswap Interface

To access the Uniswap Interface, use an IPFS gateway link from the
[latest release - Coming Soon](#), 
or visit [SparkleSwap.finance](https://sparkleswap.finance).


## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing Uniswap Interface 

The SparkleSwap Interface supports swapping against, and adding liquidity to Uniswap V2. However,
if you would like to use the standard Uniswap Interface, please feel free to do so. [Uniswap.org](https://uniswap.org).
