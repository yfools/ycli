import { FunctionComponent, useState } from 'react';
// import _ from 'lodash';
import('../../utils/utils');
// import fn1 from '../../utils/utils1';
import fn2 from '../../utils/utils2';
// import { bound } from '../utils/utils';
console.log(fn2,21);
interface BProps {}

const B: FunctionComponent<BProps> = () => {
  const [error, seterror] = useState();
  return <div>B---{error}</div>;
};
// bound();
export default B;
