---
title: "GlueX Automated Rebalancing Hook: Lido’s Case Study"
excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, nemo voluptatem libero labore nesciunt totam quod quaerat odit qui excepturi, officia, esse fugiat commodi! Ullam fugiat iste cum labore eum ex, natus quaerat, repudiandae ipsam, fuga earum quidem sit."
description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita, nemo voluptatem libero labore nesciunt totam quod quaerat odit qui excepturi, officia, esse fugiat commodi! Ullam fugiat iste cum labore eum ex, natus quaerat, repudiandae ipsam, fuga earum quidem sit."
image: "https://images.mirror-media.xyz/publication-images/IovJWdetH4l8YLsUi6JH-.png?height=1200&width=980"
author: "gluex.eth"
publishDate: 2024-07-04
readingTime: 2
draft: false
featured: false
category:
  name: "Case Study"
  slug: "case-study"
tags:
  - name: "Protocol"
    slug: "protocol"
  - name: "DeFi"
    slug: "defi"
  - name: "Cross-chain"
    slug: "cross-chain"
  - name: "Liquidity"
    slug: "liquidity"
    featured: true
    readingTime: 8
---

_This article was written in collaboration with [McNut](https://x.com/damcnuta), contributor at Lido DAO_

In DeFi, liquidity is crucial for the success of tokens like Lido Staked ETH (stETH). Unbalanced liquidity pools can lead to poor execution and slippage. Prolonged trading pressures, especially during market cycles, can disrupt these balances. Thus, creating the need for a rebalancing solution.

Traditional rebalancing strategies involve acquiring large inventories and managing costs of capital. GlueX Protocol introduces a new approach to liquidity pool rebalancing via its Automated Rebalancing Hook. By integrating this hook into [Lido’s Liquidity Pool](https://etherscan.io/address/0xdc24316b9ae028f1497c275eb9192a3ea0f67022#tokentxns), GlueX has incentivized +90M USD worth of rebalancing flow to maintain AMM pool balances, ensuring stable liquidity for stETH.

<!-- Impact of Rebalancing Flow on Lido's Liquidity Pool -->
<img src="https://images.mirror-media.xyz/publication-images/zd-KQIoF30yKSNEtxJxeF.png" alt="Impact of Rebalancing Flow on Lido's Liquidity Pool" class="w-full mb-4 rounded-lg shadow-lg" />

## Lido’s Liquidity Pool Rebalancing Challenge

For some tokens, liquidity can be as valuable to users as the token's utility. This is especially true for Liquid Staking Tokens (LSTs) and largely applies to Liquid Restaking Tokens (LRTs) as well as any receipt token or pegged asset. Lido Staked ETH (stETH), the largest Ethereum LST, has demonstrated the importance of liquidity for success by building deep liquidity pools across various Automated Market Makers (AMMs). However, the effectiveness of several of these pools relies on maintaining a balance. Unbalanced pools in most AMM designs can lead to poor execution or significant slippage for users.

Market cycles often create prolonged one-directional trading pressure for stETH, which can disrupt AMM pool balances and make liquidity a function of balance rather than depth. This issue was highlighted during the peak of the LRT points mania, when stETH became integral to many projects. The success or failure of these projects caused large swings in stETH in secondary markets. One LRT project in particular lost user trust, leading to over a week of continuous sell pressure and causing pools to fall out of balance.

The ebb and flow of liquidity are common, particularly for pegged assets, but are often exacerbated in DeFi by AMMs, where pool imbalances have limited rebalancing mechanisms. While concentrated liquidity pools like those pioneered by Uniswap V3 rely on Liquidity Providers (LPs) or Active Liquidity Managers (ALMs) to rebalance, earlier AMM designs depend solely on market forces. When market forces are insufficient, an alternative solution is needed.

## Rebalancing using Inventory

A common approach to rebalancing a liquidity pool involves acquiring large amounts of inventory in the pool's assets and actively utilizing inventories to shift the balances. This strategy has two cost elements: the cost of acquiring the inventory and the fee charged by the liquidity manager providing the rebalancing service. For Lido’s Liquidity Pool, actively reducing the amount of stETH in the pool would require the liquidity manager to enter long positions in stETH and later rebalance her inventory by unstaking stETH.

## Enabling Automated Rebalancing with GlueX Hooks

Since its launch, GlueX Protocol has accessed over $36 billion in order flow, with a significant portion denominated in ETH. According to our analysis, the amount of accessible rebalancing flow would be more than sufficient to consistently rebalance Lido’s Liquidity Pool whenever necessary if a GlueX Automated Rebalancing Hook were attached to the liquidity pool.

GlueX Automated Rebalancing Hooks are designed to understand the specific needs of the liquidity pool they support. They use an automated rebalancing model that analyzes historical data to determine optimal quote adjustments. These quote adjustments are referred to as the “rebalancing incentives”. Rebalancing incentives are applied according to the following logic

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="center" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>Rebalancing&nbsp;Incentive</mtext><mo>=</mo><mi>m</mi><mi>i</mi><mi>n</mi><mo stretchy="false">(</mo><mtext>Best&nbsp;Competing&nbsp;Quote&nbsp;</mtext><mo>−</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext>Target&nbsp;Pool&nbsp;Quote</mtext><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext>&nbsp;Order&nbsp;Volume</mtext><mo>∗</mo><mi>f</mi><mi>u</mi><mi>n</mi><mi>c</mi><mo stretchy="false">(</mo><mtext>Pool’s&nbsp;unbalanced&nbsp;status</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{gather*}
\text{Rebalancing Incentive} = min(\text{Best Competing Quote } - \\ \text{Target Pool Quote}), \text{ Order Volume} * func(\text{Pool's unbalanced status}))
\end{gather\*} </annotation></semantics></math>

The function func(Pool's balance status) sets the incentive limit per volume, adjusting based on the pool's imbalance. The more unbalanced the pool, the higher the incentive offered, and vice versa.

In April 2024, GlueX attached an Automated Rebalancing Hook to Lido’s Liquidity Farming Pool. Since then, the pool has received over $90 million in ETH from GlueX, having a total rebalancing impact of over $180 million in the desired direction.

Overall, this collaboration has positively impacted all stakeholders in the order flow value chain. Lido benefits from a transparent approach to rebalance their largest liquidity pool. Users serviced by GlueX benefit from improved exchange rates driven by the rebalancing incentive. Curve and Lido’s liquidity providers receive more protocol and liquidity fees from additional order flow.

## What’s Next?

In the coming weeks, we will unveil various aspects of GlueX Protocol, including an in-depth look at GlueX Hooks. We are excited to continue developing solutions that benefit all participants in our ecosystem. If you are interested in integrating these solutions or contributing to future designs, please reach out and join our community.

- [Follow GlueX Protocol on X / Twitter](https://x.com/GluexProtocol)
- [Join the GlueX Telegram Channel](https://t.me/+yf_US2ACNrgyNzY0)
