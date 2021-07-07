import { Interface } from '@ethersproject/abi'
import { abi as STAKING_REWARDS_ABI_5} from '@uniswap/liquidity-staker/build/StakingRewards2.json'
import { abi as STAKING_REWARDS_FACTORY_ABI_5 } from '@uniswap/liquidity-staker/build/StakingRewardsFactory2.json'

const STAKING_REWARDS_INTERFACE_5 = new Interface(STAKING_REWARDS_ABI_5)

const STAKING_REWARDS_FACTORY_INTERFACE_5 = new Interface(STAKING_REWARDS_FACTORY_ABI_5) 

export { STAKING_REWARDS_FACTORY_INTERFACE_5, STAKING_REWARDS_INTERFACE_5 }
