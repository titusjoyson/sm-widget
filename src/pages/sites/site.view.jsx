import React from 'react';
import { Image, Flex, List, Checkbox } from '@fluentui/react-northstar';
import TwitterIcon from '../../assets/icons/twitter.png';
import styles from './site.styes.js';

function SitesView() {
  return (
    <Flex style={styles.container}>
      <List>
        <List.Item
          media={
            <Image key="twitter" src={TwitterIcon} style={styles.siteImage} />
          }
          header="Twitter"
          headerMedia={<Checkbox label="" toggle />}
          index={0}
        />
      </List>
    </Flex>
  );
}

export default SitesView;
