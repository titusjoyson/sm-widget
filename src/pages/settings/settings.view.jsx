import React from 'react';
import {
  Header,
  Divider,
  List,
  Checkbox,
  Flex,
} from '@fluentui/react-northstar';
import './settings.styles.css';

function SettingsView() {
  return (
    <Flex column>
      <Header as="h2" content="Settings" style={{ paddingLeft: 20 }} />
      <Divider />
      <List>
        <List.Item
          header="Title Bar Dard Theme"
          headerMedia={<Checkbox label="" toggle />}
          index={0}
        />
        <List.Item
          header="Container Dard Theme"
          headerMedia={<Checkbox label="" toggle />}
          index={1}
        />
      </List>
    </Flex>
  );
}

export default SettingsView;
