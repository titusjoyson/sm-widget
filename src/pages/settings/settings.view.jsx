import React from 'react';
import {
  Header,
  Divider,
  List,
  Checkbox,
  Flex,
} from '@fluentui/react-northstar';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTitleBarTheme,
  toggleDarkTheme,
} from '../../redex/actions/settings';
import './settings.styles.css';

function SettingsView() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  return (
    <Flex column>
      <Header as="h2" content="Settings" style={{ paddingLeft: 20 }} />
      <Divider />
      <List>
        <List.Item
          header="Title Bar Dard Theme"
          headerMedia={
            <Checkbox
              label=""
              toggle
              checked={settings.darkTitleBar}
              onClick={() => {
                dispatch(toggleTitleBarTheme());
              }}
            />
          }
          index={0}
        />
        <List.Item
          header="Container Dard Theme"
          headerMedia={
            <Checkbox
              label=""
              toggle
              checked={settings.darkTheme}
              onClick={() => {
                dispatch(toggleDarkTheme());
              }}
            />
          }
          index={1}
        />
      </List>
    </Flex>
  );
}

export default SettingsView;
