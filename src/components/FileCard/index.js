import React from 'react';
import PropTypes from 'prop-types';
import StyledFileCard, {
  FileIcon,
  FileName,
  FileSize,
  Options,
  Time,
} from './style';

import { ReactComponent as FileZip } from 'assets/icons/fileZip.svg';
import { ReactComponent as FileExcel } from 'assets/icons/fileExcel.svg';
import { ReactComponent as FileWord } from 'assets/icons/fileWord.svg';
import { ReactComponent as FilePpt } from 'assets/icons/filePpt.svg';
import { ReactComponent as FileImage } from 'assets/icons/fileImage.svg';
import { ReactComponent as FilePdf } from 'assets/icons/filePdf.svg';
import { ReactComponent as OptionsIcon } from 'assets/icons/options.svg';
import Icon from 'components/Icon';

const fileIcons = {
  zip: FileZip,
  excel: FileExcel,
  word: FileWord,
  ppt: FilePpt,
  image: FileImage,
  pdf: FilePdf,
};

function FileCard({ children, ...rest }) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={fileIcons.zip} />
      <FileName>Source Code.zip</FileName>
      <FileSize>1.5M</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>2020年07月28日</Time>
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
};

export default FileCard;
