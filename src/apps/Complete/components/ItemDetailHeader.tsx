import React, {memo} from 'react';
import {Text} from '../../../components';
import {config} from '../../../utils';

type ItemDetailHeaderProps = {
  title: string;
};

export const ItemDetailHeader = memo(function ItemDetailHeader({
  title,
}: ItemDetailHeaderProps) {
  return (
    <Text
      emphasis="medium"
      style={{padding: config.padding(2)}}
      title={title}
      type="overline"
    />
  );
});
