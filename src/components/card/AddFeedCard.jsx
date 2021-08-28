import React from 'react';
import {
  Card,
  CardBody,
  Flex,
  Button,
  TableAddIcon,
} from '@fluentui/react-northstar';

function AddFeedCard() {
  return (
    <Card>
      <CardBody>
        <Flex column gap="gap.small">
          <Button
            // inverted
            content="Link Feeds"
            icon={<TableAddIcon />}
            // iconOnly
            title="Create"
          />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default AddFeedCard;
