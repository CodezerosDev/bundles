import React from 'react'
import { Timeline } from '@material-ui/lab/'
import { TimelineItem } from '@material-ui/lab/'
import { TimelineSeparator }  from '@material-ui/lab/'
import  { TimelineContent } from '@material-ui/lab/'
import { TimelineDot } from '@material-ui/lab/'
import { Container } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import { RoadmapItemRight } from './RoadmapItemRight'
import { RoadmapItemLeft } from './RoadmapItemLeft'
 
export const Roadmap = () => {
  return (
    <section className="section section-lg">


      <Container className="content-center">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <p className="display-3 text-center text-tertiary">Project Roadmap</p>
          <p className="text-center text-tertiary display-5">Since the Bundles journey started in October 2020, we have achieved a great deal.
Have a look at what we have planned for 2021!</p>

        <div className="space-100"></div>
        </ScrollAnimation>
        <Timeline align="alternate">
          <RoadmapItemRight
            date="Oktober 2020"
            title="Sold out Token sale"
            text="Uniswap listing, Contracts Audited"
            releaseDate="2021-10"
          />
          <RoadmapItemLeft
            date="November 2020"
            title="Launch of Low Risk Prediction Pool"
            text=""
            releaseDate="2020-11"
          />
          <RoadmapItemRight
            date="December 2020"
            title="Launch of High Risk Pool"
            text="Launch of Liquidity Reward Pool 1"
            releaseDate="2021-12"
          />
          <RoadmapItemLeft
            date="January 2021"
            title="Launch of Liquidity Reward Pool 2"
            text=""
            releaseDate="2021-01"
          />
          <RoadmapItemRight
            date="February 2021"
            title="Launch of Liquidity Reward Pool 3"
            text="NFT Launch" 
            releaseDate="2021-03"
          />

          <RoadmapItemLeft
            date="March 2021"
            title="Launch Of NFT Liquidity Reward Pool "
            text="Launch of NFT Bund staking Pool, Partnership with RSK, Token Bridge between ETH and RSK chain, Partnership with Judgement Finance"
            releaseDate="2021-03"
          />
          <RoadmapItemRight
            date="April 2021"
            title="Launch of Liquidity on RSKswap"
            text="Low Risk Pool live on RSK chain, High Risk Pool live on RSK chain, Launch of NFT Marketplace for Bundles NFT series" 
   //         releaseDate="2021-04"
          />

          <RoadmapItemLeft
            date="May 2021"
            title="Launch of Liquidity Reward Pool on RSK  "
            text="Marketplace open to other NFT smart contracts, First NFT Auctions live on Bundles platform"
    //        releaseDate="2021-03"
          />
          <RoadmapItemRight
            date="June 2021"
            title="Prediction Pools open to other RSK tokens"
            text="" 
   //         releaseDate="2021-04"
          />

<RoadmapItemLeft
            date="July 2021"
            title="Launch of Staking reward pool for Prediction Pool fees"
            text=""
    //        releaseDate="2021-03"
          />
          <RoadmapItemRight
            date="August 2021"
            title="Token Bridge to BSC Chain"
            text="Liquidity added on Pancakeswap" 
   //         releaseDate="2021-04"
          />

<RoadmapItemLeft
            date="September 2021"
            title="Launch of Low Risk Pool on BSC"
            text=""
    //        releaseDate="2021-03"
          />
          <RoadmapItemRight
            date="October 2021"
            title="NFT Marketplace integrated with BSC"
            text="" 
   //         releaseDate="2021-04"

          />


          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  )
}
 
