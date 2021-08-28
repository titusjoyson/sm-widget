import React from 'react';
import {
  Image,
  Flex,
  List,
  Checkbox,
  Header,
  Divider,
} from '@fluentui/react-northstar';
import TwitterIcon from '../../assets/icons/twitter.png';
import styles from './site.styes';

function SitesView() {
  return (
    <Flex column style={styles.container}>
      <Header as="h2" content="Link Sites" style={{ paddingLeft: 20 }} />
      <Divider />
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
