import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react';

const InfoCard = ({ imgUrl, text, btnText, Invarted }) => {
  return (
    <CustomCard
      height="full"
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={Invarted ? "p.purple" : "white"}
    >
      <Tag
        color={Invarted ? "p.purple" : "white"}
        bgColor={Invarted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {btnText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={Invarted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard