import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI_2 } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import { abi as STAKING_REWARDS_FACTORY_ABI_2 } from '@uniswap/liquidity-staker/build/StakingRewardsFactory.json'

const STAKING_REWARDS_INTERFACE_2 = new Interface(STAKING_REWARDS_ABI_2)

const STAKING_REWARDS_FACTORY_INTERFACE_2 = new Interface(STAKING_REWARDS_FACTORY_ABI_2) 

export { STAKING_REWARDS_FACTORY_INTERFACE_2, STAKING_REWARDS_INTERFACE_2 }
