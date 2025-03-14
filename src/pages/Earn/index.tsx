import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
//import { STAKING_REWARDS_INFO, useStakingInfo } from '../../state/stake/hooks'
import { STAKING_REWARDS_INFO_2, useStakingInfo2 } from '../../state/stake/hooks2'
import { STAKING_REWARDS_INFO_3, useStakingInfo3 } from '../../state/stake/hooks3'
import { STAKING_REWARDS_INFO_4, useStakingInfo4 } from '../../state/stake/hooks4'
import { STAKING_REWARDS_INFO_5, useStakingInfo5 } from '../../state/stake/hooks5'
import { TYPE, ExternalLink } from '../../theme'
//import PoolCard from '../../components/earn/PoolCard'
import PoolCard2 from '../../components/earn/PoolCard2'
import PoolCard3 from '../../components/earn/PoolCard3'
import PoolCard4 from '../../components/earn/PoolCard4'
import PoolCard5 from '../../components/earn/PoolCard5'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
import { Countdown } from './Countdown'
import Loader from '../../components/Loader'
import { useActiveWeb3React } from '../../hooks'
//import { JSBI } from '@uniswap/sdk'
//import { BIG_INT_ZERO } from '../../constants'
//import { OutlineCard } from '../../components/Card'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

const DataRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
flex-direction: column;
`};
`

export default function Earn() {
  const { chainId } = useActiveWeb3React()

  // staking info for connected account
  //const stakingInfos = useStakingInfo()
  const stakingInfos2 = useStakingInfo2()
  const stakingInfos3 = useStakingInfo3()
  const stakingInfos4 = useStakingInfo4()
  const stakingInfos5 = useStakingInfo5()

  /**
   * only show staking cards with balance
   * @todo only account for this if rewards are inactive
   */
 // const stakingInfosWithBalance = stakingInfos?.filter(s => JSBI.greaterThan(s.stakedAmount.raw, BIG_INT_ZERO))

  // toggle copy if rewards are inactive
  const stakingRewardsExist = Boolean(typeof chainId === 'number' && (STAKING_REWARDS_INFO_2[chainId]?.length ?? 0) > 0 && 
  (STAKING_REWARDS_INFO_3[chainId]?.length ?? 0) > 0 &&
  (STAKING_REWARDS_INFO_4[chainId]?.length ?? 0) > 0 &&
  (STAKING_REWARDS_INFO_5[chainId]?.length ?? 0) > 0
  )

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>Welcome to the ✨ farm!</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  1. To get started select the sparkle farm that suits you.
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween>
                <TYPE.white fontSize={14}>
                  2. Deposit your Liquidity Provider tokens to start earning rewards.
                </TYPE.white>
              </RowBetween>{' '}
              <RowBetween>
                <TYPE.white fontSize={14}>
                  3. Claim your rewards and enjoy the party!.
                </TYPE.white>
              </RowBetween>{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="https://sparkletoken.medium.com/"
                target="_blank"
              >
                <TYPE.white fontSize={14}>Read more about Sparkleswap.</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>
          <Countdown exactEnd={stakingInfos2?.[0]?.periodFinish} />
        </DataRow>
        <TYPE.white fontSize={14}>Deposit UNI-V2 and start farming ✨</TYPE.white>
        <PoolSection>
        {stakingRewardsExist && stakingInfos2?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos2?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard2 key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} /> 
            })
          )}
        </PoolSection>
        <TYPE.white fontSize={14}>Deposit UNI-V2 and start farming 🦄</TYPE.white>
        <PoolSection>
        {stakingRewardsExist && stakingInfos3?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos3?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard3 key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} /> 
            })
          )}
        </PoolSection>
        <TYPE.white fontSize={14}>Deposit UNI-V2 and start farming ⛽</TYPE.white>
        <PoolSection>
        {stakingRewardsExist && stakingInfos4?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos4?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard4 key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} /> 
            })
          )}
        </PoolSection>
        <TYPE.white fontSize={14}>Deposit UNI-V2 and start farming 💸</TYPE.white>
        <PoolSection>
        {stakingRewardsExist && stakingInfos5?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            'No active rewards'
          ) : (
            stakingInfos5?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard5 key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} /> 
            })
          )}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
