import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Text,
  Image,
} from '@fluentui/react-northstar';

function FeedCard() {
  return (
    <Card expandable>
      <CardHeader>
        <Flex gap="gap.small">
          <Avatar
            image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
            label="Direct Quality Assistant"
            name="Kurt Abbott"
            status="unknown"
          />
          <Flex column>
            <Text content="Kurt Abbott" weight="bold" />
            <Text content="Direct Quality Assistant" size="small" />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex column gap="gap.small">
          <Image
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
            fluid
          />
          <Text
            content="Quis dignissimos molestiae. Consequatur quibusdam voluptas nihil non. Omnis dolorum alias quae.
          Molestiae expedita cumque perferendis."
          />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default FeedCard;
