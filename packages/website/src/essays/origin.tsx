import React from 'react';
import { BlockText } from '../BlockText';
import { HorizontalRuleIcon } from '@primer/octicons-react';
import { Box, Flex, StyledOcticon } from '@primer/components';

export const OriginStory: React.FC = () => {
  return (
    <>
      <BlockText
        lines={story}
        fontFamily={'monospace'}
        color={'antiquewhite'}
        fontSize={16}
      />
      <Flex justifyContent={'center'}>
        <StyledOcticon
          icon={HorizontalRuleIcon}
          size={24}
          color={'antiquewhite'}
        />
      </Flex>
      <BlockText
        lines={conclusion}
        fontFamily={'monospace'}
        color={'antiquewhite'}
        fontSize={16}
      />
      <Box marginBottom={200} />
    </>
  );
};

const story: string[] = [
  "Hi! The name is Milan. I'm a self-taught engineer doing what I love: building great software.",
  '',
  'During college, I like many of my of my peers, decided that medical school was what I wanted to pursue.',
  'After 4 years of many sleepless nights, many extracurriculars (including a part-time job as a computer',
  'tech, some late night EMT shifts, scientific research and volunteer work abroad) I faced rejection from',
  'all 26 medical schools that I had applied to. Ouch.',
  '',
  'I needed something to bide my time while I reapplied the following cycle but unfortunately, the only',
  'job I could find was as a barista at the very school I had just graduated from. This was humbling:',
  'while many of my peers had moved on to start their next big thing, I was still at the same institution,',
  'serving many of my younger peers who had yet to graduate.',
  '',
  'Around the same time, I had interviewed at the Centers for Disease Control and Prevention for a job',
  'as a data manager. I was rejected. I was honest in the interview that I was only looking for a gap-year',
  'job before heading to medical school and they needed someone to stick around longer than that, so the',
  "timing just didn't work out.",
  '',
  'Fast forward a few grueling months and I got a call back from the same division I had interviewed with.',
  'Another team was in the market for someone who could work part-time for a short term project as a',
  'stool collector for a double-blind study they were about to setup. Yep, you read that right.',
  '',
  'At the time I was desperate for any kind of job that would help make my resume stand out to medical',
  'schools in the following cycle and the 20 hours there would pay the same as what I was making doing 40 at',
  'the coffee shop. Knowing that I also had to set myself up for financial success, I decided to do both: I',
  'would block off 20 hours during the week to make ends meet at the CDC and use the rest for shifts at',
  'the coffee shop.',
  '',
  "There was some stipulation during the interview that I'd get to work with computers in addition to",
  'collecting stool which turned out, at least in the early stages, to not be the case. Although it had',
  'been a step up from the coffee shop in terms of prestige, I still had not achieved the impact I was',
  'searching for. During those 20 hours, I tried to be a go-getter: I went out of my way to find as many',
  'non-stool collecting opportunities as possible, hoping that the stars would align somehow, somewhere.',
  '',
  "Eventually, one of my team leads gave me a project I'm sure she thought would keep me busy for a while. She",
  'was working on a project where she needed to figure out the ideal gene sequences to build an assay with',
  'and a colleague helping her with the task was going through a huge spreadsheet filled with protein',
  "references and manually tagging them with metadata from NCBI. I'm not sure what exactly led her to",
  "ask me to work on it instead but at the time I didn't ask too many questions.",
  '',
  "Tagging all the proteins by hand would've taken weeks but it turned out that NCBI had a public API that",
  'could be used to fetch the information. I had some minimal experience with python and I knew no one was',
  'really expecting the results for a while, so I decided to see if I could code something up. Three days later,',
  'I had a well fleshed out spreadsheet with thousands of tagged gene sequences and a sense of accomplishment.',
  '',
  'In the following weeks, my team lead presented her work and mentioned that they were able to put everything',
  'together so fast because I had scripted something up to do all the hard parts. To my great fortune, her',
  'boss was there to hear the success and as it turned out, was in need for someone who had some python-foo.',
  'I was promptly signed up for another 20 hours to come work for her, giving me 40 hours at the CDC. I consequently',
  'left my job as a barista.',
  '',
  'I spent the next 2 years as a coding bootcamp-er of sorts. It was the best possible situation:',
  "during the evenings I'd study up on python, engineering, and computer science fundamentals and during",
  "the day I'd get to apply the knowledge, slowly honing my craft. Through a series of epiphanies I realized",
  "that becoming a doctor wasn't what I really wanted to do with my life. I also knew that I wanted to work",
  "as a software engineer in industry and the CDC wasn't going to help me meet that long term goal, so I left",
  'for a contract software gig and the rest is history.',
];

const conclusion: string[] = [
  'This anecdote is only the beginning of how I got to where I am today. I feel so fortunate to be born during',
  'such a vibrant period of human history. One where the democratization of knowledge has allowed many',
  "stories like mine to exist. My advice to you is this: dream big, take leaps of faith and don't look back.",
  'You get one life, make the most of it!',
];
