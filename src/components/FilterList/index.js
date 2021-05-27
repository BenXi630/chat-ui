import React from 'react';
import PropTypes from 'prop-types';
import StyledFilterList from './style';
import Input from 'components/Input';
import Filter from 'components/Filter';
import Select from 'components/Select';
import Option from 'components/Option';
import Button from 'components/Button';
import Icon from 'components/Icon';

import { ReactComponent as Plus } from 'assets/icons/plus.svg';

function FilterList({
  children,
  options,
  filterLabel = '列表排序',
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter style={{ padding: '20px 0' }}>
        {options && (
          <Filter.Filters label={filterLabel}>
            <Select>
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}

        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
