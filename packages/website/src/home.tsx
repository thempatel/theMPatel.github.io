import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  StyledOcticon,
  Text,
} from '@primer/components';
import { ExternalLinks } from './locations';
import { HorizontalRuleIcon, MailIcon, MarkGithubIcon } from '@primer/octicons-react';
import { BlockText } from "./BlockText";
import { OriginStory } from "./essays/origin";

export const Home: React.FC = () => {
  return (
    <Box paddingTop={150}>
      <Flex alignItems={'center'} flexDirection={'column'}>
        <Header />
        <Box marginTop={4} marginBottom={4}>
          <BadgeRow />
        </Box>
        <Box marginBottom={4}>
          <StyledOcticon icon={HorizontalRuleIcon} size={24} color={"antiquewhite"} />
        </Box>
        <Text
          fontFamily={'monospace'}
          color={"antiquewhite"}
          fontSize={16}
        >
          Origin.
        </Text>
        <Bio />
      </Flex>
    </Box>
  );
};

const Bio: React.FC = () => {
  return (
    <Flex alignItems={'center'} flexDirection={'column'}>
      <Box maxWidth={567}>
        <BlockText
          lines={OriginStory}
          fontFamily={'monospace'}
          color={"antiquewhite"}
          fontSize={16}
        />
      </Box>
    </Flex>
  );
}

const Header: React.FC = () => {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <BioBlurb />
        <Avatar
          alt={'@theMPatel'}
          src={ExternalLinks.GitHubAvatarLarge}
          size={260}
        />
      </Flex>
    </>
  );
};

const BioBlurb: React.FC = () => {
  return (
    <Box marginRight={32} maxWidth={275}>
      <Heading fontFamily={'monospace'} color={'whitesmoke'} fontSize={32} mb={1}>
        Milan Patel
      </Heading>
      <Text fontFamily={'monospace'} color={'antiquewhite'} fontSize={20}>
        Software Engineer currently working on Big Data&#8482; problems.
      </Text>
    </Box>
  );
};

const BadgeRow: React.FC = () => {
  return (
    <Flex alignItems={'center'}>
      <Link
        href={ExternalLinks.LinkedIn}
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize={20}
        color={'antiquewhite'}
        mr={4}
      >
        LinkedIn
      </Link>
      <Link href={ExternalLinks.Email} mr={4} color={'antiquewhite'}>
        <StyledOcticon icon={MailIcon} size={24} />
      </Link>
      <Link href={ExternalLinks.GitHub} color={'antiquewhite'}>
        <StyledOcticon icon={MarkGithubIcon} size={24} />
      </Link>
    </Flex>
  );
};
