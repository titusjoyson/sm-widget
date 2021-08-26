import React from 'react';
import { Form, FormCheckbox, Header, Divider } from '@fluentui/react-northstar';
import './settings.styles.css';

function SettingsView() {
  return (
    <div
      style={{
        flex: 1,
        overflow: 'auto',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 25,
      }}
      space="between"
    >
      <Header as="h2" content="Settings" />
      <Divider />
      <Form style={{ marginTop: 10 }}>
        <FormCheckbox label="Dard Theme" labelPosition="start" toggle />
      </Form>
    </div>
  );
}

export default SettingsView;
