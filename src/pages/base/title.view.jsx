import React from 'react';
import { Menu, menuAsToolbarBehavior, Flex } from '@fluentui/react-northstar';
import {
  GridIcon,
  AddIcon,
  SettingsIcon,
  MoreIcon,
  BookmarkIcon,
  TranslationIcon,
  TrashCanIcon,
  MarkAsUnreadIcon,
} from '@fluentui/react-icons-northstar';
import './title.styles.css';

const leftItems = [
  {
    icon: (
      <GridIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'feed',
    'aria-label': 'Feed List',
  },
];

const items = [
  {
    icon: (
      <GridIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'feed',
    'aria-label': 'Feed List',
  },
  {
    icon: (
      <AddIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'add',
    'aria-label': 'Add Tool',
  },
  {
    icon: (
      <SettingsIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'settings',
    'aria-label': 'Settings',
  },
  {
    icon: (
      <MoreIcon
        {...{
          outline: true,
        }}
      />
    ),
    key: 'menuButton2',
    'aria-label': 'More options',
    indicator: false,
    menu: {
      items: [
        {
          key: '5',
          content: 'item1',
          icon: <BookmarkIcon outline />,
        },
        {
          key: 'divider',
          kind: 'divider',
        },
        {
          key: '6',
          content: 'item2',
          icon: <MarkAsUnreadIcon outline />,
        },
        {
          key: '7',
          content: 'item3',
          disabled: true,
          icon: <TranslationIcon outline />,
        },
        {
          key: 'divider2',
          kind: 'divider',
        },
        {
          key: '8',
          content: 'item3',
          icon: <TrashCanIcon outline />,
        },
      ],
    },
  },
];

const MenuExampleToolbarShorthand = () => (
  <>
    <Flex hAlign="stretch" space="between" className="header">
      <Menu
        defaultActiveIndex={0}
        items={leftItems}
        iconOnly
        accessibility={menuAsToolbarBehavior}
        aria-label="Drag Window"
        disabled
        className="header-dragger"
      />
      <Flex.Item hAlign="stretch">
        <Menu
          defaultActiveIndex={0}
          items={items}
          iconOnly
          accessibility={menuAsToolbarBehavior}
          aria-label="Compose Editor"
        />
      </Flex.Item>
    </Flex>
  </>
);

export default MenuExampleToolbarShorthand;
