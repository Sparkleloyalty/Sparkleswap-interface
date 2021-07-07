import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI_3 } from '@uniswap/liquidity-staker/build/StakingRewards3.json'
import { abi as STAKING_REWARDS_FACTORY_ABI_3 } from '@uniswap/liquidity-staker/build/StakingRewardsFactory3.json'

const STAKING_REWARDS_INTERFACE_3 = new Interface(STAKING_REWARDS_ABI_3)

const STAKING_REWARDS_FACTORY_INTERFACE_3 = new Interface(STAKING_REWARDS_FACTORY_ABI_3) 

export { STAKING_REWARDS_FACTORY_INTERFACE_3, STAKING_REWARDS_INTERFACE_3 }
