import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI_4 } from '@uniswap/liquidity-staker/build/StakingRewards2.json'
import { abi as STAKING_REWARDS_FACTORY_ABI_4 } from '@uniswap/liquidity-staker/build/StakingRewardsFactory2.json'

const STAKING_REWARDS_INTERFACE_4 = new Interface(STAKING_REWARDS_ABI_4)

const STAKING_REWARDS_FACTORY_INTERFACE_4 = new Interface(STAKING_REWARDS_FACTORY_ABI_4) 

export { STAKING_REWARDS_FACTORY_INTERFACE_4, STAKING_REWARDS_INTERFACE_4 }
